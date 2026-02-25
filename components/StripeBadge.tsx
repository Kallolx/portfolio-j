"use client";

import { useEffect, useRef } from "react";

interface StripeBadgeProps {
  color?: string;
  opacity?: number;
  gap?: number;
  strokeWidth?: number;
  speed?: number; // pixels per second
  className?: string;
}

/**
 * Reusable animated stripe badge with diagonal scrolling pattern.
 * Perfect for section headers and decorative elements.
 * @param color    — line color (hex, rgb, or CSS var). Default: var(--primary)
 * @param opacity  — overall opacity 0–1. Default: 0.30
 * @param gap      — spacing between lines in px. Default: 4
 * @param strokeWidth — line thickness in px. Default: 1
 */
export default function StripeBadge({
  color = "var(--primary)",
  opacity = 0.30,
  gap = 4,
  strokeWidth = 1,
  speed = 10,
  className = "",
}: StripeBadgeProps) {
  const patternRef = useRef<SVGPatternElement>(null);
  const id = useRef(`animated-stripe-${Math.random().toString(36).substr(2, 9)}`).current;

  useEffect(() => {
    let offset = 0;
    let animationId: number;
    let last = performance.now();

    const animate = (now: number) => {
      const delta = now - last;
      last = now;
      if (patternRef.current) {
        // advance offset by speed (px per second) scaled by elapsed time
        offset = (offset + (delta / 1000) * speed) % gap;
        patternRef.current.setAttribute("patternTransform", `rotate(-45) translate(${offset} 0)`);
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [gap]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        aria-hidden="true"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern
            ref={patternRef}
            id={id}
            width={gap}
            height={gap}
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2={gap}
              stroke={color}
              strokeWidth={strokeWidth}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
