import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Krystalore Crews | Keynote Speaker & Corporate Presenter',
  description: 'Book Krystalore Crews as your next keynote speaker. Signature talks on leadership, emotional intelligence, resilience, and transformation for corporate events and conferences.',
  keywords: ['keynote speaker', 'book speaker', 'corporate speaker', 'motivational speaker', 'Krystalore Crews speaker', 'leadership speaker'],
  openGraph: { title: 'Book Krystalore Crews | Keynote Speaker & Corporate Presenter', description: 'Book Krystalore Crews as your next keynote speaker. Signature talks on leadership, emotional intelligence, resilience, and transformation for corporate events and conferences.', type: 'website', url: 'https://krystalore.com/speaker', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Book Krystalore Crews | Keynote Speaker & Corporate Presenter', description: 'Book Krystalore Crews as your next keynote speaker. Signature talks on leadership, emotional intelligence, resilience, and transformation for corporate events and conferences.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
