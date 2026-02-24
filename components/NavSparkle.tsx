"use client";

import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";

// 4 distinct animation configs — each feels independent/random
const variants = [
  // 1 — slow pulse, slight clockwise rotation
  {
    animate: {
      scale: [0, 1, 0.6, 1, 0],
      rotate: [0, 20, 10, 30, 0],
      opacity: [0, 1, 0.8, 1, 0],
    },
    transition: { duration: 3.2, repeat: Infinity, ease: easeInOut, delay: 0 },
  },
  // 2 — fast pop, counter-clockwise
  {
    animate: {
      scale: [0, 1.1, 0.5, 1, 0],
      rotate: [0, -25, -10, -35, 0],
      opacity: [0, 1, 0.6, 1, 0],
    },
    transition: { duration: 2.6, repeat: Infinity, ease: easeInOut, delay: 0.9 },
  },
  // 3 — slow breathe, minimal rotation
  {
    animate: {
      scale: [0, 0.8, 1, 0.7, 0],
      rotate: [0, 10, 0, 15, 0],
      opacity: [0, 0.7, 1, 0.8, 0],
    },
    transition: { duration: 4.0, repeat: Infinity, ease: easeInOut, delay: 1.7 },
  },
  // 4 — quick burst, sharp clockwise
  {
    animate: {
      scale: [0, 1.2, 0.4, 1, 0],
      rotate: [0, 45, 20, 60, 0],
      opacity: [0, 1, 0.5, 1, 0],
    },
    transition: { duration: 2.2, repeat: Infinity, ease: easeInOut, delay: 2.4 },
  },
];

interface NavSparkleProps {
  index: 0 | 1 | 2 | 3;
}

export default function NavSparkle({ index }: NavSparkleProps) {
  const v = variants[index];

  return (
    <motion.span
      animate={v.animate}
      transition={v.transition}
      className="flex-shrink-0 w-3 h-3 flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  className="w-full h-full"
>
  <path
    d="M12 2
       C13.2 8.8 15.2 10.8 22 12
       C15.2 13.2 13.2 15.2 12 22
       C10.8 15.2 8.8 13.2 2 12
       C8.8 10.8 10.8 8.8 12 2Z"
    fill="var(--primary)"
  />
</svg>
    </motion.span>
  );
}
