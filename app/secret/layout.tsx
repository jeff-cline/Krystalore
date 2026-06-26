import type { Metadata } from 'next'

// Invite-only. Keep it out of search engines entirely.
export const metadata: Metadata = {
  title: 'The Secret Weapon — By Invitation',
  description: 'Private executive advisory. By application only.',
  robots: { index: false, follow: false, nocache: true },
}

export default function SecretLayout({ children }: { children: React.ReactNode }) {
  return children
}
