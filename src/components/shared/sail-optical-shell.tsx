"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type OpticalIntensity = "strong" | "medium" | "subtle";
type OpticalSurface = "light" | "dark";

type SailOpticalShellProps = {
  children: ReactNode;
  className?: string;
  trackPointer?: boolean;
  intensity?: OpticalIntensity;
  surface?: OpticalSurface;
};

export function SailOpticalShell({
  children,
  className,
  trackPointer = true,
  intensity = "strong",
  surface = "light",
}: SailOpticalShellProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  const applyPointerVars = useCallback((nx: number, ny: number) => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty("--pointer-x", `${nx * 100}%`);
    el.style.setProperty("--pointer-y", `${ny * 100}%`);
    el.style.setProperty("--light-x", `${8 + nx * 18}%`);
    el.style.setProperty("--light-y", `${6 + ny * 16}%`);
    el.style.setProperty(
      "--shimmer-angle",
      `${120 + (nx - 0.5) * 36 + (ny - 0.5) * 24}deg`
    );
  }, []);

  useEffect(() => {
    if (!trackPointer) return;

    const el = rootRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const noHover = window.matchMedia("(hover: none)").matches;

    if (reducedMotion || noHover) return;

    const schedule = (nx: number, ny: number) => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        applyPointerVars(nx, ny);
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = (event.clientY - rect.top) / rect.height;
      schedule(nx, ny);
    };

    const onPointerLeave = () => schedule(0.5, 0.5);

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [trackPointer, applyPointerVars]);

  return (
    <div
      ref={rootRef}
      className={cn(
        "sail-optical-shell",
        intensity === "strong" && "sail-optical-shell--strong",
        intensity === "medium" && "sail-optical-shell--medium",
        intensity === "subtle" && "sail-optical-shell--subtle",
        className
      )}
      style={
        {
          "--pointer-x": "50%",
          "--pointer-y": "50%",
          "--light-x": "12%",
          "--light-y": "10%",
          "--shimmer-angle": "128deg",
        } as CSSProperties
      }
    >
      <div aria-hidden="true" className="sail-optical-border" />
      {trackPointer && (
        <div aria-hidden="true" className="sail-optical-pointer" />
      )}
      <div
        className={cn(
          "sail-glass-surface",
          surface === "dark" && "sail-glass-surface--dark"
        )}
      >
        {children}
      </div>
    </div>
  );
}
