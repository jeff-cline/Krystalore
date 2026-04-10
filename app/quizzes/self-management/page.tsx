import QuizTemplate from '@/components/quiz-template'

export default function SelfManagementQuiz() {
  const questions = [
    {
      id: 1,
      text: "I effectively prioritize my tasks and manage my time.",
      options: [],
      type: "scale" as const
    },
    {
      id: 2,
      text: "When facing a stressful deadline, I:",
      options: [
        "Stay organized and work systematically",
        "Focus intensely but maintain quality",
        "Work harder but feel stressed",
        "Rush through and compromise quality",
        "Feel overwhelmed and procrastinate"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "I am disciplined about maintaining healthy habits and routines.",
      options: [],
      type: "scale" as const
    },
    {
      id: 4,
      text: "How do you handle setbacks or failures?",
      options: [
        "Learn from them and adjust my approach",
        "Analyze what went wrong and improve",
        "Feel disappointed but bounce back quickly",
        "Take it personally and feel discouraged",
        "Get stuck dwelling on the failure"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "I can control my impulses and delay gratification when necessary.",
      options: [],
      type: "scale" as const
    }
  ]

  return (
    <QuizTemplate
      slug="self-management"
      title="Self-Management Skills Assessment"
      description="Evaluate your ability to manage time, stress, and personal productivity effectively."
      questions={questions}
      duration="10 min"
      category="Personal Development"
      gatedContactForm={true}
    />
  )
}