import { UTApi, UTFile } from 'uploadthing/server'

// uploadthing app id is public (appears in file URLs). Token is derived from the
// secret key so it works whether the env holds the sk_ key OR a base64 token.
const APP_ID = process.env.UPLOADTHING_APP_ID || '66x17tzw9x'
const INDEX_ID = 'krystalore-gallery-index'
const INDEX_NAME = 'krystalore-gallery-index.json'

function buildToken(): string {
  const raw = process.env.UPLOADTHING_TOKEN || process.env.UPLOADTHING_SECRET || process.env.UPLOADTHING_API_KEY || ''
  if (!raw) throw new Error('uploadthing not configured: set UPLOADTHING_TOKEN')
  if (raw.startsWith('sk_')) {
    return Buffer.from(JSON.stringify({ apiKey: raw, appId: APP_ID, regions: ['sea1'] })).toString('base64')
  }
  return raw // already a base64 v7 token
}

function api(): UTApi {
  return new UTApi({ token: buildToken() })
}

export function fileUrl(key: string): string {
  return `https://${APP_ID}.ufs.sh/f/${key}`
}

export type GalleryImage = { key: string; url: string; alt?: string; order: number; featured?: boolean }
export type GalleryFolder = { id: string; title: string; slug: string; order: number; images: GalleryImage[] }
export type GalleryIndex = { folders: GalleryFolder[] }

async function findIndexKeys(a: UTApi): Promise<string[]> {
  const keys: string[] = []
  let offset = 0
  for (let i = 0; i < 30; i++) {
    const res: any = await a.listFiles({ limit: 500, offset })
    const files: any[] = res?.files || []
    for (const f of files) if (f.customId === INDEX_ID || f.name === INDEX_NAME) keys.push(f.key)
    if (!res?.hasMore || files.length === 0) break
    offset += files.length
  }
  return keys
}

export async function loadIndex(): Promise<GalleryIndex> {
  try {
    const a = api()
    const keys = await findIndexKeys(a)
    if (!keys.length) return { folders: [] }
    const res = await fetch(fileUrl(keys[0]), { cache: 'no-store' })
    if (!res.ok) return { folders: [] }
    const data = await res.json()
    return data && Array.isArray(data.folders) ? (data as GalleryIndex) : { folders: [] }
  } catch {
    return { folders: [] }
  }
}

export async function saveIndex(data: GalleryIndex): Promise<void> {
  const a = api()
  const old = await findIndexKeys(a)
  if (old.length) await a.deleteFiles(old)
  const f = new UTFile([Buffer.from(JSON.stringify(data))], INDEX_NAME, { type: 'application/json', customId: INDEX_ID })
  const res: any = await a.uploadFiles(f)
  if (res?.error) throw new Error(res.error.message || 'Failed to save gallery index')
}

export async function uploadImage(file: File): Promise<{ key: string; url: string }> {
  const a = api()
  const safe = (file.name || 'image').replace(/[^a-z0-9._-]/gi, '_')
  const uf = new UTFile([await file.arrayBuffer()], safe, { type: file.type || 'image/jpeg' })
  const res: any = await a.uploadFiles(uf)
  const d = res?.data
  if (!d) throw new Error(res?.error?.message || 'Image upload failed')
  return { key: d.key, url: d.ufsUrl || d.url || fileUrl(d.key) }
}

export async function deleteKeys(keys: string[]): Promise<void> {
  if (!keys?.length) return
  await api().deleteFiles(keys)
}
