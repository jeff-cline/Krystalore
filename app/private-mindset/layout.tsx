import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Private Mindset Coaching | 1-on-1 Sessions | Krystalore Crews',
  description: 'Private mindset coaching with Krystalore Crews. 1-on-1 sessions for executives, entrepreneurs, and leaders who want breakthrough clarity, confidence, and performance.',
  keywords: ['private mindset coaching', '1 on 1 coaching', 'mindset coach', 'executive mindset coaching', 'life coaching', 'Krystalore Crews'],
  openGraph: { title: 'Private Mindset Coaching | 1-on-1 Sessions | Krystalore Crews', description: 'Private mindset coaching with Krystalore Crews. 1-on-1 sessions for executives, entrepreneurs, and leaders who want breakthrough clarity, confidence, and performance.', type: 'website', url: 'https://krystalore.com/private-mindset', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Private Mindset Coaching | 1-on-1 Sessions | Krystalore Crews', description: 'Private mindset coaching with Krystalore Crews. 1-on-1 sessions for executives, entrepreneurs, and leaders who want breakthrough clarity, confidence, and performance.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
