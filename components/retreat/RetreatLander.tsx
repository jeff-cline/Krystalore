import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Check, Heart, Mail, MapPin, Sparkles, Users } from 'lucide-react'
import Header from '@/components/layout/header'
import RetreatHeroMontage from '@/components/retreat/RetreatHeroMontage'
import RetreatInquiryModal from '@/components/retreat/RetreatInquiryModal'
import RetreatTestimonialScroller from '@/components/retreat/RetreatTestimonialScroller'
import { retreatTestimonials } from '@/data/retreat-testimonials'
import Footer from '@/components/layout/Footer'

export const WAITLIST_URL = 'https://www.krystalorecrews.com/revive-and-thrive-retreat-checkout'
export const PRIVATE_RETREAT_URL = 'https://www.krystalorecrews.com/costa-rica-retreat-private-request-page'
export const PR_WAITLIST_URL = 'https://www.krystalorecrews.com/costa-rica-revival-retreat-waitlist'

export type RetreatOption = {
  title: string
  location: string
  dates: string
  description: string
  href: string
  image: string
  badge?: string
  cta?: string
}

export const retreatOptions: RetreatOption[] = [
  {
    title: 'Costa Rica Revival Retreat',
    location: 'Costa Rica',
    dates: '',
    description: 'A tropical revival experience for women ready to reset, reconnect, move their bodies, and rise into a bolder next chapter.',
    href: '/cr-retreat',
    image: '/images/retreat-destinations/cr-01.jpg',
    badge: 'Featured',
    cta: 'Explore Costa Rica',
  },
  {
    title: 'Puerto Rico Revive & Thrive Retreat',
    location: 'Puerto Rico',
    dates: '',
    description: 'A Caribbean wellness and transformation retreat — beachfront in Ocean Park, San Juan, with coaching, movement, and sisterhood steps from the ocean.',
    href: '/pr-retreat',
    image: '/images/retreat/villa-azure/swing-ocean.jpg',
    cta: 'Explore Puerto Rico',
  },
  {
    title: 'Tennessee Fall Retreat',
    location: 'Tennessee',
    dates: '',
    description: 'A future fall reset in the Tennessee hills for restoration, clarity, connection, and powerful next-season planning.',
    href: '/tn-retreat',
    image: '/images/retreat-destinations/tn-airbnb/tn-lake-01.png',
    cta: 'Explore Tennessee',
  },
]

