import QuizTemplate from '@/components/quiz-template'

export default function RetreatReadyQuiz() {
  const questions = [
    {
      id: 1,
      text: "I am open to stepping outside my comfort zone for personal growth.",
      options: [],
      type: "scale" as const
    },
    {
      id: 2,
      text: "What is your main motivation for considering a retreat?",
      options: [
        "I want to make significant life changes",
        "I need clarity on my direction in life",
        "I'm feeling burned out and need renewal",
        "I want to connect with like-minded people",
        "I'm curious but not sure what to expect"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "I am willing to share personal experiences and be vulnerable with others.",
      options: [],
      type: "scale" as const
    },
    {
      id: 4,
      text: "How much time can you realistically commit to personal development work?",
      options: [
        "Several hours daily for intensive growth",
        "1-2 hours daily for focused development",
        "A few hours weekly when possible",
        "Limited time but highly motivated",
        "I'm not sure about the time commitment"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "I am ready to examine and potentially change limiting beliefs about myself.",
      options: [],
      type: "scale" as const
    }
  ]

  return (
    <QuizTemplate
      slug="retreat-ready"
      title="Retreat Ready Assessment"
      description="Determine your readiness for a transformational retreat experience."
      questions={questions}
      duration="6 min"
      category="Wellness"
      gatedContactForm={true}
    />
  )
}