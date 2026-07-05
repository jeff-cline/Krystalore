import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { listDynamicDates, upsertDynamicDate, deleteDynamicDate, type DynamicDate } from '@/lib/dynamicDates'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function guard() {
  const session = await getSession()
  if (!session?.user) return { ok: false as const, status: 401, msg: 'Unauthorized' }
  const role = (session.user as any).role
  if (!['GOD', 'ADMIN'].includes(role)) return { ok: false as const, status: 403, msg: 'Forbidden' }
  return { ok: true as const }
}

export async function GET(req: NextRequest) {
  const g = await guard(); if (!g.ok) return NextResponse.json({ error: g.msg }, { status: g.status })
  const q = req.nextUrl.searchParams.get('q') || ''
  return NextResponse.json({ items: await listDynamicDates(q) })
}

export async function POST(req: NextRequest) {
  const g = await guard(); if (!g.ok) return NextResponse.json({ error: g.msg }, { status: g.status })
  const body = (await req.json()) as DynamicDate
  if (!body?.slug) return NextResponse.json({ error: 'slug is required' }, { status: 400 })
  const saved = await upsertDynamicDate(body)
  if (!saved) return NextResponse.json({ error: 'Save failed (no admin user or DB unavailable)' }, { status: 500 })
  return NextResponse.json({ item: saved })
}

export async function DELETE(req: NextRequest) {
  const g = await guard(); if (!g.ok) return NextResponse.json({ error: g.msg }, { status: g.status })
  const slug = req.nextUrl.searchParams.get('slug')
  if (!slug) return NextResponse.json({ error: 'slug is required' }, { status: 400 })
  return NextResponse.json({ ok: await deleteDynamicDate(slug) })
}
