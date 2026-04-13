'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Clock, Star, ChevronDown, ChevronUp, ArrowRight, Play, Users, Heart, Zap, Target, Dumbbell, Brain, Wind, Flame } from 'lucide-react'

const courses = [
  {
    title: 'Health Mastery Group Coaching',
    description: 'A high-level group coaching experience for entrepreneurs and leaders ready to reclaim their energy, rebuild consistency, and lead from the inside out.',
    href: '/health-mastery',
    image: '/images/health-mastery/hero.webp',
    category: 'Coaching',
    duration: 'Ongoing',
    icon: Heart,
    featured: true,
    price: '$497/mo',
  },
  {
    title: 'Bombshell Bootcamp',
    description: 'Transform your confidence and body with this signature bootcamp program. No equipment needed — workouts you can do anywhere.',
    href: '/bombshell-bootcamp',
    image: '/images/go9/fitness.jpg',
    category: 'Fitness',
    duration: '4 Weeks',
    icon: Zap,
    featured: true,
    price: 'FREE',
  },
  {
    title: '6 Week Shred Challenge',
    description: '6 weeks of structured training to transform your body and build lasting fitness habits. Designed for those ready to commit.',
    href: '/six-week-shred',
    image: '/images/go9/fitness-alt.jpg',
    category: 'Fitness',
    duration: '6 Weeks',
    icon: Flame,
    featured: true,
    price: '$96',
  },
  {
    title: 'Million Dollar Body Academy',
    description: 'Complete fitness and nutrition program designed for busy executives and leaders who want peak physical performance.',
    href: '/courses/million-dollar-body',
    image: '/images/go9/fitness-balcony.jpg',
    category: 'Fitness',
    duration: '12 Weeks',
    icon: Target,
    featured: false,
    price: 'Premium',
  },
  {
    title: 'Beyond Limits Bootcamp',
    description: 'The signature Beyond Limits program — structured workouts, accountability, and coaching to push past every plateau.',
    href: '/bootcamp',
    image: '/images/go9/group.jpg',
    category: 'Fitness',
    duration: 'Ongoing',
    icon: Dumbbell,
    featured: false,
    price: '$69',
  },
  {
    title: 'Just Breathe Meditation Series',
    description: '15 guided meditations for grounding, clarity, confidence, and healing. 3-minute sessions designed for busy leaders.',
    href: '/just-breathe',
    image: '/images/just-breathe/cover.jpg',
    category: 'Wellness',
    duration: '15 Episodes',
    icon: Wind,
    featured: false,
    price: 'FREE',
  },
  {
    title: 'Monday Motivation LIVE',
    description: 'Weekly live sessions to kickstart your week with energy, accountability, intention, and community connection.',
    href: '/monday-motivation',
    image: '/images/go9/keynote.jpg',
    category: 'Motivation',
    duration: 'Weekly',
    icon: Star,
    featured: false,
    price: 'FREE',
  },
  {
    title: 'Vision Board Workshop',
    description: 'Create powerful visual representations of your goals and manifest your ideal future with guided intention-setting.',
    href: '/vision-board',
    image: '/images/go9/planner.jpg',
    category: 'Goal Setting',
    duration: 'Workshop',
    icon: Target,
    featured: false,
    price: 'Premium',
  },
  {
    title: 'Somatic Healing & Embodiment',
    description: 'Release stored trauma through somatic practices. Reconnect body and mind through breathwork, movement, and guided healing.',
    href: '/courses/somatic-healing',
    image: '/images/go9/meditation.webp',
    category: 'Healing',
    duration: '8 Weeks',
    icon: Heart,
    featured: false,
    price: 'Premium',
  },
  {
    title: 'Identity & Transition Coaching',
    description: 'Navigate identity transitions and career changes with confidence. For veterans, career changers, and anyone in reinvention.',
    href: '/courses/identity-transition',
    image: '/images/go9/coaching.jpg',
    category: 'Personal Growth',
    duration: '6 Weeks',
    icon: Brain,
    featured: false,
    price: 'Premium',
  },
]

const categories = ['All', 'Coaching', 'Fitness', 'Wellness', 'Healing', 'Motivation', 'Personal Growth', 'Goal Setting']

