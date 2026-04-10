import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retreat Ready Quiz',
  description: 'Take the Retreat Ready self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Retreat Ready Quiz",
    description: "Take the Retreat Ready self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/retreat-ready",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retreat Ready Quiz",
    description: "Take the Retreat Ready self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
