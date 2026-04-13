'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, ExternalLink, ChevronDown, ChevronUp, Dumbbell, Heart, Sparkles, Mountain, BookOpen, Gift } from 'lucide-react'

const apparel = [
  { name: 'Burpees for Breakfast Tank', price: '$19.99', image: '/images/shop/burpees-tank.jpg', url: 'https://crews-beyond-limits.myshopify.com/products/burpees-for-breakfast-workout-tank' },
  { name: 'We Do Hard Things Tank', price: '$19.99', image: '/images/shop/hard-things-tank.jpg', url: 'https://crews-beyond-limits.myshopify.com/products/we-do-hard-things-workout-tank' },
  { name: 'Cheaper Than Anger Management Tank', price: '$19.99', image: '/images/shop/anger-mgmt-tank.jpg', url: 'https://www.krystalorecrews.com/merch/product/671ffeb72e06e5b6542a425c' },
  { name: "Excuses Don't Burn Calories Tank", price: '$19.99', image: '/images/shop/excuses-tank.jpg', url: 'https://www.krystalorecrews.com/merch/product/672000b3bd4c7f409ae95db2' },
  { name: 'No Fancy Studio Tank', price: '$19.99', image: '/images/shop/no-fancy-studio-tank.jpg', url: 'https://www.krystalorecrews.com/merch/product/672001febd4c7f6064e95eb7' },
  { name: 'Million Dollar Body Academy Tank', price: '$19.99', image: '/images/shop/mdb-tank.png', url: 'https://crews-beyond-limits.myshopify.com/products/million-dollar-body-academy-tank' },
  { name: 'CBL Women\'s Tank', price: '$25.00', image: '/images/shop/cbl-tank.png', url: 'https://www.krystalorecrews.com/merch/product/cbltank' },
  { name: 'CBL Women\'s Hoodie', price: '$50.00', image: '/images/shop/cbl-hoodie.jpg', url: 'https://www.krystalorecrews.com/merch/product/cblhoodie' },
  { name: 'CBL Women\'s Long Sleeve Tee', price: '$40.00', image: '/images/shop/cbl-longsleeve.jpg', url: 'https://www.krystalorecrews.com/merch/product/cbllongsleevedtshirt' },
]

const giftAndGear = [
  { name: 'Crews Cash Gift Card', price: 'From $25', image: '/images/shop/crews-cash.jpg', url: 'https://crews-beyond-limits.myshopify.com/products/crews-cash', badge: 'Gift Card' },
  { name: 'Custom Krystalore Yoga Mat', price: '$100.00', image: '/images/shop/custom-yoga-mat.png', url: 'https://www.krystalorecrews.com/merch/product/yogamat', badge: 'Exclusive' },
]

const programs = [
  { name: '6 Week Shred Challenge', price: '$96.00', image: '/images/shop/six-week-shred.png', url: 'https://www.krystalorecrews.com/merch/product/663ac88d07ee0359edd7dc2c', desc: '6 weeks of structured training to transform your body and build lasting fitness habits.' },
  { name: 'Beyond Limits Bootcamp', price: '$69.00', image: '/images/shop/beyond-limits-bootcamp.png', url: 'https://www.krystalorecrews.com/merch/product/63d5fe6c09533023332ea5c1', desc: 'The signature bootcamp program — structured workouts you can do anywhere, anytime.' },
  { name: 'Bombshell Bootcamp', price: 'FREE', image: '/images/shop/bombshell-bootcamp.png', url: 'https://www.krystalorecrews.com/merch/product/63d5fd440953306a4d2ea590', desc: 'Get started with a free intro bootcamp series. No equipment needed.' },
]

const retreats = [
  { name: 'Revive & Thrive Retreat', price: '$1,299', image: '/images/shop/revive-thrive-retreat.png', url: 'https://www.krystalorecrews.com/merch/product/63d600430953302f5a2ea5ef', desc: 'Multi-day wellness retreat combining coaching, fitness, and transformation.' },
  { name: 'From Ink to Impact Retreat', price: '$1,300', image: '/images/shop/ink-to-impact-retreat.png', url: 'https://www.krystalorecrews.com/merch/product/660dc93b303bf93c48b7f604', desc: 'A unique retreat experience for veterans and leaders transitioning to impact.' },
]

