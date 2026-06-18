import { NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import { sendBroadcast, broadcastHtml } from '@/lib/broadcast'

async function guard() {
  const session = await getSession()
  if (!session?.user) return { ok: false as const, status: 401, msg: 'Unauthorized', email: '' }
  const role = (session.user as any).role
  if (!['GOD', 'ADMIN'].includes(role)) return { ok: false as const, status: 403, msg: 'Forbidden', email: '' }
  return { ok: true as const, email: session.user.email || '' }
}

// GET — audience breakdown by membership level (for the compose UI)
export async function GET() {
  const g = await guard()
  if (!g.ok) return NextResponse.json({ error: g.msg }, { status: g.status })
  try {
    const grouped = await prisma.user.groupBy({
      by: ['membershipLevel'],
      _count: { _all: true },
    })
    const levels = grouped.map((x: any) => ({ level: x.membershipLevel || 'FREE', count: x._count._all }))
    const total = levels.reduce((n: number, l: any) => n + l.count, 0)
    return NextResponse.json({ levels, total })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to load audience' }, { status: 500 })
  }
}

// POST — send a broadcast. body: { subject, message, audience: 'ALL'|level, test?: boolean }
export async function POST(request: Request) {
  const g = await guard()
  if (!g.ok) return NextResponse.json({ error: g.msg }, { status: g.status })
  try {
    const { subject, message, audience = 'ALL', test = false } = await request.json()
    if (!subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Subject and message are required.' }, { status: 400 })
    }
    const html = broadcastHtml(subject.trim(), message.trim())

    // Test send — only to the logged-in admin
    if (test) {
      if (!g.email) return NextResponse.json({ error: 'No admin email on file for a test send.' }, { status: 400 })
      const r = await sendBroadcast([g.email], `[TEST] ${subject.trim()}`, html)
      return NextResponse.json({ test: true, ...r, total: 1 })
    }

    const where: any = {}
    if (audience && audience !== 'ALL') where.membershipLevel = audience
    const users = await prisma.user.findMany({ where, select: { email: true } })
    const recipients = users.map((u: any) => u.email).filter(Boolean)
    if (!recipients.length) return NextResponse.json({ error: 'No recipients match that audience.' }, { status: 400 })

    const r = await sendBroadcast(recipients, subject.trim(), html)
    return NextResponse.json({ ...r, total: recipients.length, audience })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to send' }, { status: 500 })
  }
}
