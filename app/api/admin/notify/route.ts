import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

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
    let targetUsers = []
    let targetQuery: any = {}

    if (to === 'all') {
      // All users
      targetQuery = {}
    } else if (to.startsWith('category:')) {
      // Users with access to specific category
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
      // Users with specific membership level
      const level = to.replace('level:', '')
      targetQuery = {
        membershipLevel: level
      }
    } else {
      return NextResponse.json({ error: 'Invalid target format' }, { status: 400 })
    }

    // Get target users
    const users = await prisma.user.findMany({
      where: targetQuery,
      select: { id: true, email: true, name: true, membershipLevel: true }
    })

    // For now, just log the notification details
    // In the future, this can integrate with SendGrid for actual email sending
    console.log('Notification sent:', {
      from: session.user.email,
      to: to,
      subject: subject,
      message: message,
      targetUsers: users.length,
      timestamp: new Date().toISOString()
    })

    // Create a notification record in the database (you could add a Notification model)
    // For now, we'll just return success
    
    return NextResponse.json({
      success: true,
      message: `Notification queued for ${users.length} users`,
      targetCount: users.length,
      targets: users.map(u => ({ email: u.email, name: u.name }))
    })

  } catch (error) {
    console.error('Notification error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}