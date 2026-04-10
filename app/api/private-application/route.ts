import { NextRequest, NextResponse } from 'next/server'
import { pushContactToGHL } from '@/lib/integrations/gohighlevel'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, cityTimezone, website, role, biggestPressure, misaligned, nervousSystemScale, healthImpact, whyNow, alreadyTried, fullyAligned, investmentOption, investmentReady, primaryDecisionMaker, readyToBegin, finalStatement } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const tags = ['private-mentorship', 'elite-application', 'website-lead']

    const result = await pushContactToGHL({
      email,
      name,
      phone: phone || undefined,
      tags,
      customFields: {
        application_type: 'private-mentorship',
        city_timezone: cityTimezone || '',
        website_linkedin: website || '',
        current_role: role || '',
        biggest_pressure: biggestPressure || '',
        misaligned: misaligned || '',
        nervous_system_scale: nervousSystemScale || '',
        health_impact: healthImpact || '',
        why_now: whyNow || '',
        already_tried: alreadyTried || '',
        fully_aligned: fullyAligned || '',
        investment_option: investmentOption || '',
        investment_ready: investmentReady || '',
        primary_decision_maker: primaryDecisionMaker || '',
        ready_to_begin: readyToBegin || '',
        final_statement: finalStatement || '',
      },
    })

    if (!result.success) {
      console.error('GHL push failed for private application:', result.error)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Private application API error:', err)
    return NextResponse.json({ error: 'Failed to process application.' }, { status: 500 })
  }
}
