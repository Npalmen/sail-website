"use client";

import { useEffect, useRef } from "react";

const RELIEF_DEPTH = 5;

function applyReliefVars(
  target: HTMLElement,
  fromX: number,
  fromY: number
) {
  const highlightX = `${fromX * RELIEF_DEPTH}px`;
  const highlightY = `${fromY * RELIEF_DEPTH}px`;
  const shadowX = `${-fromX * RELIEF_DEPTH}px`;
  const shadowY = `${-fromY * RELIEF_DEPTH}px`;

  target.style.setProperty("--brand-highlight-x", highlightX);
  target.style.setProperty("--brand-highlight-y", highlightY);
  target.style.setProperty("--brand-shadow-x", shadowX);
  target.style.setProperty("--brand-shadow-y", shadowY);
}

function applyStaticDebossLighting(target: HTMLElement) {
  applyReliefVars(target, 0, -1);
}

function useBrandMarkLighting(markRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const mark = markRef.current;
    if (!mark) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      applyStaticDebossLighting(mark);
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
      const sourceAngleDeg = -90 + eased * 180;
      const radians = (sourceAngleDeg * Math.PI) / 180;

      applyReliefVars(mark, Math.cos(radians), Math.sin(radians));
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
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [markRef]);
}

/** Inset/debossed SAIL mark — flat face with internal cavity shading. */
export function SailBrandMark() {
  const markRef = useRef<HTMLDivElement>(null);
  useBrandMarkLighting(markRef);

  return (
    <div ref={markRef} aria-hidden="true" className="sail-brand-mark">
      <span className="sail-brand-mark__face">SAIL</span>
    </div>
  );
}
