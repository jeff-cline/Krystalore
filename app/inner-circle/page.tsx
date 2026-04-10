'use client'

import Header from '@/components/layout/header'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Heart, Users, ArrowRight, Lock } from 'lucide-react'

const circles = [
  {
    title: "Women's Inner Circle",
    subtitle: 'Identity · Leadership · Embodied Confidence',
    description: 'For high-performing women navigating identity transitions, leadership, health, and emotional integration. A space to reclaim your power without losing yourself.',
    href: '/inner-circle/womens',
    icon: Heart,
    color: 'bg-[#B8A9D4]',
    borderColor: 'border-[#B8A9D4]',
    textColor: 'text-[#B8A9D4]',
  },
  {
    title: "Men's Inner Circle",
    subtitle: 'Discipline · Regulation · Leadership Refinement',
    description: 'For veterans, executives, entrepreneurs, and high performers who lead under pressure. No fluff. No therapy tone. Strength-based leadership refinement.',
    href: '/inner-circle/mens',
    icon: Shield,
    color: 'bg-[#34c5c5]',
    borderColor: 'border-[#34c5c5]',
    textColor: 'text-[#34c5c5]',
  },
  {
    title: 'Co-Ed Leadership Forum',
    subtitle: 'Monthly · Advanced · Relational Intelligence',
    description: 'A monthly joint session for Inner Circle members exploring leadership case studies, communication dynamics, and emotional intelligence across all contexts.',
    href: '/inner-circle/co-ed',
    icon: Users,
    color: 'bg-[#E07A5F]',
    borderColor: 'border-[#E07A5F]',
    textColor: 'text-[#E07A5F]',
  },
]

export default function InnerCircleHub() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <Image src="/images/go9/retreat-costa-rica.jpg" alt="Inner Circle exclusive community retreat" fill className="object-cover opacity-10" sizes="100vw" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34c5c5]/10 text-[#34c5c5] text-sm font-medium mb-8">
            <Lock className="w-4 h-4" />
            Application Only
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Beyond Limits<br />
            <span className="text-[#34c5c5]">Inner Circle Network</span>
          </h1>
          <p className="text-xl text-gray-800/70 max-w-2xl mx-auto leading-relaxed">
            Three curated containers for leaders who are done performing and ready to operate from alignment, strength, and clarity.
          </p>
          <p className="mt-6 text-gray-800/50 text-sm uppercase tracking-widest">
            Led by Krystalore Crews · 22 Years Air Force · Certified Coach · Fitness Authority
          </p>
        </div>
      </section>

      {/* Circles Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {circles.map((circle) => (
            <Link
              key={circle.title}
              href={circle.href}
              className={`group relative bg-white rounded-2xl p-8 border-2 ${circle.borderColor} border-opacity-20 hover:border-opacity-100 transition-all duration-300 hover:shadow-xl`}
            >
              <div className={`w-14 h-14 rounded-xl ${circle.color} bg-opacity-15 flex items-center justify-center mb-6`}>
                <circle.icon className={`w-7 h-7 ${circle.textColor}`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{circle.title}</h2>
              <p className="text-sm text-gray-800/50 font-medium mb-4 uppercase tracking-wide">{circle.subtitle}</p>
              <p className="text-gray-800/70 leading-relaxed mb-6">{circle.description}</p>
              <div className={`inline-flex items-center gap-2 ${circle.textColor} font-semibold group-hover:gap-3 transition-all`}>
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#37a6a6] rounded-2xl p-10 md:p-14 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Investment</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Each Inner Circle is a 6-month minimum commitment. This isn&apos;t a course — it&apos;s a container built for transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-white/10 rounded-xl px-8 py-5">
              <p className="text-3xl font-bold">$750<span className="text-lg font-normal text-white/60">/month</span></p>
            </div>
            <span className="text-white/40">or</span>
            <div className="bg-white/10 rounded-xl px-8 py-5">
              <p className="text-3xl font-bold">$7,500<span className="text-lg font-normal text-white/60"> paid in full</span></p>
            </div>
          </div>
          <Link
            href="/inner-circle/apply"
            className="inline-block mt-10 bg-[#E07A5F] hover:bg-[#d06a4f] text-white font-semibold px-10 py-4 rounded-xl transition-colors text-lg"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}
