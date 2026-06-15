import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Krystal Reviews',
  description: 'Real experiences. Real krystals. See what people are saying about Krystalore and Gypsy Tours.',
  alternates: { canonical: '/reviews' },
  openGraph: {
    title: 'Krystal Reviews',
    description: 'Real experiences. Real krystals. See what people are saying about Krystalore and Gypsy Tours.',
    url: 'https://krystalore.com/reviews',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/group-sunset.jpg', width: 1200, height: 630, alt: 'Krystal Reviews' }],
  },
  twitter: { card: 'summary_large_image', title: 'Krystal Reviews', description: 'Real experiences. Real krystals. See what people are saying about Krystalore and Gypsy Tours.', images: ['https://krystalore.com/images/go9/group-sunset.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
