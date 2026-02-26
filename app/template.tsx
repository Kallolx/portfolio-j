"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 z-40 pointer-events-none"
        style={{
          top: 0,
          height: "150vh",
          background:
            "linear-gradient(to bottom, var(--primary) 0%, var(--primary) 70%, transparent 100%)",
        }}
        initial={{ y: "0vh" }}
        animate={{ y: "-150vh" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        {children}
        <Footer />
      </motion.div>
    </>
  );
}
