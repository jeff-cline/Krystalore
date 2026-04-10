import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BREAKTHROUGH | Private Health Strategy Session for Entrepreneurs | Krystalore Crews',
  description: 'A private, high-level health strategy session for entrepreneurs who want sustainable success. Book your BREAKTHROUGH session with Krystalore Crews.',
  keywords: 'health strategy, entrepreneur health, executive wellness, burnout prevention, Krystalore Crews, health coaching, sustainable success',
  openGraph: {
    title: 'BREAKTHROUGH - Private Health Strategy Session for Entrepreneurs',
    description: 'Is your health positioned to support your next level? BREAKTHROUGH is a private strategy session for entrepreneurs who want sustainable success.',
    url: 'https://krystalore.com/breakthrough',
    type: 'website',
    images: [
      {
        url: 'https://krystalore.com/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg',
        width: 1200,
        height: 630,
        alt: 'BREAKTHROUGH - Health Strategy Session with Krystalore Crews'
      }
    ]
  },
}

export default function BreakthroughLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
