'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import GrowScaleCTA from '@/components/GrowScaleCTA'
import Link from 'next/link'
import Image from 'next/image'
import { Lock, Play, Users, Clock, Star, BookOpen, Target, Heart, Zap, Mail, ArrowRight } from 'lucide-react'

const INFO_EMAIL = 'krystalore@thecrewscoach.com'
function buildMailto(subject: string) {
  const body = `NAME:\nNumber:\nHow can I help?:`
  return `mailto:${INFO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const courses = [
  { title: 'Bombshell Bootcamp', description: 'Transform your confidence and leadership presence with this intensive confidence-building program.', slug: 'bombshell-bootcamp', icon: Zap, image: '/images/bombshell-bootcamp/bombshell-hero.png', difficulty: 'Intermediate', duration: '6 weeks', lessons: 24, featured: true, price: 'Premium', category: 'Leadership', audiences: ['Entrepreneurs', 'Corporate Executives'] },
  { title: 'Relationship Remodel', description: 'Rebuild and strengthen your personal and professional relationships with proven strategies.', slug: 'relationship-remodel', icon: Heart, image: '/images/go9/group-sunset-dresses.webp', difficulty: 'Beginner', duration: '4 weeks', lessons: 16, featured: false, price: 'Premium', category: 'Relationships', audiences: ['Couples', 'Men'] },
  { title: 'Vision Board Workshop', description: 'Create powerful visual representations of your goals and manifest your ideal future.', slug: 'vision-board-workshop', icon: Target, image: '/images/vision-board/vision-board-hero.png', difficulty: 'Beginner', duration: '2 weeks', lessons: 8, featured: false, price: 'Premium', category: 'Goal Setting', audiences: ['Entrepreneurs'] },
  { title: 'Confidence on Camera', description: 'Master the art of presenting yourself confidently on video and in virtual meetings.', slug: 'confidence-on-camera', icon: Play, image: '/images/go9/speaking-headshot.jpg', difficulty: 'Intermediate', duration: '3 weeks', lessons: 12, featured: false, price: 'Premium', category: 'Communication', audiences: ['Entrepreneurs', 'Corporate Executives'] },
  { title: 'Monday Motivation', description: 'Weekly motivation sessions to kickstart your week with purpose and energy.', slug: 'monday-motivation', icon: Star, image: '/images/go9/keynote.jpg', difficulty: 'Beginner', duration: 'Ongoing', lessons: 52, featured: false, price: 'Premium', category: 'Motivation', audiences: ['Entrepreneurs', 'Veterans', 'Men'] },
  { title: 'Just Breathe Meditation Series', description: 'Learn mindfulness and meditation techniques to manage stress and increase focus.', slug: 'just-breathe', icon: Heart, image: '/images/just-breathe/cover.jpg', difficulty: 'Beginner', duration: '4 weeks', lessons: 20, featured: false, price: 'Premium', category: 'Wellness', audiences: ['Veterans', 'Corporate Executives'] },
  { title: 'Million Dollar Body Academy', description: 'Complete fitness and nutrition program designed for busy executives and leaders.', slug: 'million-dollar-body', icon: Target, image: '/images/million-dollar-body/mdb-hero.png', difficulty: 'Advanced', duration: '12 weeks', lessons: 48, featured: true, price: 'Premium', category: 'Fitness', audiences: ['Entrepreneurs', 'Men', 'Veterans'] },
  { title: 'Boundaries for Leaders', description: 'Learn to set healthy boundaries while maintaining strong leadership relationships.', slug: 'boundaries-for-leaders', icon: BookOpen, image: '/images/leadership-programs/leadership-hero.png', difficulty: 'Intermediate', duration: '5 weeks', lessons: 20, featured: false, price: 'Premium', category: 'Leadership', audiences: ['Corporate Executives', 'Corporate Teams'] },
  { title: '6 Week Shred', description: 'Intensive fitness program designed to transform your body in just 6 weeks.', slug: '6-week-shred', icon: Zap, image: '/images/six-week-shred/six-week-shred-hero.jpg', difficulty: 'Advanced', duration: '6 weeks', lessons: 36, featured: false, price: 'Premium', category: 'Fitness', audiences: ['Men', 'Veterans'] },
  { title: 'Healthy Habits', description: 'Build sustainable healthy habits that stick and transform your daily routines.', slug: 'healthy-habits', icon: Heart, image: '/images/go9/planner.jpg', difficulty: 'Beginner', duration: '8 weeks', lessons: 32, featured: false, price: 'Premium', category: 'Wellness', audiences: ['Entrepreneurs', 'Couples'] },
  { title: 'Identity Does Not Have to Be a Crisis', description: 'Navigate identity transitions and career changes with confidence and clarity.', slug: 'identity-crisis', icon: Users, image: '/images/emotional-mastery/i-want-my-life-back.jpg', difficulty: 'Intermediate', duration: '6 weeks', lessons: 18, featured: false, price: 'Premium', category: 'Personal Growth', audiences: ['Veterans', 'Men'] },
  { title: 'Rise Beyond Grief and Loss', description: 'Healing and growth strategies for overcoming grief, loss, and life transitions.', slug: 'rise-beyond-grief', icon: Heart, image: '/images/go9/meditation.webp', difficulty: 'Advanced', duration: '8 weeks', lessons: 24, featured: false, price: 'Premium', category: 'Healing', audiences: ['Veterans', 'Couples'] },
  { title: 'Freedom Friday', description: 'Weekly sessions focused on breaking free from limiting beliefs and patterns.', slug: 'freedom-friday', icon: Star, image: '/images/go9/group-sunset.jpg', difficulty: 'Intermediate', duration: 'Ongoing', lessons: 52, featured: false, price: 'Premium', category: 'Personal Growth', audiences: ['Entrepreneurs', 'Men'] },
  { title: 'Business Bootcamp', description: 'Comprehensive business building course for entrepreneurs and aspiring business owners.', slug: 'business-bootcamp', icon: Target, image: '/images/go9/corporate.jpg', difficulty: 'Advanced', duration: '10 weeks', lessons: 40, featured: true, price: 'Premium', category: 'Business', audiences: ['Entrepreneurs'] },
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

      {/* Hero — full height, light split */}
      <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white min-h-[calc(100vh-4rem)] flex items-center pt-12 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <BookOpen className="w-3.5 h-3.5" /> 14 Self-Paced Courses · By Krystalore Crews
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-[1.05]">
                Premium <span className="text-[#0D9488]">Courses</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl leading-relaxed">
                Self-paced video courses designed for busy leaders ready to transform their mindset, body, and leadership. Exclusive content and community support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#all-courses"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
                >
                  Browse All Courses <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#featured-courses"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-10 py-4 rounded-full hover:bg-[#34c5c5]/5 transition-colors"
                >
                  Start With Featured
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-1.5"><Play className="w-4 h-4 text-[#e07800]" /> 400+ lessons</span>
                <span className="inline-flex items-center gap-1.5"><Users className="w-4 h-4 text-[#0D9488]" /> Lifetime access</span>
                <span className="inline-flex items-center gap-1.5"><Star className="w-4 h-4 text-[#E8A849] fill-[#E8A849]" /> Premium</span>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/go9/planner.jpg"
                alt="Krystalore Crews — premium course library"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Membership Notice */}
        <div className="bg-[#34c5c5]/10 border border-[#34c5c5]/30 rounded-2xl p-6 mb-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Lock className="h-6 w-6 text-[#0D9488] mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Premium Membership Required</h3>
                <p className="text-gray-600">Get unlimited access to all courses and exclusive content</p>
              </div>
            </div>
            <Link href="/auth/signup" className="bg-[#34c5c5] text-white px-6 py-2.5 rounded-full hover:bg-[#0D9488] transition-colors font-medium">
              Join Now
            </Link>
          </div>
        </div>

        {/* Featured Courses */}
        <section id="featured-courses" className="mb-16 scroll-mt-20">
          <div className="text-center mb-10">
            <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Featured Courses</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Start Here</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {courses.filter(c => c.featured).map((course, i) => {
              const Icon = course.icon
              return (
                <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col">
                  <div className="relative aspect-[16/10]">
                    <Image src={course.image} alt={course.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <span className="absolute top-4 left-4 bg-[#E8A849] text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" /> Featured
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-6 w-6 text-[#0D9488]" />
                      <span className="text-xs font-bold tracking-widest uppercase text-[#0D9488] bg-[#34c5c5]/10 px-2.5 py-1 rounded-full">{course.category}</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">{course.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                      <div className="flex items-center gap-1.5 text-gray-600"><Clock className="h-3.5 w-3.5 text-[#e07800]" /> {course.duration}</div>
                      <div className="flex items-center gap-1.5 text-gray-600"><BookOpen className="h-3.5 w-3.5 text-[#e07800]" /> {course.lessons} lessons</div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/courses/${course.slug}`} className="flex-1 text-center border border-[#34c5c5] text-[#0D9488] py-2.5 rounded-full hover:bg-[#34c5c5]/5 transition-colors text-sm font-bold">
                        View Course
                      </Link>
                      <a
                        href={buildMailto(course.title)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white py-2.5 rounded-full transition-transform hover:scale-[1.02] text-sm font-black"
                      >
                        <Mail className="h-4 w-4" /> Get Info
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* All Courses */}
        <section id="all-courses" className="scroll-mt-20">
          <div className="text-center mb-10">
            <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">The Full Catalog</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">All Courses</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  selectedCategory === cat ? 'bg-[#34c5c5] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >{cat}</button>
            ))}
          </div>

          {/* Audience Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {audienceOptions.map((aud) => (
              <button key={aud} onClick={() => setSelectedAudience(selectedAudience === aud ? null : aud)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedAudience === aud ? 'bg-[#e07800] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >{aud}</button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredCourses.map((course, i) => {
              const Icon = course.icon
              return (
                <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col">
                  <div className="relative aspect-[16/10]">
                    <Image src={course.image} alt={course.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <span className="absolute top-3 left-3 text-[10px] bg-white/95 text-[#0D9488] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                      {course.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="h-5 w-5 text-[#0D9488]" />
                      <span className="text-xs text-gray-500">{course.difficulty}</span>
                    </div>
                    <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">{course.description}</p>
                    <div className="space-y-1 text-xs text-gray-500 mb-4">
                      <div className="flex justify-between"><span>Duration:</span><span className="font-bold text-gray-700">{course.duration}</span></div>
                      <div className="flex justify-between"><span>Lessons:</span><span className="font-bold text-gray-700">{course.lessons}</span></div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.audiences.map(a => (
                        <span key={a} className="text-[10px] px-2 py-0.5 bg-[#34c5c5]/10 text-[#0D9488] rounded-full font-bold">{a}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Link href={`/courses/${course.slug}`} className="flex-1 text-center border border-gray-300 text-gray-700 py-2 rounded-full hover:border-[#34c5c5] hover:text-[#0D9488] transition-colors text-xs font-bold">
                        Preview
                      </Link>
                      <a
                        href={buildMailto(course.title)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#34c5c5] text-white py-2 rounded-full hover:bg-[#e07800] transition-colors text-xs font-black"
                      >
                        <Mail className="h-3.5 w-3.5" /> Get Info
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12 text-gray-500">No courses match your current filters.</div>
          )}
        </section>

        {/* Learning Path */}
        <div className="mt-20 bg-gradient-to-br from-[#F6F8FA] to-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <div className="text-center mb-8">
            <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Where to Start</p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Recommended Learning Path</h2>
          </div>
          <div className="space-y-4">
            {[
              { n: '1', t: 'Start with Self-Assessment', d: 'Take our quizzes to understand your current state', link: '/quizzes' },
              { n: '2', t: 'Foundation Courses', d: 'Build core skills with Vision Board Workshop and Healthy Habits' },
              { n: '3', t: 'Leadership Development', d: 'Advance with Bombshell Bootcamp and Boundaries for Leaders' },
              { n: '4', t: 'Specialization', d: 'Choose courses that align with your specific goals and challenges' },
            ].map(step => (
              <div key={step.n} className="flex items-center bg-white rounded-xl p-4 border border-gray-100">
                <div className="bg-gradient-to-br from-[#34c5c5] to-[#0D9488] rounded-full w-9 h-9 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-sm font-black">{step.n}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-bold">{step.t}</h3>
                  <p className="text-gray-600 text-sm">{step.d}</p>
                </div>
                {step.link && <Link href={step.link} className="text-[#0D9488] hover:underline text-sm font-bold">Take Quizzes →</Link>}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Ready to <span className="text-[#0D9488]">Transform</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of leaders who&apos;ve accelerated their growth with these courses.</p>
          <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform font-black shadow-lg">
            Start Your Membership Today
          </Link>
        </div>
      </div>

      <GrowScaleCTA />
      <Footer />
    </div>
  )
}
