import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Aligned Is Your Life? | Stress, Energy & Life Alignment Check-In',
  description: 'Is your health supporting the life you\'re building? Take this free Stress, Energy & Life Alignment Check-In for high performers. Get personalized insights and practical tips.',
  openGraph: {
    title: "How Aligned Is Your Life? | Stress, Energy & Life Alignment Check-In",
    description: "Is your health supporting the life you're building? Take this free Stress, Energy & Life Alignment Check-In for high performers.",
    url: "https://krystalore.com/alignment",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Aligned Is Your Life? | Stress, Energy & Life Alignment Check-In",
    description: "Is your health supporting the life you're building? Take this free Stress, Energy & Life Alignment Check-In for high performers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
