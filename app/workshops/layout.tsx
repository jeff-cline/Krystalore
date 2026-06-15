import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upcoming Workshops',
  description: 'Intensive learning experiences designed to accelerate your growth and provide practical tools for immediate implementation.',
  alternates: { canonical: '/workshops' },
  openGraph: {
    title: 'Upcoming Workshops',
    description: 'Intensive learning experiences designed to accelerate your growth and provide practical tools for immediate implementation.',
    url: 'https://krystalore.com/workshops',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/corporate.jpg', width: 1200, height: 630, alt: 'Upcoming Workshops' }],
  },
  twitter: { card: 'summary_large_image', title: 'Upcoming Workshops', description: 'Intensive learning experiences designed to accelerate your growth and provide practical tools for immediate implementation.', images: ['https://krystalore.com/images/go9/corporate.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
