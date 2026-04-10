import { NextResponse } from 'next/server'

const GHL_PAGE_URL = 'https://www.krystalorecrews.com/crewsbeyondlimitsgroupfitness'
const CACHE_TTL_MS = 5 * 60 * 1000 // 5 minutes

let cachedUrl: string | null = null
let cachedAt = 0

async function scrapeHeroImage(): Promise<string | null> {
  try {
    const res = await fetch(GHL_PAGE_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible)' },
    })
    const html = await res.text()

    const pattern = /https:\/\/assets\.cdn\.filesafe\.space\/pWRRbUgck3MdxOGpZGhY\/media\/[a-f0-9]+\.\w+/g
    const matches = html.match(pattern)

    if (matches && matches.length > 0) {
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

  if (cachedUrl) {
    return NextResponse.json({ url: cachedUrl, cached: true, stale: true })
  }

  return NextResponse.json({
    url: 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/6908e28de5ed23d57d8bf9c8.png',
    cached: false,
    fallback: true,
  })
}
