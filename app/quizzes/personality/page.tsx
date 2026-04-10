import QuizTemplate from '@/components/quiz-template'

export default function PersonalityQuiz() {
  const questions = [
    {
      id: 1,
      text: "I prefer to work alone rather than in teams.",
      options: [],
      type: "scale" as const
    },
    {
      id: 2,
      text: "When making decisions, I typically:",
      options: [
        "Analyze all available data before deciding",
        "Consider both facts and gut instinct",
        "Trust my intuition and experience",
        "Seek input from trusted advisors first",
        "Make quick decisions and adjust if needed"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 3,
      text: "I enjoy taking on new challenges and risks.",
      options: [],
      type: "scale" as const
    },
    {
      id: 4,
      text: "In meetings, I tend to:",
      options: [
        "Lead the discussion and drive decisions",
        "Contribute ideas and facilitate collaboration",
        "Listen carefully and ask thoughtful questions",
        "Support others' ideas and build consensus",
        "Observe and speak when I have something valuable to add"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 5,
      text: "I am energized by social interactions and networking.",
      options: [],
      type: "scale" as const
    },
    {
      id: 6,
      text: "How do you handle criticism or negative feedback?",
      options: [
        "View it as valuable data for improvement",
        "Consider the source and context carefully",
        "Feel defensive initially but try to learn from it",
        "Take it personally but work to improve",
        "Find it difficult to handle constructively"
      ],
      type: "multiple-choice" as const
    },
    {
      id: 7,
      text: "I prefer detailed planning over spontaneous action.",
      options: [],
      type: "scale" as const
    },
    {
      id: 8,
      text: "My leadership style is best described as:",
      options: [
        "Visionary - I inspire others with big picture thinking",
        "Collaborative - I build consensus and empower teams",
        "Results-driven - I focus on performance and outcomes",
        "Supportive - I develop people and provide guidance",
        "Adaptive - I adjust my style based on the situation"
      ],
      type: "multiple-choice" as const
    }
  ]

  return (
    <QuizTemplate
      slug="personality"
      title="Executive Personality Profile"
      description="Comprehensive personality assessment tailored for executive leadership roles."
      questions={questions}
      duration="20 min"
      category="Leadership"
      gatedContactForm={true}
    />
  )
}