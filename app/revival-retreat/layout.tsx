import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revive & Thrive Retreat | Womens Wellness Experience | Krystalore Crews',
  description: 'The Revive & Thrive Retreat is a signature womens wellness experience by Krystalore Crews. Full-body, full-spirit reset for high-achievers ready to reclaim their power.',
  keywords: ['revive and thrive retreat', 'women wellness retreat', 'revival retreat', 'women retreat experience', 'Krystalore Crews retreat'],
  openGraph: { title: 'Revive & Thrive Retreat | Womens Wellness Experience | Krystalore Crews', description: 'The Revive & Thrive Retreat is a signature womens wellness experience by Krystalore Crews.', type: 'website', url: 'https://krystalore.com/revival-retreat', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Revive & Thrive Retreat | Krystalore Crews', description: 'Womens wellness retreat experience for high-achievers.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
