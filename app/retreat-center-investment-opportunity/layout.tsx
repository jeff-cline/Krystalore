import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retreat Center Investment Opportunity | Krystalore',
  description: 'Tech-enabled wellness & retreat real-estate fund — activated real estate serving women, veterans, and first responders. Investor dashboard: one-pager, deck, drill-down, and executive summary.',
  robots: { index: false, follow: false },
}

export default function InvestLayout({ children }: { children: React.ReactNode }) {
  return children
}
