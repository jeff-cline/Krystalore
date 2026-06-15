import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FIRE Challenge',
  description: '30 Days to Reignite Energy, Reduce Overwhelm, and Build a Body & Mind That Can Keep Up With Your Life',
  alternates: { canonical: '/firechallenge' },
  openGraph: {
    title: 'FIRE Challenge',
    description: '30 Days to Reignite Energy, Reduce Overwhelm, and Build a Body & Mind That Can Keep Up With Your Life',
    url: 'https://krystalore.com/firechallenge',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/speaker-page/speaker-hero.jpeg', width: 1200, height: 630, alt: 'FIRE Challenge' }],
  },
  twitter: { card: 'summary_large_image', title: 'FIRE Challenge', description: '30 Days to Reignite Energy, Reduce Overwhelm, and Build a Body & Mind That Can Keep Up With Your Life', images: ['https://krystalore.com/images/speaker-page/speaker-hero.jpeg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
