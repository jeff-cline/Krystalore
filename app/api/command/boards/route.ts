import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'
import { getSession } from '@/lib/auth'
import { listUserBoardEmails } from '@/lib/commandStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GOD-only: list the admin accounts whose personal boards the God account can
// toggle through. Returns every GOD/ADMIN user plus whether they've saved a
// board yet, so the switcher can show names even before a board exists.
export async function GET(_req: NextRequest) {
  const s = await getSession()
  const role = (s?.user as any)?.role || ''
  if (role !== 'GOD') return NextResponse.json({ error: 'forbidden' }, { status: 403 })

  let users: { email: string; name: string; role: string }[] = []
  try {
    const rows = await prisma.user.findMany({
      where: { role: { in: ['GOD', 'ADMIN'] as any } },
      select: { email: true, name: true, role: true },
      orderBy: { role: 'asc' },
    })
    users = rows.map((u) => ({ email: (u.email || '').toLowerCase(), name: u.name || u.email || '', role: u.role as any }))
  } catch { /* DB unavailable */ }

  const withBoards = new Set(await listUserBoardEmails())
  const boards = users
    .filter((u) => u.email)
    .map((u) => ({ email: u.email, name: u.name, role: u.role, hasBoard: withBoards.has(u.email) }))

  return NextResponse.json({ boards }, { headers: { 'Cache-Control': 'no-store' } })
}
