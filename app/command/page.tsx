import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import {
  LayoutDashboard, GraduationCap, Calendar, MapPin, Flag, Building2, Cpu, Share2,
  AlertTriangle, ExternalLink, ArrowRight, Wrench,
} from 'lucide-react'

type Item = { label: string; href: string; ext?: boolean; orphan?: boolean }

const tools: Item[] = [
  { label: 'Ecosystem Training Kit', href: '/ecosystem', orphan: true },
  { label: 'Interactive Sales Deck', href: '/deck' },
  { label: 'Media Kit — PDF Bios', href: '/pdf', orphan: true },
  { label: 'Orphan Pages Dashboard', href: '/dash', orphan: true },
  { label: 'VIP Bundle (Rise & Thrive)', href: '/rise-and-thrive' },
]
const coaching: Item[] = [
  { label: 'All Coaching', href: '/services' },
  { label: 'Corporate Wellness', href: '/wellness' },
  { label: 'Leadership Training', href: '/leadership-training' },
  { label: 'FIRE Challenge', href: '/firechallenge' },
  { label: 'Health Mastery', href: '/health-mastery' },
  { label: 'Private Coaching', href: '/privatemindset' },
  { label: 'Million Dollar Body', href: '/million-dollar-body' },
  { label: 'Beyond Limits Bootcamp', href: '/bootcamp' },
  { label: 'Courses', href: '/courses' },
]
const events: Item[] = [
  { label: 'Bombshell Bootcamp', href: '/bombshell-bootcamp' },
  { label: 'Vision Board Party', href: '/vision-board' },
  { label: 'Masterclass', href: '/masterclass' },
  { label: 'Speaking', href: '/keynote-speaker' },
]
const retreats: Item[] = [
  { label: 'All Retreats', href: '/retreat' },
  { label: 'Costa Rica', href: '/cr-retreat' },
  { label: 'Puerto Rico', href: '/pr-retreat' },
  { label: 'Tennessee', href: '/tn-retreat' },
  { label: 'Business', href: '/business-smart-start' },
  { label: 'Couples', href: '/couples-retreats' },
  { label: 'Veterans', href: '/veteran-retreats' },
]
const missions: Item[] = [
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Shop', href: '/shop' },
  { label: 'Podcast', href: '/podcasts' },
]
const orphans: Item[] = [
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Free Gifts', href: '/free-gifts' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Media Kit (PDF)', href: '/pdf' },
  { label: 'Command Center', href: '/command' },
  { label: 'Orphan Dashboard', href: '/dash' },
]
const external: Item[] = [
  { label: 'Her Next Mission — Non-Profit', href: 'https://hernextmission.org', ext: true },
  { label: 'Activate4Impact — Corporate', href: 'https://activate4impact.com', ext: true },
  { label: 'R0cketship — Tech', href: 'https://r0cketship.com', ext: true },
  { label: 'World Changers — Community', href: 'https://www.worldchangers.ai', ext: true },
]

function Row({ it }: { it: Item }) {
  const cls = 'group flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-[#F6F8FA] transition-colors'
  const inner = (
    <>
      <span className="flex items-center gap-2 min-w-0">
        <span className="font-semibold text-gray-800 text-[14px] truncate">{it.label}</span>
        {it.orphan && <span className="text-[9px] font-bold uppercase tracking-wide bg-[#E8A849]/20 text-[#e07800] px-1.5 py-0.5 rounded-full flex-shrink-0">orphan</span>}
      </span>
      <span className="flex items-center gap-1 text-[12px] text-gray-400 flex-shrink-0">
        {it.ext ? new URL(it.href).host.replace('www.', '') : it.href}
        {it.ext ? <ExternalLink className="w-3.5 h-3.5 text-[#0D9488]" /> : <ArrowRight className="w-3.5 h-3.5 text-[#0D9488] opacity-0 group-hover:opacity-100" />}
      </span>
    </>
  )
  return it.ext
    ? <a href={it.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
    : <a href={it.href} className={cls}>{inner}</a>
}

function Card({ icon: Icon, title, items, accent = '#0D9488' }: { icon: any; title: string; items: Item[]; accent?: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5" style={{ color: accent }} />
        <h2 className="font-black text-gray-900">{title}</h2>
      </div>
      <div className="space-y-0.5">{items.map((it) => <Row key={it.href + it.label} it={it} />)}</div>
    </div>
  )
}

export default function CommandCenter() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F6F8FA]">
        <section className="bg-gradient-to-b from-[#34c5c5]/10 to-[#F6F8FA] pt-12 pb-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
            <img src="/favicon-192x192.png" alt="" className="w-12 h-12 rounded-xl bg-white p-1 shadow-sm" />
            <div>
              <p className="text-[#0D9488] font-bold uppercase tracking-[0.2em] text-xs mb-1">Private · Command Center</p>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Everything, in one place</h1>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tools first — the important unlinked stuff */}
            <div className="rounded-2xl border-2 border-[#34c5c5]/40 bg-white p-5 mb-6">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[#0D9488]" />
                  <h2 className="font-black text-gray-900">Tools &amp; Sales Kits</h2>
                </div>
                <a href="/dash" className="inline-flex items-center gap-1.5 text-[#0D9488] font-bold text-sm">Orphan dashboard <ArrowRight className="w-4 h-4" /></a>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0.5">{tools.map((it) => <Row key={it.href} it={it} />)}</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card icon={GraduationCap} title="Coaching" items={coaching} />
              <Card icon={Calendar} title="Events" items={events} />
              <Card icon={MapPin} title="Retreats" items={retreats} />
              <Card icon={LayoutDashboard} title="About &amp; Missions" items={missions} />
              <Card icon={AlertTriangle} title="Orphan / Unlinked Pages" items={orphans} accent="#e07800" />
              <Card icon={Share2} title="External Properties" items={external} accent="#E8A849" />
            </div>

            <p className="text-xs text-gray-400 mt-6 text-center">
              “Orphan” = a page with no inbound links from the site nav. Add your own lists on the{' '}
              <a href="/dash" className="text-[#0D9488] font-semibold">Orphan Dashboard</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
