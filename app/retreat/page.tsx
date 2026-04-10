'use client'

import { useState, useEffect, useCallback } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
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
  { src: '/images/retreat/retreat-01.jpg', alt: 'Infinity pool overlooking the ocean and Virgin Islands at the Puerto Rico rainforest retreat', caption: 'Infinity Pool with Ocean Views' },
  { src: '/images/retreat/retreat-02.jpg', alt: 'Golden sunset over tropical landscape from the hilltop retreat in Ceiba Puerto Rico', caption: 'Breathtaking Caribbean Sunsets' },
  { src: '/images/retreat/retreat-03.jpg', alt: 'Aerial view of the 12-casita rainforest retreat property with pool in Ceiba Puerto Rico', caption: 'Your Private 12-Casita Retreat Estate' },
  { src: '/images/retreat/retreat-06.jpg', alt: 'Open-air covered terrace with infinity pool overlooking ocean and rainforest', caption: 'Open-Air Relaxation Terrace' },
  { src: '/images/retreat/retreat-07.jpg', alt: 'Covered outdoor dining area with panoramic ocean and jungle views seating 14', caption: 'Al Fresco Dining with Panoramic Views' },
  { src: '/images/retreat/retreat-08.jpg', alt: 'Bright casita bedroom with ocean views through floor-to-ceiling glass doors', caption: 'Wake Up to Paradise Every Morning' },
  { src: '/images/retreat/retreat-04.jpg', alt: 'Minimalist guest casita bedroom with queen bed and macramé decor', caption: 'Elegant Private Casitas' },
  { src: '/images/retreat/retreat-09.jpg', alt: 'Open-air kitchen and dining area with ocean views and lush plants', caption: 'Farm-to-Table Kitchen Experience' },
  { src: '/images/retreat/retreat-10.jpg', alt: 'Hillside walkway with bistro seating overlooking tropical vegetation and coast', caption: 'Quiet Moments with Island Views' },
  { src: '/images/retreat/retreat-05.jpg', alt: 'Modern en-suite bathroom with rain shower and natural touches', caption: 'Spa-Inspired Private Bathrooms' },
]

/* ─── 7-Day Itinerary ─── */
const itinerary = [
  { day: 'Day 1', title: 'Arrival & Grounding', icon: Sunrise, desc: 'Arrive at this stunning oceanview estate in the El Yunque Rainforest zone of Puerto Rico. Settle into your private casita, meet your fellow retreat sisters over a welcome dinner prepared by a private chef, and set your intentions for the week ahead.' },
  { day: 'Day 2', title: 'Mind Reset & Movement', icon: Dumbbell, desc: 'Morning fitness session by the infinity pool as the sun rises over the Virgin Islands. Guided breakthrough coaching session on releasing what no longer serves you. Afternoon spa treatment and journaling time in your private casita.' },
  { day: 'Day 3', title: 'Adventure & Discovery', icon: Mountain, desc: 'Tropical rainforest excursion through El Yunque — waterfalls, nature trails, and reconnecting with the wild, adventurous part of yourself. Evening bonfire with soul-aligned conversation under the stars.' },
  { day: 'Day 4', title: 'Deep Healing & Clarity', icon: Heart, desc: 'Morning breathwork and meditation in the open-air temple. Deep-dive coaching session on mapping your next bold move in life, love, or business. Butler-served lunch overlooking the Caribbean, followed by pool time and sisterhood.' },
  { day: 'Day 5', title: 'Strength & Strategy', icon: Crown, desc: 'Energizing group workout. Business and life strategy workshop — building the blueprint for your next chapter. Afternoon at a nearby beach or marina. Chef-prepared dinner with live music on the lounge patio.' },
  { day: 'Day 6', title: 'Radiance & Renewal', icon: Sparkles, desc: 'Morning yoga by the pool. Glam session — dress up, photo shoot, feel unstoppable. Celebration dinner where every woman shares her breakthrough moment. Dance, laugh, cry together.' },
  { day: 'Day 7', title: 'Integration & Departure', icon: Waves, desc: 'Sunrise meditation. Closing ceremony with your retreat sisters. Depart transformed — clearer, stronger, more magnetic than ever. You return home not as someone different, but as someone who finally owns all that she is.' },
]

