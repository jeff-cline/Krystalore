import type { Metadata } from 'next'
import { dynamicMetadata } from '@/lib/dynamicMetadata'

const base: Metadata = {
  title: 'Transform Your Life',
  description: 'Discover powerful tools, resources, and courses designed to help you crews beyond your limits and achieve extraordinary results.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Transform Your Life',
    description: 'Discover powerful tools, resources, and courses designed to help you crews beyond your limits and achieve extraordinary results.',
    url: 'https://krystalore.com/products',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/group-evening.webp', width: 1200, height: 630, alt: 'Transform Your Life' }],
  },
  twitter: { card: 'summary_large_image', title: 'Transform Your Life', description: 'Discover powerful tools, resources, and courses designed to help you crews beyond your limits and achieve extraordinary results.', images: ['https://krystalore.com/images/go9/group-evening.webp'] },
}

export async function generateMetadata(): Promise<Metadata> {
  const dyn = await dynamicMetadata('products')
  return { ...base, openGraph: { ...base.openGraph, ...dyn.openGraph }, twitter: { ...base.twitter, ...dyn.twitter } }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
