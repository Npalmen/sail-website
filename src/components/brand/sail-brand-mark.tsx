"use client";

import { useEffect, useId, useRef } from "react";

const RELIEF_DEPTH = 4;

function applyReliefVars(
  target: HTMLElement,
  darkInnerRef: React.RefObject<SVGFEOffsetElement | null>,
  lightInnerRef: React.RefObject<SVGFEOffsetElement | null>,
  fromX: number,
  fromY: number
) {
  const highlightX = fromX * RELIEF_DEPTH;
  const highlightY = fromY * RELIEF_DEPTH;
  const shadowX = -fromX * RELIEF_DEPTH;
  const shadowY = -fromY * RELIEF_DEPTH;

  target.style.setProperty("--brand-highlight-x", `${highlightX}px`);
  target.style.setProperty("--brand-highlight-y", `${highlightY}px`);
  target.style.setProperty("--brand-shadow-x", `${shadowX}px`);
  target.style.setProperty("--brand-shadow-y", `${shadowY}px`);

  darkInnerRef.current?.setAttribute("dx", String(highlightX));
  darkInnerRef.current?.setAttribute("dy", String(highlightY));
  lightInnerRef.current?.setAttribute("dx", String(shadowX));
  lightInnerRef.current?.setAttribute("dy", String(shadowY));
}

function applyStaticDebossLighting(
  target: HTMLElement,
  darkInnerRef: React.RefObject<SVGFEOffsetElement | null>,
  lightInnerRef: React.RefObject<SVGFEOffsetElement | null>
) {
  applyReliefVars(target, darkInnerRef, lightInnerRef, 0, -1);
}

function useBrandMarkLighting(
  markRef: React.RefObject<HTMLElement | null>,
  darkInnerRef: React.RefObject<SVGFEOffsetElement | null>,
  lightInnerRef: React.RefObject<SVGFEOffsetElement | null>
) {
  useEffect(() => {
    const mark = markRef.current;
    if (!mark) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      applyStaticDebossLighting(mark, darkInnerRef, lightInnerRef);
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

      applyReliefVars(
        mark,
        darkInnerRef,
        lightInnerRef,
        Math.cos(radians),
        Math.sin(radians)
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
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [markRef, darkInnerRef, lightInnerRef]);
}

/** Inset/debossed SAIL mark — SVG inner relief, scroll-driven light. */
export function SailBrandMark() {
  const markRef = useRef<HTMLDivElement>(null);
  const darkInnerRef = useRef<SVGFEOffsetElement>(null);
  const lightInnerRef = useRef<SVGFEOffsetElement>(null);
  const filterId = useId().replace(/:/g, "");

  useBrandMarkLighting(markRef, darkInnerRef, lightInnerRef);

  return (
    <div ref={markRef} aria-hidden="true" className="sail-brand-mark">
      <svg
        aria-hidden="true"
        className="sail-brand-mark__defs"
        width="0"
        height="0"
      >
        <defs>
          <filter
            id={filterId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="2.2"
              result="darkBlur"
            />
            <feOffset
              ref={darkInnerRef}
              in="darkBlur"
              dx="0"
              dy="-4"
              result="darkOff"
            />
            <feComposite
              in="SourceAlpha"
              in2="darkOff"
              operator="out"
              result="darkInv"
            />
            <feFlood floodColor="#191820" floodOpacity="0.32" result="darkColor" />
            <feComposite
              in="darkColor"
              in2="darkInv"
              operator="in"
              result="darkInner"
            />

            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="1.6"
              result="lightBlur"
            />
            <feOffset
              ref={lightInnerRef}
              in="lightBlur"
              dx="0"
              dy="4"
              result="lightOff"
            />
            <feComposite
              in="SourceAlpha"
              in2="lightOff"
              operator="out"
              result="lightInv"
            />
            <feFlood floodColor="#ffffff" floodOpacity="0.36" result="lightColor" />
            <feComposite
              in="lightColor"
              in2="lightInv"
              operator="in"
              result="lightInner"
            />

            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="darkInner" />
              <feMergeNode in="lightInner" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <span
        className="sail-brand-mark__face"
        style={{ filter: `url(#${filterId})` }}
      >
        SAIL
      </span>
    </div>
  );
}
