'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Sparkles, Target, Heart, Users, Palette, Star, Eye } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Event', name: 'Vision Board Party by Krystalore Crews', organizer: { '@type': 'Person', name: 'Krystalore Crews' }, url: 'https://krystalore.com/vision-board' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What is a Vision Board Party?', acceptedAnswer: { '@type': 'Answer', text: 'A Vision Board Party is a creative goal-setting workshop where participants design visual boards representing their goals, dreams, and intentions. Led by Krystalore, these events combine visualization, intention-setting, and community connection.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const faqs = [
  { question: 'What is a Vision Board Party?', answer: 'A Vision Board Party is a creative goal-setting workshop where participants design visual boards representing their goals, dreams, and intentions. Led by Krystalore Crews, these events combine visualization techniques, intention-setting exercises, and community connection in a fun, empowering environment.' },
  { question: 'Do vision boards actually work?', answer: 'Yes — when combined with action. Research in psychology shows that visualization activates the same neural pathways as actually performing the visualized action, priming your brain for success. A vision board is a daily visual reminder of your goals that keeps your reticular activating system focused on opportunities aligned with your vision.' },
  { question: 'What do I need to bring?', answer: 'Most supplies are provided: poster board, magazines, scissors, glue, markers, and decorations. You\'re welcome to bring personal photos, printed images, or specific magazines. The most important thing to bring is an open mind and your boldest dreams.' },
  { question: 'Are Vision Board Parties virtual or in-person?', answer: 'Both! In-person parties are hosted at select locations with all supplies provided. Virtual parties include a supply list and digital vision board tools. Both formats include guided intention-setting, creative time, and community sharing.' },
  { question: 'How often are Vision Board Parties held?', answer: 'Vision Board Parties are typically held quarterly with special events around New Year\'s and mid-year. Follow Krystalore on social media and join the Crews Beyond Limits community to get notified about upcoming events.' },
  { question: 'Can I host a private Vision Board Party?', answer: 'Absolutely! Krystalore hosts private Vision Board Parties for corporate teams, women\'s groups, birthday celebrations, and special events. Contact us to plan a custom experience for your group.' },
]

export default function VisionBoardPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/planner.jpg" alt="Vision Board" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Vision Board</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Create a powerful visual roadmap for your goals, dreams, and the life you're building.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">What Happens at a Vision Board Party</h2>
          <div className="space-y-6">
            {[
              { icon: Eye, title: 'Guided Visualization', desc: 'Krystalore leads a powerful visualization exercise to help you clarify your deepest goals and desires.' },
              { icon: Target, title: 'Intention Setting', desc: 'Define specific, meaningful intentions across all areas of life: career, health, relationships, finances, and personal growth.' },
              { icon: Palette, title: 'Creative Building', desc: 'Design your vision board using magazines, photos, quotes, and artistic elements. No artistic skill required — just heart.' },
              { icon: Users, title: 'Community Sharing', desc: 'Share your vision with the group, receive encouragement, and witness the power of collective intention.' },
              { icon: Star, title: 'Action Planning', desc: 'Leave with a concrete action plan — your vision board is the compass, your actions are the steps.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-[#34c5c5]" /></div>
                <div><h3 className="font-bold text-gray-900">{item.title}</h3><p className="text-gray-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Vision Board Party FAQ" />

      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Vision Deserves to Be Seen</h2>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto mb-8">Stop dreaming in silence. Join a Vision Board Party and design the life you were made for.</p>
          <Link href="/go" className="inline-block bg-white text-orange-600 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all">Join the Next Event</Link>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-orange-100 text-sm">
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <Link href="/coworking" className="hover:text-white">Power Hour</Link>
            <Link href="/private-mindset" className="hover:text-white">Mindset Coaching</Link>
            <Link href="/retreat" className="hover:text-white">Retreats</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
