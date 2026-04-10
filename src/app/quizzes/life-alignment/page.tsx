'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, RotateCcw, Share2, Mail, CheckCircle } from 'lucide-react'

// Quiz data structure
const quizData = {
  sections: [
    {
      id: 'sleep',
      title: 'SLEEP',
      subtitle: 'Rest & Recovery',
      questions: [
        {
          id: 'sleep-hours',
          question: 'How many hours of sleep do you get per night on average?',
          options: [
            { text: 'Less than 5 hours', score: 1 },
            { text: '5-6 hours', score: 2 },
            { text: '7-8 hours', score: 3 },
            { text: 'More than 8 hours', score: 4 }
          ]
        },
        {
          id: 'sleep-ease',
          question: 'How easily do you fall asleep?',
          options: [
            { text: 'Struggle for 30+ minutes', score: 1 },
            { text: 'Take some time (15-30 minutes)', score: 2 },
            { text: 'Usually fall asleep easily (<15 minutes)', score: 3 },
            { text: 'Fall asleep quickly and consistently', score: 4 }
          ]
        },
        {
          id: 'sleep-wake',
          question: 'How often do you wake up during the night?',
          options: [
            { text: 'Multiple times and struggle to get back to sleep', score: 1 },
            { text: 'Occasionally and take time to fall back asleep', score: 2 },
            { text: 'Briefly but fall back asleep easily', score: 3 },
            { text: 'Rarely wake up during the night', score: 4 }
          ]
        },
        {
          id: 'sleep-eat',
          question: 'Do you eat when you wake up at night?',
          options: [
            { text: 'Yes, frequently', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Rarely', score: 3 },
            { text: 'Never', score: 4 }
          ]
        }
      ],
      tips: [
        'Establish a consistent bedtime routine 30-60 minutes before sleep',
        'Keep your bedroom cool (65-68°F), dark, and quiet',
        'Avoid screens 1-2 hours before bedtime',
        'Consider magnesium supplementation (consult healthcare provider)',
        'Stop eating 2-3 hours before bed to improve sleep quality'
      ]
    },
    {
      id: 'nutrition',
      title: 'NUTRITION',
      subtitle: 'Fuel for Life',
      questions: [
        {
          id: 'nutrition-quality',
          question: 'How often do you eat whole, clean foods versus processed foods?',
          options: [
            { text: 'Mostly processed foods', score: 1 },
            { text: 'A mix of both', score: 2 },
            { text: 'Mostly whole foods', score: 3 },
            { text: 'Almost entirely whole foods', score: 4 }
          ]
        }
      ],
      tips: [
        'Focus on whole, unprocessed foods: vegetables, fruits, lean proteins, healthy fats',
        'Meal prep on weekends to avoid processed food temptations',
        'Read ingredient labels - choose foods with 5 ingredients or fewer',
        'Shop the perimeter of the grocery store first',
        'Consider working with a nutritionist for personalized guidance'
      ]
    },
    {
      id: 'hydration',
      title: 'HYDRATION',
      subtitle: 'Essential Foundation',
      questions: [
        {
          id: 'hydration-intake',
          question: 'Are you drinking half your body weight in ounces of water daily?',
          options: [
            { text: 'Not sure/don\'t track', score: 1 },
            { text: 'Rarely meet this goal', score: 2 },
            { text: 'Some days I hit it', score: 3 },
            { text: 'Most days I meet or exceed it', score: 4 }
          ]
        }
      ],
      tips: [
        'Start your day with 16-20oz of water upon waking',
        'Keep a large water bottle with you throughout the day',
        'Set hourly reminders to drink water',
        'Add electrolytes if you exercise regularly or sweat a lot',
        'Track intake with an app or water bottle with measurements'
      ]
    },
    {
      id: 'movement',
      title: 'MOVEMENT',
      subtitle: 'Energy & Vitality',
      questions: [
        {
          id: 'movement-exercise',
          question: 'How regularly do you engage in intentional movement or exercise?',
          options: [
            { text: 'Rarely or never', score: 1 },
            { text: '1-2 times per week', score: 2 },
            { text: '3-4 times per week', score: 3 },
            { text: 'Daily movement practice', score: 4 }
          ]
        },
        {
          id: 'movement-steps',
          question: 'What\'s your average daily step count?',
          options: [
            { text: 'Don\'t know/don\'t track', score: 1 },
            { text: 'Under 5,000 steps', score: 2 },
            { text: '5,000-8,000 steps', score: 3 },
            { text: 'Over 8,000 steps', score: 4 }
          ]
        }
      ],
      tips: [
        'Start with 10-15 minutes of daily movement if you\'re sedentary',
        'Take walking meetings or calls when possible',
        'Use stairs instead of elevators',
        'Park farther away or get off transit one stop early',
        'Find movement you enjoy - dancing, hiking, sports, yoga'
      ]
    },
    {
      id: 'values',
      title: 'CORE VALUES',
      subtitle: 'Life Alignment',
      questions: [
        {
          id: 'values-faith',
          question: 'Faith & Spirituality: How aligned do you feel with your inner peace and spiritual practice?',
          options: [
            { text: 'Not aligned', score: 1 },
            { text: 'Somewhat aligned', score: 2 },
            { text: 'Mostly aligned', score: 3 },
            { text: 'Fully aligned', score: 4 }
          ]
        },
        {
          id: 'values-fitness',
          question: 'Fitness & Well-being: How aligned are your emotional and physical wellness practices?',
          options: [
            { text: 'Not aligned', score: 1 },
            { text: 'Somewhat aligned', score: 2 },
            { text: 'Mostly aligned', score: 3 },
            { text: 'Fully aligned', score: 4 }
          ]
        },
        {
          id: 'values-family-inner',
          question: 'Family Inner Circle: How connected and aligned are you with your closest family relationships?',
          options: [
            { text: 'Not aligned', score: 1 },
            { text: 'Somewhat aligned', score: 2 },
            { text: 'Mostly aligned', score: 3 },
            { text: 'Fully aligned', score: 4 }
          ]
        },
        {
          id: 'values-family-extended',
          question: 'Extended Family/Professional: How well do you maintain healthy boundaries in these relationships?',
          options: [
            { text: 'Not aligned', score: 1 },
            { text: 'Somewhat aligned', score: 2 },
            { text: 'Mostly aligned', score: 3 },
            { text: 'Fully aligned', score: 4 }
          ]
        },
        {
          id: 'values-fun',
          question: 'Fun & Joy: How present is play, joy, and lightness in your daily life?',
          options: [
            { text: 'Not aligned', score: 1 },
            { text: 'Somewhat aligned', score: 2 },
            { text: 'Mostly aligned', score: 3 },
            { text: 'Fully aligned', score: 4 }
          ]
        },
        {
          id: 'values-purpose',
          question: 'Purpose & Mission: How connected do you feel to your life\'s purpose and mission?',
          options: [
            { text: 'Not connected', score: 1 },
            { text: 'Somewhat connected', score: 2 },
            { text: 'Mostly connected', score: 3 },
            { text: 'Deeply connected', score: 4 }
          ]
        }
      ],
      tips: [
        'Schedule daily time for spiritual practice or reflection',
        'Define your core values and review them regularly',
        'Set clear boundaries with energy-draining relationships',
        'Block time for activities that bring you pure joy',
        'Write down your life mission and refer to it when making decisions',
        'Consider working with a life coach for deeper alignment work'
      ]
    }
  ]
}

interface Answer {
  questionId: string
  score: number
  sectionId: string
}

interface SectionScore {
  sectionId: string
  score: number
  maxScore: number
  percentage: number
}

const LifeAlignmentQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentSectionIndex, setSectionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  // Flatten all questions for easier navigation
  const allQuestions = quizData.sections.flatMap((section, sectionIndex) =>
    section.questions.map(question => ({
      ...question,
      sectionIndex,
      sectionId: section.id,
      sectionTitle: section.title,
      sectionSubtitle: section.subtitle
    }))
  )

  const currentQuestion = allQuestions[currentQuestionIndex]
  const totalQuestions = allQuestions.length

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    
    // Save the answer
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      score: currentQuestion.options[answerIndex].score,
      sectionId: currentQuestion.sectionId
    }
    
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== currentQuestion.id)
      return [...filtered, newAnswer]
    })

    // Auto-advance after a brief delay
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1)
        setSelectedAnswer(null)
        
        // Check if we're entering a new section
        const nextQuestion = allQuestions[currentQuestionIndex + 1]
        if (nextQuestion.sectionIndex !== currentQuestion.sectionIndex) {
          setSectionIndex(nextQuestion.sectionIndex)
        }
      } else {
        setIsComplete(true)
      }
    }, 800)
  }

  const calculateResults = (): {
    totalScore: number
    totalPossible: number
    overallPercentage: number
    sectionScores: SectionScore[]
  } => {
    const sectionScores: SectionScore[] = quizData.sections.map(section => {
      const sectionAnswers = answers.filter(a => a.sectionId === section.id)
      const score = sectionAnswers.reduce((sum, answer) => sum + answer.score, 0)
      const maxScore = section.questions.length * 4
      const percentage = (score / maxScore) * 100
      
      return {
        sectionId: section.id,
        score,
        maxScore,
        percentage
      }
    })
    
    const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0)
    const totalPossible = totalQuestions * 4
    const overallPercentage = (totalScore / totalPossible) * 100

    return {
      totalScore,
      totalPossible,
      overallPercentage,
      sectionScores
    }
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 71) return 'text-teal-500'
    if (percentage >= 41) return 'text-orange-500'
    return 'text-red-500'
  }

  const getScoreBgColor = (percentage: number) => {
    if (percentage >= 71) return 'bg-teal-500'
    if (percentage >= 41) return 'bg-[#34c5c5]'
    return 'bg-red-500'
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSectionIndex(0)
    setAnswers([])
    setIsComplete(false)
    setSelectedAnswer(null)
    setEmail('')
    setEmailSubmitted(false)
  }

  const shareResults = () => {
    const results = calculateResults()
    const summary = `I just completed the Life Alignment Quiz by KRYSTALORE! 🎯

My overall alignment score: ${Math.round(results.overallPercentage)}%

Section breakdown:
${results.sectionScores.map(section => {
  const sectionData = quizData.sections.find(s => s.id === section.sectionId)
  return `• ${sectionData?.title}: ${Math.round(section.percentage)}%`
}).join('\n')}

Take the quiz yourself: ${window.location.href}`

    navigator.clipboard.writeText(summary).then(() => {
      alert('Results copied to clipboard!')
    })
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailSubmitted(true)
  }

  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100

  if (isComplete) {
    const results = calculateResults()
    const lowScoringTips = quizData.sections
      .filter(section => {
        const sectionScore = results.sectionScores.find(s => s.sectionId === section.id)
        return sectionScore && sectionScore.percentage < 50
      })
      .flatMap(section => section.tips)

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center p-4 bg-gray-50"
      >
        <div className="max-w-4xl w-full">
          {/* Page Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
              Your Life Alignment Results
            </h1>
            <p className="text-gray-600 text-lg">Discover where you stand and your next steps forward</p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            {/* Overall Score */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="relative inline-block"
              >
                <svg className="w-48 h-48 mx-auto" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-gray-200"
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 80}`}
                    strokeDashoffset={`${2 * Math.PI * 80 * (1 - results.overallPercentage / 100)}`}
                    className={getScoreColor(results.overallPercentage)}
                    initial={{ strokeDashoffset: 2 * Math.PI * 80 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 80 * (1 - results.overallPercentage / 100) }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    style={{ transformOrigin: "100px 100px", transform: "rotate(-90deg)" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className={`text-5xl font-bold ${getScoreColor(results.overallPercentage)}`}
                    >
                      {Math.round(results.overallPercentage)}%
                    </motion.div>
                    <div className="text-sm text-gray-500">Life Aligned</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Section Breakdown */}
            <div className="space-y-6 mb-12">
              <h3 className="text-xl font-semibold text-center mb-8 text-gray-900">Section Breakdown</h3>
              {results.sectionScores.map((sectionScore, index) => {
                const section = quizData.sections.find(s => s.id === sectionScore.sectionId)
                return (
                  <motion.div
                    key={sectionScore.sectionId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{section?.title}</span>
                      <span className={`font-bold ${getScoreColor(sectionScore.percentage)}`}>
                        {Math.round(sectionScore.percentage)}%
                      </span>
                    </div>
                    <div className="bg-gray-200 rounded-full overflow-hidden h-3">
                      <motion.div
                        className={`h-full transition-all duration-500 ease-out ${getScoreBgColor(sectionScore.percentage)}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${sectionScore.percentage}%` }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Tips for Low Scoring Areas */}
            {lowScoringTips.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="mb-8 p-6 bg-orange-50 rounded-lg border border-orange-100"
              >
                <h4 className="text-lg font-semibold mb-4 text-orange-600">Areas for Growth</h4>
                <ul className="space-y-2">
                  {lowScoringTips.slice(0, 5).map((tip, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="text-center mb-8 p-6 bg-gradient-to-r from-orange-50 to-teal-50 rounded-lg border border-orange-100"
            >
              <p className="text-gray-600 italic text-lg">
                "Your results are not a diagnosis—they're a starting point. Awareness creates choice. Choice creates change. 
                You don't have to fix everything at once—just take the next aligned step."
              </p>
            </motion.div>

            {/* Email Capture */}
            {!emailSubmitted ? (
              <motion.form
                onSubmit={handleEmailSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <h4 className="text-lg font-semibold mb-2 flex items-center text-gray-900">
                  <Mail className="w-5 h-5 mr-2 text-orange-500" />
                  Want personalized guidance?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Enter your email for your full report and next steps.
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#34c5c5] text-white rounded-lg hover:bg-[#37a6a6] transition-colors"
                  >
                    Get Report
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-6 bg-teal-50 border border-teal-200 rounded-lg text-center"
              >
                <CheckCircle className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                <p className="text-teal-600 font-medium">
                  Thank you! Your personalized report is on its way.
                </p>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={resetQuiz}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:border-orange-300 transition-all text-gray-700"
              >
                <RotateCcw className="w-5 h-5" />
                Retake Quiz
              </button>
              <button
                onClick={shareResults}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#34c5c5] text-white rounded-lg hover:bg-[#37a6a6] transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share Results
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-2xl w-full">
        {/* Page Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
            Life Alignment Quiz
          </h1>
          <p className="text-gray-600 text-lg">Discover where you stand and your next steps forward</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="mb-8"
        >
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="bg-gray-200 rounded-full overflow-hidden h-2">
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-teal-500 h-full transition-all duration-500 ease-out"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Section Header */}
        <AnimatePresence mode="wait">
          {currentQuestion.sectionIndex !== (allQuestions[currentQuestionIndex - 1]?.sectionIndex) && (
            <motion.div
              key={`section-${currentQuestion.sectionIndex}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-orange-500">
                {currentQuestion.sectionTitle}
              </h2>
              <p className="text-gray-600">{currentQuestion.sectionSubtitle}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-8 text-center text-gray-900">
              {currentQuestion.question}
            </h3>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border transition-all duration-300 ${
                    selectedAnswer === index
                      ? 'border-orange-500 bg-orange-50 text-gray-900'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-25'
                  }`}
                >
                  <span className="block text-gray-900">{option.text}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default LifeAlignmentQuiz