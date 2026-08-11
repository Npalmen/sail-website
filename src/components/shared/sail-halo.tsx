"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type SailHaloVariant = "nav" | "hero";

type SailHaloProps = {
  children: ReactNode;
  className?: string;
  variant?: SailHaloVariant;
};

const variantStyles: Record<SailHaloVariant, string> = {
  nav: "sail-halo--nav",
  hero: "sail-halo--hero",
};

export function SailHalo({
  children,
  className,
  variant = "nav",
}: SailHaloProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const pointerRef = useRef({ x: 0.5, y: 0.5, active: false });

  const applyPointerVars = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;

    const { x, y, active } = pointerRef.current;
    el.style.setProperty("--halo-x", `${x * 100}%`);
    el.style.setProperty("--halo-y", `${y * 100}%`);

    if (active) {
      const dist = Math.hypot(x - 0.5, y - 0.5);
      el.style.setProperty(
        "--halo-proximity",
        String(Math.max(0, Math.min(1, 1 - dist * 1.6)))
      );
    } else {
      el.style.setProperty("--halo-proximity", "0");
    }
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const prefersNoHover = window.matchMedia("(hover: none)").matches;

    if (prefersReducedMotion || prefersNoHover) {
      applyPointerVars();
      return;
    }

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
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
        active: true,
      };
      scheduleUpdate();
    };

    const onPointerLeave = () => {
      pointerRef.current = { x: 0.5, y: 0.5, active: false };
      scheduleUpdate();
    };

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [applyPointerVars]);

  return (
    <div
      ref={rootRef}
      className={cn("sail-halo", variantStyles[variant], className)}
      style={
        {
          "--halo-x": "50%",
          "--halo-y": "50%",
          "--halo-proximity": "0",
        } as CSSProperties
      }
    >
      <div aria-hidden="true" className="sail-halo__orb sail-halo__orb--1" />
      <div aria-hidden="true" className="sail-halo__orb sail-halo__orb--2" />
      <div aria-hidden="true" className="sail-halo__orb sail-halo__orb--3" />
      <div className="sail-halo__surface">{children}</div>
    </div>
  );
}
