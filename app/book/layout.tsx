import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Schedule Your Connection Call',
  description: 'Ready to take the next step? Book your complimentary discovery call to explore how we can help you crews beyond your limits and achieve your most ambitious…',
  alternates: { canonical: '/book' },
  openGraph: {
    title: 'Schedule Your Connection Call',
    description: 'Ready to take the next step? Book your complimentary discovery call to explore how we can help you crews beyond your limits and achieve your most ambitious…',
    url: 'https://krystalore.com/book',
    type: 'website',
    images: [{ url: 'https://krystalore.com/og/krystalore-og.jpg', width: 1200, height: 630, alt: 'Schedule Your Connection Call' }],
  },
  twitter: { card: 'summary_large_image', title: 'Schedule Your Connection Call', description: 'Ready to take the next step? Book your complimentary discovery call to explore how we can help you crews beyond your limits and achieve your most ambitious…', images: ['https://krystalore.com/og/krystalore-og.jpg'] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Google tag (gtag.js) — Google Ads AW-18163239667, scoped to /book */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18163239667" strategy="afterInteractive" />
      <Script id="gtag-book-aw18163239667" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18163239667');
      `}</Script>
      {children}
    </>
  )
}
