"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import StripeBadge from "./StripeBadge";
import { FiPhone, FiMail, FiCheckCircle, FiX } from "react-icons/fi";

export default function Contact({
  showHeader = true,
  isFullPage = false,
  isTransparent = true,
}: {
  showHeader?: boolean;
  isFullPage?: boolean;
  isTransparent?: boolean;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section className="px-3 md:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={
            isTransparent ? "" : "bg-white rounded-3xl p-6 md:p-12 lg:p-16"
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 md:gap-12 items-start">
            {/* Left column */}
            <div className="space-y-6">
              {showHeader && (
                <div className="flex items-start gap-3">
                  <StripeBadge
                    color="#002fb1"
                    opacity={1}
                    gap={2.5}
                    strokeWidth={1.5}
                    className="w-24 h-1.5"
                  />
                  <h2 className="-mt-2 text-md font-mono font-medium tracking-tight text-[#0046FF] uppercase">
                    CONTACT
                  </h2>
                </div>
              )}

              {/* Image + text side by side */}
              <div className="flex items-center gap-5">
                {!isFullPage && (
                  <>
                    <div className="shrink-0 w-28 h-36 rounded-xl bg-[var(--primary)] relative overflow-hidden">
                      <Image
                        src="/img/profile.png"
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-primary font-mono text-base leading-relaxed max-w-[18ch]">
                      Reach out to start a conversation, share a vision, or
                      create something impactful.
                    </p>
                  </>
                )}
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+0100002345"
                  className="flex items-center gap-3 text-primary font-mono group hover:text-orange-500 transition-colors duration-300"
                >
                  <FiPhone
                    size={18}
                    strokeWidth={1.8}
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                  <span className="transition-colors duration-300">
                    +01-0000-2345
                  </span>
                </a>

                <a
                  href="mailto:jamilaktarifat@hotmail.com"
                  className="flex items-center gap-3 text-primary font-mono group hover:text-orange-500 transition-colors duration-300"
                >
                  <FiMail
                    size={18}
                    strokeWidth={1.8}
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                  <span className="transition-colors duration-300">
                    jamilaktarifat@hotmail.com
                  </span>
                </a>
              </div>
            </div>

            {/* Right column — form always visible */}
            <div className="relative min-h-[400px]">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-sm font-mono text-primary mb-2">
                    Name
                  </label>
                  <input
                    required
                    className="w-full border-2 border-t-transparent border-l-transparent border-r-transparent border-b-primary/50 outline-none py-2 pl-4 font-mono focus:border-primary/50 bg-transparent transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-primary mb-2">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full border-2 border-t-transparent border-l-transparent border-r-transparent border-b-primary/50 outline-none py-2 pl-4 font-mono focus:border-primary/50 bg-transparent transition-colors"
                    placeholder="jane@framer.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border-2 border-t-transparent border-l-transparent border-r-transparent border-b-primary/50 outline-none py-2 pl-4 font-mono focus:border-primary/50 bg-transparent transition-colors resize-none"
                    placeholder="Your Message"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full border-2 border-primary text-primary font-mono hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* Success Modal */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-2 bg-background/40 backdrop-blur-md"
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.9, opacity: 0, y: 20 }}
                      className="relative w-full max-w-[440px] bg-background border border-primary/20 p-6 md:p-8 rounded-3xl shadow-2xl"
                    >
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="absolute top-4 right-4 p-2 text-primary/30 hover:text-primary transition-colors hover:bg-primary/5 rounded-full z-20"
                      >
                        <FiX size={18} />
                      </button>

                      <div className="flex items-center gap-4 md:gap-5 pr-1">
                        {/* Image box - Left side */}
                        <div className="shrink-0 w-20 md:w-24 h-28 md:h-32 relative overflow-hidden">
                          <Image
                            src="/img/thanku.png"
                            alt="Message Received"
                            fill
                            className="object-contain"
                          />
                        </div>

                        {/* Texts - Right side */}
                        <div className="space-y-1.5 translate-y-[-2px]">
                          <h3 className="font-serif text-3xl md:text-4xl text-primary tracking-tight leading-[0.9]">
                            Message received
                          </h3>

                          <p className="font-mono text-sm tracking-tight text-primary/60 leading-relaxed max-w-[32ch]">
                            Thank you for reaching out. I&apos;ll be in touch
                            with you as soon as possible.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
