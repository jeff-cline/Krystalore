import type { Metadata } from 'next'

const title = 'The Buyer Pathway, Full Circle | Krystalore'
const description = 'The Krystalore journey as a compass — flow clockwise from free to premium, with the brand at the center. Drop in anywhere along the way.'
const ogImage = 'https://krystalore.com/images/go9/portrait.jpg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/infographic2' },
  openGraph: { title, description, url: 'https://krystalore.com/infographic2', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: 'The Krystalore Buyer Pathway — circular' }] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function Infographic2Layout({ children }: { children: React.ReactNode }) {
  return children
}
