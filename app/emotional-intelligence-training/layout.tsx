import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emotional Intelligence Training for Leaders | EQ Workshops | Krystalore Crews',
  description: 'Expert emotional intelligence training for leaders and teams. EQ workshops, assessments, and coaching to build self-awareness, empathy, and leadership effectiveness.',
  keywords: ['emotional intelligence training', 'EQ training for leaders', 'emotional intelligence workshops', 'EQ coaching', 'leadership EQ', 'Krystalore Crews'],
  openGraph: { title: 'Emotional Intelligence Training for Leaders | EQ Workshops | Krystalore Crews', description: 'Expert emotional intelligence training for leaders and teams. EQ workshops, assessments, and coaching to build self-awareness, empathy, and leadership effectiveness.', type: 'website', url: 'https://krystalore.com/emotional-intelligence-training', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Emotional Intelligence Training for Leaders | EQ Workshops | Krystalore Crews', description: 'Expert emotional intelligence training for leaders and teams. EQ workshops, assessments, and coaching to build self-awareness, empathy, and leadership effectiveness.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
