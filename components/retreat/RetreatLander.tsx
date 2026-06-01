import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Check, Heart, Mail, MapPin, Sparkles, Users } from 'lucide-react'
import Header from '@/components/layout/header'
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
    dates: 'October 18–25, 2026',
    description: 'A tropical revival experience for women ready to reset, reconnect, move their bodies, and rise into a bolder next chapter.',
    href: '/cr-retreat',
    image: '/images/retreat-destinations/cr-01.jpg',
    badge: 'Featured',
    cta: 'Explore Costa Rica',
  },
  {
    title: 'Puerto Rico Revive & Thrive Retreat',
    location: 'Ceiba, Puerto Rico',
    dates: 'March 28–April 3, 2027',
    description: 'A Caribbean wellness and transformation retreat with ocean views, rainforest energy, coaching, movement, and sisterhood.',
    href: '/pr-retreat',
    image: '/images/retreat/retreat-06.jpg',
    cta: 'Explore Puerto Rico',
  },
  {
    title: 'Tennessee Fall Retreat',
    location: 'Tennessee',
    dates: 'Fall 2027 — dates TBD',
    description: 'A future fall reset in the Tennessee hills for restoration, clarity, connection, and powerful next-season planning.',
    href: '/tn-retreat',
    image: '/images/retreat-destinations/tn-03.png',
    cta: 'Explore Tennessee',
  },
]

export function buildEventMailto() {
  const subject = 'Retreat / Event Speaking or Collaboration Request'
  const body = 'NAME:\nPHONE:\nORGANIZATION / EVENT:\nDATES / LOCATION:\nHow can Krystalore support your retreat or event?:'
  return `mailto:krystalore@thecrewscoach.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function RetreatCTAButtons({ checkoutUrl = WAITLIST_URL }: { checkoutUrl?: string }) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
      <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-7 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
        Wait List & Updates <ArrowRight className="h-5 w-5" />
      </a>
      <a href={PRIVATE_RETREAT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-[#0D9488] text-[#0D9488] font-black px-7 py-4 rounded-full hover:bg-[#0D9488]/5 transition-colors">
        Book Private Retreat
      </a>
    </div>
  )
}

export function RetreatHubPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Sparkles className="h-3.5 w-3.5" /> Revive & Thrive Retreats
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-[1.05]">
                  Choose Your Next Beyond Limits Retreat Experience
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  One main retreat home for every current and future option: Costa Rica, Puerto Rico, Tennessee, private retreats, waitlist updates, and event collaborations.
                </p>
                <RetreatCTAButtons />
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/retreat-destinations/cr-01.jpg" alt="Costa Rica retreat property with tropical views" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">All Retreat Options</p>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Where do you want to revive and thrive?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {retreatOptions.map((retreat) => (
                <Link key={retreat.href} href={retreat.href} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image src={retreat.image} alt={retreat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    {retreat.badge && <span className="absolute top-4 left-4 bg-[#E8A849] text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">{retreat.badge}</span>}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#0D9488] font-bold mb-2"><MapPin className="inline h-4 w-4 mr-1" />{retreat.location}</p>
                    <h3 className="text-2xl font-black mb-2">{retreat.title}</h3>
                    <p className="text-gray-500 font-semibold mb-3"><Calendar className="inline h-4 w-4 mr-1" />{retreat.dates}</p>
                    <p className="text-gray-600 leading-relaxed mb-5">{retreat.description}</p>
                    <span className="inline-flex items-center gap-2 text-[#0D9488] font-black">{retreat.cta ?? 'Learn More'} <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[#F4F1EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            <a href={PRIVATE_RETREAT_URL} target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-[#0D9488] mb-4" />
              <h3 className="text-2xl font-black mb-3">Book Private Retreat</h3>
              <p className="text-gray-600 mb-5">Create a custom retreat for your team, organization, circle, or private group.</p>
              <span className="font-black text-[#0D9488] inline-flex items-center gap-2">Request Details <ArrowRight className="h-4 w-4" /></span>
            </a>
            <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <Heart className="h-10 w-10 text-[#E8A849] mb-4" />
              <h3 className="text-2xl font-black mb-3">Waitlist</h3>
              <p className="text-gray-600 mb-5">Get updates for open rooms, future dates, checkout windows, and upcoming retreat announcements.</p>
              <span className="font-black text-[#0D9488] inline-flex items-center gap-2">Join Updates <ArrowRight className="h-4 w-4" /></span>
            </a>
            <a href={buildEventMailto()} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <Mail className="h-10 w-10 text-[#0D9488] mb-4" />
              <h3 className="text-2xl font-black mb-3">Book Krystalore to Speak or Collab</h3>
              <p className="text-gray-600 mb-5">Invite Krystalore to your retreat, event, or collaboration opportunity.</p>
              <span className="font-black text-[#0D9488] inline-flex items-center gap-2">Send Email Request <ArrowRight className="h-4 w-4" /></span>
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
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                  <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5 leading-[1.05]">{title}</h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">{description}</p>
                <div className="flex flex-col sm:flex-row gap-3 text-gray-700 font-bold mb-8">
                  <span><Calendar className="inline h-5 w-5 text-[#0D9488] mr-2" />{dates}</span>
                  <span><MapPin className="inline h-5 w-5 text-[#0D9488] mr-2" />{location}</span>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-black px-7 py-4 rounded-full hover:scale-105 transition-transform shadow-lg">
                    {checkoutLabel} <ArrowRight className="h-5 w-5" />
                  </a>
                  <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-[#0D9488] text-[#0D9488] font-black px-7 py-4 rounded-full hover:bg-[#0D9488]/5 transition-colors">
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
              <p className="text-[#0D9488] font-bold uppercase tracking-widest text-sm mb-3">What to Expect</p>
              <h2 className="text-3xl md:text-4xl font-black mb-8">A retreat designed for clarity, confidence, and community.</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 bg-white rounded-2xl p-5 shadow-sm">
                    <Check className="h-6 w-6 text-[#0D9488] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-[#E8A849] to-[#e07800] text-white">
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
