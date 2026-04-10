import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import { filterCategoriesForUser } from '@/lib/permissions'

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { sortOrder: 'asc' },
      include: {
        _count: { select: { videos: true } },
      },
    })

    // Count videos by both categoryId relation AND category name string
    // Many videos only have the category name set, not categoryId
    const videoCounts = await prisma.video.groupBy({
      by: ['category'],
      _count: { id: true },
    })
    const countByName: Record<string, number> = {}
    for (const vc of videoCounts) {
      countByName[vc.category] = vc._count.id
    }

    let result = categories.map((c) => ({
      ...c,
      videoCount: countByName[c.name] || c._count.videos || 0,
      _count: undefined,
    }))

    // Add permission information if user is logged in
    const session = await getSession()
    if (session?.user) {
      const userId = (session.user as any).id
      const categoriesWithPermissions = await filterCategoriesForUser(userId, result)
      result = categoriesWithPermissions
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Categories fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await request.json()
    const { name, slug, description, sortOrder, membershipLevel } = body

    const category = await prisma.category.create({
      data: { name, slug, description, sortOrder: sortOrder || 0, membershipLevel: membershipLevel || 'FREE' },
    })

    return NextResponse.json(category)
  } catch (error) {
    console.error('Category create error:', error)
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

    const category = await prisma.category.update({
      where: { id },
      data,
    })

    return NextResponse.json(category)
  } catch (error) {
    console.error('Category update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
