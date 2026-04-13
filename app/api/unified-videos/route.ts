import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import { filterVideosForUser } from '@/lib/permissions'
import { getVaultVideos } from '@/lib/feedflix'
import { getFeedFlixToLocalMap } from '@/lib/category-sync'
import { normalizeLocalVideo, normalizeFeedFlixVideo, mergeAndDedup } from '@/lib/video-merge'
import type { UnifiedVideo } from '@/types/unified-video'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    const session = await getSession()
    const userId = (session?.user as any)?.id
    const userLevel = (session?.user as any)?.membershipLevel || 'FREE'

    // Build local DB query — only published videos (not images)
    const where: any = { isPublished: true, fileType: { not: 'IMAGE' } }
    if (category && category !== 'All') {
      where.OR = [
        { category },
        { categoryRef: { name: category } },
      ]
    }
    if (search) {
      where.AND = [
        ...(where.AND || []),
        {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        },
      ]
    }

    // Fetch local videos and FeedFlix videos in parallel
    const categoryMap = await getFeedFlixToLocalMap()

    // Build FeedFlix query params
    let feedflixCategoryFilter: string | undefined
    if (category && category !== 'All') {
      // Find the feedflix category ID for this local category name
      const ffEntry = Object.entries(categoryMap).find(([, lc]) => lc.name === category)
      feedflixCategoryFilter = ffEntry ? ffEntry[0] : undefined
    }

    const [localVideos, feedflixResult] = await Promise.all([
      prisma.video.findMany({
        where,
        include: {
          uploader: { select: { name: true, image: true } },
          categoryRef: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      getVaultVideos({
        category: feedflixCategoryFilter,
        search: search || undefined,
        per_page: '100',
      }).catch((err) => { console.error('FeedFlix vault fetch failed:', err.message); return null }),
    ])

    // Apply permissions to local videos
    let localUnified: UnifiedVideo[]
    if (userId) {
      const permissionsInfo = await filterVideosForUser(
        userId,
        localVideos.map(v => ({ id: v.id, categoryId: v.categoryId, membershipLevel: v.membershipLevel }))
      )
      localUnified = localVideos.map(v => {
        const perm = permissionsInfo.find(p => p.id === v.id)
        return normalizeLocalVideo(v, perm?.hasAccess || false)
      })
    } else {
      localUnified = localVideos.map(v => normalizeLocalVideo(v, false))
    }

    // Normalize FeedFlix videos
    let feedflixUnified: UnifiedVideo[] = []
    let warning: string | undefined
    if (feedflixResult?.data) {
      feedflixUnified = feedflixResult.data.map(ffv => {
        const localCat = ffv.category_id ? categoryMap[ffv.category_id] : null
        const requiredLevel = localCat?.membershipLevel || 'FREE'
        const levels = ['FREE', 'BASIC', 'PREMIUM', 'VIP']
        const hasAccess = userId
          ? levels.indexOf(userLevel) >= levels.indexOf(requiredLevel)
          : false
        return normalizeFeedFlixVideo(ffv, localCat, hasAccess)
      })
    } else if (feedflixResult === null) {
      warning = 'Some streaming videos temporarily unavailable'
    }

    // Merge and deduplicate
    const allVideos = mergeAndDedup(localUnified, feedflixUnified)
    const total = allVideos.length

    // Paginate
    const start = (page - 1) * limit
    const paginatedVideos = allVideos.slice(start, start + limit)

    return NextResponse.json({
      videos: paginatedVideos,
      total,
      page,
      limit,
      ...(warning ? { warning } : {}),
    })
  } catch (error) {
    console.error('Unified videos error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
