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
  try {
    const index = await loadIndex()
    if (index?.folders?.length) return NextResponse.json(index)
    // uploadthing unreachable or empty → show the committed snapshot (read-only safety net)
    const seed = await committedFolders()
    return NextResponse.json({ folders: seed, fallback: seed.length > 0 })
  } catch (e: any) {
    const seed = await committedFolders()
    if (seed.length) return NextResponse.json({ folders: seed, fallback: true })
    return NextResponse.json({ error: e?.message || 'Failed to load' }, { status: 500 })
  }
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
