"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface CaseStudyCardProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function CaseStudyCard({ 
  project, 
  index, 
  progress, 
  range, 
  targetScale 
}: CaseStudyCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const bgColor = index === 1 ? "bg-[#FF8C42]" : "bg-[#0046FF]";
  const borderColor = index === 1 ? "border-[#FF8C42]/30" : "border-[#0046FF]/30";

  return (
    <div
      ref={container}
      className="sticky top-30 flex items-center justify-center min-h-[600px] py-12"
      style={{
        paddingTop: `${index * 50}px`,
      }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={`relative w-full overflow-hidden rounded-2xl ${bgColor} ${borderColor} origin-top`}
      >
      <div className="relative flex flex-col lg:flex-row h-full">
        {/* Left - Text content */}
        <div className="relative flex flex-col justify-between w-full lg:w-2/3 p-8 lg:p-10 z-10">
          {/* Tags */}
          <div className="flex gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full border border-white/30 text-white text-sm font-mono">
              {project.year}
            </span>
            <span className="px-4 py-1.5 rounded-full border border-white/30 text-white text-sm font-mono">
              {project.projectType}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-white text-3xl lg:text-5xl leading-[1.2] tracking-tight mb-8 flex-1">
            {project.title}
          </h3>

          {/* SEE PROJECT button */}
          <div className="flex items-center gap-2 group cursor-pointer w-fit">
            <span className="font-mono text-sm uppercase tracking-wider text-white">
              See Project
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              className="text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Right - Image (inside card with rounded corners) */}
        <div className="relative w-full lg:w-1/3 h-96 lg:h-96 flex items-center justify-center p-6">
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}
