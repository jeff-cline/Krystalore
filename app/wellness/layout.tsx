import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Wellness',
  description: 'Your team’s greatest asset is their energy .',
  alternates: { canonical: '/wellness' },
  openGraph: {
    title: 'Corporate Wellness',
    description: 'Your team’s greatest asset is their energy .',
    url: 'https://krystalore.com/wellness',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/wellness/wellness-hero.jpg', width: 1200, height: 630, alt: 'Corporate Wellness' }],
  },
  twitter: { card: 'summary_large_image', title: 'Corporate Wellness', description: 'Your team’s greatest asset is their energy .', images: ['https://krystalore.com/images/wellness/wellness-hero.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
