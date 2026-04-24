import type { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Sitemap | Krystalore Crews - All Pages',
  description: 'Complete sitemap of all pages on the Krystalore Crews platform.',
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/sitemap-page', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}