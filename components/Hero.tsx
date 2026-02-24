"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Box Grid Layout */}
        <div className="grid grid-cols-6 gap-0 relative">
          {/* Top Row - 3 Big Boxes */}
          {/* 1st Box - Hero Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-2 h-100 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex flex-col items-start justify-center p-14 gap-6 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl tracking-tight font-serif leading-[1.4] text-left relative z-10" style={{color: 'var(--primary)'}}>
              Shaping identities for<br />those ready to rise<br />above the noise.
            </h1>
            <button className="px-6 py-2 border border-[var(--primary)] rounded-full text-[var(--primary)] font-mono text-sm uppercase hover:bg-[var(--primary)] hover:text-white transition-colors self-start relative z-10">
              contact me
            </button>
          </motion.div>

          {/* 2nd Box - Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 h-100 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex items-center justify-center p-3"
          >
            <div className="bg-[var(--primary)] rounded-xl p-6 w-full h-full flex flex-col items-center justify-start gap-6 pt-8">
              <div className="w-38 h-40 bg-white rounded-lg mt-8"></div>
              <h2 className="text-6xl tracking-tight font-serif text-white mt-4">James Parker</h2>
            </div>
          </motion.div>

          {/* 3rd Box - Empty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 h-100 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Bottom Row - 6 Small Boxes */}
          {/* 1st Card - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 h-48 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex flex-col justify-center p-6 gap-2 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p className="font-mono text-sm text-primary relative z-10">-UI/UX Design</p>
            <p className="font-mono text-sm text-primary relative z-10">-Illustration</p>
            <p className="font-mono text-sm text-primary relative z-10">-Copy Writing</p>
            <p className="font-mono text-sm text-primary relative z-10">-Branding Design</p>
          </motion.div>

          {/* 2nd Card - Empty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-1 h-48 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10"
          />

          {/* 3rd Card - Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-1 h-48 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex items-end justify-end p-4 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p className="font-mono text-sm text-primary relative z-10">
              London
            </p>
          </motion.div>

          {/* 4th Card - Current Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="col-span-1 h-48 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex items-end justify-start p-4 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p className="font-mono text-base text-primary relative z-10">{currentTime}</p>
          </motion.div>

          {/* 5th Card - Empty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-span-1 h-48 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10"
          />

          {/* 6th Card - Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="col-span-1 h-48 border border-[#acc4ff]/30 rounded-2xl bg-[var(--background)] relative z-10 flex items-end justify-center pb-6 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30 mix-blend-multiply">
              <Image
                src="/img/texture.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <div className="relative">
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 w-2 h-2 bg-orange-500 rounded-full"
                />
                <span className="w-2 h-2 bg-orange-500 rounded-full block" />
              </div>
              <p className="font-mono text-sm text-orange-500 uppercase">Available now</p>
            </div>
          </motion.div>

          {/* Sparkle Icon at 1st-2nd Box Diamond Gap */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute top-[25rem] left-[33.33%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none z-10"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.8 10.8 8.8 12 2Z"
                fill="var(--primary)"
              />
            </svg>
          </motion.div>

          {/* Sparkle Icon at 2nd-3rd Box Diamond Gap */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="absolute top-[25rem] left-[66.67%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none z-10"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.8 10.8 8.8 12 2Z"
                fill="var(--primary)"
              />
            </svg>
          </motion.div>

          {/* Bottom 1st-2nd intersection */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute top-[25rem] left-[16.67%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none z-0"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.8 10.8 8.8 12 2Z"
                fill="var(--primary)"
              />
            </svg>
          </motion.div>

          {/* Bottom 5th-6th intersection */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="absolute top-[25rem] left-[83.33%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none z-0"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
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
