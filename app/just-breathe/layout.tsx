import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Just Breathe — Guided Meditations by Krystalore Crews | Beyond Limits Meditation Library",
  description: "A guided meditation library by Krystalore Crews offering grounding, clarity, confidence, healing, and next-level transformation. Short, powerful sessions for beginners and experienced meditators.",
  keywords: "guided meditation, krystalore crews meditation, just breathe meditation, beyond limits meditation, mindfulness, healing meditation, confidence meditation, rebirth series, activation series, awakening series, veteran meditation",
  openGraph: {
    title: "Just Breathe — Guided Meditations by Krystalore Crews",
    description: "Short, powerful guided meditations for grounding, clarity, confidence, and healing. 15+ episodes in the Beyond Limits Meditation Library.",
    url: "https://krystalore.com/just-breathe",
    siteName: "Krystalore Crews",
    type: "website",
    images: [{ url: "https://krystalore.com/images/just-breathe/cover.jpg", width: 640, height: 640, alt: "Just Breathe: A Beyond Limits Meditation Library with Krystalore Crews" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Breathe — Guided Meditations by Krystalore Crews",
    description: "Short, powerful guided meditations for grounding, clarity, confidence, and healing.",
    images: ["https://krystalore.com/images/just-breathe/cover.jpg"],
  },
  alternates: { canonical: "https://krystalore.com/just-breathe" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
