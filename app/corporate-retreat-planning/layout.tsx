import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Retreat Planning Services | Krystalore Crews | Destination Retreats & Team Building',
  description: 'Expert corporate retreat planning by Krystalore Crews. Destination retreats, team building experiences, EQ workshops, and leadership development events. Caribbean, domestic, and international retreat locations.',
  keywords: ['corporate retreat planning', 'corporate retreat planner', 'team building retreat', 'destination corporate retreat', 'executive retreat planning', 'corporate team retreat', 'leadership retreat', 'EQ workshop retreat', 'Krystalore Crews retreats'],
  openGraph: {
    title: 'Corporate Retreat Planning Services | Krystalore Crews',
    description: 'Expert corporate retreat planning with destination retreats, team building, EQ workshops, and leadership development events.',
    type: 'website',
    url: 'https://krystalore.com/corporate-retreat-planning',
    images: [{ url: 'https://krystalore.com/images/retreat/retreat-hero.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Retreat Planning | Krystalore Crews',
    description: 'Destination retreats, team building, and leadership development events planned by an expert.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
