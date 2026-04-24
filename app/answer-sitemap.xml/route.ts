import { SITE_ROUTES } from '@/lib/site-routes'

export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = 'https://krystalore.com'
  const now = new Date().toISOString()

  const pages = SITE_ROUTES.filter((r) => !r.path.includes('['))

  const xmlItems = pages
    .map((route) => {
      const aeoPriority = route.path.startsWith('/quizzes/') || route.path.includes('retreat') ? '0.9' : '0.8'
      return `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${aeoPriority}</priority>
  </url>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
