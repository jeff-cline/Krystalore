import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const month = req.nextUrl.searchParams.get('month')
    const year = req.nextUrl.searchParams.get('year')

    let where: any = {}
    if (month && year) {
      const start = new Date(parseInt(year), parseInt(month) - 1, 1)
      const end = new Date(parseInt(year), parseInt(month), 0, 23, 59, 59)
      where.scheduledFor = { gte: start, lte: end }
    }

    const items = await prisma.contentCalendarItem.findMany({
      where,
      orderBy: { scheduledFor: 'asc' },
    })

    return NextResponse.json(items)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const body = await req.json()

    // Bulk create for calendar generation
    if (Array.isArray(body)) {
      const items = await Promise.all(
        body.map((item: any) =>
          prisma.contentCalendarItem.create({
            data: {
              title: item.title,
              topic: item.topic,
              category: item.category || 'General',
              scheduledFor: new Date(item.scheduledFor),
              status: item.status || 'draft',
              notes: item.notes,
            },
          })
        )
      )
      return NextResponse.json({ created: items.length })
    }

    const item = await prisma.contentCalendarItem.create({
      data: {
        title: body.title,
        topic: body.topic,
        category: body.category || 'General',
        scheduledFor: new Date(body.scheduledFor),
        status: body.status || 'draft',
        notes: body.notes,
      },
    })

    return NextResponse.json(item)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
