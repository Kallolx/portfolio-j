"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import StripeBadge from "./StripeBadge";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Jamil's technical SEO audit was a game-changer for us. Our organic traffic doubled in just three months, and we're now ranking for keywords we never thought possible.",
    name: "Michael Thompson",
    role: "Marketing Director, TechFlow",
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    quote:
      "The web application Jamil built is lightning fast and scales perfectly with our user growth. His attention to technical detail and clean architecture is world-class.",
    name: "Sarah Okonkwo",
    role: "CTO, Bloom Systems",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote:
      "Most developers ignore SEO, but Jamil builds it into the core. Our site has perfect Lighthouse scores and green Core Web Vitals across the board.",
    name: "David Lim",
    role: "Head of Growth, Arcline",
    avatar: "https://i.pravatar.cc/80?img=33",
  },
  {
    quote:
      "A rare engineer who understands both deep technical architecture and search engine algorithms. He delivers work that truly moves the needle on ROI.",
    name: "Priya Nair",
    role: "CEO, Fieldstack",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
];

const SLIDE_INTERVAL = 5000;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [[index, direction], setIndex] = useState([0, 1]);

  const paginate = useCallback((dir: number) => {
    setIndex(([prev]) => [
      (prev + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [paginate]);

  const current = testimonials[index];

  return (
    <section className="px-3 md:px-6 lg:px-8 py-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="p-4 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-10 lg:gap-20 items-start">
            {/* Left — badge + description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="flex items-start gap-3">
                <StripeBadge
                  color="#ffffff"
                  opacity={0.7}
                  gap={2.5}
                  strokeWidth={1.5}
                  className="w-24 h-1.5"
                />
                <h2 className="-mt-2 text-md font-mono font-medium tracking-tight text-white uppercase">
                  Testimonial
                </h2>
              </div>

              {/* Description */}
              <p className="text-white/80 font-mono text-sm leading-relaxed max-w-[28ch]">
                I value the experiences shared by those I've worked with, each
                story reflecting collaboration and impact.
              </p>
            </motion.div>

            {/* Right — testimonial slider */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative min-h-[420px] md:min-h-[360px] h-auto flex flex-col"
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                  className="w-full h-full flex flex-col flex-1"
                >
                  {/* Avatar + quote icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    {/* Closing quote mark */}
                    <svg
                      aria-hidden
                      width="80"
                      height="64"
                      viewBox="0 0 80 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-40 flex-shrink-0"
                    >
                      <path
                        d="M18 28C18 18 24 10 36 8"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 28H36V52H18V28Z"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M44 28C44 18 50 10 62 8"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M44 28H62V52H44V28Z"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* text */}
                  <blockquote
                    className="font-serif text-white leading-snug flex-1"
                    style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.3rem)" }}
                  >
                    {current.quote}
                  </blockquote>

                  {/* Name + role */}
                  <p className="font-mono text-sm text-white/60 tracking-wide mt-6">
                    {current.name},{" "}
                    <span className="text-white">{current.role}</span>
                  </p>

                  {/* Navigation */}
                  <div className="flex items-center gap-3 mt-5">
                    <button
                      onClick={() => paginate(-1)}
                      aria-label="Previous testimonial"
                      className="w-11 h-11 rounded-lg border border-white/25 flex items-center justify-center text-white/70 hover:border-white/60 hover:text-white transition-colors duration-200 font-mono text-base"
                    >
                      &#171;
                    </button>
                    <button
                      onClick={() => paginate(1)}
                      aria-label="Next testimonial"
                      className="w-11 h-11 rounded-lg border border-white/25 flex items-center justify-center text-white/70 hover:border-white/60 hover:text-white transition-colors duration-200 font-mono text-base"
                    >
                      &#187;
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
