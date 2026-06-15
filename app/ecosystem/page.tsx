'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
  Compass, Crown, Layers, MapPin, Mic, Users, Briefcase, HeartPulse, Heart,
  Cpu, Share2, BookOpen, ArrowRight, ExternalLink, Sparkles, Brain, ShieldCheck,
  Quote, ChevronRight, Flag, Building2, Rocket, Target,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type LinkRef = { label: string; href: string; external?: boolean }
type Section = {
  id: string
  label: string
  tag: string          // her-voice tagline / quote
  what: string
  who: string
  sell: string[]       // how to sell — talking points
  somatic?: string     // somatic / trauma-informed framing
  links: LinkRef[]
}

const CHECKOUT = 'https://www.krystalorecrews.com/rise-and-thrive-checkout'

// The vertical journey (top → bottom) shown on the Overview tab.
const JOURNEY = [
  { stage: 'Discover · Free', target: 'journey', items: ['Habit Tracker', 'Power Hour Coworking', 'Quizzes'] },
  { stage: 'Entry Events', target: 'journey', items: ['Vision Board Party', 'Bombshell Bootcamp', 'Rewrite Masterclass'] },
  { stage: 'Core Programs', target: 'journey', items: ['Health Mastery', 'Beyond Limits Bootcamp', 'Million Dollar Body', 'Courses'] },
  { stage: 'Premium · VIP', target: 'vip', highlight: true, items: ['★ Rise & Thrive Bundle', 'Costa Rica Retreat', 'Private Somatic Coaching'] },
]

const PILLARS = [
  { id: 'nonprofit', icon: Flag, label: 'Non-Profit', sub: 'Her Next Mission', role: 'The heart & the proof' },
  { id: 'corporate', icon: Building2, label: 'Corporate', sub: 'Activate4Impact', role: 'The engine & scale' },
  { id: 'tech', icon: Cpu, label: 'Tech', sub: 'R0cketShip', role: 'The infrastructure' },
  { id: 'community', icon: Share2, label: 'Community', sub: 'World Changers', role: 'The living proof' },
]

