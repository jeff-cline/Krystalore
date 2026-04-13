import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Mastery Checkout — Krystalore Crews",
  description: "Enroll in Health Mastery Group Coaching. Weekly coaching calls, fitness systems, accountability, and community for entrepreneurs and leaders.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Health Mastery Checkout — Krystalore Crews",
    description: "Enroll in Health Mastery Group Coaching — reclaim your energy and lead from the inside out.",
    url: "https://krystalore.com/health-mastery/checkout",
    siteName: "Krystalore Crews",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
