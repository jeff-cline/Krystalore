'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function FitnessPage() {
  const programs = [
    { title: 'Bombshell Bootcamp', description: 'High-energy group transformation to build strength, confidence, and your bombshell body.', icon: '💪', href: '/bombshell-bootcamp', cta: 'Explore Bombshell' },
    { title: 'Beyond Limits Bootcamp', description: '34 minutes a day, 3× a week — the signature program that takes you beyond every limit.', icon: '🔥', href: '/bootcamp', cta: 'Join the Bootcamp' },
    { title: 'Health Mastery', description: 'A complete system for lasting energy, smart nutrition, and whole-body health.', icon: '🌿', href: '/health-mastery', cta: 'Master Your Health' },
    { title: 'ShYft Mastery', description: 'The proprietary ShYft system to rebuild your body, mind, and momentum.', icon: '⚡', href: 'https://shyftmastery.com', ext: true, cta: 'Discover ShYft Mastery' },
    { title: 'Private Fitness Coaching', description: 'One-on-one coaching tailored to your goals, your body, and your schedule.', icon: '🎯', href: '/privatemindset', cta: 'Go Private' },
    { title: 'Running Coaching', description: 'From first mile to finish line — endurance plans built on 28 marathon completions.', icon: '🏃‍♀️', href: '/book', cta: 'Start Running' },
    { title: 'Wellness Retreats', description: 'Reset and recharge with immersive retreats for body, mind, and spirit.', icon: '🏝️', href: '/retreat', cta: 'Find a Retreat' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero — Krystalore's Story */}
      <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                Krystalore&apos;s Story
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.05]">
                From Wheelchair to Elite Athlete
              </h1>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I know what it feels like to think your body has failed you. After my injury, doctors told me I might never walk normally again, let alone compete as an athlete.
                </p>
                <p>
                  But I refused to accept limitations. Through systematic training, unwavering commitment, and the right support system, I not only recovered—I thrived.
                </p>
                <p>
                  I went on to complete 26 marathons, become an NFL cheerleader, and prove that our biggest obstacles can become our greatest strengths.
                </p>
                <p className="font-semibold text-[#0D9488]">
                  That&apos;s the same transformation I want to help you achieve—whatever your starting point.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/bootcamp"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Join the Bootcamp
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center border-2 border-[#34c5c5] text-[#0D9488] hover:bg-[#34c5c5] hover:text-white px-8 py-4 rounded-full text-lg font-bold transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/scraped/krystalore-profile.png"
                alt="Krystalore's transformation — from wheelchair to elite athlete"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ways to Train with Krystalore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From bootcamps to private coaching to wellness retreats — every path is built to take you beyond your limits. Pick where you want to start.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const cls = 'group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col'
              const body = (
                <>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{program.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">{program.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-teal-600 font-semibold group-hover:gap-2.5 transition-all">{program.cta} →</span>
                </>
              )
              return program.ext
                ? <a key={index} href={program.href} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a>
                : <Link key={index} href={program.href} className={cls}>{body}</Link>
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            Real Results from Real People
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-4xl font-bold text-teal-200 mb-2">89%</div>
              <div>See results within 30 days</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-200 mb-2">95%</div>
              <div>Complete the full program</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-200 mb-2">100%</div>
              <div>Report improved confidence</div>
            </div>
          </div>
          
          <blockquote className="text-xl italic text-teal-100 mt-12 max-w-2xl mx-auto">
            "In 3 months, I've not only lost 25 pounds but gained the confidence and energy I thought I'd lost forever. Krystalore's program isn't just about fitness—it's about reclaiming your life."
          </blockquote>
          <cite className="text-teal-200 mt-4 block">- Sarah M., Executive</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#34c5c5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join Beyond Limits Boot Camp today and discover what you're truly capable of achieving.
          </p>
          <Link
            href="/bootcamp"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Join the Bootcamp
          </Link>
        </div>
      </section>

      <Footer />
      
      {/* JC Easter Egg */}
      <div className="text-center py-2">
        <a 
          href="https://jeff-cline.com" 
          className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity"
        >
          JC
        </a>
      </div>
    </div>
  )
}