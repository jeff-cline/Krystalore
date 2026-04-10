import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GHL API integration - add API key when available
const GHL_API_KEY = process.env.GHL_API_KEY || ''
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || ''

async function pushToGHL(lead: Record<string, unknown>) {
  if (!GHL_API_KEY || !GHL_LOCATION_ID) return

  try {
    await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GHL_API_KEY}`,
      },
      body: JSON.stringify({
        firstName: (lead.name as string)?.split(' ')[0] || '',
        lastName: (lead.name as string)?.split(' ').slice(1).join(' ') || '',
        email: lead.email,
        phone: lead.phone,
        source: 'krystalore.com',
        tags: [
          'Krystalore Quiz',
          lead.quizTitle ? `Quiz: ${lead.quizTitle}` : 'No Quiz',
        ].filter(Boolean),
        customField: {
          quiz_title: lead.quizTitle || '',
        },
      }),
    })
  } catch (err) {
    console.error('GHL push failed:', err)
  }
}

async function pushToJeffCRM(lead: Record<string, unknown>) {
  try {
    await fetch('https://jeff-cline.com/api/todo/webhook/lead-ingest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CRM-Key': 'jc-crm-2024',
      },
      body: JSON.stringify({
        firstName: (lead.name as string)?.split(' ')[0] || '',
        lastName: (lead.name as string)?.split(' ').slice(1).join(' ') || '',
        email: lead.email,
        phone: lead.phone,
        source: 'krystalore.com',
        tags: [lead.quizTitle ? `Quiz: ${lead.quizTitle}` : undefined].filter(Boolean),
        assignedTo: ['krystalore@thecrewscoach.com'],
        createdAt: new Date().toISOString(),
      }),
    })
  } catch (err) {
    console.error('Jeff CRM push failed:', err)
  }
}

// GET /api/leads - get all leads (admin only)
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const adminEmails = ['krystalore@crewsbeyondlimitsconsulting.com']
    if (!adminEmails.includes(session.user.email)) {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 })
    }

    const leads = await prisma.quizLead.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(leads)
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/leads - save a new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, quizTitle, answers, results } = body

    // Validate required fields
    if (!name || !email || !phone || !quizTitle || !answers || !results) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save to krystalore.com database
    const lead = await prisma.quizLead.create({
      data: {
        name,
        email,
        phone,
        quizTitle,
        answers,
        results,
      }
    })

    // Push to GHL (when API key is configured)
    pushToGHL(body)

    // Push to Jeff's CRM (The Vault)
    pushToJeffCRM(body)

    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