const SECTIONS: Record<string, Section> = {
  vip: {
    id: 'vip', label: 'VIP Bundle', tag: 'This is so much bigger than a fitness program. It’s your next chapter.',
    what: 'The flagship 90-day whole-woman transformation. It bundles the Rise & Thrive Academy, Beyond Limits Bootcamp, and the in-person Costa Rica Celebration Retreat into one journey — sold as The Bundle, or the VIP Upgrade (adds private coaching with Krystalore).',
    who: 'High-achieving women in a season of change — Veterans, entrepreneurs, executives, and caretakers — successful on paper but quietly surviving instead of thriving.',
    sell: [
      'Lead with the whole woman, not the workout: “Most women try to change one piece. This changes the whole woman.”',
      'Use the bundle math: each piece is powerful alone — together they’re life-changing. That’s why the bundle beats buying one thing.',
      'Walk them through the 3-phase roadmap (Reset → Rewrite → Rise) so 90 days feel mapped, not vague.',
      'Sell the retreat as the embodiment moment: “Costa Rica isn’t a vacation. It’s a rebirth” — where insight becomes lived change.',
      'Position VIP as the deepest support: private 1:1 coaching with Krystalore + a customized success plan + direct access.',
      'Close on agency and hope: “Your best chapter is still ahead — and it gets to be this good, or even better.”',
    ],
    somatic: 'This is nervous-system-first transformation. Strategy alone fails without regulation — name it: we regulate the body, rewrite the story, then rise into action. Trauma-informed, paced, and embodied.',
    links: [
      { label: 'View the live page (/rise-and-thrive)', href: '/rise-and-thrive' },
      { label: 'Bundle checkout', href: CHECKOUT, external: true },
    ],
  },
  retreats: {
    id: 'retreats', label: 'Retreats', tag: '7 days that will change everything.',
    what: 'Luxury transformational retreats — Costa Rica, Puerto Rico, Tennessee, plus Couples, Veterans, and Business retreats — coaching + adventure + sisterhood, fully hosted.',
    who: 'High-achieving women (and couples / Veterans) ready to reset, reflect, and rise away from the noise.',
    sell: [
      'Sell the feeling: “You deserve to be treated like a queen” — all-inclusive, don’t-lift-a-finger luxury.',
      'Sell the outcome, not the itinerary: arrive carrying stress, leave with clarity, confidence, friendships, momentum, and a real plan.',
      'Match destination to person (Costa Rica reset, Puerto Rico rainforest-meets-sea, Tennessee lake grounding, Couples 5 C’s, Veterans mission-reset).',
      'The retreat is the integration layer of the whole ecosystem — where transformation becomes embodied.',
    ],
    somatic: 'Retreats are nervous-system resets: space, beauty, rest, and co-regulation in sisterhood. Name it gently — safety first, then breakthrough.',
    links: [
      { label: 'All retreats (/retreat)', href: '/retreat' },
      { label: 'Costa Rica (/cr-retreat)', href: '/cr-retreat' },
      { label: 'Veterans (/veteran-retreats)', href: '/veteran-retreats' },
      { label: 'Couples (/couples-retreats)', href: '/couples-retreats' },
    ],
  },
  speaking: {
    id: 'speaking', label: 'Speaking', tag: 'From service to stage — transformation that moves a room.',
    what: 'Keynotes and event presentations on leadership, resilience, emotional intelligence, women’s empowerment, and Veteran transition.',
    who: 'Corporate events, conferences, associations, and organizations wanting a high-impact, authentic keynote.',
    sell: [
      'Lead with lived credibility: 22-year USAF Senior Master Sergeant, cancer survivor, 28-time marathoner, best-selling author.',
      'Offer customization: content tailored to the audience, industry, and goals.',
      'Sell outcomes, not just inspiration: dynamic, interactive talks that drive action and lasting change.',
      'Speaking is top-of-funnel for corporate — a keynote opens the door to Wellness, Leadership, and Retreats.',
    ],
    links: [
      { label: 'Speaking page (/keynote-speaker)', href: '/keynote-speaker' },
      { label: 'Book her (/book)', href: '/book' },
    ],
  },
  leadership: {
    id: 'leadership', label: 'Leadership Training', tag: 'Military-grade leadership. Human-centered wellness.',
    what: 'Customizable corporate training: emotional intelligence, Four Lenses temperament, team building, and Compassionate-Inquiry coaching — from 1 hour to multi-day.',
    who: 'Corporate teams and leaders across healthcare, tech, finance, government, nonprofit, and military.',
    sell: [
      'Start with the leaders: “Leadership running on empty sets the tone for everyone.”',
      'Sell practical + memorable: tools teams use daily, not theory.',
      'Offer flexible formats (1-hr to 8-hr workshops, retreats, ongoing coaching), in-person or virtual.',
      'Bridge to Wellness + FIRE Challenge + Retreats for a full culture engagement.',
    ],
    somatic: 'Frame EQ as nervous-system literacy: regulated leaders make better decisions. Compassionate Inquiry brings trauma-informed depth to leadership work.',
    links: [
      { label: 'Leadership Training (/leadership-training)', href: '/leadership-training' },
      { label: 'EQ Training (/emotional-intelligence-training)', href: '/emotional-intelligence-training' },
    ],
  },
  business: {
    id: 'business', label: 'Business Scaling', tag: 'Business without wellness is self-sabotage. Scale & Care.',
    what: 'Business coaching and retreats for founders — strategy + systems + wellness — via Business Smart Start and Business Bootcamp.',
    who: 'Entrepreneurs and owners in early-stage, scaling, or systematizing phases who refuse to burn out to grow.',
    sell: [
      'Lead with integration: grow the business AND protect the human running it.',
      'Use the Smart-Start Quiz to diagnose their stage and personalize the path.',
      'Sell access to lived experience scaling a real business + a small-group mastermind.',
      'Bridge to Activate4Impact (Corporate) for enterprise-scale execution.',
    ],
    links: [
      { label: 'Business Smart Start (/business-smart-start)', href: '/business-smart-start' },
      { label: 'Business Bootcamp (/business-bootcamp)', href: '/business-bootcamp' },
    ],
  },
  wellness: {
    id: 'wellness', label: 'Wellness', tag: 'Your team’s greatest asset is their energy.',
    what: 'Corporate wellness with soul — leadership-first programs, team movement, and accountability — plus the 30-day FIRE Challenge.',
    who: 'Teams from 5 to enterprise, fighting burnout and low engagement, that want accountability — not a passive app.',
    sell: [
      'Reframe the problem: “It’s not motivation. It’s energy and overwhelm.”',
      'Self-leadership first: start with leaders; culture follows.',
      'Sell accountable, personalized wellness (health reviews + built-in accountability), not check-the-box perks.',
      'Tier it (Small Team → Mid-Size → Enterprise) with ecosystem discounts; lead in with the FIRE Challenge (Focus · Intention · Resilience · Energy).',
    ],
    somatic: 'Position wellness as burnout recovery and nervous-system resilience — sustainable performance, not hustle culture.',
    links: [
      { label: 'Corporate Wellness (/wellness)', href: '/wellness' },
      { label: 'FIRE Challenge (/firechallenge)', href: '/firechallenge' },
    ],
  },
  nonprofit: {
    id: 'nonprofit', label: 'Non-Profit', tag: 'Not broken — between missions.',
    what: 'HER NEXT MISSION — a 501(c)(3) supporting women Veterans and first responders through transition: somatic coaching, bootcamps, retreats, an annual summit, and the “From Service to Success” podcast.',
    who: 'Women leaving military / fire / law-enforcement / EMS roles facing identity loss and burnout — and donors who want to fund that transition.',
    sell: [
      'It’s the heart and origin story — lived experience, not theory (founded by a 22-year USAF Senior Master Sergeant).',
      'It’s a registered 501(c)(3): corporate and individual giving is tax-deductible.',
      'Same DNA as everything we do: coaching, community, clarity.',
      'Strong corporate-CSR tie-in: companies can sponsor seats and scholarships.',
    ],
    links: [
      { label: 'hernextmission.org', href: 'https://hernextmission.org/', external: true },
    ],
  },
  corporate: {
    id: 'corporate', label: 'Corporate', tag: 'From big idea to red-carpet rollout.',
    what: 'Activate4Impact — the corporate execution arm: strategy, production, and logistics for retreats, conferences, launches, training, and culture transformation at enterprise / government scale.',
    who: 'Government & defense, federal agencies, enterprise, hospitality / tourism, real-estate developers, and mission-driven nonprofits.',
    sell: [
      'Sell military-grade execution: one team owns the full lifecycle — not fragmented vendors.',
      'Sell scale: methodology proven across large-scale trainings and productions.',
      'It’s the engine that turns the coaching model into paid corporate impact.',
      'Pair with Speaking + Leadership + Wellness for a full enterprise engagement.',
    ],
    links: [
      { label: 'activate4impact.com', href: 'https://activate4impact.com/', external: true },
    ],
  },
  tech: {
    id: 'tech', label: 'Tech', tag: 'People on fire, powered by AI.',
    what: 'R0cketShip — the tech backbone: drop-in community-platform development and custom tech built for “scale and reduction,” plus an AI-powered predictive data and lead engine.',
    who: 'Operators and teams who need a platform + automation to grow reach while cutting manual cost and overhead.',
    sell: [
      'Frame it as the infrastructure layer the whole stack runs on.',
      '“Scale and reduction”: do more, reach further, with far less manual effort.',
      'Drop-in community platforms (branded, custom) + CRM integration + automation.',
      'Same philosophy as the coaching: tech amplifies people, it doesn’t replace them.',
    ],
    links: [
      { label: 'r0cketship.com', href: 'https://r0cketship.com/', external: true },
    ],
  },
  community: {
    id: 'community', label: 'Community', tag: 'One community. Endless connections.',
    what: 'World Changers — the living proof of the community model: a membership community + directory that uses tech and social media to connect and amplify an impact-minded network.',
    who: 'Entrepreneurs and professionals who want connection on one side and customers on the other.',
    sell: [
      'Point to proof: a real, active community with thousands of members and documented connections.',
      'It runs on the same tech we deploy (directory, matching, events) — amplified by social.',
      'Use it as the template: “We can stand one of these up for you, branded and custom.”',
      'It closes the loop: coaching creates transformation, community sustains and multiplies it.',
    ],
    links: [
      { label: 'worldchangers.ai', href: 'https://www.worldchangers.ai/', external: true },
    ],
  },
}

