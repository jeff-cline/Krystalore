import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import { sendBulkNotification } from '@/lib/email'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await request.json()
    const { to, subject, message } = body

    if (!to || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Determine target users
    let targetQuery: any = {}

    if (to === 'all') {
      targetQuery = {}
    } else if (to.startsWith('category:')) {
      const categorySlug = to.replace('category:', '')
      const category = await prisma.category.findUnique({
        where: { slug: categorySlug },
        select: { membershipLevel: true },
      })
      if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 })
      const levels = ['FREE', 'BASIC', 'PREMIUM', 'VIP']
      const accessLevels = levels.slice(levels.indexOf(category.membershipLevel))
      targetQuery = { membershipLevel: { in: accessLevels } }
    } else if (to.startsWith('level:')) {
      const level = to.replace('level:', '')
      targetQuery = { membershipLevel: level }
    } else {
      return NextResponse.json({ error: 'Invalid target format' }, { status: 400 })
    }

    const users = await prisma.user.findMany({
      where: targetQuery,
      select: { email: true, name: true },
    })

    // Send emails via SendGrid
    const sentCount = await sendBulkNotification(users, subject, message)

    // Store notification record
    await prisma.notification.create({
      data: {
        subject,
        message,
        target: to,
        sentCount,
        sentById: (session.user as any).id,
      },
    })

    return NextResponse.json({
      success: true,
      message: `Notification sent to ${sentCount} of ${users.length} users`,
      sentCount,
      targetCount: users.length,
    })
  } catch (error: any) {
    console.error('Notification error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
