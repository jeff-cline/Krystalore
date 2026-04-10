import QuizTemplate from '@/components/quiz-template'

export default function DepressionQuiz() {
  const questions = [
    {
      id: 1,
      text: "How often have you had little interest or pleasure in doing things?",
      options: [
        "Rarely or never",
        "Several days in the past month",
        "More than half the days",
        "Nearly every day",
        "Constantly — nothing brings me joy"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "How often have you felt down, depressed, or hopeless?",
      options: [
        "Rarely or never",
        "Several days in the past month",
        "More than half the days",
        "Nearly every day",
        "Constantly"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How has your sleep been affected?",
      options: [
        "Sleep is normal and restful",
        "Occasional trouble falling or staying asleep",
        "Frequent sleep issues — too much or too little",
        "Significant sleep disruption most nights",
        "Severe — barely sleeping or sleeping all the time"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How would you describe your energy levels?",
      options: [
        "Good — I have consistent energy throughout the day",
        "Mostly good — some low-energy days",
        "Fair — I often feel tired or fatigued",
        "Low — fatigue is a daily struggle",
        "Very low — even basic tasks feel exhausting"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How is your appetite?",
      options: [
        "Normal — eating well and regularly",
        "Slightly changed — eating a bit more or less",
        "Noticeably changed — significant increase or decrease",
        "Significantly affected — major changes in eating patterns",
        "Severely affected — barely eating or constant overeating"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "How do you feel about yourself?",
      options: [
        "Good — I have a healthy self-image",
        "Mostly positive — with occasional self-doubt",
        "Mixed — I struggle with self-criticism",
        "Negative — I often feel like a failure",
        "Very negative — I feel worthless or like a burden"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "How well can you concentrate on tasks?",
      options: [
        "Very well — sharp focus",
        "Mostly well — occasional difficulty",
        "Fair — concentration comes and goes",
        "Poorly — hard to focus on most things",
        "Very poorly — I can barely concentrate at all"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 8,
      text: "How connected do you feel to the people around you?",
      options: [
        "Very connected — strong relationships and social life",
        "Mostly connected — with some isolation",
        "Somewhat — I've been withdrawing from others",
        "Disconnected — I avoid people and social situations",
        "Completely isolated — I feel alone even around others"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="depression"
      title="Depression & Mental Wellness Assessment"
      description="A compassionate check-in on your mental wellness with resources and next steps for support."
      questions={questions}
      duration="10 min"
      category="Wellness"
      gatedContactForm={true}
    />
  )
}