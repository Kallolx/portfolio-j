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
  title: "Jamil Ifat - Portfolio",
  description: "Portfolio of Jamil Ifat",
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
