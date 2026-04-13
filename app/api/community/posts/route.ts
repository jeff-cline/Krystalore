import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const group = req.nextUrl.searchParams.get('group') || undefined
    const page = parseInt(req.nextUrl.searchParams.get('page') || '1')
    const limit = parseInt(req.nextUrl.searchParams.get('limit') || '20')

    const where: any = {}
    if (group && group !== 'all') where.group = group

    const [posts, total] = await Promise.all([
      prisma.communityPost.findMany({
        where,
        include: {
          author: { select: { id: true, name: true, image: true, role: true } },
          _count: { select: { comments: true } },
        },
        orderBy: [{ isPinned: 'desc' }, { createdAt: 'desc' }],
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.communityPost.count({ where }),
    ])

    return NextResponse.json({
      posts: posts.map(p => ({
        ...p,
        commentCount: p._count.comments,
        _count: undefined,
      })),
      total,
      page,
      limit,
    })
  } catch (error: any) {
    console.error('Community posts error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { content, group } = await req.json()
    if (!content?.trim()) return NextResponse.json({ error: 'Content is required' }, { status: 400 })

    const post = await prisma.communityPost.create({
      data: {
        content: content.trim(),
        group: group || 'general',
        authorId: (session.user as any).id,
      },
      include: {
        author: { select: { id: true, name: true, image: true, role: true } },
      },
    })

    return NextResponse.json({ ...post, commentCount: 0 })
  } catch (error: any) {
    console.error('Community post create error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
