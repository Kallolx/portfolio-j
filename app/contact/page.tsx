"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/Contact";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-3 md:px-6 pt-32 md:pt-48 pb-12 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-8 md:gap-12 lg:gap-24 items-start">
          {/* Left Side: Heading */}
          <h1 className="text-5xl md:text-7xl font-serif text-primary tracking-tighter leading-none transition-all">
            Contact
          </h1>

          {/* Right Side: Content & Image */}
          <div className="relative">
            <div className="flex flex-col gap-8 max-w-lg relative z-10">
              {/* Solid Contact Image Box */}
              <div className="shrink-0 w-28 h-34 rounded-2xl bg-primary relative overflow-hidden">
                <Image
                  src="/img/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description Text */}
              <p className="font-mono text-primary text-md leading-relaxed tracking-tight">
                I believe design should be invisible until it needs to be seen.
                My focus is creating experiences that feel intuitive, reduce
                friction, and leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-6xl mx-auto pb-24">
        <ContactSection
          showHeader={false}
          isFullPage={true}
          isTransparent={false}
        />
      </div>
    </>
  );
}
