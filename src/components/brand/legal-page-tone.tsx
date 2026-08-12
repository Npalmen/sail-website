"use client";

import { useEffect } from "react";

/** Restrains fixed brand mark on legal/readability-first pages. */
export function LegalPageTone() {
  useEffect(() => {
    document.documentElement.dataset.pageTone = "legal";
    return () => {
      delete document.documentElement.dataset.pageTone;
    };
  }, []);

  return null;
}
