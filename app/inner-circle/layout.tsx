import { Metadata } from 'next'
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: 'Beyond Limits Inner Circle Network | Krystalore Crews',
  description: 'Application-only coaching circles for high-performing women, men, veterans, and executives. Led by Krystalore Crews — 22 years Air Force experience, certified coach, and fitness authority.',
  keywords: ['inner circle coaching', 'executive coaching', 'leadership coaching', 'women coaching', 'men coaching', 'veteran coaching', 'Krystalore Crews'],
  openGraph: {
    title: 'Beyond Limits Inner Circle Network | Krystalore Crews',
    description: 'Application-only coaching circles for high-performing leaders ready to operate at their next level.',
    type: 'website',
    url: 'https://krystalore.com/inner-circle',
    images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }],
  },
}


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/inner-circle', defaults);
}

export default function InnerCircleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
