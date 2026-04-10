'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/layout/header'
import { ArrowLeft, ArrowRight, CheckCircle, Mail, TrendingUp, BarChart3 } from 'lucide-react'

interface Question {
  id: number
  text: string
  options: string[]
  type: 'multiple-choice' | 'scale'
}

interface QuizTemplateProps {
  title: string
  description: string
  questions: Question[]
  duration: string
  category: string
  gatedContactForm?: boolean
  slug?: string
}

function calculateResults(answers: Record<number, string | number>, questions: Question[]) {
  const totalQuestions = questions.length
  const answered = Object.keys(answers).length
  
  // Calculate a score based on scale answers (1-5) and multiple choice position
  let totalScore = 0
  let maxScore = 0
  
  questions.forEach((q) => {
    const answer = answers[q.id]
    if (answer !== undefined) {
      if (q.type === 'scale') {
        totalScore += Number(answer)
        maxScore += 5
      } else {
        const idx = q.options.indexOf(answer as string)
        totalScore += (q.options.length - idx)
        maxScore += q.options.length
      }
    }
  })
  
  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
  
  const categories: Record<string, number> = {
    'Self-Awareness': Math.min(100, percentage + Math.floor(Math.random() * 15) - 7),
    'Emotional Control': Math.min(100, percentage + Math.floor(Math.random() * 15) - 7),
    'Motivation': Math.min(100, percentage + Math.floor(Math.random() * 15) - 7),
    'Empathy': Math.min(100, percentage + Math.floor(Math.random() * 15) - 7),
    'Social Skills': Math.min(100, percentage + Math.floor(Math.random() * 15) - 7),
  }
  
  return { overallScore: percentage, categories, totalQuestions, answered }
}

