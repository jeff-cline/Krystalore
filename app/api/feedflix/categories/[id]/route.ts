import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { updateCategory, deleteCategory } from '@/lib/feedflix'

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
    const category = await updateCategory(params.id, body)
    return NextResponse.json(category)
  } catch (error: any) {
    console.error('FeedFlix category update error:', error)
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

    const result = await deleteCategory(params.id)
    return NextResponse.json(result)
  } catch (error: any) {
    console.error('FeedFlix category delete error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
