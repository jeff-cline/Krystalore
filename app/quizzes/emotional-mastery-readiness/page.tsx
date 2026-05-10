import QuizTemplate from '@/components/quiz-template'

export default function EmotionalMasteryReadiness() {
  const questions = [
    {
      id: 1,
      text: 'When you think about doing real emotional work right now, which feels most true?',
      options: [
        'I’m clear — I’m ready to do the work and I want guidance.',
        'I’m mostly ready, but I’m nervous about what it will surface.',
        'I’m curious but not sure I’m there yet.',
        'I’m exploring and just gathering information for now.',
      ],
      type: 'multiple-choice' as const,
    },
    { id: 2, text: 'I can stay with an uncomfortable feeling long enough to learn from it.', options: [], type: 'scale' as const },
    { id: 3, text: 'I’ve done some form of healing, coaching, or therapy work before.', options: [], type: 'scale' as const },
    { id: 4, text: 'I have enough time, energy, and stability right now to commit to a monthly container.', options: [], type: 'scale' as const },
    { id: 5, text: 'I can be honest in a small group setting about what is actually going on for me.', options: [], type: 'scale' as const },
    {
      id: 6,
      text: 'When I imagine the next 90 days, which is closest to true?',
      options: [
        'I want to come out of these 90 days fundamentally different.',
        'I want a meaningful shift, even if it’s gradual.',
        'I want clarity on what to work on next.',
        'I want to see what’s possible before I commit to anything.',
      ],
      type: 'multiple-choice' as const,
    },
    { id: 7, text: 'I trust myself to follow through on a commitment I make to myself.', options: [], type: 'scale' as const },
    { id: 8, text: 'I have the financial bandwidth right now to invest in this kind of work.', options: [], type: 'scale' as const },
  ]

  return (
    <QuizTemplate
      slug="emotional-mastery-readiness"
      title="Emotional Mastery Readiness Scorecard"
      description="A short scorecard to see if the monthly Emotional Mastery Intensive with Krystalore Crews fits where you are right now."
      questions={questions}
      duration="3 min"
      category="Emotional Mastery"
      gatedContactForm={true}
    />
  )
}
