import type { Metadata } from 'next'

const title = 'The 34-Minute Mindful Method — Meditate, Move, Reflect | Krystalore'
const description = 'A 3-step daily practice — meditate, move, reflect — in just 34 minutes, 2% of your day. The ultimate self-love and self-trust method to regulate your nervous system, build confidence, and navigate a busy life. Start free with a voice analyzer and Just Breathe meditations.'
const ogImage = 'https://krystalore.com/images/scraped/krystalore-coaching-headshot.jpg'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['34-minute mindful method', 'somatic meditation', 'nervous system regulation', 'self-love practice', 'mindful movement', 'just breathe meditation', 'trauma-informed mindfulness', 'Krystalore Crews'],
  alternates: { canonical: '/34' },
  openGraph: { title, description, url: 'https://krystalore.com/34', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: 'The 34-Minute Mindful Method with Krystalore Crews' }] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function ThirtyFourLayout({ children }: { children: React.ReactNode }) {
  return children
}
