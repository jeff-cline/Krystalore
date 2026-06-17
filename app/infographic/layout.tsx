import type { Metadata } from 'next'

const title = 'From Freemium to Premium Journey | Krystalore'
const description = 'It’s not about the destination, it’s about the journey. We meet you where you’re at — Krystalore Crews is your Life, Fitness, and Business Guide and Mentor.'
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
