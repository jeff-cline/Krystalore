import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Executive Krystalore Portfolio',
  description: 'A visual journey through our fitness programs, transformations, and community moments. Each image tells a story of strength, determination, and the Beyond…',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Executive Krystalore Portfolio',
    description: 'A visual journey through our fitness programs, transformations, and community moments. Each image tells a story of strength, determination, and the Beyond…',
    url: 'https://krystalore.com/portfolio',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/hero.jpg', width: 1200, height: 630, alt: 'Executive Krystalore Portfolio' }],
  },
  twitter: { card: 'summary_large_image', title: 'Executive Krystalore Portfolio', description: 'A visual journey through our fitness programs, transformations, and community moments. Each image tells a story of strength, determination, and the Beyond…', images: ['https://krystalore.com/images/go9/hero.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
