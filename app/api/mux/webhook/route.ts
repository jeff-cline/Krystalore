import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import crypto from 'crypto'

function verifyWebhookSignature(body: string, signature: string | null, secret: string): boolean {
  if (!signature || !secret) return !secret
  try {
    const expectedSig = crypto.createHmac('sha256', secret).update(body).digest('hex')
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig))
  } catch {
    return false
  }
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('mux-signature')
  const secret = process.env.MUX_WEBHOOK_SECRET || ''

  if (secret && !verifyWebhookSignature(body, signature, secret)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let event: any
  try {
    event = JSON.parse(body)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { type, data } = event
  console.log(`[Mux Webhook] ${type}`, data?.id)

  switch (type) {
    case 'video.live_stream.active': {
      await prisma.liveStream.updateMany({
        where: { streamId: data.id },
        data: { status: 'active', startedAt: new Date() },
      })
      break
    }

    case 'video.live_stream.idle': {
      await prisma.liveStream.updateMany({
        where: { streamId: data.id },
        data: { status: 'idle' },
      })
      break
    }

    case 'video.asset.ready': {
      const asset = data
      const playbackId = asset.playback_ids?.[0]?.id || ''

      // Find the associated live stream to get the host
      const liveStream = await prisma.liveStream.findFirst({
        orderBy: { createdAt: 'desc' },
      })

      if (liveStream) {
        // Check if video already exists for this asset
        const existing = await prisma.video.findFirst({ where: { muxAssetId: asset.id } })
        if (!existing) {
          const video = await prisma.video.create({
            data: {
              title: liveStream.title || 'Live Stream Recording',
              description: `Recording from live stream: ${liveStream.title}`,
              category: 'Live Replays',
              muxAssetId: asset.id,
              muxPlaybackId: playbackId,
              duration: asset.duration || 0,
              isPublished: false, // Admin will review and publish
              membershipLevel: 'BASIC',
              uploaderId: liveStream.hostId,
            },
          })

          // Auto-create marketing snippet
          await prisma.marketingSnippet.create({
            data: {
              videoId: video.id,
              title: video.title,
              description: video.description,
              isLocked: true,
            },
          })
        }
      }
      break
    }

    default:
      console.log(`[Mux Webhook] Unhandled event type: ${type}`)
  }

  return NextResponse.json({ received: true })
}
