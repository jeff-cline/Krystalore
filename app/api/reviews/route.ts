import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET - Fetch all reviews
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const source = searchParams.get('source') || undefined
    const limit = parseInt(searchParams.get('limit') || '100')

    const reviews = await prisma.review.findMany({
      where: source ? { source } : undefined,
      orderBy: { createdAt: 'desc' },
      take: limit,
    })

    return NextResponse.json({ reviews, count: reviews.length })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
  }
}

// POST - Create a new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, location, rating, review, source } = body

    if (!firstName || !review || !rating) {
      return NextResponse.json(
        { error: 'firstName, review, and rating are required' },
        { status: 400 }
      )
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    const newReview = await prisma.review.create({
      data: {
        firstName,
        lastName: lastName || null,
        location: location || null,
        rating: parseInt(rating),
        review,
        source: source || 'gypsy-tours',
      },
    })

    // Also send to jeff-cline.com CRM as a lead
    try {
      await fetch('https://jeff-cline.com/api/todo/webhook/lead-ingest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CRM-Key': 'jc-crm-2024',
        },
        body: JSON.stringify({
          source: 'krystalore-review',
          firstName,
          lastName: lastName || '',
          leadType: 'review',
          notes: `${rating}/5 crystals: ${review}`,
        }),
      })
    } catch (crmError) {
      console.error('CRM sync error (non-blocking):', crmError)
    }

    return NextResponse.json({ success: true, review: newReview })
  } catch (error) {
    console.error('Error creating review:', error)
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 })
  }
}
