import QuizTemplate from '@/components/quiz-template'

export default function EmotionalMasterySelfAssessment() {
  const questions = [
    { id: 1,  text: 'I can name what I feel before it leaks out as reactivity, withdrawal, or over-functioning.', options: [], type: 'scale' as const },
    { id: 2,  text: 'The same conflict or dynamic keeps showing up in my closest relationships.', options: [], type: 'scale' as const },
    { id: 3,  text: 'I can advocate for everyone in my life better than I can advocate for myself.', options: [], type: 'scale' as const },
    { id: 4,  text: 'I lead, parent, or run a business from urgency more than from clarity.', options: [], type: 'scale' as const },
    { id: 5,  text: 'I hit the same revenue, confidence, or visibility ceiling more than once.', options: [], type: 'scale' as const },
    { id: 6,  text: 'I react in ways at home I swore I never would, then feel guilty afterward.', options: [], type: 'scale' as const },
    { id: 7,  text: 'I live in low-grade tension or activation and call it being productive.', options: [], type: 'scale' as const },
    { id: 8,  text: 'I avoid hard conversations until they become bigger conversations.', options: [], type: 'scale' as const },
    { id: 9,  text: 'I start things, then sabotage or stall right before they could land.', options: [], type: 'scale' as const },
    { id: 10, text: 'I have a hard time receiving compliments, support, money, or rest.', options: [], type: 'scale' as const },
    { id: 11, text: 'When the most important thing to me is at stake, I default to old patterns I can name.', options: [], type: 'scale' as const },
    { id: 12, text: 'I believe more strategy, more information, or more effort will fix what is actually emotional.', options: [], type: 'scale' as const },
  ]

  return (
    <QuizTemplate
      slug="emotional-mastery-self-assessment"
      title="Emotional Mastery Self-Assessment"
      description="A short reflection across the 8 pillars to surface where your emotional patterns are most active right now."
      questions={questions}
      duration="5 min"
      category="Emotional Mastery"
      gatedContactForm={true}
    />
  )
}
