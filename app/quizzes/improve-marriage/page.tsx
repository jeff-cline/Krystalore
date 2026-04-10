import QuizTemplate from '@/components/quiz-template'

export default function ImproveMarriageQuiz() {
  const questions = [
    {
      id: 1,
      text: "How frequently do you and your spouse have meaningful, non-logistical conversations?",
      options: [
        "Daily — we connect deeply and intentionally every day",
        "Several times a week — we make time for real conversations",
        "About once a week — when we can find the time",
        "Rarely — most of our communication is about tasks and schedules",
        "Almost never — we feel like roommates more than partners"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "How often do you express appreciation and gratitude to your spouse?",
      options: [
        "Daily — we regularly thank and acknowledge each other",
        "A few times a week — we try to notice the good",
        "Occasionally — when something stands out",
        "Rarely — we tend to focus on what's wrong rather than what's right",
        "Almost never — appreciation feels foreign in our dynamic"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How satisfied are you with the physical intimacy in your marriage?",
      options: [
        "Very satisfied — we're connected and attentive to each other's needs",
        "Mostly satisfied — there's room for improvement but we're close",
        "Somewhat satisfied — it's become routine or infrequent",
        "Dissatisfied — there's a significant gap between our needs",
        "Very dissatisfied — physical intimacy is nearly nonexistent"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How well do you share household responsibilities and mental load?",
      options: [
        "Very equitably — we both contribute and communicate about it",
        "Mostly fair — one of us does a bit more but it's manageable",
        "Somewhat uneven — it creates occasional frustration",
        "Very uneven — one person carries most of the burden",
        "Extremely unbalanced — it's a major source of resentment"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How aligned are you on future plans (finances, retirement, family goals)?",
      options: [
        "Fully aligned — we plan together and share a clear vision",
        "Mostly aligned — we agree on the big things",
        "Partially aligned — we have some shared goals but significant gaps",
        "Misaligned — we want different things and haven't reconciled them",
        "Completely misaligned — our futures seem to be going in different directions"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "How well do you handle stress and difficult seasons as a team?",
      options: [
        "Excellently — stress brings us closer and we support each other",
        "Well — we lean on each other most of the time",
        "Okay — sometimes we support each other, sometimes we withdraw",
        "Poorly — stress drives a wedge between us",
        "Very poorly — difficult times make us feel like adversaries"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "How well do you each maintain your individual identity within the marriage?",
      options: [
        "Very well — we support each other's interests, friendships, and growth",
        "Mostly well — we encourage independence with minor challenges",
        "Somewhat — one or both of us has lost some sense of self",
        "Poorly — the marriage has consumed our individual identities",
        "Very poorly — there's codependency or controlling behavior"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 8,
      text: "How often do you have intentional date nights or couple time?",
      options: [
        "Weekly — date nights are a priority we protect",
        "A few times a month — we make regular effort",
        "Monthly at best — it keeps falling off the calendar",
        "A few times a year — it's been too long",
        "We can't remember the last time we had a real date night"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="improve-marriage"
      title="Improve My Marriage Assessment"
      description="Evaluate key areas of your marriage and get personalized recommendations for growth and deeper connection."
      questions={questions}
      duration="15 min"
      category="Relationships"
      gatedContactForm={true}
    />
  )
}