import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service',
    description: 'By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement.',
    url: 'https://krystalore.com/terms',
    type: 'website',
    images: [{ url: 'https://krystalore.com/og/krystalore-og.jpg', width: 1200, height: 630, alt: 'Terms of Service' }],
  },
  twitter: { card: 'summary_large_image', title: 'Terms of Service', description: 'By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement.', images: ['https://krystalore.com/og/krystalore-og.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
