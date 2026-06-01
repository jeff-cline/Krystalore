import type { Metadata } from 'next'
import { RetreatLander, WAITLIST_URL } from '@/components/retreat/RetreatLander'

export const metadata: Metadata = {
  title: 'Tennessee Retreat | Krystalore Crews',
  description: 'Future fall Tennessee retreat with Krystalore Crews. Dates TBD for Fall 2027.',
}

export default function TennesseeRetreatPage() {
  return (
    <RetreatLander
      eyebrow="Future Fall Retreat"
      title="Tennessee Revive & Thrive Retreat"
      dates="Fall 2027 — dates TBD"
      location="Tennessee"
      description="A future fall retreat in the Tennessee hills for restoration, clarity, connection, and a powerful next-season reset. Join the updates list now so you are first to know when dates, rooms, and checkout details open."
      heroImage="/images/retreat-destinations/tn-03.png"
      gallery={[
        '/images/retreat-destinations/tn-04.png',
        '/images/retreat-destinations/tn-05.png',
        '/images/retreat-destinations/tn-06.png',
      ]}
      highlights={[
        'Fall 2027 Tennessee retreat experience with final dates to be announced',
        'Wellness, leadership, mindset, and community-centered reset time',
        'Space for reflection, planning, movement, and connection',
        'Checkout and waitlist updates routed through the Revive & Thrive retreat page',
        'Designed for women ready to reconnect with their purpose and next mission',
        'Private retreat request option available for custom groups and organizations',
      ]}
      checkoutUrl={WAITLIST_URL}
      checkoutLabel="Checkout / Join Updates"
    />
  )
}
