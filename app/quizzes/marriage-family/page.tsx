import QuizTemplate from '@/components/quiz-template'

export default function MarriageFamilyQuiz() {
  const questions = [
    {
      id: 1,
      text: "How often do you and your partner have meaningful conversations (beyond logistics)?",
      options: [
        "Daily — we connect deeply every day",
        "Several times a week",
        "Once a week or so",
        "Rarely — we mostly discuss tasks and schedules",
        "Almost never — we feel disconnected"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "How well do you handle conflict in your relationship?",
      options: [
        "Very well — we resolve issues with respect and empathy",
        "Well — we work through most disagreements",
        "Okay — some conflicts get resolved, others linger",
        "Poorly — arguments often escalate",
        "Very poorly — we avoid conflict or it becomes destructive"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How present are you with your family when you're home?",
      options: [
        "Fully present — phone away, focused on family",
        "Mostly present — with occasional distractions",
        "Somewhat — I try but work often pulls me away",
        "Not very — I'm physically there but mentally elsewhere",
        "Rarely present — work dominates even at home"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How aligned are you and your partner on parenting and family goals?",
      options: [
        "Fully aligned — we're a strong team",
        "Mostly aligned — with minor differences",
        "Somewhat aligned — we agree on big things but clash on details",
        "Not very aligned — we often disagree on approach",
        "Not aligned at all — parenting is a major source of tension"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How would you rate the emotional intimacy in your relationship?",
      options: [
        "Excellent — we're deeply emotionally connected",
        "Good — we share openly most of the time",
        "Fair — we connect sometimes but there are walls",
        "Poor — we struggle to be vulnerable with each other",
        "Very poor — emotional distance is significant"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "How often do you prioritize quality time as a couple?",
      options: [
        "Weekly — date nights and quality time are non-negotiable",
        "A few times a month",
        "Monthly at best",
        "Rarely — it's been a while since we had quality time",
        "Never — we don't make time for each other"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "How supported do you feel by your partner in your personal goals?",
      options: [
        "Completely — they're my biggest cheerleader",
        "Mostly — they support me in most things",
        "Somewhat — support is inconsistent",
        "Not very — I feel like I'm on my own",
        "Not at all — my goals feel dismissed"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="marriage-family"
      title="Improve My Marriage & Family Relationships"
      description="Assess the health of your marriage and family dynamics and discover areas for growth and deeper connection."
      questions={questions}
      duration="12 min"
      category="Relationships"
      gatedContactForm={true}
    />
  )
}