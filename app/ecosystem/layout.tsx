import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecosystem Sales Training Kit — Krystalore (Team)',
  description: 'Internal sales-training kit for the Krystalore team — how to understand and sell the full ecosystem.',
  robots: { index: false, follow: false },
}

export default function EcosystemLayout({ children }: { children: React.ReactNode }) {
  return children
}
