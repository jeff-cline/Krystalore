import type { Metadata } from 'next'
import ProgramLander from '@/components/ProgramLander'

export const metadata: Metadata = {
  title: 'ShYft Mastery | Krystalore Crews',
  description: 'The proprietary ShYft system — rebuild your body, mind, and momentum.',
}

export default function ShyftMasteryPage() {
  return (
    <ProgramLander
      slug="shyft-mastery"
      eyebrow="The ShYft System"
      title="ShYft Mastery"
      accent="Rebuild your body, mind, and momentum."
      description="The proprietary ShYft system — a complete reset for your body, mind, and momentum. Move differently, think differently, and build the kind of energy that carries everything else in your life."
      heroSrc="/images/go9/fitness-outdoor.jpg"
      date="Enrolling now"
      benefits={[
        { title: 'Body', body: 'Rebuild strength, mobility, and energy with a system that fits a demanding life.' },
        { title: 'Mind', body: 'Reset your mindset and nervous system so momentum becomes your default state.' },
        { title: 'Momentum', body: 'Stack small, repeatable wins into unstoppable forward motion.' },
      ]}
      cta={{ text: 'Discover ShYft Mastery', href: 'https://shyftmastery.com', external: true }}
    />
  )
}
