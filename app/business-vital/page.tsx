import type { Metadata } from 'next'
import ProgramLander from '@/components/ProgramLander'

export const metadata: Metadata = {
  title: 'Business Vital',
  description: 'Make your business healthy, profitable, and built to last — strong systems, clear strategy, and a healthy team.',
}

export default function BusinessVitalPage() {
  return (
    <ProgramLander
      slug="business-vital"
      eyebrow="Business Growth"
      title="Business Vital"
      accent="Make your business healthy, profitable, and built to last."
      description="Business Vital is for founders and leaders who want a business that runs on strong systems, clear strategy, and a healthy team — not on hustle and burnout. Diagnose what's draining you, fix the vitals, and build for durable growth."
      heroSrc="/images/go9/corporate.jpg"
      date="Enrolling now"
      benefits={[
        { title: 'Vital Signs Audit', body: 'A full diagnostic of the metrics, systems, and relationships keeping your business alive — or quietly bleeding it out.' },
        { title: 'Systems & Strategy', body: 'Build the operating system and 90-day plan that let the business run without you in every decision.' },
        { title: 'Healthy Team', body: 'People strategy and leadership so your team performs at a high level — without you burning out.' },
      ]}
      cta={{ text: 'Get More Info', href: 'mailto:krystalore@thecrewscoach.com?subject=Business%20Vital&body=NAME%3A%0ANumber%3A%0AHow%20can%20I%20help%3F%3A', external: true }}
    />
  )
}
