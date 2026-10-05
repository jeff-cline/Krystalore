import { Metadata } from 'next'

// The root template appends " | Krystalore Crews" to the page title; social cards carry the full name.
const pageTitle = "The Runner's Wall | Virtual Running Group & Race Coaching"
const title = `${pageTitle} | Krystalore Crews`
const description =
  'Train for your 5K, half or full marathon with Krystalore Crews. A 3 to 6 month virtual running program with a plan built for your schedule, nutrition tips, group accountability and VIP race-day celebrations. Walkers welcome.'
const url = 'https://krystalore.com/rungroup'
const image = 'https://krystalore.com/images/rungroup/runners-wall-og.jpg'

export const metadata: Metadata = {
  title: pageTitle,
  description,
  keywords: [
    'running group', 'virtual running program', 'marathon coach', 'half marathon training', '5K training plan',
    'run walk program', 'Crews Beyond Limits', "Runner's Wall", 'Krystalore Crews', 'race coaching',
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'website',
    url,
    siteName: 'Krystalore Crews',
    images: [{ url: image, width: 1200, height: 630, alt: "Krystalore Crews and the Crews Beyond Limits running crew wearing their race medals" }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
