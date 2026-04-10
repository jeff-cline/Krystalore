'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import KrystaloreDiamondV2 from '@/components/KrystaloreDiamondV2'
import { ArrowRight, Smartphone } from 'lucide-react'

function CTABanner({ variant = 'teal' }: { variant?: 'teal' | 'gold' | 'dark' }) {
  const styles = {
    teal: 'bg-gradient-to-r from-[#34c5c5] to-[#84d7d7]',
    gold: 'bg-gradient-to-r from-[#E8A849] to-[#D4943A]',
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

export default function Go4Page() {
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
    { title: "Fitness", image: "/images/logos/04-runner.png", desc: "HIIT, kickboxing, and functional training to push your body and sharpen your mind.", link: "/fitness" },
    { title: "Speaking & Keynotes", image: "/images/logos/keynote-speaker.png", desc: "Powerful keynotes on leadership, resilience, and transformation for your next event.", link: "/keynote-speaker" },
    { title: "Corporate Retreats", image: "/images/logos/05-cruise-hostess.png", desc: "Custom retreat experiences that build trust, alignment, and high-performance culture.", link: "/corporate-retreat-planning" },
    { title: "Private Coaching", image: "/images/generated/private-coaching.png", desc: "One-on-one experiential coaching for leaders ready to transform every area of life.", link: "/private" },
    { title: "Books", image: "/images/logos/13-cruise-cabin-planning.png", desc: "Amazon best-selling books, the Krystal Clear Life Planner, Men's Tactical Life Planner, and the Road to Resilience.", link: "/books" },
    { title: "Podcasts", image: "/images/logos/podcast-host.png", desc: "Real conversations on healing, leadership, and building a life beyond limits.", link: "/podcasts" },
    { title: "Courses", image: "/images/logos/01-entrepreneur.png", desc: "Self-paced and live courses on leadership, emotional intelligence, and wellness.", link: "/courses" },
    { title: "Veteran Programs", image: "/images/logos/09-military.png", desc: "Specialized coaching and fitness programs honoring those who served.", link: "/veteran-coaching" },
    { title: "Gypsy Tours", image: "/images/logos/00-gypsy-tours-original.png", desc: "Curated travel experiences that combine adventure, wellness, and transformation.", link: "/gypsy-tours" },
    { title: "Beyond Limits Boot Camp", image: "/images/logos/17-exercise-pushups.png", desc: "Live virtual fitness Mon/Wed/Fri with 24/7 replay access. HIIT, kickboxing, and accountability.", link: "/bootcamp" },
    { title: "Corporate Wellness & Leadership", image: "/images/generated/corporate-wellness-leadership.png", desc: "Elevate your team's performance with customized corporate wellness and leadership development programs.", link: "/corporate-wellness" },
    { title: "Coworking Power Hour", image: "/images/generated/coworking-power-hour.png", desc: "Free weekly co-working sessions on Zoom. Show up, get focused, get it done.", link: "/coworking" },
    { title: "Retreats", image: "/images/logos/07-retreat-meditation.png", desc: "Transformative retreat experiences for women, veterans, entrepreneurs, and couples.", link: "/retreat" },
    { title: "Shop", image: "/images/logos/dress-teal-sparkle.png", desc: "Apparel, merchandise, wellness products, and the Tropical Memories dress shop.", link: "/shop" },
    { title: "Business Boot Camp", image: "/images/logos/24-business-speaking.png", desc: "Startup incubator to scale-up accelerator. Build, launch, and grow your business.", link: "/business-bootcamp" },
    { title: "Nonprofit", image: "/images/logos/21-beach-fitness-live.png", desc: "Supporting veterans, female business owners, and Roatan community nonprofits through service and impact.", link: "/nonprofit" },
    { title: "Real Estate & Investments", image: "/images/logos/23-networking-bar.png", desc: "Global real estate opportunities and investment partnerships for portfolio growth.", link: "/real-estate" },
    { title: "Bombshell Boot Camp", image: "/images/logos/06-superwoman.png", desc: "Online monthly course teaching the Freedom Formula — build unstoppable confidence from the inside out.", link: "/bombshell-bootcamp" },
    { title: "Vision Board Workshops", image: "/images/generated/vision-board-workshops.png", desc: "Quarterly or on-request workshops for teams, communities, and retreats. Strategic planning, goal setting, and accountability.", link: "/vision-board" },
    { title: "Million Dollar Body Academy", image: "/images/logos/03-bikini-model.png", desc: "The signature course for building the body and mindset of a champion. Transform from the inside out.", link: "/million-dollar-body" },
    { title: "Upcoming Events", image: "/images/generated/upcoming-events-calendar.png", desc: "In-person, live, and virtual events and experiences. See what's next and join us.", link: "/upcoming-events" },
    { title: "Partners", image: "/images/logos/22-beach-fitness-group.png", desc: "Strategic partnerships, collaboration opportunities, and joint ventures.", link: "/partners" },
  ]

  const fiveCCards = [
    {
      title: "Core",
      image: "/images/generated/private-coaching.png",
      desc: "Your unshakable foundation. Identity, values, and the inner work that makes everything else possible.",
      link: "#core",
      accent: "#84d7d7"
    },
    {
      title: "Confidence",
      image: "/images/logos/01-entrepreneur.png",
      desc: "The courage to show up, speak up, and stand in your power. Built through action, not affirmation.",
      link: "#confidence",
      accent: "#E8A849"
    },
    {
      title: "Consistency",
      image: "/images/logos/04-runner.png",
      desc: "Small daily disciplines that compound into extraordinary results. Powered by the 34-Minute Mindset Protocol for increased productivity, energy, and mental clarity.",
      link: "#consistency",
      accent: "#34c5c5"
    },
    {
      title: "Community",
      image: "/images/logos/05-cruise-hostess.png",
      desc: "Your tribe. The people who hold you accountable, celebrate your wins, and refuse to let you shrink.",
      link: "/community",
      accent: "#84d7d7"
    },
    {
      title: "Celebration",
      image: "/images/logos/07-retreat-meditation.png",
      desc: "Celebrating wins and honoring each day and every step of your way in your pursuit of what sets your soul on fire. Balance, rest, retreats, meditation, and grounded happiness.",
      link: "#celebration",
      accent: "#B8A9D4"
    }
  ]

  const productivityTools = [
    {
      title: "Weekly Co-Working Power Hour",
      image: "/images/generated/coworking-power-hour.png",
      desc: "Free weekly co-working sessions on Zoom. Show up, focus up, and get it done alongside a motivated community.",
      link: "/coworking",
      badge: "FREE"
    },
    {
      title: "Planners",
      image: "/images/logos/12-floor-journaling.png",
      desc: "The Krystal Clear Life Planner and the Men's Tactical Life Planner — design each day, week, and quarter with intention and clarity.",
      link: "/planner"
    },
    {
      title: "Habit Trackers",
      image: "/images/logos/11-habit-tracker.png",
      desc: "Track your daily habits, build momentum, and watch small disciplines compound into extraordinary results.",
      link: "/planner"
    },
    {
      title: "Vision Board Workshops",
      image: "/images/generated/vision-board-workshops.png",
      desc: "Visualize your goals and create a magnetic blueprint for the life you desire.",
      link: "/vision-board"
    },
    {
      title: "Hilites App",
      image: "/images/logos/26-cruise-amphitheater.png",
      desc: "Capture daily wins and micro-moments that fuel your motivation and track your transformation journey.",
      link: "/products"
    },
    {
      title: "S.M.A.R.T. Technology",
      image: "/images/generated/smart-technology.png",
      desc: "AI-powered tools and frameworks for peak performance, strategic planning, and accountability.",
      link: "/services"
    }
  ]

  const memberships = [
    {
      name: "THRIVE Network",
      price: "FREE",
      priceNote: "",
      image: "/images/logos/22-beach-fitness-group.png",
      desc: "Free community access. Connect, grow, and find your tribe in our Beyond Limits Facebook community.",
      link: "https://www.facebook.com/groups/crewsbeyondlimits",
      cta: "Join Free",
      accent: "#84d7d7",
      external: true
    },
    {
      name: "Beyond Limits Bootcamp",
      subtitle: "Virtual Fitness",
      price: "$89-109",
      priceNote: "/mo",
      image: "/images/logos/17-exercise-pushups.png",
      desc: "30-minute HIIT, Kickboxing, accountability, and mindset & nutrition workshops. Live sessions recorded and available 24/7. Modifications for low, medium, and high impact.",
      smallPrint: "Special discount pricing for Veterans",
      link: "/bootcamp",
      cta: "Join Bootcamp",
      accent: "#84d7d7"
    },
    {
      name: "Beyond Limits Health Mastery",
      subtitle: "Group Coaching",
      price: "$250",
      priceNote: "/mo",
      image: "/images/logos/04-runner.png",
      desc: "Complete wellness transformation. Nutrition, fitness, somatic healing, and group coaching. Includes potential for VIP days, special member-only pricing on retreats and immersive experiences.",
      link: "/fitness",
      cta: "Transform",
      accent: "#E8A849"
    },
    {
      name: "Beyond Limits Private Inner Circle",
      subtitle: "Premium Private Coaching",
      price: "Starting at $800",
      priceNote: "/mo",
      image: "/images/logos/27-spa-pedicure.png",
      desc: "Premium private coaching on fitness, business, and relationships. Includes VIP days, private retreats, and immersive experiences. Apply for personalized transformation.",
      link: "/apply",
      cta: "Apply Here",
      accent: "#B8A9D4"
    },
    {
      name: "Private Business Bootcamp",
      subtitle: "S.M.A.R.T. Experience",
      price: "$3,000",
      priceNote: "/mo",
      image: "/images/logos/01-entrepreneur.png",
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/krystalore/cropped-tmpq45x_5ac-1.webp"
          alt="Beyond Limits - Krystalore Crews"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto py-16 lg:py-24">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                Redefine What&apos;s Possible — <span className="bg-gradient-to-r from-[#84d7d7] to-[#E8A849] bg-clip-text text-transparent">Mind, Body, and Beyond</span>
              </h1>
              <p className="text-lg text-gray-200 mt-4 mb-8 max-w-2xl">
                Stop surviving and start thriving. We help you build a life you don&apos;t need to escape from—through executive coaching, somatic healing, fitness, and community that meets you exactly where you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <a 
                  href="/book" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform duration-300 text-center shadow-lg"
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
              <div className="flex items-center gap-4 mt-12 justify-center lg:justify-start">
                <KrystaloreDiamondV2 size={60} className="" />
                <Image 
                  src="/images/krystalore/63d23c1829f84e249e2d8003.png" 
                  alt="Krystalore Crews" 
                  width={180} 
                  height={72} 
                  className="opacity-90" 
                />
              </div>
            </div>
            <div className="flex-shrink-0 hidden lg:block">
              <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg"
                  alt="Krystalore Crews - Executive Coach, Speaker, Author"
                  fill
                  className="object-cover"
                  priority
                  sizes="400px"
                />
              </div>
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
                className="mx-2 bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white rounded-full px-5 py-2 font-semibold text-sm hover:scale-105 transition-transform duration-300 inline-block"
              >
                {service.label}
              </Link>
            ))}
            {services.map((service, index) => (
              <Link 
                key={`second-${index}`}
                href={service.href}
                className="mx-2 bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white rounded-full px-5 py-2 font-semibold text-sm hover:scale-105 transition-transform duration-300 inline-block"
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
                <Image src="/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg" alt="Krystalore Crews" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold tracking-[0.2em] text-[#34c5c5] uppercase mb-2">THE FREEDOM FORMULA</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The Framework for Energy, Confidence, and Sustainable Success</h2>
                <p className="text-lg text-gray-700 font-medium mb-4">You don&apos;t need another strategy—you need a foundation that actually sustains the life you&apos;re building.</p>
                <p className="text-gray-600 leading-relaxed mb-4">The Freedom Formula is my signature framework designed to help high performers—entrepreneurs, business owners, leaders, athletes, and Veterans—realign, rebuild, and rise without burnout. Rooted in the 5 C&apos;s: Core, Confidence, Consistency, Community, and Celebration, this approach brings you back to what truly matters so you can create success that feels as good as it looks.</p>
                <p className="text-gray-600 leading-relaxed mb-6">Whether you&apos;re navigating a season of change, recovering from burnout, building and scaling your business, improving company wellness and culture, elevating your energy and fitness, or stepping onto bigger stages with confidence, this framework guides you to take a holistic approach—mentally, physically, and emotionally.</p>
                <blockquote className="text-xl italic text-[#34c5c5] font-medium mb-6 border-l-4 border-[#84d7d7] pl-4">&ldquo;You get to design the life that you desire.&rdquo;</blockquote>
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

      <CTABanner variant="gold" />

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
                    <div className="absolute top-4 right-4 bg-[#84d7d7] text-white px-3 py-1 rounded-full text-sm font-semibold z-10">{tool.badge}</div>
                  )}
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={tool.image} alt={tool.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="px-4 py-3">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{tool.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{tool.desc}</p>
                    <Link href={tool.link} className="text-[#34c5c5] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-300">
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
      <section className="bg-gradient-to-br from-[#34c5c5]/10 to-[#E8A849]/10 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Take a quick self-assessment quiz to discover which program, coaching level, or experience is the perfect fit for where you are right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quizzes/scale-your-business" className="bg-[#34c5c5] text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
              Take the Scaling Quiz
            </Link>
            <Link href="/quizzes" className="bg-[#34c5c5] text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform">
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
                  
                  {/* Consistent image for all memberships */}
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
