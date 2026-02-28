"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import StripeBadge from "./StripeBadge";

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    number: "00-1",
    title: "Technical SEO",
    description:
      "Implementing advanced search strategies to drive organic growth and dominate competitive rankings.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "00-2",
    title: "Web App Development",
    description:
      "Building scalable, high-performance applications with modern architectures and clean code.",
    image:
      "https://images.unsplash.com/photo-1640920789307-1df7543f5828?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "00-3",
    title: "Performance Optimization",
    description:
      "Perfecting Core Web Vitals and page speed for superior user experience and search visibility.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "00-4",
    title: "CMS & E-commerce",
    description:
      "Custom headless solutions and robust e-commerce platforms designed to scale with your business.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const EASE = [0.32, 0.72, 0, 1] as const;

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const isTouch = useRef(false);

  useEffect(() => {
    const handleTouch = () => {
      isTouch.current = true;
    };
    window.addEventListener("touchstart", handleTouch, { once: true });

    if (window.innerWidth < 768) {
      setActive(0);
    }

    return () => window.removeEventListener("touchstart", handleTouch);
  }, []);

  return (
    <section className="px-3 md:px-6 lg:px-8 py-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="p-4 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">
            {/* Left — badge + description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:sticky lg:top-24"
            >
              <div className="flex items-start gap-3">
                <StripeBadge
                  color="#0046FF"
                  opacity={1}
                  gap={2.5}
                  strokeWidth={1.5}
                  className="w-24 h-1.5"
                />
                <h2 className="-mt-2 text-md font-mono font-medium tracking-tight text-[#0046FF] uppercase">
                  Service
                </h2>
              </div>

              <p className="text-[#0046FF] font-mono text-base leading-relaxed max-w-[30ch]">
                I measure success through core web vitals, organic rankings, and
                technical performance metrics that translate into real business
                growth.
              </p>
            </motion.div>

            {/* Right — service cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col"
            >
              {services.map((svc, i) => (
                <ServiceCard
                  key={svc.number}
                  service={svc}
                  isActive={active === i}
                  onEnter={() => !isTouch.current && setActive(i)}
                  onLeave={() => !isTouch.current && setActive(null)}
                  onClick={() => {
                    if (isTouch.current) {
                      setActive(active === i ? null : i);
                    }
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isActive,
  onEnter,
  onLeave,
  onClick,
}: {
  service: Service;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="cursor-pointer overflow-hidden"
      style={{
        borderLeft: "1.5px solid",
        borderRight: "1.5px solid",
        borderBottom: "1.5px solid",
        borderTop: "1.5px solid",
        borderColor: isActive ? "var(--primary)" : "rgba(0,70,255,0.12)",
        marginTop: "-1.5px",
        borderRadius: "1rem",
        transition: "border-color 0.35s ease",
        position: "relative",
        zIndex: isActive ? 1 : 0,
      }}
    >
      {/* Texture overlay — fades in on hover */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="absolute inset-0 mix-blend-multiply pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <Image
          src="/img/texture.png"
          alt=""
          fill
          className="object-cover opacity-30"
        />
      </motion.div>

      <div className="p-4 lg:p-6 pb-3 lg:pb-5 relative z-10">
        {/* ── Collapsed state: number left + title right, collapses away on expand ── */}
        <motion.div
          animate={{ height: isActive ? 0 : "auto", opacity: isActive ? 0 : 1 }}
          transition={{
            height: { duration: 0.35, ease: EASE },
            opacity: { duration: 0.15, ease: EASE },
          }}
          style={{ overflow: "hidden" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-md text-primary tracking-tight">
              {service.number}
            </span>
            <span
              className="font-serif text-primary leading-none text-right"
              style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.1rem)" }}
            >
              {service.title}
            </span>
          </div>
        </motion.div>

        {/* ── Expanded state: number + [title+desc | image], opens from 0 ── */}
        <motion.div
          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
          initial={{ height: 0, opacity: 0 }}
          transition={{
            height: { duration: 0.5, ease: EASE },
            opacity: { duration: 0.3, ease: EASE },
          }}
          style={{ overflow: "hidden" }}
        >
          {/* number row inside expanded — flush, no extra top spacing */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6">
            {/* Left: number + title + description stacked tightly */}
            <div className="flex-1 w-full md:w-auto">
              <span className="font-mono text-md text-primary tracking-tight block mb-3">
                {service.number}
              </span>
              <span
                className="font-serif text-primary leading-tight block mb-4"
                style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.1rem)" }}
              >
                {service.title}
              </span>
              <p className="font-mono text-md text-primary leading-relaxed max-w-[26ch]">
                {service.description}
              </p>
            </div>

            {/* Right: image */}
            <div
              className="w-full md:w-[200px] flex-shrink-0 self-start rounded-2xl overflow-hidden"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[180px] md:h-[200px] object-cover block"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
