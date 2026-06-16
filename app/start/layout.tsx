import type { Metadata } from 'next'

const title = 'Start Here — Let’s Find Your Next Chapter | Krystalore'
const description = 'Tell me where you’re coming from, and I’ll show you the path that fits you — an interactive guided journey into the Krystalore ecosystem.'
const ogImage = 'https://krystalore.com/images/og/start-share.jpg'

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: { title, description, url: 'https://krystalore.com/start', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: 'Start — Find Your Next Chapter' }] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return children
}
