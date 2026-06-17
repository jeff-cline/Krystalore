import { NextResponse } from 'next/server'

// Captures a lead from a Krystalore voice funnel (/voice or /check) and
// forwards it to the ShYft Doctor CRM (shyftdoctor.com), tagged by the URL
// the lead came from. Set the CRM inbound webhook URL via env:
//   SHYFTDOCTOR_WEBHOOK_URL   (used for all funnels)
// Optional per-funnel overrides:
//   SHYFTDOCTOR_WEBHOOK_URL_VOICE
//   SHYFTDOCTOR_WEBHOOK_URL_CHECK
export async function POST(req: Request) {
  try {
    const lead = await req.json()

    // The /url name the lead came from — e.g. 'voice' or 'check'. This is the tag.
    const source = String(lead?.source || 'voice').toLowerCase().replace(/[^a-z0-9-]/g, '') || 'voice'
    const [firstName, ...rest] = String(lead?.name || '').trim().split(/\s+/)
    const pageUrl = `https://krystalore.com/${source}`

    const payload = {
      // CRM-friendly contact fields
      firstName,
      lastName: rest.join(' '),
      name: lead?.name || '',
      email: lead?.email || '',
      phone: lead?.phone || '',
      message: lead?.help || '',
      // Tagging: from the /url name, so the CRM can route/segment by funnel
      source: `krystalore-${source}`,
      tag: source,
      tags: ['krystalore', `krystalore-${source}`, source],
      pageUrl,
      // Snapshot scores from the funnel (informational)
      scores: lead?.scores ?? null,
      submittedAt: lead?.ts ?? null,
    }

    const webhook =
      (source === 'check' && process.env.SHYFTDOCTOR_WEBHOOK_URL_CHECK) ||
      (source === 'voice' && process.env.SHYFTDOCTOR_WEBHOOK_URL_VOICE) ||
      process.env.SHYFTDOCTOR_WEBHOOK_URL

    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch {
        /* non-blocking — never fail the user's submission on a CRM hiccup */
      }
    }

    console.log('[lead]', source, payload.name, payload.email, payload.phone, '->', webhook ? 'CRM' : 'log-only')
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
