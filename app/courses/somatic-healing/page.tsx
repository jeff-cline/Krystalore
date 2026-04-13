import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Check, ArrowLeft, Wind, Flame, Star, Users } from 'lucide-react'

export const metadata = {
  title: 'Somatic Healing & Embodiment — Krystalore Crews',
  description: 'Release stored trauma through somatic practices. Reconnect body and mind through breathwork, movement, and guided healing with Krystalore Crews.',
}

export default function SomaticHealingPage() {
  return (
    <MainLayout>
      <Link href="/courses" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Courses
      </Link>

      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="relative h-72 sm:h-96">
          <Image src="/images/go9/meditation.webp" alt="Somatic Healing and Embodiment with Krystalore Crews" fill className="object-cover object-top" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <Heart className="w-8 h-8 text-purple-400 mb-2" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Somatic Healing & Embodiment</h1>
            <p className="text-white/80 max-w-lg">Release stored trauma. Reconnect body and mind. Transform from the inside out.</p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        {/* What is Somatic Healing */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Is Somatic Healing?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Your body keeps score. Stress, trauma, and unprocessed emotions don&apos;t just live in your mind — they get stored in your muscles, your posture, your breathing patterns, and your nervous system. Somatic healing works directly with the body to release what talk therapy alone can&apos;t reach.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Krystalore combines her background as a veteran, athlete, and certified coach with somatic practices including breathwork, movement therapy, body scanning, and guided release to help high-performing leaders reconnect with themselves and heal at the deepest level.
          </p>
        </section>

        {/* What You'll Learn */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Wind, title: 'Breathwork Practices', desc: 'Activate your parasympathetic nervous system and release stored tension through guided breathing.' },
              { icon: Flame, title: 'Movement Therapy', desc: 'Intentional movement patterns that unlock emotional blocks held in the body.' },
              { icon: Heart, title: 'Nervous System Regulation', desc: 'Learn to recognize and shift your stress response from fight-or-flight to rest-and-digest.' },
              { icon: Star, title: 'Guided Body Scanning', desc: 'Develop awareness of where you hold stress and learn to consciously release it.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <item.icon className="h-6 w-6 text-purple-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">This Is For You If...</h2>
          <ul className="space-y-3">
            {[
              'You carry stress in your body — tight shoulders, clenched jaw, chronic tension',
              'You\'ve tried talk therapy but feel like something deeper needs to shift',
              'You\'re a high performer who pushes through pain instead of processing it',
              'You\'re navigating a major life transition (career, relationship, identity)',
              'You want to reconnect with your body after years of disconnection',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTAs */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Your Healing Journey</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">Begin with the free Just Breathe meditation series, or join Health Mastery for the full somatic coaching experience.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/just-breathe" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              Start with Just Breathe (Free)
            </Link>
            <Link href="/health-mastery" className="bg-teal hover:bg-[#37a6a6] text-white font-bold py-3 px-8 rounded-xl transition-colors">
              Join Health Mastery
            </Link>
            <Link href="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-8 rounded-xl transition-colors">
              Book a Call
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
