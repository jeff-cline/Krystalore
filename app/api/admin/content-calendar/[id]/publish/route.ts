import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

// Convert a calendar item + content into a published BlogPost, link them, mark calendar as published
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const item = await prisma.contentCalendarItem.findUnique({ where: { id: params.id } })
    if (!item) return NextResponse.json({ error: 'Calendar item not found' }, { status: 404 })

    const body = await req.json()

    // Find or create Krystalore user for author
    let author = await prisma.user.findUnique({ where: { email: 'krystalore@thecrewscoach.com' } })
    if (!author) {
      author = await prisma.user.create({
        data: { email: 'krystalore@thecrewscoach.com', name: 'Krystalore Crews', role: 'GOD', membershipLevel: 'VIP' },
      })
    }

    const title = body.title || item.title
    const slug = body.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const publish = body.publish !== false

    let post
    if (item.blogPostId) {
      // Update existing linked post
      post = await prisma.blogPost.update({
        where: { id: item.blogPostId },
        data: {
          title,
          content: body.content || '',
          excerpt: body.excerpt || body.content?.slice(0, 200),
          coverImage: body.coverImage,
          category: body.category || item.category,
          tags: body.tags,
          isPublished: publish,
          publishedAt: publish ? new Date() : null,
          readTime: body.content ? Math.ceil(body.content.split(/\s+/).length / 200) : 4,
          seoTitle: body.seoTitle || title,
          seoDescription: body.seoDescription || body.excerpt,
        },
      })
    } else {
      post = await prisma.blogPost.create({
        data: {
          title,
          slug,
          content: body.content || '',
          excerpt: body.excerpt || body.content?.slice(0, 200) || '',
          coverImage: body.coverImage,
          category: body.category || item.category,
          tags: body.tags,
          authorId: author.id,
          isPublished: publish,
          publishedAt: publish ? new Date() : null,
          readTime: body.content ? Math.ceil(body.content.split(/\s+/).length / 200) : 4,
          seoTitle: body.seoTitle || title,
          seoDescription: body.seoDescription || body.excerpt,
        },
      })
    }

    // Link calendar item to post and update status
    await prisma.contentCalendarItem.update({
      where: { id: item.id },
      data: { blogPostId: post.id, status: publish ? 'published' : 'draft' },
    })

    return NextResponse.json({ post, calendarItemId: item.id })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
