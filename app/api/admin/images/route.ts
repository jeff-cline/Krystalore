import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

interface ManifestImage {
  url: string
  name: string
  folder: string
  size: number
  ext: string
}

let cached: { items: ManifestImage[]; loadedAt: number } | null = null

async function loadManifest(): Promise<ManifestImage[]> {
  if (cached && Date.now() - cached.loadedAt < 60_000) return cached.items
  try {
    const path = join(process.cwd(), 'public', 'images-manifest.json')
    const raw = await readFile(path, 'utf-8')
    const data = JSON.parse(raw)
    const items = Array.isArray(data?.items) ? (data.items as ManifestImage[]) : []
    cached = { items, loadedAt: Date.now() }
    return items
  } catch {
    return []
  }
}

export async function GET(req: NextRequest) {
  const session = await getSession()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const role = (session.user as any).role
  if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const search = (req.nextUrl.searchParams.get('search') || '').trim().toLowerCase()
  const folder = (req.nextUrl.searchParams.get('folder') || '').trim().toLowerCase()

  const [manifest, dbItems] = await Promise.all([
    loadManifest(),
    prisma.mediaItem.findMany({
      where: { type: 'image' },
      orderBy: { createdAt: 'desc' },
      take: 1000,
    }).catch(() => [] as any[]),
  ])

  const seen = new Set<string>()
  const all: Array<{ url: string; name: string; folder: string; source: 'manifest' | 'upload' }> = []

  for (const m of manifest) {
    if (seen.has(m.url)) continue
    seen.add(m.url)
    all.push({ url: m.url, name: m.name, folder: m.folder || '', source: 'manifest' })
  }
  for (const d of dbItems) {
    if (seen.has(d.url)) continue
    seen.add(d.url)
    all.push({ url: d.url, name: d.name || d.url, folder: d.folder || 'uploads', source: 'upload' })
  }

  let filtered = all
  if (folder) filtered = filtered.filter((i) => i.folder.toLowerCase().includes(folder))
  if (search) filtered = filtered.filter((i) => i.url.toLowerCase().includes(search) || i.name.toLowerCase().includes(search))

  const folders = Array.from(new Set(all.map((i) => i.folder).filter(Boolean))).sort()

  return NextResponse.json({ count: filtered.length, total: all.length, folders, items: filtered.slice(0, 1000) })
}
