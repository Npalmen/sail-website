"use client";

import { useEffect, useId, useRef } from "react";

/** Directional inner-shadow offset — test range 3–5px. */
const RELIEF_DEPTH = 4;

function applyInnerShadow(
  darkInnerRef: React.RefObject<SVGFEOffsetElement | null>,
  fromX: number,
  fromY: number
) {
  const offsetX = fromX * RELIEF_DEPTH;
  const offsetY = fromY * RELIEF_DEPTH;

  darkInnerRef.current?.setAttribute("dx", String(offsetX));
  darkInnerRef.current?.setAttribute("dy", String(offsetY));
}

function applyStaticInnerShadow(
  darkInnerRef: React.RefObject<SVGFEOffsetElement | null>
) {
  applyInnerShadow(darkInnerRef, 0, -1);
}

function useBrandMarkLighting(
  darkInnerRef: React.RefObject<SVGFEOffsetElement | null>
) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      applyStaticInnerShadow(darkInnerRef);
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

      applyInnerShadow(
        darkInnerRef,
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
  }, [darkInnerRef]);
}

/** Flat canvas face + isolated dark inner contour, scroll-driven. */
export function SailBrandMark() {
  const darkInnerRef = useRef<SVGFEOffsetElement>(null);
  const filterId = useId().replace(/:/g, "");

  useBrandMarkLighting(darkInnerRef);

  return (
    <div aria-hidden="true" className="sail-brand-mark">
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
            <feFlood floodColor="#191820" floodOpacity="0.24" result="darkColor" />
            <feComposite
              in="darkColor"
              in2="darkInv"
              operator="in"
              result="darkInner"
            />
            <feComposite
              in="darkInner"
              in2="SourceAlpha"
              operator="in"
              result="darkInnerClipped"
            />
            <feMerge>
              <feMergeNode in="darkInnerClipped" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <span className="sail-brand-mark__glyph sail-brand-mark__face">SAIL</span>
      <span
        aria-hidden="true"
        className="sail-brand-mark__glyph sail-brand-mark__relief"
        style={{ filter: `url(#${filterId})` }}
      >
        SAIL
      </span>
    </div>
  );
}
