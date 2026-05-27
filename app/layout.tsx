import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://web-nledesma-data.vercel.app";
const ogImage = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  title: "Nicolás Ledesma — Data & BI Analyst",
  description:
    "Transformo datos operativos en decisiones de negocio. Dashboards, modelos predictivos y automatización para salud, agro e industria.",
  keywords: ["data analyst", "BI", "Power BI", "SQL", "Python", "dashboards"],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Nicolás Ledesma — Data & BI Analyst",
    description:
      "Transformo datos operativos en decisiones de negocio. Dashboards, modelos predictivos y automatización para salud, agro e industria.",
    url: siteUrl,
    siteName: "Nicolás Ledesma",
    images: [{ url: ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolás Ledesma — Data & BI Analyst",
    description: "Transformo datos operativos en decisiones de negocio.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0a0a0a] text-[#ededed] antialiased">
        {children}
      </body>
    </html>
  );
}
