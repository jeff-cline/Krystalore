import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redefine What\'s Possible — Mind, Body, and Beyond',
  description: 'Stop surviving and start thriving. We help you build a life you don\'t need to escape from—through executive coaching, somatic healing, fitness, and…',
  alternates: { canonical: '/go' },
  openGraph: {
    title: 'Redefine What\'s Possible — Mind, Body, and Beyond',
    description: 'Stop surviving and start thriving. We help you build a life you don\'t need to escape from—through executive coaching, somatic healing, fitness, and…',
    url: 'https://krystalore.com/go',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/scraped/fitness-hero-banner.png', width: 1200, height: 630, alt: 'Redefine What\'s Possible — Mind, Body, and Beyond' }],
  },
  twitter: { card: 'summary_large_image', title: 'Redefine What\'s Possible — Mind, Body, and Beyond', description: 'Stop surviving and start thriving. We help you build a life you don\'t need to escape from—through executive coaching, somatic healing, fitness, and…', images: ['https://krystalore.com/images/scraped/fitness-hero-banner.png'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
