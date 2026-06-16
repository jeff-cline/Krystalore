import type { Metadata } from 'next'

const title = 'Command Center | Krystalore'
const description = 'Private directory of every Krystalore page, kit, and property — everything, in one place.'
const ogImage = 'https://krystalore.com/images/og/command-share.jpg'

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: 'https://krystalore.com/command',
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Krystalore Command Center' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function CommandLayout({ children }: { children: React.ReactNode }) {
  return children
}
