import { NextRequest, NextResponse } from 'next/server'
import { pushContactToGHL } from '@/lib/integrations/gohighlevel'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, phone, tags, quizResults } = body

    if (!email || !name) {
      return NextResponse.json({ error: 'Email and name are required' }, { status: 400 })
    }

    const customFields: Record<string, string | number> = {}
    if (quizResults) {
      customFields['quiz_overall_score'] = quizResults.overallScore || 0
      if (quizResults.categories) {
        Object.entries(quizResults.categories).forEach(([key, value]) => {
          customFields[`quiz_${key.toLowerCase().replace(/\s+/g, '_')}`] = value as number
        })
      }
    }

    const result = await pushContactToGHL({
      email,
      name,
      phone,
      tags: tags || [],
      customFields,
    })

    if (result.success) {
      return NextResponse.json({ success: true, contactId: result.contactId })
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to sync contact', details: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    )
  }
}
