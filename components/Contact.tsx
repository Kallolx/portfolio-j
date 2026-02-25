"use client";

import { motion } from "framer-motion";
import StripeBadge from "./StripeBadge";

export default function Contact() {
  return (
    <section className="px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            {/* Left column */}
            <div className="space-y-6">
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

              {/* Image + text side by side */}
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-28 h-36 rounded-xl bg-[var(--primary)] flex items-center justify-center text-white font-mono text-lg">
                  JP
                </div>
                <p className="text-primary font-mono text-base leading-relaxed max-w-[18ch]">
                  Reach out to start a conversation, share a vision, or create something impactful.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary font-mono">
                  {/* Phone icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0046FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.8 10.8 19.79 19.79 0 01.73 2.18 2 2 0 012.72 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.69a16 16 0 006.4 6.4l1.06-1.06a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <span>+01-0000-2345</span>
                </div>

                <div className="flex items-center gap-3 text-primary font-mono">
                  {/* Email icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0046FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                  <span>hello@james.com</span>
                </div>
              </div>
            </div>

            {/* Right column — contact form visual only */}
            <div>
              <form className="space-y-8">
                <div>
                  <label className="block text-sm font-mono text-primary mb-2">Name</label>
                  <input className="w-full border-2 border-t-transparent border-l-transparent border-r-transparent border-b-primary/50 outline-none py-2 pl-4 font-mono focus:border-primary/50" placeholder="Jane Smith" />
                </div>

                <div>
                  <label className="block text-sm font-mono text-primary mb-2">Email</label>
                  <input className="w-full border-2 border-t-transparent border-l-transparent border-r-transparent border-b-primary/50 outline-none py-2 pl-4 font-mono focus:border-primary/50" placeholder="jane@framer.com" />
                </div>

                <div>
                  <label className="block text-sm font-mono text-primary mb-2">Message</label>
                  <textarea rows={5} className="w-full border-2 border-t-transparent border-l-transparent border-r-transparent border-b-primary/50 outline-none py-2 pl-4 font-mono focus:border-primary/50" placeholder="Your Message" />
                </div>

                <div>
                  <button type="button" className="px-6 py-2 rounded-full border border-primary text-primary font-mono">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
