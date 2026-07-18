import { NextResponse } from 'next/server'
import prisma from '@/lib/db'

// Read-only feed of Krystalore's published, themed, playable videos, consumed
// live by the Beyond Limits Bootcamp member vault (beyondlimitsbootcamp.com).
// Keyed with a shared secret (VAULT_FEED_KEY) so it isn't wide open. GET only —
// this never writes, so it can't affect the Krystalore video library.
//
// "Themed" = excludes the Uncategorized/General buckets (raw Facebook imports).
// "Playable" = has an uploadthing fileUrl or a Mux playback id, and isn't a
// raw .zip export.

export const dynamic = 'force-dynamic'

const EXCLUDED_CATEGORIES = ['Uncategorized', 'General', 'uncategorized']

export async function GET(request: Request) {
  const url = new URL(request.url)
  const provided = request.headers.get('x-vault-key') ?? url.searchParams.get('key')
  const expected = process.env.VAULT_FEED_KEY
  if (!expected || provided !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rows = await prisma.video.findMany({
    where: {
      isPublished: true,
      category: { notIn: EXCLUDED_CATEGORIES },
      fileType: { not: 'OTHER' },
      OR: [{ fileUrl: { not: null } }, { muxPlaybackId: { not: null } }],
      NOT: { title: { endsWith: '.zip' } },
    },
    select: {
      id: true,
      title: true,
      description: true,
      category: true,
      fileUrl: true,
      muxPlaybackId: true,
      thumbnailUrl: true,
      duration: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  const counts: Record<string, number> = {}
  for (const v of rows) counts[v.category] = (counts[v.category] ?? 0) + 1
  const categories = Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)

  // Never CDN-cache: this is keyed, and a public cache keyed by URL would
  // serve an authorized response to a keyless request. Consumers cache
  // server-side instead (Beyond Limits revalidates its own fetch).
  return NextResponse.json(
    { categories, videos: rows, count: rows.length },
    { headers: { 'Cache-Control': 'private, no-store' } },
  )
}
