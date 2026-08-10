'use client'

import { useState, useEffect, useCallback } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { DynamicHeader } from '@/components/DynamicDate'
import RetreatInquiryModal from '@/components/retreat/RetreatInquiryModal'
import RetreatTestimonialScroller from '@/components/retreat/RetreatTestimonialScroller'
import { retreatTestimonials } from '@/data/retreat-testimonials'
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sunrise,
  Utensils,
  Dumbbell,
  TreePine,
  Users,
  Star,
  Crown,
  Sparkles,
  MapPin,
  Calendar,
  Check,
  ArrowRight,
  Phone,
  GraduationCap,
  Waves,
  Mountain,
  Coffee,
  Moon,
  Bed,
  Bath,
  Home,
  Wind,
} from 'lucide-react'
import type { Metadata } from 'next'

/* ─── Carousel Images ─── */
const carouselImages = [
  { src: '/images/retreat/villa-azure/swing-ocean.jpg', alt: 'Hanging porch swing on a private balcony overlooking the ocean at Villa Azure in Ocean Park, San Juan, Puerto Rico', caption: 'Your Swing Over the Ocean' },
  { src: '/images/retreat/villa-azure/ocean-palms.jpg', alt: 'Palm-lined Ocean Park beachfront just steps from the villa in San Juan, Puerto Rico', caption: 'Steps From the Ocean' },
  { src: '/images/retreat/villa-azure/pool.jpg', alt: 'Private heated pool with lounge chairs in the courtyard of the beachfront villa', caption: 'Private Heated Pool' },
  { src: '/images/retreat/villa-azure/terrace-lounge.jpg', alt: 'Shaded oceanfront terrace lounge with deep blue seating and umbrella', caption: 'Oceanfront Terrace Lounge' },
  { src: '/images/retreat/villa-azure/dining-ocean.jpg', alt: 'Bright dining room and bar seating with panoramic ocean views', caption: 'Dine With the Ocean in View' },
  { src: '/images/retreat/villa-azure/bedroom-ocean.jpg', alt: 'Beachfront suite with a window seat framing the Atlantic in San Juan', caption: 'Wake Up to the Water' },
  { src: '/images/retreat/villa-azure/suite-king.jpg', alt: 'King suite with ocean-blue artwork, wood floors and a garden window at Villa Azure', caption: 'Designer King Suites' },
  { src: '/images/retreat/villa-azure/lawn-ocean.jpg', alt: 'Landscaped lawn terrace looking out over the ocean at Villa Azure', caption: 'Ocean-View Lawn Terrace' },
  { src: '/images/retreat/villa-azure/living-room.jpg', alt: 'Open-plan living room with designer interiors and natural light at Villa Azure', caption: 'Designer Living Spaces' },
  { src: '/images/retreat/villa-azure/suite-twin-queen.jpg', alt: 'Twin queen suite with reclaimed-wood headboards and woven pendant lights', caption: 'Room for Every Guest' },
  { src: '/images/retreat/villa-azure/egg-chairs.jpg', alt: 'Tranquil interior courtyard with hanging egg chairs and a love seat swing', caption: 'Quiet Corners to Land In' },
  { src: '/images/retreat/villa-azure/suite-double.jpg', alt: 'Double suite with a full-height upholstered headboard wall and soft natural light', caption: 'Rest and Reset' },
  { src: '/images/retreat/villa-azure/kitchen.jpg', alt: 'Fully equipped chef kitchen with ocean-blue tile backsplash', caption: 'Full Chef&rsquo;s Kitchen' },
  { src: '/images/retreat/villa-azure/bathroom-marble.jpg', alt: 'Marble bathroom with a glass walk-in rain shower at the beachfront villa', caption: 'Spa-Inspired Bathrooms' },
]

