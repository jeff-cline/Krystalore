import { NextRequest, NextResponse } from 'next/server'
import { getBlob, setBlob } from '@/lib/commandStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Shared Command Center state. GET returns the stored blob for ?key=...
// POST { key, data, pw } writes it (guarded by the same editor password the
// /command board uses client-side). Keys in use: 'org' (buckets/links),
// 'contacts', 'groups'.
const EDIT_PW = 'Krystalore'
const ALLOWED = new Set(['org', 'contacts', 'groups'])

function keyOf(raw: string | null): string | null {
  const k = (raw || '').trim().toLowerCase()
  return ALLOWED.has(k) ? k : null
}

export async function GET(req: NextRequest) {
  const key = keyOf(req.nextUrl.searchParams.get('key'))
  if (!key) return NextResponse.json({ error: 'bad key' }, { status: 400 })
  const data = await getBlob(key)
  return NextResponse.json({ key, data }, { headers: { 'Cache-Control': 'no-store' } })
}

export async function POST(req: NextRequest) {
  let body: any = {}
  try { body = await req.json() } catch {}
  const key = keyOf(body?.key)
  if (!key) return NextResponse.json({ error: 'bad key' }, { status: 400 })
  if (String(body?.pw || '') !== EDIT_PW) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const ok = await setBlob(key, body?.data ?? null)
  if (!ok) return NextResponse.json({ error: 'save failed' }, { status: 500 })
  return NextResponse.json({ ok: true, key })
}