export function buildEventMailto() {
  const subject = 'Retreat / Event Speaking or Collaboration Request'
  const body = 'NAME:\nPHONE:\nORGANIZATION / EVENT:\nDATES / LOCATION:\nHow can Krystalore support your retreat or event?:'
  return `mailto:krystalore@thecrewscoach.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function RetreatCTAButtons({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
      <Link href="/waitlist" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f3498c] to-[#d92d70] text-white font-black px-7 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
        Wait List & Updates <ArrowRight className="h-5 w-5" />
      </Link>
      <a
        href={PRIVATE_RETREAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={
          onDark
            ? 'inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-black px-7 py-4 rounded-full hover:bg-white hover:text-[#17495c] transition-colors'
            : 'inline-flex items-center justify-center gap-2 border-2 border-[#2a7fa0] text-[#2a7fa0] font-black px-7 py-4 rounded-full hover:bg-[#41a7c9]/5 transition-colors'
        }
      >
        Book Private Retreat
      </a>
    </div>
  )
}

/* The eight ways a Revive & Thrive retreat gets used. */
export const RETREAT_TYPES = [
  'Wellness',
  'Book Writing',
  'Business Building',
  'Private',
  'Team Building',
  'Corporate',
  'Bridal Parties',
  'Couples',
]

/* Every property photo across all three destinations, for the hero montage. */
export const HERO_MONTAGE_IMAGES = [
  '/images/retreat/villa-azure/swing-ocean.jpg',
  '/images/retreat-destinations/cr-01.jpg',
  '/images/retreat-destinations/tn-airbnb/tn-lake-01.png',
  '/images/retreat/villa-azure/pool.jpg',
  '/images/retreat/villa-azure/suite-king.jpg',
  '/images/retreat-destinations/cr-02.jpg',
  '/images/retreat-destinations/tn-airbnb/tn-lake-03.jpg',
  '/images/retreat/villa-azure/ocean-palms.jpg',
  '/images/retreat/villa-azure/suite-twin-queen.jpg',
  '/images/retreat-destinations/cr-03.jpg',
  '/images/retreat-destinations/tn-airbnb/tn-lake-05.jpg',
  '/images/retreat/villa-azure/terrace-lounge.jpg',
  '/images/retreat/villa-azure/suite-double.jpg',
  '/images/retreat-destinations/cr-04.jpg',
  '/images/retreat-destinations/tn-airbnb/tn-lake-07.jpg',
  '/images/retreat/villa-azure/dining-ocean.jpg',
  '/images/retreat/villa-azure/bathroom-marble.jpg',
  '/images/retreat-destinations/cr-05.jpg',
  '/images/retreat-destinations/tn-airbnb/tn-lake-09.jpg',
  '/images/retreat/villa-azure/lawn-ocean.jpg',
  '/images/retreat-destinations/cr-06.jpg',
  '/images/retreat-destinations/tn-04.png',
]

export function RetreatHubPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        {/* ── HERO IMAGE — montage of every property, one frame per second ── */}
        <RetreatHeroMontage images={HERO_MONTAGE_IMAGES} />

        {/* ── LOGO + HEADLINE — on white ── */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="mx-auto md:mx-0 w-full max-w-[32rem]">
                <Image
                  src="/images/retreat/revive-and-thrive-retreats-logo.png"
                  alt="Revive & Thrive Retreats — Ignite your Spirit, Thrive in Life"
                  width={512}
                  height={512}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-[#2a7fa0] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
                  Revive &amp; Thrive Retreats
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] mb-5 text-gray-900" style={{ textShadow: '0 0 2px rgba(179,211,18,0.55), 0 0 14px rgba(179,211,18,0.45), 0 0 32px rgba(179,211,18,0.28)' }}>
                  Retreat <span className="italic font-serif text-[#f3498c]">Yourself</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
                  Transformational getaways for anyone ready to reset and rise. You do EVERYTHING for
                  EVERYONE ELSE. Now&hellip; it&rsquo;s YOUR turn.
                </p>
                <div className="flex justify-center md:justify-start">
                  <RetreatCTAButtons />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHOOSE YOUR EXPERIENCE — retreat types ── */}
        <section className="bg-[#2a7fa0] text-white border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-3" style={{ textShadow: '0 0 2px rgba(179,211,18,0.55), 0 0 14px rgba(179,211,18,0.45), 0 0 32px rgba(179,211,18,0.28)' }}>
              Choose your <span className="italic font-serif text-[#f3498c]">experience.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              Coaching, movement, wellness &amp; sisterhood &mdash; in breathtaking places.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="h-px flex-1 bg-white/25" />
              <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/90 whitespace-nowrap">
                Retreat Types
              </span>
              <span className="h-px flex-1 bg-white/25" />
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {RETREAT_TYPES.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-white/35 px-5 py-2.5 md:px-7 md:py-3 text-base md:text-xl font-bold"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SIGNATURE DESTINATIONS ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#2a7fa0] font-bold tracking-[0.3em] uppercase text-sm mb-3">Signature Destinations</p>
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ textShadow: '0 0 2px rgba(179,211,18,0.55), 0 0 14px rgba(179,211,18,0.45), 0 0 32px rgba(179,211,18,0.28)' }}>Where do you want to revive and thrive?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {retreatOptions.map((retreat) => (
                <Link key={retreat.href} href={retreat.href} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image src={retreat.image} alt={retreat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    {retreat.badge && <span className="absolute top-4 left-4 bg-[#f3498c] text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">{retreat.badge}</span>}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#2a7fa0] font-bold mb-2"><MapPin className="inline h-4 w-4 mr-1" />{retreat.location}</p>
                    <h3 className="text-2xl font-black mb-2">{retreat.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-5">{retreat.description}</p>
                    <span className="inline-flex items-center gap-2 text-[#2a7fa0] font-black">{retreat.cta ?? 'Learn More'} <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS — SCROLLING VIDEO WALL ── */}
        <section className="py-16 md:py-24 bg-[#f2f8fb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#2a7fa0] font-bold tracking-[0.3em] uppercase text-sm mb-3">Testimonials</p>
              <h2
                className="text-3xl md:text-4xl font-black mb-4"
                style={{ textShadow: '0 0 2px rgba(179,211,18,0.55), 0 0 14px rgba(179,211,18,0.45), 0 0 32px rgba(179,211,18,0.28)' }}
              >
                Real Women. Real <span className="text-[#f3498c]">Transformations.</span>
              </h2>
              <p className="text-gray-500 text-lg">
                In their own words &mdash; straight from past Revive &amp; Thrive retreats.
              </p>
            </div>
            <RetreatTestimonialScroller videos={retreatTestimonials} />
          </div>
        </section>

        {/* ── WORK WITH KRYSTALORE ── */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#17495c] via-[#2a7fa0] to-[#41a7c9] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#b3d312] font-bold tracking-[0.3em] uppercase text-sm mb-3">Featured</p>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ textShadow: '0 0 2px rgba(179,211,18,0.55), 0 0 14px rgba(179,211,18,0.45), 0 0 32px rgba(179,211,18,0.28)' }}>
                Work with <span className="italic font-serif text-[#f3498c]">Krystalore</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Come to a retreat that&rsquo;s already handled &mdash; or build your own with her beside you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* DONE FOR YOU */}
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
                      <Check className="h-5 w-5 text-[#2a7fa0] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-bold text-gray-500 mb-5">
                  Best for: individuals and small groups who want the experience without the workload.
                </p>
                <RetreatInquiryModal
                  triggerClassName="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f3498c] to-[#d92d70] text-white font-black px-7 py-4 rounded-full hover:scale-[1.03] transition-transform shadow-lg"
                />
              </div>

              {/* DONE WITH YOU */}
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
                      <Check className="h-5 w-5 text-[#2a7fa0] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-bold text-gray-500 mb-5">
                  Best for: coaches, leaders and organizations running a retreat of their own.
                </p>
                <RetreatInquiryModal
                  triggerClassName="w-full inline-flex items-center justify-center gap-2 bg-[#2a7fa0] hover:bg-[#17495c] text-white font-black px-7 py-4 rounded-full transition-colors shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#F4F1EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            <a href={PRIVATE_RETREAT_URL} target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-[#2a7fa0] mb-4" />
              <h3 className="text-2xl font-black mb-3">Book Private Retreat</h3>
              <p className="text-gray-600 mb-5">Create a custom retreat for your team, organization, circle, or private group.</p>
              <span className="font-black text-[#2a7fa0] inline-flex items-center gap-2">Request Details <ArrowRight className="h-4 w-4" /></span>
            </a>
            <Link href="/waitlist" className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <Heart className="h-10 w-10 text-[#f3498c] mb-4" />
              <h3 className="text-2xl font-black mb-3">Waitlist</h3>
              <p className="text-gray-600 mb-5">Get updates for open rooms, future dates, checkout windows, and upcoming retreat announcements.</p>
              <span className="font-black text-[#2a7fa0] inline-flex items-center gap-2">Join Updates <ArrowRight className="h-4 w-4" /></span>
            </Link>
            <a href={buildEventMailto()} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <Mail className="h-10 w-10 text-[#2a7fa0] mb-4" />
              <h3 className="text-2xl font-black mb-3">Book Krystalore to Speak or Collab</h3>
              <p className="text-gray-600 mb-5">Invite Krystalore to your retreat, event, or collaboration opportunity.</p>
              <span className="font-black text-[#2a7fa0] inline-flex items-center gap-2">Send Email Request <ArrowRight className="h-4 w-4" /></span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

type LanderProps = {
  eyebrow: string
  title: string
  dates: string
  location: string
  description: string
  heroImage: string
  gallery: string[]
  highlights: string[]
  checkoutUrl?: string
  checkoutLabel?: string
}

export function RetreatLander({ eyebrow, title, dates, location, description, heroImage, gallery, highlights, checkoutUrl = WAITLIST_URL, checkoutLabel = 'Wait List & Updates' }: LanderProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <section className="relative bg-gradient-to-b from-[#41a7c9]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#41a7c9]/15 text-[#2a7fa0] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-[1.05]">{title}</h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">{description}</p>
                <div className="flex flex-col sm:flex-row gap-3 text-gray-700 font-bold mb-8">
                  <span><Calendar className="inline h-5 w-5 text-[#2a7fa0] mr-2" />{dates}</span>
                  <span><MapPin className="inline h-5 w-5 text-[#2a7fa0] mr-2" />{location}</span>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f3498c] to-[#d92d70] text-white font-black px-7 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
                    {checkoutLabel} <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-[#2a7fa0] text-[#2a7fa0] font-black px-7 py-4 rounded-full hover:bg-[#41a7c9]/5 transition-colors">
                    Wait List & Updates
                  </a>
                  <a href={PRIVATE_RETREAT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-800 font-black px-7 py-4 rounded-full hover:bg-gray-50 transition-colors">
                    Book Private Retreat
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src={heroImage} alt={title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {gallery.map((src, index) => (
                <div key={src} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                  <Image src={src} alt={`${title} retreat photo ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              ))}
            </div>
            <div className="bg-[#F4F1EC] rounded-3xl p-8 md:p-12">
              <p className="text-[#2a7fa0] font-bold uppercase tracking-widest text-sm mb-3">What to Expect</p>
              <h2 className="text-3xl md:text-4xl font-black mb-8">A retreat designed for clarity, confidence, and community.</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 bg-white rounded-2xl p-5 shadow-sm">
                    <Check className="h-6 w-6 text-[#2a7fa0] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-[#f3498c] to-[#d92d70] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-5">Ready for updates or a private retreat?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">Join the waitlist for retreat updates, or request a private retreat experience built around your group.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-black px-7 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">Wait List & Updates <ArrowRight className="h-5 w-5" /></a>
              <a href={PRIVATE_RETREAT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-black px-7 py-4 rounded-full hover:bg-white/10 transition-colors">Book Private Retreat</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
