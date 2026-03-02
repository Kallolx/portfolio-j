import type { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore a curated selection of Jamil Ifat's work where strategy meets aesthetic excellence. High-impact technical SEO projects and high-performance web applications.",
  alternates: {
    canonical: "/case-study",
  },
};

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}
