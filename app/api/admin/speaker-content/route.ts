import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import {
  getSpeakerContent,
  saveSpeakerContent,
  resetSpeakerContent,
  defaultSpeakerContent,
} from '@/lib/speakerContent'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function guard() {
  const session = await getSession()
  if (!session?.user) return { ok: false as const, status: 401, msg: 'Unauthorized' }
  const role = (session.user as any).role
  if (!['GOD', 'ADMIN'].includes(role)) return { ok: false as const, status: 403, msg: 'Forbidden' }
  return { ok: true as const }
}

export async function GET() {
  const g = await guard()
  if (!g.ok) return NextResponse.json({ error: g.msg }, { status: g.status })
  return NextResponse.json({ content: await getSpeakerContent(), defaults: defaultSpeakerContent() })
}

export async function POST(req: NextRequest) {
  const g = await guard()
  if (!g.ok) return NextResponse.json({ error: g.msg }, { status: g.status })

  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Guard against wiping a section by posting an empty array.
  for (const k of ['features', 'videoCategories', 'onStage'] as const) {
    if (body[k] !== undefined && !Array.isArray(body[k])) {
      return NextResponse.json({ error: `${k} must be an array` }, { status: 400 })
    }
  }

  const saved = await saveSpeakerContent(body)
  if (!saved) {
    return NextResponse.json({ error: 'Save failed (no admin user or DB unavailable)' }, { status: 500 })
  }
  return NextResponse.json({ content: saved })
}

/** Reset to the built-in defaults. */
export async function DELETE() {
  const g = await guard()
  if (!g.ok) return NextResponse.json({ error: g.msg }, { status: g.status })
  const ok = await resetSpeakerContent()
  return NextResponse.json({ ok, content: await getSpeakerContent() })
}
