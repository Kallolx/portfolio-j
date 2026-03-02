import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jamilifat.com"),
  title: {
    default: "Jamil Ifat | SEO Specialist & Webapp Developer",
    template: "%s | Jamil Ifat",
  },
  description:
    "Building high-performance web applications engineered for search visibility and technical excellence. SEO Specialist and Full-Stack Developer driven by data and precision.",
  keywords: [
    "SEO Specialist",
    "Webapp Developer",
    "Technical SEO",
    "Full-Stack Developer",
    "Next.js Developer",
    "Search Engine Optimization",
    "React Developer",
    "Jamil Ifat",
  ],
  authors: [{ name: "Jamil Ifat" }],
  creator: "Jamil Ifat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jamilifat.com",
    title: "Jamil Ifat | SEO Specialist & Webapp Developer",
    description:
      "High-performance web applications engineered for search visibility and technical excellence.",
    siteName: "Jamil Ifat Portfolio",
    images: [
      {
        url: "/img/profile.png",
        width: 1200,
        height: 630,
        alt: "Jamil Ifat Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamil Ifat | SEO Specialist & Webapp Developer",
    description:
      "High-performance web applications engineered for search visibility and technical excellence.",
    images: ["/img/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className="min-h-screen bg-background">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
