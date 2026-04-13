import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Stream | KRYSTALORE",
  description: "Watch Krystalore Crews live — coaching sessions, fitness classes, and interactive leadership development in real-time.",
  openGraph: {
    title: "Live Stream | KRYSTALORE",
    description: "Watch Krystalore Crews live — coaching sessions, fitness classes, and interactive leadership development in real-time.",
    url: "https://krystalore.com/live",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Stream | KRYSTALORE",
    description: "Watch Krystalore Crews live — coaching, fitness, and leadership in real-time.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
