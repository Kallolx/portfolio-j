"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const socials = [
  { label: "Linkedin", href: "#" },
  { label: "Twitter (X)", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Study", href: "/case-study" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const innerLinks = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Refund policy", href: "/refund" },
];

const utilityLinks = [{ label: "404", href: "/404" }];

// Clean modern diagonal (↗) arrow
function ArrowDiagonal() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10L10 2M10 2H4M10 2V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Clean modern right (→) arrow
function ArrowRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex flex-col gap-[6px] cursor-pointer w-fit"
    >
      {/* Label + animated arrow */}
      <span
        className="flex items-center gap-1.5 font-mono text-base whitespace-nowrap transition-opacity duration-200"
        style={{ color: "#ffffff", opacity: hovered ? 1 : 0.92 }}
      >
        {label}

        {/* Arrow swap */}
        <span className="relative inline-flex items-center justify-center w-3 h-3 overflow-hidden text-white">
          <span
            className="absolute flex items-center justify-center transition-all duration-300 ease-out"
            style={{
              transform: hovered ? "translate(10px, -10px)" : "translate(0,0)",
              opacity: hovered ? 0 : 1,
            }}
          >
            <ArrowDiagonal />
          </span>
          <span
            className="absolute flex items-center justify-center transition-all duration-300 ease-out"
            style={{
              transform: hovered ? "translate(0,0)" : "translate(-10px,0)",
              opacity: hovered ? 1 : 0,
            }}
          >
            <ArrowRight />
          </span>
        </span>
      </span>

      {/* Underline — SVG dots = perfectly round, tightly spaced, text-width only */}
      <span className="relative block w-full" style={{ height: "2px" }}>
        {/* Round dots via SVG strokeLinecap="round" + strokeDasharray */}
        <svg
          className="absolute inset-0 w-full transition-opacity duration-200"
          height="1"
          style={{ opacity: hovered ? 0 : 1, overflow: "visible" }}
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="rgba(255, 255, 255)"
            strokeWidth="1"
            strokeDasharray="1.5 3"
            strokeLinecap="round"
          />
        </svg>

        {/* Solid white slide-in on hover */}
        <span
          className="absolute inset-0 bg-white transition-transform duration-300 ease-out origin-left"
          style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)" }}
        />
      </span>
    </a>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="font-mono text-md text-white block w-fit tracking-tight whitespace-nowrap"
      style={{
        textDecoration: isActive || hovered ? "underline" : "none",
        textUnderlineOffset: "4px",
      }}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      className="px-3 md:px-6 lg:px-8 pt-8 pb-6"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Two boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4 mb-4 pt-14">
          {/* ── Left box ── */}
          <div
            className="rounded-2xl p-6 lg:p-16 flex flex-col justify-between min-h-[300px] lg:min-h-[400px]"
            style={{
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            <h2
              className="font-serif text-white leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              James Parker
            </h2>

            {/* Social links pushed to bottom */}
            <div className="flex flex-col gap-5 mt-auto">
              <div className="flex gap-12">
                {socials.slice(0, 2).map((s) => (
                  <SocialLink key={s.label} label={s.label} href={s.href} />
                ))}
              </div>
              <div className="flex gap-12">
                {socials.slice(2, 4).map((s) => (
                  <SocialLink key={s.label} label={s.label} href={s.href} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right box ── */}
          <div
            className="rounded-2xl p-6 lg:p-12 min-h-[300px] lg:min-h-[400px]"
            style={{
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            <div className="flex flex-wrap justify-between gap-8">
              <div>
                <p className="font-serif text-xl text-white mb-6">Main Page</p>
                <div className="flex flex-col gap-2">
                  {mainLinks.map((l) => (
                    <NavLink key={l.href} label={l.label} href={l.href} />
                  ))}
                </div>
              </div>

              <div>
                <p className="font-serif text-xl text-white mb-6">Inner Page</p>
                <div className="flex flex-col gap-2">
                  {innerLinks.map((l) => (
                    <NavLink key={l.href} label={l.label} href={l.href} />
                  ))}
                </div>
              </div>

              <div>
                <p className="font-serif text-xl text-white mb-6">
                  Utility Page
                </p>
                <div className="flex flex-col gap-2">
                  {utilityLinks.map((l) => (
                    <NavLink key={l.href} label={l.label} href={l.href} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between tracking-tighter gap-3 px-2 pt-8 lg:pt-4 text-center">
          <span className="font-mono text-md text-white">
            Designed by: Framerze
          </span>
          <span className="font-mono text-md text-white">
            Copyright ©James Parker, All right reserved
          </span>
          <span className="font-mono text-md text-white">
            Powered by: Framer
          </span>
        </div>
      </div>
    </footer>
  );
}
