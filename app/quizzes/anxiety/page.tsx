import QuizTemplate from '@/components/quiz-template'

export default function AnxietyQuiz() {
  const questions = [
    {
      id: 1,
      text: "How often do you feel nervous, anxious, or on edge?",
      options: [
        "Rarely or never",
        "Several days in the past month",
        "More than half the days",
        "Nearly every day",
        "Constantly — it never stops"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "How well can you control your worrying?",
      options: [
        "Very well — I can redirect my thoughts easily",
        "Mostly well — with some effort",
        "Sometimes — it takes significant effort",
        "Poorly — worrying feels out of control",
        "Not at all — I can't stop worrying"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How often do you have trouble relaxing?",
      options: [
        "Rarely — I can relax easily",
        "Sometimes — occasional difficulty",
        "Often — relaxation doesn't come naturally",
        "Very often — I always feel keyed up",
        "Constantly — I can't remember the last time I truly relaxed"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How often do you feel restless or find it hard to sit still?",
      options: [
        "Rarely or never",
        "Occasionally",
        "Frequently",
        "Most of the time",
        "Constantly"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How often do you become easily annoyed or irritable?",
      options: [
        "Rarely — I'm generally patient and calm",
        "Sometimes — in high-stress situations",
        "Often — small things set me off",
        "Very often — I'm irritable most days",
        "Constantly — everything bothers me"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "How often do you feel afraid, as if something awful might happen?",
      options: [
        "Rarely or never",
        "Occasionally — during major stressors",
        "Sometimes — a general sense of dread",
        "Often — fear is a regular companion",
        "Constantly — I live in a state of fear"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "How does anxiety affect your daily functioning (work, relationships, self-care)?",
      options: [
        "Not at all — I function well",
        "Mildly — minor impact occasionally",
        "Moderately — it affects some areas of my life",
        "Significantly — it interferes with daily activities",
        "Severely — anxiety controls my life"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="anxiety"
      title="Anxiety Assessment"
      description="Understand your anxiety levels and get personalized strategies for managing stress and worry."
      questions={questions}
      duration="8 min"
      category="Wellness"
      gatedContactForm={true}
    />
  )
}