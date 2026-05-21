'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
  Target,
  Compass,
  Shield,
  Brain,
  Heart,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Quote,
  Lock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

const CONSULT_SUBJECT = 'FREE PRIVATE CONSULTATION'
const CONSULT_BODY = `Hi Krystalore,

I'd like to book a free private consultation.

Name:
Phone Number:

Where should we start the conversation?

Thanks!`
const CONSULT_MAILTO = `mailto:krystalore@thecrewscoach.com?subject=${encodeURIComponent(
  CONSULT_SUBJECT
)}&body=${encodeURIComponent(CONSULT_BODY)}`

const BOOK_URL = '/book'

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Private Mindset & Business Coaching',
        provider: { '@type': 'Person', name: 'Krystalore Crews' },
        url: 'https://krystalore.com/privatemindset',
        description:
          'Private 1:1 mindset and business coaching with Krystalore Crews. Weekly 90-minute virtual sessions focused on awareness, focus, and accountability.',
        areaServed: 'Worldwide',
        serviceType: 'Coaching',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is private mindset coaching with Krystalore Crews?', acceptedAnswer: { '@type': 'Answer', text: 'Private mindset coaching is 1:1 confidential work with Krystalore Crews focused on capitalizing on your strengths, removing roadblocks, and building lasting frameworks for the next level you are stepping into. Sessions blend cognitive coaching, emotional intelligence work, and practical strategy.' } },
          { '@type': 'Question', name: 'How is mindset coaching different from therapy?', acceptedAnswer: { '@type': 'Answer', text: 'Therapy looks backward to heal what happened to you. Coaching looks forward to build what is next. They are complementary, not competing. Many of Krystalore\'s clients work with a therapist in parallel.' } },
          { '@type': 'Question', name: 'What does a free consultation include?', acceptedAnswer: { '@type': 'Answer', text: 'A 20-30 minute conversation about where you are, where you want to go, and whether private coaching is the right fit. No pressure, no pitch.' } },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const includesList = [
  { icon: Target, title: 'Goal Setting & Strategic Planning', desc: 'Clarify the goal underneath the goal. Build a plan that survives a Monday.' },
  { icon: Compass, title: 'Reflection & Improvement', desc: 'Structured weekly review so course-corrections are quiet and continuous, not dramatic.' },
  { icon: Sparkles, title: 'Weekly 90-Minute Virtual Sessions', desc: 'Long-form deep work over Zoom. Real time to think, feel, and decide — not just check in.' },
  { icon: Shield, title: 'Accountability & Support', desc: 'Between-session check-ins so the commitments you make actually leave the call.' },
  { icon: Heart, title: 'Emotional Intelligence Management', desc: 'Regulate the nervous system that makes the decisions. Lead the inner life, not just the outer one.' },
  { icon: Brain, title: 'Improved Communication Skills', desc: 'Cleaner asks, harder no\'s, and conversations that actually move things forward.' },
]

const pillars = [
  {
    name: 'Awareness',
    color: '#E8A849',
    desc: 'The discovery process. What actually fulfills you, what you keep avoiding, and the smallest move that would change the slope of your week.',
  },
  {
    name: 'Focus',
    color: '#34c5c5',
    desc: 'Emotional processing, stress navigation, and habit design around time, energy, and boundaries — so the right thing gets the best of you.',
  },
  {
    name: 'Accountability',
    color: '#e07800',
    desc: 'Ongoing support and growth guidance. Someone in the room who knows your context and will not let you outrun your own clarity.',
  },
]

const testimonials = [
  {
    quote: 'I love how you meet me where I\'m at — no judgment. You\'re the most patient, generous coach I\'ve worked with.',
    attribution: 'Private Coaching Client',
  },
  {
    quote: 'I am proud of finally investing in myself. What you bring out of me is what I\'ve been trying to find for years.',
    attribution: 'Private Coaching Client',
  },
  {
    quote: 'My mind, body, and spirit always fill to the top with joy and peace after our sessions.',
    attribution: 'Private Coaching Client',
  },
]

const forYou = [
  'You are successful on paper and still feel like something is missing.',
  'You are about to step into a level (role, business, relationship, identity) that the current version of you was not built for.',
  'You have tried coaching before and it didn\'t stick — and you suspect the issue was format, not effort.',
  'You want a confidential thought partner who will tell you the truth, not your team or your spouse.',
  'You are tired of strategy without nervous system — and somatic work without strategy.',
]

