'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/header'
import { Clock, Users, TrendingUp, Heart, Target, Brain, Calendar, User, Building, Briefcase, Wind, AlertCircle, CloudRain, Rocket, Shield, Sparkles } from 'lucide-react'

const quizzes = [
  {
    slug: 'life-alignment',
    title: 'Life Alignment Assessment',
    description: 'Discover how aligned your current life is with your core values and long-term goals.',
    icon: Target,
    duration: '10 min',
    category: 'Personal Development',
    audiences: ['Entrepreneurs', 'Corporate Executives'],
    color: 'bg-[#34c5c5]'
  },
  {
    slug: 'emotional-intelligence',
    title: 'Emotional Intelligence Quiz',
    description: 'Assess your ability to understand and manage emotions in yourself and others.',
    icon: Heart,
    duration: '15 min',
    category: 'Leadership',
    audiences: ['Corporate Executives', 'Corporate Teams'],
    color: 'bg-[#34c5c5]'
  },
  {
    slug: 'marathon-ready',
    title: 'Marathon Ready Assessment',
    description: 'Evaluate your physical and mental readiness for marathon training and completion.',
    icon: TrendingUp,
    duration: '8 min',
    category: 'Fitness',
    audiences: ['Veterans', 'Men'],
    color: 'bg-green-500'
  },
  {
    slug: 'relationship-management',
    title: 'Relationship Management',
    description: 'Assess your skills in building and maintaining professional and personal relationships.',
    icon: Users,
    duration: '12 min',
    category: 'Leadership',
    audiences: ['Couples', 'Corporate Executives'],
    color: 'bg-blue-500'
  },
  {
    slug: 'self-management',
    title: 'Self-Management Skills',
    description: 'Evaluate your ability to manage time, stress, and personal productivity effectively.',
    icon: Clock,
    duration: '10 min',
    category: 'Personal Development',
    audiences: ['Entrepreneurs', 'Corporate Executives'],
    color: 'bg-purple-500'
  },
  {
    slug: 'social-awareness',
    title: 'Social Awareness Assessment',
    description: 'Measure your ability to read social cues and understand group dynamics.',
    icon: Users,
    duration: '12 min',
    category: 'Leadership',
    audiences: ['Corporate Teams', 'Corporate Executives'],
    color: 'bg-indigo-500'
  },
  {
    slug: 'retreat-ready',
    title: 'Retreat Ready Check',
    description: 'Determine your readiness for a transformational retreat experience.',
    icon: Calendar,
    duration: '6 min',
    category: 'Wellness',
    audiences: ['Veterans', 'Couples', 'Entrepreneurs'],
    color: 'bg-teal-500'
  },
  {
    slug: 'personality',
    title: 'Executive Personality Profile',
    description: 'Comprehensive personality assessment tailored for executive leadership roles.',
    icon: User,
    duration: '20 min',
    category: 'Leadership',
    audiences: ['Corporate Executives', 'Entrepreneurs'],
    color: 'bg-[#34c5c5]'
  },
  {
    slug: 'company-culture',
    title: "How's Your Company Culture?",
    description: 'Pulse check on leadership, communication, morale, engagement, and retention in your organization.',
    icon: Building,
    duration: '10 min',
    category: 'Leadership',
    audiences: ['Corporate Executives', 'Corporate Teams'],
    color: 'bg-[#34c5c5]'
  },
  {
    slug: 'scale-your-business',
    title: 'Ready to Scale Your Business?',
    description: 'Discover your readiness to scale — from writing books to hosting retreats, building community, and speaking.',
    icon: Briefcase,
    duration: '8 min',
    category: 'Business',
    audiences: ['Entrepreneurs'],
    color: 'bg-[#34c5c5]'
  },
  {
    slug: 'entrepreneur-readiness',
    title: 'Entrepreneur Readiness Assessment',
    description: 'Evaluate your readiness to start, scale, or transform your business.',
    icon: Briefcase,
    duration: '12 min',
    category: 'Business',
    audiences: ['Entrepreneurs'],
    color: 'bg-emerald-500'
  },
  {
    slug: 'couples-compatibility',
    title: 'Couples Compatibility Assessment',
    description: 'Discover how compatible you and your partner are across communication, goals, and values.',
    icon: Heart,
    duration: '12 min',
    category: 'Relationships',
    audiences: ['Couples'],
    color: 'bg-pink-500'
  },
  {
    slug: 'improve-marriage',
    title: 'Improve My Marriage Assessment',
    description: 'Evaluate key areas of your marriage and get personalized recommendations for growth.',
    icon: Users,
    duration: '10 min',
    category: 'Relationships',
    audiences: ['Couples'],
    color: 'bg-rose-500'
  },
  {
    slug: 'marriage-family',
    title: 'Improve My Marriage & Family Relationships',
    description: 'Assess the health of your marriage and family dynamics and discover areas for growth.',
    icon: Heart,
    duration: '12 min',
    category: 'Relationships',
    audiences: ['Couples', 'Men'],
    color: 'bg-pink-500'
  },
  {
    slug: 'breathwork',
    title: 'Breathwork Assessment',
    description: 'Evaluate your breathing patterns and discover how breathwork can transform your well-being.',
    icon: Wind,
    duration: '6 min',
    category: 'Wellness',
    audiences: ['Veterans', 'Corporate Executives', 'Entrepreneurs'],
    color: 'bg-cyan-500'
  },
  {
    slug: 'anxiety',
    title: 'Anxiety Assessment',
    description: 'Understand your anxiety levels and get personalized strategies for managing stress and worry.',
    icon: AlertCircle,
    duration: '8 min',
    category: 'Wellness',
    audiences: ['Veterans', 'Men', 'Entrepreneurs'],
    color: 'bg-amber-500'
  },
  {
    slug: 'depression',
    title: 'Depression & Mental Wellness Assessment',
    description: 'A compassionate check-in on your mental wellness with resources and next steps.',
    icon: CloudRain,
    duration: '10 min',
    category: 'Wellness',
    audiences: ['Veterans', 'Men'],
    color: 'bg-slate-500'
  },
  {
    slug: 'veteran-transition',
    title: 'Veteran Transition Readiness',
    description: 'Assess your readiness for the military-to-civilian transition across career, identity, and wellness.',
    icon: Shield,
    duration: '12 min',
    category: 'Veterans',
    audiences: ['Veterans'],
    color: 'bg-indigo-500'
  },
  {
    slug: 'womens-confidence',
    title: "Women's Confidence Assessment",
    description: 'Evaluate your confidence, self-care, and empowerment across all areas of life.',
    icon: Sparkles,
    duration: '10 min',
    category: 'Personal Development',
    audiences: ['Women'],
    color: 'bg-fuchsia-500'
  },
]

