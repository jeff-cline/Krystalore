import { NextRequest, NextResponse } from 'next/server'
import { getDynamicDate } from '@/lib/dynamicDates'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Public read: the DynamicDate / DynamicHero components fetch this to override their
// fallback content. Returns {} when there is no entry yet (component keeps its fallback).
export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const dd = await getDynamicDate(params.slug)
  return NextResponse.json(dd || {}, { headers: { 'Cache-Control': 'public, max-age=30, stale-while-revalidate=300' } })
}
