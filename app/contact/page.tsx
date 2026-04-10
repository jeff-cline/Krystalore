'use client'

import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'

const faqs = [
  {
    question: 'What types of coaching does Krystalore offer?',
    answer: 'Krystalore offers executive coaching, leadership development, fitness transformation coaching, and personal development programs tailored for entrepreneurs, veterans, corporate leaders, and military spouses.',
  },
  {
    question: 'How do I schedule a discovery call?',
    answer: 'You can book a complimentary discovery call using the booking calendar on this page, or by visiting our scheduling page directly. Sessions are available virtually and in-person.',
  },
  {
    question: 'What is the typical coaching engagement?',
    answer: 'Coaching engagements typically range from 3 to 12 months depending on your goals. We start with an assessment, create a customized plan, and meet regularly to track progress and adjust strategies.',
  },
  {
    question: 'Do you offer group or corporate programs?',
    answer: 'Yes! We offer leadership training workshops, corporate retreat facilitation, and group coaching programs. Contact us with your organization\'s needs and we\'ll create a tailored proposal.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Krystalore Crews',
  description: 'Connect with Krystalore Crews for executive coaching, leadership training, retreats, and personal development.',
  url: 'https://krystalore.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'Krystalore Crews - Crews Beyond Limits Consulting',
    url: 'https://krystalore.com',
    email: 'krystalore@thecrewscoach.com',
    telephone: '+1-716-390-6727',
    sameAs: [
      'https://www.facebook.com/krystalore/',
      'https://www.instagram.com/thecrewscoach/',
      'https://www.linkedin.com/in/krystalore-crews/',
      'https://www.youtube.com/user/krystalore',
      'https://www.tiktok.com/@thecrewscoach',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'krystalore@thecrewscoach.com',
      telephone: '+1-716-390-6727',
      availableLanguage: 'English',
    },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
}

export default function ContactPage() {
  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Let&apos;s Connect
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to elevate your leadership? Whether you&apos;re exploring executive coaching, planning a corporate retreat, or seeking transformation — I&apos;d love to hear from you.
        </p>
      </section>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-8">
        <Image src="/images/go9/coaching.jpg" alt="Krystalore Crews personal coaching and approachable connection" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Contact Details */}
      <section className="max-w-xl mx-auto pb-16 px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-[#34c5c5] mt-0.5">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:krystalore@thecrewscoach.com" className="text-gray-800 hover:text-[#34c5c5] transition-colors font-medium">
                  krystalore@thecrewscoach.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#34c5c5] mt-0.5">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:+17163906727" className="text-gray-800 hover:text-[#34c5c5] transition-colors font-medium">
                  +1 (716) 390-6727
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#34c5c5] mt-0.5">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </span>
              <div>
                <p className="text-sm text-gray-500">Social</p>
                <div className="flex flex-wrap gap-3 mt-1">
                  <a href="https://www.instagram.com/thecrewscoach/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#34c5c5] transition-colors text-sm">Instagram</a>
                  <a href="https://www.linkedin.com/in/krystalore-crews/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#34c5c5] transition-colors text-sm">LinkedIn</a>
                  <a href="https://www.facebook.com/krystalore/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#34c5c5] transition-colors text-sm">Facebook</a>
                  <a href="https://www.youtube.com/user/krystalore" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#34c5c5] transition-colors text-sm">YouTube</a>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            <div>
              <a
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-6 rounded-lg font-semibold text-white transition-all"
                style={{ backgroundColor: '#34c5c5' }}
              >
                Book a Discovery Call
              </a>
              <p className="text-gray-500 text-xs text-center mt-2">Complimentary 30-minute consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Booking Calendar Section */}
      <section className="pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Schedule Your Discovery Call</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Pick a time that works for you. This complimentary 30-minute call is your first step toward transformational leadership.
          </p>
        </div>
        <iframe
          src="/book"
          title="Book a Call with Krystalore Crews"
          style={{ width: '100%', height: '1350px', border: 'none', display: 'block' }}
          loading="lazy"
        />
      </section>

      {/* FAQ Section */}
      <section className="pb-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-gray-100 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-gray-800 font-semibold">
                {faq.question}
                <span className="ml-2 text-[#34c5c5] group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
