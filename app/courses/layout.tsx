import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Courses | Leadership, Fitness & Personal Development',
  description: 'Self-paced video courses by Krystalore Crews. Bombshell Bootcamp, Business Bootcamp, Million Dollar Body Academy, meditation, confidence building, and more for entrepreneurs and leaders.',
  keywords: 'online courses, leadership courses, fitness courses, business bootcamp, executive development, Krystalore Crews courses, personal development courses',
  openGraph: {
    title: 'Premium Courses by Krystalore Crews',
    description: 'Transform your leadership with self-paced video courses on fitness, business, confidence, and personal growth.',
    url: 'https://executive-krystalore.vercel.app/courses',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Courses | Leadership, Fitness & Personal Development",
    description: "Self-paced video courses by Krystalore Crews. Bombshell Bootcamp, Business Bootcamp, Million Dollar Body Academy, meditation, confidence building, and more for entrepreneurs and leaders.",
  },
}

function CoursesJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: 'Bombshell Bootcamp',
        description: 'Transform your confidence and leadership presence with this intensive confidence-building program.',
        provider: { '@type': 'Organization', name: 'Crews Beyond Limits' },
        instructor: { '@type': 'Person', name: 'Krystalore Crews' },
      },
      {
        '@type': 'Course',
        name: 'Million Dollar Body Academy',
        description: 'Complete fitness and nutrition program designed for busy executives and leaders.',
        provider: { '@type': 'Organization', name: 'Crews Beyond Limits' },
        instructor: { '@type': 'Person', name: 'Krystalore Crews' },
      },
      {
        '@type': 'Course',
        name: 'Business Bootcamp',
        description: 'Comprehensive business building course for entrepreneurs and aspiring business owners.',
        provider: { '@type': 'Organization', name: 'Crews Beyond Limits' },
        instructor: { '@type': 'Person', name: 'Krystalore Crews' },
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CoursesJsonLd />
      {children}
    </>
  )
}
