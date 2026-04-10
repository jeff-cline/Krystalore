import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monday Morning Motivation Quotes | Krystalore Crews | Start Your Week Strong',
  description: 'Powerful Monday morning motivation quotes to start your week with purpose. Curated quotes on mindset, faith, habits, and deep wisdom from Krystalore Crews.',
  keywords: ['monday motivation quotes', 'morning motivation quotes', 'motivational quotes', 'monday quotes', 'inspirational quotes', 'Krystalore Crews quotes'],
  openGraph: { title: 'Monday Morning Motivation Quotes | Krystalore Crews | Start Your Week Strong', description: 'Powerful Monday morning motivation quotes to start your week with purpose. Curated quotes on mindset, faith, habits, and deep wisdom from Krystalore Crews.', type: 'website', url: 'https://krystalore.com/monday-morning-motivation-quotes', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Monday Morning Motivation Quotes | Krystalore Crews | Start Your Week Strong', description: 'Powerful Monday morning motivation quotes to start your week with purpose. Curated quotes on mindset, faith, habits, and deep wisdom from Krystalore Crews.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
