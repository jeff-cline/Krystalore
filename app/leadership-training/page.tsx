'use client'

import { useState } from 'react'
import Script from 'next/script'
import Header from '@/components/layout/header'
import Link from 'next/link'
import Image from 'next/image'
import {
  Brain, Heart, Users, Target, Sparkles, Shield,
  ChevronDown, ChevronUp, Star, Phone, Mail,
  Facebook, Instagram, Linkedin, Youtube, Globe,
  ArrowRight, Calendar, MessageSquare, Dumbbell, Compass
} from 'lucide-react'

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Corporate Leadership Training by Krystalore Crews',
        description: 'Expert-led corporate leadership training workshops designed to enhance emotional intelligence, improve communication, and foster a thriving, compassionate workplace environment.',
        provider: {
          '@type': 'Person',
          name: 'Krystalore Crews',
          jobTitle: 'CEO & Executive Coach',
          worksFor: { '@type': 'Organization', name: 'Crews Beyond Limits' },
        },
        serviceType: 'Corporate Leadership Training',
        areaServed: 'US',
        url: 'https://krystalore.com/leadership-training',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is corporate leadership training?', acceptedAnswer: { '@type': 'Answer', text: 'Corporate leadership training is a structured program designed to develop leadership skills within an organization. It includes workshops, coaching sessions, and experiential learning focused on emotional intelligence, communication, team dynamics, and compassionate leadership. Programs can be delivered live or virtually and customized to meet your organization\'s specific needs.' } },
          { '@type': 'Question', name: 'How long are the leadership training sessions?', acceptedAnswer: { '@type': 'Answer', text: 'Sessions range from 1 hour to 40 hours depending on the program. Emotional intelligence workshops are available in 1-hour, 4-hour, or 8-hour formats. The Four Lenses personality workshop runs 3 or 6 hours. Team building workshops are half-day or full-day. All programs can be customized to fit your schedule.' } },
          { '@type': 'Question', name: 'Can workshops be customized for our team?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Every organization is unique, and we specialize in creating customized training experiences. We work with you to understand your team\'s challenges, goals, and culture, then design a program that addresses your specific needs — from content focus to duration and delivery format.' } },
          { '@type': 'Question', name: 'What is emotional intelligence training?', acceptedAnswer: { '@type': 'Answer', text: 'Emotional intelligence training helps individuals understand and manage their own emotions while recognizing and influencing the emotions of others. Our workshops take participants on a journey of self-discovery to improve relationships, communication, and team effectiveness through practical exercises and real-world applications.' } },
          { '@type': 'Question', name: 'How does the Four Lenses personality workshop work?', acceptedAnswer: { '@type': 'Answer', text: 'The Four Lenses Temperament Personality Workshop is an engaging 3 or 6-hour experience ideal for groups of 20-100 participants. Each person completes a guided personality assessment, then participates in memorable team-building exercises designed to enhance self-awareness, improve conflict management, and strengthen communication within the team.' } },
          { '@type': 'Question', name: 'Are virtual/remote options available?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All of our programs are available in both live in-person and virtual formats. Virtual options include coaching sessions, accountability groups, self-paced online courses, and virtual coworking sessions. We ensure the same level of engagement and impact regardless of delivery format.' } },
          { '@type': 'Question', name: 'What size groups can you accommodate?', acceptedAnswer: { '@type': 'Answer', text: 'We accommodate groups of all sizes — from one-on-one executive coaching to workshops for 100+ participants. The Four Lenses workshop is ideal for groups of 20-100 per session. Corporate retreats can be designed for small leadership teams or larger organizational groups. We scale our programs to fit your needs.' } },
          { '@type': 'Question', name: 'How much does corporate leadership training cost?', acceptedAnswer: { '@type': 'Answer', text: 'Pricing varies based on program type, duration, group size, and customization requirements. We offer flexible packages ranging from single workshops to comprehensive multi-session programs. Contact us for a custom quote tailored to your organization\'s goals and budget.' } },
          { '@type': 'Question', name: 'What industries do you serve?', acceptedAnswer: { '@type': 'Answer', text: 'We serve organizations across all industries including healthcare, technology, finance, education, government, military, nonprofits, and more. Our leadership principles are universal, and we customize content to address industry-specific challenges and culture.' } },
          { '@type': 'Question', name: 'How do I book a leadership training session?', acceptedAnswer: { '@type': 'Answer', text: 'You can book a discovery call directly through our booking calendar or fill out our contact form with details about your organization and goals. We\'ll schedule a consultation to discuss your needs and create a customized training plan. Most programs can be scheduled within 2-4 weeks of initial contact.' } },
        ],
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#34c5c5] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#34c5c5] flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</div>}
    </div>
  )
}

