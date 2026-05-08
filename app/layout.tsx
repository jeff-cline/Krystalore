import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BookACallButton from '@/components/BookACallButton'
import SessionProvider from '@/components/providers/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Krystalore Crews — International Speaker, Corporate Host & Wellness Consultant',
    template: '%s | Krystalore Crews',
  },
  description: 'Creating experiences that energize people, elevate culture, and make teams feel seen — then challenge them to rise. International speaker, corporate host, retreat leader, and wellness consultant.',
  keywords: 'Krystalore Crews, keynote speaker, corporate host, corporate wellness, retreat leader, leadership training, emotional intelligence, veteran speaker, women\'s empowerment, somatic coaching, resilience speaker',
  metadataBase: new URL('https://krystalore.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Krystalore Crews — International Speaker, Corporate Host & Wellness Consultant',
    description: 'Creating experiences that energize people, elevate culture, and make teams feel seen — then challenge them to rise.',
    url: 'https://krystalore.com',
    siteName: 'Krystalore Crews',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og/krystalore-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Krystalore Crews on stage — international speaker and corporate host',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krystalore Crews — International Speaker & Corporate Host',
    description: 'Creating experiences that energize people, elevate culture, and make teams feel seen — then challenge them to rise.',
    images: ['/og/krystalore-og.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#34c5c5',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://krystalore.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-dark-50 text-gray-900 min-h-screen`}>
        <SessionProvider>
          {children}
          <BookACallButton />
        </SessionProvider>
      </body>
    </html>
  )
}
