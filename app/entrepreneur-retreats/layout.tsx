import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entrepreneur Retreats | Business & Leadership Retreats with Krystalore Crews',
  description: 'Transform your business at an entrepreneur retreat led by Krystalore Crews. Weekend intensives, 5-day masterminds, and VIP private retreats. Strategy sessions, mastermind groups, networking, and accountability. Scale with confidence.',
  keywords: 'entrepreneur retreat, business retreat, leadership retreat for entrepreneurs, mastermind retreat, business growth retreat, entrepreneur mastermind, CEO retreat, Krystalore Crews, Crews Beyond Limits',
  openGraph: {
    title: 'Entrepreneur Retreats | Scale Your Business with Krystalore Crews',
    description: 'Immersive entrepreneur retreats featuring strategy sessions, mastermind groups, and 1-on-1 coaching. Packages from $2,497.',
    url: 'https://executive-krystalore.vercel.app/entrepreneur-retreats',
    type: 'website',
    images: [{ url: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png', width: 1200, height: 630, alt: 'Entrepreneur Retreat with Krystalore Crews' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrepreneur Retreats | Krystalore Crews',
    description: 'Immersive business retreats for entrepreneurs ready to scale. Strategy, mastermind, and breakthrough coaching.',
    images: ['https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