/* ─── 7-Day Itinerary ─── */
const itinerary = [
  { day: 'Day 1', title: 'Arrival & Grounding', icon: Sunrise, desc: 'Land at SJU and be at the villa in 10 minutes. Settle into your suite at Villa Azure — beachfront in Ocean Park, steps from the water. Meet your retreat sisters over a welcome dinner prepared by a private chef, and set your intentions for the week ahead.' },
  { day: 'Day 2', title: 'Mind Reset & Movement', icon: Dumbbell, desc: 'Sunrise beach walk, then a morning fitness session by the private heated pool. Guided breakthrough coaching on releasing what no longer serves you. Afternoon spa treatment and journaling time on the oceanfront terrace.' },
  { day: 'Day 3', title: 'Adventure & Discovery', icon: Mountain, desc: 'Island adventure day — take an excursion to El Yunque National Rainforest, hike the trails and swim in the breathtaking waterfall. Reconnect with the wild, adventurous part of yourself. Evening gathering with soul-aligned conversation and a Caribbean sunset.' },
  { day: 'Day 4', title: 'Deep Healing & Clarity', icon: Heart, desc: 'Morning mindfulness and movement on the ocean-facing terrace. Deep-dive coaching session on mapping your next bold move in life, love, or business. Lunch overlooking the Atlantic, followed by pool time and sisterhood.' },
  { day: 'Day 5', title: 'Strength & Strategy', icon: Crown, desc: 'Energizing group workout on the sand. Business and life strategy workshop — building the blueprint for your next chapter. Afternoon free on Ocean Park beach. Chef-prepared dinner on the terrace as the sun goes down.' },
  { day: 'Day 6', title: 'Radiance & Renewal', icon: Sparkles, desc: 'Morning yoga by the pool. Glam session — dress up, beachfront photo shoot, feel unstoppable. Celebration dinner where every woman shares her breakthrough moment. Dance, laugh, cry together.' },
  { day: 'Day 7', title: 'Integration & Departure', icon: Waves, desc: 'Sunrise meditation on the beach. Closing ceremony with your retreat sisters, then a 10-minute ride back to SJU. Depart transformed — clearer, stronger, more magnetic than ever. You return home not as someone different, but as someone who finally owns all that she is.' },
]

