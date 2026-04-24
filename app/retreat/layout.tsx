import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Women's Wellness Retreat | Revive & Thrive | Luxury Puerto Rico Retreat | Krystalore Crews",
  description: "A 7-day luxury wellness retreat for high-achieving women in Puerto Rico. Transformational coaching, fitness, adventure, spa treatments & private chef at a stunning 12-casita oceanview estate in El Yunque Rainforest. Register, book a call, or apply for scholarship.",
  keywords: "women's retreat, wellness retreat, business retreat for women, luxury retreat Puerto Rico, women's empowerment retreat, executive wellness retreat, transformational coaching retreat, women's health retreat, entrepreneur retreat, leadership retreat for women, self-care retreat, burnout recovery retreat, Caribbean retreat, El Yunque retreat, Krystalore Crews retreat, Revive and Thrive retreat",
  openGraph: {
    title: "Women's Wellness Retreat | Revive & Thrive | Krystalore Crews",
    description: "A 7-day luxury wellness retreat for women who give everything to everyone else. Reset. Reflect. Rise. Puerto Rico.",
    type: 'website',
    url: 'https://krystalore.com/retreat',
    images: [
      {
        url: 'https://krystalore.com/images/retreat/retreat-01.jpg',
        width: 1200,
        height: 675,
        alt: 'Women\'s luxury wellness retreat infinity pool in Puerto Rico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Women's Wellness Retreat | Revive & Thrive",
    description: "A 7-day luxury retreat for high-achieving women ready to reset, reflect, and rise.",
    images: ['https://krystalore.com/images/retreat/retreat-01.jpg'],
  },
  alternates: {
    canonical: 'https://krystalore.com/retreat',
  },
}

export default function RetreatLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
