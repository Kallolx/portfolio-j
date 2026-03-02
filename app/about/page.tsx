import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jamil Ifat, an SEO Specialist and Full-Stack Developer dedicated to building high-performance web applications and driving digital growth through technical precision.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
