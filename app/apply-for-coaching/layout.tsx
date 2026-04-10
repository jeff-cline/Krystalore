import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply for Coaching | Krystalore Crews | Executive & Life Coaching Application',
  description: 'Apply for executive coaching, life coaching, or mindset coaching with Krystalore Crews. Fill out our application to start your transformation journey.',
  keywords: ['apply for coaching', 'coaching application', 'executive coaching application', 'life coaching application', 'Krystalore Crews coaching'],
  openGraph: { title: 'Apply for Coaching | Krystalore Crews | Executive & Life Coaching Application', description: 'Apply for executive coaching, life coaching, or mindset coaching with Krystalore Crews. Fill out our application to start your transformation journey.', type: 'website', url: 'https://krystalore.com/apply-for-coaching', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Apply for Coaching | Krystalore Crews | Executive & Life Coaching Application', description: 'Apply for executive coaching, life coaching, or mindset coaching with Krystalore Crews. Fill out our application to start your transformation journey.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
