'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import FAQSection from '@/components/FAQSection'
import { Sparkles, Heart, Shield, Zap, Star, CheckCircle, Clock, Crown, Users, Target, Award, Flame, ArrowRight } from 'lucide-react'
import { useState } from 'react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Course', name: 'Bombshell Bootcamp: 5 Day Freedom Formula', provider: { '@type': 'Person', name: 'Krystalore Crews' }, description: 'A 5-day mind-body reset to reclaim your peace, strengthen your boundaries, and rebuild your confidence. Activate the Freedom Formula: Core, Confidence, Consistency, Community, Celebration.', url: 'https://krystalore.com/bombshell-bootcamp', numberOfCredits: '5', hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', duration: 'P5D' } },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is Bombshell Bootcamp?', acceptedAnswer: { '@type': 'Answer', text: 'Bombshell Bootcamp is a 5-day mind-body reset and confidence activation course by Krystalore Crews. It follows the Freedom Formula framework -- Core, Confidence, Consistency, Community, Celebration -- to help high-achieving women reclaim peace, strengthen boundaries, and rebuild confidence.' } },
      { '@type': 'Question', name: 'Who is Bombshell Bootcamp for?', acceptedAnswer: { '@type': 'Answer', text: 'High performers, perfectionists, people-pleasers, heart-centered leaders, and legacy builders who refuse to sacrifice their health or joy for the next milestone. Any woman done grinding in silence who craves balanced momentum.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const freedomFormulaDays = [
  { day: 'Day 1', title: 'Lead from Your CORE', formula: 'CORE', desc: 'Define your CORE values so decisions become simple -- and stress declines. Strip away the noise and reconnect with what truly drives you.', icon: Target, color: '#0D9488' },
  { day: 'Day 2', title: 'Embody & Radiate CONFIDENCE', formula: 'CONFIDENCE', desc: 'Trigger instant CONFIDENCE with a 34-minute, no-equipment workout you can repeat anywhere. When you feel powerful in your body, confidence flows into every area of your life.', icon: Flame, color: '#E8A849' },
  { day: 'Day 3', title: 'Develop a System & Rhythm of CONSISTENCY', formula: 'CONSISTENCY', desc: 'Build CONSISTENCY around sleep, hydration, and movement using our 1-page tracker. Create the daily rhythm that sustains unstoppable momentum.', icon: Shield, color: '#0D9488' },
  { day: 'Day 4', title: 'Depth Over Surface COMMUNITY', formula: 'COMMUNITY', desc: 'Cultivate COMMUNITY that goes beyond business cards to real accountability. Build connections that actually fuel your growth and hold you to your highest standard.', icon: Users, color: '#E8A849' },
  { day: 'Day 5', title: 'Anchor Your CELEBRATIONS', formula: 'CELEBRATION', desc: 'Anchor CELEBRATION rituals that lock in progress and fuel the next milestone. Learn to honor your wins so momentum never fades.', icon: Star, color: '#0D9488' },
]

const whoItsFor = [
  { title: 'High Performers', desc: 'Powering multimillion-dollar goals who refuse to sacrifice their health or joy for the next milestone.' },
  { title: 'Perfectionists', desc: 'Whose exacting standards impress clients but deplete their own energy.' },
  { title: 'People-Pleasers', desc: 'Juggling every request -- even at 3 a.m. -- and finally drawing the line.' },
  { title: 'Heart-Centered Leaders', desc: 'Determined to serve boldly without burning out.' },
  { title: 'Legacy Builders', desc: 'Ready to be seen, heard, and remembered for impact that outlives them.' },
]

const faqs = [
  { question: 'What is Bombshell Bootcamp?', answer: 'Bombshell Bootcamp is a 5-day mind-body reset and confidence activation course by Krystalore Crews. It follows the Freedom Formula framework -- Core, Confidence, Consistency, Community, Celebration -- designed to help high-achieving women reclaim peace, strengthen boundaries, and rebuild confidence before life gets chaotic.' },
  { question: 'Who is Bombshell Bootcamp for?', answer: 'High performers, perfectionists, people-pleasers, heart-centered leaders, and legacy builders who refuse to sacrifice their health or joy for the next milestone. This bootcamp is for the woman who is done grinding in silence and craves a framework that turns hustle into vibrant, balanced momentum.' },
  { question: 'How long is the program?', answer: 'Bombshell Bootcamp is a 5-day intensive. Sessions run 12:00-12:30 PM EST daily with replays available so you never miss a day. Each day follows one pillar of the Freedom Formula.' },
  { question: 'Is Bombshell Bootcamp virtual?', answer: 'Yes. The program is delivered virtually via Zoom so you can participate from anywhere in the world. Daily sessions are 30 minutes with replays available.' },
  { question: 'What is the Freedom Formula?', answer: 'The Freedom Formula is Krystalore\'s signature 5-pillar framework: Core, Confidence, Consistency, Community, and Celebration. Each pillar is explored in depth over one day of the bootcamp, giving you a complete system for leading with freedom, flow, and fun.' },
  { question: 'What is the VIP experience?', answer: 'VIP ticket holders get an extra special Zoom virtual dinner party with Krystalore after each session -- laser coaching, Q&A, networking, and a chance to win a Crews Beyond Limits gift card that can be used on any program including retreats.' },
  { question: 'Do I need fitness experience?', answer: 'Not at all. While Day 2 includes a 34-minute no-equipment workout, Bombshell Bootcamp is primarily about mindset, confidence, and life strategy. All movement components include modifications for every level.' },
  { question: 'What results can I expect?', answer: 'Participants report dramatic shifts in self-confidence, clearer decision-making from defined core values, sustainable daily routines, deeper community connections, and the courage to celebrate their wins. Many say it\'s the reset that changed everything.' },
]

function BootcampSignupForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, source: 'krystalore.com/bombshell-bootcamp', leadType: 'bombshell-bootcamp' }),
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch { setStatus('error') }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-[#0D9488] mx-auto mb-3" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re In!</h3>
        <p className="text-gray-600">Check your email for details. Your glow up starts now.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none" placeholder="Your Name" />
      <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none" placeholder="Email Address" />
      <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none" placeholder="Phone (optional)" />
      <button type="submit" disabled={status === 'sending'} className="w-full bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white rounded-xl px-8 py-4 font-bold hover:scale-[1.02] transition-transform disabled:opacity-50 text-lg">
        {status === 'sending' ? 'Joining...' : 'Join Bombshell Bootcamp'}
      </button>
    </form>
  )
}

