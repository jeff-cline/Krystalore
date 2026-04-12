import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getBillingBalance, getBillingUsage } from '@/lib/feedflix'

export async function GET(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const role = (session.user as any).role
    if (!['GOD', 'ADMIN'].includes(role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const type = req.nextUrl.searchParams.get('type')
    const days = parseInt(req.nextUrl.searchParams.get('days') || '30')

    if (type === 'usage') {
      const usage = await getBillingUsage(days)
      return NextResponse.json(usage)
    }

    // Default: return balance + usage combined
    const [balance, usage] = await Promise.all([
      getBillingBalance(),
      getBillingUsage(days),
    ])

    return NextResponse.json({ balance, usage })
  } catch (error: any) {
    console.error('FeedFlix billing error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
