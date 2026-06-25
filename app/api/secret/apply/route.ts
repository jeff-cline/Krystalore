import { NextRequest, NextResponse } from 'next/server'
import { pushContactToGHL } from '@/lib/integrations/gohighlevel'
import { captureLead } from '@/lib/leadSink'

// Application intake for the invite-only "Secret Weapon" / Inner Circle page (/secret).
// On submit we (1) push to the CRM (ShYft Doctor -> GoHighLevel) and (2) email
// Krystalore + Jeff a copy via Zapmail — both handled by captureLead(). We also
// push structured custom fields straight onto the GHL contact.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name, email, phone, company, role,
      engagement, estMonthly, estOneTime,
      biggestPressure, whyNow,
    } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    // Human-readable summary that lands in the notification email + CRM note.
    const lines = [
      engagement ? `Engagement of interest: ${engagement}` : '',
      estMonthly ? `Est. monthly investment: ${estMonthly}` : '',
      estOneTime ? `Est. one-time investment: ${estOneTime}` : '',
      role ? `Role: ${role}` : '',
      company ? `Company: ${company}` : '',
      biggestPressure ? `Biggest pressure right now: ${biggestPressure}` : '',
      whyNow ? `Why now: ${whyNow}` : '',
    ].filter(Boolean)
    const message = `Secret Weapon — Inner Circle application\n${lines.join('\n')}`

    // 1) CRM (GoHighLevel via ShYft) + 2) Zapmail email to Krystalore + Jeff.
    await captureLead({ name, email, phone, message, source: 'secret-weapon' })

    // Structured custom fields straight onto the GHL contact.
    try {
      await pushContactToGHL({
        email,
        name,
        phone: phone || undefined,
        tags: ['secret-weapon-application', 'inner-circle', 'website-lead'],
        customFields: {
          application_type: 'secret-weapon-inner-circle',
          engagement_of_interest: engagement || '',
          est_monthly_investment: estMonthly || '',
          est_one_time_investment: estOneTime || '',
          current_role: role || '',
          company: company || '',
          biggest_pressure: biggestPressure || '',
          why_now: whyNow || '',
        },
      })
    } catch (ghlErr) {
      console.error('GHL push failed for secret-weapon application:', ghlErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Secret Weapon application error:', err)
    return NextResponse.json({ error: 'Failed to process application.' }, { status: 500 })
  }
}
