'use client'

import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { ShoppingBag, ExternalLink, Star, ChevronDown, ChevronUp, Sparkles, Heart, Dumbbell, Handshake } from 'lucide-react'

const merch = [
  { name: 'Burpees for Breakfast Workout Tank', price: '$19.99', image: '/images/shop/burpees-tank.webp', url: 'https://crews-beyond-limits.myshopify.com/products/burpees-for-breakfast-workout-tank', badge: 'Popular' },
  { name: 'Crews Cash Gift Card', price: '$25.00', image: '/images/shop/crews-cash.webp', url: 'https://crews-beyond-limits.myshopify.com/products/crews-cash', badge: 'Gift' },
  { name: 'Million Dollar Body Academy Tank', price: '$19.99', image: '/images/shop/mdb-tank.webp', url: 'https://crews-beyond-limits.myshopify.com/products/million-dollar-body-academy-tank' },
  { name: 'What Have You Done for YOU Lately? Tank', price: '$19.99', image: '/images/shop/whydfyu-tank-1.webp', url: 'https://crews-beyond-limits.myshopify.com/products/what-have-you-done-for-you-lately-workout-tank' },
  { name: 'We Do Hard Things Workout Tank', price: '$19.99', image: '/images/shop/hard-things-tank.webp', url: 'https://crews-beyond-limits.myshopify.com/products/we-do-hard-things-workout-tank', badge: 'New' },
]

const favorites = [
  { name: 'EPN Nutrition Preworkout & Supplements', desc: 'Krystalore\'s go-to for clean energy and recovery. Use her affiliate link for exclusive pricing.', image: '/images/shop/epn-nutrition.webp', url: 'https://ep-nutrition.com?aff=2295', category: 'Supplements' },
  { name: 'Fighter Friday Gloves', desc: 'The gloves Krystalore uses every Fighter Friday. Built for durability and grip.', image: '/images/shop/fighter-gloves.webp', url: 'https://amzn.to/3OgYFVq', category: 'Gear' },
  { name: 'Savvi Workout Gear', desc: 'Premium activewear designed for high-performance training. Look good, train harder.', image: '/images/shop/savvi-gear.webp', url: 'https://savvi.com/KCREWS', category: 'Apparel' },
  { name: 'Teeth Whitening', desc: 'Krystalore\'s recommended at-home whitening — because confidence starts with your smile.', image: '/images/shop/teeth-whitening.webp', url: 'https://amzn.to/45jZXVR', category: 'Wellness' },
]

const collabs = [
  { image: '/images/shop/collab-1.webp', alt: 'Brand collaboration 1' },
  { image: '/images/shop/collab-2.webp', alt: 'Brand collaboration 2' },
  { image: '/images/shop/collab-3.webp', alt: 'Brand collaboration 3' },
  { image: '/images/shop/collab-4.webp', alt: 'Brand collaboration 4' },
  { image: '/images/shop/collab-5.webp', alt: 'Brand collaboration 5' },
  { image: '/images/shop/collab-6.webp', alt: 'Brand collaboration 6' },
  { image: '/images/shop/collab-7.webp', alt: 'Brand collaboration 7' },
  { image: '/images/shop/collab-8.webp', alt: 'Brand collaboration 8' },
]

