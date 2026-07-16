import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bootcamp | KRYSTALORE",
  description: "Join the Krystalore Crews bootcamp program for intensive personal and professional transformation.",
  openGraph: {
    title: "Bootcamp | KRYSTALORE",
    description: "Join the Krystalore Crews bootcamp program for intensive personal and professional transformation.",
    url: "https://krystalore.com/bootcamp",
    siteName: "Krystalore Crews",
    type: "website",
    images: [{ url: "https://krystalore.com/images/bootcamp/beyond-limits-bootcamp-logo.png", width: 500, height: 500, alt: "Beyond Limits Bootcamp" }],
  },
  twitter: {
    card: "summary",
    title: "Bootcamp | KRYSTALORE",
    description: "Join the Krystalore Crews bootcamp program for intensive personal and professional transformation.",
    images: ["https://krystalore.com/images/bootcamp/beyond-limits-bootcamp-logo.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
