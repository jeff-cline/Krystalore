import type { Metadata } from 'next'
import { dynamicMetadata } from '@/lib/dynamicMetadata'

// OG/social tags pull from this page's Dynamic Date entry (social image + title + description).
export async function generateMetadata(): Promise<Metadata> {
  return dynamicMetadata('relationship-remodel')
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
