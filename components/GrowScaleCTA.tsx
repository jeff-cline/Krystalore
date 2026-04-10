import Link from 'next/link'

export default function GrowScaleCTA() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#34c5c5]/10 to-[#E8A849]/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Want to Grow and Scale Your Business?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you&apos;re writing a book, building a community, hosting retreats, or speaking on stages — 
          we have the tools and coaching to help you scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quizzes/scale-your-business"
            className="bg-[#34c5c5] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#37a6a6] transition-colors shadow-lg"
          >
            Take the Scaling Quiz
          </Link>
          <Link
            href="/contact"
            className="bg-[#34c5c5] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#84d7d7] transition-colors"
          >
            Talk to a Coach
          </Link>
        </div>
      </div>
    </section>
  )
}