// The coaching ladder, for the "Journey" tab.
const LADDER = [
  { rung: 'Discover · Free', note: 'Real entry points — not upsells in disguise. Get a quick win, then invite the next step. “One page replaces ten apps.”', items: [
    { label: 'Habit Tracker', href: '/habittracker' }, { label: 'Power Hour Coworking', href: '/coworking' }, { label: 'Quizzes', href: '/quizzes' },
  ] },
  { rung: 'Entry Events', note: 'Low-risk, high-clarity. Vision = direction · Bombshell = 5-day Freedom Formula reset · Masterclass = “how to stay” in the messy middle.', items: [
    { label: 'Vision Board Party', href: '/vision-board' }, { label: 'Bombshell Bootcamp', href: '/bombshell-bootcamp' }, { label: 'Rewrite Masterclass', href: '/masterclass' },
  ] },
  { rung: 'Core Programs', note: 'Ongoing accountability + community. “You’ve built success. Now it’s time to feel like it.”', items: [
    { label: 'Health Mastery', href: '/health-mastery' }, { label: 'Beyond Limits Bootcamp', href: '/bootcamp' }, { label: 'Million Dollar Body', href: '/million-dollar-body' }, { label: 'Courses', href: '/courses' },
  ] },
  { rung: 'Premium · VIP', note: 'Whole-life reset + 1:1 depth — the journey’s destination. This is where the bundle math pays off.', items: [
    { label: 'Rise & Thrive (VIP Bundle)', href: '/rise-and-thrive' }, { label: 'Private Somatic Coaching', href: '/privatemindset' },
  ] },
]

