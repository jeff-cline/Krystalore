import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elite Private Mentorship',
  description: 'For Leaders Who Refuse to Operate at 70%',
  alternates: { canonical: '/private' },
  openGraph: {
    title: 'Elite Private Mentorship',
    description: 'For Leaders Who Refuse to Operate at 70%',
    url: 'https://krystalore.com/private',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/coaching.jpg', width: 1200, height: 630, alt: 'Elite Private Mentorship' }],
  },
  twitter: { card: 'summary_large_image', title: 'Elite Private Mentorship', description: 'For Leaders Who Refuse to Operate at 70%', images: ['https://krystalore.com/images/go9/coaching.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
