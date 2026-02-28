"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Hero() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${ampm}`;
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const headline =
    "Shaping identities for those ready to rise above the noise.";

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-28 pb-8 lg:pt-4 lg:pb-0">
      <div className="max-w-6xl mx-auto w-full">
        {/* Box Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-0 relative">
          {/* Top Row - 3 Big Boxes */}

          {/* 1st Box - Hero Text & CTA */}
          <div className="col-span-2 md:col-span-2 h-auto md:h-100 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex flex-col items-start justify-center p-8 md:p-14 gap-6 overflow-hidden order-2 md:order-1">
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-3xl md:text-4xl tracking-tight font-serif leading-[1.4] text-left relative z-10 text-[var(--primary)] pb-1">
              {headline.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
              className="px-6 py-2 border border-[var(--primary)] rounded-full text-[var(--primary)] font-mono text-xs md:text-sm uppercase hover:bg-[var(--primary)] hover:text-white transition-colors self-start relative z-10"
            >
              contact me
            </motion.button>
          </div>

          {/* 2nd Box - Profile */}
          <div className="col-span-2 md:col-span-2 h-auto md:h-100 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex items-center justify-center p-3 order-1 md:order-2">
            <div className="bg-[var(--primary)] rounded-xl p-6 w-full h-full flex flex-col items-center justify-start gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="w-56 h-64 md:w-38 md:h-40 bg-white rounded-lg mt-6 md:mt-8 relative overflow-hidden"
              >
                <Image
                  src="/img/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="text-4xl md:text-6xl tracking-tight font-serif text-white mt-2 md:mt-4 text-center"
              >
                Jamil Ifat
              </motion.h2>
            </div>
          </div>

          {/* 3rd Box - Projects Showcase */}
          <div className="col-span-2 md:col-span-2 h-[15rem] md:h-100 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 overflow-hidden order-3">
            <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none">
              <Image
                src="/img/texture.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <ProjectCard />
          </div>

          {/* Bottom Row - 6 Small Boxes (Mobile: 2x2 grid, Desktop: 1x6) */}

          {/* 1st Card - Services */}
          <div
            className="col-span-1 md:col-span-1 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex flex-col justify-center p-4 md:p-6 gap-2 md:gap-2 overflow-hidden order-4 md:h-48"
            style={{ minHeight: "12rem" }}
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            {[
              "-UI/UX Design",
              "-Illustration",
              "-Copy Writing",
              "-Branding Design",
            ].map((service, i) => (
              <motion.p
                key={service}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + i * 0.08,
                  ease: "easeOut",
                }}
                className="font-mono text-xs md:text-sm text-primary relative z-10 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {service}
              </motion.p>
            ))}
          </div>

          {/* 2nd Card - Empty */}
          <div className="hidden md:block col-span-1 h-48 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 order-5" />

          {/* 3rd Card - Location */}
          <div
            className="col-span-1 md:col-span-1 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex items-end justify-end p-4 overflow-hidden order-5 md:order-6 md:h-48"
            style={{ minHeight: "12rem" }}
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-mono text-sm text-primary relative z-10"
            >
              London
            </motion.p>
          </div>

          {/* 4th Card - Current Time */}
          <div
            className="col-span-1 md:col-span-1 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex items-end justify-start p-4 overflow-hidden order-6 md:order-7 md:h-48"
            style={{ minHeight: "12rem" }}
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="font-mono text-sm md:text-base text-primary relative z-10 min-w-max"
            >
              {currentTime}
            </motion.p>
          </div>

          {/* 5th Card - Empty */}
          <div className="hidden md:block col-span-1 h-48 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 order-8" />

          {/* 6th Card - Availability */}
          <div
            className="col-span-1 md:col-span-1 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex items-end justify-center pb-6 overflow-hidden order-7 md:order-9 md:h-48"
            style={{ minHeight: "12rem" }}
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex items-center gap-2 relative z-10"
            >
              <div className="relative">
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-2 h-2 bg-orange-500 rounded-full"
                />
                <span className="w-2 h-2 bg-orange-500 rounded-full block" />
              </div>
              <p className="font-mono text-xs md:text-sm text-orange-500 uppercase whitespace-nowrap">
                Available now
              </p>
            </motion.div>
          </div>

          {/* Sparkle Icons (Desktop) */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="hidden md:block absolute top-[25rem] left-[33.33%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none z-10"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.8 10.8 8.8 12 2Z"
                fill="var(--primary)"
              />
            </svg>
          </motion.div>

          {/* Desktop Only Sparkles */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.6, delay: 1.25 }}
            className="hidden md:block absolute top-[25rem] left-[66.67%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none z-10"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.8 10.8 8.8 12 2Z"
                fill="var(--primary)"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.3 }}
            className="hidden md:block absolute top-[25rem] left-[16.67%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none z-0"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.8 10.8 8.8 12 2Z"
                fill="var(--primary)"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.35 }}
            className="hidden md:block absolute top-[25rem] left-[83.33%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none z-0"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.8 10.8 8.8 12 2Z"
                fill="var(--primary)"
              />
            </svg>
          </motion.div>

          {/* Sparkle Icon (Mobile - 2x2 Intersection) */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="md:hidden absolute bottom-[12rem] left-[50%] -translate-x-1/2 translate-y-1/2 w-4 h-4 pointer-events-none z-20"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full bg-[var(--background)] rounded-full border-[3px] border-[var(--background)] overflow-visible"
            >
              <path
                d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.8 10.8 8.8 12 2Z"
                fill="var(--primary)"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
