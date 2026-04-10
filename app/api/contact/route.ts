import { NextRequest, NextResponse } from 'next/server'
import { pushContactToGHL } from '@/lib/integrations/gohighlevel'

const subjectTagMap: Record<string, string[]> = {
  'Executive Coaching': ['contact-form', 'executive-coaching', 'website-lead'],
  'Leadership Training': ['contact-form', 'leadership-training', 'website-lead'],
  'Retreats': ['contact-form', 'retreats', 'website-lead'],
  'Platform Demo': ['contact-form', 'platform-demo', 'website-lead'],
  'Other': ['contact-form', 'general-inquiry', 'website-lead'],
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Name, email, subject, and message are required.' }, { status: 400 })
    }

    const tags = subjectTagMap[subject] || subjectTagMap['Other']

    const result = await pushContactToGHL({
      email,
      name,
      phone: phone || undefined,
      tags,
      customFields: {
        contact_form_subject: subject,
        contact_form_message: message,
      },
    })

    if (!result.success) {
      console.error('GHL push failed:', result.error)
      // Still return success to user - we don't want form to fail if GHL is down
      return NextResponse.json({ success: true, note: 'Contact received. Our team will follow up shortly.' })
    }

    return NextResponse.json({ success: true, contactId: result.contactId })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to process contact request.' }, { status: 500 })
  }
}
