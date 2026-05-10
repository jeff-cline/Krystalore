import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emotional Mastery Self-Assessment | Krystalore',
  description:
    'A short self-assessment across the 8 pillars of Emotional Mastery — relationships, self-worth, leadership, business, parenting, health, communication, and purpose.',
  alternates: { canonical: 'https://krystalore.com/quizzes/emotional-mastery-self-assessment' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
