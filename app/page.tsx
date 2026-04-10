'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
// Diamond removed per Krystalore's request
import { ArrowRight, Smartphone, Heart, Brain, TreePine, Mountain, CheckCircle, Quote, Star, Shield, Flame, Target, Users, Sparkles, Download, Play, Headphones, Building2, Megaphone, Dumbbell, Palette, Award, ShoppingBag } from 'lucide-react'

function CTABanner({ variant = 'teal' }: { variant?: 'teal' | 'orange' | 'dark' }) {
  const styles = {
    teal: 'bg-gradient-to-r from-[#0D9488] to-[#14B8A6]',
    orange: 'bg-gradient-to-r from-[#F97316] to-[#FB923C]',
    dark: 'bg-gradient-to-r from-[#37a6a6] to-[#37a6a6]',
  }
  return (
    <section className={`py-10 px-4 ${styles[variant]}`}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="/book"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-800 rounded-full px-8 py-3 font-bold hover:scale-105 transition-transform text-center"
        >
          Book a Breakthrough Call
        </a>
        <Link
          href="/apply"
          className="border-2 border-white text-white rounded-full px-8 py-3 font-bold hover:bg-white/10 transition-colors text-center"
        >
          Apply for Coaching
        </Link>
      </div>
    </section>
  )
}

