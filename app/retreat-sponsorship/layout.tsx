import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retreat Sponsorship Opportunities',
  description: 'Align your brand with transformation. Sponsor our retreats and connect with high-performing entrepreneurs, executives, and leaders in intimate, immersive…',
  alternates: { canonical: '/retreat-sponsorship' },
  openGraph: {
    title: 'Retreat Sponsorship Opportunities',
    description: 'Align your brand with transformation. Sponsor our retreats and connect with high-performing entrepreneurs, executives, and leaders in intimate, immersive…',
    url: 'https://krystalore.com/retreat-sponsorship',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/retreat-costa-rica.jpg', width: 1200, height: 630, alt: 'Retreat Sponsorship Opportunities' }],
  },
  twitter: { card: 'summary_large_image', title: 'Retreat Sponsorship Opportunities', description: 'Align your brand with transformation. Sponsor our retreats and connect with high-performing entrepreneurs, executives, and leaders in intimate, immersive…', images: ['https://krystalore.com/images/go9/retreat-costa-rica.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
