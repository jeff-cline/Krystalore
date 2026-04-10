import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await request.json()
    const { title, description, keywords, categoryId, membershipLevel, muxAssetId, muxPlaybackId, duration, thumbnailUrl } = body

    // Look up category name if categoryId provided
    let categoryName = 'Uncategorized'
    if (categoryId) {
      const cat = await prisma.category.findUnique({ where: { id: categoryId } })
      if (cat) categoryName = cat.name
    }

    const video = await prisma.video.create({
      data: {
        title,
        description,
        keywords,
        categoryId: categoryId || null,
        category: categoryName,
        membershipLevel: membershipLevel || 'FREE',
        muxAssetId: muxAssetId || null,
        muxPlaybackId: muxPlaybackId || null,
        duration: duration || null,
        thumbnailUrl: thumbnailUrl || null,
        seoTitle: title,
        seoDescription: description,
        isPublished: true,
        uploaderId: (session.user as any).id,
      },
    })

    // Auto-generate marketing snippet
    await prisma.marketingSnippet.create({
      data: {
        videoId: video.id,
        title: video.title,
        description: video.description,
        thumbnailUrl: video.thumbnailUrl,
        isLocked: true,
      },
    })

    return NextResponse.json(video)
  } catch (error) {
    console.error('Video upload error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