const categories = ['All', 'Leadership', 'Personal Development', 'Fitness', 'Wellness', 'Business', 'Relationships', 'Veterans']
const audiences = ['Entrepreneurs', 'Veterans', 'Men', 'Women', 'Couples', 'Corporate Executives', 'Corporate Teams']

export default function QuizzesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null)

  const filteredQuizzes = quizzes.filter(q => {
    const catMatch = selectedCategory === 'All' || q.category === selectedCategory
    const audMatch = !selectedAudience || q.audiences.includes(selectedAudience)
    return catMatch && audMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Dashboard */}
        <Link href="/dashboard" className="inline-flex items-center text-[#34c5c5] hover:underline mb-6">
          ← Back to Dashboard
        </Link>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-8">
          <Image src="/images/go9/hero.jpg" alt="Krystalore Crews empowerment and self-discovery assessments" fill className="object-cover" sizes="100vw" />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Assessment Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover insights about yourself with our comprehensive assessment tools. 
            Each quiz provides personalized feedback to help guide your development journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#34c5c5] text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Audience Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <button
                key={audience}
                onClick={() => setSelectedAudience(selectedAudience === audience ? null : audience)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedAudience === audience
                    ? 'bg-[#34c5c5] text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {audience}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => {
            const Icon = quiz.icon
            return (
              <Link 
                key={quiz.slug}
                href={`/quizzes/${quiz.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${quiz.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {quiz.duration}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#34c5c5] transition-colors">
                  {quiz.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                    {quiz.category}
                  </span>
                  <span className="text-[#34c5c5] font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Start Quiz →
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {quiz.audiences.map(a => (
                    <span key={a} className="text-[10px] px-1.5 py-0.5 bg-[#34c5c5]/10 text-[#34c5c5] rounded">{a}</span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>

        {filteredQuizzes.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No quizzes match your current filters. Try adjusting your selection.
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-[#34c5c5]/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Personalized Recommendations</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Complete multiple assessments to receive comprehensive insights and 
            personalized course recommendations tailored to your development needs.
          </p>
          <Link href="/signup" className="bg-[#34c5c5] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#84d7d7] transition-colors">
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  )
}
