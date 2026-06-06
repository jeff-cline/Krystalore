import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { uploadImage } from '@/lib/feature-images'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const role = (session.user as any).role
  if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  try {
    const form = await req.formData()
    const files = form.getAll('files').filter((f): f is File => f instanceof File)
    const single = form.get('file')
    if (single instanceof File) files.push(single)
    if (!files.length) return NextResponse.json({ error: 'No files provided' }, { status: 400 })

    const results = []
    for (const file of files) {
      if (!(file.type || '').startsWith('image/')) continue
      results.push(await uploadImage(file))
    }
    return NextResponse.json({ images: results })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Upload failed' }, { status: 500 })
  }
}
