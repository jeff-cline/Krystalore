import { NextRequest, NextResponse } from 'next/server'
import { sendViaZapmail } from '@/lib/zapmail'
import { captureLead } from '@/lib/leadSink'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const esc = (v: unknown) => String(v ?? '').replace(/[<>]/g, (c) => (c === '<' ? '&lt;' : '&gt;'))

/**
 * "Work with Krystalore" retreat enquiry (/retreat).
 * 1) Emails Krystalore directly with the full details.
 * 2) Pushes the lead to the CRM (ShYft Doctor -> GoHighLevel, tagged
 *    source:retreat-inquiry) via the shared lead sink.
 * The CRM step is best-effort so a CRM hiccup never fails the submission.
 */
export async function POST(request: NextRequest) {
  let b: any
  try {
    b = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const firstName = String(b.firstName || '').trim()
  const lastName = String(b.lastName || '').trim()
  const email = String(b.email || '').trim()
  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: 'First name, last name and email are required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const name = `${firstName} ${lastName}`
  const phone = String(b.phone || '').trim()
  const cityState = [b.city, b.state].map((v: any) => String(v || '').trim()).filter(Boolean).join(', ')

  const fields: Array<[string, string]> = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['City / State', cityState],
    ['Zip', String(b.zip || '').trim()],
    ['Date of retreat', String(b.retreatDate || '').trim()],
    ['Preferred location', String(b.location || '').trim()],
    ['Notes / questions', String(b.notes || '').trim()],
  ]

  const rows = fields
    .filter(([, v]) => v)
    .map(([k, v]) => {
      const cell =
        k === 'Email' ? `<a href="mailto:${esc(v)}" style="color:#0D9488">${esc(v)}</a>`
        : k === 'Phone' ? `<a href="tel:${esc(v).replace(/[^0-9+]/g, '')}" style="color:#0D9488">${esc(v)}</a>`
        : esc(v)
      return `<tr><td style="padding:9px 14px;background:#F6F8FA;font-weight:700;color:#0D9488;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:9px 14px;color:#1a1a1a">${cell}</td></tr>`
    })
    .join('')

  const subject = `Retreat Inquiry - ${name}`
  const html = `<!DOCTYPE html><html><body style="margin:0;background:#f5f5f5;font-family:-apple-system,Segoe UI,Roboto,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0"><tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)">
<tr><td style="background:linear-gradient(135deg,#123f3a,#22635a);padding:26px 32px">
  <p style="margin:0 0 4px;color:#7fe3e3;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase">Revive &amp; Thrive Retreats</p>
  <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">New Retreat Inquiry</h1>
</td></tr>
<tr><td style="padding:24px 32px">
  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #eee;border-radius:8px;overflow:hidden">${rows}</table>
  <p style="margin:20px 0 0;color:#aaa;font-size:12px">Sent from the &ldquo;Work with Krystalore&rdquo; form on krystalore.com/retreat. Reply directly to reach them.</p>
</td></tr>
</table></td></tr></table></body></html>`

  // 1) Email Krystalore directly.
  let notified = false
  try {
    notified = await sendViaZapmail({
      to: 'krystalore@thecrewscoach.com',
      subject,
      html,
      fromName: 'Krystalore Retreats',
    })
  } catch (e) {
    console.error('[retreat-inquiry] email failed:', e)
  }

  // 2) CRM capture — best effort.
  let crm: any = null
  try {
    crm = await captureLead({
      name,
      email,
      phone,
      source: 'retreat-inquiry',
      message: fields
        .filter(([k, v]) => v && k !== 'Name' && k !== 'Email' && k !== 'Phone')
        .map(([k, v]) => `${k}: ${v}`)
        .join(' | '),
    })
  } catch (e) {
    console.error('[retreat-inquiry] CRM capture failed:', e)
  }

  return NextResponse.json({ ok: true, notified, crm })
}
