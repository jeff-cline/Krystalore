import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '6 Free Gifts — Krystalore Crews',
  description:
    'Six free gifts from Krystalore Crews: Bombshell Bootcamp, weekly coworking, a habit tracker, Just Breathe meditations, the next live masterclass, and the quiz library. One quick form unlocks them all.',
  openGraph: {
    title: '6 Free Gifts — Krystalore Crews',
    description:
      'Unwrap all six gifts at once. One quick form, no upsell. Take the ones that fit.',
    url: 'https://krystalore.com/free-gifts',
    type: 'website',
  },
}

export default function FreeGiftsLayout({ children }: { children: React.ReactNode }) {
  return children
}
