import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marriage Family Quiz',
  description: 'Take the Marriage Family self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Marriage Family Quiz",
    description: "Take the Marriage Family self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/marriage-family",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Family Quiz",
    description: "Take the Marriage Family self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