export default function QuizTemplate({ 
  title, 
  description, 
  questions, 
  duration, 
  category,
  gatedContactForm = false,
  slug
}: QuizTemplateProps) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string | number>>({})
  const [phase, setPhase] = useState<'quiz' | 'results' | 'gated' | 'unlocked' | 'email' | 'signup'>('quiz')
  const [email, setEmail] = useState('')
  const [signupData, setSignupData] = useState({ name: '', password: '', role: '' })
  const [pdfSent, setPdfSent] = useState(false)
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '' })
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [pdfDownloading, setPdfDownloading] = useState(false)

  const handleAnswer = (questionId: number, answer: string | number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setPhase(gatedContactForm ? 'gated' : 'results')
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1)
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Scaffold: would generate PDF and send email
    console.log('PDF report would be generated and sent to:', email)
    setPdfSent(true)
    setTimeout(() => setPhase('signup'), 1500)
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const results = calculateResults(answers, questions)
    
    // Build enriched answers with question text for admin/dashboard display
    const enrichedAnswers: Record<string, { question: string; answer: string | number; type: string }> = {}
    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        enrichedAnswers[q.id] = {
          question: q.text,
          answer: answers[q.id],
          type: q.type,
        }
      }
    })
    
    try {
      // Save lead to database
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone,
          quizTitle: title,
          answers: enrichedAnswers,
          results,
        }),
      })
      
      setContactSubmitted(true)
      setPhase('unlocked')
    } catch (error) {
      console.error('Error saving lead:', error)
      // Still unlock results even if lead saving fails
      setContactSubmitted(true)
      setPhase('unlocked')
    }
  }

  const handlePdfDownload = async () => {
    setPdfDownloading(true)
    const results = calculateResults(answers, questions)
    
    // Build enriched answers for the PDF
    const enrichedAnswers: Record<string, { question: string; answer: string | number; type: string }> = {}
    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        enrichedAnswers[q.id] = {
          question: q.text,
          answer: answers[q.id],
          type: q.type,
        }
      }
    })
    
    try {
      const response = await fetch('/api/leads/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          results,
          quizTitle: title,
          name: contactData.name || 'Assessment Taker',
          answers: enrichedAnswers,
          quizSlug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        }),
      })
      
      const { html, filename } = await response.json()
      
      // Open branded PDF in new window for print/save
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${title} - Results</title>
            <style>
              html, body { margin: 0; width: 100%; height: 100%; }
              body { background: #fff; color: #1B2838; }
              @media print {
                @page { size: letter; margin: 0; }
                html, body { width: 8.5in; height: auto; }
                .print-shell { background: white; }
              }
            </style>
          </head>
          <body>
            ${html}
            <script>setTimeout(() => window.print(), 400)</script>
          </body>
          </html>
        `)
        printWindow.document.close()
      }
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setPdfDownloading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    const results = calculateResults(answers, questions)
    
    // Build enriched answers with question text
    const enrichedAnswers: Record<string, { question: string; answer: string | number; type: string }> = {}
    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        enrichedAnswers[q.id] = {
          question: q.text,
          answer: answers[q.id],
          type: q.type,
        }
      }
    })
    
    // Store in localStorage for demo purposes
    localStorage.setItem('quizBaseline', JSON.stringify({
      quizTitle: title,
      category,
      results,
      answers: enrichedAnswers,
      completedAt: new Date().toISOString(),
    }))
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userName', signupData.name)

    // Save to progress API
    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: signupData.name,
          assessment: {
            quizType: title,
            scores: results.categories,
            overallScore: results.overallScore,
          },
        }),
      })
    } catch {}
    
    router.push('/dashboard/progress')
  }

  const currentQuestionData = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const isAnswered = answers.hasOwnProperty(currentQuestionData?.id)

  // Gated Results Phase (for life-alignment quiz only)
  if (phase === 'gated') {
    const results = calculateResults(answers, questions)
    
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-[#34c5c5] mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete!</h1>
              <p className="text-gray-600">Your results are ready below</p>
            </div>

            {/* Blurred Results Preview */}
            <div className="relative mb-8">
              <div className="blur-sm pointer-events-none">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#34c5c5]">{results.overallScore}%</div>
                    <div className="text-gray-500 mt-1">Overall Score</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {Object.entries(results.categories).map(([name, score]) => (
                    <div key={name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{name}</span>
                        <span className="font-medium text-gray-900">{score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-500"
                          style={{ width: `${score}%`, backgroundColor: '#34c5c5' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Detailed Analysis & Recommendations</h3>
                  <p className="text-gray-600 text-sm">
                    Your personalized insights reveal key patterns in your life alignment. 
                    Based on your responses, we've identified specific areas where targeted 
                    coaching can help you achieve greater fulfillment and success...
                  </p>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-sm">
                    <p className="text-lg font-semibold text-gray-900 mb-2">🔒 Unlock Your Results</p>
                    <p className="text-sm text-gray-600">Enter your contact details to view your full assessment and download the PDF report</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="border-t border-gray-200 pt-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Unlock Your Results</h2>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm mb-4 ${
                  contactSubmitted 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  📥 Download PDF Report {contactSubmitted ? '(Available)' : '(After Contact Info)'}
                </div>
              </div>
              
              <form onSubmit={handleContactSubmit} className="max-w-md mx-auto space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) => setContactData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34c5c5] focus:border-[#34c5c5] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={contactData.email}
                    onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34c5c5] focus:border-[#34c5c5] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    value={contactData.phone}
                    onChange={(e) => setContactData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34c5c5] focus:border-[#34c5c5] outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-medium text-white text-lg transition-colors"
                  style={{ backgroundColor: '#34c5c5' }}
                >
                  UNLOCK RESULTS
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Unlocked Results Phase (after contact form submission)
  if (phase === 'unlocked') {
    const results = calculateResults(answers, questions)
    
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Complete Results</h1>
              <p className="text-gray-600">Thank you, {contactData.name}! Here are your detailed results.</p>
            </div>

            {/* Download PDF Button */}
            <div className="text-center mb-8">
              <button
                onClick={handlePdfDownload}
                disabled={pdfDownloading}
                className="inline-flex items-center px-6 py-3 bg-[#34c5c5] text-white rounded-lg font-medium hover:bg-[#34c5c5]/90 transition-colors disabled:opacity-50"
              >
                {pdfDownloading ? (
                  <>⏳ Generating PDF...</>
                ) : (
                  <>📄 Download PDF Report</>
                )}
              </button>
            </div>

            {/* Full Results */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#34c5c5]">{results.overallScore}%</div>
                  <div className="text-gray-500 mt-1">Overall Score</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {Object.entries(results.categories).map(([name, score]) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{name}</span>
                      <span className="font-medium text-gray-900">{score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ width: `${score}%`, backgroundColor: '#34c5c5' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Detailed Analysis */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Detailed Analysis & Recommendations</h3>
                <div className="text-gray-700 text-sm space-y-3">
                  <p>
                    <strong>Your Life Alignment Score of {results.overallScore}%</strong> indicates your current level of harmony between your values, goals, and daily actions.
                  </p>
                  <p>
                    Based on your responses, here are key areas for growth:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Strengthen the connection between your daily decisions and core values</li>
                    <li>Develop clearer long-term vision and goals</li>
                    <li>Create better work-life integration strategies</li>
                    <li>Build systems for regular life alignment check-ins</li>
                  </ul>
                  <p className="mt-4 p-3 bg-[#34c5c5]/10 border-l-4 border-[#E8A849] rounded">
                    <strong>Next Step:</strong> Consider working with Krystalore to create a personalized action plan that transforms these insights into lasting change. Book a consultation to discuss your results in depth.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Transform These Insights Into Action?</h3>
              <p className="text-gray-600 text-sm mb-4">Work with Krystalore to create your personalized transformation roadmap</p>
              <a 
                href="https://krystalore.com/book" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#34c5c5] text-white rounded-lg font-medium hover:bg-[#34c5c5]/90 transition-colors"
              >
                Book Your Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Results Preview Phase (for non-gated quizzes)
  if (phase === 'results' || phase === 'email') {
    const results = calculateResults(answers, questions)
    
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-[#34c5c5] mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete!</h1>
              <p className="text-gray-600">Here&apos;s a preview of your {title} results</p>
            </div>

            {/* Results Preview */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#34c5c5]">{results.overallScore}%</div>
                  <div className="text-gray-500 mt-1">Overall Score</div>
                </div>
              </div>
              
              <div className="space-y-3">
                {Object.entries(results.categories).map(([name, score]) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{name}</span>
                      <span className="font-medium text-gray-900">{score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ width: `${score}%`, backgroundColor: '#34c5c5' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Blurred section to tease full report */}
              <div className="mt-6 relative">
                <div className="blur-sm pointer-events-none">
                  <h3 className="font-semibold text-gray-900 mb-2">Detailed Analysis</h3>
                  <p className="text-gray-600 text-sm">Your self-awareness score indicates strong foundational emotional intelligence. Key areas for growth include expanding your empathy range and developing more nuanced social awareness in professional settings...</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                    <p className="text-sm font-medium text-gray-700">🔒 Full report available via email</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Collection */}
            <div className="border-t border-gray-200 pt-6">
              <div className="text-center mb-4">
                <Mail className="h-8 w-8 text-[#E8A849] mx-auto mb-2" />
                <h2 className="text-xl font-semibold text-gray-900">Get Your Full PDF Report</h2>
                <p className="text-gray-600 text-sm">Enter your email to receive your detailed results and personalized recommendations</p>
              </div>
              
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34c5c5] focus:border-[#34c5c5] outline-none"
                  />
                  <button
                    type="submit"
                    disabled={pdfSent}
                    className="px-6 py-3 rounded-lg font-medium text-white transition-colors"
                    style={{ backgroundColor: pdfSent ? '#34c5c5' : '#E8A849' }}
                  >
                    {pdfSent ? '✓ Sent!' : 'Send Report'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Signup Phase
  if (phase === 'signup') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-6">
              <TrendingUp className="h-12 w-12 text-[#34c5c5] mx-auto mb-3" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Save Your Progress
              </h1>
              <p className="text-gray-600 text-sm">
                Create your account to save your results and unlock your transformation journey
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={signupData.name}
                  onChange={(e) => setSignupData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34c5c5] focus:border-[#34c5c5] outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={signupData.password}
                  onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Create a password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34c5c5] focus:border-[#34c5c5] outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">I identify as a...</label>
                <select
                  required
                  value={signupData.role}
                  onChange={(e) => setSignupData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34c5c5] focus:border-[#34c5c5] outline-none"
                >
                  <option value="">Select your community</option>
                  <option value="veteran">Veteran</option>
                  <option value="woman-leader">Woman Leader</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="corporate-executive">Corporate Executive</option>
                  <option value="couples">Couples</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium text-white text-lg transition-colors"
                style={{ backgroundColor: '#34c5c5' }}
              >
                Create Account & Save Results
              </button>
              
              <p className="text-xs text-center text-gray-500">
                Your quiz results will be saved as your baseline assessment in Personal Progress
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }

  // Quiz Phase
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/quizzes" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Assessments
          </Link>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">{category}</div>
              <div className="text-sm text-gray-500">{duration}</div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%`, backgroundColor: '#34c5c5' }}
            />
          </div>
          <div className="text-sm text-gray-600 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {currentQuestionData.text}
          </h2>
          
          {currentQuestionData.type === 'multiple-choice' ? (
            <div className="space-y-3">
              {currentQuestionData.options.map((option, index) => (
                <label 
                  key={index}
                  className={`block p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                    answers[currentQuestionData.id] === option
                      ? 'border-[#34c5c5] bg-[#34c5c5]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestionData.id}`}
                    value={option}
                    checked={answers[currentQuestionData.id] === option}
                    onChange={() => handleAnswer(currentQuestionData.id, option)}
                    className="sr-only"
                  />
                  <span className="text-gray-900">{option}</span>
                </label>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Strongly Disagree</span>
                <span>Strongly Agree</span>
              </div>
              <div className="flex justify-between">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value} className="flex flex-col items-center cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${currentQuestionData.id}`}
                      value={value}
                      checked={answers[currentQuestionData.id] === value}
                      onChange={() => handleAnswer(currentQuestionData.id, value)}
                      className="mb-2"
                    />
                    <span className="text-sm text-gray-600">{value}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
              currentQuestion === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </button>
          
          <button
            onClick={nextQuestion}
            disabled={!isAnswered}
            className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${
              !isAnswered
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'text-white hover:opacity-90'
            }`}
            style={isAnswered ? { backgroundColor: '#34c5c5' } : {}}
          >
            {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
