import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACCELERATE',
  description: 'Leadership starts with YOU, and every leader needs a Crew. Do you have one that\'s got your back, and are you all thriving?',
  alternates: { canonical: '/demo-home' },
  openGraph: {
    title: 'ACCELERATE',
    description: 'Leadership starts with YOU, and every leader needs a Crew. Do you have one that\'s got your back, and are you all thriving?',
    url: 'https://krystalore.com/demo-home',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/scraped/hero-bg.png', width: 1200, height: 630, alt: 'ACCELERATE' }],
  },
  twitter: { card: 'summary_large_image', title: 'ACCELERATE', description: 'Leadership starts with YOU, and every leader needs a Crew. Do you have one that\'s got your back, and are you all thriving?', images: ['https://krystalore.com/images/scraped/hero-bg.png'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
