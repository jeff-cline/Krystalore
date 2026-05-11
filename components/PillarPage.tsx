import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Check, Sparkles } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import MailtoCTA from '@/components/MailtoCTA'
import PillarMegaPanel from '@/components/PillarMegaPanel'
import { type Pillar } from '@/data/emotional-mastery-pillars'

export default function PillarPage({ data }: { data: Pillar }) {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Link href="/health-mastery-masterclass" className="inline-flex items-center gap-2 text-sm text-[#006767] hover:underline font-semibold mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Emotional Mastery Masterclass
        </Link>

        {/* HERO IMAGE */}
        <section className="mb-10 rounded-2xl overflow-hidden shadow-md">
          <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
            <Image
              src={data.heroImage}
              alt={`${data.title} — Emotional Mastery with Krystalore Crews`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </section>

        {/* TITLE + SUBTITLE */}
        <section className="mb-12">
          <p className="text-[#006767] font-semibold text-sm uppercase tracking-wider mb-2">Emotional Mastery</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">{data.title}</h1>
          <p className="text-gray-700 text-lg max-w-3xl">{data.subtitle}</p>
        </section>

        {/* TWO-COLUMN: PATTERN BENEATH (with portrait image) */}
        <section className="mb-12 grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">The pattern beneath</h2>
            <ul className="space-y-3">
              {data.patternSigns.map((sign) => (
                <li key={sign} className="flex gap-3 items-start text-gray-800">
                  <Check className="h-5 w-5 text-[#006767] flex-shrink-0 mt-0.5" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 relative w-full rounded-2xl overflow-hidden min-h-[300px]" style={{ aspectRatio: '4/5' }}>
            <Image
              src={data.bodyImages[0]}
              alt={`${data.title} — Krystalore Crews`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </section>

        {/* WIDE IMAGE BREAK */}
        <section className="mb-12 rounded-2xl overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
            <Image
              src={data.bodyImages[1]}
              alt={`${data.title} — moments with Krystalore`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </section>

        {/* TWO-COLUMN: WHAT IT SHAPES vs WHAT CHANGES */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">What this pattern shapes</h2>
            <ul className="space-y-2 text-gray-800">
              {data.whatItShapes.map((line) => (
                <li key={line} className="leading-relaxed">— {line}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#006767]/5 border border-[#006767]/20 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 inline-flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#006767]" aria-hidden="true" /> What changes with Emotional Mastery
            </h2>
            <ul className="space-y-2 text-gray-900">
              {data.whatChanges.map((line) => (
                <li key={line} className="leading-relaxed">— {line}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* TWO-IMAGE GALLERY BREAK */}
        <section className="mb-12 grid sm:grid-cols-2 gap-4">
          {[data.bodyImages[2], data.bodyImages[3]].map((src, i) => (
            <div key={src + i} className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src={src}
                alt={`${data.title} — Krystalore Crews`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </section>

        {/* RELATED QUIZZES */}
        {data.relatedQuizzes.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Take a deeper look</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.relatedQuizzes.map((q) => (
                <Link key={q.slug} href={`/quizzes/${q.slug}`} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-[#006767]/50 hover:shadow-md transition-all">
                  <p className="text-xs text-[#006767] font-semibold uppercase tracking-wider mb-1">Free Assessment</p>
                  <p className="font-bold text-gray-900">{q.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA BAND */}
        <section className="mb-12 bg-gradient-to-r from-[#004d4d] to-[#006767] rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to work on this with Krystalore?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Tell us where you are. A 1-on-1 Breakthrough call is free, and there&apos;s no script — just a real conversation about what&apos;s actually running underneath.
          </p>
          <div className="flex justify-center">
            <MailtoCTA
              hook={`Get info on Emotional Mastery for ${data.title}`}
              topic={data.ctaTopic}
              probingQuestions={data.probingQuestions}
              variant="primary"
              className="!bg-white !text-[#006767] hover:!bg-white/90 hover:!text-[#004d4d] !shadow-lg !shadow-black/20"
            />
          </div>
        </section>

      </div>

      {/* CROSS-LINK MEGA PANEL */}
      <PillarMegaPanel
        excludeSlug={data.slug}
        title="Explore the other pillars"
        intro="Emotional Mastery is one root with many entry points. Wherever you land, the work is the same."
        showCtaBar={false}
      />

      <Footer />
    </>
  )
}
