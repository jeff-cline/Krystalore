import { NextRequest, NextResponse } from 'next/server'
import { getMuxClient } from '@/lib/mux'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import { getLiveStreams } from '@/lib/feedflix'

// GET - get current active stream info (checks local DB then FeedFlix)
export async function GET() {
  try {
    // Check local DB first
    const activeStream = await prisma.liveStream.findFirst({
      where: { status: { in: ['idle', 'active'] } },
      orderBy: { createdAt: 'desc' },
    })

    if (activeStream) {
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
    }

    // Fall back to FeedFlix — only return streams started within the last hour
    try {
      const feedflixStreams = await getLiveStreams()
      const oneHourAgo = Date.now() - 60 * 60 * 1000
      const recent = feedflixStreams.filter(s =>
        s.started_at && new Date(s.started_at).getTime() > oneHourAgo
      )
      if (recent.length > 0) {
        const latest = recent[0]
        return NextResponse.json({
          active: true,
          source: 'feedflix',
          stream: {
            streamId: latest.id,
            playbackId: latest.mux_playback_id || latest.playback_id,
            status: 'active',
            title: latest.title || 'Live Stream',
            startedAt: latest.started_at || null,
          },
        })
      }
    } catch {
      // FeedFlix unavailable — fall through
    }

    return NextResponse.json({ active: false })
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
