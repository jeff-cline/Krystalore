import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Fetch a page and return the images used on it, so the admin can pick one as the
// social share image. Resolves Next.js /_next/image?url= wrappers back to the real src.
function resolveNextImage(u: string): string {
  const m = u.match(/\/_next\/image\?[^"']*\burl=([^&"']+)/)
  if (m) { try { return decodeURIComponent(m[1]) } catch { return m[1] } }
  return u
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!['GOD', 'ADMIN'].includes((session.user as any).role)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  try {
    let { url } = await req.json()
    if (!url) return NextResponse.json({ error: 'url is required' }, { status: 400 })
    url = String(url).trim()
    if (!/^https?:\/\//i.test(url)) url = 'https://krystalore.com' + (url.startsWith('/') ? '' : '/') + url

    const res = await fetch(url, { headers: { 'user-agent': 'KrystaloreImagePicker/1.0' } })
    if (!res.ok) return NextResponse.json({ error: `Fetch failed (${res.status})`, images: [] }, { status: 200 })
    const html = await res.text()

    const found = new Set<string>()
    // <img src>, <source srcset>, og:image, and background-image url()
    for (const m of Array.from(html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi))) found.add(m[1])
    for (const m of Array.from(html.matchAll(/property=["']og:image["'][^>]*content=["']([^"']+)["']/gi))) found.add(m[1])
    for (const m of Array.from(html.matchAll(/background-image:\s*url\(["']?([^"')]+)["']?\)/gi))) found.add(m[1])

    const imgs = Array.from(found)
      .map(resolveNextImage)
      .map((u) => (u.startsWith('//') ? 'https:' + u : u))
      .filter((u) => /\.(jpe?g|png|webp|gif|avif)(\?|$)/i.test(u) || u.includes('/images/') || u.includes('utfs.io') || u.includes('/_next/'))
      .filter((u, i, a) => a.indexOf(u) === i)
      .slice(0, 40)
      .map((u) => ({ url: u, name: decodeURIComponent(u.split('?')[0].split('/').pop() || u) }))

    return NextResponse.json({ url, count: imgs.length, images: imgs })
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Failed', images: [] }, { status: 200 })
  }
}
