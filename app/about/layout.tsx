import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | KRYSTALORE",
  description: "Learn about Krystalore Crews - executive coach, author, and leadership expert transforming lives through coaching and personal development.",
  openGraph: {
    title: "About | KRYSTALORE",
    description: "Learn about Krystalore Crews - executive coach, author, and leadership expert transforming lives through coaching and personal development.",
    url: "https://krystalore.com/about",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | KRYSTALORE",
    description: "Learn about Krystalore Crews - executive coach, author, and leadership expert transforming lives through coaching and personal development.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
