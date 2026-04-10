import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Million Dollar Body Academy | Executive Fitness & Confidence Program',
  description: 'Transform your body and mindset in 3 months. The Million Dollar Body Academy is designed for powerful professional women ready to level up their fitness, confidence, and energy.',
  keywords: 'fitness program, women executives, body transformation, confidence building, million dollar body, health coaching, professional women fitness, Krystalore Crews',
  openGraph: {
    title: 'Million Dollar Body Academy - Executive Fitness Transformation',
    description: 'Get a rocking body that you love and feel like a million bucks! Complete 3-month fitness and mindset program for busy professional women.',
    url: 'https://executive-krystalore.vercel.app/courses/million-dollar-body',
    type: 'website',
    images: [
      {
        url: 'https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/68f65b722ae2efd4578248eb.png',
        width: 1200,
        height: 630,
        alt: 'Million Dollar Body Academy - Executive Fitness Program'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Million Dollar Body Academy | Executive Fitness & Confidence Program",
    description: "Transform your body and mindset in 3 months. The Million Dollar Body Academy is designed for powerful professional women ready to level up their fitness, confidence, and energy.",
    images: ['https://assets.cdn.filesafe.space/pWRRbUgck3MdxOGpZGhY/media/68f65b722ae2efd4578248eb.png']
  },
}

function MillionDollarBodyJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Million Dollar Body Academy',
    description: 'Complete fitness and nutrition program designed for busy executives and leaders. Transform your body and mindset in 3 months with personalized coaching, community support, and proven systems.',
    provider: { 
      '@type': 'Organization', 
      name: 'Crews Beyond Limits',
      url: 'https://executive-krystalore.vercel.app'
    },
    instructor: { 
      '@type': 'Person', 
      name: 'Krystalore Crews',
      url: 'https://krystalore.com'
    },
    courseMode: 'online',
    duration: 'P3M',
    offers: {
      '@type': 'Offer',
      price: '2000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://krystalore.com/courses/million-dollar-body'
    },
    educationalLevel: 'Intermediate',
    teaches: [
      'Fitness and nutrition for executives',
      'Mindset transformation',
      'Goal setting and achievement',
      'Healthy habit establishment',
      'Personal and professional relationship improvement'
    ]
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function MillionDollarBodyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MillionDollarBodyJsonLd />
      {children}
    </>
  )
}