import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { organizationJsonLd } from "@/lib/schema";
import { brand, siteUrl } from "@/lib/site";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | ${brand.h1}`,
    template: `%s | ${brand.name}`,
  },
  description: brand.tagline,
  applicationName: brand.name,
  authors: [{ name: brand.founder }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: brand.name,
    title: `${brand.name} | ${brand.h1}`,
    description: brand.tagline,
  },
  twitter: {
    card: "summary",
    title: `${brand.name} | ${brand.h1}`,
    description: brand.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-navy font-sans text-ink antialiased">
        <JsonLd data={organizationJsonLd()} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
