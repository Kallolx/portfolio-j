"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import StripeBadge from "./StripeBadge";
import StripePattern from "./StripePattern";
import LogoLoop from "./LogoLoop";

const clientLogos = [
  { title: "Figma" },
  { title: "Framer" },
  { title: "Sketch" },
  { title: "Adobe XD" },
  { title: "Notion" },
  { title: "Webflow" },
  { title: "Lottie" },
  { title: "Linear" },
];

const aboutText =
  "I specialize in UI/UX design, web and mobile interfaces, and brand identity. I transform complex ideas into intuitive, visually striking designs using tools like Figma, Sketch, and Framer. Driven by research, clarity, and attention to detail, I create interfaces that don’t just look good-they work seamlessly.";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [words, setWords] = useState<string[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.7"],
  });

  useEffect(() => {
    setWords(aboutText.split(" "));
  }, []);

  return (
    <section className="px-3 md:px-6 lg:px-8 py-8 bg-background">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <div className="p-4 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-10 lg:gap-20 items-start">
            {/* Left Side - Badge, Text, and Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
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
                  ABOUT
                </h2>
              </div>

              {/* Text List */}
              <div className="space-y-2 pl-2">
                <p className="text-primary text-base font-mono">
                  Ethical & integrity-driven
                </p>
                <p className="text-primary text-base font-mono">
                  Strategic problem-solving
                </p>
                <p className="text-primary text-base font-mono">
                  Critical thinking
                </p>
              </div>

              {/* Contact Button */}
              <button className="px-8 py-3 border-2 border-[var(--primary)] rounded-full text-[var(--primary)] font-mono text-sm uppercase hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                Contact Me
              </button>
            </motion.div>

            {/* Right Side - Animated Title Text */}
            <div className="relative">
              <div className="text-[2.2rem] lg:text-[2.75rem] font-serif font-medium leading-tight text-primary">
                {words.map((word, index) => {
                  const wordsPerGroup = 3;
                  const wordStart = Math.max(
                    0,
                    (index - wordsPerGroup) / words.length,
                  );
                  const wordEnd = Math.min(1, index / words.length);

                  return (
                    <Word
                      key={index}
                      word={word}
                      progress={scrollYProgress}
                      range={[wordStart, wordEnd]}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Stripe Pattern + Logo Loop - Edge to Edge */}
      <div className="h-24 -mx-3 md:-mx-6 lg:-mx-8 relative overflow-hidden">
        <StripePattern
          color="#0046FF"
          opacity={0.3}
          gap={6}
          strokeWidth={1.5}
        />
        <div className="absolute inset-0 flex items-center mt-4">
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
  );
}

interface WordProps {
  word: string;
  progress: any;
  range: [number, number];
}

function Word({ word, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.05, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-2">
      {word}
    </motion.span>
  );
}
