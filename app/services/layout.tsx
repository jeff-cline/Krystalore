import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | KRYSTALORE",
  description: "Executive coaching services by Krystalore Crews - leadership development, personal transformation, and business coaching.",
  openGraph: {
    title: "Services | KRYSTALORE",
    description: "Executive coaching services by Krystalore Crews - leadership development, personal transformation, and business coaching.",
    url: "https://krystalore.com/services",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | KRYSTALORE",
    description: "Executive coaching services by Krystalore Crews - leadership development, personal transformation, and business coaching.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
