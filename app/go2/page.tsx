'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import KrystaloreDiamond from '@/components/KrystaloreDiamond'
import { ArrowRight } from 'lucide-react'

const freedomFormula = [
  {
    name: 'Core',
    image: '/images/logos/06-superwoman.png',
    desc: 'Your unshakable foundation. Identity, values, and the inner work that makes everything else possible.',
    link: '#core',
    accent: '#84d7d7',
  },
  {
    name: 'Confidence',
    image: '/images/logos/01-entrepreneur.png',
    desc: 'The courage to show up, speak up, and stand in your power. Built through action, not affirmation.',
    link: '#confidence',
    accent: '#E8A849',
  },
  {
    name: 'Consistency',
    image: '/images/logos/04-runner.png',
    desc: 'Small daily disciplines that compound into extraordinary results. The momentum that changes everything.',
    link: '#consistency',
    accent: '#34c5c5',
  },
  {
    name: 'Community',
    image: '/images/logos/05-cruise-hostess.png',
    desc: 'Your tribe. The people who hold you accountable, celebrate your wins, and refuse to let you shrink.',
    link: '/community',
    accent: '#84d7d7',
  },
  {
    name: 'Celebration',
    image: '/images/logos/07-retreat-meditation.png',
    desc: 'Honoring every milestone. Rest is not weakness — it\'s how you sustain greatness.',
    link: '#celebration',
    accent: '#B8A9D4',
  },
]

const productivityTools = [
  {
    name: 'S.M.A.R.T. Technology',
    image: '/images/logos/10-phd-graduate.png',
    desc: 'AI-powered tools and frameworks for peak performance and strategic planning.',
    link: '/services',
    accent: '#84d7d7',
  },
  {
    name: 'Life Planner',
    image: '/images/logos/03-bikini-model.png',
    desc: 'Your comprehensive guide to designing each day, week, and quarter with intention.',
    link: '/planner',
    accent: '#E8A849',
  },
  {
    name: 'Vision Board',
    image: '/images/logos/02-mountain-climber.png',
    desc: 'Visualize your goals and create a magnetic blueprint for your dream life.',
    link: '/vision-board',
    accent: '#E07A5F',
  },
  {
    name: 'Alignment Assessment',
    image: '/images/logos/08-waterfall-rappel.png',
    desc: 'Discover where you are vs. where you want to be across all areas of life.',
    link: '/alignment',
    accent: '#34c5c5',
  },
]

const memberships = [
  { name: 'Thrive Network', price: 'FREE', priceNote: '', desc: 'Free community access. Connect, grow, and find your tribe.', link: '/inner-circle', cta: 'Join Free', accent: '#84d7d7' },
  { name: 'Beyond Limits', price: '$99', priceNote: '/mo', desc: 'Boot camp fitness + accountability. Mon/Wed/Fri live sessions.', link: '/bootcamp', cta: 'Get Started', accent: '#84d7d7' },
  { name: 'Health Mastery', price: '$199', priceNote: '/mo', desc: 'Complete wellness transformation. Nutrition, fitness, and somatic healing.', link: '/fitness', cta: 'Transform', accent: '#E8A849' },
  { name: 'Inner Circle', price: 'Apply', priceNote: '', desc: 'Direct access, group coaching, and exclusive resources.', link: '/inner-circle', cta: 'Apply Now', accent: '#B8A9D4' },
  { name: 'S.M.A.R.T.', price: '$3,000', priceNote: '/mo', desc: 'Full private client experience with S.M.A.R.T. technology integration.', link: '/apply', cta: 'Apply', accent: '#37a6a6' },
]

export default function Go2Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== HERO: Diamond + Beyond Limits ===== */}
      <section className="relative py-12 lg:py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left: Diamond */}
            <div className="flex-shrink-0">
              <KrystaloreDiamond size={420} className="mx-auto" />
            </div>

            {/* Right: Beyond Limits + branding */}
            <div className="flex-1 text-center lg:text-left">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src="/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg"
                  alt="Krystalore Crews - Beyond Limits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 512px"
                  priority
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-800 mb-4">
                BEYOND LIMITS
              </h1>
              <p className="text-xl md:text-2xl text-[#34c5c5] mb-8 font-medium">
                Push past every boundary. Mind, body, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/bootcamp"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Start Your Journey <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#34c5c5] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#34c5c5] hover:text-white transition-all"
                >
                  Apply for Coaching
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FREEDOM FORMULA ===== */}
      <section className="py-20 bg-[#F4F1EC]" id="freedom-formula">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            The Freedom Formula
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg">Five pillars. One transformation.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {freedomFormula.map(({ name, image, desc, link, accent }) => (
              <div
                key={name}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <Link
                    href={link}
                    className="inline-flex items-center gap-1 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all"
                    style={{ background: accent }}
                  >
                    Go <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTIVITY TOOLS & HACKS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Productivity Tools &amp; Hacks
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg">Work smarter. Live bigger.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productivityTools.map(({ name, image, desc, link, accent }) => (
              <div
                key={name}
                className="bg-[#F4F1EC] rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div className="relative w-full aspect-square bg-white/60 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <Link
                    href={link}
                    className="inline-flex items-center gap-1 text-white px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-all"
                    style={{ background: accent }}
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEMBERSHIPS ===== */}
      <section className="py-20 bg-gradient-to-b from-[#F4F1EC] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Memberships
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg">Find the level that fits your journey.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {memberships.map(({ name, price, priceNote, desc, link, cta, accent }) => (
              <div
                key={name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center hover:-translate-y-1 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ background: accent }}
                />
                <h3 className="text-lg font-bold text-gray-800 mt-2 mb-2">{name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-black" style={{ color: accent }}>{price}</span>
                  {priceNote && <span className="text-sm text-gray-500">{priceNote}</span>}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{desc}</p>
                <Link
                  href={link}
                  className="inline-block w-full text-white py-3 rounded-full font-bold text-sm hover:scale-105 transition-all"
                  style={{ background: accent }}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>
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
