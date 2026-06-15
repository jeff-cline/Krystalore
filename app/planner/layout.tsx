import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Krystal Clear Life Planner',
  description: 'The strategic planning system that turns your biggest goals into your greatest achievements.',
  alternates: { canonical: '/planner' },
  openGraph: {
    title: 'Krystal Clear Life Planner',
    description: 'The strategic planning system that turns your biggest goals into your greatest achievements.',
    url: 'https://krystalore.com/planner',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/planner.jpg', width: 1200, height: 630, alt: 'Krystal Clear Life Planner' }],
  },
  twitter: { card: 'summary_large_image', title: 'Krystal Clear Life Planner', description: 'The strategic planning system that turns your biggest goals into your greatest achievements.', images: ['https://krystalore.com/images/go9/planner.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
