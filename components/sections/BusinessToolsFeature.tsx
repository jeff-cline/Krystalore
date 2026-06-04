import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, CalendarCheck, MessageSquare, Info } from 'lucide-react'

const LEADERSHIP_URL = '/leadership-training'

// The six leadership-training programs, as bullets.
const programs = [
  'Emotional Intelligence Training',
  'Four Lenses Temperament Personality Workshop',
  'Customized Team Building & Goal Setting',
  'Wellness & Self-Care Workshops',
  'Corporate Fitness & Retreats',
  'Compassionate Inquiry Coaching',
]

export default function BusinessToolsFeature() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F8FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Graphic — left */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1">
            <Image
              src="/images/go9/corporate.jpg"
              alt="Krystalore Crews corporate leadership training"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-white font-black text-lg drop-shadow">Corporate Leadership Training</p>
          </div>

          {/* Content — right */}
          <div className="order-2">
            <div className="inline-flex items-center gap-2 bg-[#34c5c5]/15 text-[#0D9488] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
              Grow Further
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
              More Krystalore Business Success Tools &amp; Packages
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ready to go deeper? Krystalore&apos;s corporate leadership training expands the work with customizable
              workshops and coaching that transform your team&apos;s performance and culture.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {programs.map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#34c5c5] flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] font-medium">{p}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a href="https://krystalorecrews.com/book" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition">
                <CalendarCheck className="w-5 h-5" /> Book a Call
              </a>
              <Link href={LEADERSHIP_URL} className="inline-flex items-center justify-center gap-2 border-2 border-[#34c5c5] text-[#0D9488] hover:bg-[#34c5c5] hover:text-white font-bold px-6 py-3.5 rounded-xl transition-colors">
                <MessageSquare className="w-5 h-5" /> Request a Custom Package
              </Link>
              <Link href={LEADERSHIP_URL} className="inline-flex items-center justify-center gap-2 text-[#0D9488] hover:text-[#e07800] font-bold px-4 py-3.5 transition-colors">
                <Info className="w-5 h-5" /> Get More Information <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
