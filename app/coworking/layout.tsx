import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Beyond Limits Power Hour | Coworking Sessions | Krystalore Crews',
  description: 'Join Beyond Limits Power Hour coworking sessions every Wednesday. Focused work sessions with accountability, community, and productivity strategies.',
  keywords: ['coworking sessions', 'power hour', 'virtual coworking', 'accountability sessions', 'focused work', 'productivity'],
  openGraph: { title: 'Beyond Limits Power Hour | Coworking Sessions | Krystalore Crews', description: 'Join Beyond Limits Power Hour coworking sessions every Wednesday. Focused work sessions with accountability, community, and productivity strategies.', type: 'website', url: 'https://krystalore.com/coworking', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Beyond Limits Power Hour | Coworking Sessions | Krystalore Crews', description: 'Join Beyond Limits Power Hour coworking sessions every Wednesday. Focused work sessions with accountability, community, and productivity strategies.' },
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/coworking', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
