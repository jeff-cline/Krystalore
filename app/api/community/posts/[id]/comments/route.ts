import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const comments = await prisma.communityComment.findMany({
      where: { postId: params.id },
      include: { author: { select: { id: true, name: true, image: true, role: true } } },
      orderBy: { createdAt: 'asc' },
    })

    return NextResponse.json(comments)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { content } = await req.json()
    if (!content?.trim()) return NextResponse.json({ error: 'Content is required' }, { status: 400 })

    const comment = await prisma.communityComment.create({
      data: {
        content: content.trim(),
        postId: params.id,
        authorId: (session.user as any).id,
      },
      include: { author: { select: { id: true, name: true, image: true, role: true } } },
    })

    return NextResponse.json(comment)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
