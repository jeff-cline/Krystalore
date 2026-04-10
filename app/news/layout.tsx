import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | KRYSTALORE",
  description: "Latest news and updates from Krystalore Crews on executive coaching, leadership, and personal development.",
  openGraph: {
    title: "News | KRYSTALORE",
    description: "Latest news and updates from Krystalore Crews on executive coaching, leadership, and personal development.",
    url: "https://krystalore.com/news",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News | KRYSTALORE",
    description: "Latest news and updates from Krystalore Crews on executive coaching, leadership, and personal development.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
