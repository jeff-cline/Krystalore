import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gypsy Tours by Krystalore | Caribbean Cruise Shore Excursions - Virgin Voyages Valiant Lady March 2026',
  description: 'Curated Caribbean cruise shore excursion tours by Krystalore Crews for Virgin Voyages Valiant Lady, March 21-28, 2026. Authentic adventures in San Juan, Tortola, Barbados, St. Lucia, Antigua & St. Maarten with our unique hangover energy rating system.',
  keywords: 'Caribbean cruise tours, Virgin Voyages excursions, Valiant Lady March 2026, shore excursions, Tortola tours, Barbados adventures, St. Lucia activities, Antigua experiences, St. Maarten tours, cruise port guides, Caribbean travel, Krystalore Crews',
  authors: [{ name: 'Krystalore Crews' }],
  creator: 'Krystalore Crews',
  publisher: 'Executive Krystalore',
  
  openGraph: {
    title: 'Gypsy Tours by Krystalore | Caribbean Cruise Shore Excursions',
    description: 'Curated Caribbean adventures for Virgin Voyages Valiant Lady March 2026. From Fresh & Fierce to Ship Zombie - we have the perfect tour for every energy level!',
    url: 'https://krystalore.com/gypsy-tours',
    siteName: 'Executive Krystalore',
    images: [
      {
        url: '/images/scraped/krystalore-profile-opt.jpg',
        width: 1200,
        height: 630,
        alt: 'Krystalore Crews - Your Gypsy Tour Guide',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Gypsy Tours by Krystalore | Caribbean Cruise Adventures',
    description: 'Authentic Caribbean shore excursions for Virgin Voyages Valiant Lady March 2026. Curated by expert guide Krystalore Crews.',
    images: ['/images/scraped/krystalore-profile-opt.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  category: 'travel',
  classification: 'Travel & Tourism',
  
  other: {
    'geo.region': 'Caribbean',
    'geo.placename': 'Caribbean Sea',
    'geo.position': '18.2208;-66.5901',
    'ICBM': '18.2208,-66.5901',
  },
}

export default function GypsyToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}