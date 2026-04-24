import type { Metadata } from 'next'
import prisma from '@/lib/db'

/**
 * Fetches SEO overrides from the CmsPage table for a given live path
 * and merges them into the given base metadata. Safe to call even if
 * the DB row does not exist or the DB is unreachable — it falls back
 * to the provided defaults.
 *
 * Usage inside a page's layout.tsx or page.tsx generateMetadata():
 *
 *   export async function generateMetadata(): Promise<Metadata> {
 *     return getCmsMeta('/podcasts', {
 *       title: 'Podcasts | Krystalore Crews',
 *       description: 'Listen to our shows...',
 *     })
 *   }
 */
export async function getCmsMeta(livePath: string, fallback: Metadata = {}): Promise<Metadata> {
  const slug = livePath === '/' ? 'home' : livePath.replace(/^\/+/, '').replace(/\/+/g, '-').toLowerCase()

  try {
    const page = await prisma.cmsPage.findUnique({ where: { slug } })
    if (!page || !page.isPublished) return fallback

    const title = page.seoTitle || (fallback.title as string | undefined)
    const description = page.seoDescription || (fallback.description as string | undefined)
    const image = page.coverImage || undefined

    const og: NonNullable<Metadata['openGraph']> = {
      ...(fallback.openGraph as any),
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(image ? { images: [{ url: image }] } : {}),
    }

    return {
      ...fallback,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      openGraph: og,
      twitter: {
        ...(fallback.twitter as any),
        ...(title ? { title } : {}),
        ...(description ? { description } : {}),
        ...(image ? { images: [image] } : {}),
      },
    }
  } catch {
    return fallback
  }
}
