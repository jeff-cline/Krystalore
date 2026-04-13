import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Krystalore Crews | Merch, Gear, Supplements & Collaborations",
  description: "Shop Crews Beyond Limits merch, workout tanks, supplements, fitness gear, and brand collaborations. Hand-picked by Krystalore Crews for leaders who train hard and live bold.",
  keywords: "krystalore crews shop, crews beyond limits merch, workout tank tops, fitness gear, EPN nutrition, savvi workout gear, fighter friday gloves, brand collaborations, executive coaching merch",
  openGraph: {
    title: "Shop — Krystalore Crews",
    description: "Crews Beyond Limits merch, hand-picked fitness gear, supplements, and brand collaborations.",
    url: "https://krystalore.com/shop",
    siteName: "Krystalore Crews",
    type: "website",
    images: [{ url: "https://krystalore.com/images/shop/merch-banner.webp", width: 1200, height: 630, alt: "Krystalore Crews Shop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop — Krystalore Crews",
    description: "Merch, gear, supplements, and collaborations — hand-picked by Krystalore.",
    images: ["https://krystalore.com/images/shop/merch-banner.webp"],
  },
  alternates: { canonical: "https://krystalore.com/shop" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
