import { Metadata } from 'next'
import { dynamicMetadata } from '@/lib/dynamicMetadata'

const base: Metadata = {
  title: 'Vision Board Party | Goal Setting Workshop | Krystalore Crews',
  description: 'Join Krystalore Crews Vision Board Party events. Creative goal-setting workshops combining visualization, intention-setting, and community for breakthrough results.',
  keywords: ['vision board party', 'vision board workshop', 'goal setting event', 'visualization workshop', 'Krystalore Crews events'],
  openGraph: { title: 'Vision Board Party | Goal Setting Workshop | Krystalore Crews', description: 'Join Krystalore Crews Vision Board Party events. Creative goal-setting workshops combining visualization, intention-setting, and community for breakthrough results.', type: 'website', url: 'https://krystalore.com/vision-board', images: [{ url: 'https://krystalore.com/images/krystalore-crews-logo.png' }] },
  twitter: { card: 'summary_large_image', title: 'Vision Board Party | Goal Setting Workshop | Krystalore Crews', description: 'Join Krystalore Crews Vision Board Party events. Creative goal-setting workshops combining visualization, intention-setting, and community for breakthrough results.' },
}

// Dynamic Date social image/title/description override the defaults above when set.
export async function generateMetadata(): Promise<Metadata> {
  const dyn = await dynamicMetadata('vision-board')
  return {
    ...base,
    openGraph: { ...base.openGraph, ...dyn.openGraph },
    twitter: { ...base.twitter, ...dyn.twitter },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
