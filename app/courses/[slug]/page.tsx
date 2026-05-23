'use client'

import { notFound } from 'next/navigation'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import {
  ChevronRight, CheckCircle, Clock, Users, Star,
  BookOpen, ArrowRight, Wind, Heart, Zap, Target, Play, Mail
} from 'lucide-react'

const INFO_EMAIL = 'krystalore@thecrewscoach.com'

function buildMailto(courseTitle: string) {
  const subject = courseTitle
  const body = `NAME:\nNumber:\nHow can I help?:`
  return `mailto:${INFO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

type Course = {
  title: string
  subtitle: string
  description: string
  icon: typeof Wind
  color: string
  duration: string
  modules: string[]
  benefits: string[]
  forWho: string[]
}

const courses: Record<string, Course> = {
  'bombshell-bootcamp': {
    title: 'Bombshell Bootcamp',
    subtitle: 'Confidence, Leadership Presence & The Freedom Formula',
    description: 'A six-week intensive built on Krystalore\'s signature Freedom Formula. Bombshell Bootcamp rebuilds confidence from the inside out — somatic, identity-level work paired with practical leadership presence training. Not a hype cycle. A foundation.',
    icon: Zap,
    color: 'from-[#E8A849] to-orange-700',
    duration: '6 weeks',
    modules: [
      'Core — Identity, values, and the inner work that holds everything else',
      'Confidence — Built through action, not affirmation',
      'Consistency — The 34-Minute Mindset Protocol for daily execution',
      'Community — Your tribe of accountability and unfiltered truth',
      'Celebration — Honoring progress and protecting the joy in the work',
      'Integration — Your personal Freedom Formula plan moving forward',
    ],
    benefits: [
      'Visible shift in presence and how you carry yourself',
      'Clarity on what you actually want and why',
      'A nervous system that no longer freezes at the moment of execution',
      'Real, sustainable confidence — not performance',
      'A repeatable framework for the next time life gets hard',
      'A community that holds the standard with you',
    ],
    forWho: [
      'Women stepping into a level the current version of them was not built for',
      'Entrepreneurs and leaders done outrunning their own clarity',
      'Anyone who has tried "confidence work" and felt nothing stick',
      'High performers who feel successful on paper and still feel something missing',
    ],
  },
  'relationship-remodel': {
    title: 'Relationship Remodel',
    subtitle: 'Transform Your Most Important Relationships',
    description: 'A comprehensive course on rebuilding, strengthening, and transforming your relationships — with your partner, family, friends, and most importantly, yourself. Built on the principles from Krystalore\'s coaching and her book Road to Resilience.',
    icon: Heart,
    color: 'from-[#E8A849] to-orange-700',
    duration: '4 weeks',
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
  'vision-board-workshop': {
    title: 'Vision Board Workshop',
    subtitle: 'Design Your Next Chapter With Intention',
    description: 'A guided workshop to clarify what\'s next and turn vague longing into a written, visualized, actionable plan. The board is the compass — the work is yours. Live and on-demand sessions with Krystalore Crews.',
    icon: Target,
    color: 'from-[#34c5c5] to-teal-700',
    duration: '2 weeks',
    modules: [
      'Guided visualization — Clarify the vision underneath the goals',
      'Intention setting — Across career, health, relationships, finances, growth',
      'Creative build — Design a board you will actually look at every day',
      'Action planning — Three concrete moves tied to measurable outcomes',
      'Quarterly cadence — Stay aligned, don\'t drift',
    ],
    benefits: [
      'A clear written vision for 90 days, 12 months, 3 years',
      'A magnetic, intentional vision board that actually drives behavior',
      'A 3-move action plan tied to your highest priorities',
      'Renewed momentum to start before Monday',
    ],
    forWho: [
      'Entrepreneurs and leaders ready to design the next chapter',
      'High performers who set goals that quietly die in notebooks',
      'Anyone wanting a quarterly reset to stay on purpose',
      'Teams looking for a private team experience',
    ],
  },
  'confidence-on-camera': {
    title: 'Confidence on Camera',
    subtitle: 'Show Up Powerfully on Video — Live, Recorded, and in the Room',
    description: 'A three-week course to master your presence on camera — sales calls, podcasts, stages, social, and the meetings that decide your next move. Practical performance training informed by years of speaking, fitness coaching, and on-air work.',
    icon: Play,
    color: 'from-[#0D9488] to-teal-700',
    duration: '3 weeks',
    modules: [
      'The Setup — Light, framing, sound, energy, and what people notice in 3 seconds',
      'The Body — Posture, breath, and how to land a thought on camera',
      'The Voice — Pacing, pauses, and the difference between speaking and being heard',
      'The Message — Frameworks for cold-open, story, and call-to-action that converts',
      'The Practice — Rep work, on-camera drills, and feedback loops',
    ],
    benefits: [
      'Visibly higher confidence on camera within days',
      'Repeatable openings, stories, and CTAs that land',
      'A pre-meeting reset you can use anywhere',
      'A short reel of your own footage you actually want to share',
    ],
    forWho: [
      'Entrepreneurs and leaders presenting online',
      'Speakers, coaches, and podcasters',
      'Sales teams running video calls',
      'Anyone who freezes when the red light turns on',
    ],
  },
  'monday-motivation': {
    title: 'Monday Motivation',
    subtitle: 'Weekly Mindset Activation for High Performers',
    description: 'A weekly live session and course companion to start the week with energy, accountability, and intention. Mindset shifts, real-talk, and the practical playbooks Krystalore uses with her private coaching clients.',
    icon: Star,
    color: 'from-[#E8A849] to-orange-600',
    duration: 'Ongoing — 52 weeks',
    modules: [
      'Mindset of the week — A single shift to install',
      'The Monday Reset — Energy, focus, and accountability rituals',
      'Real-talk segment — The unfiltered conversation no one else is having',
      'Weekly action — One commitment, designed to be kept',
      'Replay archive — Past sessions on demand',
    ],
    benefits: [
      'A weekly cadence that prevents drift',
      'A growing playbook of mindset shifts you actually use',
      'Energy on Mondays — not dread',
      'Accountability inside a community of high performers',
    ],
    forWho: [
      'Entrepreneurs, Veterans, and men who want a real Monday',
      'Leaders building consistency without burnout',
      'Anyone tired of the Sunday scaries',
    ],
  },
  'just-breathe': {
    title: 'Just Breathe',
    subtitle: 'Breathwork & Mindfulness for High Performers',
    description: 'A course on the breath and the nervous system — the operating layer underneath your performance, sleep, and emotional regulation. Trauma-informed, somatic, and built for executives, athletes, and the women carrying everything.',
    icon: Wind,
    color: 'from-[#34c5c5] to-teal-700',
    duration: '4 weeks',
    modules: [
      'The Science of Breath — How breathing actually changes your physiology',
      'Box Breathing & Tactical Calm — Military-grade stress management',
      'Energizing Breathwork — Activation protocols for output days',
      'Mindfulness Foundations — Present-moment practices for leaders',
      'Breathwork for Sleep — Evening protocols for deep recovery',
      'Daily Practice — A protocol you will actually stick to',
    ],
    benefits: [
      'A nervous system you can regulate on demand',
      'Better focus, sleep, and physical performance',
      'Fewer reactive moments — more clean responses',
      'A practice that survives a busy week',
    ],
    forWho: [
      'Executives in high-stress environments',
      'Athletes optimizing recovery and output',
      'Veterans and first responders managing arousal',
      'Anyone who lives in their head and wants their body back',
    ],
  },
  'million-dollar-body': {
    title: 'Million Dollar Body Academy',
    subtitle: 'The Body and Mindset of a Champion',
    description: 'A twelve-week transformation built for busy operators. Strength, conditioning, nutrition, and the mindset to keep the work going long after the program ends. Not a meal plan. A standard.',
    icon: Target,
    color: 'from-[#e07800] to-orange-700',
    duration: '12 weeks',
    modules: [
      'Foundation — Movement assessment, baselines, and the first 14 days',
      'Strength — Progressive overload for real-world capability',
      'Conditioning — HIIT, kickboxing, and engine-building',
      'Nutrition — Protocols that survive travel, stress, and reality',
      'Recovery — Sleep, somatic work, and the unglamorous wins',
      'Identity — The version of you that this body belongs to',
    ],
    benefits: [
      'Visible body composition change',
      'Energy that holds across long output days',
      'A training and nutrition system that scales with your life',
      'A standard you no longer need to negotiate with',
    ],
    forWho: [
      'Entrepreneurs and executives who want results without losing the rest of their lives',
      'Men and women coming out of a season of drift',
      'Veterans and athletes ready to rebuild',
    ],
  },
  'boundaries-for-leaders': {
    title: 'Boundaries for Leaders',
    subtitle: 'Strong Lines, Stronger Relationships',
    description: 'A five-week course on the boundary work most leadership programs skip. Where the freeze comes from, why your "yes" is often a trauma response, and how to draw a clean line that other adults actually respect.',
    icon: BookOpen,
    color: 'from-[#0D9488] to-teal-700',
    duration: '5 weeks',
    modules: [
      'The Inner Map — Where your patterns come from',
      'The Body\'s Yes and No — Somatic boundary work',
      'Scripts and Language — Direct, kind, repeatable',
      'Leadership Application — Boundaries with team, peers, and customers',
      'Family and Home — The hardest room, often the most important',
    ],
    benefits: [
      'A cleaner default of "yes" and "no"',
      'Fewer simmering resentments at work',
      'Healthier teams and meetings',
      'A nervous system that stops collapsing under pressure',
    ],
    forWho: [
      'Corporate executives leading teams',
      'Founders and CEOs',
      'Anyone who agrees in the room and resents it after',
    ],
  },
  '6-week-shred': {
    title: '6-Week Shred',
    subtitle: 'Compressed, High-Intensity Body Transformation',
    description: 'An intensive program for those ready to commit and ready to see the change. Six weeks of structured training, nutrition, and accountability — the version of the work you do when you mean it.',
    icon: Zap,
    color: 'from-[#e07800] to-orange-700',
    duration: '6 weeks',
    modules: [
      'Week 1 — Onboarding, assessment, and protocol setup',
      'Week 2-3 — Strength and conditioning ramp',
      'Week 4 — Nutrition tightening and recovery emphasis',
      'Week 5 — Peak output and mid-program reset',
      'Week 6 — Final push, reassessment, what\'s next',
    ],
    benefits: [
      'Visible body composition change in 6 weeks',
      'A daily structure that actually fits a working life',
      'A reset of habits that survives past the program',
    ],
    forWho: [
      'Men and Veterans ready to commit',
      'High-output operators who need a deadline',
      'Anyone tired of starting and stopping',
    ],
  },
  'healthy-habits': {
    title: 'Healthy Habits',
    subtitle: 'Quiet, Powerful, Repeatable',
    description: 'An eight-week course on the habits that actually change a life. Not 75 hard. Not extreme. The unglamorous, repeatable practices Krystalore uses with her private coaching clients to compound into transformation.',
    icon: Heart,
    color: 'from-[#34c5c5] to-teal-700',
    duration: '8 weeks',
    modules: [
      'The Habit Stack — Why willpower is the wrong lever',
      'Morning — The 34-Minute Mindset Protocol',
      'Movement — The minimum effective dose that actually compounds',
      'Nutrition — A simple, dependable default',
      'Sleep and Recovery — The performance lever almost no one trains',
      'Maintenance — What happens when life gets hard',
    ],
    benefits: [
      'Habits that survive a hard week, not just an easy one',
      'A morning routine you actually do',
      'Energy and clarity through the long days',
      'A maintenance plan, not a perfection plan',
    ],
    forWho: [
      'Entrepreneurs and couples building shared structure',
      'Anyone who has burned out on extreme programs',
      'High performers who want the quietly powerful version',
    ],
  },
  'identity-crisis': {
    title: 'Identity Does Not Have to Be a Crisis',
    subtitle: 'Navigating Transitions With Clarity',
    description: 'A six-week course for people in transition — founder to CEO, athlete to executive, military to civilian, mother to her next chapter. Identity-level work paired with practical strategy.',
    icon: Users,
    color: 'from-[#0D9488] to-teal-700',
    duration: '6 weeks',
    modules: [
      'The Map — Where you are, where you came from, what wants to be next',
      'The Cost of Staying — Honest accounting',
      'The Identity Rebuild — Values, story, and the new operating system',
      'The Outer Shifts — Relationships, calendar, money, and signal',
      'The Stabilization — Protecting the new version of you',
      'Integration — A 90-day plan into the next chapter',
    ],
    benefits: [
      'Clarity on who you are becoming, not just who you were',
      'A grounded plan for the outer changes',
      'Less freeze, less collapse, fewer mid-week panic spirals',
      'A real chapter break with a real next chapter',
    ],
    forWho: [
      'Veterans in transition',
      'Founders moving into CEO',
      'Athletes after the career',
      'Anyone whose old identity stopped fitting',
    ],
  },
  'rise-beyond-grief': {
    title: 'Rise Beyond Grief and Loss',
    subtitle: 'Healing on the Other Side of Hard',
    description: 'An eight-week course for those carrying loss — a person, a relationship, an identity, a future you thought you\'d have. Trauma-informed, somatic, and honest. Not a five-step framework. A real container for hard work.',
    icon: Heart,
    color: 'from-purple-600 to-purple-800',
    duration: '8 weeks',
    modules: [
      'The Honest Beginning — Where you actually are',
      'The Body in Grief — Why this is somatic, not just emotional',
      'The Story and the Stillness — Holding both',
      'Relationships in Grief — Who can hold this, who can\'t',
      'The Slow Return — Energy, joy, and the guilt of feeling alive again',
      'The Next Chapter — Built on, not in spite of, the loss',
    ],
    benefits: [
      'A nervous system that begins to settle',
      'Permission and language for the harder days',
      'Practical structures for relationships in grief',
      'A grounded sense of what is possible on the other side',
    ],
    forWho: [
      'Veterans and military families carrying loss',
      'Couples grieving together or apart',
      'Anyone in the messy middle of "after"',
    ],
  },
  'freedom-friday': {
    title: 'Freedom Friday',
    subtitle: 'Weekly Release & Reflection',
    description: 'A weekly live and on-demand container to close the week with intention. Reflection, celebration, and the quiet release work most ambitious people skip. Across a year, this is where the operating system upgrades.',
    icon: Star,
    color: 'from-[#34c5c5] to-teal-700',
    duration: 'Ongoing — 52 weeks',
    modules: [
      'The Friday Reflection — A five-question close to the week',
      'The Release Practice — Somatic and emotional',
      'The Celebration — The win you almost didn\'t notice',
      'The Weekend Intention — How you actually want to be',
      'Community share — Optional, generous, real',
    ],
    benefits: [
      'A weekly close that actually lands',
      'Less drag carrying into Monday',
      'A growing library of personal wins, not just to-dos',
      'A nervous system that gets a weekend',
    ],
    forWho: [
      'Entrepreneurs and operators who never really stop',
      'Men and Veterans building emotional fluency',
      'Anyone whose weekends used to start Sunday night',
    ],
  },
  'business-bootcamp': {
    title: 'Business Bootcamp',
    subtitle: 'Build, Launch, and Grow With a Real Operating System',
    description: 'A ten-week comprehensive program for entrepreneurs and aspiring owners. Not motivation theater. A real walk-through from idea to offer to launch to scale, paired with the inner work that keeps you from sabotaging it at the moment of execution.',
    icon: Target,
    color: 'from-[#0D9488] to-teal-700',
    duration: '10 weeks',
    modules: [
      'The Operator — Who you are becoming, and what that requires',
      'The Offer — Building something the market actually wants',
      'The Audience — Honest market research and positioning',
      'The Launch — Tactical, calm, repeatable',
      'Systems — Money, ops, and the boring layer that scales',
      'Sales — Conversations that move forward without performance',
      'Team — Hiring, delegating, and your first real org chart',
      'Scale — The next chapter, on purpose',
    ],
    benefits: [
      'A live, paying offer at the end',
      'A real operating system, not a notion board',
      'Less founder freeze, more clean execution',
      'A path from solo to scaled that doesn\'t cost you the rest of your life',
    ],
    forWho: [
      'Entrepreneurs and would-be entrepreneurs',
      'Solo operators ready to scale',
      'Career professionals planning a clean exit into ownership',
    ],
  },
}

function CourseJsonLd({ course, slug }: { course: Course; slug: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: { '@type': 'Organization', name: 'Crews Beyond Limits Consulting', url: 'https://krystalore.com' },
    instructor: { '@type': 'Person', name: 'Krystalore Crews' },
    url: `https://krystalore.com/courses/${slug}`,
    timeRequired: course.duration,
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses[params.slug]
  if (!course) notFound()

  const Icon = course.icon
  const mailto = buildMailto(course.title)

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
            <div className="flex items-center justify-center gap-4 mt-6 text-sm opacity-80 flex-wrap">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Self-paced</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4" /> By Krystalore Crews</span>
            </div>
            <div className="mt-8">
              <a
                href={mailto}
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-black px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-xl"
              >
                <Mail className="w-5 h-5" /> GET MORE INFO
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-12">{course.description}</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Modules</h2>
            <div className="space-y-3 mb-16">
              {course.modules.map((m, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#34c5c5] text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <span className="text-gray-700">{m}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Gain</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-16">
              {course.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{b}</span>
                </div>
              ))}
            </div>

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

        {/* GET MORE INFO CTA */}
        <section className="py-16 bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Interested in {course.title}?</h2>
            <p className="text-orange-50 text-lg mb-8 max-w-xl mx-auto">
              Send a quick note. Krystalore replies personally — usually the same day — and you can decide from there.
            </p>
            <a
              href={mailto}
              className="inline-flex items-center gap-2 bg-white text-[#e07800] font-black px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform shadow-xl"
            >
              <Mail className="w-5 h-5" /> GET MORE INFO
            </a>
            <p className="text-orange-100 text-xs mt-6">
              Opens your email with NAME, Number, and How can I help? prefilled.
            </p>
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
