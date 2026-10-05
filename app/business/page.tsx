import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Building2, Users, Rocket, HeartHandshake, Landmark, Gauge, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Next Level Business — Your Secret Weapon',
  description:
    'Krystalore Crews is the secret weapon behind operators who scale without burning down what they built. Pathways for business, associations, startups, communities, family offices, and Scale & Care.',
  alternates: { canonical: '/business' },
  openGraph: {
    title: 'Next Level Business — Your Secret Weapon',
    description:
      'Six pathways into the Next Level Business container: business, associations, startups, communities, family offices, and Scale & Care.',
    url: 'https://krystalore.com/business',
    type: 'website',
    images: [{ url: 'https://krystalore.com/images/go9/corporate.jpg', width: 1643, height: 1643, alt: 'Krystalore Crews leading a corporate session' }],
  },
}

// Every destination below mirrors the "Next Level Business" block in the global footer,
// so the two never drift apart. Card images are all drawn from the page they link to.
const PATHS = [
  {
    label: 'For Business',
    href: '/business-smart-start',
    image: '/images/go9/keynote.jpg',
    alt: 'Krystalore Crews presenting to a business audience',
    icon: Building2,
    blurb:
      'Conversion architecture and scaling frameworks for operators who are done guessing. Build the foundation first, then scale what already works.',
    features: ['Smart Start foundation', 'Conversion architecture', 'Scaling frameworks'],
  },
  {
    label: 'For Associations',
    href: '/co-branded-container',
    image: '/images/go9/group-evening.webp',
    alt: 'An association gathering in the evening',
    icon: Users,
    blurb:
      'Member benefits that actually drive ROI. Not another newsletter — real tools, real results, delivered under your brand.',
    features: ['Member-benefit tooling', 'Co-branded container', 'Measurable member ROI'],
  },
  {
    label: 'For Startups',
    href: '/business-smart-start',
    image: '/images/go9/hero.jpg',
    alt: 'Founders working through a growth plan',
    icon: Rocket,
    blurb:
      'Start smart. Get the offer, the foundation, and the demand engine right before you pour fuel on any of it.',
    features: ['Smart Start program', 'Offer + demand engine', 'Foundation before scale'],
  },
  {
    label: 'For Communities',
    href: '/co-branded-container',
    image: '/images/go9/community-hands.jpg',
    alt: 'Hands joined together in a community circle',
    icon: HeartHandshake,
    blurb:
      'You have a following, a tribe, an audience. We bring the technology to monetize and serve them at scale.',
    features: ['Monetize your audience', 'Serve at scale', 'Affinity group model'],
  },
  {
    label: 'For Family Offices',
    href: '/co-branded-container',
    image: '/images/go9/corporate.jpg',
    position: '55% 30%',
    alt: 'A corporate working session with principals',
    icon: Landmark,
    blurb:
      'Portfolio companies need scaling infrastructure. One container serves multiple investments at once.',
    features: ['Shared infrastructure', 'Multi-company container', 'Capital access coordination'],
  },
  {
    label: 'Scale & Care',
    href: '/smart-start-scale-care',
    image: '/images/go9/group-sunset.jpg',
    alt: 'A group together at sunset after a program',
    icon: Gauge,
    blurb:
      'Scale does not come easily — there is a LOT of work after the work. Growth that does not cost you your health, your people, or your life.',
    features: ['Everything within container price', 'Generational partnerships', 'Rising tide mentality'],
  },
]

const WEAPON = [
  {
    title: 'She has run it, not just taught it',
    body: 'Operator first, advisor second. The frameworks come from businesses that had to actually work, not from a slide deck.',
  },
  {
    title: 'She works behind the principal',
    body: 'The quiet seat next to the decision maker. Your name stays on the win — that is the whole point of a secret weapon.',
  },
  {
    title: 'She refuses growth that costs you everything',
    body: 'Capacity, health, and relationships are treated as business infrastructure, because that is exactly what they are.',
  },
]

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* ── HERO ──
            Two columns rather than a full-bleed background: the source photo is square
            with Krystalore on the left of frame, so a full-bleed crop puts her face
            directly under the headline. A contained image keeps her whole. */}
        <section className="relative overflow-hidden bg-[#07201f]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fdba74]">
                Crews Beyond Limits &middot; Next Level Business
              </p>
              <h1 className="mt-5 text-4xl font-black leading-[1.02] text-white md:text-6xl">
                Your
                <span className="block bg-gradient-to-r from-[#fdba74] via-[#F97316] to-[#8ff5ef] bg-clip-text text-transparent">
                  Secret Weapon
                </span>
              </h1>
              <p className="mt-6 text-xl font-semibold text-white/90 md:text-2xl">
                The advantage your competitors cannot buy off a shelf.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
                Krystalore Crews sits beside operators, boards, and founders who need to scale without
                burning down the thing they built. Six ways in — pick the one that sounds like you.
              </p>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#fdba74]">
                Clarity before capacity. Capacity before complexity.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#pathways"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F97316] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#ea6a0c]"
                >
                  Find Your Pathway <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#07201f]"
                >
                  Talk To Krystalore
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/15 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/go9/corporate.jpg"
                  alt="Krystalore Crews in a white blazer leading a corporate working session"
                  fill
                  priority
                  className="object-cover"
                  style={{ objectPosition: '22% 35%' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07201f]/55 via-transparent to-transparent" />
              </div>
              <span className="absolute -bottom-3 left-6 rounded-full bg-[#F97316] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                Krystalore Crews
              </span>
            </div>
          </div>
        </section>

        {/* ── WHY SHE IS THE SECRET WEAPON ── */}
        <section className="bg-[#07201f] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#fdba74]">
              Why operators keep her close
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-center text-3xl font-black leading-tight text-white md:text-4xl">
              A secret weapon is not a louder consultant.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-white/70">
              It is the person who makes the principal sharper, faster, and harder to knock over —
              and who never needs the credit.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {WEAPON.map((w) => (
                <div key={w.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <h3 className="text-lg font-bold text-white">{w.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE SIX PATHWAYS ── */}
        <section id="pathways" className="scroll-mt-20 bg-[#f8fafa] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#F97316]">
              Next Level Business
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-center text-3xl font-black leading-tight text-[#07201f] md:text-4xl">
              Six pathways. One container.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-gray-600">
              Every door below opens into the same infrastructure — the difference is who you are
              when you walk through it.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PATHS.map((p) => {
                const Icon = p.icon
                return (
                  <Link
                    key={p.label}
                    href={p.href}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/80 transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-[#F97316]/40"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        style={p.position ? { objectPosition: p.position } : undefined}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07201f]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#F97316] text-white">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <h3 className="text-lg font-black text-white drop-shadow">{p.label}</h3>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[15px] leading-relaxed text-gray-600">{p.blurb}</p>

                      <ul className="mt-5 space-y-2">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-[#07201f]">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0D9488]" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#F97316]">
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black leading-tight text-[#07201f] md:text-4xl">
              Not sure which door is yours?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              That is usually the right time to talk. One conversation is normally enough to tell
              whether this is a fit — and Krystalore will say so either way.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F97316] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#ea6a0c]"
              >
                Start The Conversation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/compare-business-options"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#07201f]/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#07201f] transition-colors hover:border-[#07201f] hover:bg-[#07201f] hover:text-white"
              >
                Compare The Options
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
