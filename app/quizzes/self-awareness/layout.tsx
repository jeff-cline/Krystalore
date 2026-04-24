import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Self Awareness Quiz',
  description: 'Take the Self Awareness self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Self Awareness Quiz",
    description: "Take the Self Awareness self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/self-awareness",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self Awareness Quiz",
    description: "Take the Self Awareness self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
