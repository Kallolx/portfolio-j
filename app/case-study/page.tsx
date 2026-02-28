"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import CaseStudies from "@/components/CaseStudies";
import Image from "next/image";
import Contact from "@/components/Contact";

export default function CaseStudy() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Cycle through project images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto px-3 md:px-6 pt-32 md:pt-48 pb-12 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-8 md:gap-12 lg:gap-24 items-start">
          {/* Left Side: Heading */}
          <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tighter leading-none transition-all">
            Case Studies
          </h1>

          {/* Right Side: Content & Animated Image */}
          <div className="relative">
            <div className="flex flex-col gap-8 max-w-lg relative z-10">
              {/* Animated Project Image Box */}
              <div className="w-28 h-34 relative">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentProjectIndex}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 w-full h-full bg-primary rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={projects[currentProjectIndex].image}
                      alt={projects[currentProjectIndex].title}
                      fill
                      className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description Text */}
              <p className="font-mono text-primary text-md leading-relaxed tracking-tight">
                Explore a curated selection of my work where strategy meets
                aesthetic excellence. Each project represents a unique
                journey—from deep research to visually striking solutions that
                drive real-world results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Case Studies Section */}
      <CaseStudies />
      <Contact />
    </>
  );
}
