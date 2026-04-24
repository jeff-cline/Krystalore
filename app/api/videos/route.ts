import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import { filterVideosForUser } from '@/lib/permissions'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const fileType = searchParams.get('fileType')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    const excludeUncategorized = searchParams.get('excludeUncategorized') === 'true'
    const qualityOnly = searchParams.get('qualityOnly') === 'true'

    const where: any = {}
    if (category && category !== 'All') {
      where.category = category
    }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ]
    }
    if (fileType) {
      where.fileType = fileType
    }
    if (excludeUncategorized) {
      where.categoryId = { not: null }
    }
    if (qualityOnly) {
      // Only return videos with real titles (not raw filenames) and thumbnails/playable sources
      where.AND = [
        ...(where.AND || []),
        { categoryId: { not: null } },
        { OR: [
          { thumbnailUrl: { not: null } },
          { muxPlaybackId: { not: null } },
          { fileUrl: { not: null } },
          { fileKey: { not: null } },
        ]},
      ]
    }

    const [videos, total] = await Promise.all([
      prisma.video.findMany({
        where,
        include: { 
          uploader: { select: { name: true, image: true } },
          categoryRef: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.video.count({ where }),
    ])

    // Add permission information if user is logged in
    const session = await getSession()
    let videosWithPermissions = videos

    if (session?.user) {
      const userId = (session.user as any).id
      const permissionsInfo = await filterVideosForUser(userId, videos.map(v => ({
        id: v.id,
        categoryId: v.categoryId,
        membershipLevel: v.membershipLevel,
      })))

      // Merge permission info back into video objects
      videosWithPermissions = videos.map(video => {
        const permInfo = permissionsInfo.find(p => p.id === video.id)
        return {
          ...video,
          hasAccess: permInfo?.hasAccess || false,
        }
      })
    }

    return NextResponse.json({ videos: videosWithPermissions, total, page, limit })
  } catch (error) {
    console.error('Videos fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await request.json()
    const { id, ...data } = body

    const video = await prisma.video.update({ where: { id }, data })
    return NextResponse.json(video)
  } catch (error) {
    console.error('Video update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { title, description, category, muxAssetId, muxPlaybackId, thumbnailUrl, duration } = body

    const video = await prisma.video.create({
      data: {
        title,
        description,
        category,
        muxAssetId,
        muxPlaybackId,
        thumbnailUrl,
        duration,
        uploaderId: (session.user as any).id,
      },
    })

    return NextResponse.json(video)
  } catch (error) {
    console.error('Video create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
