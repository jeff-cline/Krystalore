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
  ChevronDown,
  ChevronUp,
  Leaf,
} from 'lucide-react'

const CONSULT_SUBJECT = 'COMPASSIONATE INQUIRY — PRIVATE CONSULTATION'
const CONSULT_BODY = `Hi Krystalore,

I'd like to book a free private consultation about Compassionate Inquiry somatic coaching.

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
        name: 'Compassionate Inquiry Somatic Coaching with Krystalore Crews',
        provider: { '@type': 'Person', name: 'Krystalore Crews' },
        url: 'https://krystalore.com/privatemindset',
        description:
          'Private 1:1 Compassionate Inquiry somatic coaching with Krystalore Crews. Trauma-informed, body-centered, and built for high-achievers ready for honest, integrated work.',
        areaServed: 'Worldwide',
        serviceType: 'Coaching',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is Compassionate Inquiry?', acceptedAnswer: { '@type': 'Answer', text: 'Compassionate Inquiry is a psychotherapeutic and coaching method developed by Dr. Gabor Maté that helps people uncover the unconscious dynamics — beliefs, emotional patterns, implicit memories, and body states — that quietly shape their lives, so they can liberate themselves from them.' } },
          { '@type': 'Question', name: 'How is this different from talk therapy?', acceptedAnswer: { '@type': 'Answer', text: 'Talk therapy works primarily with story and cognition. Compassionate Inquiry works with the present-moment experience — what is actually happening in the body, the breath, the silence, and the words. It is trauma-informed and somatic, which is why it reaches material talk alone often cannot.' } },
          { '@type': 'Question', name: 'How is Krystalore trained?', acceptedAnswer: { '@type': 'Answer', text: 'Krystalore is trained in Compassionate Inquiry — a year-long, 240-hour graduate-level program founded by Dr. Gabor Maté. She integrates it with somatic coaching, executive coaching, and her own lived experience as a 22-year USAF Veteran and cancer survivor.' } },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const pillars = [
  {
    name: 'Presence',
    color: '#0D9488',
    icon: Leaf,
    desc: 'The work begins where you actually are — not where the strategy says you should be. We slow down enough to hear what your body is already telling you.',
  },
  {
    name: 'Inquiry',
    color: '#34c5c5',
    icon: Brain,
    desc: 'Gentle, honest questions that unveil what lies beneath the appearance you carry into the world. The unconscious dynamics running the show become conscious — and choosable.',
  },
  {
    name: 'Integration',
    color: '#e07800',
    icon: Sparkles,
    desc: 'Insight without integration is just a feeling. We translate clarity into a regulated nervous system, repeatable practices, and the next clean move in your life and leadership.',
  },
]

const includesList = [
  { icon: Target, title: 'Weekly 90-Minute Sessions', desc: 'Long-form deep work over Zoom. Real time to think, feel, decide — not check in.' },
  { icon: Compass, title: 'Strategic & Somatic Pairing', desc: 'Strategy without nervous system fails at execution. Somatic without strategy stays inside. We do both.' },
  { icon: Sparkles, title: 'Reflection Practices', desc: 'Structured weekly reflection so course-corrections are quiet and continuous, not dramatic.' },
  { icon: Shield, title: 'Between-Session Support', desc: 'Brief check-ins so the commitments you make in session actually leave the call.' },
  { icon: Heart, title: 'Nervous System Regulation', desc: 'You lead the inner life that makes the outer decisions. The body is the operating layer.' },
  { icon: Brain, title: 'Communication & Boundaries', desc: 'Cleaner asks, harder no\'s, and conversations that actually move things forward.' },
]

const ciPrinciples = [
  {
    title: 'Authenticity, not performance',
    desc: 'The method centers what Dr. Gabor Maté calls "authenticity\'s only dictate" — that you, not externally imposed expectations, be the true author and authority on your own life.',
  },
  {
    title: 'The body keeps the score',
    desc: 'Compassionate Inquiry treats the body as a co-equal source of intelligence with the mind. What words conceal, breath, posture, and sensation will often reveal.',
  },
  {
    title: 'Beneath the surface',
    desc: 'The method works with five layers simultaneously: level of consciousness, mental climate, hidden assumptions, implicit memories, and body states — the "real message" beneath the words.',
  },
  {
    title: 'Compassion as method',
    desc: 'Not as a soft adjective. As a precise practice — the kind of warm, unflinching presence in which the protective patterns you built (and that worked, until they didn\'t) feel safe enough to soften.',
  },
  {
    title: 'Trauma-informed',
    desc: 'Rooted in modern trauma science. Pace, consent, and titration are built into the work so depth doesn\'t become overwhelm. Honors both the wisdom and the cost of the survival strategies you carry.',
  },
  {
    title: 'Liberation, not just insight',
    desc: 'The goal isn\'t naming the pattern. It\'s seeing it clearly enough that you no longer have to be run by it. The unconscious becomes conscious — and choosable.',
  },
]

const forYou = [
  'You are successful on paper and still feel like something is missing.',
  'You are about to step into a level — role, business, relationship, identity — the current version of you wasn\'t built for.',
  'You have tried coaching before and it didn\'t stick — and you suspect the issue was format, not effort.',
  'You want a confidential thought partner who will tell you the truth, not your team or your spouse.',
  'You\'re tired of strategy without nervous system — and somatic work without strategy.',
  'You\'re ready for honest work that respects both the body and the brain.',
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

const faqs = [
  {
    q: 'What is Compassionate Inquiry, exactly?',
    a: 'Compassionate Inquiry is a psychotherapeutic and coaching method developed by Dr. Gabor Maté. It is delivered through a 240-hour, year-long graduate-level training. The method "reveals what lies beneath the appearance we present to the world" — working with consciousness, mental climate, hidden assumptions, implicit memories, and body states so the unconscious dynamics that run your life become visible and choosable.',
  },
  {
    q: 'How is this different from talk therapy?',
    a: 'Talk therapy looks backward at story to heal what happened to you. Coaching looks forward to build what is next. Compassionate Inquiry works in the present — with what is actually moving through your body, breath, and language right now. It is somatic and trauma-informed, which is why it reaches what talk alone often cannot. Many clients work with a therapist in parallel; the modalities complement, not replace, each other.',
  },
  {
    q: 'How is this different from business coaching?',
    a: 'Most business coaches optimize for tactics. We optimize for the operator. You can have the best plan in the world and still self-sabotage at the moment of execution. Compassionate Inquiry-informed coaching addresses the human behind the strategy — usually the bottleneck.',
  },
  {
    q: 'What kind of issues does this address?',
    a: 'Self-trust, decision fatigue, imposter feelings at a higher altitude, the freeze that shows up before big moves, identity transitions (founder → CEO, athlete → executive, military → civilian), relationship rupture and repair, boundaries with family and team, perfectionism, burnout, grief, and the quiet question of "what do I actually want."',
  },
  {
    q: 'What does a session actually feel like?',
    a: 'Slower than you expect. We work with what is present — a feeling, a sentence you can\'t finish, a place in the body that just got tight. Curiosity, not interrogation. You stay in the driver\'s seat throughout. By the end, you usually leave with both an insight and a clean next move.',
  },
  {
    q: 'Will sessions feel more like personal growth or business strategy?',
    a: 'Both. The split shifts based on what you walk in with. Some weeks we map a launch, a hire, or a hard conversation. Other weeks we slow down and work with what is underneath the rush. You get to call the priority each time.',
  },
  {
    q: 'How long until I see results?',
    a: 'Most clients feel a perceivable shift inside the first three sessions — not because the world changed, but because the way you are meeting it did. Durable, structural change typically lands in the three-to-six-month window. Coaching is not a quick fix; it is a different operating system, installed deliberately.',
  },
  {
    q: 'What is expected of me between sessions?',
    a: 'A short reflection, an action commitment from the session, and your honesty if things slip. No homework theater. The work is whatever moves the needle for you — sometimes journaling, sometimes a hard conversation, sometimes rest.',
  },
  {
    q: 'How are sessions structured?',
    a: 'Weekly 90-minute virtual sessions over Zoom. We open with a check-in, choose the focus, work it deeply, and close with a clear commitment for the week. You\'ll get a brief recap and any follow-up resources by email.',
  },
  {
    q: 'Is everything confidential?',
    a: 'Absolutely. What you bring into coaching stays in coaching. Krystalore operates under professional coaching ethics. This is your room.',
  },
  {
    q: 'Who is this NOT a good fit for?',
    a: 'People looking for someone to make their decisions for them. People who need active clinical care for crisis or acute trauma (we will refer you to the right professional). People who want to feel busy and important without actually changing anything. The work only works when you are willing to be honest and to move.',
  },
  {
    q: 'How is Krystalore trained in Compassionate Inquiry?',
    a: 'Krystalore completed the 240-hour, year-long Compassionate Inquiry training founded by Dr. Gabor Maté. She integrates it with somatic coaching, executive coaching, and her lived experience as a 22-year USAF Veteran, NFL cheerleader, 26-time marathoner, and cancer survivor. She also continues her education through advanced CI training and supervision.',
  },
  {
    q: 'What happens in the free consultation?',
    a: 'A 20-30 minute conversation. Krystalore asks where you are, where you want to go, and what has been in the way. You ask anything you need to. If it is a fit, she will tell you. If it is not, she will say that too — and where to look instead.',
  },
  {
    q: 'How do I get started?',
    a: 'Use the Free Consultation button to email Krystalore directly, or book a call. No packages, no upsell sequences, no pressure — just a conversation to see if the work fits.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-bold text-gray-900 text-base sm:text-lg">{q}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-[#e07800] flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#e07800] flex-shrink-0 mt-1" />
        )}
      </button>
      {open && <p className="text-gray-700 pb-5 leading-relaxed text-base">{a}</p>}
    </div>
  )
}

function CTAButtons({ label = 'on' }: { label?: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-cta-row={label}>
      <a
        href={CONSULT_MAILTO}
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
      >
        <Mail className="w-5 h-5" /> FREE CONSULTATION
      </a>
      <Link
        href={BOOK_URL}
        className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#0D9488] text-white font-black text-lg px-10 py-4 rounded-full transition-colors shadow-lg"
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

      {/* Hero — light, photo-led, no dark mode */}
      <section className="relative bg-gradient-to-b from-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#34c5c5]/10 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <Leaf className="w-3.5 h-3.5" /> Compassionate Inquiry · 1:1 Private Coaching
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-[1.05]">
                Compassionate Inquiry <span className="text-[#0D9488]">Somatic Coaching.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-xl leading-relaxed">
                Honest, body-centered private coaching for high-achievers ready to stop outrunning their own clarity.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl">
                A method developed by Dr. Gabor Maté — integrated with Krystalore&apos;s lived experience and somatic coaching practice. Built for the people who are good on paper and ready for real.
              </p>
              <CTAButtons label="hero" />
              <p className="text-xs text-gray-500 mt-6 tracking-wider">
                No packages. No pressure. Free consultation by email — same-day reply.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/go6/tropical-porch-dress.jpg"
                alt="Krystalore Crews — Compassionate Inquiry somatic coaching"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-white py-8 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: '90 min', label: 'Weekly Sessions' },
            { stat: '1:1', label: 'Private & Confidential' },
            { stat: 'Zoom', label: 'Anywhere in the World' },
            { stat: 'Free', label: 'Initial Consultation' },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl md:text-3xl font-black text-[#e07800]">{item.stat}</div>
              <div className="text-xs md:text-sm text-gray-500 tracking-widest uppercase mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What is Compassionate Inquiry */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/go9/speaking-headshot.jpg"
                alt="Krystalore Crews in session — body-centered coaching"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">What Is Compassionate Inquiry</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
                The unconscious dynamics that run your life — finally made visible.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  Compassionate Inquiry is a psychotherapeutic and coaching method developed by Dr. Gabor Maté. It is delivered through a 240-hour graduate-level training — the same training Krystalore completed.
                </p>
                <p>
                  The method &ldquo;reveals what lies beneath the appearance we present to the world.&rdquo; In a session, we work simultaneously with consciousness, mental climate, hidden assumptions, implicit memories, and body states — the real message that words both express and conceal.
                </p>
                <p>
                  The result is not just insight. It is the kind of clarity that becomes choice — where the patterns you couldn&apos;t see suddenly become the ones you no longer have to be run by.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-[#F6F8FA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">The Method, Simply</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Presence. Inquiry. Integration.</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Three movements. One coherent practice.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.name}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: p.color }} />
                <p.icon className="w-9 h-9 mb-4" style={{ color: p.color }} />
                <div className="text-sm font-black tracking-widest uppercase mb-2" style={{ color: p.color }}>
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{p.name}</h3>
                <p className="text-gray-700 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core principles of CI */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Core Principles</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">How the Work Actually Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Six principles from Compassionate Inquiry that shape every session.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ciPrinciples.map((p) => (
              <div key={p.title} className="bg-[#F6F8FA] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-black text-gray-900 mb-2 text-lg">{p.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#F6F8FA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#34c5c5] font-bold tracking-widest uppercase text-sm mb-3">What&apos;s Included</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">The Container</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to do this work seriously — and nothing you don&apos;t.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {includesList.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:border-[#e07800]/30 transition-all"
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

      {/* Photo gallery — Krystalore in context */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">In Practice</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">The Work, in Real Life</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Sessions, retreats, and community — coaching that respects the whole life it&apos;s built inside of.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/go6/spa-relaxation.jpg', alt: 'Krystalore Crews in private coaching session' },
              { src: '/images/go6/floor-journaling-wide.jpg', alt: 'Krystalore Crews leading a session' },
              { src: '/images/go9/coaching.jpg', alt: 'Krystalore Crews — somatic coaching practice' },
              { src: '/images/go6/tropical-porch-2.jpg', alt: 'Krystalore Crews — coaching portrait' },
              { src: '/images/retreat/retreat-group-03.jpg', alt: 'Krystalore Crews — retreat leadership' },
              { src: '/images/go6/beach-cocktails.jpg', alt: 'Krystalore Crews in retreat setting' },
              { src: '/images/go9/community-hands.jpg', alt: 'Krystalore Crews — group work' },
              { src: '/images/go6/wny-heroes-speaking.jpg', alt: 'Krystalore Crews speaking' },
            ].map((img, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Program Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">More Private Options</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Choose the private path that fits your season.</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore private coaching options for fitness, somatic work, mindset, business, Veteran transition, and custom packages.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { title: 'Fitness Coaching', href: '/private', image: '/images/go9/fitness-outdoor.jpg' },
              { title: 'Somatic Coaching', href: '/privatemindset', image: '/images/go9/meditation.webp' },
              { title: 'Mindset Coaching', href: '/private', image: '/images/go9/coaching.jpg' },
              { title: 'Business Coaching', href: '/private', image: '/images/go9/keynote.jpg' },
              { title: 'Veteran Coaching', href: '/veteran-coaching', image: '/images/go9/veteran.jpg' },
              { title: 'Custom Packages', href: '/private', image: '/images/go6/tropical-porch-dress.jpg' },
            ].map((program) => (
              <Link key={program.title} href={program.href} className="group bg-[#F6F8FA] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="relative aspect-[16/10]">
                  <Image src={program.image} alt={program.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-black text-gray-900">{program.title}</h3>
                  <ArrowRight className="w-5 h-5 text-[#0D9488]" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/private" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
              View Private Options <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials — light */}
      <section className="py-20 bg-gradient-to-br from-[#34c5c5]/10 via-white to-[#E8A849]/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">In Their Words</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
              >
                <Quote className="w-8 h-8 text-[#e07800] mb-4" />
                <p className="text-lg leading-relaxed mb-5 italic text-gray-800">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm tracking-wider uppercase text-[#0D9488] font-bold">— {t.attribution}</p>
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
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#e07800]/40 hover:shadow-md transition-all"
              >
                <CheckCircle className="w-6 h-6 text-[#0D9488] flex-shrink-0 mt-1" />
                <p className="text-gray-800 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Krystalore */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/go9/speaking-headshot.jpg"
                alt="Krystalore Crews — private coach for executives and high-achievers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="md:col-span-3">
              <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">Your Coach</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
                Krystalore Crews
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  22-year USAF Veteran. Former NFL cheerleader. 26-time marathoner. Cancer survivor. CEO of Crews Beyond Limits Consulting. Trained in Compassionate Inquiry through the 240-hour program founded by Dr. Gabor Maté.
                </p>
                <p>
                  Compassionate Inquiry somatic coaching is the work Krystalore does behind closed doors with executives, founders, athletes, and women in identity transition. It is not the bootcamp side of her practice and it is not the retreat side. It is the room.
                </p>
                <p className="font-medium text-gray-900">
                  &ldquo;I meet people where they actually are, then we move.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — light */}
      <section className="py-24 bg-[#F6F8FA]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e07800] font-bold tracking-widest uppercase text-sm mb-3">Frequently Asked</p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">Questions Worth Answering</h2>
            <p className="text-gray-600 text-lg">
              The same questions clients ask before they start. Honest answers.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 px-6 sm:px-8 shadow-sm">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — light, warm */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#E8A849] via-[#e07800] to-[#0D9488] text-white">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Leaf className="w-10 h-10 text-white mx-auto mb-5 opacity-90" />
          <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
            One conversation is all it takes to know.
          </h2>
          <p className="text-lg md:text-xl text-orange-50 mb-10 max-w-2xl mx-auto">
            Send a quick note. Krystalore replies personally — usually the same day — and you decide from there.
          </p>
          <CTAButtons label="final" />
          <p className="text-xs text-orange-100 mt-8 tracking-wider">
            krystalore@thecrewscoach.com — direct line.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
