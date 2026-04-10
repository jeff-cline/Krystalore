'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

// Pre-populated reviews from Gypsy Tours
const prePopulatedReviews = [
  { firstName: "Alejandra", lastName: "M.", location: "Mexico City", rating: 5, review: "The Pitons catamaran tour was absolutely magical! Krystalore's energy is contagious. Best day of our cruise!", createdAt: "2026-01-15T14:30:00Z" },
  { firstName: "James", lastName: "T.", location: "London, UK", rating: 5, review: "Cane Garden Bay was paradise. The hangover scale is spot-on -- I was a solid 4 and that beach was exactly what I needed.", createdAt: "2026-01-18T09:15:00Z" },
  { firstName: "Sofia", lastName: "R.", location: "Sao Paulo, Brazil", rating: 5, review: "The Baths at Virgin Gorda was bucket list worthy. Krystalore knows her stuff!", createdAt: "2026-01-22T11:45:00Z" },
  { firstName: "Klaus", lastName: "M.", location: "Berlin, Germany", rating: 5, review: "Harrison's Cave was amazing, and yes, the AC was a lifesaver. German efficiency meets Caribbean vibes.", createdAt: "2026-01-25T16:20:00Z" },
  { firstName: "Priya", lastName: "S.", location: "Mumbai, India", rating: 5, review: "Absolutely loved the zip line tour! Krystalore's recommendations are spot on. Can't wait for the next cruise!", createdAt: "2026-01-28T08:00:00Z" },
  { firstName: "Emma", lastName: "L.", location: "Sydney, Australia", rating: 5, review: "The 365 beaches tour in Antigua was bloody brilliant. Krystalore is a legend!", createdAt: "2026-02-01T13:00:00Z" },
  { firstName: "Hassan", lastName: "A.", location: "Cairo, Egypt", rating: 5, review: "Stingray City was surprisingly not terrifying, just like she promised. Amazing experience!", createdAt: "2026-02-03T10:30:00Z" },
  { firstName: "Maria", lastName: "G.", location: "Barcelona, Spain", rating: 5, review: "Nelson's Dockyard was gorgeous. History and views - perfect combo.", createdAt: "2026-02-05T15:45:00Z" },
  { firstName: "Pierre", lastName: "D.", location: "Paris, France", rating: 5, review: "Orient Beach on the French side was parfait. European vibes in the Caribbean!", createdAt: "2026-02-07T12:00:00Z" },
  { firstName: "Isabella", lastName: "F.", location: "Rome, Italy", rating: 5, review: "The Shirley Heights sunset party was legendary. Steel drums and panoramic views!", createdAt: "2026-02-09T18:30:00Z" },
  { firstName: "Grace", lastName: "K.", location: "Lagos, Nigeria", rating: 5, review: "The Oistins Fish Fry was the real Barbados experience. Local food and culture at its best!", createdAt: "2026-02-11T14:00:00Z" },
  { firstName: "David", lastName: "C.", location: "Toronto, Canada", rating: 5, review: "The America's Cup sailing was competitive and fun. Wind in your hair, exactly as advertised!", createdAt: "2026-02-13T09:45:00Z" },
  { firstName: "Carmen", lastName: "V.", location: "Caracas, Venezuela", rating: 5, review: "The rainforest zip line had incredible Piton views. Adrenaline rush for sure!", createdAt: "2026-02-15T11:30:00Z" },
  { firstName: "Hendrik", lastName: "B.", location: "Amsterdam, Netherlands", rating: 4, review: "Sage Mountain hike had views that made my jaw drop. Lush rainforest trail was perfect!", createdAt: "2026-02-17T07:15:00Z" },
  { firstName: "Rachel", lastName: "M.", location: "New York, USA", rating: 5, review: "Loterie Farm in St. Maarten is the hidden gem Krystalore promised. Pool in the jungle? Yes please.", createdAt: "2026-02-19T16:00:00Z" },
  { firstName: "Thandiwe", lastName: "N.", location: "Cape Town, South Africa", rating: 5, review: "Shirley Heights sunset had steel drums and the best rum punch of my life. Legendary is right!", createdAt: "2026-02-21T17:30:00Z" },
  { firstName: "Suki", lastName: "K.", location: "Seoul, South Korea", rating: 5, review: "El Yunque rainforest was pure magic. La Mina Falls is something everyone should see!", createdAt: "2026-02-23T10:00:00Z" },
  { firstName: "Patricia", lastName: "L.", location: "San Juan, Puerto Rico", rating: 5, review: "As a local, I'm impressed. Krystalore found spots even I haven't been to! The Old San Juan walk was perfect.", createdAt: "2026-02-25T13:45:00Z" },
  { firstName: "Ana", lastName: "C.", location: "Bogota, Colombia", rating: 5, review: "The Pitons catamaran was the best day. Rum punch, snorkeling, and sisterhood.", createdAt: "2026-02-27T11:15:00Z" },
  { firstName: "Derek", lastName: "W.", location: "Kingston, Jamaica", rating: 5, review: "Cane Garden Bay reminded me of home. Reggae, rum punch, hammock life. Krystalore knows the vibes!", createdAt: "2026-03-01T14:30:00Z" },
  { firstName: "Kwame", lastName: "A.", location: "Accra, Ghana", rating: 5, review: "The networking on this cruise was incredible. Met my next business partner on a Gypsy Tour!", createdAt: "2026-03-03T09:00:00Z" },
  { firstName: "William", lastName: "H.", location: "Chicago, USA", rating: 5, review: "I came for the cruise, stayed for the community. Gypsy Tours is about the people you meet.", createdAt: "2026-03-05T15:00:00Z" },
  { firstName: "Nneka", lastName: "I.", location: "Abuja, Nigeria", rating: 5, review: "As a female entrepreneur, the connections I made were invaluable. Business + beaches = perfection.", createdAt: "2026-03-07T12:30:00Z" },
  { firstName: "Tyler", lastName: "R.", location: "Austin, TX, USA", rating: 4, review: "The hangover scale is genius. Was a solid 5 and Condado Beach saved my life. Thank you Krystalore!", createdAt: "2026-03-09T08:45:00Z" },
  { firstName: "Sarah", lastName: "M.", location: "Los Angeles, CA, USA", rating: 5, review: "I've traveled the world and Gypsy Tours is the most fun I've had. Krystalore is everything.", createdAt: "2026-03-11T16:15:00Z" },
  { firstName: "Rosa", lastName: "D.", location: "Cartagena, Colombia", rating: 5, review: "Found my tribe on this cruise. Entrepreneurs, dreamers, vagabonds -- my people.", createdAt: "2026-03-13T10:30:00Z" },
  { firstName: "Ibrahim", lastName: "T.", location: "Istanbul, Turkey", rating: 5, review: "The networking cruise concept is genius. Business happens naturally over adventures.", createdAt: "2026-03-14T14:00:00Z" },
  { firstName: "Madison", lastName: "K.", location: "Miami, FL, USA", rating: 5, review: "I've done cruises before but never like this. Gypsy Tours made every port day an adventure.", createdAt: "2026-03-15T09:30:00Z" },
]

