'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'

const characterImages = [
  { src: '/images/logos/00-gypsy-tours-original.png', alt: 'Gypsy Tour Guide' },
  { src: '/images/logos/01-entrepreneur.png', alt: 'The Boss' },
  { src: '/images/logos/02-mountain-climber.png', alt: 'Summit Seeker' },
  { src: '/images/logos/03-bikini-model.png', alt: 'Bronze Goddess' },
  { src: '/images/logos/04-runner.png', alt: 'Speed Demon' },
  { src: '/images/logos/05-cruise-hostess.png', alt: 'Party Queen' },
  { src: '/images/logos/06-superwoman.png', alt: 'Superwoman' },
  { src: '/images/logos/07-retreat-meditation.png', alt: 'Zen Master' },
  { src: '/images/logos/08-waterfall-rappel.png', alt: 'Jungle Queen' },
  { src: '/images/logos/09-military.png', alt: 'The Commander' },
  { src: '/images/logos/10-phd-graduate.png', alt: 'The Scholar' },
  { src: '/images/logos/dress-teal-sparkle.png', alt: 'Teal Sparkle' },
  { src: '/images/logos/dress-green-tropical.png', alt: 'Tropical Queen' },
  { src: '/images/logos/dress-blue-festival.png', alt: 'Festival Queen' },
]

const partners = [
  {
    name: 'Soft Circle AI',
    url: 'https://softcircle.ai',
    domain: 'softcircle.ai',
    description: 'AI-powered investor discovery and soft circling platform. Connect with the right investors for your deals through intelligent matching and relationship-first outreach.',
    color: 'from-violet-500 to-purple-600',
    icon: '🤖',
  },
  {
    name: 'MoneyWords',
    url: 'https://moneywords.org',
    domain: 'moneywords.org',
    description: 'High-intent keyword intelligence and targeted lead generation. Find the exact people searching for what you sell, with full contact data and intent signals.',
    color: 'from-emerald-500 to-green-600',
    icon: '💰',
  },
  {
    name: 'MultiFamilyOffice AI',
    url: 'https://multifamilyoffice.ai',
    domain: 'multifamilyoffice.ai',
    description: 'AI-powered deal analysis for multifamily real estate. Geek Scores, BS Meters, and Joint Venture flagging to cut through the noise and find real opportunities.',
    color: 'from-green-500 to-emerald-600',
    icon: '🏢',
  },
  {
    name: 'Jeff Cline',
    url: 'https://jeff-cline.com',
    domain: 'jeff-cline.com',
    description: 'Technology strategist, agency builder, and the architect behind the platforms that power modern business. SEO tools, lead generation, and full-stack digital infrastructure.',
    color: 'from-orange-500 to-red-500',
    icon: '⚡',
  },
  {
    name: 'Investor Discovery Tour',
    url: 'https://investordiscoverytour.com',
    domain: 'investordiscoverytour.com',
    description: 'Exclusive investor discovery events connecting entrepreneurs with capital. Curated networking tours where deals happen naturally over shared experiences.',
    color: 'from-amber-500 to-yellow-600',
    icon: '🌎',
  },
  {
    name: 'Honduras Ambiental',
    url: 'https://hondurasabiental.org',
    domain: 'hondurasabiental.org',
    description: 'Environmental conservation and sustainable development in Honduras. Supporting communities, protecting ecosystems, and building a greener future in Central America.',
    color: 'from-teal-500 to-cyan-600',
    icon: '🌿',
  },
]

const services = [
  {
    title: 'Corporate Events',
    description: 'Bring Krystalore to your next corporate gathering. High-energy keynotes, team building workshops, and transformational experiences that your team will talk about for years.',
    icon: '🏢',
  },
  {
    title: 'Hype Girl',
    description: 'Need someone to light the room on fire? Krystalore brings the energy, the confidence, and the vibe that turns any event from ordinary to legendary.',
    icon: '🔥',
  },
  {
    title: 'Motivational Speaking',
    description: 'From military spouse resilience to entrepreneurial grit, Krystalore delivers keynotes that move audiences to action. Real stories, real transformation, zero fluff.',
    icon: '🎤',
  },
  {
    title: 'Leadership Training',
    description: 'Beyond Limits leadership programs that combine somatic healing, fitness discipline, and executive coaching. Build leaders who lead from the inside out.',
    icon: '👑',
  },
  {
    title: 'Retreat Facilitation',
    description: 'Caribbean retreats, wellness getaways, and immersive experiences designed to reset, reconnect, and reignite. She brings the island, you bring the open mind.',
    icon: '🏝️',
  },
  {
    title: 'Fitness & Wellness',
    description: 'The 34-Minute Performance Protocol, Beyond Limits Bootcamp, and personalized wellness programming. Mind, body, and everything in between.',
    icon: '💪',
  },
]

import KrystalRating from '@/components/KrystalRating'

