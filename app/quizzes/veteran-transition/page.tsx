import QuizTemplate from '@/components/quiz-template'

export default function VeteranTransitionQuiz() {
  const questions = [
    {
      id: 1,
      text: "How prepared do you feel for a civilian career after military service?",
      options: [
        "Fully prepared — I have a clear career path and plan",
        "Mostly prepared — I have a general direction",
        "Somewhat prepared — I'm exploring options",
        "Not very prepared — I'm unsure where to start",
        "Not prepared at all — I feel lost about my career future"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "How strong is your sense of identity beyond your military service?",
      options: [
        "Very strong — I know who I am outside the uniform",
        "Strong — I have a good sense of myself beyond service",
        "Developing — I'm working on it but it's a process",
        "Weak — I still define myself primarily by my service",
        "Very weak — I don't know who I am without the military"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How financially prepared are you for the transition to civilian life?",
      options: [
        "Very prepared — savings, budget, and benefits all in order",
        "Mostly prepared — I have a financial plan with some gaps",
        "Somewhat prepared — I've started planning but need more work",
        "Not very prepared — finances are a major concern",
        "Not prepared — I haven't addressed financial transition yet"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How strong is your support network outside the military?",
      options: [
        "Very strong — I have deep civilian relationships and community",
        "Strong — I have a solid network I can rely on",
        "Moderate — I have some connections but could use more",
        "Weak — most of my support is still military-connected",
        "Very weak — I feel isolated outside the military community"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How would you rate your current mental wellness and stress management?",
      options: [
        "Excellent — I have strong coping strategies and feel balanced",
        "Good — I manage well most of the time",
        "Fair — I have good days and bad days",
        "Poor — I struggle with stress, anxiety, or mood regularly",
        "Very poor — I need support but haven't sought it yet"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "How well is your family adjusting to the transition from military life?",
      options: [
        "Very well — we're communicating and adapting together",
        "Well — there are challenges but we're working through them",
        "Okay — some family members are struggling more than others",
        "Not well — transition has created significant family tension",
        "Poorly — our family is really struggling with this change"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "How confident are you in translating your military skills to civilian opportunities?",
      options: [
        "Very confident — I can clearly articulate my value to employers",
        "Confident — I understand most of my transferable skills",
        "Somewhat confident — I know I have skills but struggle to translate them",
        "Not very confident — I don't know how my experience applies",
        "Not confident — I feel my military experience won't be valued"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 8,
      text: "How clear is your sense of purpose and direction for civilian life?",
      options: [
        "Crystal clear — I have a mission and I'm pursuing it",
        "Mostly clear — I have a general direction with some uncertainty",
        "Somewhat clear — I have ideas but nothing concrete",
        "Unclear — I'm searching for purpose and meaning",
        "Very unclear — I feel directionless without the military mission"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 9,
      text: "How connected do you feel to a civilian community or peer group?",
      options: [
        "Very connected — I've built meaningful civilian relationships",
        "Connected — I have a growing community outside the military",
        "Somewhat connected — I'm making efforts but it's slow",
        "Disconnected — I miss the military bond and haven't replaced it",
        "Very disconnected — I feel like an outsider in civilian life"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 10,
      text: "How open are you to learning new skills and adapting to civilian norms?",
      options: [
        "Fully open — I embrace growth and new challenges",
        "Very open — I'm willing to learn and adapt",
        "Somewhat open — I'm trying but it's uncomfortable",
        "Resistant — I find civilian culture frustrating or confusing",
        "Very resistant — I don't see why I should have to change"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="veteran-transition"
      title="Veteran Transition Readiness"
      description="Assess your readiness for civilian life across career, identity, finances, community, and mental wellness."
      questions={questions}
      duration="20 min"
      category="Personal Development"
      gatedContactForm={true}
    />
  )
}