import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'
import { ArrowRight, CheckCircle, Building2, Brain, Dumbbell, Users, Shield, Heart, Megaphone, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Wellness & Leadership | Krystalore Crews',
  description: 'Elevate your team\'s performance, resilience, and well-being with customized corporate wellness programs and leadership development by Krystalore Crews.',
}

export default function CorporateWellnessPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative py-32 md:py-40 px-4 overflow-hidden min-h-screen flex items-center">
        <Image
          src="/images/krystalore/cropped-cropped-SAM_3152-scaled-1.jpg"
          alt="Corporate wellness and leadership development with Krystalore Crews"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-teal-900/60" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-teal-400 font-semibold tracking-widest uppercase text-sm mb-4">For Organizations</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Corporate Wellness & <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Leadership Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Elevate your team&apos;s performance, resilience, and well-being with customized programs designed for the modern workplace.
          </p>
          <a href="/book" className="bg-gradient-to-r from-teal-600 to-teal-500 text-white text-lg px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
            Schedule a Discovery Call <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How We Serve <span className="text-teal-600">Your Organization</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Megaphone, title: 'Lead Beyond Limits Speaking & Keynotes', desc: 'Powerful keynotes that ignite leadership transformation and inspire lasting change in your team.' },
              { icon: Brain, title: 'EQ & Wellness Workshops', desc: 'Interactive workshops on emotional intelligence, stress management, and peak performance.' },
              { icon: Shield, title: 'Sponsor a Veteran Partnership', desc: 'Partner with us to support veteran transition, wellness, and leadership development.' },
              { icon: Dumbbell, title: 'Performance in Motion Corporate Fitness', desc: 'On-site and virtual fitness programs that energize teams and boost productivity.' },
              { icon: Users, title: 'Team Dynamics & Leadership Retreats', desc: 'Off-site experiences that build trust, alignment, and high-performance culture.' },
              { icon: Palette, title: 'Customized Corporate Solutions', desc: 'Fully tailored programs designed around your organization\'s unique needs and goals.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Icon className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Krystalore */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/krystalore/wny-heroes-speaking.png"
                alt="Krystalore Crews speaking at corporate event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Organizations Choose Krystalore</h2>
              <div className="space-y-4">
                {[
                  'Military discipline meets corporate strategy',
                  'Certified in somatic healing, emotional intelligence, and leadership coaching',
                  'Customized programs — never one-size-fits-all',
                  'Proven track record with 500+ successful clients',
                  'Available for in-person and virtual delivery worldwide',
                  'ROI-focused: measurable improvements in team performance and retention',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/book" className="mt-8 inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-700 transition-colors">
                <Building2 className="h-5 w-5" /> Request Corporate Info
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-700 to-teal-600 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Elevate Your Team?</h2>
          <p className="text-teal-100 text-lg mb-8">Book a discovery call to discuss how we can customize a corporate wellness and leadership program for your organization.</p>
          <a href="/book" className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center gap-2">
            Book a Breakthrough Call <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </MainLayout>
  )
}
