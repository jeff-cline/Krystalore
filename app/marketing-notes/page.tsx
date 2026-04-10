import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marketing & SEO Notes',
  description: 'Running log of SEO, AEO, and marketing optimizations applied to the Krystalore Crews executive coaching platform.',
  openGraph: {
    title: "Marketing & SEO Notes",
    description: "Running log of SEO, AEO, and marketing optimizations applied to the Krystalore Crews executive coaching platform.",
    url: "https://krystalore.com/marketing-notes",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing & SEO Notes",
    description: "Running log of SEO, AEO, and marketing optimizations applied to the Krystalore Crews executive coaching platform.",
  },
}

export default function MarketingNotesPage() {
  const entries = [
    {
      date: 'February 10, 2026',
      title: 'Comprehensive SEO & AEO Overhaul',
      changes: [
        'Added Open Graph meta tags (og:title, og:description, og:image, og:url, og:type) to root layout',
        'Added Twitter card meta tags for social sharing optimization',
        'Set canonical URLs to prevent duplicate content issues',
        'Added viewport and theme-color meta tags',
        'Created XML sitemap (public/sitemap.xml) with all 30+ pages, priorities, and changefreq values',
        'Created robots.txt with proper crawl directives and sitemap reference',
        'Added sitemap link in footer for search engine discovery',
        'Implemented structured data (JSON-LD) on homepage (Organization schema)',
        'Implemented structured data (JSON-LD) on books page (Book schema for each book)',
        'Implemented structured data (JSON-LD) on courses page (Course schema for featured courses)',
        'Added unique metadata (title, description, keywords) to every major page',
        'Added individual metadata to all 15 quiz pages via layout files',
        'Downloaded and self-hosted book cover images with SEO-friendly filenames',
        'Added descriptive alt tags to all book images with relevant keywords',
        'Replaced placeholder icons with actual book cover images on /books page',
      ],
    },
    {
      date: 'February 10, 2026',
      title: 'Image SEO Optimization',
      changes: [
        'Downloaded book images from krystalorecrews.com/books',
        'Renamed images with SEO-friendly keywords: road-to-resilience-book-cover.png, leave-no-milspouse-behind-book-cover.png, krystal-clear-life-planner.png',
        'Added comprehensive alt tags with target keywords on all images',
        'Self-hosted images for faster loading and better SEO control',
      ],
    },
  ]

  const seoBestPractices = [
    { title: 'Unique Title Tags', desc: 'Every page has a unique, descriptive title under 60 characters with primary keywords front-loaded.' },
    { title: 'Meta Descriptions', desc: 'Compelling descriptions under 160 characters with calls-to-action and target keywords for each page.' },
    { title: 'Structured Data', desc: 'JSON-LD schema markup for Organization, Book, and Course types to enhance rich snippets in search results.' },
    { title: 'Open Graph & Twitter Cards', desc: 'Social meta tags ensure attractive previews when pages are shared on social media platforms.' },
    { title: 'XML Sitemap', desc: 'Comprehensive sitemap listing all public pages with priority weighting and update frequency hints.' },
    { title: 'Canonical URLs', desc: 'Canonical tags prevent duplicate content issues and consolidate page authority.' },
    { title: 'Image Optimization', desc: 'SEO-friendly filenames, descriptive alt tags, and self-hosted images for performance and crawlability.' },
    { title: 'Robots.txt', desc: 'Proper crawl directives to guide search engines and prevent indexing of admin/dashboard pages.' },
  ]

  const aeoConsiderations = [
    { title: 'Question-Answer Format', desc: 'Quiz pages naturally create Q&A content that AI answer engines can extract and cite.' },
    { title: 'Structured Data for AI', desc: 'JSON-LD helps AI systems understand entity relationships (Organization, Person, Book, Course).' },
    { title: 'Topical Authority', desc: 'Deep content on coaching, leadership, fitness, and mental health establishes domain expertise.' },
    { title: 'Entity Optimization', desc: 'Consistent NAP (Name, Address, Profile) data across structured data and social profiles.' },
    { title: 'Conversational Keywords', desc: 'Page descriptions written in natural language that matches how people ask AI assistants questions.' },
    { title: 'Content Freshness', desc: 'Regular updates to sitemap lastmod dates and marketing notes signal active, maintained content.' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link href="/" className="text-[#34c5c5] hover:underline text-sm">← Back to Home</Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Marketing & <span className="text-[#34c5c5]">SEO</span> Notes
        </h1>
        <p className="text-gray-600 mb-12 text-lg">
          Running log of search engine optimization, answer engine optimization, and marketing changes applied to the platform.
        </p>

        {/* Change Log */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-[#34c5c5] pb-2">Change Log</h2>
          <div className="space-y-8">
            {entries.map((entry, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#34c5c5] text-white text-xs font-semibold px-3 py-1 rounded-full">{entry.date}</span>
                  <h3 className="text-lg font-bold text-gray-900">{entry.title}</h3>
                </div>
                <ul className="space-y-2">
                  {entry.changes.map((change, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-[#34c5c5] mt-1 flex-shrink-0">✓</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-[#E8A849] pb-2">SEO Best Practices Applied</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {seoBestPractices.map((item, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 p-5 hover:shadow-sm transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1 text-[#34c5c5]">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AEO Considerations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-[#34c5c5] pb-2">AEO (Answer Engine Optimization)</h2>
          <p className="text-gray-600 mb-6">
            AEO focuses on optimizing content for AI-powered answer engines like ChatGPT, Google AI Overviews, and Perplexity. 
            These systems extract and cite authoritative, well-structured content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aeoConsiderations.map((item, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 p-5 hover:shadow-sm transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1 text-[#E8A849]">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-[#34c5c5]/10 to-[#E8A849]/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimization Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#34c5c5]">30+</div>
              <div className="text-sm text-gray-600">Pages Optimized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#E8A849]">3</div>
              <div className="text-sm text-gray-600">JSON-LD Schemas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#34c5c5]">4</div>
              <div className="text-sm text-gray-600">Book Images Added</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#E8A849]">15</div>
              <div className="text-sm text-gray-600">Quiz Pages with Metadata</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
