'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is executive coaching and how can it help me as a woman leader?",
      answer: "Executive coaching provides tailored strategies specifically designed for women in leadership positions. I help you develop confidence, strategic thinking skills, and work-life balance while navigating the unique challenges women face in executive roles. Through personalized sessions, we'll identify your strengths, overcome limiting beliefs, and create actionable plans for achieving your professional goals."
    },
    {
      question: "How long are leadership training workshops?",
      answer: "Our leadership training workshops range from 1 hour to 40 hours, depending on your organization's needs. They can be conducted live or virtually and are completely customizable to address your specific team dynamics, goals, and challenges."
    },
    {
      question: "What happens at a Crews Beyond Limits wellness retreat?",
      answer: "Our 7-day immersive retreats in Puerto Rico combine coaching, fitness, adventure, and sisterhood with a private chef experience. You'll participate in daily coaching sessions, fitness activities, mindfulness practices, and unique adventures while connecting with like-minded women in a luxury setting."
    },
    {
      question: "What is the 34-Minute Mindset approach to fitness?",
      answer: "The 34-Minute Mindset is our efficient approach that combines HIIT, kickboxing, and yoga into compressed, high-impact sessions. This method maximizes results while fitting into busy schedules, focusing on both physical transformation and mental clarity."
    },
    {
      question: "Can I book Krystalore Crews as a keynote speaker for my event?",
      answer: "Absolutely! I speak at corporate events, retreats, and conferences, delivering high-energy presentations on resilience, personal development, leadership, and empowerment. Each talk is customized to your audience and event goals."
    },
    {
      question: "What books has Krystalore Crews written?",
      answer: "I've authored three books: 'Leave No MilSpouse Behind' featuring stories from 6 military spouses, 'The Road to Resilience: 5 Ways to Build Courageous Confidence' sharing personal transformation stories, and 'Krystal Clear Life Planner' focusing on goals, habits, and the 5 C's: core, consistency, confidence, community, and celebration."
    },
    {
      question: "What is the Bombshell Confidence Bootcamp?",
      answer: "The Bombshell Confidence Bootcamp is a 5-day virtual program that includes habit tracking tools, daily challenges, and access to our accountability community. It's designed to help you break through confidence barriers and develop unstoppable self-assurance."
    },
    {
      question: "How does private mindset coaching work?",
      answer: "Private mindset coaching is available in 1, 3, or 6-month packages featuring weekly 90-minute sessions. We work together to identify limiting beliefs, create new empowering habits, and develop strategies for achieving your personal and professional goals."
    },
    {
      question: "What makes Crews Beyond Limits different from other coaching programs?",
      answer: "Our holistic approach addresses mind, body, and spirit simultaneously. Combined with my unique background as a former NFL cheerleader who overcame being wheelchair-bound, I bring both personal experience and professional expertise to create transformative results."
    },
    {
      question: "Is there a community I can join?",
      answer: "Yes! We have both online and in-person communities where members connect through events, retreats, and accountability groups. Our community focuses on supporting each other's growth and celebrating wins together."
    },
    {
      question: "What is emotional intelligence training and why does my team need it?",
      answer: "Emotional intelligence training focuses on self-awareness, communication skills, and team effectiveness. It helps teams work better together, reduce conflicts, improve leadership capabilities, and create more positive workplace cultures that drive better results."
    },
    {
      question: "How do I get started with Krystalore Crews?",
      answer: "Getting started is easy! You can book a discovery call at /book, fill out our coaching application at /apply, or explore our various programs at /courses and /go to find what resonates with your goals."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <Image
          src="/images/scraped/hero-bg.png"
          alt="Crystal diamond background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 to-black/60"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-4">
            Krystalore
          </h1>
          <p className="text-2xl md:text-4xl text-teal-300 font-light tracking-widest mb-6">
            Crews Beyond Limits
          </p>
          <p className="text-sm tracking-[0.25em] text-white/70 mb-8">
            Executive Coaching | Wellness | Leadership | Retreats | Speaking | Fitness
          </p>
          <blockquote className="italic text-xl text-white/90 mb-12 max-w-4xl mx-auto">
            "Reclaim your confidence and feel sexy in the mirror again! Don't wait any longer, join us now and start seeing results!"
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/book" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </Link>
            <Link 
              href="/go" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Programs
            </Link>
          </div>
          
          <div className="flex justify-center">
            <div className="relative max-w-sm">
              <Image
                src="/images/scraped/krystalore-bio-fitness.jpg"
                alt="Krystalore Crews branded card"
                width={400}
                height={600}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PERSONAL INTRO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/scraped/krystalore-profile-opt.jpg"
                alt="Krystalore Crews professional portrait"
                fill
                className="object-cover object-top"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm Krystalore Crews.
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My journey hasn't been traditional. At 23, I found myself in a wheelchair, told I might never walk again. But I refused to accept that limitation. Through determination, I not only walked again—I thrived.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                After navigating a difficult divorce and rebuilding my life from the ground up, I discovered my passion for personal training and helping others break through their own barriers. What started as my personal healing journey became my mission to help others reclaim their power.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Today, I combine my experience as a former NFL Cheerleader, professional Belly Dancer, and certified coach to create transformative experiences that address the whole person—mind, body, and spirit.
              </p>
              
              <Link 
                href="/about" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
              >
                Read My Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need. One Destination.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From executive boardrooms to tropical retreats, from podcast studios to fitness boot camps — everything under one roof.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Executive Coaching",
                image: "/images/scraped/krystalore-speaking-2.jpg",
                description: "Tailored strategies for C-suite leaders and entrepreneurs. Leadership development, strategic thinking, work-life balance.",
                link: "/entrepreneur-coaching"
              },
              {
                title: "Leadership Training",
                image: "/images/scraped/leadership-team-1.jpg",
                description: "Interactive workshops from 1-40 hours. Emotional Intelligence, Temperament Training, Team Building, Goal Setting.",
                link: "/leadership-training"
              },
              {
                title: "Wellness Retreats",
                image: "/images/scraped/leadership-training-opt.jpg",
                description: "7-day luxury immersive retreats in Puerto Rico. Coaching, fitness, adventure, private chef, sisterhood.",
                link: "/retreat"
              },
              {
                title: "Fitness & Boot Camp",
                image: "/images/scraped/krystalore-fitness.webp",
                description: "Beyond Limits Boot Camp. Mon/Wed/Fri. HIIT, Kickboxing, Yoga. The 34-Minute Mindset.",
                link: "/fitness"
              },
              {
                title: "Keynote Speaking",
                image: "/images/krystalore/wny-heroes-speaking.png",
                description: "High-energy presentations on resilience, personal development, and empowerment.",
                link: "/keynote-speaker"
              },
              {
                title: "Books & Podcast",
                image: "/images/scraped/retreat-experiences-opt.jpg",
                description: "Author of 3 books, host of Krystal Clear Life podcast.",
                link: "/books"
              },
              {
                title: "Private Coaching",
                image: "/images/scraped/leadership-event.jpg",
                description: "1-on-1 mindset and business coaching. Weekly 90-min sessions. Transform your habits and break through limits.",
                link: "/apply"
              },
              {
                title: "Courses & Programs",
                image: "/images/scraped/krystalore-keynote.jpg",
                description: "Bombshell Confidence Bootcamp, Million Dollar Body Academy, Vision Board Workshop, and more.",
                link: "/courses"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <Link 
                    href={service.link} 
                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP TRAINING */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/scraped/leadership-hero-opt.jpg"
                alt="Corporate leadership training"
                fill
                className="object-cover object-top"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Corporate Leadership Training
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Transform your team dynamics with our comprehensive leadership workshops designed for today's challenges.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Emotional Intelligence Training</h3>
                    <p className="text-gray-600">Develop self-awareness and interpersonal skills</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Temperament & Personality Workshops</h3>
                    <p className="text-gray-600">Understand team dynamics and communication styles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Team Building & Goal Setting</h3>
                    <p className="text-gray-600">Create cohesive, high-performing teams</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Corporate Wellness & Fitness</h3>
                    <p className="text-gray-600">Promote employee health and productivity</p>
                  </div>
                </li>
              </ul>
              
              <Link 
                href="/book" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
              >
                Book a Speaking Engagement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PUBLIC SPEAKING */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Keynote Speaking
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As an experienced public speaker, I bring energy and passion to every stage. My presentations combine personal storytelling with actionable strategies that inspire and empower audiences to break through their limitations.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Speaking Topics:</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Resilience & Recovery
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Leadership Excellence
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Wellness Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Personal Empowerment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Mindset Transformation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Overcoming Adversity
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/keynote-speaker" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
              >
                Book Krystalore for Your Event
              </Link>
            </div>
            
            <div className="space-y-6">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/scraped/speaker-stage.jpg"
                  alt="Krystalore speaking on stage"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/scraped/speaking.jpg"
                  alt="Krystalore keynote presentation"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXECUTIVE COACHING */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/scraped/krystalore-event.jpg"
                alt="Krystalore executive coaching"
                fill
                className="object-cover object-top"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Executive & Private Coaching
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Elevate your leadership and transform your life with personalized coaching designed for high-achieving women. My approach combines strategic business planning with holistic wellness to create sustainable success.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Private Mindset Coaching</h3>
                  <p className="text-gray-600">1, 3, or 6-month packages with weekly 90-minute sessions</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Business Startup Bootcamp</h3>
                  <p className="text-gray-600">4-week intensive program with comprehensive resource package</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Group Coaching Programs</h3>
                  <p className="text-gray-600">Mastermind groups and accountability communities</p>
                </div>
              </div>
              
              <Link 
                href="/apply" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
              >
                Apply for Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOLISTIC WELLNESS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Holistic Wellness & Fitness
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Experience the power of the 34-Minute Mindset—our revolutionary approach that transforms both body and mind through efficient, high-impact sessions that fit into your busy lifestyle.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fitness Programs</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• HIIT Training</li>
                    <li>• Kickboxing</li>
                    <li>• Yoga & Mindfulness</li>
                    <li>• Strength Training</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Wellness Services</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Nutritional Guidance</li>
                    <li>• Mindfulness Practices</li>
                    <li>• Stress Management</li>
                    <li>• Habit Formation</li>
                  </ul>
                </div>
              </div>
              
              <Link 
                href="/fitness" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
              >
                Explore Fitness Programs
              </Link>
            </div>
            
            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/scraped/section-bg-3-opt.jpg"
                  alt="Krystalore fitness training"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/scraped/fitness-class-1.jpg"
                  alt="Fitness class session"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MEET THE FOUNDER */}
      <section className="py-16 md:py-24 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/scraped/krystalore-coaching-headshot.jpg"
                  alt="Krystalore Crews at a live coaching event"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/scraped/credentials-opt.jpg"
                  alt="Krystalore certifications"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            
            <div>
              <p className="text-teal-200 font-semibold tracking-wide uppercase mb-4">
                MEET THE FOUNDER & CEO
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Hey, I'm Krystalore Crews!
              </h2>
              <p className="text-xl text-teal-100 mb-6 leading-relaxed">
                Former NFL Cheerleader turned entrepreneur, professional Belly Dancer, certified fitness instructor, and passionate community builder.
              </p>
              <p className="text-lg text-teal-100 mb-6 leading-relaxed">
                My diverse background has given me unique insights into performance, resilience, and the power of mind-body connection. From the football field to the boardroom, I've learned that success comes from integrating all aspects of who we are.
              </p>
              <p className="text-lg text-teal-100 mb-8 leading-relaxed">
                Today, I'm dedicated to helping women reclaim their power, build unshakeable confidence, and create lives that align with their deepest values and highest aspirations.
              </p>
              
              <Link 
                href="/about" 
                className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
              >
                Read More About Krystalore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RETREAT EXPERIENCES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Retreat Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Join us for transformative Revive & Thrive Retreats in Puerto Rico. Seven days of coaching, fitness, adventure, and sisterhood in a luxury setting with a private chef and unforgettable experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/retreat/retreat-01.jpg"
                alt="Luxury retreat infinity pool"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/retreat/retreat-group-01.jpg"
                alt="Women's retreat group on beach"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/retreat/retreat-group-03.jpg"
                alt="Women celebrating sunset retreat"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/retreat" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
            >
              See Upcoming Adventures
            </Link>
          </div>
        </div>
      </section>

      {/* 10. BOOKS & PODCAST */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Books, Blog & Podcast
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/scraped/book-milspouse-opt.jpg"
                  alt="Leave No MilSpouse Behind book cover"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Leave No MilSpouse Behind</h3>
                <p className="text-gray-600">Inspiring stories from 6 military spouses who overcame unique challenges and found their strength.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/scraped/book-resilience-opt.jpg"
                  alt="The Road to Resilience book cover"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Road to Resilience</h3>
                <p className="text-gray-600">5 Ways to Build Courageous Confidence through personal stories of transformation and growth.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/scraped/book-planner-opt.jpg"
                  alt="Krystal Clear Life Planner cover"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Krystal Clear Life Planner</h3>
                <p className="text-gray-600">Goals, habits, and the 5 C's: core, consistency, confidence, community, and celebration.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Krystal Clear Life Podcast</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Join me for honest conversations about life, business, and personal growth. Each episode delivers actionable insights and inspiring stories to help you live your most authentic life.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/scraped/podcast-cover-opt.jpg"
                  alt="Krystal Clear Life Podcast artwork"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/books" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
            >
              Explore All Books
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST UPDATES CAROUSEL */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600">
              Follow the journey across social media
            </p>
          </div>
          
          {/* Horizontal Scrollable Carousel */}
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 snap-x snap-mandatory">
              {[
                { src: '/images/scraped/speaker-stage.jpg', caption: 'Level Up Life & Business' },
                { src: '/images/retreat/retreat-group-01.jpg', caption: 'Retreat Sisterhood' },
                { src: '/images/scraped/book-krystalore.jpg', caption: 'Author Life' },
                { src: '/images/scraped/krystalore-event.jpg', caption: 'Executive Coaching' },
                { src: '/images/retreat/retreat-01.jpg', caption: 'Puerto Rico Retreat' },
                { src: '/images/scraped/speaking.jpg', caption: 'WNY Heroes Keynote' },
                { src: '/images/scraped/fitness-class-1.jpg', caption: 'Beyond Limits Fitness' },
                { src: '/images/scraped/leadership-workshop.jpg', caption: 'Leadership Workshop' },
                { src: '/images/scraped/krystalore-profile-opt.jpg', caption: 'The Crews Coach' },
                { src: '/images/retreat/retreat-group-03.jpg', caption: 'Sunset Celebrations' },
                { src: '/images/scraped/podcast-cover-opt.jpg', caption: 'Krystal Clear Life Podcast' },
                { src: '/images/scraped/leadership-team-1.jpg', caption: 'Team Building' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-none w-[240px] md:w-[280px] snap-center"
                >
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Text overlay with gradient */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-gray-900 mb-6">Follow @thecrewscoach</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com/thecrewscoach"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Follow on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.9 16.8c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7zm6.5-10.2c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/krystalore"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Follow on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@thecrewscoach"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-black text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Follow on TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/krystalore-crews"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Follow on LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/user/krystalore"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Follow on YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. COURSES & PROGRAMS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Courses & Memberships
            </h2>
            <blockquote className="text-xl italic text-gray-600 max-w-4xl mx-auto">
              "Know who you are. Own who you are. You are the only you in the world and that's incredible."
            </blockquote>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Bombshell Confidence Bootcamp",
                description: "5-day virtual program with habit tracker and accountability community",
                features: ["Daily confidence challenges", "Habit tracking tools", "Community support", "Lifetime access"]
              },
              {
                title: "Relationship Remodel",
                description: "4 private coaching sessions, weekly or bi-weekly",
                features: ["Personal coaching", "Relationship strategies", "Communication tools", "Action planning"]
              },
              {
                title: "Million Dollar Body Academy",
                description: "90 days coaching with planner and online community",
                features: ["3-month program", "Fitness planning", "Nutrition guidance", "Success tracking"]
              },
              {
                title: "Crews Beyond Limits Private Mindset",
                description: "4 weeks with 1-hour consult and online community",
                features: ["Mindset transformation", "One-on-one guidance", "Community access", "Goal setting"]
              },
              {
                title: "Vision Board Workshop",
                description: "2-hour virtual session for long-term goal setting",
                features: ["Vision clarification", "Goal mapping", "Visual planning", "Implementation strategy"]
              },
              {
                title: "Business Startup Bootcamp",
                description: "4 weeks with comprehensive resource package",
                features: ["Business foundation", "Marketing strategies", "Resource toolkit", "Ongoing support"]
              }
            ].map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/courses" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* 12. CHANGE YOUR LIFE */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-teal-600 to-teal-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Change Your Life.
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed">
            There's a way to change the way you feel, be the best version of yourself, and give back to the world around you... You just have to take the first step.
          </p>
          
          <Link 
            href="/go" 
            className="bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-12 py-6 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* 13. TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              "You can tell how much Krystalore enjoys her work. Her and her team have the great ability of keeping the audience engaged!",
              "Tons of energy, personality, and professionalism. What a great combo, not very common. It's contagious!",
              "I love how the instructor gives so many real-life examples and engages with us to bring our perspectives to the material to keep us engaged!"
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
                <div className="text-6xl text-teal-200 absolute top-4 left-6">"</div>
                <p className="text-lg text-gray-700 italic pt-8 relative z-10">{testimonial}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/scraped/books-blog-opt.jpg"
                alt="Winter Warrior testimonial"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/scraped/recommendations-opt.jpg"
                alt="Text message testimonial"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/scraped/publications-opt.jpg"
                alt="Facebook challenge testimonial"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 14. PUBLICATIONS & PRESS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Publications & Press
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Featured in leading publications and media outlets
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <span className="text-lg font-semibold text-gray-700">Global Woman Magazine</span>
            <span className="text-lg font-semibold text-gray-700">BWC Daily</span>
          </div>
          
          <Link 
            href="/blog" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
          >
            Read Articles & Press
          </Link>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. SOCIAL LINKS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Stay Connected
          </h2>
          
          <div className="flex flex-wrap justify-center gap-5">
            <a href="https://facebook.com/krystalore" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#1877F2] hover:bg-[#1565D8] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com/thecrewscoach" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://tiktok.com/@thecrewscoach" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg" aria-label="TikTok">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.1a8.16 8.16 0 005.58 2.2V11.3a4.85 4.85 0 01-3.77-1.84V6.69h3.77z"/></svg>
            </a>
            <a href="https://linkedin.com/in/krystalore-crews" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#0A66C2] hover:bg-[#084E96] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://youtube.com/user/krystalore" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg" aria-label="YouTube">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://pinterest.com/krystalorecrews" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#E60023] hover:bg-[#C8001E] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg" aria-label="Pinterest">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* 17. LOGIN BAR */}
      <section className="bg-gray-100 border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <Link href="/auth/login" className="hover:text-teal-600 transition-colors duration-200">
              Member Login
            </Link>
            <Link href="/auth/register" className="hover:text-teal-600 transition-colors duration-200">
              Create Account
            </Link>
            <Link href="/dashboard" className="hover:text-teal-600 transition-colors duration-200">
              Dashboard
            </Link>
            <Link href="/admin" className="hover:text-teal-600 transition-colors duration-200">
              Admin
            </Link>
            <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08]">JC</a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Schema.org FAQ Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
}