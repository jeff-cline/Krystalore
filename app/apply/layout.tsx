import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply for Coaching',
  description: 'Take the first step toward transformation. Complete this application to help us understand your goals and determine the best coaching approach for you.',
  alternates: { canonical: '/apply' },
  openGraph: {
    title: 'Apply for Coaching',
    description: 'Take the first step toward transformation. Complete this application to help us understand your goals and determine the best coaching approach for you.',
    url: 'https://krystalore.com/apply',
    type: 'website',
    images: [{ url: 'https://krystalore.com/og/krystalore-og.jpg', width: 1200, height: 630, alt: 'Apply for Coaching' }],
  },
  twitter: { card: 'summary_large_image', title: 'Apply for Coaching', description: 'Take the first step toward transformation. Complete this application to help us understand your goals and determine the best coaching approach for you.', images: ['https://krystalore.com/og/krystalore-og.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