const faqs = [
  { q: 'How do I purchase merch?', a: 'All merchandise is sold through our Shopify store. Click "Buy Now" on any product to be taken to the secure checkout. We ship nationwide.' },
  { q: 'What is Crews Cash?', a: 'Crews Cash is a digital gift card you can send to friends, family, or team members. They can use it to shop any item in the Crews Beyond Limits store.' },
  { q: 'Are the affiliate products recommended by Krystalore?', a: 'Yes! Every product in the "Krystalore\'s Favorites" section is personally used and recommended by Krystalore. She only partners with brands she trusts.' },
  { q: 'How do brand collaborations work?', a: 'We partner with aligned brands for co-branded content, events, and product features. If you\'re interested, fill out the collaboration form at the bottom of this page or email krystalore@thecrewscoach.com.' },
  { q: 'Do you offer bulk/corporate orders?', a: 'Yes! For corporate gifts, team orders, or event merchandise, contact us at krystalore@thecrewscoach.com for custom pricing.' },
  { q: 'What sizes are available for the workout tanks?', a: 'Our tanks are available in a range of sizes. Check each product page on Shopify for the full size chart and availability.' },
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

export default function ShopPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Krystalore Crews Shop",
    "description": "Official merch, fitness gear, supplements, and brand collaborations from Krystalore Crews.",
    "url": "https://krystalore.com/shop",
    "brand": { "@type": "Brand", "name": "Crews Beyond Limits" },
  }

  return (
    <MainLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-12">
        <div className="relative h-64 sm:h-80">
          <Image src="/images/go9/fitness-balcony.jpg" alt="Krystalore Crews — Shop merch, gear, and brand collaborations" fill className="object-cover object-top" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <ShoppingBag className="w-8 h-8 text-[#E8A849] mb-2" />
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Shop</h1>
            <p className="text-white/80 text-sm sm:text-lg max-w-xl">
              Crews Beyond Limits merch, hand-picked fitness gear, and brand collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Category Nav */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {[
          { icon: Dumbbell, label: 'Merch', href: '#merch' },
          { icon: Heart, label: "Krystalore's Favorites", href: '#favorites' },
          { icon: Handshake, label: 'Collaborations', href: '#collabs' },
          { icon: Sparkles, label: 'FAQ', href: '#faq' },
        ].map(cat => (
          <a key={cat.href} href={cat.href} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-teal hover:text-teal transition-colors whitespace-nowrap">
            <cat.icon className="h-4 w-4" /> {cat.label}
          </a>
        ))}
      </div>

      {/* MERCH */}
      <section id="merch" className="mb-16 scroll-mt-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Crews Beyond Limits Merch</h2>
          <a href="https://crews-beyond-limits.myshopify.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-teal hover:underline flex items-center gap-1">
            View All <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {merch.map((item) => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all">
              <div className="relative aspect-square bg-gray-50">
                <Image src={item.image} alt={item.name} fill className="object-contain p-2 group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" />
                {item.badge && (
                  <span className="absolute top-2 left-2 bg-teal text-white text-xs font-bold px-2 py-0.5 rounded-full">{item.badge}</span>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-900 text-xs sm:text-sm mb-1 line-clamp-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-sm">{item.price}</span>
                  <span className="text-xs text-teal font-medium">Buy Now</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAVORITES */}
      <section id="favorites" className="mb-16 scroll-mt-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Krystalore&apos;s Favorite Things</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Hand-picked resources, gear, discounts, and recommendations from Krystalore herself.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {favorites.map((item) => (
            <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#E8A849]/30 transition-all">
              <div className="relative h-48 sm:h-52 bg-gray-50">
                <Image src={item.image} alt={item.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <span className="absolute top-3 left-3 bg-[#E8A849] text-white text-xs font-bold px-2.5 py-1 rounded-full">{item.category}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{item.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.desc}</p>
                <span className="text-[#E8A849] font-medium text-sm flex items-center gap-1">
                  Shop Now <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* COLLABORATIONS */}
      <section id="collabs" className="mb-16 scroll-mt-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Brand Collaborations</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Krystalore partners with brands that align with her mission of health, leadership, and empowerment.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {collabs.map((item, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
              <Image src={item.image} alt={item.alt} fill className="object-cover object-top" sizes="(max-width: 640px) 50vw, 25vw" />
            </div>
          ))}
        </div>
        <div className="mt-8 bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Want to Collaborate?</h3>
          <p className="text-white/80 text-sm mb-4 max-w-lg mx-auto">We partner with brands that share our commitment to health, fitness, and empowering leaders.</p>
          <a href="mailto:krystalore@thecrewscoach.com" className="inline-block bg-white text-[#006767] font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
            Apply to Collaborate
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16 scroll-mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200 px-6">
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </section>
    </MainLayout>
  )
}
