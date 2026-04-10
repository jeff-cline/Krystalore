import { Metadata } from 'next'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'
import GrowScaleCTA from '@/components/GrowScaleCTA'
import Link from 'next/link'
import {
  Play, Users, Award, BookOpen, Headphones, Dumbbell, Video,
  Clock, Flame, Heart, Star, Mic, ShoppingBag, Globe, Sparkles,
  ArrowRight, CheckCircle, Calendar, Download, Building2, Shield,
  Mountain, Brain, TreePine, Quote, ChevronDown, ChevronRight,
  Zap, Target, Trophy, HandHeart, Megaphone, Palette, Coffee
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Krystalore Crews | Redefine What\'s Possible — Mind, Body, and Beyond',
  description: 'Build a life you don\'t need to escape from. Executive coaching, somatic healing, fitness transformation, retreats, speaking, and leadership development with Krystalore Crews.',
  keywords: 'Krystalore Crews, executive coaching, somatic healing, leadership transformation, fitness coaching, personal development, life coaching, veteran coaching, military spouse, corporate wellness, retreats, Beyond Limits, keynote speaker',
  openGraph: {
    title: "Krystalore Crews | Redefine What's Possible — Mind, Body, and Beyond",
    description: "Build a life you don't need to escape from. Executive coaching, somatic healing, fitness transformation, retreats, and leadership development.",
    url: "https://executive.krystalore.com/",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krystalore Crews | Redefine What's Possible — Mind, Body, and Beyond",
    description: "Build a life you don't need to escape from. Executive coaching, somatic healing, fitness transformation, retreats, and leadership development.",
  },
}

