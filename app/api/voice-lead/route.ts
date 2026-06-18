import { NextResponse } from 'next/server'
import { captureLead } from '@/lib/leadSink'

// Lead intake for the Krystalore voice funnels (/voice and /hnm).
// Delegates to the central lead sink (lib/leadSink.ts), which pushes to the
// ShYft Doctor CRM (-> GoHighLevel, tagged by funnel) and emails Krystalore + Jeff.
export async function POST(req: Request) {
  try {
    const lead = await req.json()
    const result = await captureLead({
      name: lead?.name,
      email: lead?.email,
      phone: lead?.phone,
      message: lead?.help || lead?.message,
      source: lead?.source || 'voice',
      scores: lead?.scores,
    })
    return NextResponse.json({ ok: true, crm: result.crmStatus, forwardedToGHL: result.forwardedToGHL, notified: result.notified })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
