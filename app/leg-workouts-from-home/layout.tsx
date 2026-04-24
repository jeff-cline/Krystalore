import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Strong Sexy Leg Workouts from Home | Beyond Limits Fitness | Krystalore Crews',
  description: 'Effective leg workout routines you can do at home. Build strong, toned legs with no gym required. Part of the Beyond Limits fitness program by Krystalore Crews.',
  keywords: ['leg workouts from home', 'home leg exercises', 'leg day at home', 'bodyweight leg workout', 'strong legs workout', 'Beyond Limits fitness'],
  openGraph: { title: 'Strong Sexy Leg Workouts from Home | Beyond Limits Fitness | Krystalore Crews', description: 'Effective leg workout routines you can do at home. Build strong, toned legs with no gym required. Part of the Beyond Limits fitness program by Krystalore Crews.', type: 'website', url: 'https://krystalore.com/leg-workouts-from-home', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Strong Sexy Leg Workouts from Home | Beyond Limits Fitness | Krystalore Crews', description: 'Effective leg workout routines you can do at home. Build strong, toned legs with no gym required. Part of the Beyond Limits fitness program by Krystalore Crews.' },
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/leg-workouts-from-home', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
