'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import FAQSection from '@/components/FAQSection'
import {
  Briefcase, Mic, Target, Heart, Timer, ChevronRight,
  Users, Dumbbell, BookOpen, Shield, Flame, Star, Mountain,
  Sparkles, Building2, Headphones, Globe, Award, CheckCircle,
  ArrowRight, Calendar, Crown
} from 'lucide-react'

function ServicesJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: 'Keynote Speaking & Emcee', provider: { '@type': 'Person', name: 'Krystalore Crews' }, serviceType: 'Public Speaking', description: 'Dynamic keynote presentations on leadership, resilience, and transformation for corporate events, conferences, and retreats.', url: 'https://krystalore.com/speaker' },
      { '@type': 'Service', name: 'Executive Coaching', provider: { '@type': 'Person', name: 'Krystalore Crews' }, serviceType: 'Executive Coaching', description: 'One-on-one coaching for entrepreneurs and executives ready to break through their limits.', url: 'https://krystalore.com/private' },
      { '@type': 'Service', name: 'Leadership Training', provider: { '@type': 'Person', name: 'Krystalore Crews' }, serviceType: 'Leadership Training', description: 'Corporate leadership development and emotional intelligence training.', url: 'https://krystalore.com/leadership-training' },
      { '@type': 'Service', name: 'Bombshell Boot Camp', provider: { '@type': 'Person', name: 'Krystalore Crews' }, serviceType: 'Fitness Training', description: 'High-energy fitness boot camp combining HIIT, kickboxing, and mindset training.', url: 'https://krystalore.com/bombshell-bootcamp' },
      { '@type': 'Service', name: 'Million Dollar Body Academy', provider: { '@type': 'Person', name: 'Krystalore Crews' }, serviceType: 'Fitness Coaching', description: 'Premium fitness and wellness transformation program.', url: 'https://krystalore.com/million-dollar-body' },
      { '@type': 'Service', name: 'Retreat Experiences', provider: { '@type': 'Person', name: 'Krystalore Crews' }, serviceType: 'Retreat Planning', description: 'Transformative retreats for women, veterans, entrepreneurs, and couples.', url: 'https://krystalore.com/retreat' },
      { '@type': 'Service', name: 'Corporate Wellness', provider: { '@type': 'Person', name: 'Krystalore Crews' }, serviceType: 'Corporate Wellness', description: 'Customized corporate wellness and team development programs.', url: 'https://krystalore.com/corporate-wellness' },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function ServicesPage() {
  return (
    <>
      <ServicesJsonLd />
      <Header />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-end">
          <Image src="/images/go9/keynote.jpg" alt="Krystalore Crews -- Services & Programs" fill className="object-cover" style={{ objectPosition: '50% 20%' }} priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />
          <div className="container mx-auto px-4 relative z-10 pb-12 lg:pb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#34c5c5] mb-4">The Crews Coach</p>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg max-w-3xl">Services & Programs</h1>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl drop-shadow-md">Leadership training, fitness coaching, keynote speaking, retreats, and transformational programs. Everything you need to crews beyond your limits.</p>
            <div className="flex flex-wrap gap-4">
              <a href="/book" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Discovery Call</a>
              <Link href="#programs" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore Programs</Link>
            </div>
          </div>
        </section>

        {/* Quick Nav */}
        <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-6 overflow-x-auto py-4 text-sm font-semibold">
              {['Speaking', 'Coaching', 'Fitness', 'Retreats', 'Corporate', 'Courses', 'Books'].map(s => (
                <a key={s} href={`#${s.toLowerCase()}`} className="whitespace-nowrap text-gray-500 hover:text-[#34c5c5] transition-colors" onClick={e => { e.preventDefault(); document.getElementById(s.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }) }}>{s}</a>
              ))}
            </div>
          </div>
        </nav>

        {/* ===== SPEAKING & KEYNOTES ===== */}
        <section id="speaking" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Mic className="w-8 h-8 text-[#34c5c5]" />
                  <span className="text-sm font-semibold tracking-widest uppercase text-[#34c5c5]">Keynote Speaking & Emcee</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Talks That Move Audiences to Action</h2>
                <p className="text-gray-600 text-lg mb-6">As an experienced public speaker, Krystalore brings energy and passion to every stage. Her talks on personal development, resilience, and empowerment leave a lasting impact. Whether it&apos;s a corporate event, retreat, or conference, she delivers presentations that inspire audiences to achieve greatness.</p>
                <ul className="space-y-3 mb-8">
                  {['Keynote Addresses (30-90 minutes)', 'Corporate Events & Conferences', 'Women\'s Empowerment Gatherings', 'Military & Veteran Events', 'Emcee & Event Host', 'Virtual & Hybrid Presentations'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/speaker" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-3 font-bold hover:scale-105 transition-transform">Book to Speak</Link>
                  <Link href="/speaker#book" className="border-2 border-[#34c5c5] text-[#34c5c5] rounded-full px-8 py-3 font-bold hover:bg-[#34c5c5]/10 transition-colors">Speaker Inquiry Form</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/go9/keynote.jpg" alt="Krystalore keynote speaking" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg mt-8">
                  <Image src="/images/scraped/speaker-stage.jpg" alt="Krystalore on stage" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== EXECUTIVE & PRIVATE COACHING ===== */}
        <section id="coaching" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/go9/coaching.jpg" alt="Private coaching session" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg mt-8">
                  <Image src="/images/scraped/krystalore-event.jpg" alt="Krystalore coaching" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-[#E8A849]" />
                  <span className="text-sm font-semibold tracking-widest uppercase text-[#E8A849]">Executive & Private Coaching</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">One-on-One Transformation</h2>
                <p className="text-gray-600 text-lg mb-6">Tailored coaching for entrepreneurs and executives. Krystalore focuses on leadership development, strategic thinking, and work-life balance, providing the guidance and accountability necessary for professional excellence.</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Private Coaching', desc: 'Experiential 1:1 coaching for leaders ready to transform every area of life.' },
                    { title: 'Entrepreneur Coaching', desc: 'Business growth, scaling strategies, and mindset mastery.' },
                    { title: 'Veteran Coaching', desc: 'Specialized coaching honoring those who served. Mission after service.' },
                    { title: 'Women\'s Empowerment', desc: 'Breaking barriers, building confidence, and creating pathways for women to thrive.' },
                  ].map(c => (
                    <div key={c.title} className="bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-1">{c.title}</h4>
                      <p className="text-sm text-gray-600">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/private" className="bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white rounded-full px-8 py-3 font-bold hover:scale-105 transition-transform">Private Coaching</Link>
                  <Link href="/entrepreneur-coaching" className="border-2 border-[#E8A849] text-[#E8A849] rounded-full px-8 py-3 font-bold hover:bg-[#E8A849]/10 transition-colors">Entrepreneur Coaching</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FITNESS TRAINING ===== */}
        <section id="fitness" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Dumbbell className="w-8 h-8 text-[#34c5c5]" />
                <span className="text-sm font-semibold tracking-widest uppercase text-[#34c5c5]">Fitness Training & Coaching</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Push Your Body. Sharpen Your Mind.</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">As a former NFL Cheerleader and professional belly dancer, Krystalore brings energy and excitement to every session. HIIT, kickboxing, functional training, and the 34-Minute Mindset approach to holistic health.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Bombshell Boot Camp', image: '/images/scraped/fitness-class-1.jpg', desc: 'High-energy group fitness combining HIIT, kickboxing, and strength training. Transform your body and mindset in an empowering community environment.', href: '/bombshell-bootcamp', accent: '#E8A849' },
                { title: 'Million Dollar Body Academy', image: '/images/scraped/section-bg-3-opt.jpg', desc: 'Premium fitness and wellness transformation program. Build the body, mindset, and lifestyle of a champion with Krystalore\'s proven frameworks.', href: '/million-dollar-body', accent: '#34c5c5' },
                { title: 'Beyond Limits Boot Camp', image: '/images/go9/fitness-alt.jpg', desc: 'Live virtual fitness Mon/Wed/Fri with 24/7 replay access. HIIT, kickboxing, and accountability. Join from anywhere in the world.', href: '/bootcamp', accent: '#E8A849' },
              ].map(program => (
                <div key={program.title} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={program.image} alt={program.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{program.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{program.desc}</p>
                    <Link href={program.href} className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all" style={{ color: program.accent }}>
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional fitness offerings */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {[
                { title: '34-Minute Protocol', desc: 'Daily mindset + physical activation for peak performance.', icon: Timer, href: '/courses' },
                { title: 'Six Week Shred', desc: 'Intensive body transformation challenge.', icon: Flame, href: '/six-week-shred' },
                { title: 'Fitness Vault', desc: 'On-demand workout library. Train anytime.', icon: Shield, href: '/fitness' },
                { title: 'HIIT Camp', desc: 'Virtual high-intensity interval training.', icon: Dumbbell, href: '/virtual-hiit-camp' },
              ].map(item => (
                <Link key={item.title} href={item.href} className="group bg-gray-50 rounded-xl p-5 hover:bg-[#34c5c5]/5 hover:shadow-md transition-all">
                  <item.icon className="w-8 h-8 text-[#34c5c5] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INNER CIRCLE ===== */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-8 h-8 text-[#E8A849]" />
                  <span className="text-sm font-semibold tracking-widest uppercase text-[#E8A849]">The Inner Circle</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Exclusive Access. Accelerated Growth.</h2>
                <p className="text-gray-300 text-lg mb-6">The Inner Circle is Krystalore&apos;s premium membership community. Get direct access to group coaching, exclusive content, accountability partnerships, and a network of high-performing women committed to leveling up in every area of life.</p>
                <ul className="space-y-3 mb-8">
                  {['Weekly group coaching calls', 'Exclusive content & resources', 'Accountability partnerships', 'Private community access', 'Priority event registration', 'Direct access to Krystalore'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-gray-300"><Star className="w-4 h-4 text-[#E8A849] flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <Link href="/apply" className="bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform inline-block">Apply for Inner Circle</Link>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/go9/group-sunset.jpg" alt="Inner Circle community" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== RETREATS ===== */}
        <section id="retreats" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mountain className="w-8 h-8 text-[#34c5c5]" />
                <span className="text-sm font-semibold tracking-widest uppercase text-[#34c5c5]">Retreat Experiences</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transform Your Life in Paradise</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">Krystalore is the founder of Revive & Thrive Retreats. These exclusive getaways combine fitness, personal development, and relaxation -- offering the perfect escape for growth and renewal.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Women\'s Retreats', image: '/images/retreat/retreat-group-01.jpg', desc: 'Empowering getaways for women ready to reconnect, recharge, and rise.', href: '/womens-retreats' },
                { title: 'Corporate Retreats', image: '/images/go9/corporate.jpg', desc: 'Custom retreat experiences that build trust, alignment, and high-performance culture.', href: '/corporate-retreat-planning' },
                { title: 'Couples Retreats', image: '/images/retreat/retreat-01.jpg', desc: 'Reconnect with your partner through adventure, wellness, and meaningful shared experiences.', href: '/couples-retreats' },
                { title: 'Veteran Retreats', image: '/images/go9/veteran.jpg', desc: 'Healing retreats honoring service members with wellness, community, and purpose.', href: '/veteran-retreats' },
                { title: 'Gypsy Tours', image: '/images/go9/group-sunset.jpg', desc: 'Curated travel experiences combining adventure, wellness, and transformation.', href: '/gypsy-tours' },
                { title: 'Entrepreneur Retreats', image: '/images/retreat/retreat-05.jpg', desc: 'Strategic planning retreats for business owners ready to scale with clarity.', href: '/entrepreneur-retreats' },
              ].map(retreat => (
                <Link key={retreat.title} href={retreat.href} className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <Image src={retreat.image} alt={retreat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{retreat.title}</h3>
                    <p className="text-gray-200 text-sm">{retreat.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CORPORATE & LEADERSHIP ===== */}
        <section id="corporate" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-[#34c5c5]" />
                  <span className="text-sm font-semibold tracking-widest uppercase text-[#34c5c5]">Corporate & Leadership</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Elevate Your Team&apos;s Performance</h2>
                <p className="text-gray-600 text-lg mb-6">Interactive workshops and training programs designed to foster a culture of leadership that transcends limits. Krystalore provides leaders with the skills to inspire, motivate, and drive excellence within their organizations.</p>
                <div className="space-y-4 mb-8">
                  {[
                    { title: 'Leadership Training', desc: 'Military-tested frameworks for executive development and team building.' },
                    { title: 'Emotional Intelligence', desc: 'EQ workshops that transform team dynamics and organizational culture.' },
                    { title: 'Corporate Wellness', desc: 'Holistic programs integrating fitness, mindset, and stress management.' },
                    { title: 'Team Building', desc: 'Experiential activities that build trust, communication, and alignment.' },
                  ].map(item => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#34c5c5] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/leadership-training" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-3 font-bold hover:scale-105 transition-transform">Leadership Training</Link>
                  <Link href="/corporate-wellness" className="border-2 border-[#34c5c5] text-[#34c5c5] rounded-full px-8 py-3 font-bold hover:bg-[#34c5c5]/10 transition-colors">Corporate Wellness</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/scraped/leadership-workshop.jpg" alt="Leadership workshop" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg mt-8">
                  <Image src="/images/scraped/leadership-event.jpg" alt="Leadership event" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== GROUP COACHING ===== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/go9/group.jpg" alt="Group coaching session" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-[#E8A849]" />
                  <span className="text-sm font-semibold tracking-widest uppercase text-[#E8A849]">Group Coaching</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Grow Together. Rise Together.</h2>
                <p className="text-gray-600 text-lg mb-6">Community-driven coaching programs where like-minded individuals come together to push past limits. Krystalore brings people together and empowers them to crews beyond their limits.</p>
                <ul className="space-y-3 mb-8">
                  {['Small group masterminds', 'Accountability partnerships', 'Live weekly coaching calls', 'Business Boot Camp cohorts', 'Vision Board workshops', 'Coworking Power Hour (free weekly Zoom sessions)'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-[#E8A849] flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/business-bootcamp" className="bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white rounded-full px-8 py-3 font-bold hover:scale-105 transition-transform">Business Boot Camp</Link>
                  <Link href="/coworking" className="border-2 border-[#E8A849] text-[#E8A849] rounded-full px-8 py-3 font-bold hover:bg-[#E8A849]/10 transition-colors">Coworking Sessions</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== COURSES & DIGITAL ===== */}
        <section id="courses" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-[#34c5c5]" />
                <span className="text-sm font-semibold tracking-widest uppercase text-[#34c5c5]">Courses & Digital Programs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learn at Your Own Pace</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">Self-paced and live courses on leadership, emotional intelligence, wellness, and personal development.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Emotional Intelligence Training', icon: Heart, desc: 'Master self-awareness, empathy, and social skills that transform your leadership.', href: '/emotional-intelligence-training' },
                { title: 'Leadership Development', icon: Briefcase, desc: 'Build executive presence, strategic thinking, and authentic leadership capacity.', href: '/leadership-training' },
                { title: 'Vision Board Workshops', icon: Sparkles, desc: 'Clarify your vision and create an actionable plan for your biggest goals.', href: '/vision-board' },
                { title: 'Courses Library', icon: BookOpen, desc: 'Self-paced courses on mindset, fitness, business, and personal development.', href: '/courses' },
                { title: 'Podcast', icon: Headphones, desc: 'Real conversations on healing, leadership, and building a life beyond limits.', href: '/podcasts' },
                { title: 'Books & Planners', icon: BookOpen, desc: 'Amazon best-sellers, the Krystal Clear Life Planner, and the Road to Resilience.', href: '/books' },
              ].map(item => (
                <Link key={item.title} href={item.href} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                  <item.icon className="w-10 h-10 text-[#34c5c5] mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#34c5c5] transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BOOKS ===== */}
        <section id="books" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-8 h-8 text-[#E8A849]" />
                  <span className="text-sm font-semibold tracking-widest uppercase text-[#E8A849]">Books, Blog & Podcast</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Deeper Insights. Actionable Wisdom.</h2>
                <p className="text-gray-600 text-lg mb-6">Explore Krystalore&apos;s books, blog, and podcasts for deeper insights into personal development and wellness. As an Amazon best-selling author and podcast host, she shares experiences and actionable advice to help you achieve your goals and live your best life.</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/books" className="bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white rounded-full px-8 py-3 font-bold hover:scale-105 transition-transform">Browse Books</Link>
                  <Link href="/podcasts" className="border-2 border-[#E8A849] text-[#E8A849] rounded-full px-8 py-3 font-bold hover:bg-[#E8A849]/10 transition-colors">Listen to Podcast</Link>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/scraped/book-resilience-opt.jpg" alt="The Road to Resilience" fill className="object-cover" sizes="(max-width: 768px) 33vw, 15vw" />
                </div>
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/scraped/book-milspouse-opt.jpg" alt="Leave No MilSpouse Behind" fill className="object-cover" sizes="(max-width: 768px) 33vw, 15vw" />
                </div>
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/scraped/book-planner-opt.jpg" alt="Krystal Clear Life Planner" fill className="object-cover" sizes="(max-width: 768px) 33vw, 15vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MORE PROGRAMS GRID ===== */}
        <section id="programs" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">All Programs & Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">From fitness to real estate, nonprofit work to the shop -- everything Krystalore offers in one place.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: 'Fitness', href: '/fitness', image: '/images/go9/fitness.jpg' },
                { title: 'Speaking & Keynotes', href: '/speaker', image: '/images/go9/keynote.jpg' },
                { title: 'Corporate Retreats', href: '/corporate-retreat-planning', image: '/images/go9/corporate.jpg' },
                { title: 'Private Coaching', href: '/private', image: '/images/go9/coaching.jpg' },
                { title: 'Books', href: '/books', image: '/images/go9/planner.jpg' },
                { title: 'Podcasts', href: '/podcasts', image: '/images/go9/hero.jpg' },
                { title: 'Courses', href: '/courses', image: '/images/go9/meditation.webp' },
                { title: 'Veteran Programs', href: '/veteran-coaching', image: '/images/go9/veteran.jpg' },
                { title: 'Gypsy Tours', href: '/gypsy-tours', image: '/images/go9/group-sunset.jpg' },
                { title: 'Beyond Limits Boot Camp', href: '/bootcamp', image: '/images/go9/fitness-alt.jpg' },
                { title: 'Coworking Power Hour', href: '/coworking', image: '/images/go9/coaching.jpg' },
                { title: 'Retreats', href: '/retreat', image: '/images/go9/retreat-costa-rica.jpg' },
                { title: 'Shop', href: '/shop', image: '/images/go9/group-evening.webp' },
                { title: 'Business Boot Camp', href: '/business-bootcamp', image: '/images/go9/keynote.jpg' },
                { title: 'Nonprofit', href: '/nonprofit', image: '/images/go9/community-hands.jpg' },
                { title: 'Bombshell Boot Camp', href: '/bombshell-bootcamp', image: '/images/scraped/fitness-class-1.jpg' },
                { title: 'Million Dollar Body', href: '/million-dollar-body', image: '/images/scraped/section-bg-3-opt.jpg' },
                { title: 'Vision Board', href: '/vision-board', image: '/images/go9/meditation.webp' },
                { title: 'Events', href: '/upcoming-events', image: '/images/go9/speaking-event.jpg' },
                { title: 'Partners', href: '/partners', image: '/images/go9/group.jpg' },
              ].map(item => (
                <Link key={item.title} href={item.href} className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-md">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CREDENTIALS ===== */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Krystalore</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                '22-year Air Force veteran & military spouse',
                'Amazon Best-Selling Author (3 books)',
                'Certified Emotional Intelligence Coach & Trainer',
                'Certified Somatic Healer',
                '27x Marathon finisher',
                'Former NFL Cheerleader',
                'Cancer survivor & resilience expert',
                'International Retreat Leader',
                'CEO of Crews Beyond Limits Consulting',
                'Founder of Revive & Thrive Retreats',
              ].map(cred => (
                <div key={cred} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <Award className="w-5 h-5 text-[#34c5c5] flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Go Beyond Your Limits?</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">Whether you need a keynote speaker, executive coach, fitness trainer, or retreat leader -- Krystalore has a program for you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book" className="bg-white text-[#34c5c5] font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Book a Discovery Call</a>
              <Link href="/contact" className="bg-[#E8A849] text-white font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Contact Krystalore</Link>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
              <Link href="/speaker" className="hover:text-white">Speaking</Link>
              <Link href="/private" className="hover:text-white">Private Coaching</Link>
              <Link href="/retreat" className="hover:text-white">Retreats</Link>
              <Link href="/bootcamp" className="hover:text-white">Fitness</Link>
              <Link href="/leadership-training" className="hover:text-white">Leadership</Link>
              <Link href="/books" className="hover:text-white">Books</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
