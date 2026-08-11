"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type SailHaloProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Subtle chromatic perimeter accent for frosted surfaces (navbar).
 * Pointer interaction is minimal — shifts gradient origin only.
 */
export function SailHalo({ children, className }: SailHaloProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });

  const applyPointerVars = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;

    const { x, y } = pointerRef.current;
    el.style.setProperty("--halo-x", `${x * 100}%`);
    el.style.setProperty("--halo-y", `${y * 100}%`);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const prefersNoHover = window.matchMedia("(hover: none)").matches;

    if (prefersReducedMotion || prefersNoHover) return;

    const scheduleUpdate = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        applyPointerVars();
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      pointerRef.current = {
        x: 0.5 + ((event.clientX - rect.left) / rect.width - 0.5) * 0.1,
        y: 0.5 + ((event.clientY - rect.top) / rect.height - 0.5) * 0.1,
      };
      scheduleUpdate();
    };

    const onPointerLeave = () => {
      pointerRef.current = { x: 0.5, y: 0.5 };
      scheduleUpdate();
    };

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [applyPointerVars]);

  return (
    <div
      ref={rootRef}
      className={cn("sail-halo sail-halo--nav", className)}
      style={
        {
          "--halo-x": "50%",
          "--halo-y": "50%",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
