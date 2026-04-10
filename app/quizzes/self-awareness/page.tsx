import QuizTemplate from '@/components/quiz-template'

export default function SelfAwarenessQuiz() {
  const questions = [
    {
      id: 1,
      text: "How often do you feel that your daily actions align with your core values?",
      options: [
        "Always - my actions consistently reflect my values",
        "Most of the time - I'm generally aligned but sometimes compromise",
        "Sometimes - I struggle to maintain alignment in certain areas",
        "Rarely - I often feel disconnected from my values",
        "Never - I'm unsure what my core values even are"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "When making important decisions, what influences you most?",
      options: [
        "My personal values and long-term vision",
        "What others expect of me",
        "What feels safe and comfortable",
        "What will bring immediate rewards",
        "I often avoid making important decisions"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How well do you understand your emotional triggers?",
      options: [
        "Very well - I can identify and manage them effectively",
        "Well - I recognize them most of the time",
        "Somewhat - I'm learning to identify patterns",
        "Poorly - I'm often surprised by my reactions",
        "Not at all - I react without understanding why"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How often do you take time for self-reflection?",
      options: [
        "Daily - it's a regular part of my routine",
        "Weekly - I set aside dedicated time each week",
        "Monthly - I reflect during quiet moments",
        "Rarely - only during major life events",
        "Never - I'm too busy to reflect"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "When receiving feedback, how do you typically respond?",
      options: [
        "I welcome it and use it for growth",
        "I listen carefully and consider it thoughtfully",
        "I accept it but sometimes feel defensive",
        "I often feel criticized and struggle to hear it",
        "I avoid situations where I might receive feedback"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="self-awareness"
      title="Self Awareness: How Aligned Is Your Life?"
      description="Discover how well your daily actions align with your core values and long-term goals. This assessment will help you understand your level of self-awareness and authenticity."
      questions={questions}
      duration="10 min"
      category="Personal Development"
      gatedContactForm={true}
    />
  )
}