const services = [
  {
    title: 'Emotional Intelligence Training',
    image: 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/66bd527908a2a191b483ca9a.jpeg',
    alt: 'Emotional intelligence training workshop with Krystalore Crews',
    description: 'Unlock the potential of your team with our comprehensive emotional intelligence workshops. Each participant is taken on a journey of self discovery to improve relationships, communication, and team effectiveness. Choose from our 1-hour, 4-hour, or 8-hour options to fit your needs.',
    icon: Heart,
  },
  {
    title: 'Four Lenses Temperament Personality Workshop',
    image: null,
    alt: '',
    description: 'Enhance self-awareness and improve conflict management and communication within your team through our engaging 3 or 6 hour workshop. Ideal for groups 20-100 per session. Workshop includes a guided personality assessment for each participant, paired with memorable team building exercises.',
    icon: Brain,
  },
  {
    title: 'Customized Team Building & Goal Setting',
    image: 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/66bd5336e71424bc50260ee7.jpeg',
    alt: 'Customized team building and goal setting workshop',
    description: 'Strengthen team dynamics and achieve your goals with our half-day or full-day workshops. Let us customize the best experience to meet your dynamic needs!',
    icon: Target,
  },
  {
    title: 'Wellness and Self Care Workshops',
    image: 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/66bd538408a2a15f0783cb03.jpeg',
    alt: 'Corporate wellness and self-care workshop',
    description: 'Promote holistic wellness in your workplace with our weekly sessions or monthly workshops. Options for virtual coaching and accountability for all abilities, ages, and gender.',
    icon: Sparkles,
  },
  {
    title: 'Corporate Fitness & Retreats',
    image: 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/6653570414fedb16058e07ac.jpeg',
    alt: 'Corporate fitness and leadership retreat experience',
    description: 'Develop strong leaders and foster wellness with our leadership retreats for teams or larger groups. We can travel to you or we have retreat locations worldwide for the ultimate getaway.',
    icon: Dumbbell,
  },
  {
    title: 'Compassionate Inquiry Coaching',
    image: 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/66bd542a71b5f183ad80d89d.png',
    alt: 'Compassionate inquiry coaching for leadership development',
    description: 'Explore and address the root causes of personal and professional challenges through a gentle, compassionate approach, focusing on the mind-body connection. Ideal for teams and individuals seeking deeper understanding and healing.',
    icon: Compass,
  },
]

const testimonials = [
  { text: "You can tell how much Krystalore enjoys her work. Her and her team have the great ability of keeping the audience engaged!", author: "Corporate Workshop Participant" },
  { text: "Tons of energy, personality, and professionalism. What a great combo, not very common. It's contagious!", author: "Team Building Attendee" },
  { text: "I love how the instructor gives so many real-life examples and engages with us to bring our perspectives to the material to keep us engaged!", author: "Emotional Intelligence Workshop Participant" },
  { text: "Our team's communication has improved dramatically since the workshop. The tools we learned are practical and easy to implement daily.", author: "HR Director, Healthcare Organization" },
  { text: "The Four Lenses workshop was a game-changer for our department. We finally understand each other's working styles and conflicts have decreased significantly.", author: "Operations Manager, Tech Company" },
  { text: "Krystalore's retreat experience exceeded every expectation. Our leadership team returned energized, aligned, and ready to execute our vision.", author: "VP of People, Fortune 500 Company" },
]

