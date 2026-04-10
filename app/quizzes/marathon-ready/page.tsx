import QuizTemplate from '@/components/quiz-template'

export default function MarathonReadyQuiz() {
  const questions = [
    {
      id: 1,
      text: "How many days per week do you currently exercise?",
      options: [
        "5-7 days per week",
        "3-4 days per week", 
        "1-2 days per week",
        "Occasionally",
        "I don't currently exercise"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "What's the longest distance you've run continuously in the past 6 months?",
      options: [
        "More than 10 miles",
        "5-10 miles",
        "3-5 miles",
        "1-3 miles",
        "Less than 1 mile"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "I have the mental determination to push through physical discomfort.",
      options: [],
      type: "scale" as const
    },
    {
      id: 4,
      text: "How would you rate your current cardiovascular fitness?",
      options: [
        "Excellent - I can run long distances easily",
        "Good - I can run moderate distances comfortably",
        "Fair - I can jog but get winded quickly",
        "Poor - I get out of breath walking up stairs",
        "Very poor - I avoid physical activity"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "I am committed to following a structured training plan for 16+ weeks.",
      options: [],
      type: "scale" as const
    }
  ]

  return (
    <QuizTemplate
      slug="marathon-ready"
      title="Marathon Ready Assessment"
      description="Evaluate your physical and mental readiness for marathon training and completion."
      questions={questions}
      duration="8 min"
      category="Fitness"
      gatedContactForm={true}
    />
  )
}