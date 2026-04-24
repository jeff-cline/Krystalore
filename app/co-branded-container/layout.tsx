import type { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Co-Branded Container | Better Together | Communities, Family Offices & Associations',
  description: 'Co-develop a custom scaling ecosystem leveraging Smart Start technology with your community. For family offices, associations, thought leaders, and community builders.',
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/co-branded-container', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}