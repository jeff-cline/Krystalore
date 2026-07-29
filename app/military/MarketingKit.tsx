import { Download } from 'lucide-react'

const KIT = '/military/kit'

type Postcard = { slug: string; name: string; desc: string }
type Flyer = { slug: string; name: string; desc: string }

const POSTCARDS: Postcard[] = [
  { slug: 'v1-classic', name: 'Classic', desc: 'Photo on top, gold call-to-action band.' },
  { slug: 'v2-bold', name: 'Bold Band', desc: 'Gold headline band up top, photo below.' },
  { slug: 'v3-photo', name: 'Photo-Forward', desc: 'Large photo, warm cream caption panel.' },
]
const FLYERS: Flyer[] = [
  { slug: 'v1-classic', name: 'Classic', desc: 'Photo right, two-column challenges, offer + bio.' },
  { slug: 'v2-banner', name: 'Banner', desc: 'Full-width photo banner, deep-teal footer.' },
  { slug: 'v3-editorial', name: 'Editorial', desc: 'Type-forward, warm & clean — no large photo.' },
]

function DownloadBtn({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E8A849] to-[#e07800] text-white font-bold px-5 py-3 rounded-xl shadow hover:shadow-lg transition text-sm"
    >
      <Download className="w-4 h-4" /> {label}
    </a>
  )
}

function FlyerCard({ f }: { f: Flyer }) {
  const pdf = `${KIT}/mission-ready-flyer-8.5x11-${f.slug}.pdf`
  const png = `${KIT}/mission-ready-flyer-8.5x11-${f.slug}.png`
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
      <a href={pdf} target="_blank" rel="noopener noreferrer" className="block bg-[#F6F8FA] p-4 border-b border-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={png} alt={`Mission-Ready Leadership flyer — ${f.name}`} className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
      </a>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-lg font-black text-gray-900">{f.name}</h3>
          <p className="text-sm text-gray-600">{f.desc}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          <DownloadBtn href={pdf} label="Download PDF" />
          <a href={pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-4 py-3 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors text-sm">Open</a>
        </div>
      </div>
    </div>
  )
}

function PostcardCard({ p }: { p: Postcard }) {
  const pdf = `${KIT}/mission-ready-postcard-4x5-${p.slug}.pdf`
  const front = `${KIT}/mission-ready-postcard-4x5-${p.slug}-front.png`
  const back = `${KIT}/mission-ready-postcard-4x5-${p.slug}-back.png`
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
      <a href={pdf} target="_blank" rel="noopener noreferrer" className="block bg-[#F6F8FA] p-4 border-b border-gray-100">
        <div className="grid grid-cols-2 gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={front} alt={`${p.name} postcard front`} className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={back} alt={`${p.name} postcard back`} className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
        </div>
        <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-gray-400 mt-2 px-1">
          <span>Front</span><span>Back</span>
        </div>
      </a>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-lg font-black text-gray-900">{p.name}</h3>
          <p className="text-sm text-gray-600">{p.desc}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          <DownloadBtn href={pdf} label="Download PDF" />
          <a href={pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] font-bold px-4 py-3 rounded-xl hover:bg-[#34c5c5] hover:text-white transition-colors text-sm">Open</a>
        </div>
      </div>
    </div>
  )
}

export default function MarketingKit({ primary = 'flyer' }: { primary?: 'flyer' | 'postcard' }) {
  const flyerSection = (
    <section id="flyers" className="mb-16 scroll-mt-24">
      <div className="flex items-baseline gap-3 mb-5">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900">Flyers</h2>
        <span className="text-sm font-bold text-[#0D9488] uppercase tracking-widest">8.5×11 · one page</span>
      </div>
      <p className="text-gray-600 mb-6 max-w-2xl">Three designs, same message. All print-ready with 0.125″ bleed and crop marks, and a QR to krystalore.com/military.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FLYERS.map((f) => <FlyerCard key={f.slug} f={f} />)}
      </div>
    </section>
  )
  const postcardSection = (
    <section id="postcards" className="mb-16 scroll-mt-24">
      <div className="flex items-baseline gap-3 mb-5">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900">Postcards</h2>
        <span className="text-sm font-bold text-[#0D9488] uppercase tracking-widest">4×5 · front &amp; back</span>
      </div>
      <p className="text-gray-600 mb-6 max-w-2xl">Three double-sided designs. Front sells the workshop; back lists the unit challenges, the hook, and Krystalore&rsquo;s bio. Print-ready with bleed + crop marks.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTCARDS.map((p) => <PostcardCard key={p.slug} p={p} />)}
      </div>
    </section>
  )
  return (
    <>
      {primary === 'postcard' ? <>{postcardSection}{flyerSection}</> : <>{flyerSection}{postcardSection}</>}
    </>
  )
}
