import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Veteran Retreats | Military Wellness Retreats with Krystalore Crews',
  description: 'Transformative veteran retreats led by military spouse Krystalore Crews. Weekend recharge, 5-day mission reset, and VIP command experiences. Peer connection, mindset reset, career workshops, and family integration. Military discounts available.',
  keywords: ['veteran retreat', 'military retreat', 'veteran wellness retreat', 'military wellness retreat', 'veteran retreat program', 'military family retreat', 'veteran transition retreat', 'Krystalore Crews'],
  openGraph: {
    title: 'Veteran Retreats | Honor Your Service, Invest in Your Future',
    description: 'Immersive retreats for veterans and military families. Peer connection, career workshops, mindset reset, and celebration of service. Packages from $997 with military discounts.',
    url: 'https://executive-krystalore.vercel.app/veteran-retreats',
    type: 'website',
    images: [{ url: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png', width: 1200, height: 630, alt: 'Veteran Retreat with Krystalore Crews' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veteran Retreats | Krystalore Crews',
    description: 'Immersive retreats for veterans and military families. Honor your service, invest in your future.',
    images: ['https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png'],
  },
}

export default function VeteranRetreatsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
