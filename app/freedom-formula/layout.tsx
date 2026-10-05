import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Freedom Formula',
  description: 'The 5 C\'s framework for energy, confidence, and sustainable success.',
}

export default function FreedomFormulaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