const faqs = [
  { q: 'How do I access courses?', a: 'Most courses are available through the Krystalore platform. Some are free (Bombshell Bootcamp, Just Breathe), while premium courses require a membership or one-time purchase.' },
  { q: 'Are the fitness programs suitable for beginners?', a: 'Yes! Bombshell Bootcamp is specifically designed for all levels. The 6 Week Shred and Million Dollar Body Academy are more advanced but include modifications for every fitness level.' },
  { q: 'What is Health Mastery Group Coaching?', a: 'Health Mastery is Krystalore\'s flagship group coaching program — weekly Zoom calls, fitness systems, accountability, bootcamp access, and a private community. It\'s the full transformation experience.' },
  { q: 'What is somatic healing?', a: 'Somatic healing works with the body to release stored trauma and tension. Through breathwork, movement, and guided practices, you reconnect mind and body for deep transformation.' },
  { q: 'Can I do multiple programs at once?', a: 'Absolutely. Many members pair a fitness program (like 6 Week Shred) with the Just Breathe meditation series and Monday Motivation for a complete mind-body-spirit approach.' },
  { q: 'Is there a community?', a: 'Yes! All programs include access to the Crews Beyond Limits community. Health Mastery members get a private community with weekly engagement.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <p className="text-gray-600 text-sm pb-4 leading-relaxed">{a}</p>}
    </div>
  )
}

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filtered = courses.filter(c => selectedCategory === 'All' || c.category === selectedCategory)
  const featured = courses.filter(c => c.featured)

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="relative h-72 sm:h-96">
          <Image src="/images/go9/coaching.jpg" alt="Krystalore Crews courses and programs" fill className="object-cover object-top" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <BookOpen className="w-8 h-8 text-[#E8A849] mb-2" />
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Courses & Programs</h1>
            <p className="text-white/80 text-sm sm:text-lg max-w-xl">
              Fitness, coaching, meditation, and personal growth programs by Krystalore Crews. Transform your mind, body, and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map(course => (
            <Link key={course.title} href={course.href} className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all">
              <div className="relative h-48 sm:h-56">
                <Image src={course.image} alt={course.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {course.price === 'FREE' && <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">FREE</span>}
                {course.price !== 'FREE' && course.price !== 'Premium' && <span className="absolute top-3 left-3 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full">{course.price}</span>}
                <span className="absolute top-3 right-3 bg-[#E8A849] text-white text-xs font-bold px-2 py-1 rounded-full">Featured</span>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-lg">{course.title}</h3>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                  <span className="text-teal font-medium text-sm flex items-center gap-1">Learn More <ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat ? 'bg-[#34c5c5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* All Courses Grid */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          {selectedCategory === 'All' ? 'All Courses & Programs' : selectedCategory}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(course => {
            const Icon = course.icon
            return (
              <Link key={course.title} href={course.href} className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all">
                <div className="relative h-40 sm:h-44">
                  <Image src={course.image} alt={course.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {course.price === 'FREE' && <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">FREE</span>}
                  <span className="absolute bottom-2 left-2 bg-white/90 text-gray-800 text-xs font-medium px-2 py-0.5 rounded">{course.category}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-teal transition-colors">{course.title}</h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                    <span className="text-teal font-medium">View</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Quizzes CTA */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-6 sm:p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Not Sure Where to Start?</h2>
              <p className="text-white/80 mb-6">Take one of our free assessments to discover which program is right for you.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quizzes" className="bg-white text-[#006767] font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                  Browse All Quizzes
                </Link>
                <Link href="/quizzes/self-awareness" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors text-sm border border-white/20">
                  Self-Awareness Quiz
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Entrepreneur Readiness', href: '/quizzes/entrepreneur-readiness' },
                { name: 'Emotional Intelligence', href: '/quizzes/emotional-intelligence' },
                { name: 'Life Alignment', href: '/quizzes/life-alignment' },
                { name: 'Relationship Check', href: '/quizzes/improve-marriage' },
              ].map(quiz => (
                <Link key={quiz.name} href={quiz.href} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-sm text-white/90 text-center transition-colors">
                  {quiz.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health Mastery CTA */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-[#E8A849] to-orange-600 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto min-h-[280px]">
              <Image src="/images/go9/portrait.jpg" alt="Krystalore Crews" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Want the Full Experience?</h2>
              <p className="text-white/90 mb-6">Health Mastery Group Coaching combines weekly calls, fitness, meditation, accountability, and community into one transformational program.</p>
              <Link href="/health-mastery" className="bg-white text-[#E8A849] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors text-center sm:w-fit">
                Learn About Health Mastery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="bg-white rounded-xl border border-gray-200 px-6">
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </section>
    </MainLayout>
  )
}
