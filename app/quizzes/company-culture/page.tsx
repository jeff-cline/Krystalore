import QuizTemplate from '@/components/quiz-template'

export default function CompanyCultureQuiz() {
  const questions = [
    {
      id: 1,
      text: "How would you rate the communication between leadership and employees?",
      options: [
        "Excellent — transparent and frequent",
        "Good — mostly clear with occasional gaps",
        "Average — some departments communicate well, others don't",
        "Poor — employees often feel out of the loop",
        "Very poor — there's almost no meaningful communication"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "How engaged do your team members seem in their daily work?",
      options: [
        "Highly engaged — they go above and beyond",
        "Mostly engaged — they do solid work consistently",
        "Somewhat engaged — they do what's required",
        "Disengaged — many seem checked out",
        "Actively disengaged — morale is visibly low"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How would you describe employee retention at your organization?",
      options: [
        "Excellent — people rarely leave",
        "Good — turnover is manageable",
        "Average — we lose some good people",
        "Below average — turnover is a regular challenge",
        "Poor — we're constantly replacing people"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How well does leadership model the company's stated values?",
      options: [
        "Always — leadership walks the talk",
        "Usually — with some inconsistencies",
        "Sometimes — values feel aspirational, not practiced",
        "Rarely — there's a gap between words and actions",
        "Never — values are just words on a wall"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How safe do employees feel sharing honest feedback?",
      options: [
        "Very safe — feedback is encouraged and acted on",
        "Mostly safe — people share in the right settings",
        "Somewhat safe — depends on the manager",
        "Not very safe — people worry about consequences",
        "Not safe at all — feedback is actively discouraged"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "How would you rate team morale overall?",
      options: [
        "Excellent — energy is high and positive",
        "Good — generally positive with normal ups and downs",
        "Fair — morale varies widely by team",
        "Low — many people seem stressed or unhappy",
        "Very low — burnout and frustration are widespread"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "How often does your organization celebrate wins and recognize contributions?",
      options: [
        "Regularly — recognition is part of the culture",
        "Often — major achievements are celebrated",
        "Sometimes — it happens but not consistently",
        "Rarely — people feel their work goes unnoticed",
        "Never — there's no recognition culture"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="company-culture"
      title="How's Your Company Culture?"
      description="A pulse check on leadership, communication, morale, engagement, and retention in your organization."
      questions={questions}
      duration="10 min"
      category="Leadership"
      gatedContactForm={true}
    />
  )
}