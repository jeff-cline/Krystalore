import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You for Visiting Gypsy Tours',
  description: 'Join our WhatsApp group to get instant communications, updates, and special opportunities from Gypsy Tours.',
  alternates: { canonical: '/partners' },
  openGraph: {
    title: 'Thank You for Visiting Gypsy Tours',
    description: 'Join our WhatsApp group to get instant communications, updates, and special opportunities from Gypsy Tours.',
    url: 'https://krystalore.com/partners',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/logos/00-gypsy-tours-original.png', width: 1200, height: 630, alt: 'Thank You for Visiting Gypsy Tours' }],
  },
  twitter: { card: 'summary_large_image', title: 'Thank You for Visiting Gypsy Tours', description: 'Join our WhatsApp group to get instant communications, updates, and special opportunities from Gypsy Tours.', images: ['https://krystalore.com/images/logos/00-gypsy-tours-original.png'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
