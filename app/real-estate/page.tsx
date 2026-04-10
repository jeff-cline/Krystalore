import { Metadata } from 'next'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'
import { ArrowRight, Globe, Building2, TrendingUp, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate & Investment Opportunities | Krystalore Crews',
  description: 'Global real estate opportunities and investment partnerships. Explore properties and ventures in the Caribbean, US, and beyond.',
}

export default function RealEstatePage() {
  return (
    <MainLayout>
      <section className="relative py-32 md:py-40 px-4 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#37a6a6] via-[#37a6a6] to-[#37a6a6]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Globe className="h-16 w-16 text-[#E8A849] mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">Real Estate & <span className="text-[#E8A849]">Investments</span></h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Explore global real estate opportunities and investment partnerships. From Caribbean island properties to US commercial ventures — build wealth through strategic real estate.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-8">
        <Image src="/images/go9/meditation.webp" alt="Real estate lifestyle and property investments" fill className="object-cover" sizes="100vw" />
      </div>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Caribbean Properties', desc: 'Investment opportunities in Roatan, Honduras and across the Caribbean. Vacation rentals, development parcels, and turnkey properties.', color: 'text-teal-600' },
              { icon: Building2, title: 'US Commercial', desc: 'Commercial real estate and mixed-use development opportunities across the United States. Strategic partnerships available.', color: 'text-[#E8A849]' },
              { icon: TrendingUp, title: 'Investment Partnerships', desc: 'Joint venture opportunities for accredited investors. Portfolio diversification through curated global real estate deals.', color: 'text-blue-600' },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center">
                <Icon className={`h-12 w-12 ${color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/book" className="bg-[#34c5c5] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-2">
              Explore Opportunities <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
