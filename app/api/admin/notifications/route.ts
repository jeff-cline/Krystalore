import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET() {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const notifications = await prisma.notification.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: { sentBy: { select: { name: true, email: true } } },
    })

    return NextResponse.json(notifications)
  } catch (error: any) {
    console.error('Notifications history error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
