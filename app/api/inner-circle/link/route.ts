import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { applicationId, userId } = await request.json()

    if (!applicationId || !userId) {
      return NextResponse.json({ error: 'Missing applicationId or userId' }, { status: 400 })
    }

    // Verify both exist
    const [application, user] = await Promise.all([
      prisma.innerCircleApplication.findUnique({ where: { id: applicationId } }),
      prisma.user.findUnique({ where: { id: userId } }),
    ])

    if (!application || !user) {
      return NextResponse.json({ error: 'Application or user not found' }, { status: 404 })
    }

    // Link the application to the user
    await prisma.innerCircleApplication.update({
      where: { id: applicationId },
      data: { userId },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Inner circle link error:', err)
    return NextResponse.json({ error: 'Failed to link application' }, { status: 500 })
  }
}