const favorites = [
  { name: 'EPN Ballistic Pre-Workout', image: '/images/shop/epn-nutrition.jpg', url: 'https://ep-nutrition.com?aff=2295', desc: 'Clean energy pre-workout supplements. Use Krystalore\'s link for exclusive pricing.' },
  { name: 'Krystalore\'s Beauty & Wellness Picks', image: '/images/shop/fighter-gloves.webp', url: 'https://amzn.to/3OgYFVq', desc: 'Curated beauty and wellness essentials hand-picked by Krystalore on Amazon.' },
  { name: 'CBL Activewear Collection', image: '/images/shop/savvi-gear.webp', url: 'https://www.krystalorecrews.com/products-list', desc: 'The official Crews Beyond Limits workout gear — tanks, hoodies, and tees.' },
  { name: 'Opalescence Teeth Whitening', image: '/images/shop/teeth-whitening.webp', url: 'https://amzn.to/3pJc0LU', desc: 'Professional-grade at-home whitening. The brand Krystalore trusts for her smile.' },
]

const faqs = [
  { q: 'How do I purchase items?', a: 'Click "Shop Now" on any product. Merch items go to our Shopify store, programs go to our secure checkout. All payments are processed safely.' },
  { q: 'What is Crews Cash?', a: 'Crews Cash is a digital gift card starting at $25. Send it to friends, family, or team members to shop the entire Crews Beyond Limits store.' },
  { q: 'Do you ship internationally?', a: 'Currently we ship within the United States. International shipping is coming soon. Contact us for special arrangements.' },
  { q: 'What sizes are available?', a: 'Tanks and apparel are available in XS through 3XL. Check each product page for the full size chart.' },
  { q: 'Are the recommended products personally used by Krystalore?', a: 'Yes! Every product in "Krystalore\'s Favorites" is something she personally uses and recommends. She only partners with brands she trusts.' },
  { q: 'How do brand collaborations work?', a: 'We partner with aligned brands for co-branded events, content, and products. Email krystalore@thecrewscoach.com to apply.' },
  { q: 'Can I order in bulk for corporate events or teams?', a: 'Absolutely! Contact krystalore@thecrewscoach.com for custom bulk pricing on merch, gift cards, or program enrollments.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <p className="text-gray-600 text-sm pb-4 leading-relaxed">{a}</p>}
    </div>
  )
}

