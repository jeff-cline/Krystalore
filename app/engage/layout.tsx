import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engage | KRYSTALORE',
  description: 'Meet Krystalore right where you are. Start with the Life Alignment Assessment or drill down into specific areas of growth. Executive coaching, leadership development, and personal transformation.',
}

export default function EngageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
