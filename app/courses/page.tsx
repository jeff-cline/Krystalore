'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import GrowScaleCTA from '@/components/GrowScaleCTA'
import Link from 'next/link'
import Image from 'next/image'
import { Lock, Play, Users, Clock, Star, BookOpen, Target, Heart, Zap } from 'lucide-react'

const courses = [
  { title: 'Bombshell Bootcamp', description: 'Transform your confidence and leadership presence with this intensive confidence-building program.', slug: 'bombshell-bootcamp', icon: Zap, difficulty: 'Intermediate', duration: '6 weeks', lessons: 24, featured: true, price: 'Premium', category: 'Leadership', audiences: ['Entrepreneurs', 'Corporate Executives'] },
  { title: 'Relationship Remodel', description: 'Rebuild and strengthen your personal and professional relationships with proven strategies.', slug: 'relationship-remodel', icon: Heart, difficulty: 'Beginner', duration: '4 weeks', lessons: 16, featured: false, price: 'Premium', category: 'Relationships', audiences: ['Couples', 'Men'] },
  { title: 'Vision Board Workshop', description: 'Create powerful visual representations of your goals and manifest your ideal future.', slug: 'vision-board-workshop', icon: Target, difficulty: 'Beginner', duration: '2 weeks', lessons: 8, featured: false, price: 'Premium', category: 'Goal Setting', audiences: ['Entrepreneurs'] },
  { title: 'Confidence on Camera', description: 'Master the art of presenting yourself confidently on video and in virtual meetings.', slug: 'confidence-on-camera', icon: Play, difficulty: 'Intermediate', duration: '3 weeks', lessons: 12, featured: false, price: 'Premium', category: 'Communication', audiences: ['Entrepreneurs', 'Corporate Executives'] },
  { title: 'Monday Motivation', description: 'Weekly motivation sessions to kickstart your week with purpose and energy.', slug: 'monday-motivation', icon: Star, difficulty: 'Beginner', duration: 'Ongoing', lessons: 52, featured: false, price: 'Premium', category: 'Motivation', audiences: ['Entrepreneurs', 'Veterans', 'Men'] },
  { title: 'Just Breathe Meditation Series', description: 'Learn mindfulness and meditation techniques to manage stress and increase focus.', slug: 'just-breathe', icon: Heart, difficulty: 'Beginner', duration: '4 weeks', lessons: 20, featured: false, price: 'Premium', category: 'Wellness', audiences: ['Veterans', 'Corporate Executives'] },
  { title: 'Million Dollar Body Academy', description: 'Complete fitness and nutrition program designed for busy executives and leaders.', slug: 'million-dollar-body', icon: Target, difficulty: 'Advanced', duration: '12 weeks', lessons: 48, featured: true, price: 'Premium', category: 'Fitness', audiences: ['Entrepreneurs', 'Men', 'Veterans'] },
  { title: 'Boundaries for Leaders', description: 'Learn to set healthy boundaries while maintaining strong leadership relationships.', slug: 'boundaries-for-leaders', icon: BookOpen, difficulty: 'Intermediate', duration: '5 weeks', lessons: 20, featured: false, price: 'Premium', category: 'Leadership', audiences: ['Corporate Executives', 'Corporate Teams'] },
  { title: '6 Week Shred', description: 'Intensive fitness program designed to transform your body in just 6 weeks.', slug: '6-week-shred', icon: Zap, difficulty: 'Advanced', duration: '6 weeks', lessons: 36, featured: false, price: 'Premium', category: 'Fitness', audiences: ['Men', 'Veterans'] },
  { title: 'Healthy Habits', description: 'Build sustainable healthy habits that stick and transform your daily routines.', slug: 'healthy-habits', icon: Heart, difficulty: 'Beginner', duration: '8 weeks', lessons: 32, featured: false, price: 'Premium', category: 'Wellness', audiences: ['Entrepreneurs', 'Couples'] },
  { title: 'Identity Does Not Have to Be a Crisis', description: 'Navigate identity transitions and career changes with confidence and clarity.', slug: 'identity-crisis', icon: Users, difficulty: 'Intermediate', duration: '6 weeks', lessons: 18, featured: false, price: 'Premium', category: 'Personal Growth', audiences: ['Veterans', 'Men'] },
  { title: 'Rise Beyond Grief and Loss', description: 'Healing and growth strategies for overcoming grief, loss, and life transitions.', slug: 'rise-beyond-grief', icon: Heart, difficulty: 'Advanced', duration: '8 weeks', lessons: 24, featured: false, price: 'Premium', category: 'Healing', audiences: ['Veterans', 'Couples'] },
  { title: 'Freedom Friday', description: 'Weekly sessions focused on breaking free from limiting beliefs and patterns.', slug: 'freedom-friday', icon: Star, difficulty: 'Intermediate', duration: 'Ongoing', lessons: 52, featured: false, price: 'Premium', category: 'Personal Growth', audiences: ['Entrepreneurs', 'Men'] },
  { title: 'Business Bootcamp', description: 'Comprehensive business building course for entrepreneurs and aspiring business owners.', slug: 'business-bootcamp', icon: Target, difficulty: 'Advanced', duration: '10 weeks', lessons: 40, featured: true, price: 'Premium', category: 'Business', audiences: ['Entrepreneurs'] },
]

