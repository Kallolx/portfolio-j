interface StripePatternProps {
  color?: string;
  opacity?: number;
  gap?: number;
  strokeWidth?: number;
  className?: string;
}

/**
 * Reusable SVG-based diagonal stripe pattern.
 * SVG renders pixel-perfect uniform lines — no antialiasing artifacts.
 * @param color    — line color (hex, rgb, or CSS var). Default: var(--primary)
 * @param opacity  — overall opacity 0–1. Default: 0.15
 * @param gap      — spacing between lines in px. Default: 8
 * @param strokeWidth — line thickness in px. Default: 1
 */
export default function StripePattern({
  color = "var(--primary)",
  opacity = 0.30,
  gap = 8,
  strokeWidth = 1,
  className = "",
}: StripePatternProps) {
  const id = `stripe-${gap}-${strokeWidth}`;
  const size = gap;

  return (
    <svg
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id={id}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2={size}
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
