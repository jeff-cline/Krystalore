import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Our Team',
  description: 'A dedicated team committed to helping you crews beyond your limits and achieve extraordinary results.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Meet Our Team',
    description: 'A dedicated team committed to helping you crews beyond your limits and achieve extraordinary results.',
    url: 'https://krystalore.com/team',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/scraped/krystalore-profile.png', width: 1200, height: 630, alt: 'Meet Our Team' }],
  },
  twitter: { card: 'summary_large_image', title: 'Meet Our Team', description: 'A dedicated team committed to helping you crews beyond your limits and achieve extraordinary results.', images: ['https://krystalore.com/images/scraped/krystalore-profile.png'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
