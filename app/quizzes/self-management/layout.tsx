import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Self Management Quiz',
  description: 'Take the Self Management self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Self Management Quiz",
    description: "Take the Self Management self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/self-management",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self Management Quiz",
    description: "Take the Self Management self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
