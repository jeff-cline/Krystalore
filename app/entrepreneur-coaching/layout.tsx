import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entrepreneur Coaching by Krystalore Crews | Business Coaching & Executive Coaching for Entrepreneurs',
  description: 'Scale your business with expert entrepreneur coaching from Krystalore Crews. Business growth training, mindset coaching, leadership development, and the proven 5 C\'s framework. Free business assessments and interactive tools.',
  keywords: ['entrepreneur coaching', 'business coaching', 'executive coaching for entrepreneurs', 'business growth coaching', 'entrepreneur mindset', 'leadership coaching', 'scale your business', 'business mentor', 'Krystalore Crews', 'Crews Beyond Limits'],
  openGraph: {
    title: 'Entrepreneur Coaching by Krystalore Crews',
    description: 'Expert entrepreneur coaching to scale your business, sharpen your mindset, and lead with confidence. Free assessments and proven frameworks.',
    type: 'website',
    url: 'https://executive-krystalore.vercel.app/entrepreneur-coaching',
    images: [{ url: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrepreneur Coaching by Krystalore Crews',
    description: 'Expert entrepreneur coaching to scale your business, sharpen your mindset, and lead with confidence.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
