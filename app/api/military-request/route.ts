import { NextRequest, NextResponse } from 'next/server'
import { sendViaZapmail } from '@/lib/zapmail'
import { captureLead } from '@/lib/leadSink'

// Mission-Ready Leadership (/military) training-request form. Emails Krystalore
// the details with the exact subject "Military Training Request - <name>", and
// best-effort pushes the lead to the CRM.
export async function POST(request: NextRequest) {
  try {
    const b = await request.json()
    const name = String(b.name || '').trim()
    const email = String(b.email || '').trim()
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const fields: Array<[string, string]> = [
      ['Name', name],
      ['Rank / Title', b.rankTitle],
      ['Email', email],
      ['Phone', b.phone],
      ['Military base & location', b.base],
      ['City & State', b.cityState],
      ['Type of training', b.trainingType],
      ['Referred by', b.referredBy],
      ['Type of group', b.groupType],
      ['Size of group', b.groupSize],
      ['Goal they want to achieve', b.goal],
    ]
    const rows = fields
      .filter(([, v]) => String(v || '').trim())
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 14px;background:#F6F8FA;font-weight:700;color:#0D9488;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 14px;color:#1a1a1a">${String(v).replace(/</g, '&lt;')}</td></tr>`,
      )
      .join('')

    const subject = `Military Training Request - ${name}`
    const html = `<!DOCTYPE html><html><body style="margin:0;background:#f5f5f5;font-family:-apple-system,Segoe UI,Roboto,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0"><tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)">
<tr><td style="background:linear-gradient(135deg,#E8A849,#34c5c5);padding:26px 32px"><h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">Mission-Ready Leadership — New Request</h1></td></tr>
<tr><td style="padding:24px 32px"><table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #eee;border-radius:8px;overflow:hidden">${rows}</table></td></tr>
</table></td></tr></table></body></html>`

    // 1) Email Krystalore with the exact subject (Zapmail default).
    const notified = await sendViaZapmail({ to: 'krystalore@thecrewscoach.com', subject, html, fromName: 'Krystalore Military' })

    // 2) Best-effort CRM capture (won't block the response).
    try {
      const summary = fields.filter(([, v]) => String(v || '').trim()).map(([k, v]) => `${k}: ${v}`).join('\n')
      await captureLead({ name, email, phone: b.phone, message: `Military Training Request\n${summary}`, source: 'military-training' })
    } catch (e) {
      console.error('military-request CRM capture failed:', e)
    }

    if (!notified) {
      return NextResponse.json({ error: 'Could not send right now — please email krystalore@thecrewscoach.com.' }, { status: 502 })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('military-request error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