export default function PuertoRicoRetreatPage() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => setCurrent(c => (c + 1) % carouselImages.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + carouselImages.length) % carouselImages.length), [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* ═══════════════ HERO ═══════════════ */}
      <DynamicHeader
        slug="pr-retreat"
        eyebrow="Revive & Thrive Retreat Experience"
        fallbackTitle="You Deserve to Be Treated Like a Queen"
        fallbackDescription="A 7-Day Luxury Wellness Retreat for High-Achieving Women Ready to Reset, Reflect, and Rise"
        fallbackDate="Puerto Rico · November 14–20, 2026"
        fallbackImage="/images/retreat/retreat-group-03.jpg"
        alt="Women celebrating at sunset on the Puerto Rico oceanview retreat estate"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.krystalorecrews.com/revive-and-thrive-retreat-checkout"
            className="inline-flex items-center justify-center gap-2 bg-[#41a7c9] hover:bg-[#2a7fa0] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-[#41a7c9]/30 hover:shadow-[#41a7c9]/40 transition-all duration-300 transform hover:scale-105"
          >
            Book Now <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://www.krystalorecrews.com/costa-rica-revival-retreat-waitlist"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#2a7fa0] text-[#2a7fa0] font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#2a7fa0]/5 transition-all duration-300"
          >
            Join Waitlist
          </a>
          <a
            href="https://krystalore.com/rise-and-thrive"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f3498c] to-[#d92d70] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            VIP Bundle Option <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </DynamicHeader>


      {/* ═══════════════ UPCOMING & PRIVATE RETREATS ═══════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <div className="mx-auto md:mx-0 w-full max-w-[32rem]">
              <Image
                src="/images/retreat/revive-and-thrive-retreats-logo.png"
                alt="Revive & Thrive Retreats — Ignite your Spirit, Thrive in Life"
                width={512}
                height={512}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-[#2a7fa0] font-semibold tracking-widest uppercase text-sm mb-3">Puerto Rico Retreat Options</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Puerto Rico Revive & Thrive Retreat</h2>
              <p className="text-gray-500 text-lg">
                Reserve the Puerto Rico retreat, join the waitlist for future events, or book a private retreat experience.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <p className="text-[#2a7fa0] font-bold uppercase tracking-widest text-xs mb-2">Featured Retreat</p>
              <h3 className="text-2xl font-bold mb-3">Puerto Rico Retreat</h3>
              <p className="text-gray-600 mb-5">A Caribbean reset for women ready to revive, reconnect, and rise.</p>
              <div className="flex flex-col gap-3 items-start">
                <a href="https://www.krystalorecrews.com/revive-and-thrive-retreat-checkout" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#41a7c9] hover:bg-[#2a7fa0] text-white font-bold px-6 py-3 rounded-full transition-colors">
                  Book Now <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://krystalore.com/rise-and-thrive" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f3498c] to-[#d92d70] text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform">
                  VIP Bundle Option <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <p className="text-[#f3498c] font-bold uppercase tracking-widest text-xs mb-2">Next Experience</p>
              <h3 className="text-2xl font-bold mb-3">Retreat Waitlist</h3>
              <p className="text-gray-600 mb-5">Get first notice for future retreat dates, rooms, and updates.</p>
              <div className="flex flex-col gap-3 items-start">
                <a href="https://www.krystalorecrews.com/revive-and-thrive-retreat-checkout" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#41a7c9] hover:bg-[#2a7fa0] text-white font-bold px-6 py-3 rounded-full transition-colors">
                  Book Now <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://www.krystalorecrews.com/costa-rica-revival-retreat-waitlist" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f3498c] to-[#d92d70] text-white font-bold px-6 py-3 rounded-full transition-colors">
                  Join the Waitlist <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <p className="text-[#2a7fa0] font-bold uppercase tracking-widest text-xs mb-2">Private Groups</p>
              <h3 className="text-2xl font-bold mb-3">Private Retreat Planning</h3>
              <p className="text-gray-600 mb-5">Bring your team, circle, or community together for a custom Beyond Limits retreat.</p>
              <Link href="https://www.krystalorecrews.com/costa-rica-retreat-private-request-page" className="inline-flex items-center gap-2 border-2 border-[#41a7c9] text-[#2a7fa0] font-bold px-6 py-3 rounded-full hover:bg-[#41a7c9]/5 transition-colors">
                Book Private Retreat <Phone className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ OPENING — THE WOMAN WHO DOES EVERYTHING ═══════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            You Take Care of <span className="text-[#2a7fa0]">Everyone.</span> When Was the Last Time Someone Took Care of <span className="text-[#f3498c]">You?</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              You run the business. You hold the family together. You show up for everyone — your clients, your team, your partner, your kids. You carry it all on your shoulders, and you make it look effortless.
            </p>
            <p>
              But behind the strength, there&apos;s a woman who&apos;s been putting herself last. A woman whose health, peace of mind, and personal joy have been on the back burner for far too long.
            </p>
            <p className="text-gray-900 font-medium text-xl md:text-2xl">
              This retreat exists for <em>her</em>. For <em>you</em>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ SCROLLING LOCATION CAROUSEL ═══════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2a7fa0] font-semibold tracking-widest uppercase text-sm mb-3">Your Private Paradise</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Villa Azure — Beachfront Estate
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A 4,000 sq ft designer villa in Ocean Park, San Juan — beachfront, steps to the ocean, and just 10 minutes from SJU airport
            </p>
          </div>

          {/* Carousel */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative aspect-[16/9]">
              {carouselImages.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority={i === 0}
                  />
                </div>
              ))}
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                <p className="text-white text-xl md:text-2xl font-semibold">{carouselImages[current].caption}</p>
              </div>
              {/* Navigation */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/50'}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════ WHAT'S INCLUDED ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              When I Say <span className="text-[#f3498c]">Treated Like a Queen</span>, This Is What I Mean
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              7 action-packed days. One life-changing transformation. Don&apos;t lift a finger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: 'Transformational Coaching', desc: 'Daily guided sessions to spark clarity, ignite self-reflection, and map out your next bold move in life, love, business, or wellness.' },
              { icon: Home, title: 'Luxury Accommodations', desc: 'Designer suites with king and queen beds and stunning ocean views, in a beachfront villa steps from the water. Comfort and elegance designed to help you fully unwind.' },
              { icon: Utensils, title: 'Private Chef & Nourishing Cuisine', desc: 'Delicious, healthy meals and refreshing beverages — all thoughtfully prepared to fuel your body and energize your spirit.' },
              { icon: Sunrise, title: 'Breathtaking Mornings', desc: 'Wake up to Caribbean sunrises that remind you daily how beautiful life can be when you put yourself first.' },
              { icon: Dumbbell, title: 'Daily Movement', desc: 'Energizing fitness and stretching sessions to awaken your body, clear your mind, and set the tone for powerful breakthroughs.' },
              { icon: TreePine, title: 'Island Adventure', desc: 'Step into your bold, adventurous self — ocean days on Ocean Park beach and an unforgettable excursion through El Yunque Rainforest, with breathtaking views and waterfall adventures.' },
              { icon: Crown, title: 'Butler-Level Service', desc: 'Be treated like the queen you are. Every detail is handled so you can fully relax, receive, and focus on YOU.' },
              { icon: Users, title: 'Soul-Aligned Sisterhood', desc: 'Leave with lifelong friendships with women who see you, support you, and are rising right alongside you.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#41a7c9]/5 transition-all duration-300 border border-gray-100 hover:border-[#41a7c9]/20">
                <item.icon className="w-10 h-10 text-[#2a7fa0] mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS — SCROLLING VIDEO WALL ═══════════════ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Women. Real <span className="text-[#f3498c]">Transformations.</span>
            </h2>
            <p className="text-gray-500 text-lg">
              In their own words &mdash; straight from past Revive &amp; Thrive retreats.
            </p>
          </div>
          <RetreatTestimonialScroller videos={retreatTestimonials} />
        </div>
      </section>

      {/* ═══════════════ 7-DAY ITINERARY ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#f3498c] font-semibold tracking-widest uppercase text-sm mb-3">Your Week of Transformation</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              7 Days That Will Change Everything
            </h2>
          </div>

          <div className="space-y-8">
            {itinerary.map((day, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#41a7c9]/10 to-[#f3498c]/10 flex items-center justify-center group-hover:from-[#41a7c9]/20 group-hover:to-[#f3498c]/20 transition-all duration-300">
                  <day.icon className="w-7 h-7 text-[#2a7fa0]" />
                </div>
                <div>
                  <p className="text-[#2a7fa0] font-semibold text-sm tracking-wide uppercase">{day.day}</p>
                  <h3 className="text-xl font-bold mb-2">{day.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{day.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT YOU'LL LEAVE WITH ═══════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src="/images/retreat/retreat-group-01.jpg"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover"
        />
        {/* keeps the cards and heading readable over the photo */}
        <div className="absolute inset-0 bg-[#17495c]/75" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            What You&apos;ll Walk Away With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              'Unshakable clarity about who you are and where you\'re going',
              'A renewed connection to your body, mind, and purpose',
              'Lifelong friendships and a support system that truly gets it',
              'Confidence that radiates and energy that lights up every room',
              'A strategic blueprint for your next chapter — in life and business',
              'The feeling of being fully seen, fully supported, and fully alive',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/95 backdrop-blur rounded-xl p-5 shadow-lg border border-white/40">
                <Check className="w-6 h-6 text-[#2a7fa0] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ YOUR HOST ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/retreat/retreat-group-05.jpg"
                  alt="Krystalore Crews - retreat host and transformational coach"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <p className="text-[#2a7fa0] font-semibold tracking-widest uppercase text-sm mb-3">About Your Host</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Krystalore Crews</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  22-year USAF Veteran. Former NFL Cheerleader. 28-time Marathoner. Cancer survivor. CEO of Crews Beyond Limits Consulting.
                </p>
                <p>
                  Krystalore knows what it means to carry the weight of the world on your shoulders — and she knows what it takes to put it down long enough to remember who you are underneath it all.
                </p>
                <p>
                  She empowers women to #CrewsBeyondLimits by sharing her experience from the military, surviving cancer, and overcoming being wheelchair-bound to succeeding as a competitive professional athlete, dancer, and entrepreneur.
                </p>
                <p className="text-gray-900 font-medium">
                  &ldquo;I am on a mission to empower every person on the planet to put themselves and their health first for at least 34 minutes per day.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BOOK A CALL CTA ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/retreat/villa-azure/ocean-palms.jpg"
          alt="Caribbean sunset from the women's retreat in Puerto Rico"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            This Is Your Reset. Your Revival. Your Rise.
          </h2>
          <p className="text-xl text-gray-200 mb-4">
            You&apos;ll laugh. You&apos;ll cry. You&apos;ll dance. You&apos;ll have adventures. You&apos;ll try on a dress that makes you feel unstoppable.
          </p>
          <p className="text-lg text-gray-300 mb-10">
            By the end, you&apos;ll walk, talk, and show up differently. Not because you&apos;re trying to be someone else — but because you&apos;re finally owning all that you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.krystalorecrews.com/costa-rica-retreat-private-request-page"
              className="inline-flex items-center justify-center gap-2 bg-[#41a7c9] hover:bg-[#2a7fa0] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" /> Book Private Retreat
            </Link>
            <a
              href="https://www.krystalorecrews.com/revive-and-thrive-retreat-checkout"
              className="inline-flex items-center justify-center gap-2 bg-[#41a7c9] hover:bg-[#2a7fa0] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" /> Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ SCHOLARSHIP SECTION ═══════════════ */}
      <section id="scholarship" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-12 h-12 text-[#f3498c] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Waitlist & Updates
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Want updates for Puerto Rico and future retreat experiences? Join the waitlist and be first to know when rooms, dates, and checkout options open.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Use the waitlist for retreat announcements, room releases, and next-step details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.krystalorecrews.com/revive-and-thrive-retreat-checkout"
              className="inline-flex items-center justify-center gap-2 bg-[#41a7c9] hover:bg-[#2a7fa0] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-[#41a7c9]/30 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" /> Book Now
            </a>
            <a
              href="https://www.krystalorecrews.com/costa-rica-revival-retreat-waitlist"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f3498c] to-[#d92d70] hover:from-[#d92d70] hover:to-[#c02461] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-[#f3498c]/20 transition-all duration-300 transform hover:scale-105"
            >
              <GraduationCap className="w-5 h-5" /> Join Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ — SEO/AEO CONTENT ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: 'What is a women\'s wellness retreat?', a: 'A women\'s wellness retreat is an immersive, multi-day experience designed specifically for women to step away from daily responsibilities and focus on personal growth, physical health, mental clarity, and emotional renewal. Our Revive & Thrive retreat combines luxury accommodations, transformational coaching, fitness, adventure, and sisterhood in a stunning Caribbean setting.' },
              { q: 'Who is this retreat for?', a: 'This retreat is designed for high-achieving women — entrepreneurs, executives, business owners, and leaders — who give everything to everyone else and are ready to invest in themselves. Whether you\'re navigating burnout, a life transition, or simply craving a reset, this experience meets you where you are.' },
              { q: 'Where is the retreat located?', a: 'The retreat takes place at Villa Azure, a 4,000 sq ft beachfront villa in Ocean Park, San Juan, Puerto Rico. It sits directly on one of San Juan\'s most beautiful stretches of coastline — steps from the ocean, with direct beach access, a private heated pool, a full chef\'s kitchen, and 7 designer suites. It\'s only 10 minutes from San Juan International Airport (SJU), and restaurants and cafés are within walking distance.' },
              { q: 'What\'s included in the retreat?', a: 'Everything is all-inclusive once you arrive: your suite in the beachfront villa, all meals prepared by a private chef, daily movement and coaching sessions, spa treatments, island adventures and excursions, and daily surprises. Flights are not included.' },
              { q: 'Do I need to be extremely fit to attend?', a: 'Not at all. Our daily movement sessions are designed for all fitness levels. Whether you\'re a marathon runner or haven\'t worked out in months, everything is adaptable. The goal is to reconnect with your body, not compete.' },
              { q: 'Is this a business retreat or a wellness retreat?', a: 'It\'s both. Our Revive & Thrive experience weaves together wellness, personal development, and strategic life/business coaching. You\'ll gain clarity not just about your health but about your next bold move — whether that\'s in your career, relationships, or personal goals.' },
              { q: 'What airport should I fly into?', a: 'Fly into San Juan Luis Muñoz Marín International Airport (SJU). The villa is only 10 minutes from the airport — one of the shortest transfers you will ever have to a beachfront retreat. Transportation details and recommendations will be provided after booking.' },
              { q: 'Are payment plans available?', a: 'Yes. We offer flexible payment plans so you can secure your spot and pay over time. We also have limited scholarship spots available for each retreat. Contact us through the booking form to discuss options.' },
              { q: 'Can I book a private retreat for my group?', a: 'Absolutely. We offer private retreat experiences for friend groups, families, corporate teams, and organizations. We also offer co-ed retreats focused on book writing and business planning. Contact us to design your custom experience.' },
              { q: 'What makes this different from other women\'s retreats?', a: 'This isn\'t a vacation with a couple of workshops tacked on. Every single day is intentionally designed with coaching, movement, adventure, and luxury service. You\'ll be treated like royalty while doing deep, transformational inner work. Our retreats consistently produce breakthroughs that women carry with them for years.' },
            ].map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg hover:bg-gray-100 transition-colors">
                  {item.q}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform duration-200 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#41a7c9]/10 via-white to-[#f3498c]/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You&apos;ve Earned This.
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Stop waiting for permission to put yourself first. This is your invitation to reset, to be held, to be seen — and to rise into the next-level version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://www.krystalorecrews.com/revive-and-thrive-retreat-checkout"
              className="inline-flex items-center justify-center gap-2 bg-[#41a7c9] hover:bg-[#2a7fa0] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-[#41a7c9]/30 transition-all duration-300 transform hover:scale-105"
            >
              Book Now <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="https://www.krystalorecrews.com/costa-rica-retreat-private-request-page"
              className="inline-flex items-center justify-center gap-2 bg-[#41a7c9] hover:bg-[#2a7fa0] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-[#41a7c9]/30 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" /> Book Private Retreat
            </Link>
            <a
              href="https://www.krystalorecrews.com/costa-rica-revival-retreat-waitlist"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#f3498c] text-[#f3498c] font-bold text-lg px-10 py-4 rounded-full hover:bg-[#f3498c]/5 transition-all duration-300"
            >
              <GraduationCap className="w-5 h-5" /> Join Waitlist
            </a>
          </div>
          <p className="text-gray-400 text-sm">All-inclusive when you arrive. Flights not included. Payment plans available.</p>
        </div>
      </section>

      {/* ═══════════════ WORK WITH KRYSTALORE ═══════════════ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#17495c] via-[#2a7fa0] to-[#41a7c9] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#b3d312] font-bold tracking-[0.3em] uppercase text-sm mb-3">Featured</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Work with <span className="italic font-serif text-[#f3498c]">Krystalore</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Come to a retreat that&rsquo;s already handled &mdash; or build your own with her beside you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col">
              <p className="text-[#f3498c] font-black tracking-[0.2em] uppercase text-xs mb-3">Done For You</p>
              <h3 className="text-3xl font-black mb-3">Just show up.</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Krystalore and her team handle the entire retreat &mdash; villa, chef, itinerary,
                transport, programming. You arrive, and everything is already taken care of.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Zero planning — venue, meals and logistics are handled end to end',
                  'A proven day-by-day itinerary of coaching, movement and adventure',
                  'Private chef, ground transport and on-site host included',
                  'Instant community — you arrive solo and leave with a circle',
                  'Fixed, all-inclusive pricing with payment plans available',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2a7fa0] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-bold text-gray-500 mb-5">
                Best for: individuals and small groups who want the experience without the workload.
              </p>
              <RetreatInquiryModal triggerClassName="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f3498c] to-[#d92d70] text-white font-black px-7 py-4 rounded-full hover:scale-[1.03] transition-transform shadow-lg" />
            </div>

            <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col">
              <p className="text-[#2a7fa0] font-black tracking-[0.2em] uppercase text-xs mb-3">Done With You</p>
              <h3 className="text-3xl font-black mb-3">Build your own.</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Host your own retreat with Krystalore guiding the build &mdash; her venues, vendors
                and playbook, your brand and your people.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Her vetted venues and vendor list — skip the expensive trial and error',
                  'Pricing, budgeting and profitability mapped before you commit',
                  'Itinerary and programming designed around your audience',
                  'Filling-the-room strategy: promotion, offers and enrollment',
                  'Co-host or speaker support on site if you want backup',
                  'You keep the relationships, the revenue and the brand',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2a7fa0] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-bold text-gray-500 mb-5">
                Best for: coaches, leaders and organizations running a retreat of their own.
              </p>
              <RetreatInquiryModal triggerClassName="w-full inline-flex items-center justify-center gap-2 bg-[#2a7fa0] hover:bg-[#17495c] text-white font-black px-7 py-4 rounded-full transition-colors shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SCHEMA.ORG STRUCTURED DATA ═══════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Revive & Thrive Women\'s Wellness Retreat',
            description: 'A 7-day luxury wellness retreat for high-achieving women in Puerto Rico. Includes transformational coaching, daily movement, island adventures, spa treatments, and private chef cuisine at Villa Azure, a beachfront villa in Ocean Park, San Juan — 10 minutes from SJU airport.',
            url: 'https://krystalore.com/pr-retreat',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: 'Villa Azure — Beachfront Estate',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'San Juan',
                addressRegion: 'PR',
                addressCountry: 'US',
              },
            },
            organizer: {
              '@type': 'Person',
              name: 'Krystalore Crews',
              url: 'https://krystalore.com',
              jobTitle: 'CEO, Crews Beyond Limits Consulting',
            },
            offers: {
              '@type': 'Offer',
              url: 'https://krystalore.comhttps://www.krystalorecrews.com/costa-rica-retreat-private-request-page',
              availability: 'https://schema.org/LimitedAvailability',
              description: 'All-inclusive retreat package. Flights not included. Payment plans and scholarship opportunities available.',
            },
            image: 'https://krystalore.com/images/retreat/retreat-group-03.jpg',
            keywords: 'women\'s retreat, wellness retreat, business retreat for women, luxury retreat Puerto Rico, women\'s empowerment retreat, executive wellness retreat, transformational coaching retreat',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is a women\'s wellness retreat?', acceptedAnswer: { '@type': 'Answer', text: 'A women\'s wellness retreat is an immersive, multi-day experience designed specifically for women to step away from daily responsibilities and focus on personal growth, physical health, mental clarity, and emotional renewal.' } },
              { '@type': 'Question', name: 'Where is the Revive & Thrive retreat located?', acceptedAnswer: { '@type': 'Answer', text: 'The retreat takes place at Villa Azure, a beachfront villa in Ocean Park, San Juan, Puerto Rico — steps from the ocean and only 10 minutes from San Juan International Airport (SJU).' } },
              { '@type': 'Question', name: 'What\'s included in the retreat?', acceptedAnswer: { '@type': 'Answer', text: 'Everything is all-inclusive: beachfront villa accommodations, private chef meals, daily movement and coaching, spa treatments, and island adventures. Flights not included.' } },
              { '@type': 'Question', name: 'Is this a business retreat or wellness retreat?', acceptedAnswer: { '@type': 'Answer', text: 'It\'s both. The Revive & Thrive experience combines wellness, personal development, and strategic life/business coaching for high-achieving women.' } },
              { '@type': 'Question', name: 'Are payment plans available?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Flexible payment plans and limited scholarship opportunities are available for each retreat.' } },
            ],
          }),
        }}
      />

      {/* JC Easter Egg */}
      <div className="text-center pb-2">
        <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity">JC</a>
      </div>

      <Footer />
    </div>
  )
}