const faqData = [
  { q: 'What is corporate leadership training?', a: 'Corporate leadership training is a structured program designed to develop leadership skills within an organization. It includes workshops, coaching sessions, and experiential learning focused on emotional intelligence, communication, team dynamics, and compassionate leadership. Programs can be delivered live or virtually and customized to meet your organization\'s specific needs.' },
  { q: 'How long are the leadership training sessions?', a: 'Sessions range from 1 hour to 40 hours depending on the program. Emotional intelligence workshops are available in 1-hour, 4-hour, or 8-hour formats. The Four Lenses personality workshop runs 3 or 6 hours. Team building workshops are half-day or full-day. All programs can be customized to fit your schedule.' },
  { q: 'Can workshops be customized for our team?', a: 'Absolutely. Every organization is unique, and we specialize in creating customized training experiences. We work with you to understand your team\'s challenges, goals, and culture, then design a program that addresses your specific needs — from content focus to duration and delivery format.' },
  { q: 'What is emotional intelligence training?', a: 'Emotional intelligence training helps individuals understand and manage their own emotions while recognizing and influencing the emotions of others. Our workshops take participants on a journey of self-discovery to improve relationships, communication, and team effectiveness through practical exercises and real-world applications.' },
  { q: 'How does the Four Lenses personality workshop work?', a: 'The Four Lenses Temperament Personality Workshop is an engaging 3 or 6-hour experience ideal for groups of 20-100 participants. Each person completes a guided personality assessment, then participates in memorable team-building exercises designed to enhance self-awareness, improve conflict management, and strengthen communication.' },
  { q: 'Are virtual/remote options available?', a: 'Yes. All of our programs are available in both live in-person and virtual formats. Virtual options include coaching sessions, accountability groups, self-paced online courses, and virtual coworking sessions. We ensure the same level of engagement and impact regardless of delivery format.' },
  { q: 'What size groups can you accommodate?', a: 'We accommodate groups of all sizes — from one-on-one executive coaching to workshops for 100+ participants. The Four Lenses workshop is ideal for groups of 20-100 per session. Corporate retreats can be designed for small leadership teams or larger organizational groups.' },
  { q: 'How much does corporate leadership training cost?', a: 'Pricing varies based on program type, duration, group size, and customization requirements. We offer flexible packages ranging from single workshops to comprehensive multi-session programs. Contact us for a custom quote tailored to your organization\'s goals and budget.' },
  { q: 'What industries do you serve?', a: 'We serve organizations across all industries including healthcare, technology, finance, education, government, military, nonprofits, and more. Our leadership principles are universal, and we customize content to address industry-specific challenges and culture.' },
  { q: 'How do I book a leadership training session?', a: 'You can book a discovery call directly through our booking calendar or fill out our contact form with details about your organization and goals. We\'ll schedule a consultation to discuss your needs and create a customized training plan. Most programs can be scheduled within 2-4 weeks of initial contact.' },
]

