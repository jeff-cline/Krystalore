'use client'

import Image from 'next/image'
import Link from 'next/link'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Users,
  Mic,
  Target,
  Heart,
  BookOpen,
  Mountain,
  Award,
  Globe
} from 'lucide-react'

export default function DemoHomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* 1. HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/scraped/hero-bg.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              ACCELERATE
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 font-light">
              Change -- Don't just Leave a Legacy, Live it.
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Leadership starts with YOU, and every leader needs a Crew. Do you have one that's got your back, and are you all thriving?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-lg font-medium transition-colors flex items-center">
                  Let's Talk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="/book">
                <button className="border border-orange-500 text-white hover:bg-[#34c5c5] px-8 py-4 text-lg rounded-lg font-medium transition-colors">
                  Book Acceleration Call
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. LEADERSHIP TRAINING */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">Leadership Training</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  I offer dynamic leadership training designed to elevate your team's potential
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Through interactive workshops, I provide leaders with the skills to inspire, motivate, and drive excellence within their organizations.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Let's work together to foster a culture of leadership that transcends limits and makes them more engaged and empowered.
                </p>
                <Link href="/leadership-training">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    Explore Leadership Training
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="/images/scraped/section-bg-1.png"
                  alt="Leadership Training"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. PUBLIC SPEAKING */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96 lg:h-[500px]">
                <Image
                  src="/images/scraped/section-bg-2.png"
                  alt="Public Speaking"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <Mic className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">Public Speaking</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  As an experienced public speaker, I bring energy and passion to every stage.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  My talks on personal development, resilience, and empowerment leave a lasting impact.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Whether it's a corporate event, retreat, or conference, I deliver presentations that inspire and motivate audiences to achieve greatness.
                </p>
                <Link href="/keynote-speaker">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    Explore My Public Speaking Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EXECUTIVE COACHING */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">Executive Coaching</h2>
                </div>
                <p className="text-lg text-gray-700 mb-8">
                  My executive coaching services are tailored to meet the unique needs of each executive. I focus on leadership development, strategic thinking, and work-life balance, providing the guidance and accountability necessary for professional excellence. Let's unlock your potential and drive performance together.
                </p>
                <Link href="/book">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    Book Your Coaching Session Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="/images/scraped/section-bg-3.png"
                  alt="Executive Coaching"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. HOLISTIC WELLNESS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96 lg:h-[500px]">
                <Image
                  src="/images/scraped/leadership-training.png"
                  alt="Holistic Wellness"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">Holistic Wellness</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  I embrace a holistic approach to wellness.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  My programs, centered around the 34-minute mindset, nurture the mind, body, and spirit with fitness classes, nutritional guidance, mindfulness practices, and stress management.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Leveraging trusted tools and resources, I provide the support needed to achieve a balanced and vibrant life.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Join our community, prioritize your well-being, and let's thrive together!
                </p>
                <Link href="/fitness">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    Explore Holistic Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. MEET THE FOUNDER */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-teal-600 mb-2">MEET THE FOUNDER & CEO</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Hey, I'm Krystalore Crews!</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-8">
                  I started teaching in-person mindset, HIIT, and Kickboxing classes in parks, community centers, and kid's dance camps. I volunteered for several speaking events, including races, women's empowerment seminars, as well as on wellness and resilience podcasts. As a former NFL Cheerleader and professional Belly Dancer, I know how to bring energy and excitement to any room to make fitness and health fun! I focus on being a role model and a community builder, bringing like-minded people together and empowering them to crews beyond their limits.
                </p>
                <Link href="/about">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    Read More About Krystalore
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
              <div className="space-y-6">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/scraped/krystalore-profile.png"
                    alt="Krystalore Crews Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/images/scraped/credentials.png"
                      alt="Credentials"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/images/scraped/speaking.jpg"
                      alt="Speaking Event"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. RETREAT EXPERIENCES */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96 lg:h-[500px]">
                <Image
                  src="/images/scraped/retreat-experiences.png"
                  alt="Retreat Experiences"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <Mountain className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">Retreat Experiences</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  I've learned personally the value of time away to focus on transforming life and business results.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  I'm the founder of Revive & Thrive Retreats.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  These exclusive getaways combine fitness, personal development, and relaxation, offering the perfect escape from everyday life.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Whether you need to recharge or rediscover your purpose, my retreats provide the ideal setting for growth and renewal.
                </p>
                <Link href="/retreat">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    See Upcoming Adventures
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. BOOKS, BLOG & PODCAST */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">Books, Blog & Podcast</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Explore my books, blog, and podcasts for deeper insights into personal development and wellness.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  As an author and podcast host, I share my experiences and actionable advice on a variety of topics.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Discover inspiration and guidance to help you achieve your goals and live your best life.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Tune in to conversations that empower you to push beyond your limits.
                </p>
                <Link href="/books">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    Explore Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="/images/scraped/books-blog.png"
                  alt="Books, Blog & Podcast"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. RECOMMENDATIONS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-teal-600 mr-3" />
                <h2 className="text-4xl font-bold text-gray-900">Recommendations</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Hear from those who have experienced the impact of my work. This section features testimonials from clients and participants who have benefited from my training, coaching, and wellness programs.
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover how I have helped individuals and organizations achieve their goals and surpass their limits.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/scraped/recommendations.png"
                  alt="Client Recommendations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/scraped/publications.png"
                  alt="Client Testimonials"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 10. PUBLICATIONS & PRESS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-teal-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Publications & Press</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Stay updated with the latest news and insights. This section includes articles, interviews, and media coverage that highlight my expertise in leadership, wellness, and personal development.
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Explore my publications to gain valuable knowledge and stay informed about upcoming events.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-medium">
                Global Woman Magazine
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-medium">
                BWC Daily
              </span>
            </div>
            <Link href="/blog">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                Explore Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </section>

        {/* 11. STAY CONNECTED */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Stay connected with us!</h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://facebook.com/krystalore"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:bg-blue-50"
              >
                <Facebook className="h-8 w-8 text-blue-600" />
              </a>
              <a
                href="https://instagram.com/thecrewscoach"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:bg-pink-50"
              >
                <Instagram className="h-8 w-8 text-pink-600" />
              </a>
              <a
                href="https://tiktok.com/@thecrewscoach"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:bg-black/5"
              >
                <Twitter className="h-8 w-8 text-black" />
              </a>
              <a
                href="https://linkedin.com/in/krystalore-crews"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:bg-blue-50"
              >
                <Linkedin className="h-8 w-8 text-blue-700" />
              </a>
              <a
                href="https://youtube.com/user/krystalore"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow hover:bg-red-50"
              >
                <Youtube className="h-8 w-8 text-red-600" />
              </a>
            </div>
          </div>
        </section>

        {/* 12. JC EASTER EGG */}
        <div className="text-center pb-2">
          <a href="https://jeff-cline.com" className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity">
            JC
          </a>
        </div>
      </main>
      
      {/* 13. FOOTER */}
      <Footer />
    </>
  )
}