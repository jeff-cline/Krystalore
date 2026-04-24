import type { Metadata } from "next";
import { getCmsMeta } from '@/lib/cms-meta';

const defaults: Metadata = {
  title: "Shop — Krystalore Crews | Merch, Gear, Supplements & Collaborations",
  description:
    "Shop Crews Beyond Limits merch, workout tanks, supplements, fitness gear, and brand collaborations. Hand-picked by Krystalore Crews for leaders who train hard and live bold.",
  keywords:
    "krystalore crews shop, crews beyond limits merch, workout tank tops, fitness gear, EPN nutrition, savvi workout gear, fighter friday gloves, brand collaborations, executive coaching merch",
  openGraph: {
    title: "Shop — Krystalore Crews",
    description:
      "Shop books, courses, and resources by Krystalore Crews for personal and professional growth.",
    url: "https://krystalore.com/shop",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop — Krystalore Crews",
    description:
      "Shop books, courses, and resources by Krystalore Crews for personal and professional growth.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return getCmsMeta('/shop', defaults);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
