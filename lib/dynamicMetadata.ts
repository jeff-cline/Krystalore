import type { Metadata } from 'next'
import { getDynamicDate } from '@/lib/dynamicDates'

const BASE = 'https://krystalore.com'
const abs = (u?: string) => (u ? (u.startsWith('http') ? u : BASE + (u.startsWith('/') ? '' : '/') + u) : undefined)

// Builds Open Graph / Twitter share tags from a page's Dynamic Date entry.
// og:image uses the dedicated social image, falling back to the hero image.
// Use in a route's layout: `export const generateMetadata = () => dynamicMetadata('slug')`.
export async function dynamicMetadata(slug: string): Promise<Metadata> {
  let dd = null
  try { dd = await getDynamicDate(slug) } catch { /* DB down — no OG override */ }
  if (!dd) return {}

  const image = abs(dd.socialImage || dd.heroImage)
  const title = dd.title || undefined
  const description = dd.description || undefined

  const md: Metadata = {
    openGraph: {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(image ? { images: [image] } : {}),
    },
  }
  return md
}
