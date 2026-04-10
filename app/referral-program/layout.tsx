import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crews Beyond Limits Referral Program | Earn Rewards',
  description: 'Join the Crews Beyond Limits referral program. Earn rewards for referring friends to coaching, fitness programs, retreats, and courses. The best gift is transformation.',
  keywords: ['referral program', 'Crews Beyond Limits referral', 'earn rewards', 'coaching referral', 'retreat referral program'],
  openGraph: { title: 'Crews Beyond Limits Referral Program | Earn Rewards', description: 'Join the Crews Beyond Limits referral program. Earn rewards for referring friends to coaching, fitness programs, retreats, and courses. The best gift is transformation.', type: 'website', url: 'https://krystalore.com/referral-program', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Crews Beyond Limits Referral Program | Earn Rewards', description: 'Join the Crews Beyond Limits referral program. Earn rewards for referring friends to coaching, fitness programs, retreats, and courses. The best gift is transformation.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
