'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { MapPin, Mountain, Sun, Palmtree, Building2, Waves, TreePine, Star } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: 'Top 10 Corporate Retreat Locations That Inspire Teams in 2025', author: { '@type': 'Person', name: 'Krystalore Crews' }, url: 'https://krystalore.com/corporate-retreat-locations' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is the best corporate retreat location?', acceptedAnswer: { '@type': 'Answer', text: 'Roatan Island is our top choice for corporate retreats up to 60 people, offering a perfect balance of adventure, relaxation, and team building opportunities in a Caribbean paradise setting.' } },
      { '@type': 'Question', name: 'How do I choose a corporate retreat destination?', acceptedAnswer: { '@type': 'Answer', text: 'Consider your team size, budget, objectives (team building, strategy, wellness), season, travel accessibility, and group preferences. Mountain destinations suit reflection, beaches energize, and cities offer culture.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const locations = [
  { rank: 1, name: 'Aspen, Colorado', tagline: 'Mountain Luxury Meets Team Bonding', description: 'Nestled in the Rocky Mountains, Aspen combines adventure with luxury. World-class resorts, skiing, hiking, and fine dining.', bestFor: 'Outdoor team-building, strategy sessions, and executive retreats.' },
  { rank: 2, name: 'Napa Valley, California', tagline: 'Wine Country Inspiration', description: 'Surrounded by rolling vineyards and stunning estates, Napa Valley offers a tranquil escape with sophisticated amenities.', bestFor: 'Small executive teams and creative brainstorming retreats.' },
  { rank: 3, name: 'Sedona, Arizona', tagline: 'Spiritual Renewal and Innovation', description: 'Known for its red rock formations and healing energy, Sedona combines natural beauty with wellness-focused experiences.', bestFor: 'Leadership reflection, mindfulness, and innovation retreats.' },
  { rank: 4, name: 'Lake Tahoe, California/Nevada', tagline: 'Adventure and Serenity', description: 'Crystal-clear waters, cozy lodges, and modern conference spaces for both summer and winter corporate retreats.', bestFor: 'Company-wide retreats and adventure-based team building.' },
  { rank: 5, name: 'Charleston, South Carolina', tagline: 'Southern Charm and Collaboration', description: 'Historic streets, seaside views, and world-class hospitality make Charleston a unique corporate retreat destination.', bestFor: 'Team appreciation trips and creative planning sessions.' },
  { rank: 6, name: 'Austin, Texas', tagline: 'Culture, Music, and Motivation', description: 'Austin\'s creative vibe fosters creativity and innovation with luxury hotels and tech-friendly co-working venues.', bestFor: 'Startups, tech teams, and company culture retreats.' },
  { rank: 7, name: 'Park City, Utah', tagline: 'Four-Season Mountain Motivation', description: 'Home to the Sundance Film Festival, Park City combines rugged outdoor adventure with polished venues.', bestFor: 'Corporate offsites focused on innovation and strategic planning.' },
  { rank: 8, name: 'Miami, Florida', tagline: 'Sun, Sea, and Strategy', description: 'Luxury resorts, beachside meetings, and a vibrant cultural scene perfect for reward trips or annual kickoffs.', bestFor: 'Sales teams, creative departments, and corporate celebrations.' },
  { rank: 9, name: 'Big Sur, California', tagline: 'Nature\'s Creative Catalyst', description: 'Ocean cliffs, redwoods, and boutique lodges inspire big thinking for leadership retreats.', bestFor: 'Executive retreats and deep strategy sessions.' },
  { rank: 10, name: 'The Berkshires, Massachusetts', tagline: 'Culture and Connection', description: 'Blending rural charm with refined arts and cuisine for year-round corporate retreat appeal.', bestFor: 'Holistic retreats emphasizing culture and wellness.' },
]

const faqs = [
  { question: 'What is the best corporate retreat location?', answer: 'Roatan Island is our top choice for corporate retreats up to 60 people, offering Caribbean paradise with team building opportunities. For domestic retreats, Aspen, Sedona, and Napa Valley consistently rank highest for executive teams seeking a mix of productivity and renewal.' },
  { question: 'How do I choose a corporate retreat destination?', answer: 'Consider your team size, budget, objectives (team building vs. strategy vs. wellness), season, travel accessibility, and group preferences. Mountain destinations like Aspen suit reflection and adventure, beach locations energize and relax, and cities like Austin offer culture and entertainment.' },
  { question: 'How much do corporate retreat venues cost?', answer: 'Venue costs vary significantly. Domestic resort retreats range from $200-600 per person per night including meeting space. International destinations like Roatan offer all-inclusive packages from $300-800 per person per night. Group rates can reduce costs 20-40%.' },
  { question: 'When is the best time to book a corporate retreat?', answer: 'Off-peak seasons offer the best rates: January-March for warm destinations, May-June or September-October for mountain locations. Book 4-8 months ahead for the best venue availability and group rates.' },
  { question: 'Can you plan international corporate retreats?', answer: 'Absolutely. Krystalore specializes in international retreat destinations including Costa Rica, Roatan, Puerto Rico, Jamaica, and Bahamas. We handle all logistics including flights, ground transportation, and visa requirements.' },
  { question: 'What size groups work best for corporate retreats?', answer: 'Groups of 10-30 are ideal for meaningful connection and team building. However, we plan retreats for teams of 5 to 100+. Larger groups benefit from breakout sessions and tiered programming.' },
  { question: 'Do you offer virtual corporate retreat options?', answer: 'Yes. For teams that can\'t travel, we design virtual retreat experiences with interactive workshops, team building activities, and wellness sessions. Hybrid options combining virtual and in-person elements are also available.' },
  { question: 'What activities are available at corporate retreat locations?', answer: 'Activities vary by destination but typically include outdoor adventures (hiking, water sports, zip-lining), wellness (yoga, spa, meditation), cultural experiences (cooking classes, local tours), team challenges, and strategic planning workshops.' },
]

export default function CorporateRetreatLocationsPage() {
  return (
    <>
      <JsonLd />
      <Header />

      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/retreat-costa-rica.jpg" alt="Corporate Retreat Locations" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Corporate Retreat Locations</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Discover world-class retreat destinations designed for transformation, team building, and strategic growth.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* Top Pick */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/retreat-locations/corporate-retreat-venues.png" alt="Roatan Island corporate retreat venue" fill className="object-cover object-center" />
            </div>
            <div>
              <div className="inline-block bg-[#34c5c5] text-white font-bold px-4 py-1 rounded-full text-sm mb-4">Our #1 Pick</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Roatan Island — Caribbean Paradise for Teams</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Roatan Island is our top choice for corporate retreats up to 60 people. Crystal-clear Caribbean waters, lush tropical scenery, world-class diving, and resort venues with modern meeting facilities.</p>
              <p className="text-gray-600 leading-relaxed">The island offers the perfect balance of adventure activities, wellness experiences, and professional meeting spaces — all at a fraction of the cost of comparable domestic luxury destinations.</p>
              <Link href="/book" className="inline-block mt-6 bg-[#34c5c5] hover:bg-teal-700 text-white font-bold rounded-xl px-6 py-3 transition-all">Book a Roatan Retreat</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">The Complete Top 10 List</h2>
          <div className="space-y-8">
            {locations.map((loc) => (
              <div key={loc.rank} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6">
                  <span className="w-12 h-12 bg-[#34c5c5] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0 text-lg">{loc.rank}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{loc.name} — <span className="text-[#34c5c5]">{loc.tagline}</span></h3>
                    <p className="text-gray-600 leading-relaxed mb-2">{loc.description}</p>
                    <p className="text-sm font-medium text-gray-500"><strong>Best for:</strong> {loc.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreat Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Retreat Destinations in Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/corporate-retreat/wellness-retreat-costa-rica-full.jpeg', alt: 'Costa Rica retreat' },
              { src: '/images/corporate-retreat/wellness-retreat-roatan.jpeg', alt: 'Roatan retreat' },
              { src: '/images/corporate-retreat/fitness-retreat-costa-rica-full.jpg', alt: 'Fitness retreat' },
              { src: '/images/corporate-retreat/sam-3454-full.jpg', alt: 'Team retreat' },
              { src: '/images/corporate-retreat/colibri-resort.jpg', alt: 'Resort venue' },
              { src: '/images/corporate-retreat/aajpz-full.jpg', alt: 'Retreat experience' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Corporate Retreat Locations FAQ" />

      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Pick Your Destination?</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">Let Krystalore help you choose the perfect location and plan every detail of your corporate retreat.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Start Planning</Link>
            <Link href="/corporate-retreat-planning" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">Full-Service Planning</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/retreat-planning-tools" className="hover:text-white">Planning Tools</Link>
            <Link href="/retreat" className="hover:text-white">All Retreats</Link>
            <Link href="/revival-retreat" className="hover:text-white">Revival Retreat</Link>
            <Link href="/womens-retreats" className="hover:text-white">Women&apos;s Retreats</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
