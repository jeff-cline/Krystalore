import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go Live | KRYSTALORE",
  description: "Join Krystalore Crews live for coaching sessions, Q&A, and interactive leadership development.",
  openGraph: {
    title: "Go Live | KRYSTALORE",
    description: "Join Krystalore Crews live for coaching sessions, Q&A, and interactive leadership development.",
    url: "https://krystalore.com/go-live",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Live | KRYSTALORE",
    description: "Join Krystalore Crews live for coaching sessions, Q&A, and interactive leadership development.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
