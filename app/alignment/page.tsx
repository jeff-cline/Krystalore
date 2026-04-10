'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Heart, ArrowLeft, CheckCircle, Moon, Apple, Droplets, Footprints, Activity, Leaf, Compass } from 'lucide-react'
import Link from 'next/link'

interface Option {
  text: string
  score: number
}

interface Question {
  id: number
  section: number
  text: string
  options?: Option[]
  multiSelect?: string[]
  multiScoreFn?: (count: number) => number
  tip: string
  tipThreshold?: number // show tip if score <= this (default 2)
}

const sectionNames = [
  'Sleep & Rest',
  'Nutrition & Fuel',
  'Hydration',
  'Movement & Daily Activity',
  'Physical Health & Stress Signals',
  'Seasons of Change, Loss & Transition',
  'Core Life Alignment',
]

const sectionIcons = [Moon, Apple, Droplets, Footprints, Activity, Leaf, Compass]

const questions: Question[] = [
  // SECTION 1: SLEEP & REST (Q1-4)
  {
    id: 1, section: 0,
    text: 'On most nights, how much sleep do you usually get?',
    options: [
      { text: 'Less than 5 hours', score: 1 },
      { text: '5–6 hours', score: 2 },
      { text: '7–8 hours', score: 3 },
      { text: 'More than 8 hours', score: 4 },
    ],
    tip: 'Sleep supports energy, mood, and focus. Even small improvements can make a difference.',
  },
  {
    id: 2, section: 0,
    text: 'Once you get into bed, how easy is it for you to fall asleep?',
    options: [
      { text: 'It usually takes a long time', score: 1 },
      { text: 'It takes some time', score: 2 },
      { text: 'I usually fall asleep fairly easily', score: 3 },
      { text: 'I fall asleep easily most nights', score: 4 },
    ],
    tip: 'Difficulty falling asleep often reflects stress—not lack of discipline.',
  },
  {
    id: 3, section: 0,
    text: 'How often do you wake up during the night?',
    options: [
      { text: 'Several times and struggle to fall back asleep', score: 1 },
      { text: 'Occasionally and it takes time to settle', score: 2 },
      { text: 'I wake briefly but fall back asleep', score: 3 },
      { text: 'I rarely wake up', score: 4 },
    ],
    tip: 'Night waking is information, not failure.',
  },
  {
    id: 4, section: 0,
    text: 'If you wake up during the night, do you usually eat or snack?',
    options: [
      { text: 'Often', score: 1 },
      { text: 'Sometimes', score: 2 },
      { text: 'Rarely', score: 3 },
      { text: 'Never', score: 4 },
    ],
    tip: 'This can be related to stress or energy balance—not willpower.',
  },
  // SECTION 2: NUTRITION & FUEL (Q5)
  {
    id: 5, section: 1,
    text: 'Thinking about most meals, how often do you eat mostly fresh, whole foods (fruits, vegetables, eggs, fish, chicken, beans) versus processed or packaged foods (fast food, fried foods, boxed meals, sugary snacks)?',
    options: [
      { text: 'Mostly processed or packaged foods', score: 1 },
      { text: 'A mix of processed and whole foods', score: 2 },
      { text: 'Mostly whole, fresh foods', score: 3 },
      { text: 'Almost entirely whole, fresh foods', score: 4 },
    ],
    tip: "You don't need to change everything. One small upgrade per meal adds up.",
  },
  // SECTION 3: HYDRATION (Q6)
  {
    id: 6, section: 2,
    text: 'On most days, are you drinking roughly half your body weight in ounces of water (for example, a 160-lb person aiming for about 80 ounces)?',
    options: [
      { text: "I'm not sure", score: 1 },
      { text: 'Rarely', score: 2 },
      { text: 'Some days', score: 3 },
      { text: 'Most days', score: 4 },
    ],
    tip: 'Tracking your water intake for one day can bring immediate clarity.',
  },
  // SECTION 4: MOVEMENT & DAILY ACTIVITY (Q7-8)
  {
    id: 7, section: 3,
    text: 'On most weeks, how often do you spend at least 30–60 minutes moving your body on purpose (walking, workouts, stretching, or other activity)?',
    options: [
      { text: 'Rarely or not at all', score: 1 },
      { text: 'Once or twice a week', score: 2 },
      { text: 'A few times a week', score: 3 },
      { text: 'Most days', score: 4 },
    ],
    tip: "Movement doesn't need intensity—consistent movement supports energy and resilience.",
  },
  {
    id: 8, section: 3,
    text: 'On average, how many steps do you take in a day?',
    options: [
      { text: "I don't know / I don't track", score: 1 },
      { text: 'Under 5,000 steps', score: 2 },
      { text: '5,000–8,000 steps', score: 3 },
      { text: 'Over 8,000 steps', score: 4 },
    ],
    tip: 'Tracking for a few days can offer helpful insight without pressure.',
  },
  // SECTION 5: PHYSICAL HEALTH & STRESS SIGNALS (Q9-13)
  {
    id: 9, section: 4,
    text: 'Have you noticed physical symptoms that affect your energy, focus, or sleep?',
    options: [
      { text: 'No, I generally feel okay', score: 4 },
      { text: 'Mild symptoms that come and go', score: 3 },
      { text: 'Ongoing symptoms that affect daily life', score: 2 },
      { text: "I'm not sure", score: 1 },
    ],
    tip: 'The body often communicates through subtle signs before bigger issues appear.',
  },
  {
    id: 10, section: 4,
    text: 'In the past few months, have you experienced any of the following? (Select all that apply)',
    multiSelect: [
      'Ongoing fatigue',
      'Anxiety or racing thoughts',
      'Poor or disrupted sleep',
      'Digestive discomfort',
      'Aches, pain, or inflammation',
      'Brain fog or trouble focusing',
      'Hormonal changes',
      'Autoimmune or chronic condition',
      'Recent health diagnosis (you or someone close to you)',
      'None of the above',
    ],
    multiScoreFn: (count: number) => {
      if (count === 0) return 4
      if (count <= 2) return 3
      if (count <= 4) return 2
      return 1
    },
    tip: 'Multiple symptoms often reflect cumulative stress—not weakness.',
  },
  {
    id: 11, section: 4,
    text: 'How much do stress or health concerns affect your sleep?',
    options: [
      { text: 'Not at all', score: 4 },
      { text: 'Occasionally', score: 3 },
      { text: 'Often', score: 2 },
      { text: 'Almost every night', score: 1 },
    ],
    tip: 'Sleep challenges often connect to what\'s happening during the day.',
  },
  {
    id: 12, section: 4,
    text: 'Are you currently using—or considering—support for your health or stress?',
    options: [
      { text: 'No', score: 1 },
      { text: 'Medical support', score: 3 },
      { text: 'Lifestyle or holistic support', score: 3 },
      { text: 'Considering options', score: 2 },
    ],
    tip: 'There is no single right path—only what fits you.',
    tipThreshold: 1,
  },
  {
    id: 13, section: 4,
    text: 'Right now, how confident do you feel that your lifestyle supports your long-term health?',
    options: [
      { text: 'Not confident', score: 1 },
      { text: 'Somewhat confident', score: 2 },
      { text: 'Mostly confident', score: 3 },
      { text: 'Very confident', score: 4 },
    ],
    tip: "Clarity builds confidence. You don't need all the answers yet.",
  },
  // SECTION 6: SEASONS OF CHANGE, LOSS & TRANSITION (Q14-17)
  {
    id: 14, section: 5,
    text: 'Are you currently going through a significant life change or transition?',
    options: [
      { text: 'No', score: 4 },
      { text: 'Yes, recently', score: 2 },
      { text: 'Yes, for a while now', score: 1 },
      { text: "I'm not sure", score: 3 },
    ],
    tip: 'Even chosen or positive change can stress the body and mind.',
  },
  {
    id: 15, section: 5,
    text: 'Have any of the following been part of your experience? (Select all that apply)',
    multiSelect: [
      'Loss of a loved one',
      'Divorce or relationship ending',
      'Children leaving home',
      'Career or role change',
      'Ending a caregiving role',
      'Major move or lifestyle change',
      'Health changes (you or someone close)',
      'None of the above',
    ],
    multiScoreFn: (count: number) => {
      if (count === 0) return 4
      if (count <= 2) return 3
      if (count <= 4) return 2
      return 1
    },
    tip: 'Unprocessed change often shows up later as fatigue or stress.',
  },
  {
    id: 16, section: 5,
    text: 'During this season, how supported do you feel?',
    options: [
      { text: 'Not supported', score: 1 },
      { text: 'Somewhat supported', score: 2 },
      { text: 'Mostly supported', score: 3 },
      { text: 'Very supported', score: 4 },
    ],
    tip: "Being strong doesn't mean doing it alone.",
  },
  {
    id: 17, section: 5,
    text: "Have you given yourself time or space to process what you've been going through?",
    options: [
      { text: 'Not at all', score: 1 },
      { text: 'A little', score: 2 },
      { text: 'Some', score: 3 },
      { text: 'Yes, intentionally', score: 4 },
    ],
    tip: "Processing helps prevent burnout—it doesn't slow progress.",
  },
  // SECTION 7: CORE LIFE ALIGNMENT (Q18-23)
  {
    id: 18, section: 6,
    text: 'In your everyday life, how often do you feel calm, grounded, or connected beyond your responsibilities?',
    options: [
      { text: 'Rarely', score: 1 },
      { text: 'Sometimes', score: 2 },
      { text: 'Often', score: 3 },
      { text: 'Most days', score: 4 },
    ],
    tip: 'Simple gratitude can gently calm stress and shift perspective.',
  },
  {
    id: 19, section: 6,
    text: 'Overall, how supported do you feel in your emotional and physical health?',
    options: [
      { text: 'Not supported', score: 1 },
      { text: 'Somewhat supported', score: 2 },
      { text: 'Mostly supported', score: 3 },
      { text: 'Very supported', score: 4 },
    ],
    tip: 'One small supportive habit can impact both body and mind.',
  },
  {
    id: 20, section: 6,
    text: 'How supported and understood do you feel by the people closest to you?',
    options: [
      { text: 'Rarely', score: 1 },
      { text: 'Sometimes', score: 2 },
      { text: 'Often', score: 3 },
      { text: 'Consistently', score: 4 },
    ],
    tip: 'Healthy relationships should support—not drain—you.',
  },
  {
    id: 21, section: 6,
    text: 'How well are you able to set and maintain boundaries with coworkers, clients, friends, or extended family?',
    options: [
      { text: 'I often feel drained', score: 1 },
      { text: 'Sometimes I manage boundaries', score: 2 },
      { text: 'Usually, yes', score: 3 },
      { text: 'I feel confident with my boundaries', score: 4 },
    ],
    tip: 'Boundaries protect energy and connection.',
  },
  {
    id: 22, section: 6,
    text: 'How often do you make time for things that genuinely bring you enjoyment or lightness—without guilt?',
    options: [
      { text: 'Rarely', score: 1 },
      { text: 'Occasionally', score: 2 },
      { text: 'Regularly', score: 3 },
      { text: 'Intentionally and consistently', score: 4 },
    ],
    tip: 'Joy is fuel, not a reward.',
  },
  {
    id: 23, section: 6,
    text: 'How connected do you feel to a sense of purpose or direction in your life right now?',
    options: [
      { text: 'Not connected', score: 1 },
      { text: 'Somewhat connected', score: 2 },
      { text: 'Mostly connected', score: 3 },
      { text: 'Deeply connected', score: 4 },
    ],
    tip: 'Purpose grows through curiosity and action—not certainty.',
  },
]

