import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Krystalore Crews',
  description: 'Executive Coaching • Wellness • Leadership • Retreats • Speaking • Fitness',
  alternates: { canonical: '/demo-2' },
  openGraph: {
    title: 'Krystalore Crews',
    description: 'Executive Coaching • Wellness • Leadership • Retreats • Speaking • Fitness',
    url: 'https://krystalore.com/demo-2',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/scraped/hero-bg.png', width: 1200, height: 630, alt: 'Krystalore Crews' }],
  },
  twitter: { card: 'summary_large_image', title: 'Krystalore Crews', description: 'Executive Coaching • Wellness • Leadership • Retreats • Speaking • Fitness', images: ['https://krystalore.com/images/scraped/hero-bg.png'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
