import { sendViaZapmail } from './zapmail'
import sgMail from '@sendgrid/mail'

// Central lead sink for ALL krystalore.com forms.
// Every captured lead is (1) pushed into the ShYft Doctor CRM
// (shyftdoctor.com/api/leads), which auto-forwards to GoHighLevel with the
// form's `source` as a GHL tag, and (2) emailed to Krystalore + Jeff
// (Zapmail default sender, SendGrid fallback). Fully non-blocking — it never
// throws, so existing form flows are never broken by a CRM/email hiccup.
//
// Required production env (Vercel → Settings → Environment Variables):
//   SHYFT_API_KEY     — ShYft Doctor Lead Intake key (Admin → Integrations)
//   ZAPMAIL_API_KEY   — default transactional email sender
// Optional:
//   LEAD_NOTIFY_EMAILS (default below), SENDGRID_API_KEY (fallback sender)

const SHYFT_LEADS_URL = 'https://shyftdoctor.com/api/leads'
const NOTIFY_TO = process.env.LEAD_NOTIFY_EMAILS || 'krystalore@thecrewscoach.com, jeff.cline@me.com'

const FUNNEL_LABELS: Record<string, string> = {
  voice: 'Vocal Wellness — Burnout & Stress Snapshot',
  hnm: 'Her Next Mission — Resilience & Readiness Check',
  quiz: 'Quiz / Free Gift',
  contact: 'Contact Form',
  'private-application': 'Private Coaching Application',
  'inner-circle': 'Inner Circle Application',
}

export type LeadInput = {
  name?: string
  email?: string
  phone?: string
  message?: string
  source?: string
  scores?: any
}

function labelFor(source: string) {
  return FUNNEL_LABELS[source] || source.replace(/-/g, ' ')
}

function row(label: string, value: string) {
  if (!value) return ''
  return `<tr><td style="padding:6px 0;color:#888;font-size:13px;width:120px;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#1a1a1a;font-size:15px;font-weight:600;">${value}</td></tr>`
}

function scoreLine(scores: any): string {
  if (!scores || typeof scores !== 'object') return ''
  const bits: string[] = []
  if (scores.overall != null) bits.push(`Overall ${scores.overall}/100`)
  if (scores.stress != null) bits.push(`Stress ${scores.stress}`)
  if (scores.burnout != null) bits.push(`Burnout ${scores.burnout}`)
  if (scores.recovery != null) bits.push(`Recovery ${scores.recovery}`)
  if (!bits.length) return ''
  return `<tr><td style="padding:6px 0;color:#888;font-size:13px;vertical-align:top;">Snapshot</td><td style="padding:6px 0;color:#0D9488;font-size:14px;font-weight:600;">${bits.join(' · ')}</td></tr>`
}

function leadEmailHtml(d: { name: string; email: string; phone: string; message: string; source: string; scores: any }): string {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;"><tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
      <tr><td style="background:linear-gradient(135deg,#E8A849,#34c5c5);padding:28px 40px;text-align:center;">
        <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">🔔 New Krystalore Lead</h1>
      </td></tr>
      <tr><td style="padding:32px 40px;">
        <p style="margin:0 0 6px;color:#0D9488;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Source</p>
        <p style="margin:0 0 22px;color:#1a1a1a;font-size:17px;font-weight:700;">${labelFor(d.source)}</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${row('Name', d.name)}
          ${row('Email', d.email ? `<a href="mailto:${d.email}" style="color:#34c5c5;">${d.email}</a>` : '')}
          ${row('Phone', d.phone ? `<a href="tel:${d.phone}" style="color:#34c5c5;">${d.phone}</a>` : '')}
          ${row('Details', d.message)}
          ${scoreLine(d.scores)}
        </table>
        <p style="margin:24px 0 0;color:#aaa;font-size:12px;">Copied to ShYft Doctor → GoHighLevel and tagged <b>source:${d.source}</b>. Reply directly to reach the lead.</p>
      </td></tr>
    </table>
  </td></tr></table></body></html>`
}

export async function captureLead(lead: LeadInput): Promise<{ crmStatus: number | null; forwardedToGHL: boolean | null; notified: boolean }> {
  const source = String(lead?.source || 'krystalore').toLowerCase().replace(/[^a-z0-9-]/g, '') || 'krystalore'
  const name = String(lead?.name || '').trim()
  const email = String(lead?.email || '').trim()
  const phone = String(lead?.phone || '').trim()
  const message = String(lead?.message || '').trim()

  // 1) ShYft Doctor CRM (auto-forwards to GoHighLevel; source -> GHL tag)
  let crmStatus: number | null = null
  let forwardedToGHL: boolean | null = null
  const apiKey = process.env.SHYFT_API_KEY
  if (apiKey && name && email) {
    try {
      const r = await fetch(SHYFT_LEADS_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': apiKey },
        body: JSON.stringify({ name, email, phone, message, source }),
      })
      crmStatus = r.status
      const b = await r.json().catch(() => null)
      forwardedToGHL = b?.forwardedToGHL ?? null
    } catch (e) {
      console.error('[lead] ShYft Doctor push failed:', e)
    }
  }

  // 2) Notify Krystalore + Jeff (Zapmail default, SendGrid fallback)
  let notified = false
  const subject = `New lead: ${name || 'Unknown'} — ${labelFor(source)}`
  const html = leadEmailHtml({ name, email, phone, message, source, scores: lead?.scores })
  try {
    notified = await sendViaZapmail({ to: NOTIFY_TO, subject, html, fromName: 'Krystalore Leads' })
  } catch (e) {
    console.error('[lead] Zapmail notify failed:', e)
  }
  if (!notified && process.env.SENDGRID_API_KEY) {
    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)
      await sgMail.send({ to: NOTIFY_TO.split(',').map((s) => s.trim()).filter(Boolean), from: { email: 'krystalore@thecrewscoach.com', name: 'Krystalore Leads' }, subject, html })
      notified = true
    } catch (e) {
      console.error('[lead] SendGrid notify failed:', e)
    }
  }

  console.log('[lead]', source, name, email, phone, '| crm:', crmStatus ?? (apiKey ? 'error' : 'no-key'), '| ghl:', forwardedToGHL, '| email:', notified)
  return { crmStatus, forwardedToGHL, notified }
}
