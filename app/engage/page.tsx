'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { ArrowRight, Target, Heart, Brain, Users, Building, Shield, Briefcase, Wind, Sparkles, TrendingUp, Clock, User, Calendar, AlertCircle, CloudRain, Rocket } from 'lucide-react'

const quizzes = [
  { slug: 'emotional-intelligence', title: 'Emotional Intelligence', description: 'Assess your ability to understand and manage emotions.', icon: Heart, duration: '15 min', category: 'Leadership', color: 'bg-[#34c5c5]' },
  { slug: 'self-awareness', title: 'Self-Awareness', description: 'Explore how well you understand your own emotions and behaviors.', icon: Brain, duration: '10 min', category: 'Personal Development', color: 'bg-purple-500' },
  { slug: 'personality', title: 'Personality Profile', description: 'Discover your dominant personality traits and leadership style.', icon: User, duration: '12 min', category: 'Personal Development', color: 'bg-indigo-500' },
  { slug: 'couples-compatibility', title: 'Couples Compatibility', description: 'Evaluate the strength and dynamics of your relationship.', icon: Heart, duration: '15 min', category: 'Relationships', color: 'bg-pink-500' },
  { slug: 'entrepreneur-readiness', title: 'Entrepreneur Readiness', description: 'Determine if you have what it takes to start or scale a business.', icon: Rocket, duration: '12 min', category: 'Business', color: 'bg-[#34c5c5]' },
  { slug: 'veteran-transition', title: 'Veteran Transition', description: 'Assess your readiness for civilian life and career transition.', icon: Shield, duration: '10 min', category: 'Veterans', color: 'bg-green-600' },
  { slug: 'company-culture', title: 'Company Culture', description: 'Evaluate the health and alignment of your organizational culture.', icon: Building, duration: '10 min', category: 'Corporate', color: 'bg-blue-500' },
  { slug: 'anxiety', title: 'Anxiety Assessment', description: 'Understand your anxiety levels and triggers.', icon: AlertCircle, duration: '8 min', category: 'Mental Health', color: 'bg-yellow-500' },
  { slug: 'depression', title: 'Depression Screening', description: 'A confidential check-in on your emotional well-being.', icon: CloudRain, duration: '8 min', category: 'Mental Health', color: 'bg-gray-500' },
  { slug: 'breathwork', title: 'Breathwork Readiness', description: 'See how breathwork could benefit your daily life.', icon: Wind, duration: '8 min', category: 'Wellness', color: 'bg-cyan-500' },
  { slug: 'marathon-ready', title: 'Marathon Ready', description: 'Evaluate your physical and mental readiness for marathon training.', icon: TrendingUp, duration: '8 min', category: 'Fitness', color: 'bg-green-500' },
  { slug: 'womens-confidence', title: "Women's Confidence", description: 'Explore your confidence levels and areas for growth.', icon: Sparkles, duration: '10 min', category: 'Women', color: 'bg-rose-500' },
  { slug: 'marriage-family', title: 'Marriage & Family', description: 'Assess the health and harmony of your family relationships.', icon: Users, duration: '10 min', category: 'Relationships', color: 'bg-red-400' },
  { slug: 'improve-marriage', title: 'Improve Your Marriage', description: 'Identify key areas to strengthen your partnership.', icon: Heart, duration: '12 min', category: 'Relationships', color: 'bg-rose-400' },
  { slug: 'scale-your-business', title: 'Scale Your Business', description: 'Find out if your business is ready for the next level.', icon: Briefcase, duration: '10 min', category: 'Business', color: 'bg-amber-600' },
  { slug: 'self-management', title: 'Self-Management', description: 'How well do you regulate your emotions and behaviors?', icon: Target, duration: '10 min', category: 'Leadership', color: 'bg-teal-500' },
  { slug: 'social-awareness', title: 'Social Awareness', description: 'Measure your ability to read and respond to social cues.', icon: Users, duration: '10 min', category: 'Leadership', color: 'bg-sky-500' },
  { slug: 'relationship-management', title: 'Relationship Management', description: 'Evaluate how effectively you manage personal and professional relationships.', icon: Users, duration: '12 min', category: 'Leadership', color: 'bg-violet-500' },
  { slug: 'retreat-ready', title: 'Retreat Ready', description: 'Are you ready for a transformational retreat experience?', icon: Calendar, duration: '8 min', category: 'Retreats', color: 'bg-emerald-500' },
]

