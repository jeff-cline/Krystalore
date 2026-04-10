'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Clock, Target, Sparkles, Calendar, Brain, Wrench } from 'lucide-react'

const tools = [
  {
    title: "Weekly Co-Working Power Hour",
    image: "/images/go9/coaching.jpg",
    desc: "Free weekly co-working sessions on Zoom. Show up, focus up, and get it done alongside a motivated community. Public accountability drives completion.",
    link: "/coworking",
    badge: "FREE",
    icon: Clock,
    features: ["Weekly Zoom sessions", "Public intention setting", "45-min deep focus block", "Accountability report"]
  },
  {
    title: "Krystal Clear Life Planner",
    image: "/images/go9/planner.jpg",
    desc: "The strategic planning system that turns your biggest goals into your greatest achievements. Design each day, week, and quarter with intention and clarity.",
    link: "/planner",
    badge: null,
    icon: Calendar,
    features: ["12-month strategic planning", "Goal-setting frameworks", "Habit tracking systems", "Progress review templates"]
  },
  {
    title: "Men's Tactical Life Planner",
    image: "/images/go9/planner.jpg",
    desc: "A structured approach to life planning specifically designed for men who want to lead with purpose and achieve their missions.",
    link: "/planner",
    badge: null,
    icon: Target,
    features: ["Mission-based planning", "Tactical daily structure", "Quarterly objectives", "Performance tracking"]
  },
  {
    title: "Vision Board Workshops",
    image: "/images/go9/meditation.webp",
    desc: "Quarterly or on-request workshops for teams, communities, and retreats. Strategic planning, goal setting, and accountability with creative visualization.",
    link: "/vision-board",
    badge: null,
    icon: Sparkles,
    features: ["Guided visualization", "Intention setting", "Creative building", "Action planning"]
  },
  {
    title: "Hilites App",
    image: "/images/go9/hero.jpg",
    desc: "Capture daily wins and micro-moments that fuel your motivation. Track your transformation journey one highlight at a time.",
    link: "/products",
    badge: null,
    icon: Brain,
    features: ["Daily win tracking", "Micro-moment capture", "Motivation fuel", "Progress visualization"]
  },
  {
    title: "S.M.A.R.T. Technology",
    image: "/images/go9/keynote.jpg",
    desc: "AI-powered tools and frameworks for peak performance, strategic planning, and accountability. The same tech stack behind multiple 7-figure businesses.",
    link: "/services",
    badge: "PREMIUM",
    icon: Wrench,
    features: ["AI-powered frameworks", "Strategic planning tools", "Performance analytics", "Accountability systems"]
  },
  {
    title: "Habit Trackers",
    image: "/images/go9/corporate.jpg",
    desc: "Track your daily habits, build momentum, and watch small disciplines compound into extraordinary results. Included with the Life Planner.",
    link: "/planner",
    badge: null,
    icon: Target,
    features: ["Daily habit logging", "Streak tracking", "Momentum visualization", "Compound growth metrics"]
  },
  {
    title: "Alignment Assessment",
    image: "/images/logos/08-waterfall-rappel.png",
    desc: "Discover where you are vs. where you want to be across all areas of life. A powerful self-assessment to guide your next steps.",
    link: "/alignment",
    badge: "FREE",
    icon: Brain,
    features: ["Life area scoring", "Gap analysis", "Priority mapping", "Action recommendations"]
  },
]

export default function ProductivityToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#F4F1EC] to-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-4">Work Smarter, Live Bigger</p>
          <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
            Productivity Tools & Hacks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Organize the chaos to live a more fulfilling life. These are the tools, systems, and resources 
            Krystalore uses — and teaches — to help high performers design every day with intention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/planner"
              className="inline-flex items-center justify-center gap-2 bg-[#0D9488] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#0B7C72] transition-all shadow-lg hover:shadow-xl"
            >
              Get the Planner <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/coworking"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0D9488] text-[#0D9488] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#0D9488] hover:text-white transition-all"
            >
              Join Free Power Hour
            </Link>
          </div>
        </div>
      </section>

      {/* The 34-Minute Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The 34-Minute Philosophy</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            You don't need hours. You need <span className="font-bold text-[#0D9488]">34 focused minutes</span> and 
            the willingness to start. Every tool below is designed to help you maximize your time, 
            build momentum, and create results that compound over weeks, months, and years.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F4F1EC] rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-[#0D9488] mb-2">34</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Minutes Per Day</div>
              <p className="text-gray-500 text-sm mt-2">Invest in yourself daily</p>
            </div>
            <div className="bg-[#F4F1EC] rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-[#0D9488] mb-2">5</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Core Pillars</div>
              <p className="text-gray-500 text-sm mt-2">The Freedom Formula</p>
            </div>
            <div className="bg-[#F4F1EC] rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-[#0D9488] mb-2">1</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Transformation</div>
              <p className="text-gray-500 text-sm mt-2">Yours. Starting now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Your Productivity Arsenal</h2>
          <p className="text-center text-gray-600 text-lg mb-14">Everything you need to work smarter and live bigger.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group relative flex flex-col">
                  {tool.badge && (
                    <div className="absolute top-4 right-4 bg-[#0D9488] text-white px-3 py-1 rounded-full text-xs font-bold z-10">{tool.badge}</div>
                  )}
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <Image 
                      src={tool.image} 
                      alt={tool.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="px-5 py-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-[#0D9488]" />
                      <h3 className="text-lg font-bold text-gray-800">{tool.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.desc}</p>
                    <ul className="text-xs text-gray-500 space-y-1 mb-4">
                      {tool.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#0D9488] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={tool.link} 
                      className="mt-auto text-[#0D9488] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-300"
                    >
                      Explore <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Not Sure Where to Start?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take a quick self-assessment quiz to discover which tools and programs are the perfect fit 
            for where you are right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quizzes"
              className="inline-flex items-center justify-center gap-2 bg-[#0D9488] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#0B7C72] transition-all shadow-lg"
            >
              Take the Quiz <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-bold hover:border-[#0D9488] hover:text-[#0D9488] transition-all"
            >
              Book a Discovery Call
            </Link>
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
