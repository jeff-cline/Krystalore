import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Fetch a page and scan its visible text for dates — so you can point the dashboard at
// any URL and catch dates the build sweep missed.
const MONTHS = '(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)'
const PATTERNS: RegExp[] = [
  new RegExp(`${MONTHS}\\.?\\s+\\d{1,2}(?:st|nd|rd|th)?(?:\\s*[-–—]\\s*\\d{1,2}(?:st|nd|rd|th)?)?,?\\s+\\d{4}`, 'gi'),
  new RegExp(`\\d{1,2}(?:st|nd|rd|th)?\\s+${MONTHS}\\.?\\s+\\d{4}`, 'gi'),
  /\b\d{4}-\d{2}-\d{2}\b/g,
  /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g,
]

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!['GOD', 'ADMIN'].includes((session.user as any).role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  try {
    let { url } = await req.json()
    if (!url) return NextResponse.json({ error: 'url is required' }, { status: 400 })
    url = String(url).trim()
    if (!/^https?:\/\//i.test(url)) url = 'https://krystalore.com' + (url.startsWith('/') ? '' : '/') + url

    const res = await fetch(url, { headers: { 'user-agent': 'KrystaloreDateScanner/1.0' } })
    if (!res.ok) return NextResponse.json({ error: `Fetch failed (${res.status})`, url }, { status: 200 })
    const html = await res.text()
    // strip scripts/styles/tags to visible-ish text
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')

    const found = new Set<string>()
    for (const re of PATTERNS) Array.from(text.matchAll(re)).forEach((m) => found.add(m[0].trim()))
    const dates = Array.from(found).slice(0, 40)
    return NextResponse.json({ url, count: dates.length, dates })
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Scan failed' }, { status: 200 })
  }
}
