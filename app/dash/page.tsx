import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { AlertTriangle, Flag, Cpu, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react'
import AddToBucket from '@/components/AddToBucket'

type Item = { label: string; href: string; ext?: boolean }

// krystalore.com — pages with NO inbound links found in the site code (review on 2026-06-15).
// (/deck is reachable via the Missions nav, so it is not an orphan.)
const krystalore: Item[] = [
  { label: 'Ecosystem Training Kit', href: '/ecosystem' },
  { label: 'Free Gifts', href: '/free-gifts' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Media Kit — PDF Bios', href: '/pdf' },
  { label: 'Command Center', href: '/command' },
  { label: 'Orphan Pages Dashboard', href: '/dash' },
]

// hernextmission.org — full page list (header + footer + submenus).
const hnm: Item[] = [
  { label: 'About', href: 'https://hernextmission.org/about.html', ext: true },
  { label: 'Programs', href: 'https://hernextmission.org/programs.html', ext: true },
  { label: 'Coaching', href: 'https://hernextmission.org/coaching.html', ext: true },
  { label: '— Military Career Coaching', href: 'https://hernextmission.org/coaching/military-career-coaching.html', ext: true },
  { label: '— Purpose Workshops', href: 'https://hernextmission.org/coaching/purpose-workshops.html', ext: true },
  { label: '— Veteran Mentor Programs', href: 'https://hernextmission.org/coaching/veteran-mentor-programs.html', ext: true },
  { label: '— Military Transition Specialist', href: 'https://hernextmission.org/coaching/military-transition-specialist.html', ext: true },
  { label: 'Resources / Transition Services', href: 'https://hernextmission.org/transition-services.html', ext: true },
  { label: '— Military Divorce Attorney', href: 'https://hernextmission.org/transition-services/military-divorce-attorney.html', ext: true },
  { label: '— SCRA Consultant', href: 'https://hernextmission.org/transition-services/scra-consultant.html', ext: true },
  { label: '— Veteran Identity Disorder', href: 'https://hernextmission.org/resources/veteran-identity-disorder.html', ext: true },
  { label: '— PTSD Information', href: 'https://hernextmission.org/resources/ptsd.html', ext: true },
  { label: 'Podcast', href: 'https://hernextmission.org/podcast.html', ext: true },
  { label: 'Events', href: 'https://hernextmission.org/events.html', ext: true },
  { label: 'Sponsors', href: 'https://hernextmission.org/sponsors.html', ext: true },
  { label: 'Sponsor Prospectus', href: 'https://hernextmission.org/sponsorship', ext: true },
  { label: 'Give', href: 'https://hernextmission.org/give.html', ext: true },
  { label: 'Contact', href: 'https://hernextmission.org/contact.html', ext: true },
  { label: 'Book a Call', href: 'https://hernextmission.org/book-a-call.html', ext: true },
  { label: 'Blog', href: 'https://blog.hernextmission.org', ext: true },
]

// r0cketship.com — page list (header + footer + niche subpages).
const r0cket: Item[] = [
  { label: 'Corporate Structure', href: 'https://r0cketship.com/corporate-structure', ext: true },
  { label: 'How It Works', href: 'https://r0cketship.com/how-it-works', ext: true },
  { label: 'Pricing', href: 'https://r0cketship.com/pricing', ext: true },
  { label: 'Integrations', href: 'https://r0cketship.com/integrations', ext: true },
  { label: 'Common Niches', href: 'https://r0cketship.com/niches', ext: true },
  { label: 'Crew Perks', href: 'https://r0cketship.com/crewperk', ext: true },
  { label: 'Investor Portal', href: 'https://r0cketship.com/investor-portal', ext: true },
  { label: 'Advertise With Us', href: 'https://r0cketship.com/advertise', ext: true },
  { label: 'Joint Venture (E-Partnership)', href: 'https://r0cketship.com/e-partnership', ext: true },
  { label: 'Sign Up — $50 credit', href: 'https://r0cketship.com/signup', ext: true },
  { label: '— Niche: Home Services', href: 'https://r0cketship.com/corporate-structure/home-services', ext: true },
  { label: '— Niche: Insurance', href: 'https://r0cketship.com/corporate-structure/insurance', ext: true },
  { label: '— Niche: Finance', href: 'https://r0cketship.com/corporate-structure/finance', ext: true },
  { label: '— Niche: Legal', href: 'https://r0cketship.com/corporate-structure/legal', ext: true },
  { label: '— Niche: AI', href: 'https://r0cketship.com/corporate-structure/ai', ext: true },
]

function Row({ it }: { it: Item }) {
  const cls = 'group flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-[#F6F8FA] transition-colors'
  const inner = (
    <>
      <span className="font-semibold text-gray-800 text-[14px] truncate">{it.label}</span>
      <span className="flex items-center gap-1 text-[12px] text-gray-400 flex-shrink-0">
        {it.ext ? new URL(it.href).pathname || '/' : it.href}
        {it.ext ? <ExternalLink className="w-3.5 h-3.5 text-[#0D9488]" /> : <ArrowRight className="w-3.5 h-3.5 text-[#0D9488] opacity-0 group-hover:opacity-100" />}
      </span>
    </>
  )
  return (
    <div className="flex items-center gap-2">
      {it.ext
        ? <a href={it.href} target="_blank" rel="noopener noreferrer" className={cls + ' flex-1 min-w-0'}>{inner}</a>
        : <a href={it.href} className={cls + ' flex-1 min-w-0'}>{inner}</a>}
      <AddToBucket label={it.label} href={it.href} ext={it.ext} />
    </div>
  )
}

function Card({ icon: Icon, title, sub, items, accent }: { icon: any; title: string; sub: string; items: Item[]; accent: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-5 h-5" style={{ color: accent }} />
        <h2 className="font-black text-gray-900">{title}</h2>
        <span className="text-xs text-gray-400">({items.length})</span>
      </div>
      <p className="text-xs text-gray-500 mb-3">{sub}</p>
      <div className="space-y-0.5">{items.map((it) => <Row key={it.href} it={it} />)}</div>
    </div>
  )
}

export default function OrphanDashboard() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F6F8FA]">
        <section className="bg-gradient-to-b from-[#E8A849]/10 to-[#F6F8FA] pt-12 pb-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <a href="/command" className="inline-flex items-center gap-1.5 text-[#0D9488] font-semibold text-sm mb-4"><ArrowLeft className="w-4 h-4" /> Command Center</a>
            <p className="text-[#e07800] font-bold uppercase tracking-[0.2em] text-xs mb-1">Review · Orphan Pages</p>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Pages with no inbound links</h1>
            <p className="text-gray-600 mt-2 max-w-2xl">A starting list across your properties — add your own as you find them.</p>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            <Card icon={AlertTriangle} title="krystalore.com" sub="No inbound links found in the site code." items={krystalore} accent="#e07800" />
            <Card icon={Flag} title="hernextmission.org" sub="Full page list (header + footer + submenus)." items={hnm} accent="#0D9488" />
            <Card icon={Cpu} title="r0cketship.com" sub="Page list (header + footer + niche pages)." items={r0cket} accent="#34c5c5" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
