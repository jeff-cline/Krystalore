import type { Metadata } from 'next'
import { getPillar } from '@/data/emotional-mastery-pillars'

export async function generateMetadata({ params }: { params: { pillar: string } }): Promise<Metadata> {
  const data = getPillar(params.pillar)
  if (!data) return { title: 'Emotional Mastery — Krystalore' }
  return {
    title: `${data.title} — Emotional Mastery | Krystalore`,
    description: data.subtitle,
    alternates: { canonical: `https://krystalore.com/emotional-mastery/${data.slug}` },
    openGraph: {
      title: `${data.title} — Emotional Mastery | Krystalore`,
      description: data.subtitle,
      url: `https://krystalore.com/emotional-mastery/${data.slug}`,
      siteName: 'Krystalore Crews',
      type: 'article',
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
