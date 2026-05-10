import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import MailtoCTA from '@/components/MailtoCTA'
import { pillars } from '@/data/emotional-mastery-pillars'

const CHECKOUT_URL = 'https://krystalorecrews.com/healthmasterycheckout'

export default function HealthMasteryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Emotional Mastery Masterclass',
    description:
      'Emotional patterns shape every area of life — relationships, health, confidence, leadership, business, and self-worth. Free book, two free assessments, eight pillar pages, and information about the monthly intensive with Krystalore Crews.',
    brand: { '@type': 'Brand', name: 'Krystalore Crews' },
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">

      <section className="rounded-2xl overflow-hidden mb-8 sm:mb-10">
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/images/health-mastery/hero.webp"
            alt="Krystalore Crews — Health Mastery Group Coaching for entrepreneurs and leaders"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      <section className="mb-12 sm:mb-16 text-center max-w-4xl mx-auto px-4">
        <p className="text-teal font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">Beyond Limits • Health Mastery</p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          You&apos;ve Built Success...<br />
          <span className="text-teal">Now It&apos;s Time to Feel Like It</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Health Mastery is a high-level group coaching experience for entrepreneurs and leaders ready to reclaim energy,
          rebuild consistency, and lead from the inside out.
        </p>

        <div className="bg-teal/5 border border-teal/20 rounded-xl p-4 sm:p-5 max-w-2xl mx-auto mb-7">
          <p className="text-sm sm:text-base text-gray-800 font-medium">
            <strong className="text-teal">VIP Members:</strong> Special pricing available.
            {' '}Email{' '}
            <a href="mailto:krystalore@thecrewscoach.com" className="text-teal hover:underline font-semibold">krystalore@thecrewscoach.com</a>
            {' '}for details.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={CHECKOUT_URL}
            className="bg-teal hover:bg-[#37a6a6] text-white font-bold py-4 px-8 rounded-xl transition-colors text-center text-lg shadow-lg shadow-teal/30 inline-flex items-center justify-center gap-2"
          >
            Join Health Mastery <ArrowRight className="h-5 w-5" />
          </a>
          <Link href="/contact" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-4 px-8 rounded-xl transition-colors text-center">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <section className="mb-12 sm:mb-16 max-w-5xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-black">
          <video
            src="/videos/rewrite-intro.mp4"
            controls
            poster="/images/go9/speaking-event.jpg"
            className="w-full"
            style={{ aspectRatio: '16/9' }}
            playsInline
          />
        </div>
        <p className="text-center text-gray-500 text-sm mt-3 flex items-center justify-center gap-2">
          <Play className="h-4 w-4" />
          Replace with your dedicated Health Mastery program video when ready.
        </p>
      </section>

      {/* IS THIS YOU? */}
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-10">
          <div className="relative w-full rounded-xl overflow-hidden shadow-sm" style={{ aspectRatio: '3/4' }}>
            <Image
              src="/images/emotional-mastery/i-want-my-life-back.jpg"
              alt="Handwritten note: I want my life back!"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-2">Is this you?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              &ldquo;I want my life back.&rdquo;
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              If something in you read that and went <em>yes</em>, you&apos;re not broken and you&apos;re not behind.
              You&apos;ve been carrying a version of life that no longer fits, and you&apos;re ready for the foundation,
              framework, and support to actually shift it.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              A free 1-on-1 Breakthrough Call with Krystalore is where that begins. Not a sales call. A real conversation
              about what&apos;s actually running underneath — and what could be different.
            </p>
            <MailtoCTA
              hook="Book my Free Breakthrough Call"
              topic="Free 1-on-1 Breakthrough Call"
              probingQuestions={[
                'Which area of life feels most stuck right now (relationships, work, health, self-worth, parenting)?',
                'What pattern have you noticed yourself repeating?',
                'What would it mean if this could finally shift?',
              ]}
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* EMOTIONAL MASTERY — the hook */}
      <section className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto px-4">
        <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-3">The Root Beneath Every Pattern</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">Emotional Mastery</h2>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8">
          The same emotional patterns affecting your relationships are also shaping your health, confidence,
          business, visibility, boundaries, self-worth, and ability to receive love and success.
        </p>
        <MailtoCTA
          hook="Get the Free Emotional Mastery Book"
          topic="Free Emotional Mastery Book + Monthly Intensive info"
          probingQuestions={[
            'Where in life does the same pattern keep showing up?',
            'What have you already tried (therapy, coaching, books, modalities)?',
            'What would feel like a real shift for you in the next 90 days?',
          ]}
          variant="primary"
        />
        <p className="text-sm text-gray-500 mt-4">Includes information about the monthly Emotional Mastery Intensive with Krystalore Crews.</p>
      </section>

      {/* YOU MAY LOOK SUCCESSFUL ON THE OUTSIDE */}
      <section className="mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">You may look successful on the outside…</h2>
          <p className="text-gray-600 mb-6">…and still quietly struggle with any of these:</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700">
            {[
              'Overthinking',
              'Burnout',
              'Emotional overwhelm',
              'Fear of visibility',
              'Conflict avoidance',
              'Anxious attachment',
              'People pleasing',
              'Self-sabotage',
              'Disconnection',
              'Difficulty receiving love, support, or success',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-6 leading-relaxed">
            None of these are character flaws. They&apos;re patterns. And patterns can change.
          </p>
        </div>
      </section>

      {/* WHY EMOTIONAL MASTERY MATTERS */}
      <section className="mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 text-center">Why Emotional Mastery Matters</h2>
        <p className="text-gray-700 text-lg mb-6 text-center max-w-2xl mx-auto">
          Your emotions influence almost everything you think is about strategy:
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 mb-8">
          {[
            'How you communicate',
            'How safe you feel being seen',
            'The relationships you choose',
            'The boundaries you set',
            'Your health and stress response',
            'Your confidence',
            'Your creativity',
            'Your leadership',
            'Your parenting',
            'Your ability to trust yourself',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-3">
          Until emotional patterns are addressed, most people keep repeating the same cycles — even with more
          information, more strategy, or more effort.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Emotional Mastery is not about perfection. It&apos;s about awareness, regulation, healing, embodiment, and
          learning how to respond instead of react.
        </p>
      </section>

      {/* THE 8 PILLARS */}
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">The 8 Pillars of Emotional Mastery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            One emotional pattern can quietly shape every area of life. Each pillar is a focused entry point into the same root work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <Link key={p.slug} href={`/emotional-mastery/${p.slug}`} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-teal/40 hover:shadow-md transition-all">
              <p className="font-bold text-gray-900 mb-1">{p.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{p.oneLineTeaser}</p>
              <p className="text-teal text-xs font-semibold uppercase tracking-wider mt-3 inline-flex items-center gap-1">
                Explore <ArrowRight className="h-3 w-3" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* TAKE A DEEPER LOOK — existing related quizzes */}
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Take a Deeper Look</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Free assessments that map closely to the work of Emotional Mastery.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {[
            { title: 'Emotional Intelligence', slug: 'emotional-intelligence' },
            { title: 'Self-Awareness', slug: 'self-awareness' },
            { title: 'Self-Management', slug: 'self-management' },
            { title: 'Social Awareness', slug: 'social-awareness' },
            { title: 'Relationship Management', slug: 'relationship-management' },
            { title: 'Personality', slug: 'personality' },
            { title: 'Anxiety', slug: 'anxiety' },
            { title: 'Depression', slug: 'depression' },
            { title: 'Life Alignment', slug: 'life-alignment' },
          ].map((q) => (
            <Link key={q.slug} href={`/quizzes/${q.slug}`} className="block bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-teal/40 hover:bg-white transition-colors">
              <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-1">Free Assessment</p>
              <p className="font-semibold text-gray-900">{q.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TWO NEW ASSESSMENTS */}
      <section className="mb-12 sm:mb-16 max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Two Assessments Built for This Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Start with whichever one fits where you are right now.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/quizzes/emotional-mastery-self-assessment" className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-teal/40 hover:shadow-md transition-all">
            <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-2">Self-Assessment · ~5 min</p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Emotional Mastery Self-Assessment</h3>
            <p className="text-gray-600 leading-relaxed">A short reflection across all 8 pillars to surface where your patterns are most active right now.</p>
            <p className="text-teal font-semibold mt-4 inline-flex items-center gap-1">Begin the assessment <ArrowRight className="h-4 w-4" /></p>
          </Link>
          <Link href="/quizzes/emotional-mastery-readiness" className="block bg-white border-2 border-teal/30 rounded-2xl p-6 hover:border-teal hover:shadow-md transition-all">
            <p className="text-xs text-teal font-semibold uppercase tracking-wider mb-2">Readiness Scorecard · ~3 min</p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Emotional Mastery Readiness</h3>
            <p className="text-gray-600 leading-relaxed">A short scorecard to see if the monthly Emotional Mastery Intensive with Krystalore fits where you are.</p>
            <p className="text-teal font-semibold mt-4 inline-flex items-center gap-1">Check your readiness <ArrowRight className="h-4 w-4" /></p>
          </Link>
        </div>
      </section>

      {/* MONTHLY INTENSIVE */}
      <section className="mb-12 sm:mb-16 bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-8 sm:p-12 text-white text-center max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-3">The Monthly Emotional Mastery Intensive</h2>
        <p className="text-white/85 text-lg max-w-2xl mx-auto mb-7">
          A guided monthly container with Krystalore Crews for the people ready to actually do the work — not just read about it.
        </p>
        <div className="flex justify-center">
          <MailtoCTA
            hook="Get info on the Monthly Intensive"
            topic="Monthly Emotional Mastery Intensive"
            probingQuestions={[
              'Which pillar feels most active in your life right now?',
              'What have you already tried, and what felt like it was missing?',
              'What would the next 90 days look like if this work landed for you?',
            ]}
            variant="primary"
            className="bg-white text-teal hover:bg-white/90 shadow-none"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Begin the Journey</h2>
        <p className="text-gray-600 mb-8">
          One real conversation can change the trajectory of a pattern that&apos;s been running for years.
        </p>
        <div className="flex justify-center">
          <MailtoCTA
            hook="Book my Free Breakthrough Call"
            topic="Free 1-on-1 Breakthrough Call"
            probingQuestions={[
              'What is the one thing in your life that you most want to shift?',
              "What pattern keeps showing up that you're ready to be done with?",
              'What would your life look like 90 days from now if this finally moved?',
            ]}
            variant="primary"
          />
        </div>
      </section>
      </div>
      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
