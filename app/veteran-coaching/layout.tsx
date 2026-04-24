import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Veteran Coaching by Krystalore Crews | Military Transition, Leadership & Military Spouse Coaching',
  description: 'Expert veteran coaching from Krystalore Crews, military spouse and CEO of Crews Beyond Limits. Military-to-civilian transition support, veteran leadership coaching, military family resilience, and spouse empowerment. Free veteran transition quiz.',
  keywords: ['veteran coaching', 'military transition coaching', 'veteran leadership coaching', 'military spouse coaching', 'military to civilian transition', 'veteran career coaching', 'military family support', 'veteran wellness', 'military spouse empowerment', 'Krystalore Crews'],
  openGraph: {
    title: 'Veteran & Military Family Coaching by Krystalore Crews',
    description: 'Expert coaching for veterans and military families. Transition support, leadership development, and family resilience from a military spouse who understands your journey.',
    type: 'website',
    url: 'https://executive-krystalore.vercel.app/veteran-coaching',
    images: [{ url: 'https://executive-krystalore.vercel.app/images/krystalore-crews-logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veteran & Military Family Coaching | Krystalore Crews',
    description: 'Military transition coaching, veteran leadership development, and family resilience from someone who understands the military lifestyle.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
