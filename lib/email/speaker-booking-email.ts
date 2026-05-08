export type SpeakerBookingForm = {
  firstName: string
  email: string
  phone: string
  organization?: string
  date?: string
  budget?: string
  topic?: string
  details?: string
}

const ADMIN_EMAIL = 'krystalore@thecrewscoach.com'
const FROM_NAME = 'Krystalore Crews'

const TOPIC_LABELS: Record<string, string> = {
  keynote: 'Keynote Address',
  leadership: 'Leadership & Emotional Intelligence',
  resilience: 'Resilience & Mindset',
  wellness: 'Health & Wellness',
  women: "Women's Empowerment",
  veteran: 'Veteran Transition',
  workshop: 'Workshop / Training',
  emcee: 'Emcee / Host',
  other: 'Other',
}

function topicLabel(slug?: string): string {
  if (!slug) return 'Not specified'
  return TOPIC_LABELS[slug] || slug
}

export function buildAdminNotificationEmail(form: SpeakerBookingForm) {
  const subject = `Speaker Booking Request: ${form.firstName}${
    form.organization ? ` — ${form.organization}` : ''
  }`

  const text = `
New Speaker Booking Request — krystalore.com/speaker

--- Contact ---
Name: ${form.firstName}
Email: ${form.email}
Phone: ${form.phone}
Organization: ${form.organization || 'N/A'}

--- Event ---
Topic: ${topicLabel(form.topic)}
Date: ${form.date || 'N/A'}
Budget: ${form.budget || 'N/A'}

--- Details ---
${form.details || 'No additional details provided.'}
`.trim()

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1a1a1a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <tr><td style="background:linear-gradient(135deg,#0D9488,#14B8A6);padding:28px 40px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;letter-spacing:0.3px;">New Speaker Booking Request</h1>
          <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">via krystalore.com/speaker</p>
        </td></tr>
        <tr><td style="padding:32px 40px;">
          <h2 style="margin:0 0 12px;font-size:18px;color:#0D9488;">Contact</h2>
          <table cellpadding="0" cellspacing="0" style="width:100%;font-size:15px;color:#333;line-height:1.8;">
            <tr><td style="width:130px;color:#888;">Name</td><td><strong>${escapeHtml(form.firstName)}</strong></td></tr>
            <tr><td style="color:#888;">Email</td><td><a href="mailto:${escapeHtml(form.email)}" style="color:#0D9488;text-decoration:none;">${escapeHtml(form.email)}</a></td></tr>
            <tr><td style="color:#888;">Phone</td><td><a href="tel:${escapeHtml(form.phone)}" style="color:#0D9488;text-decoration:none;">${escapeHtml(form.phone)}</a></td></tr>
            <tr><td style="color:#888;">Organization</td><td>${escapeHtml(form.organization || 'N/A')}</td></tr>
          </table>

          <h2 style="margin:28px 0 12px;font-size:18px;color:#0D9488;">Event</h2>
          <table cellpadding="0" cellspacing="0" style="width:100%;font-size:15px;color:#333;line-height:1.8;">
            <tr><td style="width:130px;color:#888;">Topic</td><td>${escapeHtml(topicLabel(form.topic))}</td></tr>
            <tr><td style="color:#888;">Date</td><td>${escapeHtml(form.date || 'N/A')}</td></tr>
            <tr><td style="color:#888;">Budget</td><td>${escapeHtml(form.budget || 'N/A')}</td></tr>
          </table>

          <h2 style="margin:28px 0 12px;font-size:18px;color:#0D9488;">Details</h2>
          <p style="margin:0;font-size:15px;line-height:1.6;color:#444;white-space:pre-wrap;">${escapeHtml(form.details || 'No additional details provided.')}</p>

          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
            <tr><td align="center">
              <a href="mailto:${escapeHtml(form.email)}" style="display:inline-block;background:#0D9488;color:#fff;text-decoration:none;font-size:15px;font-weight:600;padding:12px 28px;border-radius:8px;">Reply to ${escapeHtml(form.firstName)}</a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#f9f9f9;padding:18px 40px;text-align:center;border-top:1px solid #eee;">
          <p style="margin:0;color:#aaa;font-size:12px;">Submitted ${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim()

  return {
    to: ADMIN_EMAIL,
    from: { email: ADMIN_EMAIL, name: FROM_NAME },
    replyTo: form.email,
    subject,
    text,
    html,
  }
}

export function buildSubmitterAutoReplyEmail(form: SpeakerBookingForm) {
  const subject = 'Thanks for reaching out — Krystalore Crews'

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1a1a1a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <tr><td style="background:linear-gradient(135deg,#E8A849,#34c5c5);padding:32px 40px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:26px;font-weight:700;letter-spacing:0.3px;">Krystalore Crews</h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">International Speaker · Corporate Host · Wellness Consultant</p>
        </td></tr>
        <tr><td style="padding:36px 40px;">
          <h2 style="margin:0 0 16px;font-size:22px;color:#1a1a1a;">Thanks, ${escapeHtml(form.firstName)} — your request is in.</h2>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:#444;">Krystalore's team will be in touch within <strong>24 hours</strong> to talk through your event, your audience, and how to create the experience your people deserve.</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:#444;">In the meantime, a quick reminder of why we love this work:</p>
          <blockquote style="margin:0 0 24px;padding:16px 20px;border-left:4px solid #34c5c5;background:#f0fdfa;color:#0f766e;font-style:italic;font-size:15px;line-height:1.6;border-radius:0 8px 8px 0;">"Creating experiences that energize people, elevate culture, and make teams feel seen — then challenge them to rise."</blockquote>
          <p style="margin:0 0 8px;font-size:15px;color:#666;">If you'd like to add anything before we connect, simply reply to this email.</p>
          <p style="margin:24px 0 0;font-size:15px;color:#444;">— The Krystalore Team</p>
        </td></tr>
        <tr><td style="background:#f9f9f9;padding:20px 40px;text-align:center;border-top:1px solid #eee;">
          <p style="margin:0 0 6px;color:#666;font-size:13px;">krystalore@thecrewscoach.com · <a href="https://krystalore.com" style="color:#34c5c5;text-decoration:none;">krystalore.com</a></p>
          <p style="margin:0;color:#aaa;font-size:11px;">© ${new Date().getFullYear()} Krystalore Crews. All rights reserved.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim()

  return {
    to: form.email,
    from: { email: ADMIN_EMAIL, name: FROM_NAME },
    replyTo: ADMIN_EMAIL,
    subject,
    html,
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
