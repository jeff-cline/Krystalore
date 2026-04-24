import { NextRequest, NextResponse } from 'next/server'
import { getMuxClient } from '@/lib/mux'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

// GET - get current active stream info
export async function GET() {
  try {
    const activeStream = await prisma.liveStream.findFirst({
      where: { status: { in: ['idle', 'active'] } },
      orderBy: { createdAt: 'desc' },
    })

    if (!activeStream) {
      return NextResponse.json({ active: false })
    }

    return NextResponse.json({
      active: activeStream.status === 'active',
      stream: {
        streamId: activeStream.streamId,
        playbackId: activeStream.playbackId,
        status: activeStream.status,
        title: activeStream.title,
        startedAt: activeStream.startedAt?.toISOString() || null,
      },
    })
  } catch (error) {
    console.error('Stream status error:', error)
    return NextResponse.json({ active: false })
  }
}

// POST - create a new live stream
export async function POST(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { title = 'Live Stream' } = await req.json()
    const mux = getMuxClient()

    const stream = await mux.video.liveStreams.create({
      playback_policy: ['public'],
      new_asset_settings: { playback_policy: ['public'] },
      latency_mode: 'low',
    })

    const liveStream = await prisma.liveStream.create({
      data: {
        streamId: stream.id,
        streamKey: stream.stream_key || '',
        playbackId: stream.playback_ids?.[0]?.id || '',
        title,
        status: 'idle',
        hostId: (session.user as any).id,
      },
    })

    return NextResponse.json({
      success: true,
      stream: {
        streamId: stream.id,
        streamKey: stream.stream_key,
        playbackId: liveStream.playbackId,
        rtmpUrl: 'rtmp://global-live.mux.com:5222/app',
      },
    })
  } catch (error: any) {
    console.error('Error creating live stream:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
