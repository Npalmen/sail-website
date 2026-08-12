"use client";

import { useEffect, useRef } from "react";

import { opticalCtaManager } from "@/lib/optical-cta-manager";

export function useCtaProximity<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (reducedMotion || !finePointer) return;

    opticalCtaManager.register(el);
    return () => opticalCtaManager.unregister(el);
  }, []);

  return ref;
}
