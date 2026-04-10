import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Top 10 Corporate Retreat Locations 2025 | Krystalore Crews',
  description: 'Discover the best corporate retreat destinations for 2025. From Roatan Island to Aspen, find the perfect venue for your team building getaway.',
  keywords: ['corporate retreat locations', 'best corporate retreat destinations', 'team retreat venues', 'corporate offsite locations', 'Roatan retreat'],
  openGraph: { title: 'Top 10 Corporate Retreat Locations 2025 | Krystalore Crews', description: 'Discover the best corporate retreat destinations for 2025. From Roatan Island to Aspen, find the perfect venue for your team building getaway.', type: 'website', url: 'https://krystalore.com/corporate-retreat-locations', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Top 10 Corporate Retreat Locations 2025 | Krystalore Crews', description: 'Discover the best corporate retreat destinations for 2025. From Roatan Island to Aspen, find the perfect venue for your team building getaway.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
