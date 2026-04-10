'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Gift, Users, Heart, DollarSign, Star, CheckCircle, Share2 } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: 'Crews Beyond Limits Referral Program', url: 'https://krystalore.com/referral-program' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'How does the referral program work?', acceptedAnswer: { '@type': 'Answer', text: 'Refer friends, family, or colleagues to any Crews Beyond Limits program and earn rewards. When your referral enrolls, you receive credits, discounts, or commission depending on the program.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const faqs = [
  { question: 'How does the referral program work?', answer: 'Refer friends, family, or colleagues to any Crews Beyond Limits program — coaching, fitness, retreats, or courses. When your referral enrolls, you earn rewards including discounts on your own programs, cash commissions, free months of group fitness, and priority access to new programs.' },
  { question: 'What rewards can I earn?', answer: 'Rewards vary by program: group fitness referrals earn you a free month, course referrals earn percentage-based commissions, and retreat referrals can earn significant cash rewards. The more people you refer, the more you earn.' },
  { question: 'Is there a limit to how many people I can refer?', answer: 'No. There is no cap on referrals. Some of our most active ambassadors earn enough to cover their own membership and then some. The more transformation you spread, the more you earn.' },
  { question: 'Do my referrals get any benefits?', answer: 'Yes. Referrals receive a special discount on their first enrollment. It\'s a win-win — you earn rewards, and they get a better deal on their transformation journey.' },
  { question: 'How do I track my referrals?', answer: 'You\'ll receive a unique referral link and dashboard to track all your referrals, conversions, and earnings. Everything is transparent and automated.' },
  { question: 'Can I refer someone to a retreat?', answer: 'Absolutely. Retreat referrals are some of the highest-value referrals in the program. The best gift you can give someone is the referral to change their life. Retreat referral commissions reflect that value.' },
]

export default function ReferralProgramPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/community-hands.jpg" alt="Referral Program" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Referral Program</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Share the transformation. Earn rewards for every person you refer to Krystalore's coaching and retreat programs.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="space-y-6">
            {[
              { icon: Share2, title: 'Share Your Link', desc: 'Get your unique referral link and share it with anyone who could benefit from coaching, fitness, retreats, or courses.' },
              { icon: Users, title: 'They Transform', desc: 'Your referral enrolls in any Crews Beyond Limits program and begins their transformation journey.' },
              { icon: Gift, title: 'You Earn Rewards', desc: 'Receive discounts, commissions, free months, and priority access based on what your referral enrolls in.' },
              { icon: Heart, title: 'Change Lives', desc: 'Every referral is a chance to change someone\'s life. That\'s the real reward.' },
            ].map((s) => (
              <div key={s.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0"><s.icon className="w-6 h-6 text-[#34c5c5]" /></div>
                <div><h3 className="font-bold text-gray-900">{s.title}</h3><p className="text-gray-600">{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Referral Rewards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { program: 'Group Fitness', reward: 'Free month for each referral', icon: '💪' },
              { program: 'Courses & Programs', reward: 'Percentage-based commission', icon: '📚' },
              { program: 'Retreat Referrals', reward: 'Cash rewards + priority booking', icon: '🏝️' },
              { program: 'Coaching Referrals', reward: 'Discount on your own coaching', icon: '🧠' },
            ].map((r) => (
              <div key={r.program} className="bg-white rounded-xl p-6 flex items-start gap-4">
                <span className="text-3xl">{r.icon}</span>
                <div><h3 className="font-bold text-gray-900">{r.program}</h3><p className="text-gray-600 text-sm">{r.reward}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veteran Sponsorship */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/logos/09-military.png" alt="Veteran support" fill className="object-contain object-bottom" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Veteran Sponsorship Program</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Learn ways to support our nation&apos;s Veterans who want to determine their next mission after serving in the military. Your referrals and sponsorships help veterans access life-changing retreat experiences and coaching programs.</p>
              <p className="text-gray-600 leading-relaxed font-semibold text-[#34c5c5]">The best gift is the referral to change (or save) someone&apos;s life.</p>
              <Link href="/veteran-coaching" className="inline-block mt-6 bg-[#34c5c5] hover:bg-teal-700 text-white font-bold rounded-xl px-6 py-3 transition-all">Learn About Veteran Programs</Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Referral Program FAQ" />

      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Share the Transformation. Earn the Reward.</h2>
          <Link href="/go" className="inline-block bg-white text-orange-600 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all">Join the Referral Program</Link>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-orange-100 text-sm">
            <Link href="/retreat" className="hover:text-white">Retreats</Link>
            <Link href="/group-fitness" className="hover:text-white">Group Fitness</Link>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <Link href="/apply-for-coaching" className="hover:text-white">Coaching</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
