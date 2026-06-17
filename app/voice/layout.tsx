import type { Metadata } from 'next'

const title = 'Your Voice Knows — Free 30-Second Vocal Wellness Analysis | Krystalore'
const description = 'Speak for 30 seconds and get an instant vocal-wellness snapshot — stress load, energy, resilience, clarity, and burnout risk read from the tone of your voice. Free.'
const ogImage = 'https://krystalore.com/images/go9/portrait.jpg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/voice' },
  openGraph: { title, description, url: 'https://krystalore.com/voice', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: 'Vocal Wellness Analysis' }] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function VoiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
