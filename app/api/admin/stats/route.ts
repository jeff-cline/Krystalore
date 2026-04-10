import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const session = await getSession()
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Get all stats in parallel
    const [
      totalUsers,
      totalVideos,
      totalCategories,
      publishedVideos,
      videosByCategory,
      usersByLevel,
      recentVideos,
      storageData
    ] = await Promise.all([
      // Total users
      prisma.user.count(),
      
      // Total videos
      prisma.video.count(),
      
      // Total categories
      prisma.category.count(),
      
      // Published videos
      prisma.video.count({
        where: { isPublished: true }
      }),
      
      // Videos by category
      prisma.video.groupBy({
        by: ['category'],
        _count: { category: true },
        orderBy: { _count: { category: 'desc' } },
        take: 10
      }),
      
      // Users by membership level
      prisma.user.groupBy({
        by: ['membershipLevel'],
        _count: { membershipLevel: true }
      }),
      
      // Recent videos
      prisma.video.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          title: true,
          createdAt: true,
          category: true,
          uploader: {
            select: { name: true }
          }
        }
      }),
      
      // Storage calculation
      prisma.video.aggregate({
        _sum: { fileSize: true }
      })
    ])

    // Format videos by category
    const formattedVideosByCategory = videosByCategory.map(item => ({
      name: item.category,
      count: item._count.category
    }))

    // Format users by level
    const formattedUsersByLevel = usersByLevel.map(item => ({
      level: item.membershipLevel,
      count: item._count.membershipLevel
    }))

    // Calculate storage used (convert bytes to GB)
    const storageUsedBytes = storageData._sum.fileSize || 0
    const storageUsedGB = (storageUsedBytes / (1024 * 1024 * 1024)).toFixed(2)

    const stats = {
      totalUsers,
      totalVideos,
      totalCategories,
      publishedVideos,
      videosByCategory: formattedVideosByCategory,
      usersByLevel: formattedUsersByLevel,
      recentVideos,
      storageUsed: `${storageUsedGB} GB`
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Admin stats error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}