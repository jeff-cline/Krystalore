import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coaching Pricing & Plans',
  description: 'Explore executive coaching pricing and membership plans by Krystalore Crews. Individual coaching, group programs, corporate packages, and retreat experiences.',
  keywords: 'executive coaching pricing, leadership coaching plans, Krystalore Crews coaching, corporate coaching packages',
  openGraph: {
    title: "Coaching Pricing & Plans",
    description: "Explore executive coaching pricing and membership plans by Krystalore Crews. Individual coaching, group programs, corporate packages, and retreat experiences.",
    url: "https://krystalore.com/pricing-demo",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Pricing & Plans",
    description: "Explore executive coaching pricing and membership plans by Krystalore Crews. Individual coaching, group programs, corporate packages, and retreat experiences.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
