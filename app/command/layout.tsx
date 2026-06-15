import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Command Center | Krystalore',
  description: 'Private directory of every Krystalore page, kit, and property.',
  robots: { index: false, follow: false },
}

export default function CommandLayout({ children }: { children: React.ReactNode }) {
  return children
}