const faqs = [
  {
    q: 'What is private mindset coaching, exactly?',
    a: 'Private mindset coaching with Krystalore is 1:1 confidential work — typically weekly 90-minute Zoom sessions — focused on the inner operating system underneath your outer results. We work on the patterns of thinking, feeling, and behaving that are quietly producing your life. It is part strategy, part somatic regulation, part accountability, and part hard truth.',
  },
  {
    q: 'How is mindset coaching different from therapy?',
    a: 'Therapy looks backward to heal what happened to you. Coaching looks forward to build what is next. They are complementary, not competing. Many of Krystalore\'s clients work with a therapist in parallel. If during our work it becomes clear you need clinical support, she will say so plainly and help you find it.',
  },
  {
    q: 'How is this different from business coaching?',
    a: 'Most business coaches optimize for tactics. We optimize for the operator. You can have the best plan in the world and still self-sabotage at the moment of execution. Private coaching addresses the human behind the strategy, which is usually the bottleneck.',
  },
  {
    q: 'What kind of issues does this address?',
    a: 'Self-trust, decision fatigue, imposter feelings at a higher altitude, the freeze that shows up before big moves, identity transitions (founder → CEO, athlete → executive, military → civilian), relationship rupture and repair, boundaries with family and team, perfectionism, burnout, and the quiet question of "what do I actually want."',
  },
  {
    q: 'Will sessions feel more like personal growth or business strategy?',
    a: 'Both. The split shifts based on what you walk in with. Some weeks we map a launch, hire, or hard conversation. Other weeks we slow down and work with what is underneath the rush. You get to call the priority each time.',
  },
  {
    q: 'How long until I see results?',
    a: 'Most clients feel a perceivable shift inside the first three sessions — not because the world changed, but because the way you are meeting it did. Durable, structural change typically lands in the three-to-six-month window. Coaching is not a quick fix; it is a different operating system, installed deliberately.',
  },
  {
    q: 'What is expected of me between sessions?',
    a: 'A short reflection, an action commitment from the session, and your honesty if things slip. No homework theater. The work is whatever moves the needle for you — sometimes that is journaling, sometimes a hard conversation, sometimes rest.',
  },
  {
    q: 'How are sessions structured?',
    a: 'Weekly 90-minute virtual sessions over Zoom. We open with a check-in, choose the focus, work the focus deeply, and close with a clear commitment for the week. You\'ll get a brief recap and any follow-up resources by email.',
  },
  {
    q: 'Is everything confidential?',
    a: 'Absolutely. What you bring into coaching stays in coaching. Krystalore operates under professional coaching ethics. This is your room.',
  },
  {
    q: 'Who is this NOT a good fit for?',
    a: 'People looking for someone to make their decisions for them. People who need active clinical care for crisis or trauma (we will refer you to the right professional). People who want to feel busy and important without actually changing anything. Coaching only works when you are willing to be honest and to move.',
  },
  {
    q: 'What happens in the free consultation?',
    a: 'A 20-30 minute conversation. Krystalore asks where you are, where you want to go, and what has been in the way. You ask anything you need to. If it is a fit, she will tell you. If it is not, she will say that too — and where to look instead.',
  },
  {
    q: 'How do I get started?',
    a: 'Use the Free Consultation button below to email Krystalore directly, or book a call. There are no packages, no upsell sequences, and no pressure — just a conversation to see if the work fits.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-bold text-white text-base sm:text-lg">{q}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-[#E8A849] flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#E8A849] flex-shrink-0 mt-1" />
        )}
      </button>
      {open && <p className="text-gray-300 pb-5 leading-relaxed text-base">{a}</p>}
    </div>
  )
}

function CTAButtons({ label = 'on' }: { label?: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-cta-row={label}>
      <a
        href={CONSULT_MAILTO}
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-xl shadow-black/30"
      >
        <Mail className="w-5 h-5" /> FREE CONSULTATION
      </a>
      <Link
        href={BOOK_URL}
        className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-black text-lg px-10 py-4 rounded-full transition-colors shadow-xl shadow-black/30"
      >
        <Phone className="w-5 h-5" /> BOOK A CALL
      </Link>
    </div>
  )
}

