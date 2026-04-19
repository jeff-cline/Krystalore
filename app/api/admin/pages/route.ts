import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET() {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const pages = await prisma.cmsPage.findMany({ orderBy: { updatedAt: 'desc' } })
    return NextResponse.json(pages)
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

    const body = await req.json()
    const slug = body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    const page = await prisma.cmsPage.create({
      data: {
        title: body.title,
        slug,
        content: body.content || '',
        seoTitle: body.seoTitle || body.title,
        seoDescription: body.seoDescription || '',
        coverImage: body.coverImage || '',
        isPublished: body.isPublished ?? true,
        isTemplate: body.isTemplate ?? false,
        authorId: (session.user as any).id,
      },
    })

    return NextResponse.json(page)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
