import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { FileText, Download, Crown } from 'lucide-react'

const bios = [
  { show: 'Thriving Women Talk', tag: 'Thriving vs. surviving — passion, purpose, and legacy. Retreats, leadership, Her Next Mission.', file: 'Krystalore-Crews-Thriving-Women-Talk.pdf', featured: true },
  { show: 'Bookish Talk', tag: 'Writing your story · featured book: The Road to Resilience. Speaking, retreats, Activate4Impact.', file: 'Krystalore-Crews-Bookish-Talk.pdf' },
  { show: 'Uncomfortable Conversations', tag: 'Divorce, grief & loss → a hook into the Rise & Thrive Bundle. Compassionate Inquiry, NEXT, Freedom Formula.', file: 'Krystalore-Crews-Uncomfortable-Conversations.pdf', vip: true },
  { show: 'AMP Sports Talk', tag: 'Athlete mindset — NFL sideline to wheelchair to 50-mile ultra. Beyond Limits Bootcamp, high-performance coaching.', file: 'Krystalore-Crews-AMP-Sports-Talk.pdf' },
  { show: 'Thrive Health & Wellness', tag: 'Holistic health, “health is wealth,” the 34-minute mindset, and the Freedom Formula.', file: 'Krystalore-Crews-Thrive-Health-and-Wellness.pdf' },
  { show: 'Speaker One Sheet', tag: '5M+ community members across her brand and managed social platforms, and 150+ live events a year. Signature speaking topics, credentials, featured-on logos, and raving reviews.', file: 'Krystalore-Crews-Speaker-and-Emcee.pdf', badge: 'One-Sheet' },
  { show: 'Social Media Influencer & Trainer', tag: '5M+ reach across managed Facebook Pages, live on camera 3× a week, and lead of Doublewide Media. What she trains and what you can book her for.', file: 'Krystalore-Crews-Social-Media-Influencer-and-Trainer.pdf', badge: 'One-Sheet' },
]

export default function PdfBios() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-b from-[#34c5c5]/10 via-[#F6F8FA] to-white pt-12 md:pt-16 pb-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#0D9488] font-bold uppercase tracking-[0.2em] text-xs mb-3">Thriving Women Network · Enlighten · Encourage · Empower</p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 leading-tight">Guest Bios — Krystalore Crews</h1>
            <p className="text-lg text-gray-600 font-light">One-page, show-specific bios with provocative host talking points — plus her Speaker One Sheet and Social Media one-sheets. Click any card to view or download.</p>
          </div>
        </section>

        {/* Flyers & postcards — labelled by file name */}
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Flyers &amp; Postcards</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { file: 'retreat-postcard-5x7-PRINT.pdf', pages: '2 Pages · 5×7 · print' },
                { file: 'retreat-postcard-5x7-VIDEO.pdf', pages: '2 Pages · 5×7 · tappable video links' },
                { file: 'bootcamp-postcard/Krystalore-Bootcamp-Postcard.pdf', pages: '2 Pages · 6×4 · print' },
                { file: 'Krystalore-Books-Flyer-8.5x11.pdf', pages: '1 Page · 8.5×11 · book show stand' },
                { file: 'krystalore-flyer-8.5x11.pdf', pages: '1 Page · 8.5×11' },
                { file: 'her-next-mission-flyer-8.5x11.pdf', pages: '1 Page · 8.5×11' },
              ].map((f) => (
                <a
                  key={f.file}
                  href={`/pdf/${f.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md hover:border-[#41a7c9]/60 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#41a7c9]/15 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#2a7fa0]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-black text-gray-900 text-base leading-tight break-all">{f.file.split('/').pop()}</h3>
                    <p className="text-sm text-gray-500 mt-1">{f.pages}</p>
                    <span className="inline-flex items-center gap-1.5 text-[#2a7fa0] font-bold text-sm mt-2 group-hover:gap-2.5 transition-all">
                      View PDF <Download className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Puerto Rico Retreat — marketing flyers */}
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-black text-gray-900">Puerto Rico Retreat</h2>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#f3498c]/15 text-[#d92d70] px-2 py-0.5 rounded-full">
                Nov 14&ndash;20, 2026
              </span>
            </div>
            <p className="text-gray-600 mb-5">
              Send-ready marketing for the Revive &amp; Thrive retreat at Villa Azure, San Juan.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  file: 'Krystalore-PR-Retreat-Flyer-1page.pdf',
                  title: 'One-Page Flyer',
                  tag: 'Front only — hero, dates, what\u2019s included and a QR code straight to the booking page.',
                  badge: '1 Page',
                },
                {
                  file: 'Krystalore-PR-Retreat-Flyer-2page.pdf',
                  title: 'Two-Page Flyer',
                  tag: 'Adds the full 7-day itinerary and every testimonial video — all links clickable.',
                  badge: '2 Pages',
                },
              ].map((f) => (
                <a
                  key={f.file}
                  href={`/pdf/${f.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md hover:border-[#41a7c9]/60 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#41a7c9]/15 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#2a7fa0]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-black text-gray-900 text-lg leading-tight">{f.title}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#41a7c9]/15 text-[#2a7fa0] px-2 py-0.5 rounded-full">{f.badge}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{f.tag}</p>
                    <span className="inline-flex items-center gap-1.5 text-[#2a7fa0] font-bold text-sm mt-2 group-hover:gap-2.5 transition-all">
                      View PDF <Download className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured: The Secret Weapon one-pager (links to the flyer; guest bios below untouched) */}
        <section className="pb-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="/the-secret-weapon-flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl bg-[#0D0D0D] ring-1 ring-[#C9A84C]/40 hover:ring-[#C9A84C] transition-all"
            >
              <div className="flex items-center gap-4 p-5 sm:p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#177A7A] to-[#0D9488] flex items-center justify-center flex-shrink-0">
                  <Crown className="w-7 h-7 text-[#C9A84C]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-black text-white text-lg leading-tight">The Secret Weapon</h2>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C9A84C]/20 text-[#C9A84C] px-2 py-0.5 rounded-full">One-Pager</span>
                  </div>
                  <p className="text-sm text-white/70 mt-1">Private executive advisory at a glance — the invite-only Secret Weapon program. By application only.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[#34C5C5] font-bold text-sm flex-shrink-0 group-hover:gap-2.5 transition-all">
                  View PDF <Download className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {bios.map((b) => (
              <a
                key={b.file}
                href={`/pdf/${b.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md hover:border-[#34c5c5]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#34c5c5]/15 flex items-center justify-center flex-shrink-0">
                  {b.vip ? <Crown className="w-6 h-6 text-[#0D9488]" /> : <FileText className="w-6 h-6 text-[#0D9488]" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-black text-gray-900 text-lg leading-tight">{b.show}</h2>
                    {b.featured && <span className="text-[10px] font-bold uppercase tracking-wider bg-[#E8A849]/20 text-[#e07800] px-2 py-0.5 rounded-full">Top Show</span>}
                    {b.vip && <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0D9488]/15 text-[#0D9488] px-2 py-0.5 rounded-full">VIP Hook</span>}
                    {b.badge && <span className="text-[10px] font-bold uppercase tracking-wider bg-[#34c5c5]/20 text-[#0D9488] px-2 py-0.5 rounded-full">{b.badge}</span>}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{b.tag}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[#0D9488] font-bold text-sm flex-shrink-0 group-hover:gap-2.5 transition-all">
                  View PDF <Download className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
