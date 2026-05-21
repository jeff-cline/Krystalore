import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Mindset & Business Coaching — Krystalore Crews',
  description:
    'One-on-one private mindset and business coaching with Krystalore Crews. Capitalize on your strengths, remove roadblocks, build the habits and frameworks that hold the level you are stepping into. Free consultation.',
  openGraph: {
    title: 'Private Mindset & Business Coaching — Krystalore Crews',
    description:
      'One-on-one coaching for high-achievers who are ready to break through. Free consultation, no packages, no pressure.',
    url: 'https://krystalore.com/privatemindset',
    type: 'website',
  },
}

export default function PrivateMindsetLayout({ children }: { children: React.ReactNode }) {
  return children
}
