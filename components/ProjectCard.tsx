"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

const INTERVAL = 4500;

export default function ProjectCard() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(elapsed / INTERVAL, 1);
      setProgress(pct);
      if (pct < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setIndex((prev) => (prev + 1) % projects.length);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index]);

  const project = projects[index];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          className="absolute inset-0 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {/* ── Text content ───────────────────────────── */}
          <div className="relative flex flex-col justify-between w-[55%] md:w-[60%] h-full p-4 md:p-8 z-10 pr-2 md:pr-8">
            {/* Title lines */}
            <div className="flex-1 flex items-start md:items-center">
              <div className="overflow-hidden">
                {project.title
                  .split(" ")
                  .reduce<string[][]>((groups, word, i) => {
                    const lineIdx = Math.floor(i / 3);
                    if (!groups[lineIdx]) groups[lineIdx] = [];
                    groups[lineIdx].push(word);
                    return groups;
                  }, [])
                  .map((lineWords, lineIdx) => (
                    <div key={lineIdx} className="overflow-hidden">
                      <motion.p
                        initial={{ y: 14, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: lineIdx * 0.07,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="font-serif text-[var(--primary)] text-xl md:text-2xl leading-[1.3] tracking-tight"
                      >
                        {lineWords.join(" ")}
                      </motion.p>
                    </div>
                  ))}
              </div>
            </div>

            {/* SEE PROJECT button */}
            <div className="overflow-hidden mb-1 md:mb-0">
              <motion.div
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.28,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="font-mono text-sm uppercase tracking-tighter text-[var(--primary)]">
                  See Project
                </span>
                {/* Angled arrow */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="text-[var(--primary)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-1.5 mt-3">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="relative h-0.5 overflow-hidden rounded-full cursor-pointer"
                  style={{
                    width: i === index ? 20 : 8,
                    transition: "width 0.3s ease",
                  }}
                  aria-label={`Go to project ${i + 1}`}
                >
                  <span className="absolute inset-0 bg-[var(--primary)]/20 rounded-full" />
                  {i === index && (
                    <motion.span
                      className="absolute inset-y-0 left-0 bg-[var(--primary)] rounded-full"
                      style={{ width: `${progress * 100}%` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Image ──────────────────────────────────── */}
          <div className="relative w-[50%] md:w-[45%] h-full flex items-center justify-center overflow-hidden -ml-5 md:-ml-8 py-4 pr-4 md:py-0 md:pr-0">
            <motion.div
              initial={{ x: 48, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full md:w-[85%] h-full md:h-[45%] rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)] md:shadow-none"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