const categories = ['All', 'Leadership', 'Fitness', 'Wellness', 'Personal Growth', 'Business', 'Communication']
const audienceOptions = ['Entrepreneurs', 'Veterans', 'Men', 'Couples', 'Corporate Executives', 'Corporate Teams']

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null)

  const filteredCourses = courses.filter(c => {
    const catMatch = selectedCategory === 'All' || c.category === selectedCategory
    const audMatch = !selectedAudience || c.audiences.includes(selectedAudience)
    return catMatch && audMatch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/planner.jpg" alt="Krystalore Crews courses and educational content" fill className="object-cover object-top" sizes="100vw" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Dashboard */}
        <Link href="/dashboard" className="inline-flex items-center text-[#34c5c5] hover:underline mb-6">
          ← Back to Dashboard
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium <span className="text-[#34c5c5]">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Self-paced video courses designed for busy leaders who want to transform their mindset, 
            body, and leadership skills. Access exclusive content and community support.
          </p>
        </div>

        {/* Membership Notice */}
        <div className="bg-[#34c5c5]/10 border border-[#34c5c5]/30 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Lock className="h-6 w-6 text-[#34c5c5] mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Premium Membership Required</h3>
                <p className="text-gray-600">Get unlimited access to all courses and exclusive content</p>
              </div>
            </div>
            <Link href="/auth/signup" className="bg-[#34c5c5] text-white px-6 py-2 rounded-lg hover:bg-[#84d7d7] transition-colors font-medium">
              Join Now
            </Link>
          </div>
        </div>

        {/* Featured Courses */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(c => c.featured).map((course, i) => {
              const Icon = course.icon
              return (
                <div key={i} className="bg-gradient-to-br from-[#34c5c5]/10 to-[#34c5c5]/5 border border-[#34c5c5]/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="h-8 w-8 text-[#34c5c5]" />
                    <span className="bg-[#34c5c5] text-white px-2 py-1 rounded text-xs font-semibold">Featured</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="space-y-1 text-sm text-gray-500 mb-4">
                    <div className="flex items-center"><Clock className="h-4 w-4 mr-2" />{course.duration} • {course.lessons} lessons</div>
                    <div className="flex items-center"><BookOpen className="h-4 w-4 mr-2" />{course.difficulty} level</div>
                  </div>
                  <Link href={`/courses/${course.slug}`} className="block w-full text-center bg-[#34c5c5] text-white py-2 rounded-lg hover:bg-[#84d7d7] transition-colors font-medium">
                    View Course
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        {/* All Courses */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">All Courses</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === cat ? 'bg-[#34c5c5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >{cat}</button>
            ))}
          </div>

          {/* Audience Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {audienceOptions.map((aud) => (
              <button key={aud} onClick={() => setSelectedAudience(selectedAudience === aud ? null : aud)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedAudience === aud ? 'bg-[#34c5c5] text-white' : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >{aud}</button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, i) => {
              const Icon = course.icon
              return (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="h-6 w-6 text-[#34c5c5]" />
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{course.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                  <div className="space-y-1 text-xs text-gray-500 mb-4">
                    <div className="flex justify-between"><span>Duration:</span><span>{course.duration}</span></div>
                    <div className="flex justify-between"><span>Lessons:</span><span>{course.lessons}</span></div>
                    <div className="flex justify-between"><span>Level:</span><span>{course.difficulty}</span></div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.audiences.map(a => (
                      <span key={a} className="text-[10px] px-1.5 py-0.5 bg-[#34c5c5]/10 text-[#34c5c5] rounded">{a}</span>
                    ))}
                  </div>
                  <Link href={`/courses/${course.slug}`} className="block w-full text-center border border-[#34c5c5] text-[#34c5c5] py-2 rounded-lg hover:bg-[#34c5c5] hover:text-white transition-colors text-sm font-medium">
                    Preview Course
                  </Link>
                </div>
              )
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12 text-gray-500">No courses match your current filters.</div>
          )}
        </section>

        {/* Learning Path */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recommended Learning Path</h2>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Start with Self-Assessment', d: 'Take our quizzes to understand your current state', link: '/quizzes' },
              { n: '2', t: 'Foundation Courses', d: 'Build core skills with Vision Board Workshop and Healthy Habits' },
              { n: '3', t: 'Leadership Development', d: 'Advance with Bombshell Bootcamp and Boundaries for Leaders' },
              { n: '4', t: 'Specialization', d: 'Choose courses that align with your specific goals and challenges' },
            ].map(step => (
              <div key={step.n} className="flex items-center">
                <div className="bg-[#34c5c5] rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">{step.n}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-semibold">{step.t}</h3>
                  <p className="text-gray-600">{step.d}</p>
                </div>
                {step.link && <Link href={step.link} className="text-[#34c5c5] hover:underline">Take Quizzes →</Link>}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-8 bg-[#34c5c5]/5 border border-[#34c5c5]/20 rounded-lg p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s Included with Membership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><Play className="h-4 w-4 text-[#34c5c5] mr-3" />Unlimited access to all video content</li>
              <li className="flex items-center"><BookOpen className="h-4 w-4 text-[#34c5c5] mr-3" />Downloadable resources and workbooks</li>
              <li className="flex items-center"><Users className="h-4 w-4 text-[#34c5c5] mr-3" />Access to private community forums</li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><Star className="h-4 w-4 text-[#34c5c5] mr-3" />Monthly live Q&A sessions with Krystal</li>
              <li className="flex items-center"><Target className="h-4 w-4 text-[#34c5c5] mr-3" />Progress tracking and completion certificates</li>
              <li className="flex items-center"><Clock className="h-4 w-4 text-[#34c5c5] mr-3" />Learn at your own pace, lifetime access</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to <span className="text-[#34c5c5]">Transform</span> Your Leadership?
          </h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of leaders who have accelerated their growth with our proven courses.</p>
          <Link href="/auth/signup" className="bg-[#34c5c5] text-white text-lg px-8 py-4 rounded-lg hover:bg-[#84d7d7] transition-colors font-medium">
            Start Your Membership Today
          </Link>
        </div>
      </div>

      <GrowScaleCTA />
    </div>
  )
}
