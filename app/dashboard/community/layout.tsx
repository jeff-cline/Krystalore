import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | KRYSTALORE",
  description: "Connect with fellow members in the Krystalore community — share wins, ask questions, and grow together.",
  openGraph: {
    title: "Community | KRYSTALORE",
    description: "Connect with fellow members in the Krystalore community — share wins, ask questions, and grow together.",
    url: "https://krystalore.com/dashboard/community",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community | KRYSTALORE",
    description: "Connect and grow with the Krystalore community.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
