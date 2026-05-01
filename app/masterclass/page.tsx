import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Play, Check, Star, ArrowRight, Zap, Heart, Users, Target, Flame, Shield } from 'lucide-react'

export default function RewritePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Rewrite in Real Time: Mastering the Messy Middle of Your Transformation",
    "description": "A 90-minute live masterclass on staying consistent, confident, and in motion while everything in your life is changing.",
    "startDate": "2026-05-20T17:00:00-05:00",
    "endDate": "2026-05-20T18:30:00-05:00",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": { "@type": "VirtualLocation", "url": "https://krystalore.com/masterclass" },
    "organizer": { "@type": "Person", "name": "Krystalore Crews" },
    "offers": { "@type": "Offer", "price": "297", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://krystalore.com/masterclass" },
    "image": "https://krystalore.com/images/go9/speaking-event.jpg",
    "performer": { "@type": "Person", "name": "Krystalore Crews" },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative rounded-2xl overflow-hidden mb-0">
        <div className="relative h-[500px] sm:h-[600px]">
          <Image src="/images/go9/speaking-event.jpg" alt="Krystalore Crews — Rewrite in Real Time Masterclass" fill className="object-cover object-top" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl px-6 sm:px-12 pb-10 sm:pb-14">
              <p className="text-[#E8A849] font-bold text-sm sm:text-base uppercase tracking-widest mb-3">Live Masterclass &middot; May 20, 2026</p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1]">
                Rewrite in Real Time
              </h1>
              <p className="text-xl sm:text-2xl text-teal font-semibold mb-6">
                Mastering the Messy Middle of Your Transformation
              </p>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl mb-8">
                How to stay consistent, confident, and in motion while everything in your life is changing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://krystalorecrews.com/masterclass-checkout" className="bg-[#E8A849] hover:bg-[#d4963f] text-white font-bold py-4 px-8 rounded-xl transition-colors text-center text-lg shadow-lg shadow-[#E8A849]/30">
                  Join the Masterclass
                </a>
                <a href="#details" className="bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-8 rounded-xl transition-colors text-center backdrop-blur-sm border border-white/20">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE MESSY MIDDLE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            You&apos;re Not Starting Over.<br />
            <span className="text-teal">You&apos;re in the Middle of Becoming.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            There comes a point in your life where you realize&hellip;<br />
            You&apos;ve outgrown who you used to be<br />
            &mdash;but you&apos;re not fully stepped into who you&apos;re becoming yet.
          </p>
          <p className="text-xl font-semibold text-[#E8A849] mb-8">That space? That&apos;s the messy middle.</p>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Your identity is shifting',
              'Your habits are being tested',
              'Your energy isn\'t always consistent',
              'You\'re learning how to lead yourself at a higher level',
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="h-4 w-4 text-teal" />
                </div>
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              This is where most people fall off. Not because they aren&apos;t capable&mdash;but because they don&apos;t have a way to <strong className="text-gray-900">stay anchored</strong> while everything is evolving.
            </p>
            <p className="text-xl font-semibold text-gray-900 mt-4">
              This masterclass is about that moment.<br />And who you choose to become inside of it.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
            <video
              src="/videos/rewrite-intro.mp4"
              controls
              poster="/images/go9/portrait.jpg"
              className="w-full"
              style={{ aspectRatio: '16/9' }}
              playsInline
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-3 italic">
            &ldquo;If you&apos;re in a season of change, this is for you&hellip;&rdquo; &mdash; Krystalore
          </p>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="mb-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#006767] to-teal rounded-2xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Live Masterclass Details</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: Calendar, label: 'May 20, 2026', desc: 'Date' },
                { icon: Clock, label: '5:00–6:30 PM EST', desc: 'Time' },
                { icon: MapPin, label: 'Live on Zoom', desc: 'Location' },
                { icon: Play, label: 'Replay Included', desc: 'Registered Only' },
              ].map((d, i) => (
                <div key={i} className="text-center">
                  <d.icon className="h-7 w-7 mx-auto mb-2 text-white/80" />
                  <p className="font-bold text-sm sm:text-base">{d.label}</p>
                  <p className="text-white/60 text-xs">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STAYING IN IT */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
              <Image src="/images/go9/fitness.jpg" alt="Krystalore Crews fitness training" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                This Is Not About Starting Strong.<br />
                <span className="text-teal">It&apos;s About Staying in It.</span>
              </h2>
              <p className="text-gray-600 mb-4">You already know how to start. You&apos;ve invested in yourself. You&apos;ve done the work. You&apos;ve shown up.</p>
              <p className="text-gray-600 mb-4">But when life gets full&hellip; when things shift&hellip; when the pressure hits&hellip;</p>
              <p className="text-gray-900 font-semibold mb-4">That&apos;s where consistency breaks.</p>
              <p className="text-gray-600 mb-4">And you know the cost of that. Not just in your body&mdash;but in your <strong>confidence</strong>, your <strong>leadership</strong>, your <strong>relationships</strong>, and your <strong>results</strong>.</p>
              <p className="text-xl font-bold text-[#E8A849]">This is about learning how to stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL WALK AWAY WITH */}
      <section className="mb-16 bg-gray-50 rounded-2xl py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">What You&apos;ll Walk Away With</h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">Inside this 90-minute masterclass, you will learn how to:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Flame, text: 'Stay consistent in your health, mindset, and habits during seasons of change' },
              { icon: Shield, text: 'Build real confidence through action, not waiting to feel ready' },
              { icon: Target, text: 'Stop the cycle of starting over and create sustainable momentum' },
              { icon: Zap, text: 'Regulate your energy and focus so you show up powerfully' },
              { icon: Star, text: 'Anchor into a simple daily structure that supports your next level' },
              { icon: Heart, text: 'Lead yourself with personal responsibility and discipline' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-3">
                <item.icon className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-900 font-semibold text-lg">This is leadership. This is personal responsibility.<br />This is how transformation actually happens.</p>
          </div>
        </div>
      </section>

      {/* FREEDOM FORMULA */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-2">The Framework</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">The Freedom Formula</h2>
            <p className="text-gray-600 max-w-xl mx-auto">My signature system for high performers who are ready to live, lead, and perform at a higher level&mdash;without burning out.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { letter: 'C', title: 'Core', desc: 'Get grounded in who you are becoming—not who you used to be', color: 'from-teal to-[#006767]' },
              { letter: 'C', title: 'Confidence', desc: 'Build self-trust through aligned action', color: 'from-[#E8A849] to-orange-600' },
              { letter: 'C', title: 'Consistency', desc: 'Create daily habits that move you forward no matter what', color: 'from-purple-600 to-indigo-700' },
              { letter: 'C', title: 'Community', desc: 'Surround yourself with the right energy and support', color: 'from-red-500 to-red-700' },
              { letter: 'C', title: 'Celebration', desc: 'Lock in your growth and reinforce your identity', color: 'from-teal to-[#006767]' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`bg-gradient-to-br ${item.color} rounded-xl p-5 text-white mb-3`}>
                  <p className="text-3xl font-bold mb-1">{item.letter}</p>
                  <p className="font-semibold text-sm">{item.title}</p>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-900 font-semibold mt-8">This is not theory. This is the work.</p>
        </div>
      </section>

      {/* 34-MINUTE RESET */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-72 md:h-auto min-h-[300px]">
                <Image src="/images/go9/fitness-alt.jpg" alt="34-Minute Reset Method" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-center text-white">
                <p className="text-[#E8A849] font-semibold text-sm uppercase tracking-wider mb-2">The Standard</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">The 34-Minute Reset</h2>
                <p className="text-gray-300 mb-6">You don&apos;t need hours. You need a standard you can keep.</p>
                <div className="space-y-4">
                  {[
                    { time: '2 min', action: 'Get clear — set your intention' },
                    { time: '30 min', action: 'Move your body and shift your state' },
                    { time: '2 min', action: 'Reflect and reinforce your growth' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="bg-teal/20 text-teal font-bold text-sm px-3 py-1.5 rounded-lg whitespace-nowrap">{step.time}</span>
                      <p className="text-gray-300 text-sm">{step.action}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2 text-gray-400 text-sm">
                  <p>This is how you build discipline.</p>
                  <p>This is how you regulate your nervous system.</p>
                  <p className="text-white font-semibold">This is how you lead your life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Who This Is For</h2>
          <div className="space-y-4">
            {[
              'Is in a season of change, growth, or transition',
              'Knows they are meant for more and refuses to go backwards',
              'Is tired of inconsistency and ready for structure',
              'Values their health, energy, and leadership',
              'Is ready to show up for themselves at a higher level',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-5 hover:border-teal/30 hover:shadow-md transition-all">
                <Check className="h-6 w-6 text-teal flex-shrink-0" />
                <p className="text-gray-800 font-medium">This is for the person who <strong>{item.toLowerCase()}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL RECEIVE */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">What You&apos;ll Receive</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Play, title: '90-Minute Live Masterclass', desc: 'With full replay access for registered guests' },
              { icon: Target, title: 'Messy Middle Workbook', desc: 'Identity + action integration workbook' },
              { icon: Clock, title: '34-Minute Reset Tracker', desc: 'Your daily structure for showing up' },
              { icon: ArrowRight, title: 'Post-Event Reset Guide', desc: 'Maintain momentum after the event' },
              { icon: Heart, title: 'Deeper Coaching Access', desc: 'Opportunity to continue with coaching, fitness, and retreats' },
              { icon: Users, title: 'Community Connection', desc: 'Join a room of people doing the work' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <item.icon className="h-6 w-6 text-[#E8A849] mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOU ALREADY KNOW */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <div className="relative h-64 sm:h-80">
              <Image src="/images/go9/group-sunset.jpg" alt="Krystalore community sunset" fill className="object-cover object-top" sizes="100vw" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-xl px-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">You Already Know</h2>
                  <p className="text-white/90 text-lg">You already know what happens when you don&apos;t stay consistent in a season like this. You feel it.</p>
                  <p className="text-[#E8A849] font-semibold text-lg mt-4">And you also know what&apos;s possible when you do.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-900 font-bold">This is your opportunity to choose differently.</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="mb-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl border-2 border-[#E8A849] p-8 sm:p-10 text-center shadow-lg">
            <p className="text-[#E8A849] font-bold text-2xl sm:text-3xl mb-6">I am ready to &ldquo;Rewrite in Real Time&rdquo;</p>
            <p className="text-gray-500 mb-8">One-time payment &middot; Replay included</p>
            <a href="https://krystalorecrews.com/masterclass-checkout" className="block w-full bg-[#E8A849] hover:bg-[#d4963f] text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-lg shadow-[#E8A849]/30 mb-4">
              Join the Masterclass
            </a>
            <div className="bg-gray-50 rounded-xl p-5 text-left mt-6">
              <h3 className="font-bold text-gray-900 text-sm mb-2">Summit & Community Pricing</h3>
              <p className="text-gray-600 text-sm mb-3">If you are attending the Re-Written Summit or are connected to my community, a special pricing option is available.</p>
              <p className="text-gray-600 text-sm">To receive the coupon code:</p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>&bull; Email: <a href="mailto:krystalore@thecrewscoach.com" className="text-teal hover:underline">krystalore@thecrewscoach.com</a></li>
                <li>&bull; Or send a direct message on <a href="https://www.facebook.com/krystalore/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Facebook</a> or <a href="https://www.instagram.com/thecrewscoach/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INVITATION */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">This Is Your Invitation</h2>
          <div className="space-y-3 text-lg text-gray-700">
            <p>You&apos;re not lost.</p>
            <p>You&apos;re not behind.</p>
            <p className="font-semibold text-gray-900">You&apos;re in the middle of something that is asking you to rise.</p>
          </div>
          <p className="text-xl font-bold text-teal mt-6 mb-8">And the version of you you&apos;re becoming?<br />She doesn&apos;t quit here.</p>
          <a href="https://krystalorecrews.com/masterclass-checkout" className="inline-block bg-[#E8A849] hover:bg-[#d4963f] text-white font-bold py-4 px-10 rounded-xl transition-colors text-lg shadow-lg shadow-[#E8A849]/30">
            Join the Masterclass <ArrowRight className="inline h-5 w-5 ml-2" />
          </a>
        </div>
      </section>

      {/* CONTINUED SUPPORT */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">Continued Support</h2>
          <p className="text-gray-600 text-center mb-8">If you&apos;re ready to go deeper, you&apos;ll have the opportunity to continue this work inside:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'Beyond Limits Bootcamp', desc: 'Structured workouts, accountability, and community.', href: '/bootcamp', image: '/images/go9/group.jpg' },
              { title: 'Health Mastery Coaching', desc: 'Weekly coaching, fitness, meditation, and leadership integration.', href: '/health-mastery', image: '/images/health-mastery/hero.webp' },
              { title: 'Wellness Retreats', desc: 'Immersive multi-day experiences for breakthroughs.', href: '/retreat', image: '/images/go9/retreat-costa-rica.jpg' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all">
                <div className="relative h-40 sm:h-48">
                  <Image src={item.image} alt={item.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-300" sizes="33vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT HOST */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="relative h-72 md:h-auto min-h-[350px]">
                <Image src="/images/go9/portrait.jpg" alt="Krystalore Crews" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="md:col-span-2 p-8 sm:p-12 flex flex-col justify-center text-white">
                <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-2">About Your Host</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Krystalore Crews</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Krystalore Crews is a leadership consultant, wellness expert, keynote speaker, and 22-year U.S. Air Force Veteran who helps high performers navigate seasons of change with clarity, confidence, and consistency.
                </p>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  She is the CEO of Crews Beyond Limits and creator of the Freedom Formula, a proven framework that integrates mindset, movement, and leadership.
                </p>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Krystalore has trained over 200,000 military and corporate personnel, led retreats around the world, and built a global community focused on health, resilience, and high performance. Her work is known for activating real change&mdash;not just inspiration&mdash;by combining strategy, somatic practices, and disciplined action.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/about" className="bg-teal hover:bg-[#37a6a6] text-white font-medium py-2 px-5 rounded-lg transition-colors text-sm">Full Bio</Link>
                  <Link href="/podcasts" className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-5 rounded-lg transition-colors text-sm border border-white/20">Podcast</Link>
                  <Link href="/books" className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-5 rounded-lg transition-colors text-sm border border-white/20">Books</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
