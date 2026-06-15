import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orphan Pages Dashboard | Krystalore',
  description: 'Pages with no inbound links across Krystalore properties.',
  robots: { index: false, follow: false },
}

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return children
}
