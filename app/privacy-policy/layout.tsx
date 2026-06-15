import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, participate in our programs, or contact…',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy',
    description: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, participate in our programs, or contact…',
    url: 'https://krystalore.com/privacy-policy',
    type: 'website',
    images: [{ url: 'https://krystalore.com/og/krystalore-og.jpg', width: 1200, height: 630, alt: 'Privacy Policy' }],
  },
  twitter: { card: 'summary_large_image', title: 'Privacy Policy', description: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, participate in our programs, or contact…', images: ['https://krystalore.com/og/krystalore-og.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
