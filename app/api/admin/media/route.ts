import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const folder = req.nextUrl.searchParams.get('folder')
    const type = req.nextUrl.searchParams.get('type')
    const search = req.nextUrl.searchParams.get('search')

    const where: any = {}
    if (folder) where.folder = folder
    if (type) where.type = type
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { folder: { contains: search, mode: 'insensitive' } },
      ]
    }

    const items = await prisma.mediaItem.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 500,
    })

    return NextResponse.json(items)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await req.json().catch(() => ({}))
    const url = (body?.url || '').trim()
    const name = (body?.name || url.split('/').pop() || 'untitled').trim()
    const type = body?.type === 'video' ? 'video' : 'image'
    const folder = (body?.folder || 'general').trim() || 'general'
    const size = Number(body?.size || 0)

    if (!url) {
      return NextResponse.json({ error: 'url is required' }, { status: 400 })
    }

    const item = await prisma.mediaItem.create({
      data: { url, name, type, folder, size: Number.isFinite(size) ? size : 0 },
    })

    return NextResponse.json(item)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
