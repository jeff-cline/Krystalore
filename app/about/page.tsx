'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  Shield, Heart, Dumbbell, Award, BookOpen, Mic,
  Target, Users, Star, ChevronRight, Flame, Brain,
  Sparkles, Eye, Compass, Lightbulb, HandHeart, Puzzle,
  Download, Calendar, MessageCircle
} from 'lucide-react'

function AboutJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Krystalore Crews',
    jobTitle: 'CEO & Executive Coach',
    description: '22-year USAF Veteran, former NFL Cheerleader, 27-time Marathoner, 50-mile Ultramarathoner, autoimmune warrior, CEO of Crews Beyond Limits Consulting.',
    url: 'https://krystalore.com/about',
    email: 'krystalore@thecrewscoach.com',
    telephone: '+1-716-390-6727',
    worksFor: {
      '@type': 'Organization',
      name: 'Crews Beyond Limits Consulting',
      url: 'https://krystalore.com',
    },
    knowsAbout: ['Executive Coaching', 'Leadership Development', 'Somatic Coaching', 'Emotional Intelligence', 'Fitness Training', 'Public Speaking', 'Wellness', 'Temperament Consulting'],
    alumniOf: { '@type': 'Organization', name: 'United States Air Force' },
    award: ['22-Year USAF Veteran', '27-Time Marathoner', '50-Mile Ultramarathoner', 'Former NFL Cheerleader'],
    sameAs: [
      'https://www.facebook.com/krystalore/',
      'https://www.instagram.com/thecrewscoach/',
      'https://www.linkedin.com/in/krystalore-crews/',
      'https://www.youtube.com/user/krystalore',
      'https://www.tiktok.com/@thecrewscoach',
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-[#34c5c5]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">About</span>
          </nav>
        </div>

        {/* Hero — Tony Robbins style */}
        <section className="relative overflow-hidden min-h-[50vh] lg:min-h-[60vh] flex items-end">
          <Image 
            src="/images/go9/speaking-headshot.jpg" 
            alt="Krystalore Crews speaking at a leadership event" 
            fill 
            className="object-cover" 
            style={{ objectPosition: '50% 25%' }}
            priority
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 w-full">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[#E8A849] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" /> Veteran · Leader · Coach · People Strategist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-lg max-w-3xl">
              Meet <span className="text-[#E8A849]">Krystalore Crews</span>
            </h1>
            <p className="text-lg text-gray-100 max-w-xl drop-shadow-md">
              Accelerate Change — Don&apos;t just Leave a Legacy, Live it.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a 
                href="/book" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-6 py-3 font-bold hover:scale-105 transition-transform text-sm"
              >
                Book a Call
              </a>
              <Link 
                href="/speaker" 
                className="border-2 border-white/60 text-white rounded-full px-6 py-3 font-bold hover:bg-white/10 transition-colors text-sm"
              >
                Book Me to Speak
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 1: MY STORY / BACKGROUND                          */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-[#E8A849] text-sm font-bold uppercase tracking-wider mb-4">
                  <Compass className="w-4 h-4" /> My Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  From Wheelchair to <span className="text-[#0D9488]">27 Marathons</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    My journey started in a time of transitions. After serving in the <strong className="text-gray-900">United States Air Force &ndash; Air National Guard since 2002</strong>, I resigned from my full-time career, accepting a promotion as a Human Resource Advisor, Diversity and Inclusion Consultant, Certified Coach, Emotional Intelligence Facilitator, and Temperament Instructor.
                  </p>
                  <p>
                    I moved from Buffalo, New York &mdash; where all my friends and family were &mdash; to Harrisburg, PA, where my husband was stationed with the United States Army. I attempted to transition to civilian life, applying for position after position, but kept getting rejected. Feeling frustrated and isolated, I began to doubt myself.
                  </p>
                  <p>
                    In 2017, I hired a coach who specialized in transitioning Veterans. She challenged and empowered me to find my true passion. On <strong className="text-gray-900">November 1, 2017</strong>, I made the decision to start my own coaching business.
                  </p>
                  <p>
                    I am no stranger to the effects of stress and adversity on the mind, body, and spirit. In <strong className="text-gray-900">2005, I was confined to a wheelchair</strong>. I went from being unable to walk to running <strong className="text-gray-900">27 marathons and a 50-mile ultramarathon</strong> &mdash; without the aid of medication.
                  </p>
                  <p>
                    I have survived <strong className="text-gray-900">autoimmune challenges</strong> and the devastating impact of <strong className="text-gray-900">betrayal</strong> &mdash; experiences that forged my understanding of resilience at the deepest level. Not resilience as a buzzword, but as lived experience: the mental fortitude to keep going, the strength to pivot, the courage to rebuild your identity from the ground up, and the fire to move beyond every limit and bust through every barrier placed in front of you.
                  </p>
                  <p>
                    As a former <strong className="text-gray-900">NFL Cheerleader</strong> and professional Belly Dancer, I know how to bring energy and excitement to any room. I focus on being a role model and community builder, bringing like-minded people together and empowering them to <em>crews beyond their limits</em>.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                {/* Photo */}
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/go9/coaching.jpg" alt="Krystalore Crews coaching session" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                {/* Milestone cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, title: '22-Year USAF Veteran', color: '#0D9488' },
                    { icon: Star, title: 'Former NFL Cheerleader', color: '#E8A849' },
                    { icon: Dumbbell, title: '27-Time Marathoner', color: '#F97316' },
                    { icon: Flame, title: '50-Mile Ultramarathoner', color: '#E91E63' },
                    { icon: Heart, title: 'Autoimmune Warrior', color: '#7C3AED' },
                    { icon: Award, title: 'CEO, Crews Beyond Limits', color: '#0D9488' },
                  ].map((m) => (
                    <div key={m.title} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <m.icon className="w-6 h-6 flex-shrink-0" style={{ color: m.color }} />
                      <span className="text-sm font-semibold text-gray-900">{m.title}</span>
                    </div>
                  ))}
                </div>
                {/* Second photo */}
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/go9/retreat-group.jpg" alt="Krystalore Crews with retreat group" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 2: THE FREEDOM FORMULA                            */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-[#E8A849] text-sm font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" /> The System
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The <span className="text-[#E8A849]">Freedom Formula</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You don&apos;t need another strategy &mdash; you need a foundation that actually sustains the life you&apos;re building. The Freedom Formula is my signature framework designed to help high performers realign, rebuild, and rise without burnout.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { letter: 'C', title: 'Core', desc: 'Get back to your foundation. Know who you are at the deepest level.', color: '#0D9488' },
                { letter: 'C', title: 'Confidence', desc: 'Build unshakable belief in yourself through action and evidence.', color: '#E8A849' },
                { letter: 'C', title: 'Consistency', desc: 'Small movements lead to huge results. Show up every single day.', color: '#F97316' },
                { letter: 'C', title: 'Community', desc: "You weren't meant to do this alone. Find your crew.", color: '#7C3AED' },
                { letter: 'C', title: 'Celebration', desc: 'Honor the journey. Celebrate every step, not just the finish line.', color: '#E91E63' },
              ].map((pillar) => (
                <div key={pillar.title} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black"
                    style={{ backgroundColor: pillar.color }}
                  >
                    {pillar.letter}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-400">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Rooted in the <strong className="text-white">5 C&apos;s</strong>, this approach brings you back to what truly matters so you can create success that <em>feels</em> as good as it looks. Whether you&apos;re navigating change, recovering from burnout, building your business, or stepping onto bigger stages &mdash; the Freedom Formula guides you to take a holistic approach: mentally, physically, and emotionally.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/services" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SECTION 3: SCIENCE-BACKED SOMATIC APPROACH                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-flex items-center gap-2 text-[#0D9488] text-sm font-bold uppercase tracking-wider mb-4">
                  <Brain className="w-4 h-4" /> The Approach
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Science-Backed <span className="text-[#0D9488]">Somatic Approach</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  My work is grounded in evidence-based modalities that address the whole person &mdash; mind, body, and nervous system. As a certified practitioner and people strategist, I bring a multidisciplinary foundation to every engagement.
                </p>
                <p className="text-gray-600">
                  What makes my approach unique is the integration of all these modalities into a cohesive system. Leadership without emotional intelligence is hollow. Coaching without somatic awareness misses the body&apos;s wisdom. Strategy without understanding temperament fails to connect. I bring it all together &mdash; so the transformation is real, lasting, and complete.
                </p>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/go9/speaking-event.jpg" alt="Krystalore Crews speaking at an event" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Somatic Coaching',
                  desc: 'Body-centered approach to healing that recognizes the deep connection between mind and body. Through guided movement, breathwork, and mindfulness, somatic healing helps you process emotions that talk therapy alone may not reach.',
                  color: 'text-[#0D9488]',
                  bg: 'from-[#0D9488]/5 to-[#0D9488]/10',
                },
                {
                  icon: Eye,
                  title: 'Compassionate Inquiry',
                  desc: 'A gentle, trauma-informed approach developed by Dr. Gabor Mate that uncovers unconscious beliefs, body memories, and emotional patterns driving behavior. Understand why you self-sabotage, avoid visibility, or repeat destructive patterns.',
                  color: 'text-[#7C3AED]',
                  bg: 'from-[#7C3AED]/5 to-[#7C3AED]/10',
                },
                {
                  icon: Heart,
                  title: 'Emotional Intelligence',
                  desc: 'As a certified EQ Facilitator, I help leaders develop self-awareness, self-regulation, motivation, empathy, and social skills -- the competencies that separate good leaders from transformational ones.',
                  color: 'text-[#E8A849]',
                  bg: 'from-[#E8A849]/5 to-[#E8A849]/10',
                },
                {
                  icon: Target,
                  title: 'Leadership Consulting',
                  desc: 'Programs for the workplace that help teams develop communication skills, understand personality dynamics, biases, and value sets. Exercises that generate a healthy workplace and increase retention and efficiency.',
                  color: 'text-[#F97316]',
                  bg: 'from-[#F97316]/5 to-[#F97316]/10',
                },
                {
                  icon: Puzzle,
                  title: 'Temperament & Personality',
                  desc: 'As a certified Temperament Instructor and people strategist, I help individuals and teams understand how they interpret and react to information -- enabling more effective communication and deeper collaboration.',
                  color: 'text-[#E91E63]',
                  bg: 'from-[#E91E63]/5 to-[#E91E63]/10',
                },
                {
                  icon: Dumbbell,
                  title: 'Certified Personal Trainer & Holistic Wellness',
                  desc: 'Certified Personal Trainer and Group Fitness Instructor with a holistic wellness approach. From HIIT and kickboxing to the 34-Minute Protocol, I integrate physical training with mental and emotional well-being.',
                  color: 'text-[#0D9488]',
                  bg: 'from-[#0D9488]/5 to-[#0D9488]/10',
                },
              ].map((modality) => (
                <div key={modality.title} className={`bg-gradient-to-br ${modality.bg} rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow`}>
                  <modality.icon className={`w-10 h-10 ${modality.color} mb-4`} />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{modality.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{modality.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speaker / Book Me CTA */}
        <section className="py-16 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Mic className="w-12 h-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Elevate Your Event</h2>
            <p className="text-xl opacity-90 mb-4 max-w-2xl mx-auto">
              Krystalore is a powerhouse in personal development, emotional intelligence, leadership, health and wellness. Her talks are a fusion of motivation, education, and empowerment.
            </p>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re hosting a corporate conference, leadership seminar, wellness retreat, or community event &mdash; Krystalore&apos;s dynamic presence will leave a lasting impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/speaker" className="bg-white text-[#E8A849] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" /> Book Me to Speak / Emcee
              </Link>
              <Link href="/workshops" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Book a Workshop
              </Link>
              <a 
                href="/book" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                Book a Breakthrough Call
              </a>
            </div>
          </div>
        </section>

        {/* Cross-links */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Explore the Crews Beyond Limits Ecosystem</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: 'Executive Coaching', href: '/entrepreneur-coaching', desc: 'One-on-one leadership transformation' },
                { icon: BookOpen, title: 'Books & Resources', href: '/books', desc: 'Road to Resilience, Krystal Clear Life & more' },
                { icon: Users, title: 'Courses & Programs', href: '/courses', desc: 'Self-paced learning for growth' },
                { icon: Mic, title: 'Krystal Clear Life Podcast', href: '/podcasts', desc: 'Bold conversations on leadership' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#34c5c5] hover:shadow-lg transition-all">
                  <item.icon className="w-8 h-8 text-[#34c5c5] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#34c5c5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#37a6a6] transition-colors">
                Get in Touch <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
