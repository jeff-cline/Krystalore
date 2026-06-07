import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { loadIndex } from '@/lib/feature-images'

export const runtime = 'nodejs'
export const revalidate = 120

// Committed seed (existing project images) — always available, no uploadthing needed.
async function committedFolders(): Promise<any[]> {
  try {
    const raw = await readFile(join(process.cwd(), 'public', 'feature-images.json'), 'utf-8')
    const d = JSON.parse(raw)
    return Array.isArray(d?.folders) ? d.folders : []
  } catch {
    return []
  }
}

// Public, read-only feed for the /images page. Seed file is the baseline;
// admin-managed (uploadthing) folders override/extend it by slug when available.
export async function GET() {
  const base = await committedFolders()
  let managed: any[] = []
  try { managed = (await loadIndex()).folders || [] } catch { /* uploadthing not reachable in this env */ }

  const bySlug = new Map<string, any>()
  for (const f of base) bySlug.set(f.slug, f)
  for (const f of managed) bySlug.set(f.slug, f)

  const folders = [...bySlug.values()]
    .filter((f) => (f.images || []).length > 0)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return NextResponse.json({ folders })
}