export default function PartnersPage() {
  const [leadData, setLeadData] = useState<{ firstName: string; lastName: string; email: string; phone: string } | null>(null)
  const [reviews, setReviews] = useState<any[]>([])
  const [reviewForm, setReviewForm] = useState({ firstName: '', rating: 5, review: '' })
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [reviewSubmitted, setReviewSubmitted] = useState(false)

  useEffect(() => {
    // Check sessionStorage for lead data passed from /gypsy-tours
    const stored = sessionStorage.getItem('gypsy-tours-lead')
    if (stored) {
      setLeadData(JSON.parse(stored))
    }
    // Fetch reviews
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews?source=partners&limit=20')
      const data = await res.json()
      if (data.reviews) setReviews(data.reviews)
    } catch (err) {
      console.error('Failed to fetch reviews:', err)
    }
  }

  const handlePartnerClick = async (partner: typeof partners[0]) => {
    // If we have lead data from the form, send it to CRM with this partner as source
    if (leadData) {
      try {
        await fetch('/api/partner-click', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            partnerSite: partner.domain,
            firstName: leadData.firstName,
            lastName: leadData.lastName,
            email: leadData.email,
            phone: leadData.phone,
          }),
        })
      } catch (err) {
        console.error('Failed to track partner click:', err)
      }
    }
    // Open partner site in new tab
    window.open(partner.url, '_blank')
  }

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: reviewForm.firstName,
          rating: reviewForm.rating,
          review: reviewForm.review,
          source: 'partners',
        }),
      })
      setReviewSubmitted(true)
      setShowReviewForm(false)
      fetchReviews()
    } catch (err) {
      console.error('Failed to submit review:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero Section - Character Collage */}
      <section className="relative pt-20 pb-16 overflow-hidden">

        {/* Collage Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="grid grid-cols-7 gap-1 h-full">
            {characterImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-300 text-sm font-medium tracking-wider uppercase">Welcome, Partner</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Thank You for Visiting{' '}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Gypsy Tours
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
            Join our WhatsApp group to get instant communications, updates, and special opportunities from Gypsy Tours.
          </p>

          <a
            href="https://chat.whatsapp.com/JRG3wbuTSJA3U3DqqAPzZR?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl shadow-green-500/25 transition-all duration-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join Our WhatsApp Group
          </a>
        </div>

        {/* Character Collage Strip */}
        <div className="relative mt-12 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-7 md:grid-cols-14 gap-2">
            {characterImages.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:z-10">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No form on partners -- form lives on /gypsy-tours */}

      {/* Book Krystalore Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Book{' '}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Krystalore
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you need a powerhouse keynote speaker, a corporate retreat facilitator, or someone who can turn any room into the best night of your life -- Krystalore delivers. Every. Single. Time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://link.elite360.io/widget/group/VHMVUoVUFzFeuFXSNJuj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-teal-500/25 transition-all duration-300 hover:scale-105"
            >
              Book Krystalore for Your Event
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="text-emerald-300 text-sm font-medium tracking-wider uppercase">Strategic Partnerships</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Partners</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Curated partnerships with platforms and organizations that share our mission of empowerment, innovation, and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-teal-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${partner.color}`} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-3xl mb-2 block">{partner.icon}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-teal-400/70 font-mono">{partner.domain}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">{partner.description}</p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handlePartnerClick(partner)}
                      className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm"
                    >
                      Visit Now
                    </button>
                    <button
                      onClick={() => handlePartnerClick(partner)}
                      className="flex-1 bg-gray-700/50 hover:bg-gray-600/50 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 border border-gray-600/30 hover:border-teal-500/30 text-sm"
                    >
                      Get More Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Krystal Review Platform */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Krystal Reviews
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Rate your experience with Krystalore. 1 to 5 krystals -- how did she change your game?
            </p>
          </div>

          {/* Review Form Toggle */}
          <div className="text-center mb-12">
            {!reviewSubmitted ? (
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/25 transition-all duration-300"
              >
                {showReviewForm ? 'Cancel' : 'Leave a Krystal Review'}
              </button>
            ) : (
              <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-6 max-w-md mx-auto">
                <p className="text-emerald-400 font-bold text-lg">Your review has been submitted. Thank you!</p>
              </div>
            )}
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <div className="max-w-lg mx-auto mb-16">
              <form onSubmit={handleReviewSubmit} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your First Name</label>
                  <input
                    type="text"
                    required
                    value={reviewForm.firstName}
                    onChange={(e) => setReviewForm({ ...reviewForm, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">How Many Krystals?</label>
                  <div className="flex gap-3 justify-center">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, rating: n })}
                        className="focus:outline-none transform hover:scale-110 transition-transform"
                      >
                        <div
                          className={`w-10 h-10 transform rotate-45 ${
                            n <= reviewForm.rating
                              ? 'bg-gradient-to-br from-teal-400 to-emerald-600 shadow-lg shadow-emerald-500/40'
                              : 'bg-gray-600 hover:bg-gray-500'
                          } border border-emerald-700/50 transition-all duration-200`}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-center text-teal-400 text-sm mt-2">{reviewForm.rating} / 5 Krystals</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Review</label>
                  <textarea
                    required
                    value={reviewForm.review}
                    onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 h-32"
                    placeholder="Tell us about your experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
                >
                  Submit Krystal Review
                </button>
              </form>
            </div>
          )}

          {/* Reviews Display */}
          {reviews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review: any, i: number) => (
                <div key={i} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">{review.firstName}</h4>
                    <KrystalRating rating={review.rating} size="sm" />
                  </div>
                  <p className="text-gray-400 mb-3">"{review.review}"</p>
                  <p className="text-xs text-gray-600">
                    {new Date(review.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
            >
              View All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* JC Easter Egg */}
      <div className="text-center pb-2">
        <a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a>
      </div>

      <Footer />
    </div>
  )
}
