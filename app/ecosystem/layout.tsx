import type { Metadata } from 'next'

const title = 'The Krystalore Ecosystem — Team Sales Training Kit'
const description = 'One coaching core, four amplifiers. The team kit for understanding the whole stack — and learning to sell each piece in her voice.'
const ogImage = 'https://krystalore.com/images/og/ecosystem-share.jpg'

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: { title, description, url: 'https://krystalore.com/ecosystem', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: 'The Krystalore Ecosystem' }] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function EcosystemLayout({ children }: { children: React.ReactNode }) {
  return children
}
