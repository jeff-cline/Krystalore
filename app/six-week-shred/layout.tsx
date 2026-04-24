import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '6 Week Shred Challenge | Quick 20-Min Workouts | Krystalore Crews',
  description: 'Join the 6 Week Shred Challenge by Krystalore Crews. Quick 20-minute workouts designed for busy professionals who want results without spending hours in the gym.',
  keywords: ['6 week shred', 'shred challenge', '20 minute workouts', 'quick workouts', 'fitness challenge', 'Krystalore Crews'],
  openGraph: { title: '6 Week Shred Challenge | Quick 20-Min Workouts | Krystalore Crews', description: 'Join the 6 Week Shred Challenge by Krystalore Crews. Quick 20-minute workouts designed for busy professionals who want results without spending hours in the gym.', type: 'website', url: 'https://krystalore.com/six-week-shred', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: '6 Week Shred Challenge | Quick 20-Min Workouts | Krystalore Crews', description: 'Join the 6 Week Shred Challenge by Krystalore Crews. Quick 20-minute workouts designed for busy professionals who want results without spending hours in the gym.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
