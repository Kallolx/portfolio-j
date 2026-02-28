"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import StripeBadge from "./StripeBadge";
import CaseStudyCard from "./CaseStudyCard";
import { projects } from "@/data/projects";

export default function CaseStudies() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const displayProjects = projects;

  return (
    <section className="px-3 md:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* White Background Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-3 md:p-6 lg:p-16"
        >
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-2 lg:p-8 mb-10 md:mb-4 lg:gap-12 mt-4 md:mt-0">
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
                CASE STUDIES
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="font-mono text-md leading-relaxed text-primary lg:col-span-2 -mt-2">
              <p>
                I start each project by uncovering its story—listening,
                researching, and exploring the details that give it meaning.
                Then I craft an aesthetic process where strategy shapes
                structure and design brings the story to life, creating
                experiences that connect and endure.
              </p>
            </div>
          </div>

          {/* Project Cards with Scroll Animation */}
          <div ref={container} className="relative mt-18 lg:mt-0">
            {displayProjects.map((project, index) => {
              const targetScale =
                1 - (displayProjects.length - index - 1) * 0.05;
              return (
                <CaseStudyCard
                  key={project.id}
                  project={project}
                  index={index}
                  progress={scrollYProgress}
                  range={[index * (1 / displayProjects.length), 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
