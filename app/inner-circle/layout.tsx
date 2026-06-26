import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Inner Circle',
  description: 'The highest level of private 1:1 access to Krystalore Crews — fitness coaching, emotional intelligence & high-performance coaching, and The Secret Weapon premium partnership.',
  keywords: ['inner circle', 'private coaching', 'fitness coaching', 'emotional intelligence coaching', 'high performance coaching', 'executive coaching', 'Krystalore Crews'],
  openGraph: {
    title: 'The Inner Circle | Krystalore Crews',
    description: 'The highest level of private 1:1 access to Krystalore Crews — three ways in, from physical foundation to full strategic partnership.',
    type: 'website',
    url: 'https://krystalore.com/inner-circle',
    images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }],
  },
}

export default function InnerCircleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
