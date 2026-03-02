import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Explore Jamil Ifat's thoughts on design, strategy, and the intersection of technology and human experience. Deep dives into SEO, web development, and digital marketing.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
