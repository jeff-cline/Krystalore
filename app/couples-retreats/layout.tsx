import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Couples Retreats | Relationship Coaching with Krystalore Crews',
  description: 'Transform your relationship at a couples retreat led by Krystalore Crews. Weekend getaways, 5-day deep dives, and VIP private retreats. Rebuild connection, communication, and confidence. Military couples welcome.',
  keywords: 'couples retreat, couples wellness retreat, marriage retreat, relationship coaching, couples workshop, couples getaway, relationship remodel, military couples retreat, Krystalore Crews, couples coaching retreat',
  openGraph: {
    title: 'Couples Retreats | Reconnect & Transform with Krystalore Crews',
    description: 'Step away from the noise and reconnect with your partner. Guided couples retreats featuring coaching, communication workshops, and experiential activities. Packages from $1,497.',
    url: 'https://krystalore.com/couples-retreats',
    type: 'website',
    images: [{ url: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png', width: 1200, height: 630, alt: 'Couples Retreat with Krystalore Crews - Relationship Coaching' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Couples Retreats | Krystalore Crews',
    description: 'Transform your relationship at an immersive couples retreat. Coaching, connection, and real tools for lasting change.',
    images: ['https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png'],
  },
}

export default function CouplesRetreatsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
