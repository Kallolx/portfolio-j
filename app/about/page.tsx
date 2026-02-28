"use client";

import LogoLoop from "@/components/LogoLoop";
import StripeBadge from "@/components/StripeBadge";
import StripePattern from "@/components/StripePattern";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const clientLogos = [
  { id: "nextjs", title: "Next.js" },
  { id: "react", title: "React" },
  { id: "node", title: "Node.js" },
  { id: "ahrefs", title: "Ahrefs" },
  { id: "screamingfrog", title: "Screaming Frog" },
  { id: "lighthouse", title: "Lighthouse" },
  { id: "searchconsole", title: "Search Console" },
  { id: "googleanalytics", title: "Analytics" },
  { id: "tailwind", title: "Tailwind" },
  { id: "typescript", title: "TypeScript" },
  { id: "postgresql", title: "PostgreSQL" },
  { id: "mongodb", title: "MongoDB" },
  { id: "docker", title: "Docker" },
  { id: "github", title: "GitHub" },
  { id: "wordpress", title: "WordPress" },
];

export default function About() {
  const headingText = "Who am i & my vision";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    headingText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, headingText.length, {
      type: "tween",
      duration: 1.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1.5,
    });
    return controls.stop;
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto px-3 md:px-6 pt-32 md:pt-48 pb-12 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-8 md:gap-12 lg:gap-24 items-start">
          {/* Left Side: Heading */}
          <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tighter leading-none transition-all">
            About Me
          </h1>

          {/* Right Side: Content & Quote */}
          <div className="relative">
            <div className="flex flex-col gap-8 max-w-lg relative z-10">
              {/* Visual Photo Box - currently solid primary color as requested */}
              <div className="w-28 h-34 bg-primary rounded-2xl flex items-center justify-center overflow-hidden relative">
                <Image
                  src="/img/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description Text */}
              <p className="font-mono text-primary text-md leading-relaxed tracking-tight">
                I believe that technical excellence is the foundation of digital
                growth. My focus is building scalable web applications that are
                engineered for maximum search visibility and user performance.
              </p>
            </div>

            {/* Styled Quote Icon from Testimonials - Stroke only, no fill */}
            <div className="absolute top-1/3 right-10 -translate-y-1/2 select-none pointer-events-none opacity-40">
              <svg
                width="80"
                height="60"
                viewBox="0 0 80 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M18 28C18 18 24 10 36 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 28H36V52H18V28Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 28C44 18 50 10 62 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M44 28H62V52H44V28Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Who I am & My Vision */}
      <section className="bg-primary py-16 md:py-24 px-3 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-center">
            {/* Left: Image Box */}
            <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
              <motion.div className="font-mono font-semibold text-white text-lg uppercase tracking-tight flex items-center h-5">
                <motion.span>{displayText}</motion.span>
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    ease: "linear",
                  }}
                  className="inline-block w-2.5 h-5 bg-white/80 ml-2"
                />
              </motion.div>

              <div className="w-80 aspect-[4/5] bg-white rounded-2xl flex items-center justify-center p-4 relative overflow-hidden">
                <Image
                  src="/img/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Text & Animated Divider */}
            <div className="space-y-6 md:space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="font-mono text-white text-base leading-relaxed opacity-90 max-w-2xl">
                I am an SEO Specialist and Full-Stack Developer driven by data
                and technical precision. I build high-performance web
                applications that blend seamless functionality with advanced
                search engine optimization. For me, a successful website is one
                that not only works perfectly but is found by the right audience
                at the right time.
              </p>

              <StripeBadge
                color="#ffffff"
                opacity={1}
                gap={3}
                strokeWidth={1.5}
                className="w-full h-6"
              />

              <p className="font-mono text-white text-base leading-relaxed opacity-90">
                My vision is to bridge the gap between technical development and
                organic growth marketing. I believe every business deserves a
                digital ecosystem that scales effortlessly and performs
                exceptionally in search results. By integrating technical SEO
                into the core architecture of web applications, I create
                long-term value that drives consistent traffic and measurable
                business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Statistics */}
      <section className="bg-background py-16 md:py-24 px-3 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
            {/* Left Side - Title with Badge */}
            <div className="flex items-start gap-3">
              <StripeBadge
                color="#002fb1"
                opacity={1}
                gap={2.5}
                strokeWidth={1.5}
                className="w-24 h-1.5"
              />
              <h2 className="-mt-2 text-md font-mono font-medium tracking-tight text-[#0046FF] uppercase">
                STATISTICS
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="font-mono text-md leading-relaxed text-primary lg:col-span-2 -mt-2">
              <p>
                I measure success through core web vitals, organic rankings, and
                technical performance metrics that translate into real business
                growth.
              </p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="relative mt-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 border-collapse">
              {/* Card 1 */}
              <div className="border border-primary/20 bg-background/50 rounded-2xl p-4 md:p-8 aspect-square flex flex-col justify-between hover:bg-white/50 transition-colors relative z-0">
                <span className="font-serif text-3xl md:text-5xl text-primary tracking-tight">
                  15k+
                </span>
                <span className="font-mono text-primary text-[10px] md:text-sm font-medium pr-2 md:pr-8">
                  Keywords Ranked in Top 3
                </span>
              </div>

              {/* Card 2 */}
              <div className="border border-primary/20 bg-background/50 rounded-2xl p-4 md:p-8 aspect-square flex flex-col justify-between hover:bg-white/50 transition-colors relative z-0">
                <span className="font-serif text-3xl md:text-5xl text-primary tracking-tight">
                  100+
                </span>
                <span className="font-mono text-primary text-[10px] md:text-sm font-medium pr-2 md:pr-8">
                  Web Applications Deployed
                </span>
              </div>

              {/* Card 4 */}
              <div className="border border-primary/20 bg-background/50 rounded-2xl p-4 md:p-8 aspect-square flex flex-col justify-between hover:bg-white/50 transition-colors relative z-0">
                <span className="font-serif text-3xl md:text-5xl text-primary tracking-tight">
                  98%
                </span>
                <span className="font-mono text-primary text-[10px] md:text-sm font-medium pr-2 md:pr-8">
                  Lighthouse Performance Score
                </span>
              </div>

              {/* Card 5 */}
              <div className="border border-primary/20 bg-background/50 rounded-2xl p-4 md:p-8 aspect-square flex flex-col justify-between hover:bg-white/50 transition-colors relative z-0">
                <span className="font-serif text-3xl md:text-5xl text-primary tracking-tight">
                  10+
                </span>
                <span className="font-mono text-primary text-[10px] md:text-sm font-medium pr-2 md:pr-8">
                  Technical SEO Audits
                </span>
              </div>

              {/* Card 6 */}
              <div className="border border-primary/20 bg-background/50 rounded-2xl p-4 md:p-8 aspect-square flex flex-col justify-between hover:bg-white/50 transition-colors relative z-0">
                <span className="font-serif text-3xl md:text-5xl text-primary tracking-tight">
                  120+
                </span>
                <span className="font-mono text-primary text-[10px] md:text-sm font-medium pr-2 md:pr-8">
                  Projects Completed
                </span>
              </div>

              {/* Card 7 */}
              <div className="border border-primary/20 bg-background/50 rounded-2xl p-4 md:p-8 aspect-square flex flex-col justify-between hover:bg-white/50 transition-colors relative z-0">
                <span className="font-serif text-3xl md:text-5xl text-primary tracking-tight">
                  75+
                </span>
                <span className="font-mono text-primary text-[10px] md:text-sm font-medium pr-2 md:pr-8">
                  Happy Clients Worldwide
                </span>
              </div>
            </div>

            {/* Desktop Sparkle Icons (3 columns) */}
            <div className="hidden lg:block">
              {[
                { left: "33.33%", delay: 0.2 },
                { left: "66.66%", delay: 0.3 },
              ].map((pos, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: pos.delay }}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none z-10"
                  style={{ left: pos.left }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.1 10.1 8.8 12 2Z"
                      fill="#acc4ff"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Mobile Sparkle Icons (2 columns) */}
            <div className="lg:hidden">
              {[
                { top: "33.33%", delay: 0.2 },
                { top: "66.66%", delay: 0.3 },
              ].map((pos, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: pos.delay }}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none z-10"
                  style={{ top: pos.top }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.1 10.1 8.8 12 2Z"
                      fill="#acc4ff"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Loop Section */}
        <div className="h-24 relative overflow-hidden bg-background mt-12 md:mt-24">
          <StripePattern
            color="#0046FF"
            opacity={0.3}
            gap={6}
            strokeWidth={1.5}
          />
          <div className="absolute inset-0 flex items-center">
            <LogoLoop
              logos={clientLogos}
              speed={18}
              direction="left"
              logoHeight={34}
              gap={48}
              pauseOnHover
              scaleOnHover
              fadeOut
              ariaLabel="Tools and platforms"
            />
          </div>
        </div>
      </section>

      {/* New Section: Awards */}
      <section className="bg-background py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 md:gap-12 lg:gap-32 mb-12 md:mb-24">
            {/* Left Side - Title with Badge */}
            <div className="flex items-start gap-3">
              <StripeBadge
                color="#002fb1"
                opacity={1}
                gap={2.5}
                strokeWidth={1.5}
                className="w-24 h-1.5"
              />
              <h2 className="-mt-2 text-md font-mono font-medium tracking-tight text-[#0046FF] uppercase">
                RECOGNITION
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="font-mono text-md leading-relaxed text-primary -mt-2">
              <p className="max-w-2xl">
                Recognition reflects a commitment to technical excellence,
                performance optimization, and the success of digital products in
                a competitive search landscape.
              </p>
            </div>
          </div>

          {/* Awards List */}
          <div className="flex flex-col">
            {/* Top Line */}
            <div className="w-full">
              <div className="h-[1.5px] bg-primary/20 w-full" />
            </div>

            {/* Award Item 1: 2025 */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 py-12 items-start group">
              <span className="font-mono text-primary/70 text-base mt-1">
                2025
              </span>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 text-[#0046FF] font-bold text-sm tracking-tight uppercase font-mono">
                  Global Search Awards
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[28px] text-primary tracking-tight">
                    Best SEO Strategy (Retail)
                  </h3>
                  <p className="font-mono text-primary text-md leading-relaxed max-w-xl opacity-80">
                    Recognized for a comprehensive technical SEO overhaul that
                    resulted in a 150% increase in organic revenue for an
                    international e-commerce platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Line */}
            <div className="w-full">
              <div className="h-[1.5px] bg-primary/20 w-full" />
            </div>

            {/* Award Item 2: 2024 */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 py-12 items-start group">
              <span className="font-mono text-primary/70 text-base mt-1">
                2024
              </span>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 text-[#0046FF] font-bold text-sm tracking-tight uppercase font-mono">
                  Upwork Engineering
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[28px] text-primary tracking-tight">
                    Full-Stack Technical Excellence
                  </h3>
                  <p className="font-mono text-primary text-md leading-relaxed max-w-xl opacity-80">
                    Honoured for the architecture and deployment of a high-load
                    SaaS application with 99.9% uptime and perfect Lighthouse
                    scores.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Line */}
            <div className="w-full">
              <div className="h-[1.5px] bg-primary/20 w-full" />
            </div>

            {/* Award Item 3: 2023 */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 py-12 items-start group">
              <span className="font-mono text-primary/70 text-base mt-1">
                2023
              </span>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 text-[#0046FF] font-bold text-sm tracking-tight uppercase font-mono">
                  Google Developers
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[28px] text-primary tracking-tight">
                    Core Web Vitals Specialist
                  </h3>
                  <p className="font-mono text-primary text-md leading-relaxed max-w-xl opacity-80">
                    Awarded for performance optimization across a network of 50+
                    high-traffic publishers, achieving straight-line green
                    vitals.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Line */}
            <div className="w-full">
              <div className="h-[1.5px] bg-primary/20 w-full" />
            </div>

            {/* Award Item 4: 2022 */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 py-12 items-start group">
              <span className="font-mono text-primary/70 text-base mt-1">
                2022
              </span>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 text-[#0046FF] font-bold text-sm tracking-tight uppercase font-mono">
                  Technical SEO Summit
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[28px] text-primary tracking-tight">
                    Innovative Web Architecture
                  </h3>
                  <p className="font-mono text-primary text-md leading-relaxed max-w-xl opacity-80">
                    Recognized for pioneering a headless CMS architecture that
                    balanced complex data relationships with extreme client-side
                    speed.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Line */}
            <div className="w-full">
              <div className="h-[1.5px] bg-primary/20 w-full" />
            </div>

            {/* Award Item 5: 2021 */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 py-12 items-start group">
              <span className="font-mono text-primary/70 text-base mt-1">
                2021
              </span>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 text-[#0046FF] font-bold text-sm tracking-tight uppercase font-mono">
                  Freelancer Innovation
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[28px] text-primary tracking-tight">
                    Best Emerging Technical Lead
                  </h3>
                  <p className="font-mono text-primary text-md leading-relaxed max-w-xl opacity-80">
                    Selected for consistent delivery of scalable digital
                    foundations for rapidly growing startups.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Bottom Line */}
            <div className="w-full">
              {/* Static line for mobile */}
              <div className="h-[1px] bg-primary/20 w-full md:hidden" />
              {/* Animated line for desktop */}
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-[1px] bg-primary/20 hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <div className="max-w-5xl mx-auto pt-12">
        <Contact />
      </div>
    </>
  );
}