const subjects = [
  'Executive Coaching',
  'Leadership Training',
  'Retreats',
  'Platform Demo',
  'Other',
]

const faqs = [
  {
    question: 'What types of coaching does Krystalore offer?',
    answer: 'Krystalore offers executive coaching, leadership development, fitness transformation coaching, and personal development programs tailored for entrepreneurs, veterans, corporate leaders, and military spouses.',
  },
  {
    question: 'How do I schedule a discovery call?',
    answer: 'You can book a complimentary discovery call using the booking calendar on this page, or by visiting our scheduling page directly. Sessions are available virtually and in-person.',
  },
  {
    question: 'What is the typical coaching engagement?',
    answer: 'Coaching engagements typically range from 3 to 12 months depending on your goals. We start with an assessment, create a customized plan, and meet regularly to track progress and adjust strategies.',
  },
  {
    question: 'Do you offer group or corporate programs?',
    answer: 'Yes! We offer leadership training workshops, corporate retreat facilitation, and group coaching programs. Contact us with your organization\'s needs and we\'ll create a tailored proposal.',
  },
]

export default function EngagePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <MainLayout>
      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-br from-[#37a6a6] via-[#37a6a6] to-[#34c5c5] text-white min-h-[70vh] flex items-center">
        <Image src="/images/go9/community-hands.jpg" alt="Community engagement and connection" fill className="object-cover opacity-20" sizes="100vw" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Just Like In Life, There Are Many Different Situations &mdash; And I Want To Meet You Right Where You Are.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Every journey starts with understanding where you stand today. Let&apos;s find the right starting point for you.
          </p>
          <Link
            href="/alignment"
            className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-gray-800 transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: '#34c5c5' }}
          >
            Start With the Life Alignment Quiz
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED: LIFE ALIGNMENT QUIZ - Full Width */}
      {/* ============================================================ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            {/* Left - Content */}
            <div className="flex flex-col justify-center px-8 lg:px-16 py-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34c5c5]/10 text-[#34c5c5] text-sm font-semibold mb-6 w-fit">
                <Target className="h-4 w-4" />
                RECOMMENDED STARTING POINT
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Life Alignment Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Many people start here. This assessment gives me a big-picture view of where we&apos;re starting from &mdash; how aligned your daily life is with your core values and long-term goals.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                It only takes 10 minutes and covers the foundations: self-awareness, motivation, emotional control, empathy, and social skills. Think of it as our first conversation.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Personal Development', '10 Minutes', '5 Questions', 'Instant Results'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/alignment"
                className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-xl font-bold text-white transition-all hover:opacity-90 hover:shadow-lg w-fit"
                style={{ backgroundColor: '#34c5c5' }}
              >
                Take the Life Alignment Quiz
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </div>

            {/* Right - Visual */}
            <div className="bg-gradient-to-br from-[#34c5c5] to-[#37a6a6] flex items-center justify-center p-12 lg:p-20">
              <div className="text-center text-white">
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Target className="h-16 w-16 text-white" />
                </div>
                <div className="text-7xl font-bold mb-3">84%</div>
                <p className="text-white/70 text-lg mb-8">Average alignment score</p>
                <div className="space-y-4 text-left max-w-xs mx-auto">
                  {['Self-Awareness', 'Emotional Control', 'Motivation', 'Empathy', 'Social Skills'].map((cat, i) => (
                    <div key={cat}>
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>{cat}</span>
                        <span>{[87, 76, 91, 82, 79][i]}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#34c5c5]" style={{ width: `${[87, 76, 91, 82, 79][i]}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DRILL DOWN - All Other Quizzes */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Or Drill Down to What Matters Most to You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Some people want to connect at a different, more intimate level. Start with any point you&apos;re comfortable with &mdash; one of these may make more sense for where you are right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => {
              const Icon = quiz.icon
              return (
                <Link
                  key={quiz.slug}
                  href={`/quizzes/${quiz.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#34c5c5]/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${quiz.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 group-hover:text-[#34c5c5] transition-colors mb-1">
                        {quiz.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">{quiz.description}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {quiz.duration}
                        </span>
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full">{quiz.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-[#34c5c5] opacity-0 group-hover:opacity-100 transition-opacity">
                    Take this quiz <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/quizzes"
              className="inline-flex items-center text-[#34c5c5] font-semibold hover:underline text-lg"
            >
              View All Assessments <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT SECTION (from /contact page) */}
      {/* ============================================================ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Let&apos;s Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to elevate your leadership? Whether you&apos;re exploring executive coaching, planning a corporate retreat, or seeking transformation &mdash; I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>

              {status === 'sent' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">&#10003;</div>
                  <h4 className="text-lg font-semibold text-green-800 mb-1">Message Received!</h4>
                  <p className="text-green-700 text-sm">Thank you for reaching out. I&apos;ll be in touch within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="mt-4 text-sm text-[#34c5c5] hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="engage-name" className="block text-sm font-medium text-gray-800 mb-1">Full Name *</label>
                      <input id="engage-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#34c5c5] focus:ring-2 focus:ring-[#34c5c5]/20 outline-none transition-colors text-gray-800" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="engage-email" className="block text-sm font-medium text-gray-800 mb-1">Email *</label>
                      <input id="engage-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#34c5c5] focus:ring-2 focus:ring-[#34c5c5]/20 outline-none transition-colors text-gray-800" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="engage-phone" className="block text-sm font-medium text-gray-800 mb-1">Phone <span className="text-gray-400">(optional)</span></label>
                      <input id="engage-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#34c5c5] focus:ring-2 focus:ring-[#34c5c5]/20 outline-none transition-colors text-gray-800" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label htmlFor="engage-subject" className="block text-sm font-medium text-gray-800 mb-1">I&apos;m Interested In *</label>
                      <select id="engage-subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#34c5c5] focus:ring-2 focus:ring-[#34c5c5]/20 outline-none transition-colors text-gray-800 bg-white">
                        <option value="">Select a topic...</option>
                        {subjects.map((s) => (<option key={s} value={s}>{s}</option>))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="engage-message" className="block text-sm font-medium text-gray-800 mb-1">Message *</label>
                    <textarea id="engage-message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#34c5c5] focus:ring-2 focus:ring-[#34c5c5]/20 outline-none transition-colors text-gray-800 resize-none" placeholder="Tell me about your goals and how I can help..." />
                  </div>
                  {status === 'error' && <p className="text-red-600 text-sm">Something went wrong. Please try again or email directly.</p>}
                  <button type="submit" disabled={status === 'sending'} className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all disabled:opacity-60" style={{ backgroundColor: status === 'sending' ? '#999' : '#34c5c5' }}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#34c5c5] mt-0.5"><svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:krystalore@thecrewscoach.com" className="text-gray-800 hover:text-[#34c5c5] transition-colors font-medium">krystalore@thecrewscoach.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#34c5c5] mt-0.5"><svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+17163906727" className="text-gray-800 hover:text-[#34c5c5] transition-colors font-medium">+1 (716) 390-6727</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#34c5c5] mt-0.5"><svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></span>
                  <div>
                    <p className="text-sm text-gray-500">Social</p>
                    <div className="flex flex-wrap gap-3 mt-1">
                      <a href="https://www.instagram.com/thecrewscoach/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#34c5c5] transition-colors text-sm">Instagram</a>
                      <a href="https://www.linkedin.com/in/krystalore-crews/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#34c5c5] transition-colors text-sm">LinkedIn</a>
                      <a href="https://www.facebook.com/krystalore/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#34c5c5] transition-colors text-sm">Facebook</a>
                      <a href="https://www.youtube.com/user/krystalore" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#34c5c5] transition-colors text-sm">YouTube</a>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <a href="/book" className="block w-full text-center py-3 px-6 rounded-lg font-semibold text-white transition-all" style={{ backgroundColor: '#34c5c5' }}>
                    Book a Discovery Call
                  </a>
                  <p className="text-gray-500 text-xs text-center mt-2">Complimentary 30-minute consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Calendar */}
      <section className="pb-16 bg-gray-50 pt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Schedule Your Discovery Call</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Pick a time that works for you. This complimentary 30-minute call is your first step toward transformational leadership.
          </p>
        </div>
        <iframe
          src="/book"
          title="Book a Call with Krystalore Crews"
          style={{ width: '100%', height: '1350px', border: 'none', display: 'block' }}
          loading="lazy"
        />
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-gray-100 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-gray-800 font-semibold">
                {faq.question}
                <span className="ml-2 text-[#34c5c5] group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
