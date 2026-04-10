'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
// CharacterShowcase removed per Krystalore's request — using real photos instead
import FAQSection from '@/components/FAQSection'
import { Mic, Users, Brain, Heart, Award, Star, CheckCircle, Globe, Download, Send } from 'lucide-react'
import { useState } from 'react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Person', name: 'Krystalore Crews', jobTitle: 'Keynote Speaker', url: 'https://krystalore.com/speaker', knowsAbout: ['Leadership', 'Emotional Intelligence', 'Resilience', 'Personal Development', 'Veteran Transition', 'Women\'s Empowerment'] },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'How do I book Krystalore as a keynote speaker?', acceptedAnswer: { '@type': 'Answer', text: 'Contact us through the booking form on this page or schedule a call to discuss your event, audience, topic, and logistics. Krystalore speaks at corporate events, conferences, retreats, military events, and women\'s empowerment gatherings worldwide.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const signatureTalks = [
  { title: 'Redefine What\'s Possible', desc: 'From wheelchair to 27 marathons. A story of resilience, reinvention, and the power of refusing to accept limitations. For organizations navigating change and teams that need to believe in the impossible.' },
  { title: 'Emotional Intelligence in Leadership', desc: 'Why EQ beats IQ in every leadership metric. Practical frameworks for developing self-awareness, empathy, and social skills that transform team dynamics and organizational culture.' },
  { title: 'Beyond Limits: The Mindset of High Performers', desc: 'What separates good from great? The mental frameworks used by elite athletes, military leaders, and top executives to perform under pressure and sustain excellence.' },
  { title: 'The Resilience Blueprint', desc: 'Built from 22 years of military service, cancer survival, and serial reinvention. A practical blueprint for building organizational and personal resilience in uncertain times.' },
  { title: 'Women Who Rise', desc: 'Breaking barriers, building confidence, and creating pathways for women to thrive in leadership. Designed for women\'s conferences, ERGs, and organizations committed to gender equity.' },
  { title: 'Mission After Service', desc: 'For veteran audiences and organizations that employ them. How to leverage military experience, navigate transition, and build a new mission-driven life after service.' },
]

const faqs = [
  { question: 'How do I book Krystalore as a keynote speaker?', answer: 'Contact us through the booking form or schedule a call to discuss your event details — audience, topic, format, and logistics. Krystalore speaks at corporate events, conferences, retreats, military events, women\'s empowerment gatherings, and association meetings worldwide.' },
  { question: 'What topics does Krystalore speak on?', answer: 'Signature topics include leadership and emotional intelligence, personal development and resilience, health and wellness in high-performance environments, veteran transition and military family support, women\'s empowerment and breaking barriers, and mindset strategies for breakthrough performance.' },
  { question: 'What formats are available?', answer: 'Krystalore delivers keynote addresses (30-90 minutes), half-day and full-day workshops, panel moderation, fireside chats, virtual presentations, and multi-day retreat facilitation. Each format is customized to your event objectives.' },
  { question: 'What is Krystalore\'s speaking fee?', answer: 'Speaking fees vary based on event type, format, location, and customization requirements. Contact us for a detailed proposal. Nonprofit and military events may qualify for reduced rates.' },
  { question: 'Does Krystalore travel for speaking engagements?', answer: 'Yes. Krystalore travels domestically and internationally for speaking engagements. Travel logistics are coordinated by our team. Virtual presentations are also available for remote or hybrid events.' },
  { question: 'What makes Krystalore different from other speakers?', answer: 'Krystalore doesn\'t just motivate — she transforms. With 22 years of military leadership, 27 marathons, cancer survival, NFL cheerleading experience, and a thriving coaching business, she brings real-world credibility that resonates deeply with audiences. Her talks are interactive, emotional, and actionable.' },
  { question: 'Can Krystalore customize her talk for our audience?', answer: 'Absolutely. Every talk is customized to your audience, industry, and event objectives. Krystalore conducts a pre-event discovery call to understand your goals and tailor her message accordingly.' },
  { question: 'Does Krystalore offer post-event follow-up?', answer: 'Yes. For organizations that want lasting impact beyond the keynote, Krystalore offers post-event workshops, coaching programs, and follow-up sessions to reinforce key messages and drive behavioral change.' },
]

