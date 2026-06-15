import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elevate Your Event with Krystalore Crews',
  description: 'Inspire your audience with powerful stories of transformation, resilience, and breakthrough leadership.',
  alternates: { canonical: '/keynote-speaker' },
  openGraph: {
    title: 'Elevate Your Event with Krystalore Crews',
    description: 'Inspire your audience with powerful stories of transformation, resilience, and breakthrough leadership.',
    url: 'https://krystalore.com/keynote-speaker',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/scraped/speaking.jpg', width: 1200, height: 630, alt: 'Elevate Your Event with Krystalore Crews' }],
  },
  twitter: { card: 'summary_large_image', title: 'Elevate Your Event with Krystalore Crews', description: 'Inspire your audience with powerful stories of transformation, resilience, and breakthrough leadership.', images: ['https://krystalore.com/images/scraped/speaking.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
