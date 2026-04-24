import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Relationship Management Quiz',
  description: 'Take the Relationship Management self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Relationship Management Quiz",
    description: "Take the Relationship Management self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/quizzes/relationship-management",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relationship Management Quiz",
    description: "Take the Relationship Management self-assessment quiz. Discover your strengths and growth areas with Krystalore Crews executive coaching platform.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
