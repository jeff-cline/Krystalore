'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function ProductsPage() {
  const products = [
    {
      title: 'Krystal Clear Life Planner',
      description: 'Strategic planning system that turns your biggest goals into your greatest achievements.',
      price: '$49.99',
      link: '/planner',
      category: 'Planning Tools',
      features: ['12-month strategic planning', 'Goal-setting frameworks', 'Habit tracking systems', 'Progress review templates']
    },
    {
      title: 'Beyond Limits Book Series',
      description: 'Personal transformation stories and actionable strategies from military to marathon success.',
      price: 'Coming Soon',
      link: '/books',
      category: 'Books',
      features: ['Personal transformation stories', 'Military leadership principles', 'Athletic mindset strategies', 'Business breakthrough methods']
    },
    {
      title: 'Leadership Mastery Course',
      description: 'Comprehensive online course covering 22 years of military leadership wisdom.',
      price: '$297',
      link: '/courses',
      category: 'Online Courses',
      features: ['8 comprehensive modules', 'Video lessons and worksheets', 'Leadership assessment tools', 'Certificate of completion']
    },
    {
      title: 'Fitness Transformation Guide',
      description: 'Complete guide to functional fitness based on wheelchair-to-athlete transformation.',
      price: '$97',
      link: '/courses',
      category: 'Fitness Guides',
      features: ['Progressive workout plans', 'Nutrition guidelines', 'Injury prevention strategies', 'Mindset development']
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Planning Tools':
        return 'bg-teal-100 text-teal-800'
      case 'Books':
        return 'bg-orange-100 text-orange-800'
      case 'Online Courses':
        return 'bg-purple-100 text-purple-800'
      case 'Fitness Guides':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/group-evening.webp" alt="Krystalore Crews products and lifestyle offerings" fill className="object-cover" sizes="100vw" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Life
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover powerful tools, resources, and courses designed to help you crews beyond your limits and achieve extraordinary results.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
                  {product.category}
                </span>
                <span className="text-2xl font-bold text-teal-600">{product.price}</span>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {product.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-teal-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={product.link}
                className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Categories Overview */}
        <section className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Product Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 text-2xl">📋</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Planning Tools</h3>
              <p className="text-gray-600 text-sm">Strategic systems for goal achievement</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Books</h3>
              <p className="text-gray-600 text-sm">Transformation stories and strategies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Online Courses</h3>
              <p className="text-gray-600 text-sm">Comprehensive learning programs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">💪</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fitness Guides</h3>
              <p className="text-gray-600 text-sm">Physical transformation resources</p>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            More Coming Soon
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're continuously developing new resources to support your transformation journey. Stay connected to be the first to know about new releases.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#34c5c5] hover:bg-[#37a6a6] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Stay Connected
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