import type { Metadata } from 'next'

const title = 'Her Next Mission — Free 30-Second Resilience & Readiness Check for Women Veterans & First Responders'
const description = 'For women Veterans and first responders: speak for 30 seconds and get an instant readiness snapshot — operational stress load, resilience, focus, steadiness, drive, and recovery — read from the tone of your voice. Free, private, non-diagnostic.'
const ogImage = 'https://krystalore.com/images/scraped/leadership-event.jpg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/hnm' },
  openGraph: { title, description, url: 'https://krystalore.com/hnm', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: 'Her Next Mission — Resilience & Readiness Check' }] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function HnmLayout({ children }: { children: React.ReactNode }) {
  return children
}
