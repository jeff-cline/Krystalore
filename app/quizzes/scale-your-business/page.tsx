import QuizTemplate from '@/components/quiz-template'

export default function ScaleYourBusinessQuiz() {
  const questions = [
    {
      id: 1,
      text: "What stage is your business currently in?",
      options: [
        "Thriving — multiple revenue streams and a team",
        "Growing — consistent revenue, ready to expand",
        "Building — some clients but not yet stable",
        "Starting — just getting off the ground",
        "Idea stage — haven't launched yet"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "Do you have a book or content strategy to establish thought leadership?",
      options: [
        "Yes — published book(s) and active content strategy",
        "In progress — writing a book or building content",
        "Thinking about it — know I should but haven't started",
        "No — haven't considered it",
        "Not sure where to begin"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How strong is your community or audience?",
      options: [
        "Strong — engaged community across multiple platforms",
        "Growing — building an audience with some engagement",
        "Small — have some followers but low engagement",
        "Minimal — just starting to build online presence",
        "None — no community or audience yet"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "Have you hosted or considered hosting retreats or events?",
      options: [
        "Yes — I regularly host successful retreats/events",
        "Yes — I've hosted a few and want to do more",
        "Considering it — interested but haven't started planning",
        "No — sounds interesting but seems overwhelming",
        "No — haven't thought about it"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How comfortable are you with public speaking or being on stage?",
      options: [
        "Very comfortable — I speak regularly and love it",
        "Comfortable — I can do it and enjoy it",
        "Somewhat comfortable — I can do it but it's not natural",
        "Uncomfortable — I avoid it when possible",
        "Terrified — public speaking is my biggest fear"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "Do you have systems and processes that could run without you?",
      options: [
        "Yes — my business runs smoothly even when I'm away",
        "Mostly — some systems in place, some gaps",
        "Partially — I'm still involved in most things",
        "No — everything depends on me",
        "I don't know where to start with systems"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "How clear is your vision for scaling in the next 12 months?",
      options: [
        "Crystal clear — I have a detailed plan",
        "Fairly clear — I know the direction, need specifics",
        "Somewhat clear — I have ideas but no concrete plan",
        "Unclear — I know I want to grow but don't know how",
        "No vision — I'm stuck and need guidance"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 8,
      text: "Are you leveraging partnerships and collaborations?",
      options: [
        "Extensively — partnerships are key to my growth",
        "Some — I have a few strategic partnerships",
        "Starting to — exploring opportunities",
        "Not yet — but I want to",
        "No — I tend to do everything alone"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="scale-your-business"
      title="Ready to Scale Your Business?"
      description="Discover your readiness to scale — from writing books to hosting retreats, building community, and speaking on stages."
      questions={questions}
      duration="12 min"
      category="Business"
      gatedContactForm={true}
    />
  )
}