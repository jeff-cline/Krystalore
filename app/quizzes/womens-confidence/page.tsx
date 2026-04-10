import QuizTemplate from '@/components/quiz-template'

export default function WomensConfidenceQuiz() {
  const questions = [
    {
      id: 1,
      text: "How confident do you feel in your ability to handle life's challenges?",
      options: [
        "Extremely confident — I trust myself completely",
        "Very confident — I handle most things well",
        "Somewhat confident — it depends on the situation",
        "Not very confident — I often doubt myself",
        "Not confident at all — I feel overwhelmed regularly"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 2,
      text: "How well do you set and maintain boundaries in your relationships?",
      options: [
        "Excellently — I set clear boundaries without guilt",
        "Well — I usually maintain my boundaries",
        "Okay — I set them but often cave under pressure",
        "Poorly — I struggle to say no",
        "Very poorly — I have almost no boundaries"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "How consistent are your self-care habits?",
      options: [
        "Very consistent — self-care is non-negotiable for me",
        "Mostly consistent — I prioritize it most days",
        "Somewhat — I do it when I have time",
        "Rarely — self-care feels selfish or impossible",
        "Never — I always put everyone else first"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 4,
      text: "How satisfied are you with your career or professional life?",
      options: [
        "Extremely satisfied — I'm doing meaningful, fulfilling work",
        "Very satisfied — I enjoy my work and see a path forward",
        "Somewhat satisfied — it's fine but not inspiring",
        "Dissatisfied — I feel stuck or undervalued",
        "Very dissatisfied — I dread my work situation"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "How do you feel about your body and physical health?",
      options: [
        "I love and appreciate my body — I feel strong and healthy",
        "I feel good — I'm working on my health consistently",
        "Neutral — some days are better than others",
        "Negative — I struggle with body image or health",
        "Very negative — my relationship with my body causes significant stress"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 6,
      text: "How comfortable are you speaking up and using your voice?",
      options: [
        "Completely comfortable — I speak up without hesitation",
        "Mostly comfortable — I share my opinions in most situations",
        "Somewhat — I speak up sometimes but hold back often",
        "Uncomfortable — I usually stay quiet to avoid conflict",
        "Very uncomfortable — I almost never share my true thoughts"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "How strong is your support network of other women?",
      options: [
        "Incredibly strong — I have a deep sisterhood of supportive women",
        "Strong — I have several women I can count on",
        "Moderate — I have a few supportive friendships",
        "Weak — I feel isolated and lack close female friendships",
        "Nonexistent — I don't have women I can turn to"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 8,
      text: "How clear are you on your goals and vision for your life?",
      options: [
        "Crystal clear — I have a detailed vision and action plan",
        "Very clear — I know what I want and I'm working toward it",
        "Somewhat clear — I have a general direction but lack specifics",
        "Unclear — I feel directionless or stuck",
        "Completely lost — I have no idea what I want"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 9,
      text: "How well do you manage stress and emotional challenges?",
      options: [
        "Excellently — I have tools and strategies that work",
        "Well — I manage most stress effectively",
        "Okay — sometimes I cope well, sometimes I don't",
        "Poorly — stress often overwhelms me",
        "Very poorly — I feel constantly stressed and on edge"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 10,
      text: "How often do you celebrate your wins and acknowledge your progress?",
      options: [
        "Always — I celebrate every win, big and small",
        "Often — I make a point to acknowledge my progress",
        "Sometimes — I notice my wins but quickly move on",
        "Rarely — I tend to focus on what's left to do",
        "Never — I dismiss my accomplishments and focus on flaws"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="womens-confidence"
      title="Women's Confidence Assessment"
      description="Discover your level of confidence, self-empowerment, and personal fulfillment with personalized insights for growth."
      questions={questions}
      duration="15 min"
      category="Personal Development"
      gatedContactForm={true}
    />
  )
}