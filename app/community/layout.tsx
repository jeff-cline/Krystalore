import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join a community of high-achievers who support, challenge, and inspire each other to reach new heights.',
  alternates: { canonical: '/community' },
  openGraph: {
    title: 'Community',
    description: 'Join a community of high-achievers who support, challenge, and inspire each other to reach new heights.',
    url: 'https://krystalore.com/community',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/community-hands.jpg', width: 1200, height: 630, alt: 'Community' }],
  },
  twitter: { card: 'summary_large_image', title: 'Community', description: 'Join a community of high-achievers who support, challenge, and inspire each other to reach new heights.', images: ['https://krystalore.com/images/go9/community-hands.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
