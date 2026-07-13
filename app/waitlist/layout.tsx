import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Retreat Waitlist | Krystalore Crews',
  description: 'Join the waitlist for Krystalore Crews Revive & Thrive retreats. 7 days of rejuvenation in majestic Costa Rica or Puerto Rico — coaching, movement, and sisterhood. Request your spot and get updates on open rooms and future dates.',
  alternates: { canonical: '/waitlist' },
  openGraph: {
    title: 'Retreat Waitlist | Krystalore Crews',
    description: 'Join the waitlist for Krystalore Crews Revive & Thrive retreats in Costa Rica and Puerto Rico. Request your spot and get updates on open rooms and future dates.',
    url: 'https://krystalore.com/waitlist',
    type: 'website',
    images: [{ url: 'https://krystalore.com/og/krystalore-og.jpg', width: 1200, height: 630, alt: 'Krystalore Crews Retreat Waitlist' }],
  },
  twitter: { card: 'summary_large_image', title: 'Retreat Waitlist | Krystalore Crews', description: 'Join the waitlist for Krystalore Crews Revive & Thrive retreats in Costa Rica and Puerto Rico.', images: ['https://krystalore.com/og/krystalore-og.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* Elite360 form embed resizer — activates the inline waitlist form */}
      <Script src="https://link.elite360.io/js/form_embed.js" strategy="afterInteractive" />
    </>
  )
}
