import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getCategories, createCategory } from '@/lib/feedflix'

export async function GET() {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const categories = await getCategories()
    return NextResponse.json(categories)
  } catch (error: any) {
    console.error('FeedFlix categories error:', error)
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
    const category = await createCategory(body)
    return NextResponse.json(category)
  } catch (error: any) {
    console.error('FeedFlix category create error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
