import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
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


export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/health-mastery/checkout', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
