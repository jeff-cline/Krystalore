import QuizTemplate from '@/components/quiz-template'

export default function LifeAlignmentQuiz() {
  const questions = [
    {
      id: 1,
      text: "How well do your daily actions align with your core values?",
      options: [
        "My actions consistently reflect my values",
        "Most of my actions align with my values",
        "Some of my actions align with my values",
        "My actions rarely align with my values",
        "I'm not sure what my core values are"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "I feel fulfilled by the work I do every day.",
      options: [],
      type: "scale" as const
    },
    {
      id: 3,
      text: "How clear are you about your long-term life goals?",
      options: [
        "Extremely clear - I have specific, written goals",
        "Very clear - I know what I want to achieve",
        "Somewhat clear - I have a general direction",
        "Not very clear - I'm still figuring it out",
        "Not clear at all - I feel lost"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "I regularly make decisions based on my personal mission or purpose.",
      options: [],
      type: "scale" as const
    },
    {
      id: 5,
      text: "How satisfied are you with your current life balance?",
      options: [
        "Extremely satisfied - Everything is in perfect balance",
        "Very satisfied - Most areas are well-balanced",
        "Somewhat satisfied - Some areas need adjustment",
        "Not very satisfied - Many areas are out of balance",
        "Not satisfied at all - Everything feels chaotic"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="life-alignment"
      title="Life Alignment Assessment"
      description="Discover how aligned your current life is with your core values and long-term goals."
      questions={questions}
      duration="10 min"
      category="Personal Development"
      gatedContactForm={true}
    />
  )
}