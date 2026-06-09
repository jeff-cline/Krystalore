// Recover the feature-images index: rebuild the 6 site categories as managed
// folders + add the 22 Drive folders (from checkpoint). Save by NAME (no customId)
// to avoid uploadthing's sticky-customId 409. Run from repo root.
import { UTApi, UTFile } from 'uploadthing/server'
import fs from 'node:fs'

for (const line of fs.readFileSync('.env.local', 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
  if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const APP_ID = process.env.UPLOADTHING_APP_ID || '66x17tzw9x'
const INDEX_ID = 'krystalore-gallery-index'
const INDEX_NAME = 'krystalore-gallery-index.json'
const fileUrl = (k) => `https://${APP_ID}.ufs.sh/f/${k}`
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
function buildToken() {
  const raw = process.env.UPLOADTHING_TOKEN || process.env.UPLOADTHING_SECRET || ''
  if (raw.startsWith('sk_')) return Buffer.from(JSON.stringify({ apiKey: raw, appId: APP_ID, regions: ['sea1'] })).toString('base64')
  return raw
}
const api = new UTApi({ token: buildToken() })
const slugify = (t) => t.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// --- 1. Rebuild the 6 site categories from app/images/page.tsx ---
const page = fs.readFileSync('app/images/page.tsx', 'utf8')
const catBlock = page.slice(page.indexOf('const categories'), page.indexOf('\n  ];', page.indexOf('const categories')))
const catRe = /id:\s*'([^']+)',\s*title:\s*'([^']+)'/g
const cats = []
let m
while ((m = catRe.exec(catBlock))) cats.push({ id: m[1], title: m[2], start: m.index })
const recovered = []
let order = 0
for (let i = 0; i < cats.length; i++) {
  const span = catBlock.slice(cats[i].start, i + 1 < cats.length ? cats[i + 1].start : undefined)
  const imgs = []
  const imgRe = /src:\s*'([^']+)'\s*,\s*alt:\s*'([^']*)'/g
  let im
  while ((im = imgRe.exec(span))) imgs.push({ url: im[1], alt: im[2].replace(/\\'/g, "'"), order: imgs.length, featured: imgs.length === 0 })
  if (imgs.length) {
    order += 1
    recovered.push({ id: 'cat-' + cats[i].id, title: cats[i].title, slug: slugify(cats[i].title), order, images: imgs })
    console.log(`  recovered: ${cats[i].title} (${imgs.length})  slug=${slugify(cats[i].title)}`)
  }
}

// --- 2. My 22 Drive folders from checkpoint ---
const built = JSON.parse(fs.readFileSync('/tmp/gallery_built_full.json', 'utf8'))
const ckpt = JSON.parse(fs.readFileSync('/tmp/ut_checkpoint.json', 'utf8'))
const mine = built.map((b) => {
  order += 1
  const imgs = (ckpt[b.slug] || []).map((u, idx) => ({ key: u.key, url: u.url, alt: `${b.folder} — photo ${idx + 1}`, order: idx, featured: idx === 0 }))
  return { id: 'kg-' + b.slug, title: b.folder, slug: b.slug, order, images: imgs }
})
const folders = [...recovered, ...mine]
console.log(`\nTotal: ${folders.length} folders, ${folders.reduce((n, f) => n + f.images.length, 0)} images (${recovered.length} recovered + ${mine.length} Drive).`)

// --- 3. Save by NAME only (no customId) — delete any existing index files first ---
async function listAll() {
  let all = [], offset = 0
  for (let i = 0; i < 60; i++) {
    const res = await api.listFiles({ limit: 500, offset }); const f = res?.files || []
    all = all.concat(f); if (!res?.hasMore || !f.length) break; offset += f.length
  }
  return all
}
const cur = (await listAll()).filter((f) => f.customId === INDEX_ID || f.name === INDEX_NAME)
if (cur.length) { await api.deleteFiles(cur.map((f) => f.key)); await sleep(1500) }
const jf = new UTFile([Buffer.from(JSON.stringify({ folders }))], INDEX_NAME, { type: 'application/json' }) // NO customId
const res = await api.uploadFiles(jf)
if (res?.data) console.log(`\n✅ SAVED index (name-only), key=${res.data.key}`)
else { console.error('\n❌ save failed:', res?.error?.message); process.exit(1) }
