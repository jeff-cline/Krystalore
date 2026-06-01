import type { Metadata } from 'next'
import { RetreatHubPage } from '@/components/retreat/RetreatLander'

export const metadata: Metadata = {
  title: 'Retreats | Krystalore Crews',
  description: 'Explore Krystalore Crews retreat options including Costa Rica, Puerto Rico, Tennessee, private retreats, waitlist updates, and event collaborations.',
}

export default function RetreatPage() {
  return <RetreatHubPage />
}
