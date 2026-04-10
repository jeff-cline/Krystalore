import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bombshell Bootcamp | Week-Long Confidence Activation | Krystalore Crews',
  description: 'Bombshell Bootcamp is a week-long confidence activation course by Krystalore Crews. Build unshakable confidence, transform your mindset, and step into your power.',
  keywords: ['bombshell bootcamp', 'confidence bootcamp', 'confidence course', 'women empowerment course', 'mindset transformation', 'Krystalore Crews'],
  openGraph: { title: 'Bombshell Bootcamp | Week-Long Confidence Activation | Krystalore Crews', description: 'Bombshell Bootcamp is a week-long confidence activation course by Krystalore Crews. Build unshakable confidence, transform your mindset, and step into your power.', type: 'website', url: 'https://krystalore.com/bombshell-bootcamp', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Bombshell Bootcamp | Week-Long Confidence Activation | Krystalore Crews', description: 'Bombshell Bootcamp is a week-long confidence activation course by Krystalore Crews. Build unshakable confidence, transform your mindset, and step into your power.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