export default function RetreatPage() {
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
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <Image
          src="/images/retreat/retreat-01.jpg"
          alt="Luxury women's wellness retreat infinity pool overlooking Caribbean ocean in Puerto Rico"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-primary font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            Revive &amp; Thrive Retreat Experience
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            You Deserve to Be <span className="text-primary">Treated Like a Queen</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-4">
            A 7-Day Luxury Wellness Retreat for High-Achieving Women Ready to Reset, Reflect, and Rise
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Puerto Rico &bull; El Yunque Rainforest &bull; Private Oceanview Estate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/revive-and-thrive-retreat-checkout"
              className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-teal/30 hover:shadow-teal/40 transition-all duration-300 transform hover:scale-105"
            >
              Reserve My Spot <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://www.krystalorecrews.com/book"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Apply for Scholarship
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ OPENING — THE WOMAN WHO DOES EVERYTHING ═══════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            You Take Care of <span className="text-teal">Everyone.</span> When Was the Last Time Someone Took Care of <span className="text-primary">You?</span>
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
            <p className="text-teal font-semibold tracking-widest uppercase text-sm mb-3">Your Private Paradise</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ocean View Rainforest Retreat Estate
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A 12-casita luxury property nestled in Puerto Rico&apos;s El Yunque Rainforest zone, with panoramic views of the Caribbean Sea and the US &amp; Spanish Virgin Islands
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

          {/* Property Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { icon: Home, label: '12 Private Casitas', sub: 'Each with en-suite bath' },
              { icon: Users, label: '16+ Guests', sub: 'Intimate group setting' },
              { icon: Waves, label: 'Infinity Pool', sub: 'Open 24 hours' },
              { icon: Star, label: '4.87 Stars', sub: 'From 38 verified reviews' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4">
                <item.icon className="w-8 h-8 text-teal mx-auto mb-2" />
                <p className="font-bold text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ THE LOCATION — PROPERTY DETAILS ═══════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal font-semibold tracking-widest uppercase text-sm mb-3">
                <MapPin className="w-4 h-4 inline mr-1" /> Ceiba, Puerto Rico
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Where the Rainforest Meets the Sea
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Less than 10 minutes off the highway and 45 minutes from San Juan International Airport, this private estate sits in the El Yunque Rainforest zone — the only tropical rainforest in the US National Forest System.
                </p>
                <p>
                  Watch the sun rise over the US and Spanish Virgin Islands from your private infinity pool. Fall asleep to the song of the coqui. Wake up with the roosters. Enjoy farm-fresh eggs, seasonal fruit from the property, and herbs grown in the kitchen garden.
                </p>
                <p>
                  Each casita features its own private indoor and outdoor space, queen-size bed, en-suite bathroom, ceiling fan, and a small patio. The main property includes a chef&apos;s kitchen, oceanview dining terrace, a pool bar and live music lounge, and a meditation temple.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Bed, text: '12 Bedrooms' },
                  { icon: Bath, text: '14 Bathrooms' },
                  { icon: Waves, text: 'Infinity Pool' },
                  { icon: Utensils, text: 'Chef\'s Kitchen' },
                  { icon: Wind, text: 'Garden Showers' },
                  { icon: Coffee, text: 'Farm Fresh Food' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <item.icon className="w-5 h-5 text-teal flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/retreat/retreat-03.jpg"
                  alt="Aerial view of the 12-casita women's retreat property in Puerto Rico rainforest"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl overflow-hidden shadow-lg w-48 h-48 border-4 border-white">
                <Image
                  src="/images/retreat/retreat-09.jpg"
                  alt="Open-air kitchen at the Puerto Rico retreat property"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT'S INCLUDED ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              When I Say <span className="text-primary">Treated Like a Queen</span>, This Is What I Mean
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              7 action-packed days. One life-changing transformation. Don&apos;t lift a finger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: 'Transformational Coaching', desc: 'Daily guided sessions to spark clarity, ignite self-reflection, and map out your next bold move in life, love, business, or wellness.' },
              { icon: Home, title: 'Luxury Accommodations', desc: 'Private casitas with queen beds, en-suite baths, and stunning ocean views. Comfort and elegance designed to help you fully unwind.' },
              { icon: Utensils, title: 'Private Chef & Nourishing Cuisine', desc: 'Delicious, healthy meals and refreshing beverages — all thoughtfully prepared to fuel your body and energize your spirit.' },
              { icon: Sunrise, title: 'Breathtaking Mornings', desc: 'Wake up to Caribbean sunrises that remind you daily how beautiful life can be when you put yourself first.' },
              { icon: Dumbbell, title: 'Daily Movement', desc: 'Energizing fitness and stretching sessions to awaken your body, clear your mind, and set the tone for powerful breakthroughs.' },
              { icon: TreePine, title: 'Rainforest Adventure', desc: 'Step into your bold, adventurous self with an unforgettable El Yunque tropical rainforest excursion.' },
              { icon: Crown, title: 'Butler-Level Service', desc: 'Be treated like the queen you are. Every detail is handled so you can fully relax, receive, and focus on YOU.' },
              { icon: Users, title: 'Soul-Aligned Sisterhood', desc: 'Leave with lifelong friendships with women who see you, support you, and are rising right alongside you.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 border border-gray-100 hover:border-teal/20">
                <item.icon className="w-10 h-10 text-teal mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ RETREAT PHOTOS — GROUP SHOTS ═══════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Women. Real <span className="text-teal">Transformations.</span>
            </h2>
            <p className="text-gray-500 text-lg">Past retreat experiences that changed lives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/retreat/retreat-group-01.jpg" alt="Women in matching retreat shirts posing on tropical beach" width={400} height={300} className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/retreat/retreat-group-03.jpg" alt="Retreat women celebrating at sunset with ocean views" width={400} height={300} className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/retreat/retreat-group-02.jpg" alt="Women running together during retreat fitness activity" width={400} height={300} className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 7-DAY ITINERARY ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Your Week of Transformation</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              7 Days That Will Change Everything
            </h2>
          </div>

          <div className="space-y-8">
            {itinerary.map((day, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-teal/10 to-primary/10 flex items-center justify-center group-hover:from-teal/20 group-hover:to-primary/20 transition-all duration-300">
                  <day.icon className="w-7 h-7 text-teal" />
                </div>
                <div>
                  <p className="text-teal font-semibold text-sm tracking-wide uppercase">{day.day}</p>
                  <h3 className="text-xl font-bold mb-2">{day.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{day.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHAT YOU'LL LEAVE WITH ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-teal-50 via-white to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
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
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <Check className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
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
              <p className="text-teal font-semibold tracking-widest uppercase text-sm mb-3">About Your Host</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Krystalore Crews</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  22-year USAF Veteran. Former NFL Cheerleader. 26-time Marathoner. Cancer survivor. CEO of Crews Beyond Limits Consulting.
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
          src="/images/retreat/retreat-02.jpg"
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
              href="/engage"
              className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" /> Book a Call
            </Link>
            <Link
              href="/revive-and-thrive-retreat-checkout"
              className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" /> Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ SCHOLARSHIP SECTION ═══════════════ */}
      <section id="scholarship" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scholarship Opportunities
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We believe every woman deserves the chance to invest in herself. If finances are a barrier but your heart is ready, we offer limited scholarship spots for each retreat.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Tell us your story. Tell us why this retreat is your next step. We review every application personally.
          </p>
          <a
            href="https://www.krystalorecrews.com/book"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-primary/20 transition-all duration-300 transform hover:scale-105"
          >
            <GraduationCap className="w-5 h-5" /> Apply for Scholarship
          </a>
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
              { q: 'Where is the retreat located?', a: 'The retreat takes place at a private 12-casita oceanview estate in Ceiba, Puerto Rico, nestled in the El Yunque Rainforest zone. The property features an infinity pool, chef\'s kitchen, meditation temple, and panoramic views of the Caribbean Sea and Virgin Islands. It\'s 45 minutes from San Juan International Airport (SJU).' },
              { q: 'What\'s included in the retreat?', a: 'Everything is all-inclusive once you arrive: luxury private casita accommodations, all meals prepared by a private chef, daily coaching sessions, fitness and yoga classes, spa treatments, a rainforest excursion, butler service, and daily surprises. Flights are not included.' },
              { q: 'Do I need to be extremely fit to attend?', a: 'Not at all. Our daily movement sessions are designed for all fitness levels. Whether you\'re a marathon runner or haven\'t worked out in months, everything is adaptable. The goal is to reconnect with your body, not compete.' },
              { q: 'Is this a business retreat or a wellness retreat?', a: 'It\'s both. Our Revive & Thrive experience weaves together wellness, personal development, and strategic life/business coaching. You\'ll gain clarity not just about your health but about your next bold move — whether that\'s in your career, relationships, or personal goals.' },
              { q: 'What airport should I fly into?', a: 'Fly into San Juan Luis Muñoz Marín International Airport (SJU). The retreat property is approximately 45 minutes from the airport. Transportation details and recommendations will be provided after booking.' },
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-teal-50 via-white to-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You&apos;ve Earned This.
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Stop waiting for permission to put yourself first. This is your invitation to reset, to be held, to be seen — and to rise into the next-level version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/revive-and-thrive-retreat-checkout"
              className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-teal/30 transition-all duration-300 transform hover:scale-105"
            >
              Register Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/engage"
              className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-teal/30 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" /> Book a Call
            </Link>
            <a
              href="https://www.krystalorecrews.com/book"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold text-lg px-10 py-4 rounded-full hover:bg-primary/5 transition-all duration-300"
            >
              <GraduationCap className="w-5 h-5" /> Apply for Scholarship
            </a>
          </div>
          <p className="text-gray-400 text-sm">All-inclusive when you arrive. Flights not included. Payment plans available.</p>
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
            description: 'A 7-day luxury wellness retreat for high-achieving women in Puerto Rico. Includes transformational coaching, fitness, adventure, spa treatments, and private chef cuisine at a stunning 12-casita oceanview estate in the El Yunque Rainforest.',
            url: 'https://krystalore.com/retreat',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: 'Ocean View Rainforest Retreat Estate',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ceiba',
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
              url: 'https://krystalore.com/engage',
              availability: 'https://schema.org/LimitedAvailability',
              description: 'All-inclusive retreat package. Flights not included. Payment plans and scholarship opportunities available.',
            },
            image: 'https://krystalore.com/images/retreat/retreat-01.jpg',
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
              { '@type': 'Question', name: 'Where is the Revive & Thrive retreat located?', acceptedAnswer: { '@type': 'Answer', text: 'The retreat takes place at a private 12-casita oceanview estate in Ceiba, Puerto Rico, in the El Yunque Rainforest zone, 45 minutes from San Juan International Airport.' } },
              { '@type': 'Question', name: 'What\'s included in the retreat?', acceptedAnswer: { '@type': 'Answer', text: 'Everything is all-inclusive: luxury accommodations, private chef meals, daily coaching, fitness, spa treatments, rainforest excursion, butler service. Flights not included.' } },
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