export default function LeadershipTrainingPage() {
  return (
    <>
      <JsonLd />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center">
        <Image
          src="/images/go9/corporate.jpg"
          alt="Krystalore Crews corporate leadership training workshop"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Corporate Leadership Training</h1>
          <p className="text-xl md:text-2xl mb-4 text-[#34c5c5] font-semibold">
            We believe in the transformative power of personal growth, holistic wellness, and compassionate leadership.
          </p>
          <p className="text-lg mb-4 text-gray-200">
            Our expert-led workshops and coaching sessions are designed to enhance emotional intelligence, improve communication, and foster a thriving, compassionate workplace environment.
          </p>
          <p className="text-lg mb-8 text-gray-300">
            With live or virtual options, programs range between 1 hour and 40 hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold px-8 py-4 rounded-2xl transition-colors text-lg"
            >
              <Calendar className="w-5 h-5" /> Book a Call
            </a>
            <a
              href="#contact-form"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 border-2 border-[#34c5c5] text-[#34c5c5] hover:bg-[#34c5c5] hover:text-white font-bold px-8 py-4 rounded-2xl transition-colors text-lg"
            >
              <MessageSquare className="w-5 h-5" /> Request a Custom Package
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Leadership Training Programs</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Customizable workshops and coaching designed to transform your team&apos;s performance and culture.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {s.image ? (
                  <img src={s.image} alt={s.alt} className="w-full h-52 object-cover" />
                ) : (
                  <div className="w-full h-52 bg-gradient-to-br from-[#34c5c5] to-[#37a6a6] flex items-center justify-center">
                    <s.icon className="w-20 h-20 text-white/80" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#34c5c5]/10 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-[#E8A849] text-[#E8A849]" />)}
                </div>
                <p className="text-gray-700 italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold text-[#34c5c5]">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Started Today</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            <a href="/book" target="_blank" rel="noopener noreferrer" className="text-[#E8A849] font-bold hover:underline">Book a call</a> to chat more about your goals! Or fill out the form below and we&apos;ll be in touch within 48 hours!
          </p>
          <iframe
            src="https://link.elite360.io/widget/form/FD6ARdYPYwgstLBLy9Uf"
            style={{ width: '100%', height: '1729px', border: 'none', borderRadius: '4px' }}
            id="inline-FD6ARdYPYwgstLBLy9Uf"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Leadership Consulting Request Form"
            data-height="1729"
            data-layout-iframe-id="inline-FD6ARdYPYwgstLBLy9Uf"
            data-form-id="FD6ARdYPYwgstLBLy9Uf"
            title="Leadership Consulting Request Form"
          />
          <Script src="https://link.elite360.io/js/form_embed.js" strategy="afterInteractive" />
        </div>
      </section>

      {/* Speaker CTA */}
      <section className="relative py-20">
        <img
          src="https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/63eb860debdb0928d6f01252.jpeg"
          alt="Krystalore Crews keynote speaker at leadership conference"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have an Event Coming Up?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Book Krystalore Crews as your next engaging emcee, breakout facilitator, or Keynote Speaker
          </p>
          <a
            href="/speaker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#34c5c5] hover:bg-[#37a6a6] text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors"
          >
            Book Speaking Engagement <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </section>

      {/* Interlinks */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Explore More Programs</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { href: '/entrepreneur-coaching', label: 'Entrepreneur Coaching' },
              { href: '/veteran-coaching', label: 'Veteran Coaching' },
              { href: '/womens-coaching', label: "Women's Coaching" },
              { href: '/courses', label: 'Online Courses' },
              { href: '/quizzes/emotional-intelligence', label: 'EQ Assessment' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="block text-center bg-gray-50 hover:bg-[#34c5c5]/10 border border-gray-200 hover:border-[#34c5c5] rounded-2xl py-4 px-3 transition-colors font-semibold text-gray-700 hover:text-[#34c5c5]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-6">Connect with Krystalore</h3>
          <div className="flex justify-center gap-6">
            {[
              { href: 'https://www.facebook.com/krystalore/', icon: Facebook, label: 'Facebook' },
              { href: 'https://www.instagram.com/thecrewscoach/', icon: Instagram, label: 'Instagram' },
              { href: 'https://www.tiktok.com/@thecrewscoach', icon: Globe, label: 'TikTok' },
              { href: 'https://www.linkedin.com/in/krystalore-crews/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://www.youtube.com/user/krystalore', icon: Youtube, label: 'YouTube' },
              { href: 'https://www.pinterest.com/krystalore/', icon: Globe, label: 'Pinterest' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} className="hover:text-[#34c5c5] transition-colors">
                <s.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
