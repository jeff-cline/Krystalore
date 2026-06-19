import type { Metadata } from 'next'

const title = 'The 34-Minute Mindful Method — Somatic, Trauma-Informed Meditation | Krystalore'
const description = 'Mind the mind. A somatic, trauma-informed nervous-system reset in 6 movements and just 34 minutes — built for women who carry everything. Start free with Just Breathe.'
const ogImage = 'https://krystalore.com/images/scraped/krystalore-coaching-headshot.jpg'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['somatic meditation', 'trauma-informed mindfulness', '34-minute mindful method', 'just breathe meditation', 'yoga nidra alternative', 'nervous system reset', 'Krystalore Crews'],
  alternates: { canonical: '/34' },
  openGraph: { title, description, url: 'https://krystalore.com/34', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: 'The 34-Minute Mindful Method with Krystalore Crews' }] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function ThirtyFourLayout({ children }: { children: React.ReactNode }) {
  return children
}
