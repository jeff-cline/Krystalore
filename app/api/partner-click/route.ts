import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST - Track partner click and send lead to CRM
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { partnerSite, firstName, lastName, email, phone } = body

    if (!partnerSite || !firstName || !email) {
      return NextResponse.json(
        { error: 'partnerSite, firstName, and email are required' },
        { status: 400 }
      )
    }

    // Store in local DB
    const click = await prisma.partnerClick.create({
      data: {
        partnerSite,
        firstName,
        lastName: lastName || null,
        email,
        phone: phone || null,
      },
    })

    // Send to jeff-cline.com CRM
    let crmSent = false
    try {
      const crmResponse = await fetch('https://jeff-cline.com/api/todo/webhook/lead-ingest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CRM-Key': 'jc-crm-2024',
        },
        body: JSON.stringify({
          source: partnerSite,
          firstName,
          lastName: lastName || '',
          email,
          phone: phone || '',
          leadType: 'partner-referral',
          notes: `Clicked from krystalore.com/partners to ${partnerSite}`,
        }),
      })
      crmSent = crmResponse.ok
    } catch (crmError) {
      console.error('CRM sync error:', crmError)
    }

    // Update the click record
    if (crmSent) {
      await prisma.partnerClick.update({
        where: { id: click.id },
        data: { leadSentToCRM: true },
      })
    }

    return NextResponse.json({ success: true, crmSent })
  } catch (error) {
    console.error('Error tracking partner click:', error)
    return NextResponse.json({ error: 'Failed to track click' }, { status: 500 })
  }
}
