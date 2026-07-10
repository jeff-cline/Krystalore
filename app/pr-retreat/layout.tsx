import type { Metadata } from 'next'
import { dynamicMetadata } from '@/lib/dynamicMetadata'

const base: Metadata = {
  title: 'You Deserve to Be Treated Like a Queen',
  description: 'A 7-Day Luxury Wellness Retreat for High-Achieving Women Ready to Reset, Reflect, and Rise',
  alternates: { canonical: '/pr-retreat' },
  openGraph: {
    title: 'You Deserve to Be Treated Like a Queen',
    description: 'A 7-Day Luxury Wellness Retreat for High-Achieving Women Ready to Reset, Reflect, and Rise',
    url: 'https://krystalore.com/pr-retreat',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/retreat/retreat-02.jpg', width: 1200, height: 630, alt: 'You Deserve to Be Treated Like a Queen' }],
  },
  twitter: { card: 'summary_large_image', title: 'You Deserve to Be Treated Like a Queen', description: 'A 7-Day Luxury Wellness Retreat for High-Achieving Women Ready to Reset, Reflect, and Rise', images: ['https://krystalore.com/images/retreat/retreat-02.jpg'] },
}

export async function generateMetadata(): Promise<Metadata> {
  const dyn = await dynamicMetadata('pr-retreat')
  return { ...base, openGraph: { ...base.openGraph, ...dyn.openGraph }, twitter: { ...base.twitter, ...dyn.twitter } }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
