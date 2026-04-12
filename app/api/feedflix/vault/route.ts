import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getVaultVideos } from '@/lib/feedflix'

export async function GET(req: NextRequest) {
  try {
    const session = await getSession()
    if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { searchParams } = req.nextUrl
    const result = await getVaultVideos({
      category: searchParams.get('category') || undefined,
      search: searchParams.get('search') || undefined,
      page: searchParams.get('page') || undefined,
      per_page: searchParams.get('per_page') || undefined,
    })

    // result is already { data: [...], page, per_page, total, total_pages }
    return NextResponse.json(result)
  } catch (error: any) {
    console.error('FeedFlix vault error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