export default function BombshellBootcampPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <Image src="/images/go9/fitness.jpg" alt="Bombshell Bootcamp -- Activate Your Freedom Formula" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[1]" />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <p className="text-[#E8A849] font-semibold tracking-widest uppercase text-sm mb-4">Your Glow Up Season Is Here</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 max-w-3xl leading-tight">Bombshell Bootcamp</h1>
          <p className="text-2xl md:text-3xl font-bold text-[#34c5c5] mb-6">Activate Your Freedom Formula</p>
          <p className="text-lg text-gray-200 mb-4 max-w-2xl">5 days to go from burned-out, running-on-fumes high achiever to a vibrant, grounded leader who commands energy, balance, and unstoppable momentum.</p>
          <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm mb-8">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 Days | 12-12:30 PM EST | Replays Available</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#signup" className="bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white rounded-full px-10 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg text-lg">Join Now</a>
            <a href="#formula" className="border-2 border-white/60 text-white rounded-full px-10 py-4 font-bold hover:bg-white/10 transition-colors text-center" onClick={e => { e.preventDefault(); document.getElementById('formula')?.scrollIntoView({ behavior: 'smooth' }) }}>See the 5-Day Formula</a>
          </div>
          <div className="mt-6 inline-block bg-[#0D9488]/20 border border-[#0D9488]/40 rounded-xl px-6 py-3">
            <p className="text-[#34c5c5] font-bold">BONUS: $250 Retreat Credit for all registered guests!</p>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Where Confidence Meets Fitness</h2>
          <p className="text-xl text-gray-600 mb-4">Your inner and outer body experience.</p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Stop surviving and start shining. Bombshell Bootcamp is your 5-day mind-body reset to reclaim your peace, strengthen your boundaries, and rebuild your confidence. If you&apos;re tired of feeling stretched thin... if you want to walk forward calm, confident, and in control... this week is for YOU.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <Sparkles className="w-10 h-10 text-[#E8A849] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Your Energy</h3>
              <p className="text-sm text-gray-600">Reclaim the vitality you&apos;ve been pouring into everyone else.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <Heart className="w-10 h-10 text-[#0D9488] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Your Confidence</h3>
              <p className="text-sm text-gray-600">Build unshakable self-trust that radiates in every room.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <Shield className="w-10 h-10 text-[#E8A849] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Your Strength</h3>
              <p className="text-sm text-gray-600">Physical and mental power that sustains your momentum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Secret */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#E8A849] font-semibold tracking-widest uppercase text-sm mb-4">My Secret Confidence Recipe Revealed</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Brain. Heart. Body. Connected.</h2>
              <p className="text-gray-300 text-lg mb-6">I&apos;m going to teach you how your brain, heart, and body can connect to achieve your ULTIMATE BOMBSHELL LIFE. Regardless of how many fad diets, workout routines, and personal trainers you&apos;ve had -- I&apos;m ready to meet you where you&apos;re at and show you the way.</p>
              <p className="text-gray-300 text-lg mb-8">If you aren&apos;t doing &quot;this recipe,&quot; I can assure you that this is the step that you have been missing to receive the massive results that you KNOW you and your body are meant to achieve.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-[#E8A849] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Unstoppable You</h4>
                    <p className="text-sm text-gray-400">Lead at a high level with freedom, flow, and fun -- show up vibrant, grounded, and fully present for the team and family who count on you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Crown className="w-6 h-6 text-[#0D9488] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Live Life On Your Terms</h4>
                    <p className="text-sm text-gray-400">The Freedom Formula -- CORE, CONFIDENCE, CONSISTENCY, COMMUNITY, CELEBRATION -- and the exact switches to flip so it ignites in your life.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/scraped/section-bg-3-opt.jpg" alt="Krystalore fitness and confidence" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* 5-Day Freedom Formula */}
      <section id="formula" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#E8A849] font-semibold tracking-widest uppercase text-sm mb-4">The Freedom Formula</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">5 Days to Strong, Sexy & Confident</h2>
            <p className="text-gray-600 text-lg">Unleash your inner beast to reveal your Bombshell beauty.</p>
          </div>
          <div className="space-y-6">
            {freedomFormulaDays.map((d) => (
              <div key={d.day} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${d.color}15` }}>
                      <d.icon className="w-8 h-8" style={{ color: d.color }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-white px-3 py-1 rounded-full" style={{ backgroundColor: d.color }}>{d.day}</span>
                      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: d.color }}>{d.formula}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{d.title}</h3>
                    <p className="text-gray-600">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Who It&apos;s For</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">This bootcamp is for the woman who is done grinding in silence and craves a framework that turns hustle into vibrant, balanced momentum.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoItsFor.map((w) => (
              <div key={w.title} className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#0D9488] mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{w.title}</h3>
                <p className="text-sm text-gray-600">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Upgrade */}
      <section className="py-16 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-semibold tracking-widest uppercase text-sm text-orange-100 mb-3">Level Up Even More</p>
              <h2 className="text-3xl font-bold mb-4">VIP Experience</h2>
              <p className="text-orange-50 text-lg mb-6">Grab your VIP ticket and get an extra special Zoom virtual dinner party with Krystalore after each session to dive deeper, get laser coaching, and ask questions!</p>
              <ul className="space-y-3">
                {['Laser life/fitness/business coaching', 'Daily Q&A with Krystalore', 'Networking with VIP guests', 'Chance to win a Crews Beyond Limits gift card', 'Gift card works on any program -- including retreats'].map(item => (
                  <li key={item} className="flex items-center gap-3"><Star className="w-4 h-4 text-white flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <Crown className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">VIP Access</h3>
                <p className="text-orange-100 mb-6">Daily dinner party + laser coaching + raffle entry</p>
                <a href="/book" className="inline-block bg-white text-[#E8A849] font-bold rounded-xl px-8 py-4 hover:scale-105 transition-transform">Get VIP Ticket</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">See the Bombshell Transformation</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.youtube.com/embed/Pc8N32Wa_pI" title="Bombshell Bootcamp by Krystalore Crews" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-20 bg-gray-50">
        <div className="max-w-lg mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Join Bombshell Bootcamp</h2>
            <p className="text-gray-600">Enter your details below to claim your spot. Replays available -- you won&apos;t miss a thing.</p>
            <div className="mt-4 inline-block bg-[#0D9488]/10 border border-[#0D9488]/20 rounded-xl px-4 py-2">
              <p className="text-[#0D9488] font-bold text-sm">BONUS: $250 Retreat Credit included!</p>
            </div>
          </div>
          <BootcampSignupForm />
        </div>
      </section>

      <FAQSection faqs={faqs} title="Bombshell Bootcamp FAQ" />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Waiting. Claim Your Spot.</h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">Activate your Freedom Formula and lead with unstoppable brilliance -- starting now. That inner BOMBSHELL is in there. It&apos;s time to let her out.</p>
          <a href="#signup" className="inline-block bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold rounded-xl px-10 py-5 text-lg hover:scale-105 transition-all" onClick={e => { e.preventDefault(); document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' }) }}>Join Bombshell Bootcamp</a>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/services" className="hover:text-white">All Services</Link>
            <Link href="/million-dollar-body" className="hover:text-white">Million Dollar Body</Link>
            <Link href="/bootcamp" className="hover:text-white">Beyond Limits Boot Camp</Link>
            <Link href="/retreat" className="hover:text-white">Retreats</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
