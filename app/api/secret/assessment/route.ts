import { NextRequest, NextResponse } from 'next/server'
import { pushContactToGHL } from '@/lib/integrations/gohighlevel'
import { captureLead } from '@/lib/leadSink'

// Lead intake for the Secret Weapon division self-assessment.
// Emails Krystalore (krystalore@thecrewscoach.com via Zapmail, in LEAD_NOTIFY_EMAILS)
// + pushes to the CRM, including the prospect's self-identified gaps.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, division, program, have, total, gaps } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const gapList: string[] = Array.isArray(gaps) ? gaps : []
    const note = [
      `${division} Division — Secret Weapon Assessment`,
      program ? `Program: ${program}` : '',
      `Score: ${have}/${total} handled · ${gapList.length} gaps`,
      gapList.length ? `Gaps:\n- ${gapList.join('\n- ')}` : 'No gaps marked.',
    ].filter(Boolean).join('\n')

    await captureLead({ name, email, phone, message: note, source: 'secret-weapon-assessment' })

    try {
      await pushContactToGHL({
        email, name, phone: phone || undefined,
        tags: ['secret-weapon-assessment', `division-${String(division || '').toLowerCase().replace(/[^a-z]+/g, '-')}`, 'website-lead'],
        customFields: {
          application_type: 'secret-weapon-assessment',
          division: division || '',
          assessment_score: `${have}/${total}`,
          gap_count: String(gapList.length),
          gaps: gapList.join('; ').slice(0, 1000),
        },
      })
    } catch (ghlErr) {
      console.error('GHL push failed for secret-weapon-assessment:', ghlErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Secret Weapon assessment error:', err)
    return NextResponse.json({ error: 'Failed to process assessment.' }, { status: 500 })
  }
}
