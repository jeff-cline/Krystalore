import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'
import { ArrowRight, CheckCircle, Rocket, TrendingUp, Users, Zap, Target, Trophy, Star, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Boot Camp | Startup Incubator to Scale-Up Accelerator | Krystalore Crews',
  description: 'From startup to scale-up. Business Boot Camp programs for entrepreneurs at every stage — from Smart Start incubator to elite mastermind-level scaling.',
}

export default function BusinessBootcampPage() {
  const programs = [
    {
      name: 'Smart Start',
      tagline: 'For the First-Time Founder',
      price: '$2,500',
      paymentPlan: true,
      color: '#84d7d7',
      features: [
        'Business plan development & validation',
        'Brand identity & positioning workshop',
        'Digital presence setup (website, social, email)',
        'Legal & financial foundations',
        'First 90-day action roadmap',
        '4 weeks of group coaching',
        'Access to THRIVE Network community',
      ],
    },
    {
      name: 'Scale',
      tagline: 'For the Business Ready to Grow',
      price: '$7,500',
      paymentPlan: false,
      color: '#E8A849',
      badge: 'MOST POPULAR',
      features: [
        'Everything in Smart Start',
        'Revenue optimization & pricing strategy',
        'Team building & leadership development',
        'Marketing automation & funnel design',
        'Strategic partnerships & JV setup',
        '8 weeks of intensive coaching',
        'S.M.A.R.T. Technology integration',
        'Private Slack channel access',
      ],
    },
    {
      name: 'SXXT!',
      tagline: 'For the Leader Who\'s Been Knocked Down',
      price: '$12,500',
      paymentPlan: false,
      color: '#B8A9D4',
      features: [
        'Everything in Scale',
        'Crisis management & pivot strategy',
        'Personal brand rebuild & reputation management',
        'Executive coaching (1-on-1 sessions)',
        'Somatic healing for business burnout',
        '12 weeks of premium coaching',
        'VIP retreat access (Caribbean immersion)',
        'Lifetime alumni network membership',
        'Direct access to Krystalore & Jeff Cline',
      ],
    },
  ]

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative py-32 md:py-40 px-4 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#37a6a6] via-[#37a6a6] to-[#37a6a6]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-[#E8A849] font-semibold tracking-widest uppercase text-sm mb-4">Business Boot Camp</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            From Startup to <span className="bg-gradient-to-r from-[#84d7d7] to-[#E8A849] bg-clip-text text-transparent">Scale-Up</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Build, launch, and grow your business with proven frameworks from two decades of exits, launches, and real-world business building. A white-label partnership between Krystalore Crews and Jeff Cline.
          </p>
          <p className="text-gray-400 text-sm mb-10">Powered by the same S.M.A.R.T. Technology stack behind multiple 7-figure businesses</p>
          <a href="/book" className="bg-gradient-to-r from-[#E8A849] to-[#D4943A] text-white text-lg px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
            Apply Now <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-8">
        <Image src="/images/go9/corporate.jpg" alt="Krystalore Crews business bootcamp and entrepreneurship training" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Who This Is For */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Which Stage Are <span className="text-[#34c5c5]">You In?</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Whether you&apos;re launching your first venture or rebuilding after a setback, we have a program built for your exact moment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative">
                {program.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-bold" style={{ backgroundColor: program.color }}>
                    {program.badge}
                  </div>
                )}
                <div className="h-2" style={{ backgroundColor: program.color }} />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{program.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{program.tagline}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-black" style={{ color: program.color }}>{program.price}</span>
                    {program.paymentPlan && <p className="text-xs text-gray-400 mt-1">Payment Plans Available</p>}
                  </div>
                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: program.color }} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/book" className="w-full block py-3 rounded-full text-white font-bold text-center hover:opacity-90 transition-opacity" style={{ backgroundColor: program.color }}>
                    Apply for {program.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The <span className="text-[#E8A849]">Business Boot Camp</span> Advantage
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Rocket, title: 'Proven Frameworks', desc: 'Built from 4 exits, dozens of launches, and decades of executive leadership.' },
              { icon: Zap, title: 'S.M.A.R.T. Tech Stack', desc: 'Technology worth $7,500-$15,000/month included in your program.' },
              { icon: Users, title: 'Small Cohorts', desc: 'Intimate groups for personalized attention and deep collaboration.' },
              { icon: Trophy, title: 'Dual Expertise', desc: 'Krystalore (transformation + coaching) meets Jeff Cline (tech + scaling).' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <Icon className="h-10 w-10 text-[#34c5c5] mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#37a6a6] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Something That Lasts?</h2>
          <p className="text-gray-400 text-lg mb-8">Apply for Business Boot Camp and let&apos;s build your next chapter together.</p>
          <a href="/book" className="bg-gradient-to-r from-[#E8A849] to-[#D4943A] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center gap-2">
            Apply Now <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </MainLayout>
  )
}
