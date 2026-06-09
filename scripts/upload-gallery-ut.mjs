// Upload local gallery images to uploadthing and register them as Feature-Images
// folders for the live /images page. Idempotent + checkpointed + 409-safe.
// Run from repo root:  node scripts/upload-gallery-ut.mjs
import { UTApi, UTFile } from 'uploadthing/server'
import fs from 'node:fs'
import path from 'node:path'

for (const line of fs.readFileSync('.env.local', 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
  if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const APP_ID = process.env.UPLOADTHING_APP_ID || '66x17tzw9x'
const INDEX_ID = 'krystalore-gallery-index'
const INDEX_NAME = 'krystalore-gallery-index.json'
const CKPT = '/tmp/ut_checkpoint.json'
const fileUrl = (k) => `https://${APP_ID}.ufs.sh/f/${k}`
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
function buildToken() {
  const raw = process.env.UPLOADTHING_TOKEN || process.env.UPLOADTHING_SECRET || ''
  if (raw.startsWith('sk_')) return Buffer.from(JSON.stringify({ apiKey: raw, appId: APP_ID, regions: ['sea1'] })).toString('base64')
  return raw
}
const api = new UTApi({ token: buildToken() })

async function listAll() {
  let all = [], offset = 0
  for (let i = 0; i < 60; i++) {
    const res = await api.listFiles({ limit: 500, offset })
    const files = res?.files || []
    all = all.concat(files)
    if (!res?.hasMore || !files.length) break
    offset += files.length
  }
  return all
}

const built = JSON.parse(fs.readFileSync('/tmp/gallery_built_full.json', 'utf8'))
const ROOT = 'public/images/gallery'
const mySlugs = new Set(built.map((b) => b.slug))

// --- load current index + protected keys ---
const allFiles = await listAll()
const indexFiles = allFiles.filter((f) => f.customId === INDEX_ID || f.name === INDEX_NAME)
let existing = { folders: [] }
if (indexFiles.length) {
  try { const r = await fetch(fileUrl(indexFiles[0].key), { cache: 'no-store' }); if (r.ok) existing = await r.json() } catch {}
}
const protectedKeys = new Set()
for (const f of existing.folders || []) for (const im of f.images || []) if (im.key) protectedKeys.add(im.key)
const keptFolders = (existing.folders || []).filter((f) => !mySlugs.has(f.slug))
console.log(`Index: ${(existing.folders || []).length} folders; keeping ${keptFolders.length} (non-gallery).`)

// --- resume from checkpoint if complete ---
let checkpoint = {}
if (fs.existsSync(CKPT)) { try { checkpoint = JSON.parse(fs.readFileSync(CKPT, 'utf8')) } catch {} }
const complete = built.every((b) => Array.isArray(checkpoint[b.slug]) && checkpoint[b.slug].length === b.images.length)

if (complete) {
  console.log('Checkpoint complete — skipping upload, saving index from checkpoint.')
} else {
  // --- cleanup my orphans (NNN.jpg or slug-NNN.jpg) not referenced by the index ---
  const orphanRe = /^(?:[a-z0-9-]+-)?\d{3}\.jpg$/i
  const orphans = allFiles.filter((f) => orphanRe.test(f.name || '') && !protectedKeys.has(f.key) && f.customId !== INDEX_ID)
  console.log(`Deleting ${orphans.length} orphaned image(s) from prior run...`)
  for (let i = 0; i < orphans.length; i += 100) {
    await api.deleteFiles(orphans.slice(i, i + 100).map((f) => f.key))
  }

  // --- upload, unique names, checkpoint per folder ---
  for (const b of built) {
    if (Array.isArray(checkpoint[b.slug]) && checkpoint[b.slug].length === b.images.length) { console.log(`${b.folder}: cached`); continue }
    const files = b.images.map((rel) => path.join(ROOT, rel))
    const out = []
    const B = 20
    for (let i = 0; i < files.length; i += B) {
      const chunk = files.slice(i, i + B)
      const ufs = chunk.map((fp, j) => new UTFile([fs.readFileSync(fp)], `${b.slug}-${String(i + j + 1).padStart(3, '0')}.jpg`, { type: 'image/jpeg' }))
      let res
      for (let a = 0; a < 4; a++) { try { res = await api.uploadFiles(ufs); break } catch (e) { if (a === 3) throw e; await sleep(1500 * (a + 1)) } }
      res.forEach((r, j) => { if (r?.data) out.push({ key: r.data.key, url: r.data.ufsUrl || fileUrl(r.data.key) }); else console.error('  fail', path.basename(chunk[j]), r?.error?.message) })
      process.stdout.write(`  ${b.folder}: ${out.length}/${files.length}\r`)
    }
    checkpoint[b.slug] = out
    fs.writeFileSync(CKPT, JSON.stringify(checkpoint))
    console.log(`\n${b.folder}: ${out.length} uploaded`)
  }
}

// --- build combined index ---
let order = keptFolders.reduce((m, f) => Math.max(m, f.order || 0), 0)
const myFolders = built.map((b) => {
  order += 1
  const imgs = checkpoint[b.slug] || []
  return { id: 'kg-' + b.slug, title: b.folder, slug: b.slug, order, images: imgs.map((u, idx) => ({ key: u.key, url: u.url, alt: `${b.folder} — photo ${idx + 1}`, order: idx, featured: idx === 0 })) }
})
const folders = [...keptFolders, ...myFolders]

// --- save index, 409-safe (delete existing, retry) ---
async function saveIndex() {
  for (let attempt = 0; attempt < 6; attempt++) {
    const cur = (await listAll()).filter((f) => f.customId === INDEX_ID || f.name === INDEX_NAME)
    if (cur.length) { await api.deleteFiles(cur.map((f) => f.key)); await sleep(2500) }
    const jf = new UTFile([Buffer.from(JSON.stringify({ folders }))], INDEX_NAME, { type: 'application/json', customId: INDEX_ID })
    const res = await api.uploadFiles(jf)
    if (res?.data) return true
    console.error(`  index save attempt ${attempt + 1} failed: ${res?.error?.message}`)
    await sleep(2500)
  }
  return false
}
const ok = await saveIndex()
const total = folders.reduce((n, f) => n + f.images.length, 0)
if (ok) console.log(`\n✅ SAVED index: ${folders.length} folders, ${total} images (kept ${keptFolders.length} of yours + ${myFolders.length} from Drive).`)
else { console.error('\n❌ index save failed after retries'); process.exit(1) }
