'use client'

import Header from '@/components/layout/header'
import Image from 'next/image'

import Link from 'next/link'

const features = [
  { name: 'Members Area', pro: true, elite: true, scale: true },
  { name: 'Courses', pro: true, elite: true, scale: true },
  { name: 'Quizzes & Assessments', pro: true, elite: true, scale: true },
  { name: 'Client Dashboard', pro: true, elite: true, scale: true },
  { name: 'Integrations (GHL, Stripe, etc.)', pro: false, elite: true, scale: true },
  { name: 'Go Live Streaming', pro: false, elite: true, scale: true },
  { name: 'Video Vault', pro: false, elite: true, scale: true },
  { name: 'Onboarding', pro: 'One-time 30 min', elite: 'Dedicated support', scale: 'Dedicated support' },
]

export default function PricingDemo() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Coach Header */}
      <section className="relative bg-gradient-to-br from-[#34c5c5] to-[#37a6a6] text-white py-16 overflow-hidden">
        <Image src="/images/go9/corporate.jpg" alt="Business coaching platform and pricing" fill className="object-cover opacity-15" sizes="100vw" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            COACHES: LOOKING TO HAVE YOUR OWN PLATFORM?
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
            From platform to full-scale growth engine. Choose the plan that matches where you&apos;re going.
          </p>
          <Link href="/contact" className="inline-block bg-[#34c5c5] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#37a6a6] transition-all">
            Book a Demo Call
          </Link>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 text-gray-600 font-medium">Feature</th>
                  <th className="p-6 text-center">
                    <div className="text-lg font-bold text-gray-900">Coaching Pro</div>
                    <div className="text-3xl font-extrabold text-black mt-1">$1,500<span className="text-sm font-normal text-gray-500">/mo</span></div>
                  </th>
                  <th className="p-6 text-center bg-[#34c5c5]/5 border-x-2 border-[#E8A849]/20">
                    <span className="inline-block bg-[#34c5c5] text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-2">Most Popular</span>
                    <div className="text-lg font-bold text-gray-900">Coaching Elite</div>
                    <div className="text-3xl font-extrabold text-black mt-1">$3,000<span className="text-sm font-normal text-gray-500">/mo</span></div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="text-lg font-bold text-gray-900">Coaching Scale</div>
                    <div className="text-3xl font-extrabold text-black mt-1">$7,500<span className="text-sm font-normal text-gray-500">/mo</span></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">{f.name}</td>
                    {[f.pro, f.elite, f.scale].map((val, j) => (
                      <td key={j} className={`p-4 text-center ${j === 1 ? 'bg-[#34c5c5]/5 border-x-2 border-[#E8A849]/20' : ''}`}>
                        {val === true ? (
                          <svg className="w-6 h-6 text-[#34c5c5] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        ) : val === false ? (
                          <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                          <span className="text-sm text-gray-600">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scale tier extras */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Coaching Scale — Full Growth Engine</h3>
            <p className="text-gray-600 mb-6">Everything in Elite, plus organic traffic, AI voice agents, and automated nurture campaigns:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'MoneyWords.org', tag: 'SEO & Content Engine', items: ['Full SEO audit & keyword strategy', 'Weekly long-form blog content', 'On-page optimization', 'Monthly ranking reports'] },
                { name: 'KeyWordCalls.com', tag: 'AI Voice Agents', items: ['AI-powered inbound call handling', 'Lead qualification & booking', 'Custom voice agent trained on your brand', '24/7 availability'] },
                { name: 'VoiceDrips.com', tag: 'AI Nurture Campaigns', items: ['Automated voice follow-up sequences', 'Personalized AI voice messages', 'Re-engagement for cold leads', 'Campaign performance dashboard'] },
              ].map(addon => (
                <div key={addon.name} className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900">{addon.name}</h4>
                  <p className="text-xs text-[#E8A849] font-medium mb-3">{addon.tag}</p>
                  <ul className="space-y-2">
                    {addon.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#34c5c5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <button className="w-full py-3 px-6 rounded-lg font-semibold text-sm bg-[#34c5c5] text-white hover:bg-[#84d7d7] transition-all">Get Started — Pro</button>
            <button className="w-full py-3 px-6 rounded-lg font-semibold text-sm bg-[#34c5c5] text-white hover:bg-[#37a6a6] shadow-lg shadow-teal-200 transition-all">Get Started — Elite</button>
            <button className="w-full py-3 px-6 rounded-lg font-semibold text-sm bg-[#34c5c5] text-white hover:bg-[#84d7d7] transition-all">Contact Us — Scale</button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Ready to scale your coaching business?</h2>
          <p className="text-gray-600 mb-8">
            Every plan includes your own branded platform. Coaching Scale adds the full growth engine — SEO, AI voice agents, and automated nurture campaigns.
          </p>
          <a href="mailto:krystalore@thecrewscoach.com" className="inline-block bg-[#34c5c5] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#37a6a6] transition-all shadow-lg shadow-teal-200">
            Book a Demo Call
          </a>
        </div>
      </section>

      <footer className="bg-[#37a6a6] text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <img src="/images/krystalore-crews-logo.png" alt="Executive Krystalore" className="h-8 w-auto mx-auto mb-4 opacity-70" />
          <p>&copy; {new Date().getFullYear()} Executive Krystalore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
