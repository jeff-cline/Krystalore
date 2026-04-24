import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Self-Assessment Quizzes | Krystalore Crews',
  description: 'Take free self-assessment quizzes on emotional intelligence, anxiety, depression, breathwork, leadership, business scaling, company culture, and more. Discover your strengths and growth areas.',
  keywords: 'self-assessment quiz, emotional intelligence quiz, anxiety assessment, leadership quiz, business quiz, company culture quiz, breathwork assessment, personality quiz, relationship quiz',
  openGraph: {
    title: "Self-Assessment Quizzes | Krystalore Crews",
    description: "Take free self-assessment quizzes on emotional intelligence, anxiety, depression, breathwork, leadership, business scaling, company culture, and more. Discover your strengths and growth areas.",
    url: "https://krystalore.com/quizzes",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Assessment Quizzes | Krystalore Crews",
    description: "Take free self-assessment quizzes on emotional intelligence, anxiety, depression, breathwork, leadership, business scaling, company culture, and more. Discover your strengths and growth areas.",
  },
}

export default function QuizzesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
