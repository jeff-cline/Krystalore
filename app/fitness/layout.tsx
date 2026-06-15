import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beyond Limits Boot Camp',
  description: 'Transform your body and mind in just 34 minutes a day, 3 times a week. Results guaranteed.',
  alternates: { canonical: '/fitness' },
  openGraph: {
    title: 'Beyond Limits Boot Camp',
    description: 'Transform your body and mind in just 34 minutes a day, 3 times a week. Results guaranteed.',
    url: 'https://krystalore.com/fitness',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/scraped/krystalore-profile.png', width: 1200, height: 630, alt: 'Beyond Limits Boot Camp' }],
  },
  twitter: { card: 'summary_large_image', title: 'Beyond Limits Boot Camp', description: 'Transform your body and mind in just 34 minutes a day, 3 times a week. Results guaranteed.', images: ['https://krystalore.com/images/scraped/krystalore-profile.png'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
