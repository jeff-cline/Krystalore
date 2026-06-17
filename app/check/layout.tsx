import type { Metadata } from 'next'

const title = 'Resilience & Readiness Check — Free 30-Second Vocal Snapshot for Veterans & First Responders | Krystalore'
const description = 'For Veterans and first responders: speak for 30 seconds and get an instant readiness snapshot — operational stress load, resilience, focus, steadiness, drive, and recovery capacity, read from the tone of your voice. Free, private, non-diagnostic.'
const ogImage = 'https://krystalore.com/images/go9/portrait.jpg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/check' },
  openGraph: { title, description, url: 'https://krystalore.com/check', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: 'Resilience & Readiness Check' }] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function CheckLayout({ children }: { children: React.ReactNode }) {
  return children
}
