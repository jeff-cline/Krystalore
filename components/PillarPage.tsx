import Link from 'next/link'
import { ArrowLeft, Check, Sparkles } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import MailtoCTA from '@/components/MailtoCTA'
import { pillars, type Pillar } from '@/data/emotional-mastery-pillars'

export default function PillarPage({ data }: { data: Pillar }) {
  const others = pillars.filter((p) => p.slug !== data.slug)
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Link href="/health-mastery-masterclass" className="inline-flex items-center gap-2 text-sm text-teal hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Emotional Mastery Masterclass
        </Link>

        <section className="mb-12">
          <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-2">Emotional Mastery</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">{data.title}</h1>
          <p className="text-gray-600 text-lg max-w-3xl">{data.subtitle}</p>
        </section>

        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">The pattern beneath</h2>
          <ul className="space-y-3">
            {data.patternSigns.map((sign) => (
              <li key={sign} className="flex gap-3 items-start text-gray-700">
                <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">What this pattern shapes</h2>
            <ul className="space-y-2 text-gray-700">
              {data.whatItShapes.map((line) => (
                <li key={line} className="leading-relaxed">— {line}</li>
              ))}
            </ul>
          </div>
          <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 inline-flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-teal" /> What changes with Emotional Mastery
            </h2>
            <ul className="space-y-2 text-gray-800">
              {data.whatChanges.map((line) => (
                <li key={line} className="leading-relaxed">— {line}</li>
              ))}
            </ul>
          </div>
        </section>

        {data.relatedQuizzes.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Take a deeper look</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.relatedQuizzes.map((q) => (
                <Link key={q.slug} href={`/quizzes/${q.slug}`} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-teal/40 hover:shadow-md transition-all">
                  <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-1">Free Assessment</p>
                  <p className="font-bold text-gray-900">{q.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mb-12 bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to work on this with Krystalore?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Tell us where you are. A 1-on-1 Breakthrough call is free, and there&apos;s no script — just a real conversation about what&apos;s actually running underneath.
          </p>
          <div className="flex justify-center">
            <MailtoCTA
              hook={`Get info on Emotional Mastery for ${data.title}`}
              topic={data.ctaTopic}
              probingQuestions={data.probingQuestions}
              variant="primary"
              className="bg-white text-teal hover:bg-white/90 shadow-none"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Explore other pillars</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((p) => (
              <Link key={p.slug} href={`/emotional-mastery/${p.slug}`} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-teal/40 hover:shadow-md transition-all">
                <p className="font-bold text-gray-900 mb-1">{p.title}</p>
                <p className="text-sm text-gray-600">{p.oneLineTeaser}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
