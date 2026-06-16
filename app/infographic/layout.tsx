import type { Metadata } from 'next'

const title = 'The Buyer Pathway — From Free to Premium | Krystalore'
const description = 'A visual map of the Krystalore journey: enter free and climb the road from discovery to the premium VIP experience — drop in anywhere along the way.'
const ogImage = 'https://krystalore.com/images/go9/portrait.jpg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/infographic' },
  openGraph: { title, description, url: 'https://krystalore.com/infographic', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: 'The Krystalore Buyer Pathway' }] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function InfographicLayout({ children }: { children: React.ReactNode }) {
  return children
}
