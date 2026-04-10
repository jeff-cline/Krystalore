'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { 
  ArrowRight, 
  Users, 
  Building2, 
  Award, 
  TrendingUp, 
  Zap, 
  Target, 
  Heart, 
  Shield, 
  Globe, 
  CheckCircle, 
  DollarSign,
  Rocket,
  Brain,
  Network,
  Sparkles,
  Star,
  HelpCircle,
  MessageSquare,
  BookOpen,
  BarChart3,
  Handshake,
  Crown,
  Megaphone
} from 'lucide-react'

function CTABanner({ variant = 'teal' }: { variant?: 'teal' | 'orange' | 'dark' }) {
  const styles = {
    teal: 'bg-gradient-to-r from-[#0D9488] to-[#14B8A6]',
    orange: 'bg-gradient-to-r from-[#F97316] to-[#FB923C]',
    dark: 'bg-gradient-to-r from-[#37a6a6] to-[#37a6a6]',
  }
  return (
    <section className={`py-10 px-4 ${styles[variant]}`}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="/book"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-800 rounded-full px-8 py-3 font-bold hover:scale-105 transition-transform text-center"
        >
          Schedule a Partnership Call
        </a>
        <Link
          href="/business-smart-start"
          className="border-2 border-white text-white rounded-full px-8 py-3 font-bold hover:bg-white/10 transition-colors text-center"
        >
          Learn About Smart Start
        </Link>
      </div>
    </section>
  )
}

