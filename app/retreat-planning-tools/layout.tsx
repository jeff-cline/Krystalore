import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Retreat Planning Tools & Checklists | Krystalore Crews',
  description: 'Download free corporate retreat planning tools, checklists, templates, and guides. Plan your next team retreat with expert resources from Krystalore Crews.',
  keywords: ['retreat planning tools', 'retreat planning checklist', 'corporate retreat template', 'retreat planning guide', 'team retreat checklist', 'retreat budget template', 'free retreat resources'],
  openGraph: {
    title: 'Free Retreat Planning Tools & Checklists | Krystalore Crews',
    description: 'Download free retreat planning checklists, templates, and guides to plan your next team retreat.',
    type: 'website',
    url: 'https://krystalore.com/retreat-planning-tools',
    images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Free Retreat Planning Tools | Krystalore Crews', description: 'Expert retreat planning resources, checklists, and templates.' },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
