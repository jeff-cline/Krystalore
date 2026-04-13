import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcasts by Krystalore Crews — The Krystal Clear Life, Your Next Mission & Monday Motivation",
  description: "Listen to Krystalore Crews on The Krystal Clear Life Podcast, Your Next Mission (veteran transitions), and Monday Motivation LIVE. Clarity, confidence, and connection in every episode.",
  keywords: "krystalore crews podcast, krystal clear life podcast, your next mission podcast, monday motivation live, veteran podcast, leadership podcast, self help podcast, military spouse podcast, motivation podcast",
  openGraph: {
    title: "Podcasts by Krystalore Crews",
    description: "Three shows: The Krystal Clear Life, Your Next Mission, and Monday Motivation LIVE. Clarity, confidence, and connection.",
    url: "https://krystalore.com/podcasts",
    siteName: "Krystalore Crews",
    type: "website",
    images: [{ url: "https://krystalore.com/images/podcast/krystal-clear-life.png", width: 1200, height: 1200, alt: "The Krystal Clear Life Podcast by Krystalore Crews" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podcasts by Krystalore Crews",
    description: "The Krystal Clear Life, Your Next Mission & Monday Motivation LIVE",
    images: ["https://krystalore.com/images/podcast/krystal-clear-life.png"],
  },
  alternates: { canonical: "https://krystalore.com/podcasts" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
