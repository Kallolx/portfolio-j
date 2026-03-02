import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jamil Ifat | SEO Specialist & Webapp Developer",
  description:
    "Building high-performance web applications engineered for search visibility and technical excellence. SEO Specialist and Full-Stack Developer driven by data and precision.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <About />
      <Statistics />
      <Testimonials />
      <Services />
      <Blogs limit={2} />
      <div className="pt-14 pb-20">
        <Contact />
      </div>
    </>
  );
}
