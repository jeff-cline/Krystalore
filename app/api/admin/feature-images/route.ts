import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { getSession } from '@/lib/auth'
import { loadIndex, saveIndex, deleteKeys, type GalleryIndex } from '@/lib/feature-images'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Committed snapshot of the gallery (public/feature-images.json) — used as a
// read fallback so the manager still shows existing folders when uploadthing
// can't be reached in this environment (e.g. UPLOADTHING_TOKEN missing in prod).
async function committedFolders(): Promise<any[]> {
  try {
    const raw = await readFile(join(process.cwd(), 'public', 'feature-images.json'), 'utf-8')
    const d = JSON.parse(raw)
    return Array.isArray(d?.folders) ? d.folders : []
  } catch { return [] }
}

async function guard() {
  const session = await getSession()
  if (!session?.user) return { ok: false, status: 401, msg: 'Unauthorized' }
  const role = (session.user as any).role
  if (!['GOD', 'ADMIN'].includes(role)) return { ok: false, status: 403, msg: 'Forbidden' }
  return { ok: true as const }
}

export async function GET() {
  const g = await guard()
  if (!g.ok) return NextResponse.json({ error: g.msg }, { status: g.status })
  const seed = await committedFolders()
  let managed: any[] = []
  let managedOk = false
  try { managed = (await loadIndex()).folders || []; managedOk = true } catch { /* uploadthing unreachable */ }
  // Merge like the public route: committed seed is the baseline; managed (uploadthing)
  // folders override/extend by slug. This keeps the curated seed folders visible even
  // once a managed index exists (e.g. after an image is uploaded into an "Uploads" folder).
  const bySlug = new Map<string, any>()
  for (const f of seed) bySlug.set(f.slug, f)
  for (const f of managed) bySlug.set(f.slug, f)
  const folders = [...bySlug.values()].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  if (!folders.length && !managedOk) {
    return NextResponse.json({ error: 'Failed to load gallery' }, { status: 500 })
  }
  return NextResponse.json({ folders, fallback: managed.length === 0 && seed.length > 0 })
}

export async function PUT(req: NextRequest) {
  const g = await guard()
  if (!g.ok) return NextResponse.json({ error: g.msg }, { status: g.status })
  try {
    const body = await req.json().catch(() => ({}))
    const index = body?.index as GalleryIndex
    const removeKeys = (body?.deleteKeys as string[]) || []
    if (!index || !Array.isArray(index.folders)) {
      return NextResponse.json({ error: 'index.folders is required' }, { status: 400 })
    }
    // normalize order fields
    index.folders.forEach((f, fi) => {
      f.order = fi
      ;(f.images || []).forEach((img, ii) => { img.order = ii })
    })
    if (removeKeys.length) await deleteKeys(removeKeys)
    await saveIndex(index)
    return NextResponse.json({ ok: true, index })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to save' }, { status: 500 })
  }
}
