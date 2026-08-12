"use client";

import { useEffect } from "react";

const RELIEF_DEPTH = 4.5;

function applyReliefVars(
  target: HTMLElement,
  fromX: number,
  fromY: number
) {
  const darkX = `${fromX * RELIEF_DEPTH}px`;
  const darkY = `${fromY * RELIEF_DEPTH}px`;
  const lightX = `${-fromX * RELIEF_DEPTH}px`;
  const lightY = `${-fromY * RELIEF_DEPTH}px`;

  target.style.setProperty("--brand-dark-x", darkX);
  target.style.setProperty("--brand-dark-y", darkY);
  target.style.setProperty("--brand-light-x", lightX);
  target.style.setProperty("--brand-light-y", lightY);
  target.style.setProperty("--brand-shadow-x", darkX);
  target.style.setProperty("--brand-shadow-y", darkY);
  target.style.setProperty("--brand-highlight-x", lightX);
  target.style.setProperty("--brand-highlight-y", lightY);
}

/** Static inset light from above (reduced motion). */
function applyStaticDebossLighting(root: HTMLElement, mark: HTMLElement | null) {
  applyReliefVars(root, 0, -1);
  if (mark) applyReliefVars(mark, 0, -1);
}

/**
 * Scroll-reactive inset/deboss lighting for the fixed brand mark.
 * Light source arcs from above → lateral → below. No React state.
 */
export function SailBrandLighting() {
  useEffect(() => {
    const root = document.documentElement;
    const mark = document.querySelector<HTMLElement>(".sail-brand-mark");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      applyStaticDebossLighting(root, mark);
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

      applyReliefVars(root, fromX, fromY);
      if (mark) applyReliefVars(mark, fromX, fromY);
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        updateBrandLighting();
        frame = null;
      });
    };

    updateBrandLighting();
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
