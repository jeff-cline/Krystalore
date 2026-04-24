import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import { sendBroadcastEmail } from '@/lib/email'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { to, subject, message } = body

    if (!to || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Determine target users based on the 'to' parameter
    let targetQuery: any = {}

    if (to === 'all') {
      targetQuery = {}
    } else if (to.startsWith('category:')) {
      const categorySlug = to.replace('category:', '')
      const category = await prisma.category.findUnique({
        where: { slug: categorySlug },
        select: { membershipLevel: true }
      })

      if (!category) {
        return NextResponse.json({ error: 'Category not found' }, { status: 404 })
      }

      // Users with membership level that grants access to this category
      const levels = ['FREE', 'BASIC', 'PREMIUM', 'VIP']
      const accessLevels = levels.slice(levels.indexOf(category.membershipLevel))
      targetQuery = {
        membershipLevel: { in: accessLevels }
      }
    } else if (to.startsWith('level:')) {
      const level = to.replace('level:', '')
      targetQuery = {
        membershipLevel: level
      }
    } else if (to.startsWith('user:')) {
      const userId = to.replace('user:', '')
      targetQuery = {
        id: userId
      }
    } else {
      return NextResponse.json({ error: 'Invalid target format' }, { status: 400 })
    }

    const users = await prisma.user.findMany({
      where: targetQuery,
      select: { id: true, email: true, name: true, membershipLevel: true }
    })

    if (users.length === 0) {
      return NextResponse.json({ error: 'No users found for this target' }, { status: 404 })
    }

    const recipientEmails = users.map((u) => u.email).filter(Boolean)

    // Try sending real email if SendGrid is configured; otherwise keep as in-app queue/log behavior.
    let emailResult: { sentCount: number } | null = null
    let emailWarning: string | null = null

    try {
      emailResult = await sendBroadcastEmail({
        recipients: recipientEmails,
        subject,
        message,
        fromName: 'Krystalore Admin'
      })
    } catch (emailError: any) {
      emailWarning = emailError?.message || 'Email provider not configured'
    }

    console.log('Notification sent:', {
      from: session.user.email,
      to,
      subject,
      message,
      targetUsers: users.length,
      emailSentCount: emailResult?.sentCount || 0,
      emailWarning,
      timestamp: new Date().toISOString()
    })

    const sentCount = emailResult?.sentCount || 0

    return NextResponse.json({
      success: true,
      message: sentCount > 0
        ? `Email sent to ${sentCount} users`
        : `Notification queued for ${users.length} users${emailWarning ? ' (email not configured)' : ''}`,
      targetCount: users.length,
      sentCount,
      emailWarning,
      targets: users.map(u => ({ email: u.email, name: u.name }))
    })

  } catch (error) {
    console.error('Notification error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}