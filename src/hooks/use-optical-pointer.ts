"use client";

import { useEffect, useRef } from "react";

type UseOpticalPointerOptions = {
  /** CSS custom property prefix, e.g. "cta" → --cta-light-x */
  prefix?: string;
};

/**
 * Tracks pointer position via rAF-throttled CSS custom properties.
 * No React state — safe for hover-driven optical effects.
 */
export function useOpticalPointer<T extends HTMLElement>({
  prefix = "optical",
}: UseOpticalPointerOptions = {}) {
  const ref = useRef<T>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const xVar = `--${prefix}-light-x`;
    const yVar = `--${prefix}-light-y`;

    el.style.setProperty(xVar, "50%");
    el.style.setProperty(yVar, "50%");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const noHover = window.matchMedia("(hover: none)").matches;

    if (reducedMotion || noHover) return;

    const schedule = (nx: number, ny: number) => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        el.style.setProperty(xVar, `${nx * 100}%`);
        el.style.setProperty(yVar, `${ny * 100}%`);
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      schedule(
        (event.clientX - rect.left) / rect.width,
        (event.clientY - rect.top) / rect.height
      );
    };

    const onPointerLeave = () => schedule(0.5, 0.5);

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [prefix]);

  return ref;
}
