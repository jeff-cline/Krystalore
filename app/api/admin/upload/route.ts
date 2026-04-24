import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import { UTApi, UTFile } from 'uploadthing/server'

export const runtime = 'nodejs'
export const maxDuration = 60

function makeApi(): UTApi {
  const token = process.env.UPLOADTHING_TOKEN || process.env.UPLOADTHING_SECRET || process.env.UPLOADTHING_API_KEY
  if (!token) {
    throw new Error('UploadThing not configured: set UPLOADTHING_TOKEN, UPLOADTHING_SECRET, or UPLOADTHING_API_KEY')
  }
  return new UTApi({ token })
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const form = await req.formData()
    const file = form.get('file')
    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'file (multipart/form-data) is required' }, { status: 400 })
    }
    const folder = String(form.get('folder') || 'cms-uploads').replace(/[^a-z0-9_-]/gi, '-').toLowerCase() || 'cms-uploads'

    const safeName = file.name.replace(/[^a-z0-9._-]/gi, '_')
    const utFile = new UTFile([await file.arrayBuffer()], safeName, { type: file.type || 'application/octet-stream' })

    const api = makeApi()
    const result = await api.uploadFiles(utFile)

    if (!result || (result as any).error) {
      const err = (result as any)?.error?.message || 'Upload failed'
      return NextResponse.json({ error: err }, { status: 502 })
    }

    const data = (result as any).data
    const url: string = data?.ufsUrl || data?.url
    if (!url) return NextResponse.json({ error: 'Upload returned no URL' }, { status: 502 })

    const isImage = (file.type || '').startsWith('image/')

    const item = await prisma.mediaItem.create({
      data: {
        url,
        name: safeName,
        type: isImage ? 'image' : 'video',
        folder,
        size: file.size || 0,
      },
    }).catch(() => null)

    return NextResponse.json({ url, name: safeName, size: file.size, type: file.type, item })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Upload failed' }, { status: 500 })
  }
}