export default function AlignmentQuiz() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'leadgate' | 'results'>('intro')
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '' })
  const [leadStatus, setLeadStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [multiSelections, setMultiSelections] = useState<Record<number, Set<number>>>({})

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = score
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCurrentStep('leadgate')
    }
  }

  const handleMultiToggle = (qIndex: number, optionIndex: number, isNoneOption: boolean, totalOptions: number) => {
    const current = new Set(multiSelections[qIndex] || [])
    if (isNoneOption) {
      // "None of the above" clears everything else
      if (current.has(optionIndex)) {
        current.delete(optionIndex)
      } else {
        current.clear()
        current.add(optionIndex)
      }
    } else {
      // Remove "None" if selecting something else
      const noneIndex = totalOptions - 1
      current.delete(noneIndex)
      if (current.has(optionIndex)) {
        current.delete(optionIndex)
      } else {
        current.add(optionIndex)
      }
    }
    setMultiSelections({ ...multiSelections, [qIndex]: current })
  }

  const handleMultiSubmit = () => {
    const q = questions[currentQuestion]
    const selected = multiSelections[currentQuestion] || new Set()
    const noneIndex = (q.multiSelect?.length || 1) - 1
    const isNone = selected.has(noneIndex)
    const count = isNone ? 0 : selected.size
    const score = q.multiScoreFn ? q.multiScoreFn(count) : 4

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = score
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCurrentStep('leadgate')
    }
  }

  // Calculate per-section scores
  const getSectionScores = () => {
    const sections: { name: string; scores: number[]; maxScores: number[]; tips: string[] }[] =
      sectionNames.map(name => ({ name, scores: [], maxScores: [], tips: [] }))

    questions.forEach((q, i) => {
      const s = sections[q.section]
      s.scores.push(answers[i])
      s.maxScores.push(4)
      const threshold = q.tipThreshold ?? 2
      if (answers[i] <= threshold) {
        s.tips.push(q.tip)
      }
    })

    return sections.map(s => ({
      name: s.name,
      score: s.scores.reduce((a, b) => a + b, 0),
      max: s.maxScores.reduce((a, b) => a + b, 0),
      pct: Math.round((s.scores.reduce((a, b) => a + b, 0) / s.maxScores.reduce((a, b) => a + b, 0)) * 100),
      tips: Array.from(new Set(s.tips)),
    }))
  }

  const getSectionForQuestion = (qIndex: number) => {
    return sectionNames[questions[qIndex].section]
  }

  const getScoreColor = (pct: number) => {
    if (pct >= 75) return { text: 'text-green-600', bg: 'bg-green-500', label: 'Well Aligned' }
    if (pct >= 50) return { text: 'text-yellow-600', bg: 'bg-yellow-500', label: 'Moderate' }
    return { text: 'text-red-500', bg: 'bg-red-500', label: 'Needs Attention' }
  }

  // ==================== INTRO ====================
  if (currentStep === 'intro') {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto space-y-8">
          <Link href="/quizzes" className="flex items-center text-primary hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Quizzes
          </Link>

          {/* Hero Image */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl">
            <Image src="/images/go9/meditation.webp" alt="Life alignment and mindfulness retreat setting" fill className="object-cover" sizes="100vw" />
          </div>

          {/* Header */}
          <div className="text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Aligned Is Your Life?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Is Your Health Supporting the Life You&apos;re Building? A Stress, Energy &amp; Life Alignment Check-In for High Performers
            </p>
          </div>

          {/* Main body */}
          <div className="card">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              You&apos;ve built a full life. Responsibilities. Momentum. Meaningful work. From the outside, things may look successful—and they probably are. But many driven people eventually pause and ask: <em>Is my health actually supporting the life I&apos;m building… or quietly being pushed aside?</em>
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              This check-in isn&apos;t about fixing what&apos;s wrong. It&apos;s about creating awareness, clarity, and alignment—without judgment. Because when your health is supported, everything else works better: your focus, leadership, energy, relationships, and resilience.
            </p>
          </div>

          {/* Why This Check-In Matters */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why This Check-In Matters</h2>
            <p className="text-gray-600 mb-4">Stress doesn&apos;t only come from work. It can come from:</p>
            <ul className="space-y-2 mb-4">
              {[
                'Ongoing pressure or responsibility',
                'Health concerns or unexplained symptoms',
                'Seasons of change, loss, or transition',
                'Supporting others while putting yourself last',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600">
              Your body keeps track—even when your mind keeps going. This check-in helps you pause long enough to understand what you&apos;re experiencing right now.
            </p>
          </div>

          {/* What This Check-In Covers */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What This Check-In Covers</h2>
            <p className="text-gray-600 mb-4">In just a few minutes, you&apos;ll reflect on:</p>
            <ul className="space-y-2 mb-4">
              {[
                'Sleep, rest, and recovery',
                'Nutrition, hydration, and movement',
                'Stress signals and physical symptoms',
                'Emotional well-being and support',
                'Life changes, loss, or transitions',
                'Relationships, boundaries, joy, and purpose',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 italic">There are no right or wrong answers—just honest reflection.</p>
          </div>

          {/* Who This Is For */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who This Is For</h2>
            <ul className="space-y-2">
              {[
                'Entrepreneurs, executives, and leaders',
                'Veterans and high-responsibility professionals',
                'Women navigating growth, healing, or reinvention',
                'Anyone who wants their health to keep up with their life',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You'll Walk Away With */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You&apos;ll Walk Away With</h2>
            <ul className="space-y-2">
              {[
                'A clear snapshot of your current alignment',
                'Insight into where energy may be leaking',
                'Compassionate, practical tips based on your responses',
                'Clarity on what deserves your attention next',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quiz stats + CTA */}
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">23</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Questions</h3>
                <p className="text-gray-400">Across 7 life areas</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">10</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Minutes</h3>
                <p className="text-gray-400">Average completion time</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Free</h3>
                <p className="text-gray-400">No cost or signup required</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 text-lg mb-6 italic">
                Your health doesn&apos;t need to be perfect. It just needs to be included.
              </p>
              <button
                onClick={() => setCurrentStep('quiz')}
                className="btn-primary text-lg px-8 py-4"
              >
                Start the Stress, Energy &amp; Life Alignment Check-In
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }

  // ==================== QUIZ ====================
  if (currentStep === 'quiz') {
    const progress = ((currentQuestion + 1) / questions.length) * 100
    const q = questions[currentQuestion]
    const isMulti = !!q.multiSelect
    const selected = multiSelections[currentQuestion] || new Set()

    return (
      <MainLayout>
        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          {/* Disclaimer - compact on mobile */}
          <div className="mb-3 sm:mb-6 p-2 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-xs sm:text-sm text-yellow-800 text-center">
              This check-in is for self-awareness only and does not replace medical or mental health care.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4 sm:mb-8">
            <div className="flex justify-between items-center mb-1 sm:mb-2">
              <span className="text-xs sm:text-sm text-gray-500">{getSectionForQuestion(currentQuestion)}</span>
              <span className="text-xs sm:text-sm text-gray-500">
                {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
              <div
                className="bg-primary h-1.5 sm:h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card - tighter padding on mobile */}
          <div className="card !p-4 sm:!p-6">
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-6">
              {q.text}
            </h2>

            {isMulti ? (
              <div className="space-y-2 sm:space-y-3">
                {q.multiSelect!.map((option, index) => {
                  const isSelected = selected.has(index)
                  const isNone = index === q.multiSelect!.length - 1
                  return (
                    <button
                      key={index}
                      onClick={() => handleMultiToggle(currentQuestion, index, isNone, q.multiSelect!.length)}
                      className={`w-full p-2.5 sm:p-4 text-left rounded-lg transition-all duration-200 border-2 text-sm sm:text-base font-medium ${
                        isSelected
                          ? 'bg-[#34c5c5] text-white border-primary'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-primary hover:shadow-md'
                      }`}
                    >
                      <span className="flex items-center">
                        <span className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 mr-2 sm:mr-3 flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'bg-white border-white' : 'border-gray-300'
                        }`}>
                          {isSelected && <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />}
                        </span>
                        {option}
                      </span>
                    </button>
                  )
                })}
                <button
                  onClick={handleMultiSubmit}
                  disabled={selected.size === 0}
                  className="btn-primary w-full mt-3 sm:mt-4 py-3 text-base disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            ) : (
              <div className="space-y-2 sm:space-y-3">
                {q.options!.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full p-2.5 sm:p-4 text-left bg-white text-gray-700 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 hover:bg-[#34c5c5] hover:text-white hover:shadow-lg border-2 border-gray-200 hover:border-primary"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </MainLayout>
    )
  }

  // ==================== LEAD GATE ====================
  if (currentStep === 'leadgate') {
    const handleLeadSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setLeadStatus('submitting')
      try {
        const sectionScoresForLead = getSectionScores()
        const totalForLead = sectionScoresForLead.reduce((a, s) => a + s.score, 0)
        const maxForLead = sectionScoresForLead.reduce((a, s) => a + s.max, 0)
        const res = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: leadForm.name,
            email: leadForm.email,
            phone: leadForm.phone,
            quizTitle: 'Life Alignment Assessment',
            answers: answers,
            results: {
              totalScore: totalForLead,
              totalMax: maxForLead,
              totalPct: Math.round((totalForLead / maxForLead) * 100),
              sections: sectionScoresForLead,
            },
          }),
        })
        if (res.ok) {
          setCurrentStep('results')
        } else {
          setLeadStatus('error')
        }
      } catch {
        setLeadStatus('error')
      }
    }

    return (
      <MainLayout>
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#34c5c5]/10 flex items-center justify-center">
              <Heart className="h-10 w-10 text-[#34c5c5]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Your Results Are Ready
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              You&apos;ve completed the Life Alignment Check-In. Enter your information below to unlock your personalized results and insights.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <form onSubmit={handleLeadSubmit} className="space-y-5">
              <div>
                <label htmlFor="lead-name" className="block text-sm font-medium text-gray-800 mb-1">
                  Full Name *
                </label>
                <input
                  id="lead-name"
                  type="text"
                  required
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#34c5c5] focus:ring-2 focus:ring-[#34c5c5]/20 outline-none transition-colors text-gray-800"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="lead-email" className="block text-sm font-medium text-gray-800 mb-1">
                  Email *
                </label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#34c5c5] focus:ring-2 focus:ring-[#34c5c5]/20 outline-none transition-colors text-gray-800"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-800 mb-1">
                  Phone *
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  required
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#34c5c5] focus:ring-2 focus:ring-[#34c5c5]/20 outline-none transition-colors text-gray-800"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {leadStatus === 'error' && (
                <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={leadStatus === 'submitting'}
                className="w-full py-4 px-6 rounded-lg font-bold text-white text-lg transition-all disabled:opacity-60"
                style={{ backgroundColor: leadStatus === 'submitting' ? '#999' : '#34c5c5' }}
              >
                {leadStatus === 'submitting' ? 'Unlocking...' : 'Unlock My Results'}
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">
                Your information is kept confidential and will only be used to follow up on your results.
              </p>
            </form>
          </div>

          {/* Blurred preview teaser */}
          <div className="mt-10 relative">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-10 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 font-medium text-lg">Complete the form above to see your full results</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 opacity-50">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-gray-300">--/--</div>
                <p className="text-gray-300 mt-2">Your Alignment Score</p>
              </div>
              <div className="space-y-3">
                {sectionNames.map((name) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>{name}</span>
                      <span>--/--</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="h-2 rounded-full bg-gray-200" style={{ width: '60%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }

  // ==================== RESULTS ====================
  const sectionScores = getSectionScores()
  const totalScore = sectionScores.reduce((a, s) => a + s.score, 0)
  const totalMax = sectionScores.reduce((a, s) => a + s.max, 0)
  const totalPct = Math.round((totalScore / totalMax) * 100)
  const overallColor = getScoreColor(totalPct)

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Results Header */}
        <div className="text-center">
          <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Alignment Results</h1>
          <p className="text-xl text-gray-600">
            Here&apos;s a snapshot of how aligned your health and life are right now.
          </p>
        </div>

        {/* Overall Score */}
        <div className="card border-2 border-primary/30 text-center">
          <div className="text-6xl font-bold mb-2">
            <span className={overallColor.text}>{totalScore}</span>
            <span className="text-gray-400 text-3xl">/{totalMax}</span>
          </div>
          <p className={`text-xl font-semibold mb-2 ${overallColor.text}`}>{overallColor.label}</p>
          <div className="w-full bg-gray-200 rounded-full h-3 max-w-md mx-auto mb-4">
            <div
              className={`${overallColor.bg} h-3 rounded-full transition-all duration-500`}
              style={{ width: `${totalPct}%` }}
            ></div>
          </div>
        </div>

        {/* Per-Section Scores */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Your Results by Area</h2>
          {sectionScores.map((section, i) => {
            const color = getScoreColor(section.pct)
            const Icon = sectionIcons[i]
            return (
              <div key={i} className="card">
                <div className="flex items-center mb-3">
                  <Icon className={`h-6 w-6 mr-3 ${color.text}`} />
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">{section.name}</h3>
                  <span className={`font-bold ${color.text}`}>
                    {section.score}/{section.max}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div
                    className={`${color.bg} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${section.pct}%` }}
                  ></div>
                </div>
                {section.tips.length > 0 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                    {section.tips.map((tip, j) => (
                      <p key={j} className="text-sm text-amber-800 mb-1 last:mb-0">💡 {tip}</p>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Closing Text */}
        <div className="card bg-primary/5 border-2 border-primary/20">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Your responses reflect the season you&apos;re in—not your capability. Awareness creates choice. Choice creates alignment. You don&apos;t need to change everything. You just need to know what deserves support next.
          </p>
        </div>

        {/* CTAs */}
        <div className="card text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Take the Next Step?</h2>
          <p className="text-gray-600 mb-6">
            If your results highlighted areas that deserve attention, Krystalore can help you create a personalized plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-3"
            >
              Book a Call with Krystalore
            </a>
            <a
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-3"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setCurrentStep('intro')
                setCurrentQuestion(0)
                setAnswers(new Array(questions.length).fill(-1))
                setMultiSelections({})
              }}
              className="btn-secondary"
            >
              Retake Check-In
            </button>
            <Link href="/quizzes" className="btn-secondary">
              Back to All Quizzes
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
