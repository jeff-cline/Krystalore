import { sendViaZapmail } from './zapmail'
import sgMail from '@sendgrid/mail'

const FROM = 'krystalore@thecrewscoach.com'
const FROM_NAME = 'Krystalore'
const CHUNK = 45 // keep each send within Zapmail's per-mailbox limits

// Wraps a broadcast message body in the Krystalore email shell.
export function broadcastHtml(subject: string, message: string): string {
  const body = message
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 16px;color:#444;font-size:16px;line-height:1.6;">${p.replace(/\n/g, '<br>')}</p>`)
    .join('')
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;"><tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
      <tr><td style="background:linear-gradient(135deg,#E8A849,#34c5c5);padding:28px 40px;text-align:center;">
        <h1 style="margin:0;color:#fff;font-size:26px;font-weight:700;">Krystalore</h1>
      </td></tr>
      <tr><td style="padding:36px 40px;">
        <h2 style="margin:0 0 18px;color:#1a1a1a;font-size:22px;font-weight:700;">${subject}</h2>
        ${body}
      </td></tr>
      <tr><td style="background:#f9f9f9;padding:20px 40px;text-align:center;border-top:1px solid #eee;color:#aaa;font-size:12px;">
        You’re receiving this because you’re part of the Krystalore community.
      </td></tr>
    </table>
  </td></tr></table></body></html>`
}

// Sends one broadcast to many recipients via BCC chunks. Zapmail default,
// SendGrid fallback per chunk. Never throws.
export async function sendBroadcast(recipients: string[], subject: string, html: string): Promise<{ sent: number; failed: number }> {
  let sent = 0, failed = 0
  const clean = Array.from(new Set(recipients.map((e) => (e || '').trim()).filter(Boolean)))
  for (let i = 0; i < clean.length; i += CHUNK) {
    const chunk = clean.slice(i, i + CHUNK)
    let ok = false
    try { ok = await sendViaZapmail({ to: FROM, bcc: chunk.join(','), subject, html, fromName: FROM_NAME }) } catch {}
    if (!ok && process.env.SENDGRID_API_KEY) {
      try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        await sgMail.send({ to: FROM, bcc: chunk, from: { email: FROM, name: FROM_NAME }, subject, html })
        ok = true
      } catch {}
    }
    if (ok) sent += chunk.length; else failed += chunk.length
  }
  return { sent, failed }
}
