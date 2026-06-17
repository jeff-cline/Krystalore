import { NextResponse } from 'next/server'

// Captures a Voice Analysis lead and forwards it to the ShYft Doctor backend
// when a webhook URL is configured (env SHYFTDOCTOR_WEBHOOK_URL).
export async function POST(req: Request) {
  try {
    const lead = await req.json()
    const webhook = process.env.SHYFTDOCTOR_WEBHOOK_URL
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ source: 'krystalore-voice', ...lead }),
        })
      } catch {
        /* non-blocking */
      }
    }
    console.log('[voice-lead]', lead?.name, lead?.email, lead?.phone)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
