import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Million Dollar Body Academy | 12-Week Transformation | Krystalore Crews',
  description: 'Transform your body and mindset in 12 weeks with the Million Dollar Body Academy by Krystalore Crews. Nutrition, training, mindset coaching, and accountability.',
  keywords: ['million dollar body', 'body transformation program', '12 week transformation', 'fitness transformation', 'body academy', 'Krystalore Crews'],
  openGraph: { title: 'Million Dollar Body Academy | 12-Week Transformation | Krystalore Crews', description: 'Transform your body and mindset in 12 weeks with the Million Dollar Body Academy by Krystalore Crews. Nutrition, training, mindset coaching, and accountability.', type: 'website', url: 'https://krystalore.com/million-dollar-body', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Million Dollar Body Academy | 12-Week Transformation | Krystalore Crews', description: 'Transform your body and mindset in 12 weeks with the Million Dollar Body Academy by Krystalore Crews. Nutrition, training, mindset coaching, and accountability.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
