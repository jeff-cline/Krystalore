import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getVaultVideo, updateVaultVideo, deleteVaultVideo } from '@/lib/feedflix'

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const video = await getVaultVideo(params.id)
    return NextResponse.json(video)
  } catch (error: any) {
    console.error('FeedFlix vault video error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await req.json()
    const video = await updateVaultVideo(params.id, body)
    return NextResponse.json(video)
  } catch (error: any) {
    console.error('FeedFlix vault update error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const result = await deleteVaultVideo(params.id)
    return NextResponse.json(result)
  } catch (error: any) {
    console.error('FeedFlix vault delete error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
