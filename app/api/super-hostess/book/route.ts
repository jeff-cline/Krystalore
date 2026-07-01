import { NextRequest, NextResponse } from 'next/server'
import { sendViaZapmail } from '@/lib/zapmail'

// Super Hostess booking intake.
// 1) Pushes the lead to the core (ShYft Doctor -> auto-forwards to Krystalore's GoHighLevel CRM,
//    with `source` as a GHL tag).
// 2) Emails Krystalore directly (bcc Jeff) with the EXPERIENCE NAME as the subject.
const SHYFT_LEADS_URL = 'https://shyftdoctor.com/api/leads'
const NOTIFY_TO = 'krystalore@thecrewscoach.com'
const NOTIFY_CC = 'jeff.cline@me.com'

function esc(v: unknown) {
  return String(v ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c] as string))
}
function row(label: string, value: string) {
  if (!value) return ''
  return `<tr><td style="padding:6px 0;color:#888;font-size:13px;width:130px;">${label}</td><td style="padding:6px 0;color:#1a1a1a;font-size:15px;font-weight:600;">${esc(value)}</td></tr>`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { experience, name, email, phone, preferredDate, venue, groupSize, message } = body

    if (!experience || !name || !email) {
      return NextResponse.json({ error: 'Experience, name and email are required.' }, { status: 400 })
    }

    const summary = [
      `Super Hostess booking: ${experience}`,
      preferredDate ? `Preferred date: ${preferredDate}` : '',
      venue ? `Venue/location: ${venue}` : '',
      groupSize ? `Group size: ${groupSize}` : '',
      message ? `Notes: ${message}` : '',
    ].filter(Boolean).join('\n')

    // 1) Core CRM (ShYft -> GoHighLevel), tagged by source.
    const apiKey = process.env.SHYFT_API_KEY
    if (apiKey) {
      try {
        await fetch(SHYFT_LEADS_URL, {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'x-api-key': apiKey },
          body: JSON.stringify({ name, email, phone: phone || '', message: summary, source: 'super-hostess' }),
        })
      } catch (e) {
        console.error('[super-hostess] ShYft push failed:', e)
      }
    }

    // 2) Email Krystalore (bcc Jeff) — experience name is the subject.
    const html = `<!DOCTYPE html><html><body style="margin:0;background:#f5f5f5;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;"><tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
        <tr><td style="background:linear-gradient(135deg,#E8A849,#34c5c5);padding:26px 40px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">New Super Hostess Booking</h1>
          <p style="margin:6px 0 0;color:#fff;font-size:15px;font-weight:600;">${esc(experience)}</p>
        </td></tr>
        <tr><td style="padding:30px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row('Experience', experience)}
            ${row('Name', name)}
            ${row('Email', email ? `<a href="mailto:${esc(email)}" style="color:#0D9488;">${esc(email)}</a>` : '')}
            ${row('Phone', phone)}
            ${row('Preferred date', preferredDate)}
            ${row('Venue / location', venue)}
            ${row('Group size', groupSize)}
            ${row('Notes', message)}
          </table>
          <p style="margin:22px 0 0;color:#aaa;font-size:12px;">Copied to the CRM (source: super-hostess). Reply directly to reach the guest.</p>
        </td></tr>
      </table>
    </td></tr></table></body></html>`

    let notified = false
    try {
      notified = await sendViaZapmail({
        to: NOTIFY_TO,
        bcc: NOTIFY_CC,
        subject: `New Super Hostess Booking — ${experience}`,
        html,
        fromName: 'Super Hostess',
      })
    } catch (e) {
      console.error('[super-hostess] Zapmail notify failed:', e)
    }

    console.log('[super-hostess]', experience, name, email, '| notified:', notified)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Super Hostess booking error:', err)
    return NextResponse.json({ error: 'Failed to process booking.' }, { status: 500 })
  }
}
