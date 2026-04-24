import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0f766e',
};

export const metadata: Metadata = {
  title: "Krystalore Crews | Executive Coaching, Leadership Training, Wellness Retreats & Keynote Speaking",
  description: "Transform your leadership with Krystalore Crews. Executive coaching, corporate training, luxury retreats, keynote speaking & fitness programs. Former NFL cheerleader helps women reclaim confidence.",
  keywords: [
    "executive coaching",
    "leadership training", 
    "keynote speaker",
    "wellness retreats",
    "women's coaching",
    "fitness bootcamp",
    "mindset coaching",
    "business coaching",
    "confidence building",
    "personal development",
    "corporate training",
    "emotional intelligence",
    "team building",
    "Krystalore Crews",
    "NFL cheerleader coach",
    "Puerto Rico retreats",
    "34-minute mindset",
    "bombshell confidence",
    "crews beyond limits",
    "holistic wellness",
    "resilience training",
    "transformation coaching"
  ],
  authors: [{ name: "Krystalore Crews" }],
  creator: "Krystalore Crews",
  publisher: "Crews Beyond Limits",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://krystalore.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://krystalore.com',
    title: 'Krystalore Crews | Executive Coaching, Leadership Training, Wellness Retreats & Keynote Speaking',
    description: 'Transform your leadership with Krystalore Crews. Executive coaching, corporate training, luxury retreats, keynote speaking & fitness programs. Former NFL cheerleader helps women reclaim confidence.',
    siteName: 'Krystalore Crews - Crews Beyond Limits',
    images: [
      {
        url: '/images/scraped/krystalore-profile-opt.jpg',
        width: 1200,
        height: 630,
        alt: 'Krystalore Crews - Executive Coach, Speaker, Author',
      },
      {
        url: '/images/scraped/speaker-stage.jpg',
        width: 1200,
        height: 630,
        alt: 'Krystalore Crews Keynote Speaking',
      },
      {
        url: '/images/retreat/retreat-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Krystalore Crews Wellness Retreats in Puerto Rico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krystalore Crews | Executive Coaching, Leadership Training, Wellness Retreats & Keynote Speaking',
    description: 'Transform your leadership with Krystalore Crews. Executive coaching, corporate training, luxury retreats, keynote speaking & fitness programs. Former NFL cheerleader helps women reclaim confidence.',
    site: '@thecrewscoach',
    creator: '@thecrewscoach',
    images: ['/images/scraped/krystalore-profile-opt.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#0f766e',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'business',
  classification: 'Executive Coaching and Leadership Development',
  referrer: 'origin-when-cross-origin',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon-192x192.png" type="image/png" sizes="192x192" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/images/scraped/hero-bg.png" as="image" type="image/png" />
        <link rel="preload" href="/images/scraped/krystalore-profile-opt.jpg" as="image" type="image/jpeg" />
        
        {/* Additional SEO meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Krystalore Crews" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#0f766e" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        
        {/* Rich Snippets - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Krystalore Crews",
              "jobTitle": "Executive Coach, Leadership Trainer, Keynote Speaker",
              "description": "Former NFL Cheerleader turned Executive Coach and Leadership Trainer specializing in women's empowerment, wellness retreats, and corporate training.",
              "url": "https://krystalore.com",
              "image": "https://krystalore.com/images/scraped/krystalore-profile-opt.jpg",
              "sameAs": [
                "https://facebook.com/krystalore",
                "https://instagram.com/thecrewscoach",
                "https://tiktok.com/@thecrewscoach",
                "https://linkedin.com/in/krystalore-crews",
                "https://youtube.com/user/krystalore",
                "https://pinterest.com/krystalorecrews"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Crews Beyond Limits"
              },
              "alumniOf": "NFL Cheerleader",
              "knowsAbout": [
                "Executive Coaching",
                "Leadership Training",
                "Keynote Speaking",
                "Wellness Coaching",
                "Fitness Training",
                "Team Building",
                "Emotional Intelligence",
                "Personal Development"
              ]
            })
          }}
        />
        
        {/* Rich Snippets - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Crews Beyond Limits",
              "description": "Executive coaching, leadership training, wellness retreats, and keynote speaking services led by Krystalore Crews.",
              "url": "https://krystalore.com",
              "logo": "https://krystalore.com/images/scraped/krystalore-profile-opt.jpg",
              "image": "https://krystalore.com/images/scraped/krystalore-profile-opt.jpg",
              "founder": {
                "@type": "Person",
                "name": "Krystalore Crews"
              },
              "sameAs": [
                "https://facebook.com/krystalore",
                "https://instagram.com/thecrewscoach",
                "https://tiktok.com/@thecrewscoach",
                "https://linkedin.com/in/krystalore-crews",
                "https://youtube.com/user/krystalore",
                "https://pinterest.com/krystalorecrews"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "areaServed": "Worldwide",
              "serviceType": [
                "Executive Coaching",
                "Leadership Training",
                "Keynote Speaking",
                "Wellness Retreats",
                "Corporate Training",
                "Team Building"
              ]
            })
          }}
        />
        
        {/* Rich Snippets - Services Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Executive Coaching and Leadership Development",
              "provider": {
                "@type": "Person",
                "name": "Krystalore Crews"
              },
              "areaServed": "Worldwide",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://krystalore.com",
                "serviceType": "Online and In-Person"
              },
              "category": "Professional Services",
              "description": "Comprehensive executive coaching, leadership training, wellness retreats, and keynote speaking services designed to help women leaders excel in their careers and personal lives."
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}