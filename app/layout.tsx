import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BookACallButton from '@/components/BookACallButton'
import SessionProvider from '@/components/providers/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Krystalore Crews | Executive Coaching, Leadership & Transformation Platform',
    template: '%s | Krystalore Crews',
  },
  description: 'Executive coaching, fitness transformation, and personal development platform by Krystalore Crews. Leadership courses, self-assessment quizzes, books, and live coaching for entrepreneurs, veterans, and corporate leaders.',
  keywords: 'executive coaching, leadership development, Krystalore Crews, personal transformation, fitness coaching, life coaching, military spouse, veteran coaching, business coaching, wellness',
  metadataBase: new URL('https://krystalore.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Krystalore Crews | Executive Coaching & Leadership Platform',
    description: 'Transform your leadership journey with executive coaching, fitness, courses, and personal development by Krystalore Crews.',
    url: 'https://krystalore.com',
    siteName: 'Krystalore Crews Executive Platform',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/books/road-to-resilience-book-cover.png',
        width: 1200,
        height: 630,
        alt: 'Krystalore Crews Executive Coaching Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krystalore Crews | Executive Coaching & Leadership Platform',
    description: 'Transform your leadership journey with executive coaching, fitness, courses, and personal development.',
    images: ['/images/books/road-to-resilience-book-cover.png'],
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
