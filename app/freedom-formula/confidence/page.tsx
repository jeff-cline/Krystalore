'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Download, Shield, Flame, Target, Users, Sparkles } from 'lucide-react'

const fiveCNav = [
  { title: 'Core', href: '/freedom-formula/core', icon: Shield, accent: '#0D9488' },
  { title: 'Confidence', href: '/freedom-formula/confidence', icon: Flame, accent: '#F97316' },
  { title: 'Consistency', href: '/freedom-formula/consistency', icon: Target, accent: '#0D9488' },
  { title: 'Community', href: '/freedom-formula/community', icon: Users, accent: '#F97316' },
  { title: 'Celebration', href: '/freedom-formula/celebration', icon: Sparkles, accent: '#14B8A6' },
]

export default function ConfidencePage() {
  const currentSlug = 'confidence'
  
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src="/images/go9/hero.jpg" alt="Confidence" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2838]/90 via-[#1B2838]/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-12 w-full">
            <p className="text-[#E8A849] font-semibold uppercase tracking-wider text-sm mb-2">The Freedom Formula</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">Confidence</h1>
            <p className="text-[#84d7d7] text-xl font-light">Built Through Action, Not Affirmation</p>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B2838] mb-8">What Is Confidence?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">Confidence isn&apos;t something you think your way into. It&apos;s built through action — through showing up when you&apos;re scared, speaking up when it&apos;s uncomfortable, and choosing yourself even when the world tells you to shrink. Real confidence is embodied. It lives in your posture, your voice, your willingness to take up space.</p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">This pillar draws on somatic coaching principles. When you physically practice confidence — through movement, breathwork, and intentional body awareness — your nervous system rewires itself. You stop waiting to feel confident before you act, and you start acting your way into confidence. That&apos;s the shift.</p>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">Krystalore&apos;s approach blends military discipline with somatic wisdom. Confidence isn&apos;t about never being afraid. It&apos;s about training your body and mind to move forward anyway. Every workout, every hard conversation, every boundary you set — that&apos;s a deposit into your confidence account.</p>
        </div>
      </section>

      {/* Krystalore Quote */}
      <section className="py-12 px-6 bg-gradient-to-r from-[#1B2838] to-[#2d3f52]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#E8A849] mx-auto">
              <Image src="/images/go9/portrait.jpg" alt="Krystalore Crews" width={80} height={80} className="object-cover w-full h-full" />
            </div>
          </div>
          <blockquote className="text-[#beeaea] text-xl md:text-2xl font-light italic leading-relaxed mb-4">
            &ldquo;Confidence isn&apos;t a feeling you wait for. It&apos;s a muscle you build. Every time you show up scared and do it anyway, you&apos;re proving to yourself that you can be trusted.&rdquo;
          </blockquote>
          <p className="text-[#E8A849] font-semibold">— Krystalore Crews</p>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B2838] mb-8">Key Principles</h2>
          <div className="space-y-4">
            {[
              "Take one action daily that pushes your comfort zone — confidence is cumulative",
              "Use power posing and embodied movement to shift your nervous system state",
              "Replace affirmations with evidence — keep a running list of things you've survived and conquered",
              "Practice speaking up in small moments so you're ready for the big ones",
            ].map((principle, i) => (
              <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm">
                <div className="min-w-[36px] h-9 rounded-full bg-[#34c5c5] flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
                <p className="text-gray-700 leading-relaxed">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#34c5c5] to-[#0D9488]">
        <div className="max-w-2xl mx-auto text-center">
          <Download className="h-12 w-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-3">Download: &ldquo;The Courage Code&rdquo; Guide</h2>
          <p className="text-white/80 mb-8 text-lg">Your free guide to mastering the Confidence pillar of the Freedom Formula.</p>
          <Link href="/vault" className="inline-block bg-white text-[#1B2838] rounded-full px-10 py-4 font-bold text-lg hover:scale-105 transition-transform">
            Get Your Free Guide <ArrowRight className="inline h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Navigate Other C's */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1B2838] text-center mb-8">Explore the Full Freedom Formula</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {fiveCNav.map(({ title, href, icon: Icon, accent }) => (
              <Link key={title} href={href} className={`p-4 rounded-xl text-center transition-all hover:scale-105 ${currentSlug === title.toLowerCase() ? 'bg-[#1B2838] text-white shadow-lg' : 'bg-[#F4F1EC] text-[#1B2838] hover:shadow-md'}`}>
                <Icon className="h-6 w-6 mx-auto mb-2" style={{ color: currentSlug === title.toLowerCase() ? '#E8A849' : accent }} />
                <p className="font-bold text-sm">{title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 px-6 bg-[#1B2838]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#E8A849] mb-4">Ready to Transform?</h2>
          <p className="text-[#84d7d7] mb-8 text-lg">Work with Krystalore to build your personalized Freedom Formula roadmap.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book" className="bg-[#E8A849] text-[#1B2838] rounded-full px-8 py-3 font-bold hover:scale-105 transition-transform">
              Book a Breakthrough Call
            </a>
            <Link href="/apply" className="border-2 border-[#34c5c5] text-[#34c5c5] rounded-full px-8 py-3 font-bold hover:bg-[#34c5c5]/10 transition-colors">
              Apply for Coaching
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">(716) 390-6727 | krystalore@thecrewscoach.com</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
