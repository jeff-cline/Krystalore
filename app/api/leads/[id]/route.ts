import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'
import { authOptions } from '@/lib/auth'

const prisma = new PrismaClient()

// PATCH /api/leads/[id] - update lead status
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const role = (session.user as any).role
    const adminEmails = ['krystalore@crewsbeyondlimitsconsulting.com', 'krystalore@thecrewscoach.com']
    const allowed = ['GOD', 'ADMIN'].includes(role) || adminEmails.includes(session.user.email)
    if (!allowed) {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 })
    }

    const { status } = await request.json()
    
    // Validate status value
    const validStatuses = ['new', 'called', 'not_interested']
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    const lead = await prisma.quizLead.update({
      where: { id: params.id },
      data: { status }
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}