import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

export async function GET() {
  try {
    const snippets = await prisma.marketingSnippet.findMany({
      include: {
        video: {
          select: {
            id: true,
            title: true,
            category: true,
            membershipLevel: true,
            muxPlaybackId: true,
            thumbnailUrl: true,
            duration: true,
            isPublished: true,
            categoryRef: { select: { name: true, slug: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
    })

    return NextResponse.json(snippets)
  } catch (error) {
    console.error('Snippets fetch error:', error)
    return NextResponse.json([])
  }
}
