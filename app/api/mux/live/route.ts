import { NextRequest, NextResponse } from 'next/server'
import { getMuxClient } from '@/lib/mux'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export const runtime = 'nodejs'

// GET - current stream status. Asks Mux for the REAL status so "LIVE" actually
// lights up the moment a stream connects (no webhook/dashboard config required).
export async function GET() {
  try {
    const ls = await prisma.liveStream.findFirst({
      where: { status: { in: ['idle', 'active'] } },
      orderBy: { createdAt: 'desc' },
    })
    if (!ls) return NextResponse.json({ active: false })

    let muxStatus = ls.status
    try {
      const mux = getMuxClient()
      const s = await mux.video.liveStreams.retrieve(ls.streamId)
      muxStatus = s.status || ls.status // 'idle' | 'active' | 'disabled'
      if (muxStatus === 'active' && ls.status !== 'active') {
        await prisma.liveStream.update({
          where: { id: ls.id },
          data: { status: 'active', startedAt: ls.startedAt ?? new Date() },
        })
      } else if (muxStatus === 'disabled') {
        await prisma.liveStream.update({
          where: { id: ls.id },
          data: { status: 'ended', endedAt: new Date() },
        })
      }
    } catch {
      // Mux unreachable or not configured — fall back to the DB status.
    }

    return NextResponse.json({
      active: muxStatus === 'active',
      stream: {
        streamId: ls.streamId,
        playbackId: ls.playbackId,
        status: muxStatus,
        title: ls.title,
        startedAt: ls.startedAt?.toISOString() || null,
      },
    })
  } catch (error) {
    console.error('Stream status error:', error)
    return NextResponse.json({ active: false })
  }
}

// POST - create a new live stream. Optional `simulcastTargets` restream the live
// to Facebook/YouTube/any custom RTMP at the same time (Mux Simulcast Targets).
export async function POST(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await req.json().catch(() => ({} as any))
    const title = body.title || 'Live Stream'
    const simulcastTargets = Array.isArray(body.simulcastTargets) ? body.simulcastTargets : []

    const validTargets = simulcastTargets
      .filter((t: any) => t && t.url && t.streamKey)
      .map((t: any) => ({
        url: String(t.url).trim(),
        stream_key: String(t.streamKey).trim(),
        passthrough: String(t.platform || 'Custom').slice(0, 250),
      }))

    const createParams: any = {
      playback_policy: ['public'],
      new_asset_settings: { playback_policy: ['public'] },
      latency_mode: 'low',
      reconnect_window: 60,
    }
    if (validTargets.length) createParams.simulcast_targets = validTargets

    const mux = getMuxClient()
    const stream = await mux.video.liveStreams.create(createParams)

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
        whipUrl: 'https://global-live.mux.com/whip',
        simulcastCount: validTargets.length,
      },
    })
  } catch (error: any) {
    console.error('Error creating live stream:', error)
    const credIssue = /token|unauthor|auth|credential|401|api key/i.test(error?.message || '')
    const msg = credIssue
      ? 'Mux is not configured. Set MUX_TOKEN_ID and MUX_TOKEN_SECRET in Vercel to enable Go Live.'
      : (error.message || 'Failed to start stream')
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
