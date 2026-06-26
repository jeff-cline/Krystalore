import { NextRequest, NextResponse } from 'next/server'
import { pushContactToGHL } from '@/lib/integrations/gohighlevel'
import { captureLead } from '@/lib/leadSink'

// Application intake for the public Inner Circle Retainer sales page (/inner-circle).
// Pushes to the CRM (ShYft -> GoHighLevel) and emails Krystalore + Jeff via Zapmail.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, role, interest, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const lines = [
      interest ? `Interested in: ${interest}` : '',
      role ? `Role: ${role}` : '',
      company ? `Company: ${company}` : '',
      message ? `Pressure right now: ${message}` : '',
    ].filter(Boolean)
    const note = `Inner Circle Retainer application\n${lines.join('\n')}`

    await captureLead({ name, email, phone, message: note, source: 'inner-circle-retainer' })

    try {
      await pushContactToGHL({
        email,
        name,
        phone: phone || undefined,
        tags: ['inner-circle-retainer', 'website-lead'],
        customFields: {
          application_type: 'inner-circle-retainer',
          interested_in: interest || '',
          current_role: role || '',
          company: company || '',
          pressure: message || '',
        },
      })
    } catch (ghlErr) {
      console.error('GHL push failed for inner-circle-retainer application:', ghlErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Inner Circle Retainer application error:', err)
    return NextResponse.json({ error: 'Failed to process application.' }, { status: 500 })
  }
}
