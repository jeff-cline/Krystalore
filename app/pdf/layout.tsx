import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thriving Women Network — Guest Bios | Krystalore Crews',
  description: 'Downloadable one-page guest bios for Krystalore Crews across the Thriving Women Network shows.',
  robots: { index: false, follow: false },
}

export default function PdfLayout({ children }: { children: React.ReactNode }) {
  return children
}
