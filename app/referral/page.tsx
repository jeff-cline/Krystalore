'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function ReferralPage() {
  const benefits = [
    {
      title: 'Earn Rewards',
      description: 'Receive 20% commission on all successful referrals to our programs.',
      icon: '💰'
    },
    {
      title: 'Help Others Transform',
      description: 'Share life-changing programs with people who need breakthrough results.',
      icon: '🚀'
    },
    {
      title: 'Build Your Network',
      description: 'Connect with other high-achievers who value growth and excellence.',
      icon: '🌟'
    },
    {
      title: 'Exclusive Access',
      description: 'Get early access to new programs, events, and special offers.',
      icon: '🎯'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/group.jpg" alt="Krystalore Crews community sharing and referral program" fill className="object-cover" sizes="100vw" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Referral Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Share the transformation and earn rewards. Help others crews beyond their limits while building meaningful connections.
          </p>
        </div>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-teal-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Join the Program
              </h3>
              <p className="text-gray-600">
                Sign up for our referral program and get your unique referral code.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-teal-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Share with Others
              </h3>
              <p className="text-gray-600">
                Recommend our programs to friends, colleagues, and network contacts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-teal-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Earn Rewards
              </h3>
              <p className="text-gray-600">
                Receive 20% commission when your referrals join our programs.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Program Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{benefit.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Commission Structure */}
        <section className="mb-20 bg-white border border-gray-200 rounded-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Commission Structure
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">20%</div>
              <div className="font-semibold text-gray-900 mb-2">Boot Camp Referrals</div>
              <div className="text-gray-600">$99/month membership</div>
              <div className="text-sm text-teal-600 mt-2">Earn $19.80/month per referral</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">20%</div>
              <div className="font-semibold text-gray-900 mb-2">Group Coaching</div>
              <div className="text-gray-600">12-month program</div>
              <div className="text-sm text-teal-600 mt-2">Contact for commission details</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">20%</div>
              <div className="font-semibold text-gray-900 mb-2">Private Coaching</div>
              <div className="text-gray-600">$3,000/month program</div>
              <div className="text-sm text-teal-600 mt-2">Earn $600/month per referral</div>
            </div>
          </div>
        </section>

        {/* Who Should Join */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Perfect For
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl">👔</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Professionals</h3>
              <p className="text-gray-600 text-sm">Share with colleagues and business contacts</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl">💪</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fitness Enthusiasts</h3>
              <p className="text-gray-600 text-sm">Recommend to your fitness community</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl">🎤</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Coaches & Trainers</h3>
              <p className="text-gray-600 text-sm">Refer clients who need additional support</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-xl">👥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community Leaders</h3>
              <p className="text-gray-600 text-sm">Help your community access transformation</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-teal-600 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join our referral program today and start earning while helping others achieve breakthrough results.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Join Referral Program
          </Link>
        </section>
      </div>

      <Footer />
      
      {/* JC Easter Egg */}
      <div className="text-center py-2">
        <a 
          href="https://jeff-cline.com" 
          className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity"
        >
          JC
        </a>
      </div>
    </div>
  )
}