import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { createStream, getLiveStreams, getScheduledStreams, scheduleStream, getCategories, getUsers } from '@/lib/feedflix'

// GET - list live or scheduled streams
export async function GET(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const type = req.nextUrl.searchParams.get('type') || 'live'

    const streams = type === 'scheduled'
      ? await getScheduledStreams()
      : await getLiveStreams()

    return NextResponse.json({ streams })
  } catch (error: any) {
    console.error('FeedFlix streams error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST - create or schedule a stream
export async function POST(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await req.json()

    // Auto-resolve user_id and category_id from FeedFlix if not provided
    const [users, categories] = await Promise.all([
      body.user_id ? null : getUsers(),
      body.category_id ? null : getCategories(),
    ])

    const userId = body.user_id || users?.[0]?.id
    const categoryId = body.category_id || categories?.[0]?.id

    if (!userId) {
      return NextResponse.json({ error: 'No FeedFlix users found.' }, { status: 400 })
    }
    if (!categoryId) {
      return NextResponse.json({ error: 'No FeedFlix categories found. Create one first.' }, { status: 400 })
    }

    if (body.scheduled_at) {
      const stream = await scheduleStream({
        title: body.title || 'Scheduled Stream',
        scheduled_at: body.scheduled_at,
        description: body.description,
        user_id: userId,
        category_id: categoryId,
      })
      return NextResponse.json({ success: true, stream })
    }

    const stream = await createStream({
      title: body.title || 'Live Stream',
      user_id: userId,
      category_id: categoryId,
    })
    return NextResponse.json({ success: true, stream })
  } catch (error: any) {
    console.error('FeedFlix create stream error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
