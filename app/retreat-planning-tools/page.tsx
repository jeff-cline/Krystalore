'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import CharacterShowcase from '@/components/CharacterShowcase'
import FAQSection from '@/components/FAQSection'
import { Download, CheckCircle, FileText, Calendar, DollarSign, Users, MapPin, ClipboardList } from 'lucide-react'

function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: 'Free Retreat Planning Tools', url: 'https://krystalore.com/retreat-planning-tools' },
    { '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'What retreat planning tools do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Essential tools include a master timeline checklist, budget template, venue comparison worksheet, activity planning guide, and post-retreat evaluation survey.' } },
      { '@type': 'Question', name: 'How do I plan a corporate retreat on a budget?', acceptedAnswer: { '@type': 'Answer', text: 'Start with clear objectives, choose off-peak dates, consider domestic destinations, negotiate group rates, and use our free budget template.' } },
    ]}
  ]}
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const tools = [
  { icon: ClipboardList, title: 'Master Retreat Checklist', description: 'Comprehensive 50+ item checklist covering every phase from concept to post-retreat follow-up.' },
  { icon: DollarSign, title: 'Budget Planning Template', description: 'Detailed budget with categories for venue, travel, activities, meals, speakers, and contingency.' },
  { icon: Calendar, title: '12-Week Planning Timeline', description: 'Week-by-week planning guide ensuring nothing falls through the cracks.' },
  { icon: Users, title: 'Team Survey Template', description: 'Pre-retreat survey for team preferences, dietary restrictions, and activity interests.' },
  { icon: MapPin, title: 'Venue Comparison Worksheet', description: 'Side-by-side venue comparison with scoring criteria for location, amenities, and cost.' },
  { icon: FileText, title: 'Post-Retreat Evaluation', description: 'Feedback survey to measure impact, gather testimonials, and identify improvements.' },
]

const faqs = [
  { question: 'What retreat planning tools do I need?', answer: 'Essential retreat planning tools include a master timeline checklist, budget template, venue comparison worksheet, team survey for preferences and dietary needs, activity planning guide, day-of logistics checklist, and a post-retreat evaluation survey. Our free toolkit covers all of these.' },
  { question: 'How do I plan a corporate retreat on a budget?', answer: 'Start with clear objectives so every dollar supports your goals. Choose off-peak dates, consider domestic over international destinations, negotiate group rates, prioritize high-impact activities, and use our free budget template to track every cost category.' },
  { question: 'When should I start planning a corporate retreat?', answer: 'Begin planning 3-6 months ahead for domestic retreats and 6-12 months for international destinations. Our 12-week planning timeline breaks the process into manageable phases.' },
  { question: 'What makes a corporate retreat successful?', answer: 'Successful retreats have clear objectives tied to business outcomes, a mix of structured programming and free time, wellness integration, team building that creates genuine connection, and post-retreat action plans.' },
  { question: 'How do I choose the right retreat venue?', answer: 'Use our venue comparison worksheet to evaluate locations on capacity, amenities, accessibility, cost, distance from airport, food options, meeting spaces, and reviews.' },
  { question: 'Should I hire a professional retreat planner?', answer: 'If you want a truly transformative experience, yes. Professional retreat planners bring vendor relationships, programming expertise, facilitation skills, and logistical experience that save time and dramatically improve outcomes.' },
  { question: 'How do I measure retreat ROI?', answer: 'Measure through pre/post surveys, productivity metrics, retention rates, 360-degree feedback improvements, and qualitative testimonials. Our post-retreat evaluation template includes frameworks for all measurements.' },
  { question: 'Can I use these tools for any type of retreat?', answer: 'Yes. While designed for corporate retreats, these tools work for women\'s wellness retreats, couples retreats, leadership retreats, fitness bootcamp retreats, and team offsites.' },
]

export default function RetreatPlanningToolsPage() {
  return (
    <>
      <JsonLd />
      <Header />

      <section className="relative overflow-hidden min-h-screen flex items-center">
        <Image src="/images/go9/retreat-costa-rica.jpg" alt="Retreat Planning Tools" fill className="object-cover" priority sizes="100vw" />
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Retreat Planning Tools</h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">Everything you need to plan, organize, and execute a transformational retreat experience.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/book" className="bg-[#34c5c5] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-center shadow-lg">Book a Breakthrough Call</a>
            <Link href="#content" className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-center">Explore More</Link>
          </div>
        </div>
      </section>

      <CharacterShowcase />

      {/* About Krystalore */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Built by an Expert Retreat Planner</h2>
              <p className="text-gray-600 leading-relaxed mb-4">After 22 years in the military, a battle with cancer, autoimmune diagnosis, betrayal, multiple reinventions, and more life transitions than most people face in a lifetime, Krystalore learned this: your next mission begins the moment you decide you&apos;re worth fighting for.</p>
              <p className="text-gray-600 leading-relaxed mb-4">As an Emotional Intelligence Coach & Trainer, Somatic Healer, Personal Trainer, Former NFL Cheerleader, 27x Marathoner, International Retreat Leader and Speaker, and Best Selling Author — she turns chaos into clarity.</p>
              <p className="text-gray-600 leading-relaxed font-semibold">When life feels overwhelming, she sees the pathway forward — fast. These tools are born from that experience.</p>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/corporate-retreat/krystal-crews-185-full.jpg" alt="Krystalore Crews retreat planner" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Retreat Planning Toolkit</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Professional-grade planning resources used by retreat planners worldwide.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div key={tool.title} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-5"><tool.icon className="w-7 h-7 text-[#34c5c5]" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Retreat Planning FAQ" />

      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Plan Something Extraordinary?</h2>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto mb-8">Use our free tools to get started, or let Krystalore handle everything.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/corporate-retreat-planning" className="bg-white text-orange-600 font-bold rounded-xl px-10 py-5 text-lg hover:bg-gray-100 transition-all">Full-Service Planning</Link>
            <Link href="/corporate-retreat-locations" className="border-2 border-white text-white font-bold rounded-xl px-10 py-5 text-lg hover:bg-white/10 transition-all">Browse Destinations</Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-orange-100 text-sm">
            <Link href="/retreat" className="hover:text-white">All Retreats</Link>
            <Link href="/revival-retreat" className="hover:text-white">Revival Retreat</Link>
            <Link href="/womens-retreats" className="hover:text-white">Women&apos;s Retreats</Link>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2"><a href="https://jeff-cline.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '6px', opacity: 0.08, color: '#666' }}>JC</a></div>
    </>
  )
}
