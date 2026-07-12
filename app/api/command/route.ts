import { NextRequest, NextResponse } from 'next/server'
import { getBlob, setBlob } from '@/lib/commandStore'
import { getSession } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Command Center shared state.
//   Team keys ('org','contacts','groups') — the shared team board. Gated by the
//     same editor password the board uses client-side (works without login).
//   Personal boards ('user:<email>') — one per admin account. Gated by the login
//     session: you can read/write your OWN; a GOD can READ anyone's (to view them).
const EDIT_PW = 'Krystalore'
const TEAM_KEYS = new Set(['org', 'contacts', 'groups'])

function normKey(raw: string | null | undefined): string | null {
  const k = String(raw || '').trim()
  if (TEAM_KEYS.has(k)) return k
  if (k.startsWith('user:')) {
    const email = k.slice(5).trim().toLowerCase()
    if (email && email.includes('@') && email.length < 200) return 'user:' + email
  }
  return null
}

async function sessionInfo() {
  const s = await getSession()
  const email = (s?.user?.email || '').toLowerCase()
  const role = (s?.user as any)?.role || ''
  return { email, role, loggedIn: !!s?.user }
}

export async function GET(req: NextRequest) {
  const key = normKey(req.nextUrl.searchParams.get('key'))
  if (!key) return NextResponse.json({ error: 'bad key' }, { status: 400 })

  if (key.startsWith('user:')) {
    const owner = key.slice(5)
    const { email, role } = await sessionInfo()
    if (email !== owner && role !== 'GOD') return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  }
  const data = await getBlob(key)
  return NextResponse.json({ key, data }, { headers: { 'Cache-Control': 'no-store' } })
}

export async function POST(req: NextRequest) {
  let body: any = {}
  try { body = await req.json() } catch {}
  const key = normKey(body?.key)
  if (!key) return NextResponse.json({ error: 'bad key' }, { status: 400 })

  if (key.startsWith('user:')) {
    // Only the owner may write their personal board.
    const owner = key.slice(5)
    const { email } = await sessionInfo()
    if (!email || email !== owner) return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  } else {
    // Team board — editor password (unchanged).
    if (String(body?.pw || '') !== EDIT_PW) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const ok = await setBlob(key, body?.data ?? null)
  if (!ok) return NextResponse.json({ error: 'save failed' }, { status: 500 })
  return NextResponse.json({ ok: true, key })
}