function ProductCard({ item, aspect = 'square' }: { item: { name: string; price: string; image: string; url: string; badge?: string }; aspect?: string }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all">
      <div className={`relative ${aspect === 'square' ? 'aspect-square' : 'aspect-[4/5]'} bg-gray-50`}>
        <Image src={item.image} alt={item.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" />
        {item.badge && <span className="absolute top-2 left-2 bg-teal text-white text-xs font-bold px-2.5 py-1 rounded-full">{item.badge}</span>}
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{item.name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900">{item.price}</span>
          <span className="text-xs text-teal font-medium flex items-center gap-1">Shop <ExternalLink className="h-3 w-3" /></span>
        </div>
      </div>
    </a>
  )
}

export default function ShopPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Krystalore Crews Shop",
    "description": "Official merch, fitness programs, retreats, and gear from Krystalore Crews and Crews Beyond Limits.",
    "url": "https://krystalore.com/shop",
    "brand": { "@type": "Brand", "name": "Crews Beyond Limits" },
  }

  return (
    <MainLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-10">
        <div className="relative h-64 sm:h-80">
          <Image src="/images/go9/fitness-balcony.jpg" alt="Krystalore Crews Shop — merch, programs, and gear" fill className="object-cover object-top" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <ShoppingBag className="w-8 h-8 text-[#E8A849] mb-2" />
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Shop</h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl">
              Merch, fitness programs, retreats, gear, and hand-picked favorites from Krystalore.
            </p>
          </div>
        </div>
      </section>

      {/* Category Nav */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
        {[
          { icon: Dumbbell, label: 'Apparel', href: '#apparel' },
          { icon: Gift, label: 'Gifts & Gear', href: '#gifts' },
          { icon: BookOpen, label: 'Books', href: '#books' },
          { icon: Sparkles, label: 'Programs', href: '#programs' },
          { icon: Mountain, label: 'Retreats', href: '#retreats' },
          { icon: Heart, label: 'Favorites', href: '#favorites' },
          { icon: BookOpen, label: 'FAQ', href: '#faq' },
        ].map(cat => (
          <a key={cat.href} href={cat.href} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-teal hover:text-teal transition-colors whitespace-nowrap">
            <cat.icon className="h-4 w-4" /> {cat.label}
          </a>
        ))}
      </div>

      {/* APPAREL */}
      <section id="apparel" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Crews Beyond Limits Apparel</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {apparel.map(item => <ProductCard key={item.name} item={item} aspect="4/5" />)}
        </div>
      </section>

      {/* GIFTS & GEAR */}
      <section id="gifts" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Gifts & Gear</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {giftAndGear.map(item => <ProductCard key={item.name} item={item} />)}
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Fitness Programs</h2>
        <p className="text-gray-600 mb-6">Train with Krystalore — structured programs for every level.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {programs.map(item => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all">
              <div className="relative h-48 sm:h-56 bg-gray-50">
                <Image src={item.image} alt={item.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 33vw" />
                {item.price === 'FREE' && <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">FREE</span>}
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-gray-900">{item.price}</span>
                  <span className="text-teal font-medium text-sm">Enroll Now</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* RETREATS */}
      <section id="retreats" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Retreats</h2>
        <p className="text-gray-600 mb-6">Immersive multi-day experiences that transform body, mind, and leadership.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {retreats.map(item => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-56 sm:h-64 bg-gray-50">
                <Image src={item.image} alt={item.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl text-gray-900">{item.price}</span>
                  <span className="bg-teal text-white font-medium text-sm px-4 py-2 rounded-lg">Reserve Spot</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* BOOKS & JOURNALS */}
      <section id="books" className="mb-14 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Books & Journals</h2>
        <p className="text-gray-600 mb-6">Stories of strength, resilience, and transformation by Krystalore Crews.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { name: 'The Road to Resilience', price: 'Available Now', image: '/images/books/road-to-resilience-book-cover.png', url: '/books', desc: 'A powerful story of overcoming adversity and finding strength through every challenge.' },
            { name: 'Leave No MilSpouse Behind', price: 'Available Now', image: '/images/books/leave-no-milspouse-behind-book-cover.png', url: '/books', desc: 'Empowering military spouses to build thriving lives beyond the uniform.' },
            { name: 'Is Manifesting Bullsh*t?', price: 'Available Now', image: '/images/books/is-manifesting-bullshit-book-cover.png', url: '/books', desc: 'A no-BS look at manifestation, mindset, and making things happen.' },
            { name: 'Krystal Clear Life Planner', price: 'Available Now', image: '/images/books/krystal-clear-life-planner.png', url: '/books', desc: 'The ultimate planning tool for designing your life with clarity and intention.' },
          ].map(item => (
            <Link key={item.name} href={item.url} className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all">
              <div className="relative aspect-[3/4] bg-gray-50">
                <Image src={item.image} alt={item.name} fill className="object-contain p-3 group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 50vw, 25vw" />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.name}</h3>
                <p className="text-gray-500 text-xs mb-2 line-clamp-2">{item.desc}</p>
                <span className="text-teal font-medium text-xs">Learn More</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAVORITES */}
      <section id="favorites" className="mb-14 scroll-mt-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Krystalore&apos;s Favorites</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Hand-picked gear, supplements, and products Krystalore uses every day.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {favorites.map(item => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#E8A849]/30 transition-all">
              <div className="relative h-44 sm:h-48 bg-gray-50">
                <Image src={item.image} alt={item.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{item.name}</h3>
                <p className="text-gray-500 text-xs mb-3">{item.desc}</p>
                <span className="text-[#E8A849] font-medium text-sm flex items-center gap-1">Shop Now <ExternalLink className="h-3 w-3" /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* COLLABORATE CTA */}
      <section className="mb-14">
        <div className="bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-6 sm:p-10 text-white text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Brand Collaborations</h2>
          <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto">We partner with brands that share our commitment to health, fitness, and empowering leaders.</p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 max-w-2xl mx-auto mb-6">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={`/images/shop/collab-${i}.webp`} alt={`Brand collaboration ${i}`} fill className="object-cover object-top" sizes="80px" />
              </div>
            ))}
          </div>
          <a href="mailto:krystalore@thecrewscoach.com" className="inline-block bg-white text-[#006767] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
            Apply to Collaborate
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-14 scroll-mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="bg-white rounded-xl border border-gray-200 px-6">
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </section>

      {/* Health Mastery CTA */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-[#E8A849] to-orange-600 rounded-2xl p-6 sm:p-10 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">Ready for the Full Experience?</h2>
            <p className="text-white/90 mb-6">Join Health Mastery Group Coaching — weekly calls, bootcamp, accountability, and community.</p>
            <Link href="/health-mastery" className="inline-block bg-white text-[#E8A849] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
              Learn About Health Mastery
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
