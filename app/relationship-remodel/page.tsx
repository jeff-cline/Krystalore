import type { Metadata } from 'next'
import ProgramLander from '@/components/ProgramLander'

export const metadata: Metadata = {
  title: 'Relationship Remodel | Krystalore Crews',
  description: 'Rebuild and strengthen your personal and professional relationships with proven strategies.',
}

export default function RelationshipRemodelPage() {
  return (
    <ProgramLander
      slug="relationship-remodel"
      eyebrow="Relationships"
      title="Relationship Remodel"
      accent="Rebuild and strengthen the relationships that matter."
      description="Rebuild and strengthen your personal and professional relationships with proven strategies. Over four weeks, remodel how you connect, communicate, and show up — at home and at work."
      heroSrc="/images/go9/group-sunset-dresses.webp"
      date="Enrolling now"
      meta="4 weeks · 16 lessons"
      benefits={[
        { title: 'Communicate', body: 'Practical tools for the conversations that make or break a relationship.' },
        { title: 'Reconnect', body: 'Repair trust and rebuild connection with proven, guided strategies.' },
        { title: 'Show Up', body: 'Become the partner, parent, and leader the people around you need.' },
      ]}
      cta={{ text: 'Enroll Now', href: '/courses/relationship-remodel' }}
    />
  )
}
