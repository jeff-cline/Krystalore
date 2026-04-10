import QuizTemplate from '@/components/quiz-template'

export default function EntrepreneurReadinessQuiz() {
  const questions = [
    {
      id: 1,
      text: "How clear is your business vision and long-term goals?",
      options: [
        "Crystal clear — I have a detailed vision, mission, and 3-year plan",
        "Mostly clear — I know the direction but need to refine details",
        "Somewhat clear — I have a general idea but lack specifics",
        "Vague — I know I want to start a business but haven't defined it",
        "No clarity — I'm interested in entrepreneurship but have no vision yet"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "How would you rate your financial literacy and money management?",
      options: [
        "Excellent — I understand P&L, cash flow, margins, and financial planning",
        "Good — I can read financials and manage budgets effectively",
        "Fair — I understand basics but struggle with financial strategy",
        "Limited — I know very little about business finances",
        "Minimal — Financial concepts feel overwhelming to me"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How comfortable are you with taking calculated risks?",
      options: [
        "Very comfortable — I assess risks strategically and act decisively",
        "Comfortable — I can take risks when I've done my research",
        "Moderate — I take small risks but big ones paralyze me",
        "Uncomfortable — I tend to play it safe and avoid risk",
        "Very uncomfortable — Risk feels reckless and terrifying to me"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How well do you manage your time and priorities?",
      options: [
        "Excellently — I use systems, time-block, and prioritize ruthlessly",
        "Well — I'm organized and productive most days",
        "Okay — Some days are productive, others feel chaotic",
        "Poorly — I often feel overwhelmed and scattered",
        "Very poorly — I constantly react instead of being proactive"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How would you rate your leadership and people skills?",
      options: [
        "Excellent — I inspire others, delegate well, and lead with vision",
        "Good — I can lead teams and communicate effectively",
        "Fair — I lead when needed but prefer doing things myself",
        "Limited — I struggle with delegation and managing others",
        "Minimal — I've never led a team and it intimidates me"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "How strong is your marketing and brand knowledge?",
      options: [
        "Very strong — I understand branding, digital marketing, and audience building",
        "Strong — I can create content and market effectively",
        "Moderate — I know marketing matters but lack strategy",
        "Weak — I don't know where to start with marketing",
        "Very weak — Marketing feels like a foreign language"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "How resilient are you when facing setbacks or failure?",
      options: [
        "Extremely resilient — I bounce back quickly and learn from every failure",
        "Very resilient — Setbacks slow me down but don't stop me",
        "Moderately resilient — I recover but it takes time and effort",
        "Not very resilient — Failure hits hard and takes a long time to recover from",
        "Not resilient — Setbacks make me want to quit entirely"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 8,
      text: "How strong is your professional network and community?",
      options: [
        "Excellent — I have mentors, peers, and collaborators I can call on anytime",
        "Good — I have a solid network that I actively maintain",
        "Fair — I know people but don't leverage relationships strategically",
        "Limited — My network is small and mostly personal connections",
        "Minimal — I feel isolated and don't have business connections"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 9,
      text: "How well do you balance work demands with personal life?",
      options: [
        "Excellently — I have clear boundaries and protect personal time",
        "Well — I usually maintain balance with occasional slips",
        "Okay — I struggle but try to set boundaries",
        "Poorly — Work dominates and personal life suffers regularly",
        "Very poorly — I have no boundaries and feel constantly burned out"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 10,
      text: "How strong is your growth mindset and commitment to learning?",
      options: [
        "Very strong — I invest in learning daily and embrace challenges as growth",
        "Strong — I regularly read, take courses, and seek feedback",
        "Moderate — I learn when motivated but lack consistency",
        "Weak — I know I should learn more but rarely do",
        "Very weak — I tend to stick with what I know and resist change"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="entrepreneur-readiness"
      title="Entrepreneur Readiness Assessment"
      description="Evaluate your entrepreneurial skills, mindset, and readiness to start or scale your business successfully."
      questions={questions}
      duration="15 min"
      category="Business"
      gatedContactForm={true}
    />
  )
}