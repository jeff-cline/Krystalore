import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Inner Circle Retainer | Krystalore Crews',
  description: 'Private executive advisory by application only. Some men hire a coach. The ones who dominate hire a secret weapon. Led by Krystalore Crews — 22 years Air Force, certified coach, somatic & leadership advisor.',
  keywords: ['inner circle retainer', 'private executive advisory', 'executive coaching', 'leadership coaching', 'growth architecture', 'Krystalore Crews'],
  openGraph: {
    title: 'The Inner Circle Retainer | Krystalore Crews',
    description: 'Private executive advisory by application only. The man running the empire needs someone managing the man.',
    type: 'website',
    url: 'https://krystalore.com/inner-circle',
    images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }],
  },
}

export default function InnerCircleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
