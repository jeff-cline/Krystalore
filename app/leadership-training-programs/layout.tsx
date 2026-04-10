import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leadership Training Programs | Krystalore Crews | Corporate Leadership Development',
  description: 'Comprehensive leadership training programs by Krystalore Crews. Corporate workshops, team development, emotional intelligence, and executive coaching for emerging and senior leaders.',
  keywords: ['leadership training programs', 'corporate leadership training', 'leadership development', 'team leadership workshops', 'executive leadership programs'],
  openGraph: { title: 'Leadership Training Programs | Krystalore Crews | Corporate Leadership Development', description: 'Comprehensive leadership training programs by Krystalore Crews. Corporate workshops, team development, emotional intelligence, and executive coaching for emerging and senior leaders.', type: 'website', url: 'https://krystalore.com/leadership-training-programs', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Leadership Training Programs | Krystalore Crews | Corporate Leadership Development', description: 'Comprehensive leadership training programs by Krystalore Crews. Corporate workshops, team development, emotional intelligence, and executive coaching for emerging and senior leaders.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
