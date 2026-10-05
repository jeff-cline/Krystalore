'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import FAQSection from '@/components/FAQSection'
import { CheckCircle, Target, Footprints, Users, Trophy, Calendar, Quote } from 'lucide-react'

// The Runner's Wall — moved from krystalorecrews.com/rungroup (Oct 2026).
// Content is Krystalore's own copy from that page; dated race promotions were left out.

const faqs = [
  { question: "What is the Runner's Wall?", answer: "The Runner's Wall is Krystalore Crews' virtual running program and group coaching community. You learn what your body needs, set your goals, and follow workout routines that build endurance, stamina, and speed, with the motivation, support, and accountability to crews beyond your running limits." },
  { question: 'Is it for beginners?', answer: "Yes. The program is great for beginners and first timers, and walkers and walk/runners are welcome too. As one member put it: it's scary, but with this community you won't be alone." },
  { question: 'What distances can I train for?', answer: 'Pick any distance: 5K, half marathon, or full marathon. You choose the race, and your plan is built around it.' },
  { question: 'How long is the program?', answer: 'You can join a 3, 4, 5, or 6 month program. There is a 3-month minimum commitment, and payments auto draft each month.' },
  { question: 'Is it virtual?', answer: 'Yes. Coaching, the group chat, and monthly Zoom meetings are virtual, so you can train with friends all over the world. Pre-race and post-race VIP celebrations are in person for the home race and virtual on Zoom for other races.' },
  { question: 'What is not included?', answer: 'Race registration and travel expenses are not included.' },
]

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: "The Runner's Wall — Virtual Running Group & Race Coaching",
        serviceType: 'Running coaching',
        provider: { '@type': 'Person', name: 'Krystalore Crews', url: 'https://krystalore.com/about' },
        areaServed: 'Worldwide (virtual)',
        description: 'A 3 to 6 month virtual running program for 5K, half, and full marathon goals, with a personal plan, nutrition tips, group accountability, and VIP race-day celebrations. Walkers welcome.',
        url: 'https://krystalore.com/rungroup',
        image: 'https://krystalore.com/images/rungroup/runners-wall-og.jpg',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://krystalore.com' },
          { '@type': 'ListItem', position: 2, name: 'Fitness', item: 'https://krystalore.com/fitness' },
          { '@type': 'ListItem', position: 3, name: "The Runner's Wall", item: 'https://krystalore.com/rungroup' },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const included = [
  '60 minute private goal setting call',
  'Nutrition tips to fuel your success as a runner or walker',
  'Dedicated running/walking plan to meet your busy schedule',
  'Workout tracker to track your progress in a done-for-you format',
  'Group chat for support and accountability',
  'Monthly Zoom meetings',
  'Pre-race VIP day with marathoner and 50 mile ultra finisher Krystalore Crews',
  'Post-race private VIP celebration with food, drinks, and fun',
]

const stories = [
  "It feels so good to be surrounded by others who want to run their first race too. It's scary, but with this community I know I won't be alone.",
  'Krystal is so inspiring! She is resilient and caring. She will meet you where you’re at and not beat you up. She will push you to believe in yourself.',
  "It's so cool to be able to do this with friends all over the world virtually! I feel so loved and supported as we've shared so much with each other being in this group!",
]

export default function RunGroupPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <Image
          src="/images/rungroup/runners-wall-crew.jpg"
          alt="Krystalore Crews and the Crews Beyond Limits running crew wearing their race medals"
          fill
          className="object-cover object-[50%_40%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <p className="text-[#34c5c5] font-bold tracking-widest uppercase text-sm mb-3">#CrewsBeyondLimits</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">The Runner&apos;s Wall</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">
            Group coaching and a training plan for your next race. Learn what your body needs, set your goals, and
            perform the workout routines that will increase your endurance, stamina, and speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Call to Join</a>
            <Link href="#plans" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">See the Plans</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Crews Beyond Your Running Limits</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            My virtual running program is designed to give you the motivation, support and accountability you need to
            crews beyond your running limits. Great for beginners and first timers!
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Let&apos;s pick a race and sign up today! (Yes, walkers and walk/runners, you&apos;re welcome here too.)
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-12 text-left">
            {[
              { icon: Target, title: 'Pick any distance', desc: '5K, half, or full marathon. Run, walk, or intervals.' },
              { icon: Calendar, title: '3 to 6 month programs', desc: 'Join a 3, 4, 5, or 6 month plan built around your race.' },
              { icon: Users, title: 'A crew behind you', desc: 'Train virtually with friends all over the world.' },
            ].map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6">
                <f.icon className="w-8 h-8 text-[#34c5c5] mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/rungroup/runners-wall-crew.jpg" alt="The Crews Beyond Limits running crew after their race" fill className="object-cover object-[50%_40%]" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
            <div className="space-y-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              VIP days are in person for the home race; for other races they happen virtually on Zoom.
            </p>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <figure key={s.slice(0, 20)} className="bg-gray-50 rounded-2xl p-6">
                <Quote className="w-7 h-7 text-[#34c5c5] mb-3" />
                <blockquote className="text-gray-700 leading-relaxed">{s}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Special VIP pre and post race party access, lifetime memories, and friends are all included.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: '3 Month VIP Package', icon: Footprints },
              { name: '4 Month VIP Package', icon: Trophy },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-2xl p-8 shadow-lg flex flex-col">
                <p.icon className="w-9 h-9 text-[#34c5c5] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-6">Your race, your distance, your plan, with the full crew and VIP race-day experience.</p>
                <a href="/book" className="mt-auto bg-[#34c5c5] text-white rounded-full px-6 py-3 font-bold text-center hover:scale-105 transition-transform">Select Plan</a>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-6">
            Longer 5 and 6 month programs are available too. 3-month minimum commitment; payments auto draft each month.
            Race registration and travel expenses are not included.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Runner's Wall FAQ" />

      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Pick Your Race</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">First timers, this is for you too. Run, walk, or intervals. Your crew is waiting.</p>
          <a href="/book" className="inline-block bg-white text-teal-700 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all">Book a Call to Join</a>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-50 text-sm">
            <Link href="/group-fitness" className="hover:text-white">Group Fitness</Link>
            <Link href="/fitness" className="hover:text-white">Beyond Limits</Link>
            <Link href="/quizzes/marathon-ready" className="hover:text-white">Marathon Ready Quiz</Link>
            <Link href="/million-dollar-body" className="hover:text-white">Million Dollar Body</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
