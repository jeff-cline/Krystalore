import { MetadataRoute } from 'next'
import { SITE_ROUTES } from '@/lib/site-routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://krystalore.com'

  const staticPages: MetadataRoute.Sitemap = SITE_ROUTES
    .filter((route) => !route.path.includes('['))
    .map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.path === '/' ? 'weekly' as const : 'monthly' as const,
      priority:
        route.path === '/'
          ? 1
          : route.path.startsWith('/quizzes/')
            ? 0.7
            : route.path === '/go' || route.path === '/sitemap-page'
              ? 0.9
              : 0.75,
    }))

  return staticPages
}
