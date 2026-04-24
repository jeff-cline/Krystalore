import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | KRYSTALORE",
  description: "Sign in to your Krystalore Crews executive coaching platform account.",
  openGraph: {
    title: "Login | KRYSTALORE",
    description: "Sign in to your Krystalore Crews executive coaching platform account.",
    url: "https://krystalore.com/login",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | KRYSTALORE",
    description: "Sign in to your Krystalore Crews executive coaching platform account.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
