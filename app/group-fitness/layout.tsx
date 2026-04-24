import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Crews Beyond Limits Group Fitness | 34-Min Protocol | Krystalore Crews',
  description: 'Join Crews Beyond Limits group fitness with the signature 34-minute protocol. High-energy group workouts combining HIIT, strength, and community. Virtual and in-person.',
  keywords: ['group fitness', 'Crews Beyond Limits', 'group workout', '34 minute workout', 'HIIT group fitness', 'virtual group fitness'],
  openGraph: { title: 'Crews Beyond Limits Group Fitness | 34-Min Protocol | Krystalore Crews', description: 'Join Crews Beyond Limits group fitness with the signature 34-minute protocol. High-energy group workouts combining HIIT, strength, and community. Virtual and in-person.', type: 'website', url: 'https://krystalore.com/group-fitness', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Crews Beyond Limits Group Fitness | 34-Min Protocol | Krystalore Crews', description: 'Join Crews Beyond Limits group fitness with the signature 34-minute protocol. High-energy group workouts combining HIIT, strength, and community. Virtual and in-person.' },
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/group-fitness', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
