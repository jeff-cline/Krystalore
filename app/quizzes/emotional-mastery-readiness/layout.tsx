import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emotional Mastery Readiness Scorecard | Krystalore',
  description:
    'A short scorecard to see if the monthly Emotional Mastery Intensive with Krystalore Crews fits where you are right now.',
  alternates: { canonical: 'https://krystalore.com/quizzes/emotional-mastery-readiness' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