const PHASES = [
  { n: '01', name: 'Reset', from: 'Exhausted & overwhelmed', to: 'Clear, grounded, energized', color: '#34c5c5' },
  { n: '02', name: 'Rewrite', from: 'Limiting beliefs & self-doubt', to: 'Confidence & self-trust', color: '#0D9488' },
  { n: '03', name: 'Rise', from: 'Playing small', to: 'Showing up fully, next chapter', color: '#e07800' },
]

const PHRASES = [
  '“I’ve lived the comeback I coach.”',
  '“Stop surviving. Start thriving.”',
  '“You’re not broken. You’re between chapters.”',
  '“Come home to yourself.”',
  '“Your best chapter is still ahead.”',
  '“Military-grade leadership. Human-centered wellness.”',
  '“The body keeps the score.”',
  '“Most women try to change one piece. This changes the whole woman.”',
]

const SOMATIC_GLOSSARY = [
  { term: 'Nervous-system regulation', use: 'The foundation. “Strategy alone fails without a regulated body.” Use early to signal we’re integrative, not just fitness or mindset.' },
  { term: 'Somatic / embodied', use: 'Body-based. The Costa Rica retreat is where insight becomes “embodied.” Pair with “lived change,” not just “learning.”' },
  { term: 'Trauma-informed', use: 'We honor the wisdom and cost of survival strategies. Signals safety, pacing, and respect — never pushy.' },
  { term: 'Compassionate Inquiry', use: 'Dr. Gabor Maté’s method behind Private Coaching. Gentle, honest questions make the unconscious conscious and choosable.' },
  { term: 'Titration / pacing', use: 'Depth without overwhelm. Reassures people who fear “too much, too fast.”' },
  { term: 'Co-regulation', use: 'Why community + retreats work — we settle our nervous systems together. Sell sisterhood as a feature, not a perk.' },
]

const OBJECTIONS = [
  { q: '“Isn’t this just fitness?”', a: 'No — it’s whole-woman transformation: identity, mindset, emotional health, relationships, and purpose. Fitness is one powerful pillar, not the whole thing.' },
  { q: '“I’ve done programs before and quit.”', a: 'That makes sense. Most programs miss the mix of accountability + community + strategy + nervous-system work. We build it differently so it actually sticks.' },
  { q: '“I can’t afford it right now.”', a: 'Start where you are. Free: Power Hour, Habit Tracker, Quizzes. Low-barrier: Vision Board, Bombshell, Masterclass. The journey ladders up.' },
  { q: '“I don’t have time.”', a: 'That’s exactly why it’s built efficient — Bombshell is 30 min/day for 5 days, Power Hour is one hour a week. It fits a real, full life.' },
]