function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Crews Beyond Limits Consulting',
    alternateName: 'Krystalore Crews',
    url: 'https://executive.krystalore.com',
    logo: 'https://executive.krystalore.com/images/krystalore-crews-logo.png',
    description: 'Executive coaching, somatic healing, fitness transformation, retreats, corporate wellness, and leadership development by Krystalore Crews.',
    founder: {
      '@type': 'Person',
      name: 'Krystalore Crews',
      jobTitle: 'CEO & Founder',
      description: 'Amazon Best-Selling Author, Keynote Speaker, Certified Life & Somatic Coach, Corporate Wellness Consultant',
    },
    sameAs: [
      'https://www.facebook.com/krystalore/',
      'https://www.instagram.com/thecrewscoach/',
      'https://www.tiktok.com/@thecrewscoach',
      'https://www.linkedin.com/in/krystalore-crews/',
      'https://www.youtube.com/user/krystalore',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://executive.krystalore.com/contact',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Executive Coaching' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Somatic Healing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Wellness' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Keynote Speaking' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leadership Retreats' } },
      ],
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FAQPageJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is somatic therapy and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Somatic therapy is a body-centered approach to healing that recognizes the connection between the mind and body. It works by helping you tune into physical sensations, release stored tension and trauma, and build a deeper awareness of how your body holds stress. Through guided movement, breathwork, and mindfulness, somatic healing helps you process emotions that talk therapy alone may not reach.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who are Krystalore Crews\' programs designed for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our programs serve veterans, first responders, and military spouses; women in transition; corporate teams and leaders; entrepreneurs and business owners; authors, speakers, and creators; and former NFL cheerleaders. We meet you where you are and help you build a life you don\'t need to escape from.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Beyond Limits Bootcamp?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Beyond Limits Bootcamp is a high-energy fitness program featuring HIIT, kickboxing, and functional training. Available both live and on-demand through our video vault, it\'s designed to push your physical limits while building mental resilience and discipline.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book a speaking engagement or corporate wellness workshop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book Krystalore for keynotes, workshops, emcee work, or corporate wellness programs by visiting our contact page or reaching out directly. We customize every engagement to fit your organization\'s unique needs and goals.',
        },
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function Home() {
  return (
    <MainLayout>
      <OrganizationJsonLd />
      <FAQPageJsonLd />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative py-32 md:py-40 px-4 overflow-hidden min-h-[87.5vh] flex items-center">
        {/* Hero Background Image */}
        <Image
          src="/images/krystalore/cropped-tmpq45x_5ac-1.webp"
          alt="Krystalore Crews - redefine what's possible in mind, body, and beyond"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-teal-900/60" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-teal font-semibold tracking-widest uppercase text-sm mb-4">Coaching · Healing · Transformation</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Redefine What&apos;s Possible—<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">Mind, Body, and Beyond</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop surviving and start thriving. We help you build a life you don&apos;t need to escape from—through 
            executive coaching, somatic healing, fitness, and community that meets you exactly where you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center justify-center gap-2">
              Book a Free Call <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/services" className="btn-teal text-lg px-10 py-4 inline-flex items-center justify-center gap-2">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== HIGHLIGHT / QUOTE SECTION ==================== */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden shadow-xl">
            {/* Left - Photo */}
            <div className="relative min-h-[500px] lg:min-h-[600px]">
              <Image
                src="/images/krystalore/wny-heroes-speaking.png"
                alt="Krystalore Crews speaking at WNY Heroes event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Right - Quote */}
            <div className="bg-white flex flex-col justify-center p-10 md:p-14">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-gray-800 leading-snug mb-8">
                &ldquo;Success without fulfillment isn&apos;t success, it&apos;s exhaustion in disguise. True leadership begins when you master your emotions and energy, not just your schedule.&rdquo;
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Beyond Limits was built to prove that achievement and alignment can coexist. When you strengthen your mindset, move your body with purpose, and lead with authenticity, you create a life that feels as good as it looks. This is the mission—to help high performers build lives they no longer need to escape from.
              </p>
              <p className="font-script text-2xl text-gray-800 italic">Krystalore Crews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MISSION / ABOUT SECTION ==================== */}
      <section className="py-20 px-4" id="mission">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Meet Krystalore</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming Lives Through <span className="text-primary">Purpose & Passion</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Amazon Best-Selling Author, Keynote Speaker, Certified Life & Somatic Coach, and Corporate Wellness 
                Consultant—Krystalore Crews helps people build lives they don&apos;t need to escape from. With a unique 
                blend of military discipline, somatic wisdom, and real-world business experience, she meets you 
                exactly where you are.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Krystalore <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/krystalore/cropped-cropped-SAM_3131-scaled-1.jpg"
                    alt="Krystalore Crews - executive coach and leadership transformation expert"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="eager"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/krystalore/cropped-cropped-costa-rica-womens-wellness-retreat-scaled-1.jpg"
                    alt="Womens somatic healing retreat in Costa Rica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg"
                    alt="Krystalore Crews healthy habits and fitness coaching"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROGRAMS SECTION ==================== */}
      <section className="py-20 px-4 bg-light-bg" id="programs">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold uppercase tracking-wider text-sm mb-2">Our Signature Programs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Transformational Experiences, <span className="text-primary">Your Way</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From high-energy fitness to deep somatic healing—find the program that fits your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: 'colibri-image-675.png', alt: '34-Minute Performance Protocol by Krystalore Crews', icon: Clock, title: '34-Minute Performance Protocol', desc: 'A focused, science-backed daily routine designed to maximize your performance in just 34 minutes. No fluff—pure transformation.', link: '/vault', linkText: 'Learn More', color: 'text-primary' },
              { img: 'colibri-image-676.png', alt: 'Monday Motivation LIVE with Krystalore Crews', icon: Play, title: 'Monday Motivation LIVE', desc: 'Start every week with intention. Join us live for mindset shifts, accountability, and the energy to crush your week.', link: '/go-live', linkText: 'Join Live', color: 'text-teal' },
              { img: 'colibri-image-677.png', alt: 'Freedom Friday LIVE weekly celebration and mindset reset', icon: Sparkles, title: 'Freedom Friday LIVE', desc: 'End the week celebrating wins, releasing what doesn\'t serve you, and stepping into the weekend with freedom and clarity.', link: '/go-live', linkText: 'Tune In', color: 'text-coral' },
              { img: 'colibri-image-160.png', alt: 'Beyond Limits Power Hour intensive coaching session', icon: Zap, title: 'Beyond Limits Power Hour', desc: 'An intensive hour of coaching, strategy, and breakthroughs. Bring your biggest challenges—leave with your next move.', link: '/services', linkText: 'Reserve Spot', color: 'text-blue' },
              { img: 'colibri-image-126.png', alt: 'Beyond Limits Bootcamp HIIT kickboxing functional fitness', icon: Dumbbell, title: 'Beyond Limits Bootcamp', desc: 'HIIT, kickboxing, and functional fitness designed to push your body and sharpen your mind. Available live and on-demand.', link: '/bootcamp', linkText: 'Join Bootcamp', color: 'text-primary' },
              { img: 'colibri-image-32.png', alt: 'Beyond Limits THRIVE Network free community', icon: Users, title: 'Beyond Limits THRIVE Network', desc: 'Our free community where transformation begins. Connect with like-minded people, access resources, and find your tribe.', link: '/inner-circle', linkText: 'Join Free', color: 'text-teal', free: true },
            ].map(({ img, alt, icon: Icon, title, desc, link, linkText, color, free }, i) => (
              <div key={i} className={`card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${free ? 'border-2 border-teal/20' : ''}`}>
                <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <Image
                    src={`/images/krystalore/${img}`}
                    alt={alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 ${color === 'text-primary' ? 'bg-primary/10' : color === 'text-teal' ? 'bg-teal/10' : color === 'text-coral' ? 'bg-coral/10' : 'bg-blue/10'} rounded-lg`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{desc}</p>
                {free && <span className="inline-block bg-teal/10 text-teal text-xs font-bold px-3 py-1 rounded-full mb-3">FREE TO JOIN</span>}
                <br />
                <Link href={link} className={`${color} font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  {linkText} <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SOMATIC HEALING SECTION ==================== */}
      <section className="py-20 px-4 relative" id="somatic">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Explanation */}
            <div>
              <p className="text-coral font-semibold uppercase tracking-wider text-sm mb-2">Somatic Healing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Body Keeps the Score. <span className="text-coral">Let&apos;s Help It Let Go.</span>
              </h2>

              {/* Somatic Hero Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src="/images/krystalore/cropped-LowResolution-172.jpg"
                  alt="Somatic healing and body-centered therapy with Krystalore Crews"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Somatic therapy is a body-centered approach to healing that recognizes the deep connection 
                between mind and body. It helps you tune into physical sensations, release stored tension 
                and trauma, and build a deeper awareness of how your body holds stress. Through guided movement, 
                breathwork, and mindfulness, somatic healing helps you process emotions that talk therapy alone 
                may not reach.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">5 Signs It&apos;s Time to Reconnect</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'You feel disconnected from your body or emotions',
                  'Chronic tension, pain, or fatigue with no clear medical cause',
                  'You\'re stuck in fight-or-flight mode and can\'t relax',
                  'Past trauma still affects your daily life and relationships',
                  'Traditional talk therapy hasn\'t fully resolved your struggles',
                ].map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-coral mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>

              <Link href="/services" className="btn-primary inline-flex items-center gap-2">
                Explore Somatic Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right - Offerings */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Somatic Offerings</h3>
              {[
                { icon: Heart, title: 'Movement: Healing in Motion', desc: 'Guided movement practices that help release stored tension and reconnect you with your body\'s wisdom.', color: 'text-coral', img: 'colibri-image-34.png', alt: 'Somatic movement healing in motion practice' },
                { icon: Brain, title: 'Compassionate Inquiry', desc: 'A gentle, trauma-informed approach to uncovering the root causes of emotional and physical patterns.', color: 'text-blue', img: 'colibri-image-166.png', alt: 'Compassionate inquiry trauma-informed healing' },
                { icon: TreePine, title: 'Mindfulness Integration', desc: 'Present-moment awareness practices that build resilience and emotional regulation.', color: 'text-sage', img: 'colibri-image-169.png', alt: 'Mindfulness integration and present-moment awareness' },
                { icon: Mountain, title: 'Retreats: Immersive Healing', desc: 'Immersive retreat experiences designed for deep somatic work in transformational settings.', color: 'text-teal', img: 'colibri-image-33.png', alt: 'Immersive somatic healing retreats' },
              ].map(({ icon: Icon, title, desc, color, img, alt }, i) => (
                <div key={i} className="card-light p-5 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                    <Image
                      src={`/images/krystalore/${img}`}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`h-5 w-5 ${color} flex-shrink-0`} />
                      <h4 className="font-bold text-gray-900">{title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-teal/5 to-coral/5 rounded-xl p-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-2">Integration Through Guidance & Community</h4>
                <p className="text-gray-600 text-sm">
                  Healing doesn&apos;t happen in isolation. Our approach combines one-on-one guidance with 
                  community support, ensuring your transformation is sustained and supported long after 
                  each session ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VIDEO / CONTENT PREVIEWS ==================== */}
      <section className="py-20 px-4 bg-gray-900" id="content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Featured Content</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Motivation That <span className="text-primary">Moves</span> You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Monday Motivation LIVE',
                subtitle: 'Weekly Highlight',
                desc: 'Start your week with fire. Mindset, motivation, and real talk to push you forward.',
                icon: Play,
                img: 'colibri-image-66.png',
                alt: 'Monday Motivation LIVE with Krystalore Crews weekly highlight',
              },
              {
                title: 'Most People Quit Right Before It Gets Good',
                subtitle: 'Mindset Shift',
                desc: 'The breakthrough is closer than you think. Don\'t quit now—the best chapter is next.',
                icon: Flame,
                img: 'colibri-image-464.png',
                alt: 'Mindset shift content - never quit before the breakthrough',
              },
              {
                title: 'What Does All In Look Like?',
                subtitle: 'Going Deeper',
                desc: 'Going all in isn\'t about burning out—it\'s about alignment, focus, and relentless intentionality.',
                icon: Target,
                img: 'cropped-tmpq45x_5ac-2.webp',
                alt: 'Going all in with purpose alignment and intentionality',
              },
            ].map(({ title, subtitle, desc, icon: Icon, img, alt }, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-colors group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={`/images/krystalore/${img}`}
                    alt={alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 bg-black/30 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">{subtitle}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/vault" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              <Play className="h-5 w-5" /> Watch Free Session
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal to-teal-700">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-1">500+</div>
              <div className="text-teal-100 text-sm">Successful Therapy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-1">89%</div>
              <div className="text-teal-100 text-sm">Anxiety Case Improvement</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-1">200+</div>
              <div className="text-teal-100 text-sm">Family Reconciliations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-1">900+</div>
              <div className="text-teal-100 text-sm">Videos in the Vault</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BLOG SECTION ==================== */}
      <section className="py-20 px-4 bg-light-bg" id="blog">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sage font-semibold uppercase tracking-wider text-sm mb-2">The Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wake Up. Rise Up. <span className="text-sage">Level Up.</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Insights on leadership, resilience, somatic healing, and building a life of purpose. 
            New posts weekly from Krystalore and the Beyond Limits community.
          </p>

          {/* Featured Blog Post */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md max-w-lg mx-auto mb-8 hover:shadow-lg transition-shadow">
            <div className="relative h-72">
              <Image
                src="/images/krystalore/strong-sexy-leg-workouts-at-home.png"
                alt="Sculpted, sexy, and strong leg workouts at home"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Featured Post</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strong, Sexy Leg Workouts at Home</h3>
              <p className="text-gray-600 text-sm">Sculpt and strengthen your legs with these effective at-home workouts designed for all fitness levels.</p>
            </div>
          </div>

          <Link href="https://krystalorecrews.com/blog" className="btn-primary inline-flex items-center gap-2">
            Read the Blog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ==================== PUBLISHING / BOOKS SECTION ==================== */}
      <section className="py-20 px-4" id="books">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Published Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Books That <span className="text-primary">Transform</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Amazon Best-Selling Author Krystalore Crews brings wisdom from the frontlines of transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Krystal Clear Life Planner', desc: 'The ultimate life organization system for high-performers who want clarity, focus, and follow-through.', color: 'bg-teal/10 text-teal' },
              { title: 'Road to Resilience', desc: 'A raw, real guide to bouncing back stronger—born from personal experience and professional expertise.', color: 'bg-primary/10 text-primary' },
              { title: "Men's Tactical Life Planner", desc: 'Purpose-built for men who want structure, accountability, and a tactical approach to life mastery.', color: 'bg-gray-900/10 text-gray-900' },
              { title: 'Leave No Milspouse Behind', desc: 'A lifeline for military spouses navigating the unique challenges of service life with strength and grace.', color: 'bg-coral/10 text-coral' },
              { title: 'Is Manifesting Bullshit? 2.0', desc: 'The no-BS guide to manifestation that cuts through the noise and gives you what actually works.', color: 'bg-blue/10 text-blue' },
            ].map(({ title, desc, color }, i) => (
              <div key={i} className="card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${color}`}>
                  <BookOpen className="h-3 w-3 inline mr-1" />BOOK
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/books" className="btn-teal inline-flex items-center gap-2">
              Browse All Books <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FREEDOM FORMULA DOWNLOADS ==================== */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-900 to-teal-900/30" id="freedom-formula">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Free Resources</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Freedom Formula <span className="text-primary">Downloads</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Five pillars. Five free guides. Your roadmap to lasting transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { pillar: 'Core', title: 'Unshakable You', icon: Shield, color: 'text-primary border-primary/30' },
              { pillar: 'Confidence', title: 'The Courage Code', icon: Flame, color: 'text-coral border-coral/30' },
              { pillar: 'Consistency', title: 'The Momentum Map', icon: Target, color: 'text-teal border-teal/30' },
              { pillar: 'Community', title: 'The Connection Code', icon: Users, color: 'text-blue border-blue/30' },
              { pillar: 'Celebration', title: 'The Joy Journal', icon: Sparkles, color: 'text-sage border-sage/30' },
            ].map(({ pillar, title, icon: Icon, color }, i) => (
              <div key={i} className={`bg-gray-800/50 border rounded-xl p-5 text-center hover:bg-gray-800 transition-colors ${color.split(' ')[1]}`}>
                <Icon className={`h-8 w-8 mx-auto mb-3 ${color.split(' ')[0]}`} />
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{pillar}</p>
                <h3 className="text-white font-bold text-sm">{title}</h3>
                <Download className="h-4 w-4 mx-auto mt-3 text-gray-500" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/vault" className="btn-primary inline-flex items-center gap-2">
              <Download className="h-4 w-4" /> Download Free Guides
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== CORPORATE WELLNESS & LEADERSHIP ==================== */}
      <section className="py-20 px-4" id="corporate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold uppercase tracking-wider text-sm mb-2">For Organizations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Corporate Wellness & <span className="text-teal">Leadership Solutions</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Elevate your team&apos;s performance, resilience, and well-being with customized programs 
              designed for the modern workplace.
            </p>
          </div>

          {/* Corporate Hero Images */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/krystalore/cropped-SAM_3454-scaled-2.jpg"
                alt="Leadership retreats with Krystalore Crews"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Leadership Retreats</p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/krystalore/cropped-cropped-SAM_3152-scaled-1.jpg"
                alt="Corporate wellness and team development workshops"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Corporate Wellness</p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/krystalore/cropped-KrystalCrews-145-scaled-1.jpg"
                alt="Krystalore Crews keynote speaking and corporate events"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Keynote Speaking</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Megaphone, title: 'Lead Beyond Limits Speaking & Keynotes', desc: 'Powerful keynotes that ignite leadership transformation and inspire lasting change.', color: 'text-primary' },
              { icon: Brain, title: 'EQ & Wellness Workshops', desc: 'Interactive workshops on emotional intelligence, stress management, and peak performance.', color: 'text-teal' },
              { icon: Shield, title: 'Sponsor a Veteran Partnership', desc: 'Partner with us to support veteran transition, wellness, and leadership development.', color: 'text-coral' },
              { icon: Dumbbell, title: 'Performance in Motion Corporate Fitness', desc: 'On-site and virtual fitness programs that energize teams and boost productivity.', color: 'text-primary' },
              { icon: Users, title: 'Team Dynamics & Leadership Retreats', desc: 'Off-site experiences that build trust, alignment, and high-performance culture.', color: 'text-teal' },
              { icon: Palette, title: 'Customized Corporate Solutions', desc: 'Fully tailored programs designed around your organization\'s unique needs and goals.', color: 'text-blue' },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <div key={i} className="card-light p-6 hover:shadow-lg transition-shadow group">
                <Icon className={`h-8 w-8 ${color} mb-4`} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="btn-teal inline-flex items-center gap-2 text-lg px-8 py-4">
              <Building2 className="h-5 w-5" /> Request Corporate Info
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 px-4 bg-light-bg" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-coral font-semibold uppercase tracking-wider text-sm mb-2">Client Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Real People. <span className="text-coral">Real Transformation.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Delcey',
                quote: 'Krystalore helped me see that I was carrying years of trauma in my body. Through somatic work, I finally found the relief that talk therapy alone couldn\'t give me. I feel like a completely different person—more grounded, more present, more alive.',
              },
              {
                name: 'Lynn',
                quote: 'The Beyond Limits community changed my life. I came in looking for fitness and left with a whole new perspective on leadership, relationships, and what it means to truly thrive. Krystalore is the real deal.',
              },
              {
                name: 'Diana',
                quote: 'As a military spouse, I felt invisible for years. Krystalore\'s coaching gave me my voice back. Her programs are thoughtful, powerful, and designed for people who are ready to stop playing small.',
              },
            ].map(({ name, quote }, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal to-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{name}</p>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-current" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRESS / MEDIA ==================== */}
      <section className="py-20 px-4" id="media">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue font-semibold uppercase tracking-wider text-sm mb-2">As Seen In</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Krystalore <span className="text-blue">Speaks</span>
            </h2>
          </div>

          {/* Press Photos */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/krystalore/LowResolution-172.jpg"
                alt="Krystalore Crews speaking at a leadership and wellness event"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
                loading="lazy"
              />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/krystalore/REM08628.jpg"
                alt="Krystalore Crews press and media professional photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
                loading="lazy"
              />
            </div>
          </div>

          {/* Media Mentions */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {['FORCE Magazine', 'Amazon Best-Selling Author', 'NAWBO', 'Breakfast with Champions'].map((name, i) => (
              <div key={i} className="bg-gray-50 px-6 py-3 rounded-full text-gray-700 font-semibold text-sm border border-gray-200">
                <Award className="h-4 w-4 inline mr-2 text-primary" />{name}
              </div>
            ))}
          </div>

          {/* Podcasts */}
          <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Featured Podcasts</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Women Entrepreneurs PR',
              'Service to Success',
              'Krystal Clear Life Podcast',
              'Veterans Podcast',
            ].map((podcast, i) => (
              <div key={i} className="card-light p-4 text-center hover:shadow-md transition-shadow">
                <Headphones className="h-6 w-6 text-teal mx-auto mb-2" />
                <p className="font-semibold text-gray-900 text-sm">{podcast}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/podcasts" className="text-teal font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              Listen to All Podcasts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SHOP SECTION ==================== */}
      <section className="py-20 px-4 bg-light-bg" id="shop">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">The Shop</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Gear Up for <span className="text-primary">Greatness</span>
            </h2>
          </div>

          {/* Shop Hero Banner */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/krystalore/cropped-cropped-womens-wellness-retreat-costa-rica.jpeg"
                alt="Krystalore Crews wellness lifestyle and self-care products"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white font-bold text-sm">Wellness Collection</p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/krystalore/cropped-tmpq45x_5ac.webp"
                alt="Beyond Limits lifestyle and activewear collection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white font-bold text-sm">Lifestyle</p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/krystalore/cropped-SAM_3454-scaled-2.jpg"
                alt="Beyond Limits merchandise and apparel shop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white font-bold text-sm">Merch & Apparel</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Fit & Fierce', desc: 'Performance activewear designed for those who train with purpose.', icon: Dumbbell },
              { title: 'Tropical Memories Dress Shop', desc: 'Island-inspired fashion that brings warmth and confidence wherever you go.', icon: Sparkles },
              { title: 'Beyond Limits Merch', desc: 'Represent the movement. Apparel and accessories for the Beyond Limits tribe.', icon: ShoppingBag },
              { title: 'Beauty & Lifestyle', desc: 'Curated beauty and wellness products for your daily self-care ritual.', icon: Heart },
            ].map(({ title, desc, icon: Icon }, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop" className="btn-primary inline-flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" /> Visit the Shop
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SPEAKING SECTION ==================== */}
      <section className="py-20 px-4" id="speaking">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Keynote Speaker & Emcee</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ignite Your Next Event with <span className="text-primary">Krystalore</span>
              </h2>

              {/* Speaking Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/krystalore/cropped-KrystalCrews-15-scaled-1.jpg"
                  alt="Krystalore Crews keynote speaker delivering transformational talks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Dynamic, authentic, and unforgettable. Krystalore brings a unique blend of military discipline, 
                somatic wisdom, and real-world business experience to every stage. Available for keynotes, 
                workshops, panel moderation, and full emcee/event hosting.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mb-4">Signature Talks</h3>
              <div className="space-y-3 mb-8">
                {[
                  { title: 'Health Is Wealth', desc: 'Why physical and emotional wellness is the foundation of every success.' },
                  { title: 'The Freedom to Lead', desc: 'Breaking free from burnout to lead with clarity, courage, and compassion.' },
                  { title: 'From Service to Significance', desc: 'Transitioning from military service to purposeful civilian leadership.' },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Mic className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900">{title}</p>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Book Krystalore to Speak <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-teal/5 to-coral/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Emcee & Event Host</h3>
              <p className="text-gray-700 mb-6">
                More than a speaker—Krystalore brings energy, warmth, and professionalism as a seasoned 
                emcee and event host. From corporate galas to wellness summits, she keeps audiences 
                engaged and events running seamlessly.
              </p>
              <div className="space-y-2">
                {['Corporate Conferences & Galas', 'Wellness & Leadership Summits', 'Nonprofit Fundraisers', 'Military & Veteran Events', 'Women\'s Empowerment Events'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-teal flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SPONSOR REQUEST ==================== */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-coral/10">
        <div className="max-w-4xl mx-auto text-center">
          <HandHeart className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Become a Sponsor
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Partner with Crews Beyond Limits to sponsor veteran programs, wellness retreats, and 
            community initiatives. Your support creates ripple effects of transformation.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Sponsorship Inquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ==================== RETREATS SECTION ==================== */}
      <section className="py-20 px-4 bg-light-bg" id="retreats">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sage font-semibold uppercase tracking-wider text-sm mb-2">Powered by Revive & Thrive</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Retreat <span className="text-sage">Experiences</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Immersive, life-changing retreat experiences designed for deep transformation in breathtaking settings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {[
              { title: 'Custom Retreat', desc: 'Fully tailored to your group\'s vision and goals.', link: '/entrepreneur-retreats', color: 'border-primary/30 hover:border-primary', img: 'cropped-cropped-WELCOME-EMAIL.jpg', alt: 'Custom corporate and team retreat experiences' },
              { title: 'Vision & Strategy', desc: 'Clarify your 10-year vision and build the roadmap.', link: '/entrepreneur-retreats', color: 'border-teal/30 hover:border-teal', img: 'cropped-cropped-LowResolution-69.jpg', alt: 'Vision and strategy planning retreat' },
              { title: 'Leadership & Legacy', desc: 'Lead with purpose and build a lasting legacy.', link: '/entrepreneur-retreats', color: 'border-coral/30 hover:border-coral', img: 'cropped-cropped-HighResolution-80-scaled-1.jpg', alt: 'Leadership and legacy building retreat' },
              { title: "Women's Wellness", desc: 'Restore, reconnect, and rise in sisterhood.', link: '/womens-retreats', color: 'border-blue/30 hover:border-blue', img: 'cropped-SAM_3347-scaled-1.jpg', alt: 'Womens wellness retreat restore and reconnect' },
              { title: "Ink to Impact (Author's)", desc: 'From manuscript to movement—write your story.', link: '/entrepreneur-retreats', color: 'border-primary/30 hover:border-primary', img: 'cropped-DSC_0481-scaled-1.jpg', alt: 'Authors retreat from manuscript to movement' },
              { title: 'Beyond the Uniform (Veteran)', desc: 'Transition support and healing for those who served.', link: '/veteran-retreats', color: 'border-sage/30 hover:border-sage', img: 'cropped-cropped-SAM_3454-scaled-2.jpg', alt: 'Veteran transition support and healing retreat' },
              { title: 'Rise Beyond Loss', desc: 'Grief processing and renewal in a safe, guided space.', link: '/womens-retreats', color: 'border-coral/30 hover:border-coral', img: 'cropped-KrystalLowResolution-18.jpg', alt: 'Rise Beyond Loss grief processing and renewal retreat' },
            ].map(({ title, desc, link, color, img, alt }, i) => (
              <Link key={i} href={link} className={`bg-white border-2 rounded-xl overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5 ${color}`}>
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={`/images/krystalore/${img}`}
                    alt={alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <Mountain className="h-6 w-6 text-sage mb-2" />
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                  <p className="text-gray-600 text-xs">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHO WE SERVE ==================== */}
      <section className="py-20 px-4" id="serve">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold uppercase tracking-wider text-sm mb-2">Our Community</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We <span className="text-teal">Serve</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We meet you where you are—whether you&apos;re transitioning, scaling, healing, or leading.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Veterans, First Responders & Spouses', desc: 'Transition support, somatic healing, and community for those who\'ve served and sacrificed.', icon: Shield, link: '/veteran-coaching', color: 'text-sage', img: 'cropped-REM08625-1.jpg', alt: 'Veterans and first responders transition support and coaching' },
              { title: 'Former NFL Cheerleaders', desc: 'Identity beyond the sidelines—rediscover purpose, passion, and your next chapter.', icon: Star, link: '/womens-coaching', color: 'text-coral', img: 'cropped-cropped-HighResolution-130-scaled-1.jpg', alt: 'Former NFL cheerleaders identity coaching and empowerment' },
              { title: 'Women in Transition', desc: 'Divorce, career change, empty nest—whatever the shift, we\'ll help you rise.', icon: Heart, link: '/womens-coaching', color: 'text-blue', img: 'cropped-HighResolution-143-scaled-2.jpg', alt: 'Women in transition coaching for divorce career change and renewal' },
              { title: 'Corporate Teams', desc: 'Build resilient, emotionally intelligent teams that perform at the highest level.', icon: Building2, link: '/services', color: 'text-teal', img: 'cropped-cropped-KrystalLowResolution-18.jpg', alt: 'Corporate team building and leadership development' },
              { title: 'Authors, Speakers & Creators', desc: 'Turn your message into a movement with coaching, publishing, and platform strategy.', icon: BookOpen, link: '/entrepreneur-coaching', color: 'text-primary', img: null, alt: '' },
              { title: 'Entrepreneurs & Business Leaders', desc: 'Scale with soul. Strategy meets wellness for sustainable business growth.', icon: Trophy, link: '/entrepreneur-coaching', color: 'text-primary', img: null, alt: '' },
            ].map(({ title, desc, icon: Icon, link, color, img, alt }, i) => (
              <Link key={i} href={link} className="card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {img && (
                  <div className="relative h-72 -mx-6 -mt-6 mb-4 overflow-hidden">
                    <Image
                      src={`/images/krystalore/${img}`}
                      alt={alt}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                )}
                <Icon className={`h-8 w-8 ${color} mb-3`} />
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-3">{desc}</p>
                <span className={`${color} font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  Learn More <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-20 px-4 bg-light-bg" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-teal font-semibold uppercase tracking-wider text-sm mb-2">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked <span className="text-teal">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is somatic therapy and how does it work?',
                a: 'Somatic therapy is a body-centered approach to healing that recognizes the connection between the mind and body. It works by helping you tune into physical sensations, release stored tension and trauma, and build a deeper awareness of how your body holds stress. Through guided movement, breathwork, and mindfulness, somatic healing helps you process emotions that talk therapy alone may not reach.',
              },
              {
                q: 'Who are your programs designed for?',
                a: 'Our programs serve veterans, first responders, and military spouses; women in transition; corporate teams and leaders; entrepreneurs and business owners; authors, speakers, and creators; and former NFL cheerleaders. We meet you where you are and help you build a life you don\'t need to escape from.',
              },
              {
                q: 'What is the Beyond Limits Bootcamp?',
                a: 'Beyond Limits Bootcamp is a high-energy fitness program featuring HIIT, kickboxing, and functional training. Available both live and on-demand through our video vault, it\'s designed to push your physical limits while building mental resilience and discipline.',
              },
              {
                q: 'How do I book a speaking engagement or corporate wellness workshop?',
                a: 'You can book Krystalore for keynotes, workshops, emcee work, or corporate wellness programs by visiting our contact page or reaching out directly. We customize every engagement to fit your organization\'s unique needs and goals.',
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-900 hover:text-teal transition-colors" itemProp="name">
                  {q}
                  <ChevronDown className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GrowScaleCTA />

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <Image
          src="/images/krystalore/cropped-tmpq45x_5ac-3.webp"
          alt="Transform your life with Krystalore Crews coaching and healing"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/80 to-teal-900/70" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build a Life You Don&apos;t Need to <span className="text-primary">Escape</span> From?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you&apos;re healing, leading, building, or transforming—your next chapter starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center justify-center gap-2">
              Book a Free Call <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/inner-circle" className="btn-teal text-lg px-10 py-4 inline-flex items-center justify-center gap-2">
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
