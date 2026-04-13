import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(req: NextRequest) {
  try {
    const category = req.nextUrl.searchParams.get('category')
    const page = parseInt(req.nextUrl.searchParams.get('page') || '1')
    const limit = parseInt(req.nextUrl.searchParams.get('limit') || '12')
    const all = req.nextUrl.searchParams.get('all') === 'true'

    const where: any = all ? {} : { isPublished: true }
    if (category && category !== 'All') where.category = category

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        include: { author: { select: { name: true, image: true } } },
        orderBy: { publishedAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.blogPost.count({ where }),
    ])

    return NextResponse.json({ posts, total, page, limit })
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

    const post = await prisma.blogPost.create({
      data: {
        title: body.title,
        slug,
        content: body.content,
        excerpt: body.excerpt || body.content.slice(0, 200),
        coverImage: body.coverImage,
        category: body.category || 'General',
        tags: body.tags,
        authorId: (session.user as any).id,
        isPublished: body.isPublished || false,
        publishedAt: body.isPublished ? new Date() : null,
        readTime: body.readTime || Math.ceil(body.content.split(/\s+/).length / 200),
        seoTitle: body.seoTitle || body.title,
        seoDescription: body.seoDescription || body.excerpt || body.content.slice(0, 160),
      },
    })

    return NextResponse.json(post)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
