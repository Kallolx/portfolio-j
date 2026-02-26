import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

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
