import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getStream, endStream } from '@/lib/feedflix'

// GET - get stream details
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const stream = await getStream(params.id)
    return NextResponse.json(stream)
  } catch (error: any) {
    console.error('FeedFlix get stream error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST - end a stream
export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const result = await endStream(params.id)
    return NextResponse.json(result)
  } catch (error: any) {
    console.error('FeedFlix end stream error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
