"use client";

import { useEffect } from "react";

const STATIC_SHADOW = { x: "1.5px", y: "2px" };
const STATIC_HIGHLIGHT = { x: "-1.5px", y: "-2px" };

function applyLighting(
  root: HTMLElement,
  shadowX: number,
  shadowY: number
) {
  root.style.setProperty("--brand-shadow-x", `${shadowX}px`);
  root.style.setProperty("--brand-shadow-y", `${shadowY}px`);
  root.style.setProperty("--brand-highlight-x", `${-shadowX}px`);
  root.style.setProperty("--brand-highlight-y", `${-shadowY}px`);
}

function applyStaticLighting(root: HTMLElement) {
  root.style.setProperty("--brand-shadow-x", STATIC_SHADOW.x);
  root.style.setProperty("--brand-shadow-y", STATIC_SHADOW.y);
  root.style.setProperty("--brand-highlight-x", STATIC_HIGHLIGHT.x);
  root.style.setProperty("--brand-highlight-y", STATIC_HIGHLIGHT.y);
}

/** Scroll-reactive deboss lighting for the fixed brand mark. No React state. */
export function SailBrandLighting() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      applyStaticLighting(root);
      return;
    }

    let frame: number | null = null;

    const updateBrandLighting = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0
          ? Math.max(0, Math.min(1, window.scrollY / maxScroll))
          : 0;

      const startAngle = -60;
      const endAngle = 60;
      const angle = startAngle + (endAngle - startAngle) * progress;
      const radians = (angle * Math.PI) / 180;
      const depth = 2.2;

      applyLighting(
        root,
        Math.cos(radians) * depth,
        Math.sin(radians) * depth
      );
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        updateBrandLighting();
        frame = null;
      });
    };

    updateBrandLighting();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
