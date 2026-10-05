import type { Metadata } from 'next'
import HomePage from './home-page'

// The home page itself is a client component, so its canonical lives here.
export const metadata: Metadata = {
  alternates: { canonical: 'https://krystalore.com' },
}

export default function Page() {
  return <HomePage />
}