import KrystalRating from '@/components/KrystalRating'

export default function ReviewsPage() {
  const [dbReviews, setDbReviews] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ firstName: '', rating: 5, review: '' })
  const [submitted, setSubmitted] = useState(false)
  const [filter, setFilter] = useState<number | null>(null)

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews?limit=500')
      const data = await res.json()
      if (data.reviews) setDbReviews(data.reviews)
    } catch (err) {
      console.error('Failed to fetch reviews:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          rating: form.rating,
          review: form.review,
          source: 'reviews-page',
        }),
      })
      setSubmitted(true)
      setShowForm(false)
      fetchReviews()
    } catch (err) {
      console.error('Failed to submit review:', err)
    }
  }

  // Merge pre-populated + DB reviews, sort by date desc
  const allReviews = [
    ...prePopulatedReviews.map(r => ({ ...r, source: 'prepopulated' })),
    ...dbReviews.map(r => ({ ...r, source: 'database' })),
  ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const filteredReviews = filter ? allReviews.filter(r => r.rating === filter) : allReviews

  // Stats
  const avgRating = allReviews.length > 0
    ? (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1)
    : '0'
  const ratingCounts = [5, 4, 3, 2, 1].map(n => ({
    rating: n,
    count: allReviews.filter(r => r.rating === n).length,
    pct: allReviews.length > 0 ? Math.round((allReviews.filter(r => r.rating === n).length / allReviews.length) * 100) : 0,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/group-sunset.jpg" alt="Krystalore Crews happy clients and reviews" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium tracking-wider uppercase">Krystal Review Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Krystal Reviews
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real experiences. Real krystals. See what people are saying about Krystalore and Gypsy Tours.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Average Rating */}
            <div className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                {avgRating}
              </div>
              <KrystalRating rating={Math.round(parseFloat(avgRating))} size="md" />
              <p className="text-gray-500 text-sm mt-2">{allReviews.length} reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="col-span-2 space-y-2">
              {ratingCounts.map(({ rating, count, pct }) => (
                <div key={rating} className="flex items-center gap-3">
                  <button
                    onClick={() => setFilter(filter === rating ? null : rating)}
                    className={`text-sm font-medium w-20 text-left transition-colors ${
                      filter === rating ? 'text-teal-400' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {rating} krystal{rating !== 1 ? 's' : ''}
                  </button>
                  <div className="flex-1 bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-gray-500 text-sm w-12 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {!submitted ? (
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-105"
            >
              {showForm ? 'Cancel' : 'Write a Krystal Review'}
            </button>
          ) : (
            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-emerald-400 font-bold">Review submitted. Thank you!</p>
            </div>
          )}

          {showForm && (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 space-y-6 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Krystal Rating</label>
                <div className="flex justify-center">
                  <KrystalRating rating={form.rating} size="lg" interactive onChange={(n) => setForm({ ...form, rating: n })} />
                </div>
                <p className="text-center text-teal-400 text-sm mt-2">{form.rating} / 5 Krystals</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Review</label>
                <textarea
                  required
                  value={form.review}
                  onChange={(e) => setForm({ ...form, review: e.target.value })}
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
          )}
        </div>
      </section>

      {/* Filter indicator */}
      {filter && (
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm">Showing {filter}-krystal reviews</span>
            <button
              onClick={() => setFilter(null)}
              className="text-teal-400 hover:text-teal-300 text-sm underline"
            >
              Show all
            </button>
          </div>
        </div>
      )}

      {/* All Reviews */}
      <section className="py-8 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, i) => (
              <div
                key={i}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-white">
                      {review.firstName} {review.lastName || ''}
                    </h4>
                    {review.location && (
                      <p className="text-sm text-gray-500">{review.location}</p>
                    )}
                  </div>
                  <KrystalRating rating={review.rating} size="sm" />
                </div>

                <p className="text-gray-400 leading-relaxed mb-4">"{review.review}"</p>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-600">
                    {new Date(review.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                  {review.source === 'prepopulated' && (
                    <span className="text-xs bg-teal-900/30 text-teal-400 px-2 py-1 rounded-full border border-teal-500/20">
                      Verified Gypsy Tourist
                    </span>
                  )}
                </div>
              </div>
            ))}
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
