import QuizTemplate from '@/components/quiz-template'

export default function SocialAwarenessQuiz() {
  const questions = [
    {
      id: 1,
      text: "I can easily pick up on unspoken social cues and body language.",
      options: [],
      type: "scale" as const
    },
    {
      id: 2,
      text: "In group settings, I:",
      options: [
        "Naturally understand group dynamics and adapt accordingly",
        "Pay attention to how people interact and respond",
        "Focus on a few people rather than the whole group",
        "Sometimes miss social cues but try to catch up",
        "Find it hard to read the room"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "I understand the unwritten rules and politics in my workplace/social groups.",
      options: [],
      type: "scale" as const
    },
    {
      id: 4,
      text: "How well do you understand others' motivations and needs?",
      options: [
        "I intuitively understand what drives people",
        "I'm good at figuring out what people want",
        "I can usually understand with some effort",
        "I sometimes misread people's motivations",
        "I struggle to understand what others really want"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "I can sense when someone needs support, even if they don't ask for it.",
      options: [],
      type: "scale" as const
    }
  ]

  return (
    <QuizTemplate
      slug="social-awareness"
      title="Social Awareness Assessment"
      description="Measure your ability to read social cues and understand group dynamics."
      questions={questions}
      duration="12 min"
      category="Leadership"
      gatedContactForm={true}
    />
  )
}