export default function HomePage() {
  const services = [
    { label: 'Fitness', href: '/fitness' },
    { label: 'Speaking', href: '/keynote-speaker' },
    { label: 'Corporate Retreats', href: '/corporate-retreat-planning' },
    { label: 'Private Coaching', href: '/private' },
    { label: 'Books', href: '/books' },
    { label: 'Podcasts', href: '/podcasts' },
    { label: 'Courses', href: '/courses' },
    { label: 'Veterans', href: '/veteran-coaching' },
    { label: 'Gypsy Tours', href: '/gypsy-tours' },
    { label: 'Beyond Limits Boot Camp', href: '/bootcamp' },
    { label: 'Coworking', href: '/coworking' },
    { label: 'Retreats', href: '/retreat' },
    { label: 'Corporate Wellness', href: '/corporate-wellness' },
    { label: 'Shop', href: '/shop' },
    { label: 'Business Boot Camp', href: '/business-bootcamp' },
    { label: 'Nonprofit', href: '/nonprofit' },
    { label: 'Real Estate', href: '/real-estate' },
    { label: 'Bombshell Boot Camp', href: '/bombshell-bootcamp' },
    { label: 'Vision Board', href: '/vision-board' },
    { label: 'Million Dollar Body', href: '/million-dollar-body' },
    { label: 'Events', href: '/upcoming-events' },
    { label: 'Partners', href: '/partners' },
  ]

  const serviceCards = [
    { title: "Fitness", image: "/images/go9/fitness.jpg", desc: "HIIT, kickboxing, and functional training to push your body and sharpen your mind.", link: "/fitness" },
    { title: "Speaking & Keynotes", image: "/images/go9/keynote.jpg", desc: "Powerful keynotes on leadership, resilience, and transformation for your next event.", link: "/keynote-speaker" },
    { title: "Corporate Retreats", image: "/images/go9/corporate.jpg", desc: "Custom retreat experiences that build trust, alignment, and high-performance culture.", link: "/corporate-retreat-planning" },
    { title: "Private Coaching", image: "/images/go9/coaching.jpg", desc: "One-on-one experiential coaching for leaders ready to transform every area of life.", link: "/private" },
    { title: "Books", image: "/images/go9/planner.jpg", desc: "Amazon best-selling books, the Krystal Clear Life Planner, Men's Tactical Life Planner, and the Road to Resilience.", link: "/books" },
    { title: "Podcasts", image: "/images/go9/hero.jpg", desc: "Real conversations on healing, leadership, and building a life beyond limits.", link: "/podcasts" },
    { title: "Courses", image: "/images/go9/meditation.webp", desc: "Self-paced and live courses on leadership, emotional intelligence, and wellness.", link: "/courses" },
    { title: "Veteran Programs", image: "/images/go9/veteran.jpg", desc: "Specialized coaching and fitness programs honoring those who served.", link: "/veteran-coaching" },
    { title: "Gypsy Tours", image: "/images/go9/group-sunset.jpg", desc: "Curated travel experiences that combine adventure, wellness, and transformation.", link: "/gypsy-tours" },
    { title: "Beyond Limits Boot Camp", image: "/images/go9/fitness-alt.jpg", desc: "Live virtual fitness Mon/Wed/Fri with 24/7 replay access. HIIT, kickboxing, and accountability.", link: "/bootcamp" },
    { title: "Corporate Wellness & Leadership", image: "/images/go9/corporate.jpg", desc: "Elevate your team's performance with customized corporate wellness and leadership development programs.", link: "/corporate-wellness" },
    { title: "Coworking Power Hour", image: "/images/go9/coaching.jpg", desc: "Free weekly co-working sessions on Zoom. Show up, get focused, get it done.", link: "/coworking" },
    { title: "Retreats", image: "/images/go9/retreat-costa-rica.jpg", desc: "Transformative retreat experiences for women, veterans, entrepreneurs, and couples.", link: "/retreat" },
    { title: "Shop", image: "/images/go9/group-evening.webp", desc: "Apparel, merchandise, wellness products, and the Tropical Memories dress shop.", link: "/shop" },
    { title: "Business Boot Camp", image: "/images/go9/keynote.jpg", desc: "Startup incubator to scale-up accelerator. Build, launch, and grow your business.", link: "/business-bootcamp" },
    { title: "Nonprofit", image: "/images/go9/community-hands.jpg", desc: "Supporting veterans, female business owners, and Roatan community nonprofits through service and impact.", link: "/nonprofit" },
    { title: "Real Estate & Investments", image: "/images/go9/corporate.jpg", desc: "Global real estate opportunities and investment partnerships for portfolio growth.", link: "/real-estate" },
    { title: "Bombshell Boot Camp", image: "/images/go9/fitness-balcony.jpg", desc: "Online monthly course teaching the Freedom Formula — build unstoppable confidence from the inside out.", link: "/bombshell-bootcamp" },
    { title: "Vision Board Workshops", image: "/images/go9/coaching.jpg", desc: "Quarterly or on-request workshops for teams, communities, and retreats. Strategic planning, goal setting, and accountability.", link: "/vision-board" },
    { title: "Million Dollar Body Academy", image: "/images/go9/fitness.jpg", desc: "The signature course for building the body and mindset of a champion. Transform from the inside out.", link: "/million-dollar-body" },
    { title: "Upcoming Events", image: "/images/go9/keynote.jpg", desc: "In-person, live, and virtual events and experiences. See what's next and join us.", link: "/upcoming-events" },
    { title: "Partners", image: "/images/go9/group-sunset-dresses.webp", desc: "Strategic partnerships, collaboration opportunities, and joint ventures.", link: "/partners" },
  ]

  const fiveCCards = [
    {
      title: "Core",
      image: "/images/go9/meditation.webp",
      desc: "Your unshakable foundation. Identity, values, and the inner work that makes everything else possible.",
      link: "/freedom-formula/core",
      accent: "#0D9488"
    },
    {
      title: "Confidence",
      image: "/images/go9/hero.jpg",
      desc: "The courage to show up, speak up, and stand in your power. Built through action, not affirmation.",
      link: "/freedom-formula/confidence",
      accent: "#F97316"
    },
    {
      title: "Consistency",
      image: "/images/go9/fitness.jpg",
      desc: "Small daily disciplines that compound into extraordinary results. Powered by the 34-Minute Mindset Protocol for increased productivity, energy, and mental clarity.",
      link: "/freedom-formula/consistency",
      accent: "#0D9488"
    },
    {
      title: "Community",
      image: "/images/go9/group.jpg",
      desc: "Your tribe. The people who hold you accountable, celebrate your wins, and refuse to let you shrink.",
      link: "/freedom-formula/community",
      accent: "#F97316"
    },
    {
      title: "Celebration",
      image: "/images/go9/group-sunset.jpg",
      desc: "Celebrating wins and honoring each day and every step of your way in your pursuit of what sets your soul on fire. Balance, rest, retreats, meditation, and grounded happiness.",
      link: "/freedom-formula/celebration",
      accent: "#14B8A6"
    }
  ]

  const productivityTools = [
    {
      title: "Weekly Co-Working Power Hour",
      image: "/images/go9/coaching.jpg",
      desc: "Free weekly co-working sessions on Zoom. Show up, focus up, and get it done alongside a motivated community.",
      link: "/coworking",
      badge: "FREE"
    },
    {
      title: "Planners",
      image: "/images/go9/planner.jpg",
      desc: "The Krystal Clear Life Planner and the Men's Tactical Life Planner — design each day, week, and quarter with intention and clarity.",
      link: "/planner"
    },
    {
      title: "Habit Trackers",
      image: "/images/go9/corporate.jpg",
      desc: "Track your daily habits, build momentum, and watch small disciplines compound into extraordinary results.",
      link: "/planner"
    },
    {
      title: "Vision Board Workshops",
      image: "/images/go9/meditation.webp",
      desc: "Visualize your goals and create a magnetic blueprint for the life you desire.",
      link: "/vision-board"
    },
    {
      title: "Hilites App",
      image: "/images/go9/hero.jpg",
      desc: "Capture daily wins and micro-moments that fuel your motivation and track your transformation journey.",
      link: "/products"
    },
    {
      title: "S.M.A.R.T. Technology",
      image: "/images/go9/keynote.jpg",
      desc: "AI-powered tools and frameworks for peak performance, strategic planning, and accountability.",
      link: "/services"
    }
  ]

  const memberships = [
    {
      name: "THRIVE Network",
      price: "FREE",
      priceNote: "",
      image: "/images/go9/group.jpg",
      desc: "Free community access. Connect, grow, and find your tribe in our Beyond Limits Facebook community.",
      link: "https://www.facebook.com/groups/crewsbeyondlimits",
      cta: "Join Free",
      accent: "#0D9488",
      external: true
    },
    {
      name: "Beyond Limits Bootcamp",
      subtitle: "Virtual Fitness",
      price: "$89-109",
      priceNote: "/mo",
      image: "/images/go9/fitness-alt.jpg",
      desc: "30-minute HIIT, Kickboxing, accountability, and mindset & nutrition workshops. Live sessions recorded and available 24/7. Modifications for low, medium, and high impact.",
      smallPrint: "Special discount pricing for Veterans",
      link: "/bootcamp",
      cta: "Join Bootcamp",
      accent: "#14B8A6"
    },
    {
      name: "Beyond Limits Health Mastery",
      subtitle: "Group Coaching",
      price: "$250",
      priceNote: "/mo",
      image: "/images/go9/coaching.jpg",
      desc: "Complete wellness transformation. Nutrition, fitness, somatic healing, and group coaching. Includes potential for VIP days, special member-only pricing on retreats and immersive experiences.",
      link: "/fitness",
      cta: "Transform",
      accent: "#F97316"
    },
    {
      name: "Beyond Limits Private Inner Circle",
      subtitle: "Premium Private Coaching",
      price: "Starting at $800",
      priceNote: "/mo",
      image: "/images/go9/meditation.webp",
      desc: "Premium private coaching on fitness, business, and relationships. Includes VIP days, private retreats, and immersive experiences. Apply for personalized transformation.",
      link: "/apply",
      cta: "Apply Here",
      accent: "#0D9488"
    },
    {
      name: "Private Business Bootcamp",
      subtitle: "S.M.A.R.T. Experience",
      price: "$3,000",
      priceNote: "/mo",
      image: "/images/go9/corporate.jpg",
      desc: "The ultimate private coaching experience with S.M.A.R.T. technology integration for high-performing entrepreneurs and executives.",
      link: "/apply",
      cta: "Apply",
      accent: "#37a6a6"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
      `}</style>

      {/* Hero Section — Tony Robbins style: face top-right, text bottom-left */}
      <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-end">
        <Image
          src="/images/go9/hero.jpg"
          alt="Beyond Limits - Krystalore Crews"
          fill
          className="object-cover"
          style={{ objectPosition: '60% 20%' }}
          priority
          sizes="100vw"
        />
        {/* Bottom gradient — dark at bottom for text, clear at top to show face */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />
        
        <div className="container mx-auto px-4 relative z-10 pb-12 lg:pb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-lg leading-tight">
              Redefine What&apos;s Possible — <span className="bg-gradient-to-r from-[#0D9488] to-[#F97316] bg-clip-text text-transparent">Mind, Body, and Beyond</span>
            </h1>
            <p className="text-lg text-gray-100 mt-4 mb-8 max-w-xl drop-shadow-md">
              Stop surviving and start thriving. We help you build a life you don&apos;t need to escape from—through executive coaching, somatic healing, fitness, and community that meets you exactly where you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/book" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform duration-300 text-center shadow-lg"
              >
                Book a Breakthrough Call
              </a>
              <Link 
                href="#services" 
                className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors duration-300 text-center"
              >
                Explore More Below
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Service Bar */}
      <section id="services" className="py-6 overflow-hidden bg-[#F4F1EC]">
        <div className="whitespace-nowrap">
          <div className="inline-flex animate-scroll">
            {services.map((service, index) => (
              <Link 
                key={`first-${index}`}
                href={service.href}
                className="mx-2 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-5 py-2 font-semibold text-sm hover:scale-105 transition-transform duration-300 inline-block"
              >
                {service.label}
              </Link>
            ))}
            {services.map((service, index) => (
              <Link 
                key={`second-${index}`}
                href={service.href}
                className="mx-2 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-5 py-2 font-semibold text-sm hover:scale-105 transition-transform duration-300 inline-block"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Freedom Formula Section */}
      <section className="bg-[#F4F1EC] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md aspect-[3/4] flex-shrink-0">
                <Image src="/images/go9/coaching.jpg" alt="Krystalore Crews" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold tracking-[0.2em] text-[#0D9488] uppercase mb-2">THE FREEDOM FORMULA</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The Framework for Energy, Confidence, and Sustainable Success</h2>
                <p className="text-lg text-gray-700 font-medium mb-4">You don&apos;t need another strategy—you need a foundation that actually sustains the life you&apos;re building.</p>
                <p className="text-gray-600 leading-relaxed mb-4">The Freedom Formula is my signature framework designed to help high performers—entrepreneurs, business owners, leaders, athletes, and Veterans—realign, rebuild, and rise without burnout. Rooted in the 5 C&apos;s: Core, Confidence, Consistency, Community, and Celebration, this approach brings you back to what truly matters so you can create success that feels as good as it looks.</p>
                <p className="text-gray-600 leading-relaxed mb-6">Whether you&apos;re navigating a season of change, recovering from burnout, building and scaling your business, improving company wellness and culture, elevating your energy and fitness, or stepping onto bigger stages with confidence, this framework guides you to take a holistic approach—mentally, physically, and emotionally.</p>
                <blockquote className="text-xl italic text-[#0D9488] font-medium mb-6 border-l-4 border-[#F97316] pl-4">&ldquo;You get to design the life that you desire.&rdquo;</blockquote>
                <p className="text-gray-600 leading-relaxed">Freedom isn&apos;t something you find—it&apos;s something you create. It&apos;s built when you invest the time to get back to basics, strengthen your foundation, and lead your life—and your leadership—with intention.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {fiveCCards.map((card, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="px-4 py-3 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{card.desc}</p>
                    <Link href={card.link} className="inline-block rounded-full px-6 py-2.5 text-white font-semibold text-sm transition-all duration-300 hover:scale-105" style={{ backgroundColor: card.accent }}>Go</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Highlight Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden shadow-xl">
            <div className="relative min-h-[500px] lg:min-h-[600px]">
              <Image
                src="/images/go9/keynote.jpg"
                alt="Krystalore Crews speaking at event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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

      {/* Fitness Motivation Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#37a6a6] to-[#0D9488]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#F97316] font-semibold uppercase tracking-wider text-sm mb-2">Rise & Grind</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your Body Is Your Business. <span className="text-[#F97316]">Make It Shine.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group">
              <Image src="/images/go9/fitness.jpg" alt="Krystalore fitness training" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2">Sweat With Purpose</p>
                <h3 className="text-2xl font-black text-white mb-2">No Excuses, Only Results</h3>
                <p className="text-gray-300 text-sm">30-minute HIIT sessions that torch calories, build strength, and sharpen your mental edge.</p>
              </div>
            </div>
            <div className="space-y-8">
              {[
                { title: "Wake Up & Work Out", tagline: "Discipline Is Freedom", desc: "Every morning is a fresh start. Show up for your body and your body shows up for you.", icon: Flame },
                { title: "Strong Mind, Strong Body", tagline: "Mental Fitness First", desc: "Physical training is mental training in disguise. Every rep builds resilience.", icon: Brain },
                { title: "Consistency Over Perfection", tagline: "The 34-Minute Protocol", desc: "You don't need hours. You need 34 focused minutes and the willingness to start.", icon: Target },
              ].map(({ title, tagline, desc, icon: Icon }, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#F97316]" />
                    </div>
                    <div>
                      <p className="text-[#14B8A6] text-xs font-bold uppercase tracking-wider">{tagline}</p>
                      <h4 className="text-white font-bold">{title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group">
              <Image src="/images/go9/group.jpg" alt="Krystalore group fitness class" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#14B8A6] text-xs font-bold uppercase tracking-widest mb-2">Stronger Together</p>
                <h3 className="text-2xl font-black text-white mb-2">Find Your Fire</h3>
                <p className="text-gray-300 text-sm">Train with a community that pushes you further than you&apos;d ever go alone.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/fitness" className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform text-lg">
              <Dumbbell className="h-5 w-5" /> Start Your Transformation
            </Link>
          </div>
        </div>
      </section>

      {/* Somatic Healing Section */}
      <section className="py-20 px-4 bg-[#F4F1EC]" id="somatic">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#F97316] font-semibold uppercase tracking-wider text-sm mb-2">Somatic Healing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Your Body Keeps the Score. <span className="text-[#F97316]">Let&apos;s Help It Let Go.</span>
              </h2>
              <div className="relative h-64 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src="/images/go9/meditation.webp"
                  alt="Somatic healing and body-centered therapy with Krystalore Crews"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Somatic therapy is a body-centered approach to healing that recognizes the deep connection between mind and body. It helps you tune into physical sensations, release stored tension and trauma, and build a deeper awareness of how your body holds stress. Through guided movement, breathwork, and mindfulness, somatic healing helps you process emotions that talk therapy alone may not reach.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">5 Signs It&apos;s Time to Reconnect</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'You feel disconnected from your body or emotions',
                  'Chronic tension, pain, or fatigue with no clear medical cause',
                  'You\'re stuck in fight-or-flight mode and can\'t relax',
                  'Past trauma still affects your daily life and relationships',
                  'Traditional talk therapy hasn\'t fully resolved your struggles',
                ].map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-6 py-3 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Explore Somatic Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Somatic Offerings</h3>
              {[
                { icon: Heart, title: 'Movement: Healing in Motion', desc: 'Guided movement practices that help release stored tension and reconnect you with your body\'s wisdom.', color: 'text-[#F97316]', img: '/images/go9/fitness.jpg' },
                { icon: Brain, title: 'Compassionate Inquiry', desc: 'A gentle, trauma-informed approach to uncovering the root causes of emotional and physical patterns.', color: 'text-[#0D9488]', img: '/images/go9/coaching.jpg' },
                { icon: TreePine, title: 'Mindfulness Integration', desc: 'Present-moment awareness practices that build resilience and emotional regulation.', color: 'text-[#14B8A6]', img: '/images/go9/meditation.webp' },
                { icon: Mountain, title: 'Retreats: Immersive Healing', desc: 'Immersive retreat experiences designed for deep somatic work in transformational settings.', color: 'text-[#F97316]', img: '/images/go9/hero.jpg' },
              ].map(({ icon: Icon, title, desc, color, img }, i) => (
                <div key={i} className="bg-white rounded-xl p-5 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`h-5 w-5 ${color} flex-shrink-0`} />
                      <h4 className="font-bold text-gray-800">{title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
              <div className="bg-gradient-to-r from-[#0D9488]/5 to-[#F97316]/5 rounded-xl p-6 mt-6">
                <h4 className="font-bold text-gray-800 mb-2">Integration Through Guidance & Community</h4>
                <p className="text-gray-600 text-sm">
                  Healing doesn&apos;t happen in isolation. Our approach combines one-on-one guidance with community support, ensuring your transformation is sustained and supported long after each session ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Krystalore - Purpose & Passion */}
      <section className="py-20 px-4 bg-white" id="mission">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0D9488] font-semibold uppercase tracking-wider text-sm mb-2">Meet Krystalore</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Transforming Lives Through <span className="text-[#0D9488]">Purpose & Passion</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Amazon Best-Selling Author, Keynote Speaker, Certified Life & Somatic Coach, and Corporate Wellness 
                Consultant—Krystalore Crews helps people build lives they don&apos;t need to escape from. With a unique 
                blend of military discipline, somatic wisdom, and real-world business experience, she meets you 
                exactly where you are.
              </p>
              <Link href="/about" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-6 py-3 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Learn More About Krystalore <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/go9/speaking-headshot.jpg" alt="Krystalore Crews speaking at a coaching event" fill className="object-cover object-top" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/go9/retreat-costa-rica.jpg" alt="Womens somatic healing retreat" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/go9/hero.jpg" alt="Krystalore Crews fitness coaching" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-[#F4F1EC]" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#F97316] font-semibold uppercase tracking-wider text-sm mb-2">Client Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Real People. <span className="text-[#F97316]">Real Transformation.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Delcey', quote: 'Krystalore helped me see that I was carrying years of trauma in my body. Through somatic work, I finally found the relief that talk therapy alone couldn\'t give me. I feel like a completely different person—more grounded, more present, more alive.' },
              { name: 'Lynn', quote: 'The Beyond Limits community changed my life. I came in looking for fitness and left with a whole new perspective on leadership, relationships, and what it means to truly thrive. Krystalore is the real deal.' },
              { name: 'Diana', quote: 'As a military spouse, I felt invisible for years. Krystalore\'s coaching gave me my voice back. Her programs are thoughtful, powerful, and designed for people who are ready to stop playing small.' },
            ].map(({ name, quote }, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-[#0D9488]/30 mb-4" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-full flex items-center justify-center text-white font-bold text-sm">{name[0]}</div>
                  <div>
                    <p className="font-bold text-gray-800">{name}</p>
                    <div className="flex text-[#F97316]">
                      {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-current" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freedom Formula Downloads */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#37a6a6] via-[#37a6a6] to-[#0D9488]/30" id="freedom-formula-downloads">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#14B8A6] font-semibold uppercase tracking-wider text-sm mb-2">Free Resources</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Freedom Formula <span className="text-[#14B8A6]">Downloads</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Five pillars. Five free guides. Your roadmap to lasting transformation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { pillar: 'Core', title: 'Unshakable You', icon: Shield, color: 'text-[#14B8A6] border-[#14B8A6]/30' },
              { pillar: 'Confidence', title: 'The Courage Code', icon: Flame, color: 'text-[#F97316] border-[#F97316]/30' },
              { pillar: 'Consistency', title: 'The Momentum Map', icon: Target, color: 'text-[#0D9488] border-[#0D9488]/30' },
              { pillar: 'Community', title: 'The Connection Code', icon: Users, color: 'text-[#FB923C] border-[#FB923C]/30' },
              { pillar: 'Celebration', title: 'The Joy Journal', icon: Sparkles, color: 'text-[#14B8A6] border-[#14B8A6]/30' },
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
            <Link href="/vault" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
              <Download className="h-4 w-4" /> Download Free Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-4 bg-[#37a6a6]" id="content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#14B8A6] font-semibold uppercase tracking-wider text-sm mb-2">Featured Content</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Motivation That <span className="text-[#14B8A6]">Moves</span> You</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Monday Motivation LIVE', subtitle: 'Weekly Highlight', desc: 'Start your week with fire. Mindset, motivation, and real talk to push you forward.', icon: Play, img: '/images/go9/fitness.jpg' },
              { title: 'Most People Quit Right Before It Gets Good', subtitle: 'Mindset Shift', desc: 'The breakthrough is closer than you think. Don\'t quit now—the best chapter is next.', icon: Flame, img: '/images/go9/hero.jpg' },
              { title: 'What Does All In Look Like?', subtitle: 'Going Deeper', desc: 'Going all in isn\'t about burning out—it\'s about alignment, focus, and relentless intentionality.', icon: Target, img: '/images/go9/keynote.jpg' },
            ].map(({ title, subtitle, desc, icon: Icon, img }, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-colors group">
                <div className="h-48 relative overflow-hidden">
                  <Image src={img} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
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
            <Link href="/vault" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform text-lg">
              <Play className="h-5 w-5" /> Watch Free Session
            </Link>
          </div>
        </div>
      </section>

      {/* Blog & Social Feeds */}
      <section className="py-20 px-4 bg-white" id="blog">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Blog */}
            <div>
              <p className="text-[#0D9488] font-semibold uppercase tracking-wider text-sm mb-2">The Blog</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Wake Up. Rise Up. <span className="text-[#0D9488]">Level Up.</span></h2>
              <p className="text-gray-600 mb-8">Insights on leadership, resilience, somatic healing, and building a life of purpose. New posts weekly.</p>
              <div className="bg-[#F4F1EC] rounded-2xl overflow-hidden shadow-md mb-6">
                <div className="relative h-56">
                  <Image src="/images/krystalore/beach-rainbow.png" alt="Krystalore on the beach with double rainbow" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="p-6">
                  <p className="text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-2">Featured Post</p>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Strong, Sexy Leg Workouts at Home</h3>
                  <p className="text-gray-600 text-sm">Sculpt and strengthen your legs with these effective at-home workouts designed for all fitness levels.</p>
                </div>
              </div>
              <a href="/blog" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-6 py-3 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Read the Blog <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Social Feeds */}
            <div>
              <p className="text-[#F97316] font-semibold uppercase tracking-wider text-sm mb-2">Follow Along</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay <span className="text-[#F97316]">Connected</span></h2>
              <p className="text-gray-600 mb-8">Follow Krystalore across platforms for daily motivation, behind-the-scenes, and community updates.</p>
              <div className="space-y-4">
                {[
                  { platform: 'Instagram', handle: '@thecrewscoach', url: 'https://www.instagram.com/thecrewscoach/', desc: 'Daily motivation, BTS, and community moments',
                    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                  { platform: 'Facebook', handle: 'Krystalore Crews', url: 'https://www.facebook.com/krystalore/', desc: 'LIVE sessions, events, and community groups',
                    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0D9488"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                  { platform: 'TikTok', handle: '@thecrewscoach', url: 'https://www.tiktok.com/@thecrewscoach', desc: 'Quick tips, motivation, and real talk',
                    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0D9488"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.19 8.19 0 0 0 4.76 1.52V6.79a4.84 4.84 0 0 1-1-.1z"/></svg> },
                  { platform: 'YouTube', handle: 'Krystalore', url: 'https://www.youtube.com/user/krystalore', desc: 'Full workouts, interviews, and keynotes',
                    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0D9488"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
                  { platform: 'LinkedIn', handle: 'Krystalore Crews', url: 'https://www.linkedin.com/in/krystalore-crews/', desc: 'Corporate insights and leadership content',
                    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0D9488"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { platform: 'Pinterest', handle: 'krystalorecrews', url: 'https://www.pinterest.com/krystalorecrews/', desc: 'Inspiration boards, wellness tips, and retreat vibes',
                    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0D9488"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg> },
                ].map(({ platform, handle, url, desc, icon }, i) => (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#F4F1EC] rounded-xl p-4 hover:shadow-lg transition-all group hover:bg-white border border-transparent hover:border-[#0D9488]/20">
                    <div className="w-14 h-14 rounded-full bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 relative group-hover:bg-[#0D9488]/15 transition-colors">
                      {icon}
                      {/* Crystal accent */}
                      <svg className="absolute -top-1 -right-1 w-5 h-5 drop-shadow-sm" viewBox="0 0 24 24"><polygon points="12,1 21,9 12,23 3,9" fill="#14B8A6" opacity="0.9"/><polygon points="12,1 16.5,9 12,17 7.5,9" fill="#0D9488" opacity="0.7"/><line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth="0.5" opacity="0.6"/></svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm group-hover:text-[#0D9488] transition-colors">{platform}</p>
                      <p className="text-gray-500 text-xs">{handle} — {desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#0D9488] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Wellness & Leadership Solutions */}
      <section className="py-20 px-4 bg-[#F4F1EC]" id="corporate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#0D9488] font-semibold uppercase tracking-wider text-sm mb-2">For Organizations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Corporate Wellness & <span className="text-[#0D9488]">Leadership Solutions</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Elevate your team&apos;s performance, resilience, and well-being with customized programs designed for the modern workplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/go9/corporate.jpg" alt="Leadership retreats with Krystalore Crews" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Leadership Retreats</p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/go9/community-hands.jpg" alt="Corporate wellness workshops" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Corporate Wellness</p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/go9/keynote.jpg" alt="Keynote speaking and corporate events" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Keynote Speaking</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Megaphone, title: 'Lead Beyond Limits Speaking & Keynotes', desc: 'Powerful keynotes that ignite leadership transformation and inspire lasting change.', color: 'text-[#0D9488]' },
              { icon: Brain, title: 'EQ & Wellness Workshops', desc: 'Interactive workshops on emotional intelligence, stress management, and peak performance.', color: 'text-[#14B8A6]' },
              { icon: Shield, title: 'Sponsor a Veteran Partnership', desc: 'Partner with us to support veteran transition, wellness, and leadership development.', color: 'text-[#F97316]' },
              { icon: Dumbbell, title: 'Performance in Motion Corporate Fitness', desc: 'On-site and virtual fitness programs that energize teams and boost productivity.', color: 'text-[#0D9488]' },
              { icon: Users, title: 'Team Dynamics & Leadership Retreats', desc: 'Off-site experiences that build trust, alignment, and high-performance culture.', color: 'text-[#14B8A6]' },
              { icon: Palette, title: 'Customized Corporate Solutions', desc: 'Fully tailored programs designed around your organization\'s unique needs and goals.', color: 'text-[#F97316]' },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <div key={i} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Icon className={`h-8 w-8 ${color} mb-4`} />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/book" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform text-lg">
              <Building2 className="h-5 w-5" /> Request Corporate Info
            </a>
          </div>
        </div>
      </section>

      {/* Krystalore Speaks - Press / Media */}
      <section className="py-20 px-4 bg-white" id="media">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#0D9488] font-semibold uppercase tracking-wider text-sm mb-2">As Seen In</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Krystalore <span className="text-[#0D9488]">Speaks</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/go9/fitness.jpg" alt="Krystalore Crews full body fitness and exercise pose" fill className="object-cover" sizes="(max-width: 768px) 100vw, 384px" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/krystalore/wny-heroes-speaking.png" alt="Krystalore Crews speaking to a group at WNY Heroes event" fill className="object-cover" sizes="(max-width: 768px) 100vw, 384px" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {['FORCE Magazine', 'Amazon Best-Selling Author', 'NAWBO', 'Breakfast with Champions'].map((name, i) => (
              <div key={i} className="bg-gray-50 px-6 py-3 rounded-full text-gray-700 font-semibold text-sm border border-gray-200">
                <Award className="h-4 w-4 inline mr-2 text-[#0D9488]" />{name}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-800 text-center mb-6">Featured Podcasts</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Women Entrepreneurs PR', 'Service to Success', 'Krystal Clear Life Podcast', 'Veterans Podcast'].map((podcast, i) => (
              <div key={i} className="bg-[#F4F1EC] p-4 rounded-xl text-center hover:shadow-md transition-shadow">
                <Headphones className="h-6 w-6 text-[#0D9488] mx-auto mb-2" />
                <p className="font-semibold text-gray-800 text-sm">{podcast}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/podcasts" className="text-[#0D9488] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              Listen to All Podcasts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Shop - Gear Up for Greatness */}
      <section className="py-20 px-4 bg-[#F4F1EC]" id="shop">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#F97316] font-semibold uppercase tracking-wider text-sm mb-2">The Shop</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Gear Up for <span className="text-[#F97316]">Greatness</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <Image src="/images/go9/meditation.webp" alt="Wellness lifestyle and self-care products" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white font-bold text-sm">Wellness Collection</p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <Image src="/images/go9/group-evening.webp" alt="Beyond Limits lifestyle and activewear" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white font-bold text-sm">Lifestyle</p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <Image src="/images/go9/fitness-balcony.jpg" alt="Beyond Limits merchandise and apparel" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
                <Icon className="h-8 w-8 text-[#F97316] mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop" className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
              <ShoppingBag className="h-4 w-4" /> Visit the Shop
            </Link>
          </div>
        </div>
      </section>

      <CTABanner variant="teal" />

      {/* Service Boxes */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Services & Programs</h2>
              <p className="text-gray-600 text-lg">Everything you need to transform mind, body, business, and beyond.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
              {serviceCards.map((card, index) => (
                <Link key={index} href={card.link} className="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white group block">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="px-3 py-3 text-center">
                    <h3 className="text-sm font-bold text-gray-800 mb-1">{card.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner variant="orange" />

      {/* Productivity Tools & Hacks */}
      <section className="bg-[#F4F1EC] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Productivity Tools & Hacks</h2>
              <p className="text-gray-600 text-lg">Work smarter, live bigger! Organize the chaos to live a more fulfilling life!</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productivityTools.map((tool, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group relative">
                  {tool.badge && (
                    <div className="absolute top-4 right-4 bg-[#0D9488] text-white px-3 py-1 rounded-full text-sm font-semibold z-10">{tool.badge}</div>
                  )}
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={tool.image} alt={tool.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="px-4 py-3">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{tool.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{tool.desc}</p>
                    <Link href={tool.link} className="text-[#0D9488] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-300">
                      Explore <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner variant="dark" />

      {/* Quizzes & Self-Assessment */}
      <section className="bg-gradient-to-br from-[#0D9488]/10 to-[#F97316]/10 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Take a quick self-assessment quiz to discover which program, coaching level, or experience is the perfect fit for where you are right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quizzes/scale-your-business" className="bg-[#F97316] text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
              Take the Scaling Quiz
            </Link>
            <Link href="/quizzes" className="bg-[#0D9488] text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform">
              Browse All Quizzes
            </Link>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="bg-gradient-to-b from-white to-[#F4F1EC] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Memberships</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">We meet you wherever you&apos;re at in your fitness, personal growth, or business journey, and wherever you&apos;re at in the world.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {memberships.map((membership, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: membership.accent }}></div>
                  
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image 
                      src={membership.image} 
                      alt={membership.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{membership.name}</h3>
                    {membership.subtitle && <p className="text-sm text-gray-500 mb-3">{membership.subtitle}</p>}
                    <div className="mb-4">
                      <span className="text-3xl font-black" style={{ color: membership.accent }}>{membership.price}</span>
                      {membership.priceNote && <span className="text-sm text-gray-500">{membership.priceNote}</span>}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{membership.desc}</p>
                    {membership.smallPrint && <p className="text-xs text-gray-400 italic mt-2 mb-4">{membership.smallPrint}</p>}
                    {membership.external ? (
                      <a href={membership.link} target="_blank" rel="noopener noreferrer" className="w-full inline-block py-3 px-4 rounded-full text-white font-bold transition-all duration-300 hover:scale-105" style={{ backgroundColor: membership.accent }}>{membership.cta}</a>
                    ) : (
                      <Link href={membership.link} className="w-full inline-block py-3 px-4 rounded-full text-white font-bold transition-all duration-300 hover:scale-105" style={{ backgroundColor: membership.accent }}>{membership.cta}</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner variant="teal" />

      <Footer />
      <div className="text-center py-2">
        <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity">JC</a>
      </div>
    </div>
  )
}
