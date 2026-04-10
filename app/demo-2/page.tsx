'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube, LogIn, UserPlus, Settings, ChevronRight, Play, BookOpen, Mic, Users, Dumbbell, Heart, Star, Crown, Brain, Calendar, Award, Shield, Sparkles, Target, Mountain, Phone, Mail } from 'lucide-react'

export default function Demo2Page() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/scraped/hero-bg.png"
            alt="Diamond crystal facet texture background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-teal-600/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Krystalore Crews
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-6 text-teal-300">
            Crews Beyond Limits
          </p>
          <p className="text-lg tracking-wide mb-6 text-white/80">
            Executive Coaching • Wellness • Leadership • Retreats • Speaking • Fitness
          </p>
          <p className="text-xl italic mb-12 max-w-3xl mx-auto leading-relaxed">
            "Reclaim your confidence and feel sexy in the mirror again! Don't wait any longer, join us now and start seeing results!"
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              href="/book"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors"
            >
              Book a Call
            </Link>
            <Link 
              href="/go"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full transition-colors"
            >
              Explore Programs
            </Link>
          </div>
          <div className="max-w-md mx-auto">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/scraped/krystalore-bio-fitness.jpg"
                alt="Krystalore Crews branded card - Coach, Consultant, Trainer, Speaker, Author"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. HI, I'M KRYSTALORE CREWS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/scraped/the-movement.png"
                alt="Krystalore Crews full body athletic portrait in black outfit with white sneakers"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Hi, I'm Krystalore Crews.</h2>
              <p className="text-lg mb-4 text-gray-700">
                I was once just like you; stressed, burnt out and overwhelmed. I pushed myself so hard that I reached my breaking point. I ignored what my body was telling me, and found myself in a wheelchair at the age of 23.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Through perseverance, determination, a whole lot of faith, and nutrition, I slowly began walking again.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Then 3 years ago, I found myself in a late middle of an unexpected divorce, starting over... that's when personal training grabbed me in changing my life.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                I am here to give a friend and help you achieve the life we all dream of.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                With accountability, coaching, and a community, you'll finally start seeing the results you deserve. Feel your best again!
              </p>
              <Link 
                href="/about"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors inline-flex items-center gap-2"
              >
                Read My Story <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE UMBRELLA — EVERYTHING UNDER ONE ROOF */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Everything You Need. One Destination.</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From executive boardrooms to tropical retreats, from podcast studios to fitness boot camps — we bring it all together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Executive Coaching */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/images/scraped/krystalore-event.jpg"
                  alt="Krystalore Crews at desk with book and coffee - executive coaching session"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Executive Coaching</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Tailored strategies for C-suite leaders and entrepreneurs. Leadership development, strategic thinking, work-life balance.
                </p>
                <Link 
                  href="/about"
                  className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Leadership Training */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/images/scraped/speaker-stage.jpg"
                  alt="Krystalore Crews on stage with Level Up screen"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Leadership Training</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Interactive workshops that elevate teams. Emotional Intelligence, Temperament Training, Goal Setting.
                </p>
                <Link 
                  href="/leadership-training"
                  className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Wellness Retreats */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/images/retreat/retreat-01.jpg"
                  alt="Infinity pool with ocean views at retreat property"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mountain className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Wellness Retreats</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  7-day luxury immersive retreats. Coaching, fitness, adventure, private chef, sisterhood.
                </p>
                <Link 
                  href="/retreat"
                  className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Fitness & Boot Camp */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/images/scraped/section-bg-3-opt.jpg"
                  alt="Krystalore Crews in athletic wear, runner starting position"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Fitness & Boot Camp</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Beyond Limits Boot Camp. Mon/Wed/Fri. HIIT, Kickboxing, Yoga. The 34-Minute Mindset.
                </p>
                <Link 
                  href="/fitness"
                  className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Keynote Speaking */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/images/scraped/speaking.jpg"
                  alt="Krystalore Crews speaking at WNY Heroes event"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mic className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Keynote Speaking</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  High-energy presentations on resilience, personal development, and leadership.
                </p>
                <Link 
                  href="/keynote-speaker"
                  className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Books & Podcast */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/images/scraped/book-krystalore.jpg"
                  alt="Krystalore Crews holding book with colorful mural background"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Books & Podcast</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Author, podcast host. Deeper insights into personal development and wellness.
                </p>
                <Link 
                  href="/books"
                  className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Private Client Experience */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/images/scraped/krystalore-coaching-headshot.jpg"
                  alt="Krystalore Crews speaking at live event with name tag"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Private Client Experience</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  $3,000/mo. Experiential, hands-on, in-real-life private coaching + S.M.A.R.T. tech.
                </p>
                <Link 
                  href="/apply"
                  className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* S.M.A.R.T. Technology */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image 
                  src="/images/scraped/leadership-training-opt.jpg"
                  alt="Tropical retreat collage showing technology enablement"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">S.M.A.R.T. Technology</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  $50,000+ in technology enablement. 7 proprietary tools. Leave with a business, not just a plan.
                </p>
                <Link 
                  href="/services"
                  className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-1"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP TRAINING */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/scraped/speaker-stage.jpg"
                alt="Krystalore Crews speaking on stage with Level Up screen"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Leadership Training</h2>
              <p className="text-lg mb-4 text-gray-700">
                I offer dynamic leadership training designed to elevate your team's potential
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Through interactive workshops, I provide leaders with the skills to inspire, motivate, and drive excellence within their organizations.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Let's work together to foster a culture of leadership that transcends limits and makes them more engaged and empowered.
              </p>
              <Link 
                href="/leadership-training"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors inline-flex items-center gap-2"
              >
                Explore Leadership Training <Users className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PUBLIC SPEAKING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Public Speaking</h2>
              <p className="text-lg mb-4 text-gray-700">
                As an experienced public speaker, I bring energy and passion to every stage.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                My talks on personal development, resilience, and empowerment leave a lasting impact.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Whether it's a corporate event, retreat, or conference, I deliver presentations that inspire and motivate audiences to achieve greatness.
              </p>
              <Link 
                href="/keynote-speaker"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors inline-flex items-center gap-2"
              >
                Explore My Public Speaking Events <Mic className="w-5 h-5" />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/scraped/speaking.jpg"
                  alt="Krystalore Crews speaking at WNY Heroes event in white blazer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/krystalore/wny-heroes-speaking.png"
                  alt="Krystalore Crews speaking with headset microphone"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXECUTIVE COACHING */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/scraped/krystalore-event.jpg"
                alt="Krystalore Crews at desk with book and coffee - executive coaching session"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Executive Coaching</h2>
              <p className="text-lg mb-4 text-gray-700">
                My executive coaching services are tailored to meet the unique needs of each executive. I focus on leadership development, strategic thinking, and work-life balance, providing the guidance and accountability necessary for professional excellence.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Through personalized coaching sessions, I help executives identify their strengths, overcome challenges, and develop strategies for sustainable growth.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Let's unlock your potential and drive performance together.
              </p>
              <Link 
                href="/book"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors inline-flex items-center gap-2"
              >
                Book Your Coaching Session Now <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOLISTIC WELLNESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Holistic Wellness</h2>
              <p className="text-lg mb-4 text-gray-700">
                I embrace a holistic approach to wellness.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                My programs, centered around the 34-minute mindset, nurture the mind, body, and spirit with fitness classes, nutritional guidance, mindfulness practices, and stress management.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Leveraging trusted tools and resources, I provide the support needed to achieve a balanced and vibrant life.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Join our community, prioritize your well-being, and let's thrive together!
              </p>
              <Link 
                href="/fitness"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors inline-flex items-center gap-2"
              >
                Explore Holistic Programs <Heart className="w-5 h-5" />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/scraped/section-bg-3-opt.jpg"
                  alt="Krystalore Crews in athletic wear, runner starting position"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/scraped/fitness-group-outdoor.jpg"
                  alt="Krystalore leading outdoor fitness class"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MEET THE FOUNDER */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-white/80 text-sm font-semibold uppercase tracking-[0.3em] mb-2">
              MEET THE FOUNDER &amp; CEO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Hey, I'm Krystalore Crews!</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/scraped/krystalore-profile-opt.jpg"
                  alt="Krystalore Crews professional portrait"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-[2/1] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/scraped/credentials-opt.jpg"
                  alt="Krystalore Crews certifications and credentials"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div>
              <p className="text-lg mb-4 text-white leading-relaxed">
                I started teaching in-person mindset, HIIT, and Kickboxing classes in parks, community centers, and kid's dance camps. I volunteered for several speaking events, including races, women's empowerment seminars, as well as on wellness and resilience podcasts.
              </p>
              <p className="text-lg mb-4 text-white leading-relaxed">
                As a former NFL Cheerleader and professional Belly Dancer, I know how to bring energy and excitement to any room to make fitness and health fun!
              </p>
              <p className="text-lg mb-8 text-white leading-relaxed">
                I focus on being a role model and a community builder, bringing like-minded people together and empowering them to crews beyond their limits.
              </p>
              <Link 
                href="/about"
                className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors inline-flex items-center gap-2"
              >
                Read More About Krystalore <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RETREAT EXPERIENCES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Retreat Experiences</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg mb-4 text-gray-700">
                I've learned personally the value of time away to focus on transforming life and business results.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                I'm the founder of Revive & Thrive Retreats.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                These exclusive getaways combine fitness, personal development, and relaxation, offering the perfect escape from everyday life.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Whether you need to recharge or rediscover your purpose, my retreats provide the ideal setting for growth and renewal.
              </p>
              <Link 
                href="/retreat"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors inline-flex items-center gap-2"
              >
                See Upcoming Adventures <Mountain className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/scraped/leadership-training-opt.jpg"
                alt="Tropical retreat collage with pool, sunset, dining"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/retreat/retreat-01.jpg"
                alt="Infinity pool with ocean views at retreat property"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/retreat/retreat-group-01.jpg"
                alt="Women's group on beach during retreat"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/retreat/retreat-group-03.jpg"
                alt="Women celebrating sunset during retreat"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. BOOKS, BLOG & PODCAST */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/scraped/retreat-experiences-opt.jpg"
                alt="Podcast microphone with planner book and book signing collage"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Books, Blog &amp; Podcast</h2>
              <p className="text-lg mb-4 text-gray-700">
                Explore my books, blog, and podcasts for deeper insights into personal development and wellness.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                As an author and podcast host, I share my experiences and actionable advice on a variety of topics.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Discover inspiration and guidance to help you achieve your goals and live your best life.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Tune in to conversations that empower you to push beyond your limits.
              </p>
              <Link 
                href="/books"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors inline-flex items-center gap-2"
              >
                Explore Now <BookOpen className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CHANGE YOUR LIFE */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Change Your Life.</h2>
          <p className="text-xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
            There's a way to change the way you feel, be the best version of yourself, and give back to the world around you... You just have to take the first step.
          </p>
          <Link 
            href="/go"
            className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-12 py-6 text-xl font-bold rounded-full transition-colors inline-flex items-center gap-3 shadow-2xl"
          >
            Get Started Today <Sparkles className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* 12. RECOMMENDATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Recommendations</h2>
            <p className="text-lg mb-4 text-gray-700 max-w-3xl mx-auto">
              Hear from those who have experienced the impact of my work. This section features testimonials from clients and participants who have benefited from my training, coaching, and wellness programs.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how I have helped individuals and organizations achieve their goals and surpass their limits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/scraped/books-blog-opt.jpg"
                alt="Winter Warrior fitness testimonial screenshot"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/scraped/recommendations-opt.jpg"
                alt="Text message testimonial praising fitness program"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/scraped/publications-opt.jpg"
                alt="Facebook testimonial about program results"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 13. PUBLICATIONS & PRESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Publications &amp; Press</h2>
          <p className="text-lg mb-4 text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest news and insights. This section includes articles, interviews, and media coverage that highlight my expertise in leadership, wellness, and personal development.
          </p>
          <p className="text-lg mb-8 text-gray-700 max-w-3xl mx-auto">
            Explore my publications to gain valuable knowledge and stay informed about upcoming events.
          </p>
          <p className="text-lg mb-8 text-gray-600 font-semibold">
            Featured in: Global Woman Magazine &bull; BWC Daily
          </p>
          <Link 
            href="/blog"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors inline-flex items-center gap-2"
          >
            Explore Now <BookOpen className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 14. STAY CONNECTED */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Stay connected with us!</h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://facebook.com/krystalore" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg hover:shadow-xl" aria-label="Facebook">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/thecrewscoach" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg hover:shadow-xl" aria-label="Instagram">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="https://tiktok.com/@thecrewscoach" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors font-bold text-xl shadow-lg hover:shadow-xl" aria-label="TikTok">
              TT
            </a>
            <a href="https://linkedin.com/in/krystalore-crews" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors shadow-lg hover:shadow-xl" aria-label="LinkedIn">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://youtube.com/user/krystalore" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg hover:shadow-xl" aria-label="YouTube">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="https://pinterest.com/krystalorecrews" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors font-bold text-xl shadow-lg hover:shadow-xl" aria-label="Pinterest">
              P
            </a>
          </div>
        </div>
      </section>

      {/* 15. LOGIN / PORTAL BAR */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/auth/login" className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
              <LogIn className="w-4 h-4" /> Member Login
            </Link>
            <Link href="/auth/register" className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
              <UserPlus className="w-4 h-4" /> Create Account
            </Link>
            <Link href="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
              <Settings className="w-4 h-4" /> Member Dashboard
            </Link>
            <Link href="/admin" className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
              <Shield className="w-4 h-4" /> Admin
            </Link>
          </div>
        </div>
      </section>

      {/* 16. JC Easter Egg */}
      <div className="text-center pb-2">
        <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity">JC</a>
      </div>

      {/* 17. Footer */}
      <Footer />
    </main>
  )
}