export default function CoBrandedContainerPage() {
  const targetAudiences = [
    {
      icon: Users,
      title: "Community Leaders",
      desc: "You have a following, a tribe, an audience. We bring the technology to monetize and serve them at scale.",
      accent: "#0D9488"
    },
    {
      icon: Building2,
      title: "Family Offices",
      desc: "Portfolio companies need scaling infrastructure. One container serves multiple investments.",
      accent: "#F97316"
    },
    {
      icon: Award,
      title: "Associations & Organizations",
      desc: "Member benefits that actually drive ROI. Not another newsletter -- real tools, real results.",
      accent: "#14B8A6"
    },
    {
      icon: Megaphone,
      title: "Thought Leaders & Influencers",
      desc: "Your content + our tech = a revenue engine that compounds.",
      accent: "#F97316"
    },
    {
      icon: Heart,
      title: "Nonprofit Leaders",
      desc: "Create adjacent revenue streams that fund your core mission.",
      accent: "#0D9488"
    }
  ]

  const techStack = [
    { name: "MoneyWords.org", desc: "Opportunity qualification", color: "#0D9488" },
    { name: "el.ag", desc: "Predictive analytics", color: "#F97316" },
    { name: "jeff-cline.com", desc: "Marketing systems", color: "#14B8A6" },
    { name: "VoiceDrips.com", desc: "Outreach at scale", color: "#F97316" },
    { name: "agents.biz", desc: "AI agent operations", color: "#0D9488" },
    { name: "multifamilyoffice.ai", desc: "Capital access", color: "#14B8A6" },
    { name: "softcircle.ai", desc: "Funding pipeline", color: "#F97316" }
  ]

  const successScenarios = [
    {
      title: "Wellness Community Leader",
      subtitle: "5,000 Followers → Premium Scaling Program",
      desc: "A wellness influencer with a dedicated following wants to offer premium scaling services to their top members without building technology from scratch.",
      results: "Custom wellness ecosystem with AI-powered member journey mapping, revenue share model, and white-labeled technology."
    },
    {
      title: "Family Office Portfolio",
      subtitle: "12 Companies → Shared Infrastructure",
      desc: "A family office managing multiple portfolio companies needs shared scaling infrastructure and capital access coordination.",
      results: "Unified technology platform serving all portfolio companies, shared resources, and coordinated growth strategies."
    },
    {
      title: "Industry Association",
      subtitle: "3,500 Members → AI Tools & Benefits",
      desc: "A professional association wants to offer cutting-edge AI tools and scaling resources as premium member benefits.",
      results: "Custom AI agent deployment, member-exclusive tools, and association-branded technology ecosystem."
    },
    {
      title: "Nonprofit Revenue Stream",
      subtitle: "Mission-Driven → Revenue-Generating Arm",
      desc: "A nonprofit organization wants to create a revenue-generating arm to fund their core mission while serving their community.",
      results: "Separate but connected revenue engine that funds nonprofit activities while providing valuable services to constituents."
    }
  ]

  const faqItems = [
    {
      question: "What does 'co-branded' actually mean?",
      answer: "Co-branded means your brand, your community, your content -- powered by our technology. You remain the face and leader, we provide the infrastructure. Think of it as your technology department without the overhead."
    },
    {
      question: "Who owns the intellectual property created?",
      answer: "You own your community, content, and brand. We own the underlying technology platforms. Any custom development or integrations become shared assets with usage rights for both parties."
    },
    {
      question: "What's the minimum community size needed?",
      answer: "No hard minimum, but the investment makes most sense with at least 1,000+ engaged community members or $1M+ in portfolio assets for family offices. Quality and engagement matter more than raw numbers."
    },
    {
      question: "Can we white-label the technology?",
      answer: "Yes, most customer-facing interfaces can be white-labeled with your brand, colors, and messaging. The backend Smart Start technology powers everything transparently."
    },
    {
      question: "How long does the setup take?",
      answer: "Typically 3-6 months for full deployment. Month 1-2: Planning and custom development. Month 3-4: Integration and testing. Month 5-6: Launch preparation and team training."
    },
    {
      question: "What happens after 12 months?",
      answer: "After the first 12 months (included in setup fee), the ongoing monthly service begins at $32,500/month. This covers platform maintenance, updates, support, and continued development."
    },
    {
      question: "Can multiple leaders share one container?",
      answer: "Absolutely. Family offices often have multiple portfolio companies. Associations have multiple leaders. The container can be structured to serve multiple stakeholders under one umbrella."
    },
    {
      question: "How is revenue split?",
      answer: "Above our baseline 'Redline' pricing on technology licensing, revenue is split 50/50. This incentivizes us to help you succeed while ensuring you benefit financially from the ecosystem's growth."
    },
    {
      question: "What if our community is niche/small?",
      answer: "Niche can be powerful. A smaller, highly engaged audience often converts better than a large, passive one. We'll work with you to structure the investment based on your specific situation."
    },
    {
      question: "Do you work with nonprofits?",
      answer: "Yes, we love mission-driven organizations. Nonprofit containers often focus on creating sustainable revenue streams that fund the core mission while serving the community."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/go9/group-sunset.jpg"
          alt="Better Together - Co-Branded Success"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto py-16 lg:py-24">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                Better <span className="bg-gradient-to-r from-[#0D9488] to-[#F97316] bg-clip-text text-transparent">Together</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-[#14B8A6] mb-6">Co-Branded Success</h2>
              <p className="text-lg text-gray-200 mt-4 mb-8 max-w-2xl">
                Partner with us to build a custom ecosystem that leverages the full power of Smart Start technology combined with your community, your content, and your leadership.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                {['Communities', 'Family Offices', 'Associations', 'Thought Leaders'].map((audience, i) => (
                  <span key={i} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                    {audience}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <a 
                  href="/book" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform duration-300 text-center shadow-lg"
                >
                  Schedule a Partnership Call
                </a>
                <Link 
                  href="/business-smart-start" 
                  className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors duration-300 text-center"
                >
                  Learn About Smart Start
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 hidden lg:block">
              <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/go9/corporate.jpg"
                  alt="Co-branded partnership and community building"
                  fill
                  className="object-cover"
                  priority
                  sizes="400px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Co-Development Opportunity */}
      <section className="bg-[#F4F1EC] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The Co-Development <span className="text-[#0D9488]">Opportunity</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
                This isn't about licensing software or buying a franchise. This is about co-creating something entirely new.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image src="/images/go9/community-hands.jpg" alt="Community collaboration and technology partnership" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Community + Our Technology = Something Entirely New</h3>
                <div className="space-y-4">
                  {[
                    "Leverage OUR technology + YOUR outreach/community to develop a custom program",
                    "Very similar to Smart Start but customized for your specific community",
                    "Custom packages typically starting at $32,500/month plus costs to your customers",
                    "These packages can provide revenue BACK to you to offset startup costs",
                    "Build a system that becomes an ECOSYSTEM"
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#0D9488] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How The Ecosystem Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                How The <span className="text-[#F97316]">Ecosystem</span> Works
              </h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
                The flywheel effect: Each new client you bring in helps the clients who came before.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Network, 
                  title: "Affinity Group Model", 
                  desc: "Long-term scale through community connections and shared resources.",
                  color: "#0D9488"
                },
                { 
                  icon: BarChart3, 
                  title: "Data Sharing Across Ecosystem", 
                  desc: "Collective intelligence that helps everyone make better decisions.",
                  color: "#F97316"
                },
                { 
                  icon: Target, 
                  title: "Tools & Tricks for ALL", 
                  desc: "Every innovation benefits the entire ecosystem, creating compound value.",
                  color: "#14B8A6"
                },
                { 
                  icon: Shield, 
                  title: "Community Partner Discounts", 
                  desc: "Benefactor and community partner advantages that increase over time.",
                  color: "#F97316"
                },
                { 
                  icon: Crown, 
                  title: "Leader-Driven Growth", 
                  desc: "You become the hub that takes relationships to the next level for all involved.",
                  color: "#0D9488"
                },
                { 
                  icon: Handshake, 
                  title: "Mutual Success Model", 
                  desc: "Rising tide lifts all boats -- everyone wins when the ecosystem thrives.",
                  color: "#14B8A6"
                }
              ].map(({ icon: Icon, title, desc, color }, i) => (
                <div key={i} className="bg-[#F4F1EC] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
                    <Icon className="h-8 w-8" style={{ color }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-[#0D9488]/10 to-[#F97316]/10 rounded-2xl p-8 border border-[#0D9488]/20">
                <h3 className="text-xl font-bold text-gray-800 mb-3">The Network Effect</h3>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Every new member, every innovation, every success story strengthens the entire ecosystem. 
                  Your community doesn't just get access to technology -- they become part of a larger network 
                  that's solving similar challenges and sharing solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-gradient-to-br from-[#37a6a6] to-[#0D9488]/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Who This Is <span className="text-[#14B8A6]">For</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {targetAudiences.map(({ icon: Icon, title, desc, accent }, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accent}30` }}>
                    <Icon className="h-8 w-8" style={{ color: accent }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Revenue Model */}
      <section className="bg-[#F4F1EC] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The <span className="text-[#F97316]">Revenue</span> Model
              </h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
                Complete transparency: This creates revenue for both parties, not just us.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image src="/images/go9/group-evening.webp" alt="Revenue sharing and mutual benefit partnership" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                {[
                  { 
                    icon: TrendingUp, 
                    title: "Revenue Created on the Backend", 
                    desc: "YOU also generate revenue from the program -- this isn't just a technology rental."
                  },
                  { 
                    icon: DollarSign, 
                    title: "Helps Offset Your Costs", 
                    desc: "Revenue share helps offset your investment going forward, making this self-funding over time."
                  },
                  { 
                    icon: Handshake, 
                    title: "Rising Tide Lifts All Boats", 
                    desc: "Mutually beneficial for ALL parties -- we only succeed when you succeed."
                  },
                  { 
                    icon: Rocket, 
                    title: "Incentivized Partnership", 
                    desc: "We're incentivized to help you help your community win -- our success is tied to yours."
                  },
                  { 
                    icon: Target, 
                    title: "Your Choice of Use", 
                    desc: "Extra profit, fund a nonprofit, fuel long-term goals -- however you want to use the revenue."
                  }
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-[#F97316]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                      <p className="text-gray-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Investment Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The <span className="text-[#0D9488]">Investment</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                Clear, honest pricing. No hidden fees, no surprises.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* One-Time Setup */}
              <div className="bg-gradient-to-br from-[#0D9488]/5 to-[#14B8A6]/5 rounded-2xl p-8 border-2 border-[#0D9488]/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">One-Time Container Setup</h3>
                  <div className="text-4xl font-black text-[#0D9488] mb-4">$300,000</div>
                  <p className="text-gray-600">Complete ecosystem development</p>
                </div>
                
                <h4 className="font-bold text-gray-800 mb-4">Includes:</h4>
                <div className="space-y-3">
                  {[
                    "Business expenses and travel",
                    "Hardware and technology",
                    "Programming and custom development",
                    "Licensing abilities at Redline pricing",
                    "50/50 split above Redline on all technologies",
                    "Complete win-win container structure"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#0D9488] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ongoing Monthly */}
              <div className="bg-gradient-to-br from-[#F97316]/5 to-[#FB923C]/5 rounded-2xl p-8 border-2 border-[#F97316]/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Ongoing Monthly</h3>
                  <div className="text-4xl font-black text-[#F97316] mb-2">$32,500</div>
                  <p className="text-sm text-gray-500 mb-4">/month (after first 12 months)</p>
                  <p className="text-gray-600">First 12 months included in setup fee</p>
                </div>
                
                <h4 className="font-bold text-gray-800 mb-4">Includes:</h4>
                <div className="space-y-3">
                  {[
                    "Platform maintenance and updates",
                    "Ongoing technical support",
                    "New feature development",
                    "Community ecosystem coordination",
                    "Revenue optimization",
                    "Continued partnership benefits"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#F97316] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-[#F4F1EC] rounded-xl p-6 max-w-3xl mx-auto">
                <h4 className="font-bold text-gray-800 mb-2">Investment Philosophy</h4>
                <p className="text-gray-700 leading-relaxed">
                  This investment creates a mutually beneficial ecosystem where your success directly drives our success. 
                  The revenue sharing model means we're incentivized to help you thrive, not just deliver technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Technology Stack */}
      <section className="bg-[#37a6a6] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The Technology <span className="text-[#14B8A6]">Stack</span>
              </h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Seven proprietary platforms working together to power your ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map(({ name, desc, color }, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors group">
                  <div className="w-3 h-3 rounded-full mx-auto mb-3" style={{ backgroundColor: color }}></div>
                  <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Want to see how it all works together?</p>
              <Link href="/business-smart-start" className="text-[#14B8A6] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Explore the Technology Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You Bring / What We Bring */}
      <section className="bg-[#F4F1EC] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What You Bring / What <span className="text-[#0D9488]">We Bring</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* You Bring */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#F97316] mb-6 text-center">You Bring</h3>
                <div className="space-y-4">
                  {[
                    "Your community, audience, or portfolio",
                    "Your content and thought leadership",
                    "Your relationships and trust",
                    "Your industry expertise",
                    "Your vision and mission"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                        <Star className="h-4 w-4 text-[#F97316]" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* We Bring */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0D9488] mb-6 text-center">We Bring</h3>
                <div className="space-y-4">
                  {[
                    "7 proprietary technology platforms",
                    "Scaling frameworks from 4 exits and 100+ companies",
                    "AI-powered operations and automation",
                    "Marketing systems and demand engines",
                    "Capital access network (400+ family offices)",
                    "Krystalore's leadership, wellness, and coaching expertise",
                    "Jeff's technology and scaling infrastructure"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0D9488]/20 flex items-center justify-center flex-shrink-0">
                        <Zap className="h-4 w-4 text-[#0D9488]" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-[#0D9488]/10 to-[#F97316]/10 rounded-2xl p-8 border border-[#0D9488]/20">
                <h4 className="text-xl font-bold text-gray-800 mb-3">The Perfect Partnership</h4>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  When your community expertise meets our technology infrastructure, 
                  magic happens. This isn't about replacing what you do -- it's about 
                  amplifying it and making it sustainable at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Scenarios */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Success <span className="text-[#F97316]">Scenarios</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                Hypothetical but realistic examples of how different communities could leverage the ecosystem.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {successScenarios.map(({ title, subtitle, desc, results }, i) => (
                <div key={i} className="bg-[#F4F1EC] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
                    <p className="text-[#0D9488] font-semibold text-sm">{subtitle}</p>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{desc}</p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-[#F97316]">
                    <p className="text-sm font-semibold text-gray-800 mb-1">Results:</p>
                    <p className="text-gray-600 text-sm">{results}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F4F1EC] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Frequently Asked <span className="text-[#0D9488]">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqItems.map(({ question, answer }, i) => (
                <div key={i} itemScope itemType="https://schema.org/Question" className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 itemProp="name" className="text-lg font-bold text-gray-800 mb-3 flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-[#0D9488] mt-0.5 flex-shrink-0" />
                    {question}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-700 leading-relaxed pl-8">
                      {answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#37a6a6] via-[#0D9488]/30 to-[#F97316]/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image src="/images/go9/group-sunset-dresses.webp" alt="Your community deserves an ecosystem" fill className="object-cover aspect-[16/9]" />
              <div className="relative z-10 p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Your Community Deserves More Than Another Tool.
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-[#14B8A6] mb-6">
                  They Deserve an Ecosystem.
                </h3>
                <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                  Stop thinking small. Start thinking ecosystem. Your community has been waiting for something like this.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/book" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform text-lg shadow-lg"
                  >
                    Schedule a Partnership Call
                  </a>
                  <Link 
                    href="/business-smart-start" 
                    className="border-2 border-white/60 text-white rounded-full px-8 py-4 font-bold hover:bg-white/10 transition-colors text-lg"
                  >
                    Explore Smart Start First
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">Ready to transform your community into an ecosystem?</p>
              <div className="flex items-center justify-center gap-2 text-[#14B8A6]">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">Let's start the conversation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center py-2">
        <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity">JC</a>
      </div>
    </div>
  )
}