/* ------------------------------------------------------------------ */
/*  TAB STRUCTURE                                                      */
/* ------------------------------------------------------------------ */

const TAB_META: Record<string, { label: string; icon: any }> = {
  overview: { label: 'Overview', icon: Compass },
  vip: { label: 'VIP Bundle', icon: Crown },
  journey: { label: 'The Coaching Journey', icon: Layers },
  retreats: { label: 'Retreats', icon: MapPin },
  speaking: { label: 'Speaking', icon: Mic },
  leadership: { label: 'Leadership Training', icon: Users },
  business: { label: 'Business Scaling', icon: Briefcase },
  wellness: { label: 'Wellness', icon: HeartPulse },
  nonprofit: { label: 'Non-Profit', icon: Flag },
  corporate: { label: 'Corporate', icon: Building2 },
  tech: { label: 'Tech', icon: Cpu },
  community: { label: 'Community', icon: Share2 },
  quickref: { label: 'Quick Reference', icon: BookOpen },
}

const TAB_GROUPS = [
  { group: 'Start here', tabs: ['overview', 'vip', 'journey'] },
  { group: 'Offerings', tabs: ['retreats', 'speaking', 'leadership', 'business', 'wellness'] },
  { group: 'The four pillars', tabs: ['nonprofit', 'corporate', 'tech', 'community'] },
  { group: 'Toolkit', tabs: ['quickref'] },
]

/* ------------------------------------------------------------------ */
/*  SMALL COMPONENTS                                                   */
/* ------------------------------------------------------------------ */

function LinkChip({ link }: { link: LinkRef }) {
  const cls = 'inline-flex items-center gap-1.5 bg-white border border-[#34c5c5]/40 text-[#0D9488] font-bold text-sm px-4 py-2 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors'
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>{link.label} <ExternalLink className="w-3.5 h-3.5" /></a>
  ) : (
    <a href={link.href} className={cls}>{link.label} <ArrowRight className="w-3.5 h-3.5" /></a>
  )
}

