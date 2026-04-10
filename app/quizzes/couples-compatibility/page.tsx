import QuizTemplate from '@/components/quiz-template'

export default function CouplesCompatibilityQuiz() {
  const questions = [
    {
      id: 1,
      text: "How would you describe your communication style as a couple?",
      options: [
        "We communicate openly, honestly, and frequently about everything",
        "We communicate well on most topics with occasional difficulty",
        "We talk regularly but avoid certain sensitive subjects",
        "Communication is inconsistent — we often misunderstand each other",
        "We rarely have meaningful conversations"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "How well do you understand each other's love languages?",
      options: [
        "We both know and actively speak each other's love language daily",
        "We know them and try to express love in those ways",
        "One of us is more aware than the other",
        "We've never really discussed love languages",
        "We show love in ways the other doesn't recognize or appreciate"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How do you handle conflict and disagreements?",
      options: [
        "We address issues calmly, listen to each other, and find solutions together",
        "We work through most conflicts well but some get heated",
        "We tend to avoid conflict until it builds up",
        "Arguments escalate quickly and often go unresolved",
        "Conflict is destructive — we say things we regret or shut down completely"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How aligned are you on major life goals (career, family, lifestyle)?",
      options: [
        "Completely aligned — we share a clear, exciting vision for our future",
        "Mostly aligned with some differences we're working through",
        "We agree on some things but have significant gaps in others",
        "We haven't really discussed our long-term goals together",
        "Our goals seem to be pulling us in different directions"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How much quality time do you spend together each week?",
      options: [
        "We prioritize quality time daily — it's non-negotiable",
        "We have regular date nights and intentional time together",
        "We spend time together but it's often unfocused or distracted",
        "Quality time is rare — life keeps getting in the way",
        "We live together but rarely connect meaningfully"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "How aligned are you on financial values and money management?",
      options: [
        "We're fully transparent, share financial goals, and budget together",
        "We generally agree on finances with occasional disagreements",
        "Money is a topic we avoid or struggle to discuss calmly",
        "We have very different spending habits and it causes tension",
        "Finances are a major source of conflict in our relationship"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "How satisfied are you with the emotional and physical intimacy in your relationship?",
      options: [
        "Deeply satisfied — we're emotionally and physically connected",
        "Mostly satisfied with room for growth in some areas",
        "It's okay but something feels missing",
        "We're disconnected — intimacy has decreased significantly",
        "There's very little emotional or physical intimacy"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 8,
      text: "How aligned are you on family planning and/or parenting?",
      options: [
        "Completely aligned — we share the same vision and approach",
        "Mostly aligned with minor differences we navigate well",
        "We agree on the big picture but clash on daily decisions",
        "We have significant disagreements about family and parenting",
        "This topic causes major conflict or we avoid it entirely"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 9,
      text: "How compatible are your social lives and need for independence?",
      options: [
        "We balance togetherness and independence perfectly",
        "We mostly respect each other's need for space and social time",
        "One of us wants more independence than the other",
        "We struggle with jealousy, control, or codependency",
        "Our social needs are fundamentally incompatible"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 10,
      text: "How committed are you both to personal and relationship growth?",
      options: [
        "We both actively invest in self-improvement and our relationship",
        "One of us drives growth and the other follows willingly",
        "We talk about growth but don't consistently take action",
        "Only one of us seems interested in improving things",
        "Neither of us is actively working on the relationship"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="couples-compatibility"
      title="Couples Compatibility Assessment"
      description="Discover how well you and your partner align on communication, values, goals, and relationship dynamics."
      questions={questions}
      duration="18 min"
      category="Relationships"
      gatedContactForm={true}
    />
  )
}