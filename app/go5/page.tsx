'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import KrystaloreDiamondV2 from '@/components/KrystaloreDiamondV2'
import { ArrowRight, Smartphone, Heart, Brain, TreePine, Mountain, CheckCircle, Quote, Star, Shield, Flame, Target, Users, Sparkles, Download, Play, Headphones, Building2, Megaphone, Dumbbell, Palette, Award, ShoppingBag } from 'lucide-react'

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

      {/* Quote / Highlight Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden shadow-xl">
            <div className="relative min-h-[500px] lg:min-h-[600px]">
              <Image
                src="/images/krystalore/wny-heroes-speaking.png"
                alt="Krystalore Crews speaking at WNY Heroes event"
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

      {/* Somatic Healing Section */}
      <section className="py-20 px-4 bg-[#F4F1EC]" id="somatic">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#E8A849] font-semibold uppercase tracking-wider text-sm mb-2">Somatic Healing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Your Body Keeps the Score. <span className="text-[#E8A849]">Let&apos;s Help It Let Go.</span>
              </h2>
              <div className="relative h-64 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src="/images/krystalore/cropped-LowResolution-172.jpg"
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
                    <CheckCircle className="h-5 w-5 text-[#E8A849] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white rounded-full px-6 py-3 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Explore Somatic Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Somatic Offerings</h3>
              {[
                { icon: Heart, title: 'Movement: Healing in Motion', desc: 'Guided movement practices that help release stored tension and reconnect you with your body\'s wisdom.', color: 'text-[#E8A849]', img: 'colibri-image-34.png' },
                { icon: Brain, title: 'Compassionate Inquiry', desc: 'A gentle, trauma-informed approach to uncovering the root causes of emotional and physical patterns.', color: 'text-[#34c5c5]', img: 'colibri-image-166.png' },
                { icon: TreePine, title: 'Mindfulness Integration', desc: 'Present-moment awareness practices that build resilience and emotional regulation.', color: 'text-[#84d7d7]', img: 'colibri-image-169.png' },
                { icon: Mountain, title: 'Retreats: Immersive Healing', desc: 'Immersive retreat experiences designed for deep somatic work in transformational settings.', color: 'text-[#84d7d7]', img: 'colibri-image-33.png' },
              ].map(({ icon: Icon, title, desc, color, img }, i) => (
                <div key={i} className="bg-white rounded-xl p-5 flex gap-4 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                    <Image
                      src={`/images/krystalore/${img}`}
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
              <div className="bg-gradient-to-r from-[#34c5c5]/5 to-[#E8A849]/5 rounded-xl p-6 mt-6">
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
              <p className="text-[#34c5c5] font-semibold uppercase tracking-wider text-sm mb-2">Meet Krystalore</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Transforming Lives Through <span className="text-[#34c5c5]">Purpose & Passion</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Amazon Best-Selling Author, Keynote Speaker, Certified Life & Somatic Coach, and Corporate Wellness 
                Consultant—Krystalore Crews helps people build lives they don&apos;t need to escape from. With a unique 
                blend of military discipline, somatic wisdom, and real-world business experience, she meets you 
                exactly where you are.
              </p>
              <Link href="/about" className="bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white rounded-full px-6 py-3 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Learn More About Krystalore <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/krystalore/cropped-cropped-SAM_3131-scaled-1.jpg" alt="Krystalore Crews executive coach" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/krystalore/cropped-cropped-costa-rica-womens-wellness-retreat-scaled-1.jpg" alt="Womens somatic healing retreat" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg" alt="Krystalore Crews fitness coaching" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
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
            <p className="text-[#E8A849] font-semibold uppercase tracking-wider text-sm mb-2">Client Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Real People. <span className="text-[#E8A849]">Real Transformation.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Delcey', quote: 'Krystalore helped me see that I was carrying years of trauma in my body. Through somatic work, I finally found the relief that talk therapy alone couldn\'t give me. I feel like a completely different person—more grounded, more present, more alive.' },
              { name: 'Lynn', quote: 'The Beyond Limits community changed my life. I came in looking for fitness and left with a whole new perspective on leadership, relationships, and what it means to truly thrive. Krystalore is the real deal.' },
              { name: 'Diana', quote: 'As a military spouse, I felt invisible for years. Krystalore\'s coaching gave me my voice back. Her programs are thoughtful, powerful, and designed for people who are ready to stop playing small.' },
            ].map(({ name, quote }, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-[#34c5c5]/30 mb-4" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#84d7d7] to-[#34c5c5] rounded-full flex items-center justify-center text-white font-bold text-sm">{name[0]}</div>
                  <div>
                    <p className="font-bold text-gray-800">{name}</p>
                    <div className="flex text-[#E8A849]">
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
      <section className="py-20 px-4 bg-gradient-to-br from-[#37a6a6] via-[#37a6a6] to-[#34c5c5]/30" id="freedom-formula-downloads">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#84d7d7] font-semibold uppercase tracking-wider text-sm mb-2">Free Resources</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Freedom Formula <span className="text-[#84d7d7]">Downloads</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Five pillars. Five free guides. Your roadmap to lasting transformation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { pillar: 'Core', title: 'Unshakable You', icon: Shield, color: 'text-[#84d7d7] border-[#84d7d7]/30' },
              { pillar: 'Confidence', title: 'The Courage Code', icon: Flame, color: 'text-[#E8A849] border-[#E8A849]/30' },
              { pillar: 'Consistency', title: 'The Momentum Map', icon: Target, color: 'text-[#34c5c5] border-[#34c5c5]/30' },
              { pillar: 'Community', title: 'The Connection Code', icon: Users, color: 'text-[#84d7d7] border-[#84d7d7]/30' },
              { pillar: 'Celebration', title: 'The Joy Journal', icon: Sparkles, color: 'text-[#B8A9D4] border-[#B8A9D4]/30' },
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
            <Link href="/vault" className="bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
              <Download className="h-4 w-4" /> Download Free Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-4 bg-[#37a6a6]" id="content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#84d7d7] font-semibold uppercase tracking-wider text-sm mb-2">Featured Content</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Motivation That <span className="text-[#84d7d7]">Moves</span> You</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Monday Motivation LIVE', subtitle: 'Weekly Highlight', desc: 'Start your week with fire. Mindset, motivation, and real talk to push you forward.', icon: Play, img: 'colibri-image-66.png' },
              { title: 'Most People Quit Right Before It Gets Good', subtitle: 'Mindset Shift', desc: 'The breakthrough is closer than you think. Don\'t quit now—the best chapter is next.', icon: Flame, img: 'colibri-image-464.png' },
              { title: 'What Does All In Look Like?', subtitle: 'Going Deeper', desc: 'Going all in isn\'t about burning out—it\'s about alignment, focus, and relentless intentionality.', icon: Target, img: 'cropped-tmpq45x_5ac-2.webp' },
            ].map(({ title, subtitle, desc, icon: Icon, img }, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-colors group">
                <div className="h-48 relative overflow-hidden">
                  <Image src={`/images/krystalore/${img}`} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
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
            <Link href="/vault" className="bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform text-lg">
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
              <p className="text-[#84d7d7] font-semibold uppercase tracking-wider text-sm mb-2">The Blog</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Wake Up. Rise Up. <span className="text-[#84d7d7]">Level Up.</span></h2>
              <p className="text-gray-600 mb-8">Insights on leadership, resilience, somatic healing, and building a life of purpose. New posts weekly.</p>
              <div className="bg-[#F4F1EC] rounded-2xl overflow-hidden shadow-md mb-6">
                <div className="relative h-56">
                  <Image src="/images/krystalore/strong-sexy-leg-workouts-at-home.png" alt="Strong sexy leg workouts at home" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="p-6">
                  <p className="text-[#34c5c5] text-xs font-bold uppercase tracking-wider mb-2">Featured Post</p>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Strong, Sexy Leg Workouts at Home</h3>
                  <p className="text-gray-600 text-sm">Sculpt and strengthen your legs with these effective at-home workouts designed for all fitness levels.</p>
                </div>
              </div>
              <a href="/blog" className="bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white rounded-full px-6 py-3 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Read the Blog <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Social Feeds */}
            <div>
              <p className="text-[#E8A849] font-semibold uppercase tracking-wider text-sm mb-2">Follow Along</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay <span className="text-[#E8A849]">Connected</span></h2>
              <p className="text-gray-600 mb-8">Follow Krystalore across platforms for daily motivation, behind-the-scenes, and community updates.</p>
              <div className="space-y-4">
                {[
                  { platform: 'Instagram', handle: '@thecrewscoach', url: 'https://www.instagram.com/thecrewscoach/', color: 'from-pink-500 to-purple-600', desc: 'Daily motivation, BTS, and community moments' },
                  { platform: 'Facebook', handle: 'Krystalore Crews', url: 'https://www.facebook.com/krystalore/', color: 'from-blue-600 to-blue-700', desc: 'LIVE sessions, events, and community groups' },
                  { platform: 'TikTok', handle: '@thecrewscoach', url: 'https://www.tiktok.com/@thecrewscoach', color: 'from-gray-900 to-gray-800', desc: 'Quick tips, motivation, and real talk' },
                  { platform: 'YouTube', handle: 'Krystalore', url: 'https://www.youtube.com/user/krystalore', color: 'from-red-600 to-red-700', desc: 'Full workouts, interviews, and keynotes' },
                  { platform: 'LinkedIn', handle: 'Krystalore Crews', url: 'https://www.linkedin.com/in/krystalore-crews/', color: 'from-blue-700 to-blue-800', desc: 'Corporate insights and leadership content' },
                ].map(({ platform, handle, url, color, desc }, i) => (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#F4F1EC] rounded-xl p-4 hover:shadow-md transition-shadow group">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-lg">{platform[0]}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm">{platform}</p>
                      <p className="text-gray-500 text-xs">{handle} — {desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#34c5c5] transition-colors" />
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
            <p className="text-[#34c5c5] font-semibold uppercase tracking-wider text-sm mb-2">For Organizations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Corporate Wellness & <span className="text-[#34c5c5]">Leadership Solutions</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Elevate your team&apos;s performance, resilience, and well-being with customized programs designed for the modern workplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/krystalore/cropped-SAM_3454-scaled-2.jpg" alt="Leadership retreats with Krystalore Crews" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Leadership Retreats</p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/krystalore/cropped-cropped-SAM_3152-scaled-1.jpg" alt="Corporate wellness workshops" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Corporate Wellness</p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/krystalore/cropped-KrystalCrews-145-scaled-1.jpg" alt="Keynote speaking and corporate events" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-bold text-sm">Keynote Speaking</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Megaphone, title: 'Lead Beyond Limits Speaking & Keynotes', desc: 'Powerful keynotes that ignite leadership transformation and inspire lasting change.', color: 'text-[#34c5c5]' },
              { icon: Brain, title: 'EQ & Wellness Workshops', desc: 'Interactive workshops on emotional intelligence, stress management, and peak performance.', color: 'text-[#84d7d7]' },
              { icon: Shield, title: 'Sponsor a Veteran Partnership', desc: 'Partner with us to support veteran transition, wellness, and leadership development.', color: 'text-[#E8A849]' },
              { icon: Dumbbell, title: 'Performance in Motion Corporate Fitness', desc: 'On-site and virtual fitness programs that energize teams and boost productivity.', color: 'text-[#34c5c5]' },
              { icon: Users, title: 'Team Dynamics & Leadership Retreats', desc: 'Off-site experiences that build trust, alignment, and high-performance culture.', color: 'text-[#84d7d7]' },
              { icon: Palette, title: 'Customized Corporate Solutions', desc: 'Fully tailored programs designed around your organization\'s unique needs and goals.', color: 'text-[#84d7d7]' },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <div key={i} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Icon className={`h-8 w-8 ${color} mb-4`} />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/book" className="bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform text-lg">
              <Building2 className="h-5 w-5" /> Request Corporate Info
            </a>
          </div>
        </div>
      </section>

      {/* Krystalore Speaks - Press / Media */}
      <section className="py-20 px-4 bg-white" id="media">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#34c5c5] font-semibold uppercase tracking-wider text-sm mb-2">As Seen In</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Krystalore <span className="text-[#34c5c5]">Speaks</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/krystalore/LowResolution-172.jpg" alt="Krystalore Crews speaking at a leadership and wellness event" fill className="object-cover" sizes="(max-width: 768px) 100vw, 384px" />
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/krystalore/REM08628.jpg" alt="Krystalore Crews press and media professional photo" fill className="object-cover" sizes="(max-width: 768px) 100vw, 384px" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {['FORCE Magazine', 'Amazon Best-Selling Author', 'NAWBO', 'Breakfast with Champions'].map((name, i) => (
              <div key={i} className="bg-gray-50 px-6 py-3 rounded-full text-gray-700 font-semibold text-sm border border-gray-200">
                <Award className="h-4 w-4 inline mr-2 text-[#34c5c5]" />{name}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-800 text-center mb-6">Featured Podcasts</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Women Entrepreneurs PR', 'Service to Success', 'Krystal Clear Life Podcast', 'Veterans Podcast'].map((podcast, i) => (
              <div key={i} className="bg-[#F4F1EC] p-4 rounded-xl text-center hover:shadow-md transition-shadow">
                <Headphones className="h-6 w-6 text-[#34c5c5] mx-auto mb-2" />
                <p className="font-semibold text-gray-800 text-sm">{podcast}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/podcasts" className="text-[#34c5c5] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              Listen to All Podcasts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Shop - Gear Up for Greatness */}
      <section className="py-20 px-4 bg-[#F4F1EC]" id="shop">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#E8A849] font-semibold uppercase tracking-wider text-sm mb-2">The Shop</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Gear Up for <span className="text-[#E8A849]">Greatness</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <Image src="/images/krystalore/cropped-cropped-womens-wellness-retreat-costa-rica.jpeg" alt="Wellness lifestyle and self-care products" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white font-bold text-sm">Wellness Collection</p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <Image src="/images/krystalore/cropped-tmpq45x_5ac.webp" alt="Beyond Limits lifestyle and activewear" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white font-bold text-sm">Lifestyle</p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
              <Image src="/images/krystalore/cropped-SAM_3454-scaled-2.jpg" alt="Beyond Limits merchandise and apparel" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
                <Icon className="h-8 w-8 text-[#E8A849] mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop" className="bg-gradient-to-r from-[#E8A849] to-[#D4A843] text-white rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
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
