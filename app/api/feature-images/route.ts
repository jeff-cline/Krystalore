import { NextResponse } from 'next/server'
import { loadIndex } from '@/lib/feature-images'

export const runtime = 'nodejs'
export const revalidate = 120

// Public, read-only feed of the admin-managed gallery for the /images page.
export async function GET() {
  try {
    const index = await loadIndex()
    const folders = (index.folders || [])
      .filter((f) => (f.images || []).length > 0)
      .sort((a, b) => a.order - b.order)
    return NextResponse.json({ folders })
  } catch {
    return NextResponse.json({ folders: [] })
  }
}
