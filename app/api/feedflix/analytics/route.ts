import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getViewership, getEngagement, getContentPerformance } from '@/lib/feedflix'

export async function GET(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const days = parseInt(req.nextUrl.searchParams.get('days') || '30')
    const type = req.nextUrl.searchParams.get('type')

    if (type === 'viewership') {
      const data = await getViewership(days)
      return NextResponse.json(data)
    }

    if (type === 'engagement') {
      const data = await getEngagement(days)
      return NextResponse.json(data)
    }

    if (type === 'content') {
      const data = await getContentPerformance()
      return NextResponse.json(data)
    }

    // Return all analytics combined
    const [viewership, engagement, content] = await Promise.all([
      getViewership(days),
      getEngagement(days),
      getContentPerformance(),
    ])

    return NextResponse.json({ viewership, engagement, content })
  } catch (error: any) {
    console.error('FeedFlix analytics error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
