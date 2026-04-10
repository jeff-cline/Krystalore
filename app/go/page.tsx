'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import KrystaloreDiamond from '@/components/KrystaloreDiamond'
import { ArrowRight, Dumbbell, Mic, Building2, UserCheck, BookOpen, Headphones, GraduationCap, Mountain, Handshake, MapPin, Users, Brain, Sparkles, Shield, Flame, Target, Clock, Calendar, Eye, Smartphone, Zap, Play } from 'lucide-react'

export default function GoPage() {
  const services = [
    'Fitness', 'Speaking', 'Corporate Retreats', 'Private Coaching', 'Books', 
    'Podcast', 'Courses', 'Veterans', 'Gypsy Tours', 'Bootcamp', 
    'Coworking', 'Retreats', 'Partners'
  ]

  const serviceBoxes = [
    {
      title: 'Fitness',
      image: '/images/scraped/fitness-hero-banner.png',
      desc: 'HIIT, kickboxing, and functional training to push your body and sharpen your mind.',
      link: '/fitness'
    },
    {
      title: 'Speaking & Keynotes',
      image: '/images/scraped/speaking.jpg',
      desc: 'Powerful keynotes on leadership, resilience, and transformation for your next event.',
      link: '/keynote-speaker'
    },
    {
      title: 'Corporate Retreats',
      image: '/images/corporate-retreat/sam-retreat-group.jpg',
      desc: 'Custom retreat experiences that build trust, alignment, and high-performance culture.',
      link: '/corporate-retreat-planning'
    },
    {
      title: 'Private Coaching',
      image: '/images/krystalore/cropped-KrystalCrews-15-scaled-1.jpg',
      desc: 'One-on-one experiential coaching for leaders ready to transform every area of life.',
      link: '/private'
    },
    {
      title: 'Books',
      image: '/images/scraped/book-resilience.png',
      desc: 'Amazon best-selling books on resilience, planning, and personal transformation.',
      link: '/books'
    },
    {
      title: 'Podcast',
      image: '/images/krystalore/cropped-tmpq45x_5ac.webp',
      desc: 'Real conversations on healing, leadership, and building a life beyond limits.',
      link: '/podcasts'
    },
    {
      title: 'Courses',
      image: '/images/krystalore/cropped-cropped-HighResolution-80-scaled-1.jpg',
      desc: 'Self-paced and live courses on leadership, emotional intelligence, and wellness.',
      link: '/courses'
    },
    {
      title: 'Veteran Programs',
      image: '/images/logos/09-military.png',
      desc: 'Specialized coaching and fitness programs honoring those who served.',
      link: '/veteran-coaching'
    },
    {
      title: 'Gypsy Tours',
      image: '/images/gypsy-tours-character.png',
      desc: 'Curated travel experiences that combine adventure, wellness, and transformation.',
      link: '/gypsy-tours'
    },
    {
      title: 'Bootcamp',
      image: '/images/scraped/fitness-class-1.jpg',
      desc: 'Beyond Limits Bootcamp — live virtual fitness Mon/Wed/Fri with 24/7 replay access.',
      link: '/bootcamp'
    },
    {
      title: 'Coworking Power Hour',
      image: '/images/coworking/coworking-hero.png',
      desc: 'Free weekly co-working sessions on Zoom. Show up, get focused, get it done.',
      link: '/coworking'
    },
    {
      title: 'Retreats',
      image: '/images/retreat/retreat-group-01.jpg',
      desc: 'Transformative retreat experiences for women, veterans, entrepreneurs, and couples.',
      link: '/retreat'
    },
    {
      title: 'Partners',
      image: '/images/logos/krystalore-beach-networking-event.png',
      desc: 'Strategic partnerships and collaboration opportunities.',
      link: '/partners'
    }
  ]

  const freedomFormulaCCards = [
    {
      title: 'Core',
      image: '/images/logos/06-superwoman.png',
      desc: 'Your unshakable foundation. Identity, values, and the inner work that makes everything else possible.',
      link: '#core',
      accent: '#84d7d7'
    },
    {
      title: 'Confidence',
      image: '/images/logos/01-entrepreneur.png',
      desc: 'The courage to show up, speak up, and stand in your power. Built through action, not affirmation.',
      link: '#confidence',
      accent: '#E8A849'
    },
    {
      title: 'Consistency',
      image: '/images/logos/04-runner.png',
      desc: 'Small daily disciplines that compound into extraordinary results. The momentum that changes everything.',
      link: '#consistency',
      accent: '#34c5c5'
    },
    {
      title: 'Community',
      image: '/images/scraped/fitness-group-outdoor.jpg',
      desc: 'Your tribe. The people who hold you accountable, celebrate your wins, and refuse to let you shrink.',
      link: '/community',
      accent: '#84d7d7'
    },
    {
      title: 'Celebration',
      image: '/images/logos/07-retreat-meditation.png',
      desc: 'Celebrating wins and honoring each day and every step of your way in your pursuit of what sets your soul on fire. Balance, rest, retreats, meditation, and grounded happiness.',
      link: '#celebration',
      accent: '#B8A9D4'
    }
  ]

  const productivityTools = [
    {
      title: 'Weekly Co-Working Power Hour',
      image: '/images/coworking/coworking-hero.png',
      desc: 'Free weekly co-working sessions on Zoom. Show up, focus up, and get it done alongside a motivated community.',
      link: '/coworking',
      badge: 'FREE'
    },
    {
      title: 'Planners',
      image: '/images/books/krystal-clear-life-planner.png',
      desc: 'The Krystal Clear Life Planner — design each day, week, and quarter with intention and clarity.',
      link: '/planner'
    },
    {
      title: 'Habit Trackers',
      image: '/images/motivation-quotes/atomic-habits-quotes.png',
      desc: 'Track your daily habits, build momentum, and watch small disciplines compound into extraordinary results.',
      link: '/planner'
    },
    {
      title: 'Vision Board Workshops',
      image: '/images/vision-board/vision-board-hero.png',
      desc: 'Visualize your goals and create a magnetic blueprint for the life you desire.',
      link: '/vision-board'
    },
    {
      title: 'Hilites App',
      desc: 'Capture daily wins and micro-moments that fuel your motivation and track your transformation journey.',
      link: '/products',
      isIcon: true
    },
    {
      title: 'S.M.A.R.T. Technology',
      image: '/images/logos/10-phd-graduate.png',
      desc: 'AI-powered tools and frameworks for peak performance, strategic planning, and accountability.',
      link: '/services'
    }
  ]

  const memberships = [
    {
      title: 'THRIVE Network',
      price: 'FREE',
      desc: 'Free community access. Connect, grow, and find your tribe in our Beyond Limits Facebook community.',
      link: 'https://www.facebook.com/groups/crewsbeyondlimits',
      external: true,
      cta: 'Join Free',
      accent: '#84d7d7'
    },
    {
      title: 'Beyond Limits Bootcamp',
      subtitle: 'Virtual Fitness',
      price: '$89-109/mo',
      desc: '30-minute HIIT, Kickboxing, accountability, and mindset & nutrition workshops. Live sessions recorded and available 24/7 to meet your busy schedule. Modifications for low, medium, and high impact — no equipment needed.',
      smallPrint: 'Special discount pricing for Veterans',
      link: '/bootcamp',
      cta: 'Join Bootcamp',
      accent: '#84d7d7'
    },
    {
      title: 'Beyond Limits Health Mastery',
      subtitle: 'Group Coaching',
      price: '$250/mo',
      desc: 'Complete wellness transformation. Nutrition, fitness, somatic healing, and group coaching to elevate every area of your health.',
      link: '/fitness',
      cta: 'Transform',
      accent: '#E8A849'
    },
    {
      title: 'Private Inner Circle',
      subtitle: 'Premium Private Coaching',
      price: 'Starting at $800/mo',
      desc: 'Premium private coaching on fitness, business, and relationships. Apply for personalized transformation.',
      link: '/apply',
      cta: 'Apply Here',
      accent: '#B8A9D4'
    },
    {
      title: 'Private Business Bootcamp',
      subtitle: 'S.M.A.R.T. Experience',
      price: '$3,000/mo',
      image: '/images/logos/01-entrepreneur.png',
      desc: 'The ultimate private coaching experience with S.M.A.R.T. technology integration for high-performing entrepreneurs and executives.',
      link: '/apply',
      cta: 'Apply',
      accent: '#37a6a6'
    }
  ]

  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image 
              src="/images/krystalore/63d23c1829f84e249e2d8003.png" 
              alt="Krystalore Crews" 
              width={200} 
              height={80}
              className="mx-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Redefine What's Possible — Mind, Body, and Beyond
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Stop surviving and start thriving. We help you build a life you don't need to escape from—through executive coaching, somatic healing, fitness, and community that meets you exactly where you are.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book" 
              className="bg-[#34c5c5] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#37a6a6] transition-colors inline-flex items-center justify-center"
            >
              Book a Breakthrough Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="#services" 
              className="border-2 border-[#34c5c5] text-[#34c5c5] px-8 py-4 rounded-lg font-semibold hover:bg-[#34c5c5] hover:text-white transition-colors"
            >
              Explore More Below
            </Link>
          </div>
        </div>
      </section>

      {/* Scrolling Service Bar */}
      <section id="services" className="bg-white py-8 overflow-hidden">
        <div className="flex animate-scroll">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 px-6 py-2 bg-gradient-to-r from-[#34c5c5] to-[#84d7d7] text-white rounded-full text-sm font-medium"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Service Boxes Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceBoxes.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link 
                    href={service.link}
                    className="text-[#34c5c5] hover:text-gray-800 font-semibold inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freedom Formula Section */}
      <section className="py-20" style={{backgroundColor: '#F4F1EC'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Part - Left/Right Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left side - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/krystalore/cropped-KrystalCrews-185-scaled-1.jpg"
                  alt="Krystalore"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6">
              <p className="text-[#34c5c5] text-sm font-semibold tracking-wider uppercase">
                THE FREEDOM FORMULA
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                The Framework for Energy, Confidence, and Sustainable Success
              </h2>
              <p className="text-gray-600">
                You don't need another strategy—you need a foundation that actually sustains the life you're building.
              </p>
              <p className="text-gray-700">
                The Freedom Formula is my signature framework designed to help high performers—entrepreneurs, business owners, leaders, athletes, and Veterans—realign, rebuild, and rise without burnout. Rooted in the 5 C's: Core, Confidence, Consistency, Community, and Celebration, this approach brings you back to what truly matters so you can create success that feels as good as it looks.
              </p>
              <p className="text-gray-700">
                Whether you're navigating a season of change, recovering from burnout, building and scaling your business, improving company wellness and culture, elevating your energy and fitness, or stepping onto bigger stages with confidence, this framework guides you to take a holistic approach—mentally, physically, and emotionally.
              </p>
              <p className="italic text-gray-800 text-lg">
                "You get to design the life that you desire."
              </p>
              <p className="text-gray-700">
                Freedom isn't something you find—it's something you create. It's built when you invest the time to get back to basics, strengthen your foundation, and lead your life—and your leadership—with intention.
              </p>
            </div>
          </div>

          {/* 5 C Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {freedomFormulaCCards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.desc}</p>
                <Link 
                  href={card.link}
                  className="px-4 py-2 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                  style={{backgroundColor: card.accent}}
                >
                  Go
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity Tools & Hacks Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Productivity Tools & Hacks
            </h2>
            <p className="text-lg text-gray-600">
              Work smarter, live bigger! Organize the chaos to live a more fulfilling life!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productivityTools.map((tool, index) => (
              <div key={index} className="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{backgroundColor: '#F4F1EC'}}>
                {tool.isIcon ? (
                  <div className="p-8 flex justify-center items-center h-48 bg-gradient-to-br from-[#84d7d7] to-[#34c5c5]">
                    <Smartphone className="h-16 w-16 text-white" />
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <Image
                      src={tool.image as string}
                      alt={tool.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {tool.badge && (
                      <div className="absolute top-4 right-4 bg-[#84d7d7] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {tool.badge}
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.desc}</p>
                  <Link 
                    href={tool.link}
                    className="text-[#34c5c5] hover:text-gray-800 font-semibold inline-flex items-center"
                  >
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="py-20 bg-gradient-to-b from-[#F4F1EC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Memberships
            </h2>
            <p className="text-lg text-gray-600">
              We meet you wherever you're at in your fitness, personal growth, or business journey, and wherever you're at in the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {memberships.map((membership, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{borderTop: `4px solid ${membership.accent}`}}>
                <div className="p-6">
                  {membership.image && (
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <Image
                        src={membership.image}
                        alt={membership.title}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{membership.title}</h3>
                  {membership.subtitle && (
                    <p className="text-sm text-gray-600 mb-3">{membership.subtitle}</p>
                  )}
                  <div className="text-2xl font-bold mb-4" style={{color: membership.accent}}>
                    {membership.price}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{membership.desc}</p>
                  {membership.smallPrint && (
                    <p className="text-xs text-gray-500 mb-4">{membership.smallPrint}</p>
                  )}
                  <Link 
                    href={membership.link}
                    target={membership.external ? "_blank" : undefined}
                    rel={membership.external ? "noopener noreferrer" : undefined}
                    className="block w-full text-center px-4 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                    style={{backgroundColor: membership.accent}}
                  >
                    {membership.cta}
                  </Link>
                </div>
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
    </>
  )
}