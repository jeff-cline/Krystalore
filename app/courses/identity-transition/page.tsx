import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Check, ArrowLeft, Target, Heart, Star, Brain } from 'lucide-react'

export const metadata = {
  title: 'Identity & Transition Coaching — Krystalore Crews',
  description: 'Navigate identity transitions and career changes with confidence. For veterans, career changers, and anyone in reinvention. Coaching by Krystalore Crews.',
}

export default function IdentityTransitionPage() {
  return (
    <MainLayout>
      <Link href="/courses" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Courses
      </Link>

      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="relative h-72 sm:h-96">
          <Image src="/images/go9/coaching.jpg" alt="Identity and Transition Coaching with Krystalore Crews" fill className="object-cover object-top" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <Brain className="w-8 h-8 text-teal mb-2" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Identity & Transition Coaching</h1>
            <p className="text-white/80 max-w-lg">Navigate life&apos;s biggest transitions with clarity, confidence, and a coach who&apos;s been there.</p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">When Who You Were No Longer Fits Who You&apos;re Becoming</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Whether you&apos;re a veteran transitioning to civilian life, a leader stepping into a new role, or someone rebuilding after a major life change — identity transitions are disorienting. You know you&apos;re capable, but the gap between who you were and who you&apos;re becoming can feel overwhelming.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Krystalore knows this journey personally — as a veteran, military spouse, entrepreneur, and someone who has reinvented herself multiple times. This coaching program gives you the framework, tools, and support to navigate the messy middle with confidence.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who This Is For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Users, title: 'Veterans in Transition', desc: 'Moving from military to civilian life. Finding purpose, identity, and community after service.' },
              { icon: Target, title: 'Career Changers', desc: 'Pivoting industries, starting a business, or stepping into leadership for the first time.' },
              { icon: Heart, title: 'Life Rebuilders', desc: 'After divorce, loss, health crisis, or any major life event that changed everything.' },
              { icon: Star, title: 'Leaders Leveling Up', desc: 'The promotion came, the title changed — but inside you still feel like the old version.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <item.icon className="h-6 w-6 text-teal mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-teal/5 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What You&apos;ll Work On</h2>
          <ul className="space-y-3">
            {[
              'Redefining your identity beyond your title, rank, or role',
              'Building confidence in unfamiliar environments',
              'Processing grief over the life you\'re leaving behind',
              'Setting boundaries that protect the new version of you',
              'Creating a vision and action plan for your next chapter',
              'Connecting with a community of people in similar transitions',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/quizzes/veteran-transition" className="bg-white rounded-xl border border-gray-200 p-4 hover:border-teal/30 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Veteran Transition Quiz</h3>
              <p className="text-gray-500 text-xs">Assess where you are in your transition journey.</p>
            </Link>
            <Link href="/quizzes/self-awareness" className="bg-white rounded-xl border border-gray-200 p-4 hover:border-teal/30 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Self-Awareness Assessment</h3>
              <p className="text-gray-500 text-xs">Understand your strengths and growth areas.</p>
            </Link>
            <Link href="/just-breathe" className="bg-white rounded-xl border border-gray-200 p-4 hover:border-teal/30 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Just Breathe Meditations</h3>
              <p className="text-gray-500 text-xs">Free guided meditations for clarity and grounding.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Navigate Your Transition?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">Start with a free quiz or book a discovery call with Krystalore.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/health-mastery" className="bg-teal hover:bg-[#37a6a6] text-white font-bold py-3 px-8 rounded-xl transition-colors">
              Join Health Mastery
            </Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-8 rounded-xl transition-colors">
              Book a Discovery Call
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
