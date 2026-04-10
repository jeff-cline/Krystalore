import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Awareness Quiz',
  description: 'Take the Social Awareness self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Social Awareness Quiz",
    description: "Take the Social Awareness self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/social-awareness",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Awareness Quiz",
    description: "Take the Social Awareness self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
