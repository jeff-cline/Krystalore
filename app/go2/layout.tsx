import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BEYOND LIMITS',
  description: 'Push past every boundary. Mind, body, and beyond.',
  alternates: { canonical: '/go2' },
  openGraph: {
    title: 'BEYOND LIMITS',
    description: 'Push past every boundary. Mind, body, and beyond.',
    url: 'https://krystalore.com/go2',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg', width: 1200, height: 630, alt: 'BEYOND LIMITS' }],
  },
  twitter: { card: 'summary_large_image', title: 'BEYOND LIMITS', description: 'Push past every boundary. Mind, body, and beyond.', images: ['https://krystalore.com/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
