import { notFound } from 'next/navigation'
import PillarPage from '@/components/PillarPage'
import { pillars, getPillar } from '@/data/emotional-mastery-pillars'

export function generateStaticParams() {
  return pillars.map((p) => ({ pillar: p.slug }))
}

export default function Page({ params }: { params: { pillar: string } }) {
  const data = getPillar(params.pillar)
  if (!data) notFound()
  return <PillarPage data={data} />
}
