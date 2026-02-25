"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface Stat {
  number: string;
  label: string;
}

interface StatCardProps {
  index: number;
  stat: Stat;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function StatCard({ index, stat, progress, range, targetScale }: StatCardProps) {
  // Gradient colors from light blue to darker blue
const gradients = [
  "from-[#C5D9F2] to-[#A8C5E8]", // Very light airy blue
  "from-[#8FB3DC] to-[#7AA1D0]",
  "from-[#8BB8F0] to-[#6DA7E8]",
  "from-[#4F92DC] to-[#2F7ED1]",
  "from-[#0057C2] to-[#004aad]", // Final strong brand blue
];

  const numberColor = index === 0 ? "text-[#0046FF]" : "text-white";
  const labelColor = index === 0 ? "text-[#0046FF]" : "text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-[80px]"
    >
      <div
        className={`w-full h-full rounded-2xl bg-gradient-to-br ${gradients[index]} p-5 lg:p-6 flex items-center justify-between`}
      >
        <div className={`text-3xl lg:text-4xl font-serif ${numberColor}`}>
          {stat.number}
        </div>
        <div className={`text-base lg:text-md font-mono ${labelColor} text-right`}>
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}
