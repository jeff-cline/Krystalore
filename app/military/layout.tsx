import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission-Ready Leadership — Military Leadership Training | Krystalore Crews',
  description:
    'An immersive one-day leadership workshop for military units. Communication, emotional intelligence, resilience & human performance — led by a 22-year USAF Senior NCO. Leadership starts with you.',
  alternates: { canonical: '/military' },
  openGraph: {
    title: 'Mission-Ready Leadership — Military Leadership Training',
    description:
      'Stronger Leaders. Stronger Units. Lasting Legacy. A full-day, customized leadership experience for military and government teams.',
    url: 'https://krystalore.com/military',
    siteName: 'Krystalore Crews',
    type: 'website',
    images: [{ url: 'https://66x17tzw9x.ufs.sh/f/WajS70ZPD48mH4cqkxRuYCwSLZs97vAgI4WO12VQxXUcNf68', width: 1600, height: 1200, alt: 'Mission-Ready Leadership training' }],
  },
}

export default function MilitaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
