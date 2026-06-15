import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Krystalore Sales Deck',
  description: 'Interactive guided sales deck for the Krystalore ecosystem.',
  robots: { index: false, follow: false },
}

export default function DeckLayout({ children }: { children: React.ReactNode }) {
  return children
}
