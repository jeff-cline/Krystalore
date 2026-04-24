import type { Metadata } from 'next';
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Character Gallery | Krystalore',
  description: 'The many faces of Krystalore Crews — entrepreneur, adventurer, superwoman, military leader, PhD scholar, fitness goddess, retreat guide, and more. Custom cartoon character illustrations.',
  openGraph: {
    title: 'Character Gallery | Krystalore',
    description: 'The many faces of Krystalore Crews — cartoon character illustrations across every dimension of her brand.',
    url: 'https://krystalore.com/logos',
    type: 'website',
    images: [{ url: '/images/logos/00-gypsy-tours-original.png', width: 1024, height: 1024 }],
  },
};


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/logos', defaults);
}

export default function LogosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
