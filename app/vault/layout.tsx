import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vault | KRYSTALORE",
  description: "Access exclusive content in the Krystalore Crews vault - premium coaching resources and materials.",
  openGraph: {
    title: "Vault | KRYSTALORE",
    description: "Access exclusive content in the Krystalore Crews vault - premium coaching resources and materials.",
    url: "https://krystalore.com/vault",
    siteName: "Krystalore Crews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vault | KRYSTALORE",
    description: "Access exclusive content in the Krystalore Crews vault - premium coaching resources and materials.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
