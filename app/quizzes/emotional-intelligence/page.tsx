import QuizTemplate from '@/components/quiz-template'

export default function EmotionalIntelligenceQuiz() {
  const questions = [
    {
      id: 1,
      text: "I can easily identify and name my emotions as I experience them.",
      options: [],
      type: "scale" as const
    },
    {
      id: 2,
      text: "When someone is upset with me, I:",
      options: [
        "Stay calm and try to understand their perspective",
        "Listen actively and acknowledge their feelings",
        "Get defensive but try to work it out",
        "Feel overwhelmed and shut down",
        "React emotionally without thinking"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "I can accurately read the emotional state of others from their body language and tone.",
      options: [],
      type: "scale" as const
    },
    {
      id: 4,
      text: "How do you typically handle stress in high-pressure situations?",
      options: [
        "I remain calm and think clearly under pressure",
        "I feel stressed but can still function effectively",
        "I get anxious but can manage with effort",
        "I become overwhelmed and struggle to cope",
        "I panic and can't think straight"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "I'm skilled at motivating others and helping them manage their emotions.",
      options: [],
      type: "scale" as const
    },
    {
      id: 6,
      text: "When making important decisions, I:",
      options: [
        "Consider both logic and emotions equally",
        "Use mainly logic but check my emotional response",
        "Rely primarily on logical analysis",
        "Go with my gut feeling most of the time",
        "Feel overwhelmed and struggle to decide"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="emotional-intelligence"
      title="Emotional Intelligence Assessment"
      description="Assess your ability to understand and manage emotions in yourself and others."
      questions={questions}
      duration="15 min"
      category="Leadership"
      gatedContactForm={true}
    />
  )
}