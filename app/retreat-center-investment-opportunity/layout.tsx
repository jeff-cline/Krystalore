import type { Metadata } from 'next'

const title = 'Activated Real Estate: The Retreat Investment Opportunity'
const description = 'Tech-enabled wellness & retreat real estate, backed by a proven brand — built to change millions of lives for women, veterans, and first responders.'
const ogImage = 'https://krystalore.com/images/og/retreat-fund-share.jpg'

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: { title, description, url: 'https://krystalore.com/retreat-center-investment-opportunity', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: 'Activated Real Estate — Investor Dashboard' }] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function InvestLayout({ children }: { children: React.ReactNode }) {
  return children
}
