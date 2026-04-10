import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'C-Suite Executive Coaching | Krystalore Crews | Strategic Leadership Development',
  description: 'Elite C-suite executive coaching by Krystalore Crews. Strategic thinking, emotional intelligence, work-life balance, and high-performance leadership for CEOs, CFOs, and senior executives.',
  keywords: ['c-suite coaching', 'executive coaching', 'CEO coaching', 'executive leadership development', 'c-level coaching', 'Krystalore Crews'],
  openGraph: { title: 'C-Suite Executive Coaching | Krystalore Crews | Strategic Leadership Development', description: 'Elite C-suite executive coaching by Krystalore Crews. Strategic thinking, emotional intelligence, work-life balance, and high-performance leadership for CEOs, CFOs, and senior executives.', type: 'website', url: 'https://krystalore.com/c-suite-executive-coaching', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'C-Suite Executive Coaching | Krystalore Crews | Strategic Leadership Development', description: 'Elite C-suite executive coaching by Krystalore Crews. Strategic thinking, emotional intelligence, work-life balance, and high-performance leadership for CEOs, CFOs, and senior executives.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
