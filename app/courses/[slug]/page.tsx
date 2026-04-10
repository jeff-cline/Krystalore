'use client'

import { notFound } from 'next/navigation'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import {
  ChevronRight, CheckCircle, Clock, Users, Star,
  BookOpen, ArrowRight, Wind, Heart
} from 'lucide-react'

const courses: Record<string, {
  title: string
  subtitle: string
  description: string
  icon: typeof Wind
  color: string
  duration: string
  modules: string[]
  benefits: string[]
  forWho: string[]
}> = {
  'just-breathe': {
    title: 'Just Breathe',
    subtitle: 'Breathwork & Mindfulness Mastery',
    description: 'A transformative course on breathwork and mindfulness designed to reduce stress, increase focus, and unlock your body\'s natural healing power. Learn techniques used by elite athletes, military operators, and high-performing executives.',
    icon: Wind,
    color: 'from-[#34c5c5] to-teal-700',
    duration: '6 weeks',
    modules: [
      'The Science of Breath — How breathing affects your nervous system',
      'Box Breathing & Tactical Calm — Military-grade stress management',
      'Energizing Breathwork — Wim Hof-inspired activation techniques',
      'Mindfulness Foundations — Present-moment awareness practices',
      'Breathwork for Sleep — Evening protocols for deep rest',
      'Integration & Daily Practice — Building your personal protocol',
    ],
    benefits: [
      'Reduce stress and anxiety naturally',
      'Improve focus and mental clarity',
      'Enhance physical performance',
      'Better sleep quality',
      'Emotional regulation and resilience',
      'Daily mindfulness practice you\'ll actually stick to',
    ],
    forWho: [
      'Executives dealing with high-stress environments',
      'Athletes looking to enhance performance',
      'Anyone struggling with anxiety or overwhelm',
      'Leaders who want to show up with more presence',
    ],
  },
  'relationship-remodel': {
    title: 'Relationship Remodel',
    subtitle: 'Transform Your Most Important Relationships',
    description: 'A comprehensive course on rebuilding, strengthening, and transforming your relationships — with your partner, family, friends, and most importantly, yourself. Built on the principles from Krystalore\'s coaching and her book Road to Resilience.',
    icon: Heart,
    color: 'from-[#E8A849] to-orange-700',
    duration: '8 weeks',
    modules: [
      'The Foundation — Understanding your relationship patterns',
      'Self-Relationship — You can\'t pour from an empty cup',
      'Communication Mastery — Say what you mean, hear what they need',
      'Conflict as Growth — Turning fights into breakthroughs',
      'Boundaries & Balance — Loving without losing yourself',
      'Intimacy & Connection — Deepening emotional and physical bonds',
      'Family Dynamics — Healing generational patterns',
      'The Remodel Blueprint — Your personalized relationship action plan',
    ],
    benefits: [
      'Deeper emotional connection with your partner',
      'Healthier communication patterns',
      'Clear, compassionate boundaries',
      'Resolution of recurring conflict patterns',
      'Stronger sense of self within relationships',
      'Tools for ongoing relationship growth',
    ],
    forWho: [
      'Couples wanting to strengthen their bond',
      'Individuals recovering from difficult relationships',
      'Military families navigating unique challenges',
      'Anyone ready to break unhealthy relationship patterns',
    ],
  },
}

function CourseJsonLd({ course, slug }: { course: typeof courses[string]; slug: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: { '@type': 'Organization', name: 'Crews Beyond Limits Consulting', url: 'https://executive-krystalore.vercel.app' },
    instructor: { '@type': 'Person', name: 'Krystalore Crews' },
    url: `https://executive-krystalore.vercel.app/courses/${slug}`,
    timeRequired: course.duration,
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses[params.slug]
  if (!course) notFound()

  const Icon = course.icon

  return (
    <>
      <CourseJsonLd course={course} slug={params.slug} />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[#34c5c5]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/courses" className="hover:text-[#34c5c5]">Courses</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{course.title}</span>
          </nav>
        </div>

        <section className={`relative bg-gradient-to-br ${course.color} text-white py-20 lg:py-28`}>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Icon className="w-14 h-14 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl opacity-90 mb-2">{course.subtitle}</p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm opacity-80">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Self-paced</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4" /> By Krystalore Crews</span>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-12">{course.description}</p>

            {/* Modules */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Modules</h2>
            <div className="space-y-3 mb-16">
              {course.modules.map((m, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#34c5c5] text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <span className="text-gray-700">{m}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Gain</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-16">
              {course.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{b}</span>
                </div>
              ))}
            </div>

            {/* Who It's For */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who This Course Is For</h2>
            <div className="space-y-2 mb-16">
              {course.forWho.map((w) => (
                <div key={w} className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-[#E8A849] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Start {course.title}?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing-demo" className="bg-[#34c5c5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e07800] transition-colors">
                Enroll Now
              </Link>
              <Link href="/courses" className="border-2 border-[#34c5c5] text-[#34c5c5] px-8 py-4 rounded-xl font-bold hover:bg-[#34c5c5]/10 transition-colors">
                Browse All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href="/about" className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900">About Krystalore</h3>
                <p className="text-sm text-gray-500 mt-1">Your instructor&apos;s story</p>
              </Link>
              <Link href="/books" className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <BookOpen className="w-6 h-6 text-[#34c5c5] mb-2" />
                <h3 className="font-bold text-gray-900">Books</h3>
                <p className="text-sm text-gray-500 mt-1">Companion reading</p>
              </Link>
              <Link href="/podcasts" className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900">Podcast</h3>
                <p className="text-sm text-gray-500 mt-1">Krystal Clear Life</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
