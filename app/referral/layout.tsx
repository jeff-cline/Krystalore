import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referral Program',
  description: 'Share the transformation and earn rewards. Help others crews beyond their limits while building meaningful connections.',
  alternates: { canonical: '/referral' },
  openGraph: {
    title: 'Referral Program',
    description: 'Share the transformation and earn rewards. Help others crews beyond their limits while building meaningful connections.',
    url: 'https://krystalore.com/referral',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/group.jpg', width: 1200, height: 630, alt: 'Referral Program' }],
  },
  twitter: { card: 'summary_large_image', title: 'Referral Program', description: 'Share the transformation and earn rewards. Help others crews beyond their limits while building meaningful connections.', images: ['https://krystalore.com/images/go9/group.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
