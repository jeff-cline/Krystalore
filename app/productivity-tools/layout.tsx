import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productivity Tools & Hacks',
  description: 'Organize the chaos to live a more fulfilling life. These are the tools, systems, and resources Krystalore uses — and teaches — to help high performers…',
  alternates: { canonical: '/productivity-tools' },
  openGraph: {
    title: 'Productivity Tools & Hacks',
    description: 'Organize the chaos to live a more fulfilling life. These are the tools, systems, and resources Krystalore uses — and teaches — to help high performers…',
    url: 'https://krystalore.com/productivity-tools',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/coaching.jpg', width: 1200, height: 630, alt: 'Productivity Tools & Hacks' }],
  },
  twitter: { card: 'summary_large_image', title: 'Productivity Tools & Hacks', description: 'Organize the chaos to live a more fulfilling life. These are the tools, systems, and resources Krystalore uses — and teaches — to help high performers…', images: ['https://krystalore.com/images/go9/coaching.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
