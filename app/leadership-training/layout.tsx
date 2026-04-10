import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Leadership Training | Emotional Intelligence & Team Building Workshops | Krystalore Crews',
  description: 'Transform your organization with corporate leadership training, emotional intelligence workshops, team building sessions, and executive coaching by Krystalore Crews. Live and virtual options from 1 to 40 hours.',
  keywords: ['corporate leadership training', 'leadership training', 'corporate workshops', 'emotional intelligence training', 'team building workshops', 'executive coaching', 'leadership development', 'Four Lenses personality workshop', 'corporate wellness', 'compassionate inquiry coaching', 'Krystalore Crews', 'Crews Beyond Limits'],
  openGraph: {
    title: 'Corporate Leadership Training | Emotional Intelligence & Team Building Workshops',
    description: 'Expert-led corporate leadership training workshops designed to enhance emotional intelligence, improve communication, and foster compassionate workplace environments. Live and virtual options.',
    type: 'website',
    url: 'https://krystalore.com/leadership-training',
    images: [{ url: 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/66bd4b71b42c9b2c44971f05.png', width: 1200, height: 630, alt: 'Krystalore Crews corporate leadership training workshop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Leadership Training | Krystalore Crews',
    description: 'Transform your team with emotional intelligence workshops, team building, and executive coaching. Live and virtual options.',
    images: ['https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/66bd4b71b42c9b2c44971f05.png'],
  },
  alternates: {
    canonical: '/leadership-training',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
