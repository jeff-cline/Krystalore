import { NextResponse } from 'next/server'

const GHL_PAGE_URL = 'https://www.krystalorecrews.com/milliondollarbodyacademy'
const CACHE_TTL_MS = 5 * 60 * 1000 // 5 minutes

let cachedUrl: string | null = null
let cachedAt = 0

async function scrapeHeroImage(): Promise<string | null> {
  try {
    const res = await fetch(GHL_PAGE_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible)' },
    })
    const html = await res.text()

    // The hero image is in element id="image-blWXDwaZXa"
    // Look for the filesafe.space media URL pattern near that element
    // The img src follows the pattern: assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/<id>.<ext>
    const pattern = /https:\/\/assets\.cdn\.filesafe\.space\/pWRRbUgck3MdxOGpZGhY\/media\/[a-f0-9]+\.\w+/g
    const matches = html.match(pattern)

    if (matches && matches.length > 0) {
      // The hero image is typically the first unique media image after the nav logo
      // The logo is 63d23c1829f84e249e2d8003.png, skip it
      const logoId = '63d23c1829f84e249e2d8003'
      const unique = Array.from(new Set(matches))
      const heroImg = unique.find(u => !u.includes(logoId))
      return heroImg || null
    }
    return null
  } catch {
    return null
  }
}

export async function GET() {
  const now = Date.now()

  if (cachedUrl && now - cachedAt < CACHE_TTL_MS) {
    return NextResponse.json({ url: cachedUrl, cached: true })
  }

  const url = await scrapeHeroImage()
  if (url) {
    cachedUrl = url
    cachedAt = now
    return NextResponse.json({ url, cached: false })
  }

  // Fallback to last known URL
  if (cachedUrl) {
    return NextResponse.json({ url: cachedUrl, cached: true, stale: true })
  }

  // Ultimate fallback
  return NextResponse.json({
    url: 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/68f65b722ae2efd4578248eb.png',
    cached: false,
    fallback: true,
  })
}
