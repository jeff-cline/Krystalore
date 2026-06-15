import type { Metadata } from 'next'

const title = 'Rise & Thrive — Bundle + VIP Experience'
const description =
  'Perfect for women in transition seeking clarity, confidence, and momentum. Rise. Thrive. Become. Your next chapter starts now.'
// Swap this file to change the share photo: public/images/og/rise-and-thrive-share.jpg
const ogImage = 'https://krystalore.com/images/og/rise-and-thrive-share.jpg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://krystalore.com/rise-and-thrive' },
  openGraph: {
    title,
    description,
    url: 'https://krystalore.com/rise-and-thrive',
    siteName: 'Krystalore',
    type: 'website',
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Rise & Thrive Bundle + VIP Experience' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
}

export default function RiseAndThriveLayout({ children }: { children: React.ReactNode }) {
  return children
}
