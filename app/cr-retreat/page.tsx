import type { Metadata } from 'next'
import { RetreatLander, WAITLIST_URL } from '@/components/retreat/RetreatLander'

export const metadata: Metadata = {
  title: 'Costa Rica Retreat | Krystalore Crews',
  description: 'Costa Rica Revive & Thrive retreat with Krystalore Crews, October 18–25, 2026.',
}

export default function CostaRicaRetreatPage() {
  return (
    <RetreatLander
      eyebrow="Costa Rica Revival Retreat"
      title="Costa Rica Revive & Thrive Retreat"
      dates="October 18–25, 2026"
      location="Costa Rica"
      description="A tropical revival retreat for women ready to step away from the noise, reconnect with their body and purpose, and return home renewed. Expect movement, mindset, coaching, community, rest, and adventure in a lush Costa Rica setting."
      heroImage="/images/retreat-destinations/cr-01.jpg"
      gallery={[
        '/images/retreat-destinations/cr-02.jpg',
        '/images/retreat-destinations/cr-03.jpg',
        '/images/retreat-destinations/cr-04.jpg',
      ]}
      highlights={[
        'Transformational coaching and reflection time with Krystalore Crews',
        'Daily movement, mindset work, and guided reset practices',
        'Tropical Costa Rica lodging and community-centered retreat energy',
        'Space to reconnect with your next chapter, your confidence, and your joy',
        'Waitlist and updates available for room releases and final retreat details',
        'Private retreat request option for teams, circles, and custom groups',
      ]}
      checkoutUrl={WAITLIST_URL}
      checkoutLabel="Wait List & Updates"
    />
  )
}
