import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { pushContactToGHL } from '@/lib/integrations/gohighlevel'
import {
  buildAdminNotificationEmail,
  buildSubmitterAutoReplyEmail,
  type SpeakerBookingForm,
} from '@/lib/email/speaker-booking-email'

function sendgridConfigured(): boolean {
  const key = process.env.SENDGRID_API_KEY
  return Boolean(key && !key.includes('PLACEHOLDER'))
}

export async function POST(request: NextRequest) {
  let body: SpeakerBookingForm
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const { firstName, email, phone } = body
  if (!firstName || !email || !phone) {
    return NextResponse.json(
      { error: 'First name, email, and phone are required.' },
      { status: 400 }
    )
  }

  // 1) Admin notification email
  if (sendgridConfigured()) {
    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
      await sgMail.send(buildAdminNotificationEmail(body))
    } catch (err) {
      console.error('[speaker-booking] Admin email failed:', err)
    }

    // 2) Submitter auto-reply
    try {
      await sgMail.send(buildSubmitterAutoReplyEmail(body))
    } catch (err) {
      console.error('[speaker-booking] Auto-reply email failed:', err)
    }
  } else {
    console.warn('[speaker-booking] SendGrid not configured. Submission:', JSON.stringify(body))
  }

  // 3) GHL contact push
  try {
    const tags = ['speaker-booking', 'website-lead']
    if (body.topic) tags.push(`topic-${body.topic}`)

    const customFields: Record<string, string> = {}
    if (body.organization) customFields.speaker_event_organization = body.organization
    if (body.date) customFields.speaker_event_date = body.date
    if (body.budget) customFields.speaker_event_budget = body.budget
    if (body.topic) customFields.speaker_event_topic = body.topic
    if (body.details) customFields.speaker_event_details = body.details

    const result = await pushContactToGHL({
      email,
      name: firstName,
      phone,
      tags,
      customFields: Object.keys(customFields).length > 0 ? customFields : undefined,
    })
    if (!result.success) {
      console.error('[speaker-booking] GHL push failed:', result.error)
    }
  } catch (err) {
    console.error('[speaker-booking] GHL push threw:', err)
  }

  return NextResponse.json({ success: true })
}
