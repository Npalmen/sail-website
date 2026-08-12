"use client";

import { useEffect } from "react";

const RELIEF_DEPTH = 3;

/** Static inset light from above (reduced motion). */
function applyStaticDebossLighting(root: HTMLElement) {
  root.style.setProperty("--brand-dark-x", "0px");
  root.style.setProperty("--brand-dark-y", `${-RELIEF_DEPTH}px`);
  root.style.setProperty("--brand-light-x", "0px");
  root.style.setProperty("--brand-light-y", `${RELIEF_DEPTH}px`);
  root.style.setProperty("--brand-shadow-x", "0px");
  root.style.setProperty("--brand-shadow-y", `${-RELIEF_DEPTH}px`);
}

/**
 * Scroll-reactive inset/deboss lighting for the fixed brand mark.
 * Light source arcs from above → lateral → below. No React state.
 */
export function SailBrandLighting() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      applyStaticDebossLighting(root);
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

      const eased = progress * progress * (3 - 2 * progress);

      // -90° = light from above, +90° = light from below
      const sourceAngleDeg = -90 + eased * 180;
      const radians = (sourceAngleDeg * Math.PI) / 180;

      const fromX = Math.cos(radians);
      const fromY = Math.sin(radians);

      const darkX = `${fromX * RELIEF_DEPTH}px`;
      const darkY = `${fromY * RELIEF_DEPTH}px`;
      const lightX = `${-fromX * RELIEF_DEPTH}px`;
      const lightY = `${-fromY * RELIEF_DEPTH}px`;

      root.style.setProperty("--brand-dark-x", darkX);
      root.style.setProperty("--brand-dark-y", darkY);
      root.style.setProperty("--brand-light-x", lightX);
      root.style.setProperty("--brand-light-y", lightY);
      root.style.setProperty("--brand-shadow-x", darkX);
      root.style.setProperty("--brand-shadow-y", darkY);
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
