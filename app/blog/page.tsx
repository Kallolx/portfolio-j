"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { blogPosts } from "@/data/blogs";
import Blogs from "@/components/Blogs";
import Image from "next/image";
import Contact from "@/components/Contact";

export default function BlogPage() {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  // Cycle through blog images every 1.5 seconds (snappy shuffle)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBlogIndex((prev) => (prev + 1) % blogPosts.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto px-3 md:px-6 pt-32 md:pt-48 pb-12 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-8 md:gap-12 lg:gap-24 items-start">
          {/* Left Side: Heading */}
          <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tighter leading-none transition-all">
            Blog & Insights
          </h1>

          {/* Right Side: Content & Animated Image */}
          <div className="relative">
            <div className="flex flex-col gap-8 max-w-lg relative z-10">
              {/* Animated Blog Image Box */}
              <div className="w-28 h-34 relative">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentBlogIndex}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      mass: 1,
                    }}
                    className="absolute inset-0 w-full h-full bg-primary rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={blogPosts[currentBlogIndex].image}
                      alt={blogPosts[currentBlogIndex].title}
                      fill
                      className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description Text */}
              <p className="font-mono text-primary text-md leading-relaxed tracking-tight">
                Welcome to my collection of thoughts on design, strategy, and
                the intersection of technology and human experience. Here, I
                share the processes and insights that drive my creative journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto pb-18">
        <Blogs showHeader={false} isFullPage={true} />
      </div>
      <div className="max-w-5xl mx-auto pb-12">
        <Contact isTransparent={true} />
      </div>
    </>
  );
}
