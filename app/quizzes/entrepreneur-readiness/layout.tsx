import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entrepreneur Readiness Assessment | Are You Ready to Scale Your Business?',
  description: 'Take the free Entrepreneur Readiness Assessment by Krystalore Crews. Evaluate your business vision, financial literacy, leadership skills, and growth mindset. Discover if you\'re ready to start, scale, or transform your business.',
  keywords: ['entrepreneur readiness quiz', 'business readiness assessment', 'am I ready to start a business', 'scale your business quiz', 'entrepreneur assessment', 'Krystalore Crews'],
  openGraph: {
    title: "Entrepreneur Readiness Assessment | Are You Ready to Scale Your Business?",
    description: "Take the free Entrepreneur Readiness Assessment by Krystalore Crews. Evaluate your business vision, financial literacy, and growth mindset.",
    url: "https://krystalore.com/quizzes/entrepreneur-readiness",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrepreneur Readiness Assessment | Are You Ready to Scale Your Business?",
    description: "Take the free Entrepreneur Readiness Assessment by Krystalore Crews. Evaluate your business vision, financial literacy, and growth mindset.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
