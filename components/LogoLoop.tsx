"use client";

import React, { useId } from "react";
import * as SI from "react-icons/si";

interface LogoItem {
  id?: string;
  title?: string;
  href?: string;
  node?: React.ReactNode;
  src?: string;
  alt?: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  ariaLabel?: string;
}

function IconForTool({ id }: { id: string }) {
  const nameMap: Record<string, string> = {
    nextjs: "SiNextdotjs",
    react: "SiReact",
    typescript: "SiTypescript",
    tailwind: "SiTailwindcss",
    framer: "SiFramer",
    figma: "SiFigma",
    notion: "SiNotion",
    adobe: "SiAdobe",
    sketch: "SiSketch",
    webflow: "SiWebflow",
    linear: "SiLinear",
    lottie: "SiLottiefiles",
    photoshop: "SiAdobephotoshop",
    illustrator: "SiAdobeillustrator",
    aftereffects: "SiAdobeaftereffects",
    ahrefs: "SiAhrefs",
    screamingfrog: "SiScreamingfrogseo",
    lighthouse: "SiLighthouse",
    searchconsole: "SiSearchconsole",
    googleanalytics: "SiGoogleanalytics",
    node: "SiNodedotjs",
    postgresql: "SiPostgresql",
    mongodb: "SiMongodb",
    docker: "SiDocker",
    github: "SiGithub",
    wordpress: "SiWordpress",
  };

  const compName = nameMap[id.toLowerCase()];
  const Comp = compName && (SI as any)[compName];
  if (Comp) return <Comp className="w-5 h-5 md:w-6 md:h-6" />;
  return null;
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
  const [currentGap, setCurrentGap] = React.useState(gap);

  React.useEffect(() => {
    const handleResize = () => {
      setCurrentGap(window.innerWidth < 768 ? Math.min(gap, 32) : gap);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [gap]);

  const items = [...logos, ...logos, ...logos, ...logos];

  const maskStyle: React.CSSProperties = fadeOut
    ? {
        maskImage:
          "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
      }
    : {};

  const renderItem = (logo: LogoItem, i: number) => {
    const inner = (
      <div className="flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/10 rounded-xl whitespace-nowrap text-primary">
        {logo.id && <IconForTool id={logo.id} />}
        {!logo.id && logo.src && (
          <img
            src={logo.src}
            alt={logo.alt ?? logo.title ?? ""}
            className="w-auto"
            style={{ height: logoHeight * 0.7 }}
          />
        )}
        <span className="font-mono font-medium text-sm md:text-base tracking-tight uppercase">
          {logo.title}
        </span>
      </div>
    );

    const cls = `flex-shrink-0 transition-all duration-300 ${
      scaleOnHover ? "hover:scale-110 hover:bg-primary/[0.08]" : ""
    }`;

    return logo.href ? (
      <a
        key={i}
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        aria-label={logo.title}
      >
        {inner}
      </a>
    ) : (
      <div key={i} className={cls}>
        {inner}
      </div>
    );
  };

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      style={{ ...maskStyle }}
      aria-label={ariaLabel}
    >
      <div
        className={`logoloop-track-${uid} py-2`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: `${currentGap}px`,
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
        ${
          pauseOnHover
            ? `
        .logoloop-track-${uid}:hover {
          animation-play-state: paused;
        }`
            : ""
        }
        @keyframes logoloop-${uid} {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  );
}
