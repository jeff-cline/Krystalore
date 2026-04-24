import type { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Smart Start Scale & Care | Ongoing Business Transformation | Krystalore Crews & Jeff Cline',
  description: 'Post-immersive ongoing support, technology, coaching, and scaling services. Monthly partnership for serious entrepreneurs ready to scale with aligned incentives.',
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/smart-start-scale-care', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}