function SpeakerBookingForm() {
  const [form, setForm] = useState({ firstName: '', email: '', phone: '', organization: '', date: '', budget: '', topic: '', details: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.firstName,
          email: form.email,
          phone: form.phone,
          source: 'krystalore.com/speaker',
          leadType: 'speaker-booking',
          notes: `Organization: ${form.organization}\nDate: ${form.date}\nBudget: ${form.budget}\nTopic: ${form.topic}\nDetails: ${form.details}`,
        }),
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch { setStatus('error') }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12 bg-[#0D9488]/5 rounded-2xl border border-[#0D9488]/20">
        <CheckCircle className="w-16 h-16 text-[#0D9488] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received</h3>
        <p className="text-gray-600">We&apos;ll be in touch within 24 hours to discuss your event.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
        <input type="text" required value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none" placeholder="First Name" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
        <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none" placeholder="Email" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
        <input type="tel" required value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none" placeholder="Phone" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Organization</label>
        <input type="text" value={form.organization} onChange={e => setForm(f => ({ ...f, organization: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none" placeholder="Organization" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Event Date</label>
          <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Budget</label>
          <input type="text" value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none" placeholder="$" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Speaking Topic</label>
        <select value={form.topic} onChange={e => setForm(f => ({ ...f, topic: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none bg-white">
          <option value="">Select a topic...</option>
          <option value="keynote">Keynote Address</option>
          <option value="leadership">Leadership & Emotional Intelligence</option>
          <option value="resilience">Resilience & Mindset</option>
          <option value="wellness">Health & Wellness</option>
          <option value="women">Women&apos;s Empowerment</option>
          <option value="veteran">Veteran Transition</option>
          <option value="workshop">Workshop / Training</option>
          <option value="emcee">Emcee / Host</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Details</label>
        <textarea rows={4} value={form.details} onChange={e => setForm(f => ({ ...f, details: e.target.value }))} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#34c5c5] focus:border-transparent outline-none resize-none" placeholder="Tell us about your event, audience, and what you're looking for..." />
      </div>
      <button type="submit" disabled={status === 'sending'} className="w-full bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-xl px-8 py-4 font-bold hover:scale-[1.02] transition-transform disabled:opacity-50 flex items-center justify-center gap-2">
        <Send className="w-5 h-5" /> {status === 'sending' ? 'Sending...' : 'Submit Booking Request'}
      </button>
    </form>
  )
}

export default function SpeakerPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <section className="relative overflow-hidden min-h-[85vh] flex items-end">
        <Image src="/images/go9/keynote.jpg" alt="Book Krystalore Crews" fill className="object-cover" style={{ objectPosition: '50% 20%' }} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />
        <div className="container mx-auto px-4 relative z-10 pb-12 lg:pb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg max-w-3xl">Book Krystalore Crews</h1>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl drop-shadow-md">Keynote speaker, corporate presenter, leadership trainer, and transformation catalyst. Talks that move audiences to action.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/book" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book to Speak / Emcee</a>
            <Link href="/corporate-wellness" className="bg-[#E8A849] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book Leadership Training</Link>
            <a href="https://www.canva.com/design/DAGHqZ2wOto/fjPTDyrOl5-Wh-tUFYX1yw/view?utm_content=DAGHqZ2wOto&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center inline-flex items-center gap-2"><Download className="w-5 h-5" /> Speaker One Sheet</a>
          </div>
        </div>
      </section>

      {/* Real speaking photos replacing cartoon characters */}
      <section className="py-12 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-[#34c5c5] mb-8">
            Keynote Speaker &bull; Corporate Trainer &bull; Workshop Facilitator &bull; Emcee
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/scraped/speaker-stage.jpg', alt: 'Krystalore speaking on stage' },
              { src: '/images/scraped/krystalore-speaking-2.jpg', alt: 'Krystalore at speaking engagement' },
              { src: '/images/scraped/leadership-workshop.jpg', alt: 'Leadership workshop session' },
              { src: '/images/scraped/krystalore-event.jpg', alt: 'Krystalore at event' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">On Stage</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/scraped/speaker-stage.jpg', alt: 'Krystalore on stage' },
              { src: '/images/scraped/krystalore-keynote.jpg', alt: 'Keynote presentation' },
              { src: '/images/scraped/speaking.jpg', alt: 'Speaking engagement' },
              { src: '/images/krystalore/wny-heroes-speaking.png', alt: 'WNY Heroes speaking event' },
              { src: '/images/scraped/krystalore-event.jpg', alt: 'Event presentation' },
              { src: '/images/scraped/leadership-event.jpg', alt: 'Leadership event' },
              { src: '/images/krystalore/speaker-event-ros.jpg', alt: 'Krystalore at speaking event' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Talks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Signature Talks</h2>
          <div className="space-y-6">
            {signatureTalks.map((talk) => (
              <div key={talk.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{talk.title}</h3>
                <p className="text-gray-600 leading-relaxed">{talk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Reel */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Speaker Reel</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.youtube.com/embed/1nDPdZd21VE" title="Krystalore Crews Speaker Reel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Speaker Credentials</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '22-year Air Force veteran and military spouse',
              'Amazon Best-Selling Author (3 books)',
              'Certified Emotional Intelligence Coach & Trainer',
              'Certified Somatic Healer',
              '27x Marathon finisher, former NFL Cheerleader',
              'Cancer survivor and resilience expert',
              'International Retreat Leader and Speaker',
              'CEO of Crews Beyond Limits Consulting',
            ].map((cred) => (
              <div key={cred} className="flex items-center gap-3 bg-white rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-[#34c5c5] flex-shrink-0" />
                <span className="text-gray-700">{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Request Form */}
      <section id="book" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Request to Book Krystalore</h2>
          <p className="text-center text-gray-600 mb-10">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
          <SpeakerBookingForm />
        </div>
      </section>

      <FAQSection faqs={faqs} title="Speaker Booking FAQ" />

      <section className="py-24 bg-gradient-to-br from-[#34c5c5] to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Audience Deserves More Than Motivation. They Deserve Transformation.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/book" target="_blank" rel="noopener noreferrer" className="bg-white text-[#34c5c5] font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Book to Speak / Emcee</a>
            <Link href="/corporate-wellness" className="bg-[#E8A849] text-white font-bold rounded-xl px-10 py-5 text-lg transition-all hover:scale-105">Book Leadership Training</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-teal-100 text-sm">
            <Link href="/leadership-training" className="hover:text-white">Leadership Training</Link>
            <Link href="/emotional-intelligence-training" className="hover:text-white">EQ Training</Link>
            <Link href="/corporate-retreat-planning" className="hover:text-white">Corporate Retreats</Link>
            <Link href="/workshops" className="hover:text-white">Workshops</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
