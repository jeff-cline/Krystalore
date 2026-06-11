'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
  ArrowRight, Check, Calendar, MapPin, Sparkles, Crown, Star,
  Brain, Dumbbell, Heart, Compass, Gift, Plus,
} from 'lucide-react'

const CHECKOUT = 'https://www.krystalorecrews.com/rise-and-thrive-checkout'

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Rise & Thrive — Premium Academy + Retreat Bundle',
    brand: { '@type': 'Brand', name: 'Krystalore Crews' },
    description:
      'Rise & Thrive is a premium transformation bundle: the 16-week Million Dollar Body Academy, a 7-day in-person retreat, and private mindset coaching — for women ready to make the next chapter the best chapter.',
    url: 'https://krystalore.com/rise-and-thrive',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

const included = [
  {
    tag: 'The Academy', dates: 'June 27 – October 19, 2026 · 16 weeks',
    icon: Brain, img: '/images/million-dollar-body/mdb-hero.png',
    title: 'Million Dollar Body Academy',
    desc: 'The 16-week core. Mindset, sustainable habits, fitness, and confidence — guided coaching, members portal, weekly group calls, and a built-in accountability partner.',
    points: ['6 training modules + workbooks', 'Weekly group coaching Q&A', '24/7 accountability partner', 'Private community + lifetime access'],
  },
  {
    tag: 'The Retreat', dates: 'October 21 – 27, 2026 · in person',
    icon: MapPin, img: '/images/retreat/retreat-01.jpg',
    title: 'The Rise & Thrive Retreat',
    desc: 'A 7-day immersive experience to integrate everything — rest, movement, sisterhood, and breakthrough in a setting designed for transformation.',
    points: ['7 days, fully immersive', 'Movement, somatic & mindset work', 'Luxury accommodations & meals', 'Sisterhood that lasts beyond the week'],
  },
  {
    tag: 'Private Coaching', dates: 'Throughout the program',
    icon: Compass, img: '/images/go9/coaching.jpg',
    title: 'Private Mindset Coaching',
    desc: 'One-on-one, body-centered Compassionate Inquiry coaching woven through your journey — for the deeper, personal work that group can’t reach.',
    points: ['1:1 somatic & mindset sessions', 'Personalized to your season', 'Nervous-system regulation', 'Identity, clarity & integration'],
  },
]

const credentials = [
  '22-Year Retired SMSgt, U.S. Air Force', 'Amazon Best-Selling Author',
  '28-Time Marathoner · 50-Mile Ultra Finisher', 'Cancer Survivor',
  'Certified Life & Somatic Coach', 'Executive & Wellness Coach',
]

