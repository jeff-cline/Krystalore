import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'
import { ArrowRight, Heart, Shield, Users, Globe, HandHeart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nonprofit Initiatives | Krystalore Crews',
  description: 'Supporting veterans, female business owners, and Roatan community nonprofits through service, coaching, and impact programs.',
}

export default function NonprofitPage() {
  return (
    <MainLayout>
      <section className="relative py-32 md:py-40 px-4 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#37a6a6] via-[#37a6a6] to-teal-900" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <HandHeart className="h-16 w-16 text-teal-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">Nonprofit & <span className="text-teal-400">Community Impact</span></h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Service is at the heart of everything we do. Through dedicated nonprofit efforts, we support veterans, female business owners, and communities in Roatan, Honduras.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-8">
        <Image src="/images/go9/veteran.jpg" alt="Krystalore Crews veteran service and nonprofit work" fill className="object-cover" sizes="100vw" />
      </div>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Veteran Programs', desc: 'Transition support, wellness coaching, fitness programs, and community for veterans and military spouses. Special pricing and sponsored scholarships available.', color: 'text-teal-600' },
              { icon: Users, title: 'Female Business Owners', desc: 'Empowerment through coaching, mentorship, and community building. Helping women entrepreneurs build sustainable businesses with purpose.', color: 'text-pink-600' },
              { icon: Globe, title: 'Roatan Nonprofits', desc: 'On-the-ground community development in Roatan, Honduras — supporting education, wellness, and economic opportunity for local families.', color: 'text-blue-600' },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center">
                <Icon className={`h-12 w-12 ${color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/book" className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-2">
              Partner With Us <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
