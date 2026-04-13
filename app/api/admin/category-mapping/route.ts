import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import {
  getCategoryMappings,
  upsertCategoryMapping,
  deleteCategoryMapping,
  autoSyncCategories,
} from '@/lib/category-sync'
import { getCategories as getFeedFlixCategories } from '@/lib/feedflix'
import prisma from '@/lib/db'

export async function GET() {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const [mappings, feedflixCategories, localCategories] = await Promise.all([
      getCategoryMappings(),
      getFeedFlixCategories().catch(() => []),
      prisma.category.findMany({ orderBy: { sortOrder: 'asc' } }),
    ])

    return NextResponse.json({ mappings, feedflixCategories, localCategories })
  } catch (error: any) {
    console.error('Category mapping GET error:', error)
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

    // Auto-sync mode
    if (body.action === 'auto-sync') {
      const result = await autoSyncCategories()
      return NextResponse.json({ success: true, ...result })
    }

    // Manual mapping
    const { localCategoryId, feedflixCategoryId, feedflixCategoryName } = body
    if (!localCategoryId || !feedflixCategoryId || !feedflixCategoryName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const mapping = await upsertCategoryMapping(localCategoryId, feedflixCategoryId, feedflixCategoryName)
    return NextResponse.json(mapping)
  } catch (error: any) {
    console.error('Category mapping POST error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { id } = await req.json()
    if (!id) return NextResponse.json({ error: 'Mapping ID required' }, { status: 400 })

    await deleteCategoryMapping(id)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Category mapping DELETE error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