export default function RiseAndThrivePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-14 md:pt-24 pb-16 md:pb-28 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-7">
                  <Sparkles className="w-3.5 h-3.5" /> Rise &amp; Thrive · Premium Bundle
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-gray-900 mb-7 leading-[1.06]">
                  What if the next chapter of your life gets to be the <span className="text-[#0D9488]">best</span> chapter of your life?
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-9 max-w-xl font-light">
                  A 16-week academy, a 7-day retreat, and private coaching — one premium experience designed to help you
                  rise to the next-level version of you that&apos;s already waiting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold text-lg px-9 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    Join Rise &amp; Thrive <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#bundle" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold text-lg px-9 py-4 rounded-2xl hover:bg-[#34c5c5] hover:text-white transition-colors">
                    See What's Included
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-7 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#e07800]" /> Academy: Jun 27 – Oct 19</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#e07800]" /> Retreat: Oct 21 – 27</span>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image src="/images/go6/tropical-porch-dress.jpg" alt="Krystalore Crews — Rise & Thrive premium transformation" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* WHY NOT YOU — pull quote */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="h-px w-16 bg-[#E8A849] mx-auto mb-10" />
            <p className="text-2xl md:text-4xl font-black text-gray-900 leading-[1.25] mb-8">
              It&apos;s time to rise to the occasion — and to the <span className="text-[#0D9488]">next-level version of you</span> that&apos;s waiting for you.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Why not you? It&apos;s your turn. You&apos;ve been pouring into everyone else — it&apos;s time to live happier,
              healthier, full of fun, flexibility, flow, and freedom.
            </p>
            <div className="h-px w-16 bg-[#E8A849] mx-auto mt-10" />
          </div>
        </section>

        {/* THE BUNDLE */}
        <section id="bundle" className="py-16 md:py-24 bg-[#F6F8FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">Everything inside</p>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">One bundle. A complete transformation.</h2>
              <p className="text-lg text-gray-600 font-light">Three signature experiences, designed to work together — mind, body, and the life you actually want.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-7">
              {included.map((c) => (
                <div key={c.title} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                  <div className="relative h-52">
                    <Image src={c.img} alt={c.title} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 33vw" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#0D9488] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                      <c.icon className="w-3.5 h-3.5" /> {c.tag}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-xs font-semibold text-[#e07800] uppercase tracking-wider mb-2">{c.dates}</p>
                    <h3 className="text-xl font-black text-gray-900 mb-3">{c.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">{c.desc}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                          <span className="text-[14px]">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAY IN FULL BONUSES */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white p-9 md:p-14 shadow-xl">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
                <Gift className="w-4 h-4" /> Pay-in-Full Bonuses
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Pay in full and unlock the full experience — free.</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-5">
                  <Dumbbell className="w-7 h-7 flex-shrink-0" />
                  <div><p className="font-bold text-lg">Fitness Included</p><p className="text-white/90 text-[15px]">Your full fitness programming — built in, at no extra cost.</p></div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-5">
                  <Sparkles className="w-7 h-7 flex-shrink-0" />
                  <div><p className="font-bold text-lg">3 Months All-Access — Free</p><p className="text-white/90 text-[15px]">Three months of all-access membership, completely complimentary.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TWO WAYS TO JOIN — Standard vs VIP */}
        <section className="py-16 md:py-24 bg-[#F4F1EC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">Choose your level</p>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900">Two ways to rise.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-7 items-stretch">
              {/* Standard */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col">
                <h3 className="text-2xl font-black text-gray-900">The Bundle</h3>
                <p className="text-gray-500 mt-1 mb-6">The complete Rise &amp; Thrive experience.</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Million Dollar Body Academy (16 weeks)', 'The Rise & Thrive Retreat (7 days)', 'Private Mindset Coaching', 'Pay-in-full bonuses: fitness + 3 months all-access'].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-700"><Check className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" /><span className="text-[15px]">{p}</span></li>
                  ))}
                </ul>
                <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] hover:bg-[#34c5c5] hover:text-white font-bold px-6 py-3.5 rounded-xl transition-colors">
                  Join the Bundle <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              {/* VIP */}
              <div className="bg-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col relative overflow-hidden">
                <span className="absolute top-6 right-6 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"><Crown className="w-3.5 h-3.5" /> VIP</span>
                <h3 className="text-2xl font-black text-white">The VIP Bundle</h3>
                <p className="text-gray-400 mt-1 mb-6">Everything in The Bundle — plus more.</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Everything in The Bundle', 'BONUS: Bootcamp included', 'Priority access & VIP touchpoints', 'The deepest level of support'].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-200"><Check className="w-5 h-5 text-[#E8A849] flex-shrink-0 mt-0.5" /><span className="text-[15px]">{p}</span></li>
                  ))}
                </ul>
                <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  Go VIP <Crown className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-8 inline-flex items-center gap-2 w-full justify-center">
              <Plus className="w-4 h-4 text-[#0D9488]" /> Add-ons at checkout: <b className="text-gray-700">Health Mastery</b> &amp; private upgrades — make it exactly yours.
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image src="/images/krystalore/beach-rainbow.png" alt="Krystalore Crews" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-3">Your guide</p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">Krystalore Crews</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-7 font-light">
                  She&apos;s lived the comebacks she coaches. Krystalore helps high-achieving women stop surviving and
                  start thriving — building strength, confidence, and a life that feels as good as it looks.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {credentials.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-gray-800"><Star className="w-4 h-4 text-[#E8A849] flex-shrink-0" /><span className="font-medium text-[14px]">{c}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-16 md:py-24 bg-[#F6F8FA]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center gap-1 mb-5 text-[#E8A849]">{'★★★★★'}</div>
            <p className="text-2xl md:text-3xl font-black text-gray-900 leading-snug mb-6">
              &ldquo;I came back energized, aligned, and finally living for me. This was the turning point.&rdquo;
            </p>
            <p className="text-sm font-bold text-[#0D9488] uppercase tracking-wider">— Rise &amp; Thrive Participant</p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-12 h-12 mx-auto mb-7 opacity-90" />
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">It gets to be this good — or even better.</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-light">This is your turn. Rise to the occasion, and meet the next-level version of you.</p>
            <a href={CHECKOUT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-[#e07800] font-black text-lg md:text-xl px-12 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              Join Rise &amp; Thrive <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-white/80 text-sm mt-5">Academy Jun 27 – Oct 19 · Retreat Oct 21 – 27</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
