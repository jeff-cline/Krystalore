'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Heart, Sparkles, Sun, Shield, Users, Star, CheckCircle } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Event', name: 'Revive & Thrive Retreat', organizer: { '@type': 'Person', name: 'Krystalore Crews' }, url: 'https://krystalore.com/revival-retreat', eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is the Revive & Thrive Retreat?', acceptedAnswer: { '@type': 'Answer', text: 'The Revive & Thrive Retreat is Krystalore Crews\' signature women\'s wellness experience — a full-body, full-spirit reset designed for high-achievers, leaders, and women navigating change who are ready to release what\'s weighing them down and rise into their next chapter.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const faqs = [
  { question: 'What is the Revive & Thrive Retreat?', answer: 'The Revive & Thrive Retreat is Krystalore Crews\' signature women\'s wellness experience — a full-body, full-spirit reset designed for high-achievers, leaders, caregivers, veterans, athletes, and women navigating change who are ready to release what\'s been weighing them down and rise into the next chapter with clarity, confidence, and renewed purpose.' },
  { question: 'Who is this retreat for?', answer: 'This retreat is for the woman who\'s been carrying the world on her shoulders, quietly holding it all together while feeling disconnected from herself. It\'s for the woman who is tired of surviving and finally ready to feel alive again. It\'s for the woman who knows she\'s meant for more but needs a moment of truth, connection, and support to step into it fully.' },
  { question: 'Where are retreats held?', answer: 'Retreats are held at carefully selected destinations including Costa Rica, Roatan, and other locations that provide the perfect environment for transformation, healing, and renewal. Each venue is chosen for its natural beauty, wellness facilities, and ability to create sacred space.' },
  { question: 'How long is the retreat?', answer: 'The retreat is typically 5-7 days, designed to provide enough time for genuine transformation — not just a surface-level reset. The duration allows for deep work, integration, and building connections with fellow participants that last beyond the retreat.' },
  { question: 'What activities are included?', answer: 'Activities include personal development coaching, goal-setting workshops, fitness and wellness sessions, adventure activities (hiking, water sports, zip-lining), spa treatments, theme nights, community building, somatic healing sessions, and plenty of free time for reflection.' },
  { question: 'Is this retreat only for women?', answer: 'The Revive & Thrive Retreat is designed specifically for women. The programming, environment, and community are intentionally crafted to serve the unique challenges and strengths of women. For co-ed and couples retreats, see our other retreat offerings.' },
  { question: 'How much does the retreat cost?', answer: 'Retreat pricing varies by destination and package (shared vs. private room, activity add-ons). Contact us for current pricing, payment plan options, and early bird specials.' },
  { question: 'Can I sponsor a veteran for the retreat?', answer: 'Yes! We offer veteran sponsorship opportunities. The best gift is the referral to change (or save) someone\'s life. Learn about our veteran sponsorship program and how you can help a veteran attend.' },
]

export default function RevivalRetreatPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/retreat-costa-rica.jpg" alt="Revival Retreat" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Revival Retreat</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">A transformational retreat experience designed to revive your spirit, restore your energy, and reignite your purpose.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* The 5 Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">The Revive & Thrive Journey</h2>
          <div className="space-y-6">
            {[
              { phase: 'Decompress & Release', desc: 'Let go of the stress, trauma, and weight you\'ve been carrying. Create space for something new.' },
              { phase: 'Reset Your Mind + Body', desc: 'Wellness, fitness, meditation, and somatic healing to restore your energy and clarity.' },
              { phase: 'Reconnect to Your Identity + Purpose', desc: 'Rediscover who you are beneath the roles, responsibilities, and expectations.' },
              { phase: 'Rebuild Your Confidence + Direction', desc: 'Workshops and coaching that help you see your path forward with fresh eyes.' },
              { phase: 'Rise With a Plan That Lasts', desc: 'Leave with action steps, accountability, and community that ensures your transformation sticks.' },
            ].map((p, i) => (
              <div key={p.phase} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <span className="w-10 h-10 bg-[#34c5c5] text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <div><h3 className="font-bold text-gray-900">{p.phase}</h3><p className="text-gray-600">{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Photos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Retreat Moments</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/revival-retreat/revival-testimonial-1.jpeg', alt: 'Retreat experience' },
              { src: '/images/revival-retreat/revival-testimonial-2.jpeg', alt: 'Women retreat connection' },
              { src: '/images/revival-retreat/revival-testimonial-3.jpeg', alt: 'Retreat transformation' },
              { src: '/images/revival-retreat/revival-testimonial-4.jpeg', alt: 'Retreat community' },
              { src: '/images/revival-retreat/revival-testimonial-5.jpeg', alt: 'Retreat wellness' },
              { src: '/images/revival-retreat/revival-event.jpeg', alt: 'Retreat group' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Retreat Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe src="https://www.youtube.com/embed/hWOiMG10MoQ" title="Revive & Thrive Retreat" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe src="https://www.youtube.com/embed/ACBJwYejbNo" title="Retreat Testimonial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Revival Retreat FAQ" />

      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">You&apos;ve Been Strong for Everyone Else. Now It&apos;s Your Turn.</h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">The Revive & Thrive Retreat is your invitation to start fresh, deepen your self-trust, and rise stronger than you&apos;ve been in years.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Reserve Your Spot</Link>
            <Link href="/referral-program" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">Refer a Friend</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/retreat" className="hover:text-white">All Retreats</Link>
            <Link href="/womens-retreats" className="hover:text-white">Women&apos;s Retreats</Link>
            <Link href="/corporate-retreat-planning" className="hover:text-white">Corporate Retreats</Link>
            <Link href="/retreat-planning-tools" className="hover:text-white">Planning Tools</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
