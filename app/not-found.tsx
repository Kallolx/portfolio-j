"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Sparkle() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="w-4 h-4 pointer-events-none z-20"
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
  );
}

function TextureOverlay() {
  return (
    <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none">
      <Image src="/img/texture.png" alt="" fill className="object-cover" />
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-background">
      <div className="max-w-xl w-full mx-auto">
        <div className="grid grid-cols-6 gap-0 relative">
          {/* Junction Sparkles ("Half Sparkles" in the gaps) */}
          <div className="absolute top-[340px] left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-0">
            <Sparkle />
          </div>
          <div className="absolute top-[340px] left-[66.67%] -translate-x-1/2 -translate-y-1/2 z-0">
            <Sparkle />
          </div>

          {/* Top Row - Individual Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-6 h-[340px] border border-[#acc4ff]/60 rounded-2xl bg-[var(--background)] relative z-10 flex flex-col items-center justify-center p-10 text-center overflow-hidden gap-8"
          >
            <TextureOverlay />

            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-[10rem] font-serif text-primary tracking-wider leading-none flex items-center justify-center"
            >
              <span>4</span>
              <span className="relative inline-flex items-center justify-center">
                0
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    scaleY: [1, 1, 0.1, 1, 1],
                  }}
                  transition={{
                    scale: { delay: 0.5, duration: 0.5 },
                    scaleY: {
                      repeat: Infinity,
                      duration: 1.2,
                      times: [0, 0.6, 0.8, 0.9, 1],
                      repeatDelay: 1,
                    },
                  }}
                  className="absolute w-3 h-3 bg-primary rounded-full mr-2 -mt-2"
                />
              </span>
              <span>4</span>
            </motion.h1>
            <Link
              href="/"
              className="px-6 py-2 border border-primary rounded-full text-primary font-mono text-sm uppercase hover:bg-primary hover:text-white transition-colors relative z-10"
            >
              GO to Home
            </Link>
          </motion.div>

          {/* Bottom Row - 3 Individual Boxes */}
          {/* Box 1 (Left) - Text, No Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 h-40 border border-[#acc4ff]/60 rounded-2xl bg-[var(--background)] relative z-10 flex flex-col items-center justify-center p-4 text-center overflow-hidden"
          >
            <p className="font-mono text-left text-primary text-md leading-relaxed tracking-tight">
              The page you looking for doesn’t exist or has been removed.
            </p>
          </motion.div>

          {/* Box 2 (Middle) - Empty, with Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 h-40 border border-[#acc4ff]/60 rounded-2xl bg-[var(--background)] relative z-10 flex flex-col items-center justify-center p-4 text-center overflow-hidden"
          >
            <TextureOverlay />
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-24 h-24 z-10"
            >
              <Image
                src="/img/404.png"
                alt="404 Illustration"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Box 3 (Right) - Text OOPS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-2 h-40 border border-[#acc4ff]/60 rounded-2xl bg-[var(--background)] relative z-10 flex flex-col items-center justify-center p-4 text-center overflow-hidden"
          >
            <p className="font-serif text-primary text-4xl uppercase font-medium tracking-tighter relative z-10">
              OOPS!
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
