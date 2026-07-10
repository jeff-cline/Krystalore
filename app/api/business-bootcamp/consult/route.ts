import { NextRequest, NextResponse } from 'next/server'
import { sendViaZapmail } from '@/lib/zapmail'

// Business Boot Camp free-consultation intake.
// 1) Saves to the core lead funnel (ShYft -> GoHighLevel, tagged by program).
// 2) Emails Krystalore (cc Jeff) — subject "Business Boot Camp" — a referral for follow-up
//    on Business Boot Camp / World Changers / Activate / RocketShip.
const SHYFT_LEADS_URL = 'https://shyftdoctor.com/api/leads'
const TO = 'krystalore@thecrewscoach.com'
const CC = 'jeff.cline@me.com'

const esc = (v: unknown) => String(v ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c] as string))
const row = (l: string, v: string) => (v ? `<tr><td style="padding:6px 0;color:#888;font-size:13px;width:140px;vertical-align:top;">${l}</td><td style="padding:6px 0;color:#1a1a1a;font-size:15px;font-weight:600;">${esc(v)}</td></tr>` : '')

export async function POST(request: NextRequest) {
  try {
    const b = await request.json()
    const { program, firstName, lastName, city, state, zip, email, phone, comments } = b
    if (!firstName || !email) {
      return NextResponse.json({ error: 'First name and email are required.' }, { status: 400 })
    }
    const name = [firstName, lastName].filter(Boolean).join(' ')
    const prog = program || 'Business Boot Camp'
    const location = [city, state, zip].filter(Boolean).join(', ')

    const note = [
      `Business Boot Camp — free consultation request`,
      `Program of interest: ${prog}`,
      location ? `Location: ${location}` : '',
      phone ? `Phone: ${phone}` : '',
      comments ? `Comments: ${comments}` : '',
    ].filter(Boolean).join('\n')

    // 1) Core lead funnel (ShYft -> GoHighLevel), tagged by program.
    const apiKey = process.env.SHYFT_API_KEY
    if (apiKey) {
      try {
        await fetch(SHYFT_LEADS_URL, {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'x-api-key': apiKey },
          body: JSON.stringify({ name, email, phone: phone || '', message: note, source: 'business-bootcamp' }),
        })
      } catch (e) { console.error('[business-bootcamp] ShYft push failed:', e) }
    }

    // 2) Referral email to both (Krystalore + Jeff), subject "Business Boot Camp".
    const html = `<!DOCTYPE html><html><body style="margin:0;background:#f5f5f5;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;"><tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
        <tr><td style="background:linear-gradient(135deg,#0D9488,#E8A849);padding:26px 40px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">Business Boot Camp</h1>
          <p style="margin:6px 0 0;color:#fff;font-size:15px;font-weight:600;">Consultation request &middot; ${esc(prog)}</p>
        </td></tr>
        <tr><td style="padding:30px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row('Program', prog)}
            ${row('Name', name)}
            ${row('Email', email ? `<a href="mailto:${esc(email)}" style="color:#0D9488;">${esc(email)}</a>` : '')}
            ${row('Phone', phone)}
            ${row('Location', location)}
          </table>
          <p style="margin:22px 0 8px;color:#0D9488;font-weight:700;font-size:13px;">What impact can be made in the next 12 months to change your life, business, and relationships — and how do you see Business Boot Camp being a part of that?</p>
          <p style="margin:0;color:#1a1a1a;font-size:15px;line-height:1.6;white-space:pre-wrap;">${esc(comments) || '<span style="color:#aaa;">(no answer provided)</span>'}</p>
          <p style="margin:22px 0 0;color:#888;font-size:12px;">Supporting pages:
            <a href="https://krystalore.com/business-bootcamp" style="color:#0D9488;">Business Boot Camp</a> ·
            <a href="https://activate4impact.com" style="color:#0D9488;">Activate</a> ·
            <a href="https://activate4impact.com/amplify/" style="color:#0D9488;">RocketShip</a> ·
            <a href="https://krystalore.com/secret" style="color:#0D9488;">The Secret Weapon</a>
          </p>
          <p style="margin:14px 0 0;color:#aaa;font-size:12px;">Saved to the core lead funnel (source: business-bootcamp). Reply to reach the lead.</p>
        </td></tr>
      </table>
    </td></tr></table></body></html>`

    let notified = false
    try {
      notified = await sendViaZapmail({ to: TO, bcc: CC, subject: 'Business Boot Camp', html, fromName: 'Business Boot Camp' })
    } catch (e) { console.error('[business-bootcamp] Zapmail failed:', e) }

    console.log('[business-bootcamp]', prog, name, email, '| notified:', notified)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Business Boot Camp consult error:', err)
    return NextResponse.json({ error: 'Failed to process request.' }, { status: 500 })
  }
}