export default function PrivateMindsetPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero — premium dark with gold accent */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center bg-[#0a0a0a]">
        <Image
          src="/images/private-mindset/mindset-hero.jpeg"
          alt="Krystalore Crews private mindset coaching — 1:1 sessions for high-achievers"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-transparent z-[1]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28 max-w-5xl">
          <div className="flex items-center gap-2 mb-5">
            <span className="h-px w-12 bg-[#E8A849]" />
            <p className="text-[#E8A849] font-bold tracking-[0.3em] uppercase text-xs">
              By Application • 1:1 Private Coaching
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-[1.04]">
            Crews Beyond Limits<br />
            <span className="text-[#E8A849]">Private Coaching.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl font-light">
            Mindset and business coaching for high-achievers who are done outrunning their own clarity.
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl">
            Capitalize on your strengths. Remove the roadblocks. Build the habits and frameworks that hold the level you are stepping into.
          </p>
          <CTAButtons label="hero" />
          <p className="text-xs text-gray-500 mt-6 tracking-wider">
            No packages. No pressure. Free consultation by email — same day reply.
          </p>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-[#0a0a0a] py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: '90 min', label: 'Weekly Sessions' },
            { stat: '1:1', label: 'Private & Confidential' },
            { stat: 'Zoom', label: 'Anywhere in the World' },
            { stat: 'Free', label: 'Initial Consultation' },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl md:text-3xl font-black text-[#E8A849]">{item.stat}</div>
              <div className="text-xs md:text-sm text-gray-400 tracking-widest uppercase mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Opening pitch */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-4">The Premise</p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            You don&apos;t need another strategy.<br />
            <span className="text-[#34c5c5]">You need a thought partner.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
            You are smart, capable, and over-resourced on information. What has been missing is a room where you can think clearly with someone whose only job is your forward motion — not your team&apos;s, not your family&apos;s, not the algorithm&apos;s.
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Private coaching is that room.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#F6F8FA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#34c5c5] font-bold tracking-widest uppercase text-sm mb-3">What&apos;s Included</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">The Container</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to do this work seriously, and nothing you don&apos;t.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {includesList.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:border-[#E8A849]/30 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8A849]/15 to-[#e07800]/15 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#e07800]" />
                </div>
                <h3 className="font-black text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">The Method</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">What You Will Accomplish</h2>
            <p className="text-gray-600 text-lg">Three pillars. One operating system.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.name}
                className="relative bg-[#0a0a0a] text-white rounded-2xl p-8 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: p.color }}
                />
                <div className="text-6xl font-black mb-4" style={{ color: p.color }}>
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-black mb-3">{p.name}</h3>
                <p className="text-gray-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#34c5c5] to-[#006767] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#E8A849] font-bold tracking-widest uppercase text-sm mb-3">In Their Words</p>
            <h2 className="text-3xl md:text-4xl font-black mb-3">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur rounded-2xl p-7 border border-white/15"
              >
                <Quote className="w-8 h-8 text-[#E8A849] mb-4" />
                <p className="text-lg leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm tracking-wider uppercase text-teal-100">— {t.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-[#F6F8FA]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#34c5c5] font-bold tracking-widest uppercase text-sm mb-3">Honest Fit</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Who This Is For</h2>
            <p className="text-gray-600 text-lg">If any of these land, this room was probably built for you.</p>
          </div>
          <div className="space-y-3">
            {forYou.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#E8A849]/40 hover:shadow-md transition-all"
              >
                <CheckCircle className="w-6 h-6 text-[#e07800] flex-shrink-0 mt-1" />
                <p className="text-gray-800 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Krystalore — sized for this offer */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/private-mindset/mindset-coaching-1.png"
                alt="Krystalore Crews — private coach for executives and high-achievers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">Your Coach</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
                Krystalore Crews
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  22-year USAF veteran. Former NFL cheerleader. 26-time marathoner. Cancer survivor. CEO of Crews Beyond Limits Consulting.
                </p>
                <p>
                  Private coaching is the work Krystalore does behind closed doors with executives, founders, athletes, and women in identity transition. It is not the bootcamp side of her practice and it is not the retreat side. It is the room.
                </p>
                <p className="font-medium text-gray-900">
                  &ldquo;I meet people where they actually are, then we move.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — dark, premium */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#E8A849] font-bold tracking-widest uppercase text-sm mb-3">Frequently Asked</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-3">Questions Worth Answering</h2>
            <p className="text-gray-400 text-lg">
              The same questions clients ask before they start. Honest answers.
            </p>
          </div>
          <div className="bg-white/[0.03] rounded-2xl border border-white/10 px-6 sm:px-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/private-mindset/mindset-hero.jpeg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Lock className="w-10 h-10 text-[#E8A849] mx-auto mb-5" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
            One conversation is all it takes to know.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Send a quick note. Krystalore replies personally — usually the same day — and you decide from there.
          </p>
          <CTAButtons label="final" />
          <p className="text-xs text-gray-500 mt-8 tracking-wider">
            krystalore@thecrewscoach.com — direct line.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
