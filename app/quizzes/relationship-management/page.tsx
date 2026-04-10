import QuizTemplate from '@/components/quiz-template'

export default function RelationshipManagementQuiz() {
  const questions = [
    {
      id: 1,
      text: "I actively listen to others without planning what I'll say next.",
      options: [],
      type: "scale" as const
    },
    {
      id: 2,
      text: "When conflicts arise in relationships, I:",
      options: [
        "Address issues directly but respectfully",
        "Try to find common ground and compromise",
        "Give the other person space to cool down first",
        "Avoid confrontation when possible",
        "Get emotional and struggle to communicate clearly"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "I am skilled at building rapport with new people quickly.",
      options: [],
      type: "scale" as const
    },
    {
      id: 4,
      text: "How do you maintain long-term relationships?",
      options: [
        "I consistently invest time and effort in relationships",
        "I stay in regular contact and check in frequently",
        "I make an effort but sometimes fall out of touch",
        "I struggle to maintain connections over time",
        "I tend to let relationships fade naturally"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "I can effectively influence others without being manipulative.",
      options: [],
      type: "scale" as const
    }
  ]

  return (
    <QuizTemplate
      slug="relationship-management"
      title="Relationship Management Assessment"
      description="Assess your skills in building and maintaining professional and personal relationships."
      questions={questions}
      duration="12 min"
      category="Leadership"
      gatedContactForm={true}
    />
  )
}