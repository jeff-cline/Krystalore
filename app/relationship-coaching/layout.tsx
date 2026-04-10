import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Relationship Coaching by Krystalore Crews | Communication, Trust & Emotional Intelligence',
  description: 'Transform your relationship with expert coaching from Krystalore Crews. Build communication skills, emotional intelligence, conflict resolution, and deeper connection. Free quizzes, date night ideas, and practical tools for couples.',
  keywords: ['relationship coaching', 'couples coaching', 'marriage coaching', 'improve my marriage', 'relationship training', 'emotional intelligence relationships', 'communication skills couples', 'conflict resolution', 'date night ideas', 'relationship management', 'Krystalore Crews'],
  openGraph: {
    title: 'Relationship Coaching by Krystalore Crews',
    description: 'Expert relationship coaching to build communication, trust, and emotional intelligence. Free quizzes and practical tools for couples.',
    type: 'website',
    url: 'https://executive-krystalore.vercel.app/relationship-coaching',
    images: [{ url: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Relationship Coaching by Krystalore Crews',
    description: 'Expert relationship coaching to build communication, trust, and emotional intelligence.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
