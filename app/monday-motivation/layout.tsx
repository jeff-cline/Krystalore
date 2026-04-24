import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monday Motivation LIVE with Krystalore Crews | Weekly Mindset Show',
  description: 'Start your week strong with Monday Motivation LIVE by Krystalore Crews. High-energy mindset strategies, goal-setting, and motivational content every Monday morning. Watch on YouTube @krystalore.',
  keywords: ['monday motivation', 'monday motivation live', 'weekly motivation show', 'mindset strategies', 'Krystalore Crews', 'motivational speaker', 'morning motivation', 'goal setting', 'positive mindset', 'start your week strong'],
  openGraph: {
    title: 'Monday Motivation LIVE with Krystalore Crews',
    description: 'High-energy weekly mindset show to start your week strong. Strategies for confidence, goal-setting, and breakthrough performance.',
    type: 'website',
    url: 'https://krystalore.com/monday-motivation',
    images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monday Motivation LIVE | Krystalore Crews',
    description: 'Weekly mindset show with high-energy strategies for confidence, goal-setting, and breakthrough performance.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