function SectionView({ s }: { s: Section }) {
  return (
    <div>
      <div className="flex items-start gap-3 mb-6">
        <Quote className="w-8 h-8 text-[#34c5c5] flex-shrink-0" />
        <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">{s.tag}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 mb-7">
        <div className="bg-[#F6F8FA] rounded-2xl p-5">
          <p className="text-[#0D9488] font-bold uppercase tracking-wider text-xs mb-2">What it is</p>
          <p className="text-gray-700 leading-relaxed text-[15px]">{s.what}</p>
        </div>
        <div className="bg-[#F6F8FA] rounded-2xl p-5">
          <p className="text-[#0D9488] font-bold uppercase tracking-wider text-xs mb-2">Who it’s for</p>
          <p className="text-gray-700 leading-relaxed text-[15px]">{s.who}</p>
        </div>
      </div>

      {s.id === 'vip' && (
        <div className="mb-7">
          <p className="text-[#0D9488] font-bold uppercase tracking-wider text-xs mb-3">The 3-phase roadmap</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {PHASES.map((p) => (
              <div key={p.n} className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 rounded-full text-white font-black text-sm flex items-center justify-center" style={{ background: p.color }}>{p.n}</span>
                  <span className="font-black text-gray-900">{p.name}</span>
                </div>
                <p className="text-[13px] text-gray-400 line-through">{p.from}</p>
                <p className="text-[13px] text-gray-900 font-semibold">{p.to}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="text-[#e07800] font-bold uppercase tracking-wider text-xs mb-3">How to sell it</p>
      <ul className="space-y-3 mb-7">
        {s.sell.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <ChevronRight className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
            <span className="text-gray-800 leading-relaxed text-[15px]">{b}</span>
          </li>
        ))}
      </ul>

      {s.somatic && (
        <div className="bg-gradient-to-br from-[#0D9488] to-[#0a5d58] rounded-2xl p-5 mb-7 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5" />
            <p className="font-bold uppercase tracking-wider text-xs">Somatic & trauma-informed framing</p>
          </div>
          <p className="text-white/90 leading-relaxed text-[15px]">{s.somatic}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        {s.links.map((l) => <LinkChip key={l.href} link={l} />)}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function EcosystemTraining() {
  const [tab, setTab] = useState('overview')

  const TabBtn = ({ id }: { id: string }) => {
    const m = TAB_META[id]
    const Icon = m.icon
    const active = tab === id
    return (
      <button
        type="button"
        onClick={() => setTab(id)}
        className={`flex items-center gap-2.5 w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${active ? 'bg-[#0D9488] text-white shadow-sm' : 'text-gray-600 hover:bg-[#F6F8FA] hover:text-[#0D9488]'}`}
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        {m.label}
      </button>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-16 pb-10 md:pb-14 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
              <ShieldCheck className="w-3.5 h-3.5" /> Internal · Team Sales Training
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 leading-[1.05]">The Krystalore Ecosystem</h1>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl">
              One coaching core, four amplifiers. This is your kit for understanding the whole stack — and learning to sell each
              piece in <span className="font-semibold text-gray-900">her voice</span>. Tap any tab to drill in.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile tab bar */}
            <div className="lg:hidden -mx-4 px-4 mb-6 overflow-x-auto">
              <div className="flex gap-2 w-max pb-1">
                {Object.keys(TAB_META).map((id) => {
                  const active = tab === id
                  return (
                    <button key={id} type="button" onClick={() => setTab(id)}
                      className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${active ? 'bg-[#0D9488] text-white' : 'bg-[#F6F8FA] text-gray-600'}`}>
                      {TAB_META[id].label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid lg:grid-cols-[260px_1fr] gap-8">
              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-6 space-y-5">
                  {TAB_GROUPS.map((g) => (
                    <div key={g.group}>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3.5 mb-1.5">{g.group}</p>
                      <div className="space-y-1">
                        {g.tabs.map((id) => <TabBtn key={id} id={id} />)}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>

              {/* Content */}
              <div className="min-w-0">
                {tab === 'overview' && <Overview setTab={setTab} />}
                {tab === 'journey' && <Journey />}
                {tab === 'quickref' && <QuickRef />}
                {SECTIONS[tab] && <SectionView s={SECTIONS[tab]} />}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  TAB: OVERVIEW (visual flow)                                        */
/* ------------------------------------------------------------------ */

function Overview({ setTab }: { setTab: (t: string) => void }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">The whole flow, top to bottom</h2>
      <p className="text-gray-600 mb-8">Every woman enters somewhere and climbs. The four pillars amplify the core. Tap anything to drill in.</p>

      {/* Vertical journey */}
      <div className="relative">
        {JOURNEY.map((stage, idx) => (
          <div key={stage.stage} className="relative pb-5">
            <button type="button" onClick={() => setTab(stage.target)}
              className={`w-full text-left rounded-2xl p-5 border transition-shadow hover:shadow-md ${stage.highlight ? 'border-[#0D9488] bg-gradient-to-br from-[#0D9488] to-[#34c5c5] text-white' : 'border-gray-200 bg-white'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold uppercase tracking-wider ${stage.highlight ? 'text-white/90' : 'text-[#0D9488]'}`}>
                  {`Step ${idx + 1} · ${stage.stage}`}
                </span>
                {stage.highlight ? <Crown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5 text-gray-300" />}
              </div>
              <div className="flex flex-wrap gap-2">
                {stage.items.map((it) => (
                  <span key={it} className={`text-sm font-semibold px-3 py-1.5 rounded-full ${stage.highlight ? 'bg-white/15 text-white' : 'bg-[#F6F8FA] text-gray-700'}`}>{it}</span>
                ))}
              </div>
            </button>
            {idx < JOURNEY.length - 1 && (
              <div className="flex justify-center py-1"><div className="w-0.5 h-4 bg-[#34c5c5]/40" /></div>
            )}
          </div>
        ))}
      </div>

      {/* Pillars */}
      <div className="mt-8">
        <p className="text-[#0D9488] font-bold uppercase tracking-[0.18em] text-sm mb-1">The four pillars</p>
        <p className="text-gray-600 mb-4 text-sm">Wrapped around the coaching core — each extends one dimension of it.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p) => {
            const Icon = p.icon
            return (
              <button key={p.id} type="button" onClick={() => setTab(p.id)}
                className="text-left rounded-2xl border border-gray-200 p-5 bg-white hover:shadow-md hover:border-[#34c5c5]/50 transition-all">
                <Icon className="w-7 h-7 text-[#0D9488] mb-3" />
                <p className="font-black text-gray-900 leading-tight">{p.label}</p>
                <p className="text-xs text-[#e07800] font-semibold">{p.sub}</p>
                <p className="text-[13px] text-gray-500 mt-1">{p.role}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* The loop */}
      <div className="mt-8 rounded-2xl bg-[#F4F1EC] p-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-[#e07800]" />
          <p className="font-bold uppercase tracking-wider text-xs text-gray-700">The loop (say it in one breath)</p>
        </div>
        <p className="text-gray-800 leading-relaxed">
          Coaching creates transformation → Community sustains and multiplies it → Tech scales it and cuts the cost of running it →
          Corporate delivers it at institutional scale and generates revenue → that revenue and credibility feed the Non-Profit mission.
          <span className="font-bold text-gray-900"> One ecosystem, four amplifiers, one coaching core.</span>
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  TAB: JOURNEY (the ladder)                                          */
/* ------------------------------------------------------------------ */

function Journey() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">The coaching journey</h2>
      <p className="text-gray-600 mb-7">Sell the journey, not individual offerings. Help her see the next rung — free entry points are real, not bait.</p>
      <div className="space-y-5">
        {LADDER.map((rung, i) => (
          <div key={rung.rung} className="rounded-2xl border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-[#0D9488] text-white font-black text-sm flex items-center justify-center">{i + 1}</span>
              <h3 className="font-black text-gray-900">{rung.rung}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{rung.note}</p>
            <div className="flex flex-wrap gap-2">
              {rung.items.map((it) => (
                <a key={it.href} href={it.href} className="inline-flex items-center gap-1.5 bg-[#F6F8FA] text-gray-700 hover:text-[#0D9488] text-sm font-semibold px-3 py-1.5 rounded-full transition-colors">
                  {it.label} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-start gap-3 bg-[#F4F1EC] rounded-2xl p-5">
        <Target className="w-6 h-6 text-[#e07800] flex-shrink-0" />
        <p className="text-gray-800 text-[15px] leading-relaxed">
          <span className="font-bold">The bridge:</span> someone doing Vision Board → Bombshell → Health Mastery → Rise & Thrive is far more
          engaged than someone buying one thing. Your job is to help her see the path — and that her best chapter is still ahead.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  TAB: QUICK REFERENCE                                               */
/* ------------------------------------------------------------------ */

function QuickRef() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Quick reference</h2>
      <p className="text-gray-600 mb-7">The cheat sheet — her voice, the language, and the comebacks. Skim before any call.</p>

      <p className="text-[#0D9488] font-bold uppercase tracking-wider text-xs mb-3">Signature phrases</p>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {PHRASES.map((p) => (
          <div key={p} className="flex items-start gap-2 bg-[#F6F8FA] rounded-xl p-3.5">
            <Quote className="w-4 h-4 text-[#34c5c5] flex-shrink-0 mt-1" />
            <span className="text-gray-800 text-[15px] font-medium leading-snug">{p}</span>
          </div>
        ))}
      </div>

      <p className="text-[#0D9488] font-bold uppercase tracking-wider text-xs mb-3">Somatic &amp; trauma-informed language</p>
      <p className="text-gray-500 text-sm mb-3">Speak this fluently — it signals we’re integrative, not just fitness or mindset.</p>
      <div className="space-y-3 mb-8">
        {SOMATIC_GLOSSARY.map((g) => (
          <div key={g.term} className="rounded-2xl border border-gray-200 p-4">
            <p className="font-black text-gray-900 mb-1">{g.term}</p>
            <p className="text-gray-600 text-[14px] leading-relaxed">{g.use}</p>
          </div>
        ))}
      </div>

      <p className="text-[#e07800] font-bold uppercase tracking-wider text-xs mb-3">Objection handling</p>
      <div className="space-y-3">
        {OBJECTIONS.map((o) => (
          <div key={o.q} className="rounded-2xl border border-gray-200 p-4">
            <p className="font-bold text-gray-900 mb-1">{o.q}</p>
            <p className="text-gray-600 text-[14px] leading-relaxed">{o.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
