import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Avatar Communities',
  description: 'Connect with like-minded leaders who share your background, challenges, and aspirations. Find your tribe and accelerate your growth through specialized…',
  alternates: { canonical: '/avatars' },
  openGraph: {
    title: 'Avatar Communities',
    description: 'Connect with like-minded leaders who share your background, challenges, and aspirations. Find your tribe and accelerate your growth through specialized…',
    url: 'https://krystalore.com/avatars',
    type: 'website',
    images: [{ url: 'https://krystalore.com/og/krystalore-og.jpg', width: 1200, height: 630, alt: 'Avatar Communities' }],
  },
  twitter: { card: 'summary_large_image', title: 'Avatar Communities', description: 'Connect with like-minded leaders who share your background, challenges, and aspirations. Find your tribe and accelerate your growth through specialized…', images: ['https://krystalore.com/og/krystalore-og.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
