import QuizTemplate from '@/components/quiz-template'

export default function BreathworkQuiz() {
  const questions = [
    {
      id: 1,
      text: "How aware are you of your breathing patterns throughout the day?",
      options: [
        "Very aware — I practice conscious breathing regularly",
        "Somewhat aware — I notice my breath during stress",
        "Occasionally — I rarely think about breathing",
        "Not aware — I only notice when I'm out of breath",
        "Never thought about it"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "How often do you experience shallow or rapid breathing?",
      options: [
        "Rarely — my breathing is usually calm and deep",
        "Sometimes — during stressful situations",
        "Often — I frequently catch myself breathing shallowly",
        "Very often — my breathing feels tight most of the time",
        "Constantly — I feel like I can never get a full breath"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "Have you ever tried breathwork or breathing exercises?",
      options: [
        "Yes — I have a regular breathwork practice",
        "Yes — I've tried it several times",
        "Once or twice — I'm curious but haven't committed",
        "No — but I'm interested in learning",
        "No — and I'm not sure what breathwork is"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How well do you manage stress in your daily life?",
      options: [
        "Very well — I have effective coping strategies",
        "Well — I manage most stress adequately",
        "Fair — some stress gets to me",
        "Poorly — I feel overwhelmed frequently",
        "Very poorly — stress dominates my life"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How would you rate your sleep quality?",
      options: [
        "Excellent — I fall asleep easily and wake refreshed",
        "Good — generally restful with occasional issues",
        "Fair — I struggle with sleep a few times a week",
        "Poor — I regularly have trouble sleeping",
        "Very poor — insomnia or sleep issues are constant"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "Do you experience physical tension (jaw clenching, shoulder tightness, headaches)?",
      options: [
        "Rarely — my body feels relaxed most of the time",
        "Sometimes — occasional tension in stress periods",
        "Often — I carry tension in specific areas",
        "Very often — tension is a daily companion",
        "Constantly — chronic pain and tension are normal for me"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="breathwork"
      title="Breathwork Assessment"
      description="Evaluate your breathing patterns and discover how breathwork can transform your well-being, focus, and stress management."
      questions={questions}
      duration="8 min"
      category="Wellness"
      gatedContactForm={true}
    />
  )
}