"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import StripeBadge from "./StripeBadge";
import StatCard from "./StatCard";

const stats = [
  { number: "15k+", label: "Keywords Ranked in Top 3" },
  { number: "100+", label: "Web Applications Deployed" },
  { number: "98%", label: "Lighthouse Performance Score" },
  { number: "500+", label: "Technical SEO Audits" },
  { number: "10+", label: "Years of Technical Experience" },
];

export default function Statistics() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="px-3 md:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="p-4 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">
            {/* Left Side - Badge and Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badge and Title */}
              <div className="flex items-start gap-3">
                <StripeBadge
                  color="#0046FF"
                  opacity={1}
                  gap={2.5}
                  strokeWidth={1.5}
                  className="w-24 h-1.5"
                />
                <h2 className="-mt-2 text-md font-mono font-medium tracking-tight text-[#0046FF] uppercase">
                  STATISTICS
                </h2>
              </div>

              {/* Description */}
              <p className="text-[#0046FF] font-mono text-base leading-relaxed max-w-[30ch]">
                I measure success through core web vitals, organic rankings, and
                technical performance metrics that translate into real business
                growth.
              </p>
            </motion.div>

            {/* Right Side - Stacking Cards */}
            <div ref={container} className="space-y-0">
              {stats.map((stat, index) => {
                const targetScale = 1 - (stats.length - index - 1) * 0.05;
                return (
                  <StatCard
                    key={index}
                    index={index}
                    stat={stat}
                    progress={scrollYProgress}
                    range={[index * 0.2, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
