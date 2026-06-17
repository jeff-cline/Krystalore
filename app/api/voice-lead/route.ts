import { NextResponse } from 'next/server'
import { sendViaZapmail } from '@/lib/zapmail'

// Lead intake for the Krystalore voice funnels (/voice and /check).
// Each submission:
//   1. is pushed into the ShYft Doctor CRM (shyftdoctor.com/api/leads), which
//      auto-forwards to GoHighLevel. The funnel URL name becomes the `source`,
//      which ShYft Doctor turns into a GHL tag (source:voice / source:check).
//   2. triggers a Zapmail notification email to Krystalore + Jeff.
//
// Required production env:
//   SHYFT_API_KEY        — Admin → Integrations → Lead Intake API on shyftdoctor.com
//   ZAPMAIL_API_KEY      — already configured (default transactional sender)
// Optional:
//   LEAD_NOTIFY_EMAILS   — comma-separated recipients (defaults below)

const SHYFT_LEADS_URL = 'https://shyftdoctor.com/api/leads'
const NOTIFY_TO = process.env.LEAD_NOTIFY_EMAILS || 'krystalore@thecrewscoach.com, jeff.cline@me.com'

const FUNNELS: Record<string, { name: string; url: string }> = {
  voice: { name: 'Vocal Wellness — Burnout & Stress Snapshot', url: 'https://krystalore.com/voice' },
  hnm: { name: 'Her Next Mission — Resilience & Readiness Check', url: 'https://krystalore.com/hnm' },
  check: { name: 'Resilience & Readiness Check (Veterans & First Responders)', url: 'https://krystalore.com/check' },
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

function leadEmailHtml(d: { name: string; email: string; phone: string; message: string; funnel: { name: string; url: string }; scores: any }): string {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;"><tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
      <tr><td style="background:linear-gradient(135deg,#E8A849,#34c5c5);padding:28px 40px;text-align:center;">
        <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">🔔 New Krystalore Lead</h1>
      </td></tr>
      <tr><td style="padding:32px 40px;">
        <p style="margin:0 0 6px;color:#0D9488;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Funnel</p>
        <p style="margin:0 0 22px;color:#1a1a1a;font-size:17px;font-weight:700;"><a href="${d.funnel.url}" style="color:#1a1a1a;text-decoration:none;">${d.funnel.name}</a></p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${row('Name', d.name)}
          ${row('Email', d.email ? `<a href="mailto:${d.email}" style="color:#34c5c5;">${d.email}</a>` : '')}
          ${row('Phone', d.phone ? `<a href="tel:${d.phone}" style="color:#34c5c5;">${d.phone}</a>` : '')}
          ${row('Wants help', d.message)}
          ${scoreLine(d.scores)}
        </table>
        <p style="margin:24px 0 0;color:#aaa;font-size:12px;">Pushed to ShYft Doctor → GoHighLevel and tagged by funnel. Reply directly to reach the lead.</p>
      </td></tr>
    </table>
  </td></tr></table></body></html>`
}

export async function POST(req: Request) {
  try {
    const lead = await req.json()
    const source = String(lead?.source || 'voice').toLowerCase().replace(/[^a-z0-9-]/g, '') || 'voice'
    const name = String(lead?.name || '').trim()
    const email = String(lead?.email || '').trim()
    const phone = String(lead?.phone || '').trim()
    const message = String(lead?.help || lead?.message || '').trim()
    const funnel = FUNNELS[source] || { name: source, url: `https://krystalore.com/${source}` }

    // 1) Push into ShYft Doctor CRM (auto-forwards to GoHighLevel; source -> GHL tag).
    let crmStatus: number | null = null
    let forwardedToGHL: boolean | null = null
    const apiKey = process.env.SHYFT_API_KEY
    if (apiKey) {
      try {
        const r = await fetch(SHYFT_LEADS_URL, {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'x-api-key': apiKey },
          body: JSON.stringify({ name, email, phone, message, source }),
        })
        crmStatus = r.status
        const body = await r.json().catch(() => null)
        forwardedToGHL = body?.forwardedToGHL ?? null
      } catch (e) {
        console.error('[lead] ShYft Doctor push failed:', e)
      }
    }

    // 2) Notify Krystalore + Jeff via Zapmail (default sender).
    let notified = false
    try {
      notified = await sendViaZapmail({
        to: NOTIFY_TO,
        subject: `New lead: ${name || 'Unknown'} — ${funnel.name}`,
        fromName: 'Krystalore Leads',
        html: leadEmailHtml({ name, email, phone, message, funnel, scores: lead?.scores }),
      })
    } catch (e) {
      console.error('[lead] Zapmail notify failed:', e)
    }

    console.log('[lead]', source, name, email, phone, '| crm:', crmStatus ?? (apiKey ? 'error' : 'no-key'), '| ghl:', forwardedToGHL, '| email:', notified)
    return NextResponse.json({ ok: true, crm: crmStatus, forwardedToGHL, notified })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
