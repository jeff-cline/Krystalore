import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | KRYSTALORE",
  description: "Shop books, courses, and resources by Krystalore Crews for personal and professional growth.",
  openGraph: {
    title: "Shop | KRYSTALORE",
    description: "Shop books, courses, and resources by Krystalore Crews for personal and professional growth.",
    url: "https://krystalore.com/shop",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | KRYSTALORE",
    description: "Shop books, courses, and resources by Krystalore Crews for personal and professional growth.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
