// Make the 29-folder index the canonical customId file so loadIndex finds it
// deterministically. Reads current best index, deletes all index files, re-saves
// WITH customId (retrying the sticky-customId 409).
import { UTApi, UTFile } from 'uploadthing/server'
import fs from 'node:fs'
for (const line of fs.readFileSync('.env.local', 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/); if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const APP_ID = '66x17tzw9x', INDEX_ID = 'krystalore-gallery-index', INDEX_NAME = 'krystalore-gallery-index.json'
const fileUrl = (k) => `https://${APP_ID}.ufs.sh/f/${k}`, sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const raw = process.env.UPLOADTHING_TOKEN || process.env.UPLOADTHING_SECRET
const api = new UTApi({ token: raw.startsWith('sk_') ? Buffer.from(JSON.stringify({ apiKey: raw, appId: APP_ID, regions: ['sea1'] })).toString('base64') : raw })
async function listAll() { let a = [], o = 0; for (let i = 0; i < 60; i++) { const r = await api.listFiles({ limit: 500, offset: o }); const f = r?.files || []; a = a.concat(f); if (!r?.hasMore || !f.length) break; o += f.length } return a }

// 1. find best (most-folders) index content
let all = await listAll()
let idxFiles = all.filter((f) => f.name === INDEX_NAME || f.customId === INDEX_ID)
let best = null
for (const f of idxFiles) { try { const d = await (await fetch(fileUrl(f.key), { cache: 'no-store' })).json(); if (!best || d.folders.length > best.folders.length) best = d } catch {} }
if (!best) { console.error('no index content found'); process.exit(1) }
console.log('Best index content:', best.folders.length, 'folders')

// 2. delete ALL index files (by key) + try by customId
if (idxFiles.length) await api.deleteFiles(idxFiles.map((f) => f.key))
try { await api.deleteFiles([INDEX_ID], { keyType: 'customId' }) } catch {}
await sleep(4000)

// 3. re-upload WITH customId, retrying the sticky 409
let saved = false
for (let attempt = 0; attempt < 6; attempt++) {
  const jf = new UTFile([Buffer.from(JSON.stringify(best))], INDEX_NAME, { type: 'application/json', customId: INDEX_ID })
  const res = await api.uploadFiles(jf)
  if (res?.data) { console.log(`✅ saved WITH customId, key=${res.data.key}`); saved = true; break }
  console.error(`  attempt ${attempt + 1}: ${res?.error?.message}`)
  try { await api.deleteFiles([INDEX_ID], { keyType: 'customId' }) } catch {}
  await sleep(4000)
}
if (!saved) {
  console.log('customId still locked — re-saving NAME-only so an index exists')
  const jf = new UTFile([Buffer.from(JSON.stringify(best))], INDEX_NAME, { type: 'application/json' })
  const res = await api.uploadFiles(jf)
  console.log(res?.data ? `name-only re-saved key=${res.data.key}` : `FAILED: ${res?.error?.message}`)
}
