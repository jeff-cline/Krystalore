import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule Your Connection Call',
  description: 'Ready to take the next step? Book your complimentary discovery call to explore how we can help you crews beyond your limits and achieve your most ambitious…',
  alternates: { canonical: '/book' },
  openGraph: {
    title: 'Schedule Your Connection Call',
    description: 'Ready to take the next step? Book your complimentary discovery call to explore how we can help you crews beyond your limits and achieve your most ambitious…',
    url: 'https://krystalore.com/book',
    type: 'website',
    images: [{ url: 'https://krystalore.com/og/krystalore-og.jpg', width: 1200, height: 630, alt: 'Schedule Your Connection Call' }],
  },
  twitter: { card: 'summary_large_image', title: 'Schedule Your Connection Call', description: 'Ready to take the next step? Book your complimentary discovery call to explore how we can help you crews beyond your limits and achieve your most ambitious…', images: ['https://krystalore.com/og/krystalore-og.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
