// READ-ONLY diagnostic: report uploadthing index + file state. Changes nothing.
import { UTApi } from 'uploadthing/server'
import fs from 'node:fs'

for (const line of fs.readFileSync('.env.local', 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
  if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
}
const APP_ID = process.env.UPLOADTHING_APP_ID || '66x17tzw9x'
const INDEX_ID = 'krystalore-gallery-index'
const INDEX_NAME = 'krystalore-gallery-index.json'
const fileUrl = (k) => `https://${APP_ID}.ufs.sh/f/${k}`
function buildToken() {
  const raw = process.env.UPLOADTHING_TOKEN || process.env.UPLOADTHING_SECRET || ''
  if (raw.startsWith('sk_')) return Buffer.from(JSON.stringify({ apiKey: raw, appId: APP_ID, regions: ['sea1'] })).toString('base64')
  return raw
}
const api = new UTApi({ token: buildToken() })

let all = []
let offset = 0
for (let i = 0; i < 60; i++) {
  const res = await api.listFiles({ limit: 500, offset })
  const files = res?.files || []
  all = all.concat(files)
  if (!res?.hasMore || !files.length) break
  offset += files.length
}
console.log('TOTAL files in uploadthing account:', all.length)

const indexFiles = all.filter((f) => f.customId === INDEX_ID || f.name === INDEX_NAME)
console.log('Index files (customId/name match):', indexFiles.length, indexFiles.map((f) => ({ key: f.key, status: f.status })))

const threeDigit = all.filter((f) => /^\d{3}\.jpg$/i.test(f.name || ''))
console.log('Files named NNN.jpg (my run-1 uploads):', threeDigit.length)

const slugPrefixed = all.filter((f) => /^[a-z0-9-]+-\d{3}\.jpg$/i.test(f.name || ''))
console.log('Files named <slug>-NNN.jpg:', slugPrefixed.length)

if (indexFiles.length) {
  try {
    const r = await fetch(fileUrl(indexFiles[0].key), { cache: 'no-store' })
    if (r.ok) {
      const d = await r.json()
      const folders = d.folders || []
      console.log('\nCURRENT INDEX has', folders.length, 'folders, ', folders.reduce((n, f) => n + (f.images || []).length, 0), 'images:')
      for (const f of folders) console.log('   -', f.title, '(' + (f.images || []).length + ')', 'slug=' + f.slug)
    } else console.log('index fetch not ok:', r.status)
  } catch (e) { console.log('index fetch error:', e.message) }
} else {
  console.log('\n!!! NO INDEX FILE EXISTS — the live /images managed feed is currently empty.')
}
