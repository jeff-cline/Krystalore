import { NextRequest, NextResponse } from 'next/server'
import { getMuxClient } from '@/lib/mux'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(
  req: NextRequest,
  { params }: { params: { streamId: string } }
) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const mux = getMuxClient()
    const stream = await mux.video.liveStreams.retrieve(params.streamId)
    const dbStream = await prisma.liveStream.findUnique({ where: { streamId: params.streamId } })

    return NextResponse.json({
      streamId: stream.id,
      status: stream.status,
      streamKey: stream.stream_key,
      playbackId: stream.playback_ids?.[0]?.id,
      activeAssetId: stream.active_asset_id,
      rtmpUrl: 'rtmp://global-live.mux.com:5222/app',
      isActive: dbStream?.status === 'active',
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { streamId: string } }
) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const mux = getMuxClient()
    await mux.video.liveStreams.disable(params.streamId)
    await mux.video.liveStreams.delete(params.streamId)

    await prisma.liveStream.updateMany({
      where: { streamId: params.streamId },
      data: { status: 'ended', endedAt: new Date() },
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error stopping stream:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
