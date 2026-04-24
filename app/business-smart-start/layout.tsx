import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Smart Start | Mind, Body & Business Transformation | Krystalore Crews & Jeff Cline',
  description: 'A multi-discipline success package combining executive coaching, somatic healing, fitness, and proprietary technology to help entrepreneurs and executives scale their business while transforming mind, body, and soul.',
  openGraph: {
    title: 'Business Smart Start | Mind, Body & Business Transformation',
    description: 'When shift happens, you need the right team. Krystalore Crews + Jeff Cline combine leadership, wellness, and technology for total transformation.',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}