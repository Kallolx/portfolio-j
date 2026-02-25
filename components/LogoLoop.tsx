"use client";

import React, { useId } from "react";

interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;           // seconds for one full pass
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  ariaLabel?: string;
}

export default function LogoLoop({
  logos,
  speed = 20,
  direction = "left",
  logoHeight = 40,
  gap = 60,
  pauseOnHover = true,
  scaleOnHover = false,
  fadeOut = false,
  ariaLabel = "Logo loop",
}: LogoLoopProps) {
  const uid = useId().replace(/:/g, "");
  // Render 4 copies so there's always content filling the screen
  const items = [...logos, ...logos, ...logos, ...logos];

  const maskStyle: React.CSSProperties = fadeOut
    ? {
        maskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
      }
    : {};

  const renderItem = (logo: LogoItem, i: number) => {
    const inner = logo.node ? (
      <span className="flex items-center justify-center" style={{ height: logoHeight, fontSize: logoHeight }}>
        {logo.node}
      </span>
    ) : logo.src ? (
      <img src={logo.src} alt={logo.alt ?? logo.title ?? ""} style={{ height: logoHeight, width: "auto", objectFit: "contain" }} />
    ) : (
      <svg width="84" height={logoHeight} viewBox={`0 0 84 ${logoHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="84" height={logoHeight} rx="6" fill="#0046FF" opacity="0.15" />
        <text x="50%" y="50%" fill="#0046FF" fontFamily="monospace" fontSize="11" textAnchor="middle" dominantBaseline="middle">
          {logo.title ?? "LOGO"}
        </text>
      </svg>
    );

    const cls = `flex-shrink-0${scaleOnHover ? " hover:scale-110 transition-transform duration-200" : ""}`;

    return logo.href ? (
      <a key={i} href={logo.href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={logo.title}>
        {inner}
      </a>
    ) : (
      <div key={i} className={cls}>{inner}</div>
    );
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: logoHeight + 16, ...maskStyle }}
      aria-label={ariaLabel}
    >
      <div
        className={`logoloop-track-${uid}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: `${gap}px`,
          width: "max-content",
          willChange: "transform",
        }}
      >
        {items.map(renderItem)}
      </div>

      <style>{`
        .logoloop-track-${uid} {
          animation: logoloop-${uid} ${speed}s linear infinite;
          animation-direction: ${direction === "right" ? "reverse" : "normal"};
        }
        ${pauseOnHover ? `
        .logoloop-track-${uid}:hover {
          animation-play-state: paused;
        }` : ""}
        @keyframes logoloop-${uid} {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  );
}
