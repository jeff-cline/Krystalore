import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { pillars, type PillarSlug } from '@/data/emotional-mastery-pillars'
import MailtoCTA from '@/components/MailtoCTA'

interface PillarMegaPanelProps {
  /** When provided, this pillar is hidden from the grid (used on a pillar page to show the other 7). */
  excludeSlug?: PillarSlug
  title: string
  intro: string
  /** Whether to render the bottom CTA bar (Free Breakthrough Call + Free Book). Default true. */
  showCtaBar?: boolean
}

export default function PillarMegaPanel({
  excludeSlug,
  title,
  intro,
  showCtaBar = true,
}: PillarMegaPanelProps) {
  const list = excludeSlug ? pillars.filter((p) => p.slug !== excludeSlug) : pillars

  return (
    <section className="mb-12 sm:mb-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-[#006767] font-semibold text-sm uppercase tracking-wider mb-2">Emotional Mastery</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">{intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`/emotional-mastery/${p.slug}`}
            className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#006767]/50 hover:shadow-lg transition-all"
          >
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src={p.heroImage}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-bold drop-shadow-md">{p.title}</h3>
              </div>
            </div>

            <div className="flex-1 flex flex-col p-5">
              <p className="text-sm text-gray-700 italic mb-4">{p.oneLineTeaser}</p>

              <ul className="space-y-2 mb-5">
                {p.patternSigns.slice(0, 3).map((sign) => (
                  <li key={sign} className="flex gap-2 items-start text-sm text-gray-800">
                    <Check className="h-4 w-4 text-[#006767] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>

              <span className="mt-auto text-[#006767] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore {p.title}
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {showCtaBar && (
        <div className="mt-10 bg-gradient-to-r from-[#003939] to-[#006767] rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-1">Not sure where to start?</h3>
              <p className="text-white/90">Begin with a free 1-on-1 conversation, or get the free book.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <MailtoCTA
                hook="Book my Free Breakthrough Call"
                topic="Free 1-on-1 Breakthrough Call"
                probingQuestions={[
                  'Which area of life feels most stuck right now?',
                  'What pattern have you noticed yourself repeating?',
                  'What would shift if this finally moved?',
                ]}
                variant="primary"
                className="!bg-white !text-[#006767] hover:!bg-white/95 hover:!text-[#004d4d] !shadow-lg !shadow-black/30"
              />
              <MailtoCTA
                hook="Get the Free Emotional Mastery Book"
                topic="Free Emotional Mastery Book + Monthly Intensive info"
                probingQuestions={[
                  'Where in life does the same pattern keep showing up?',
                  'What have you already tried?',
                  'What would feel like a real shift in the next 90 days?',
                ]}
                variant="primary"
                className="!bg-transparent !border-2 !border-white !text-white hover:!bg-white/10 !shadow-none"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
