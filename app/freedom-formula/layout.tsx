import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'The Freedom Formula | Krystalore Crews',
  description: 'The 5 C\'s framework for energy, confidence, and sustainable success.',
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/freedom-formula', defaults);
}

export default function FreedomFormulaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
