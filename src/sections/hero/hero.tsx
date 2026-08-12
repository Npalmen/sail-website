import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SailCanvasPattern } from "@/components/shared/sail-canvas-pattern";
import { SailFlowPattern } from "@/components/shared/sail-flow-pattern";
import { ctaPrimary, ctaSecondary } from "@/components/shared/cta-styles";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { ProductPreview } from "./product-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-canvas">
      <SailCanvasPattern variant="hero" />
      <SailFlowPattern />

      <Container className="relative z-10 pb-12 sm:pb-16 xl:pb-24">
        <div className="flex flex-col xl:grid xl:grid-cols-12 xl:items-start xl:gap-x-8">
          {/* Copy — always first in document order */}
          <div className="relative z-10 pt-8 sm:pt-12 md:pt-14 xl:col-span-5 xl:pt-20 2xl:pt-24">
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-reduce:animate-none">
              <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
                Your digital coworker
              </p>

              <h1 className="mt-5 max-w-[12ch] text-display font-semibold text-foreground">
                Work moves forward.
              </h1>

              <p className="mt-6 max-w-[34ch] text-base leading-relaxed text-muted-foreground sm:text-[17px] sm:leading-[1.65]">
                SAIL handles the administrative work around your business&nbsp;—
                while you stay in control.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link href={siteConfig.links.bookDemo} className={ctaPrimary}>
                  Book a demo
                </Link>
                <Link href="#controlled-momentum" className={ctaSecondary}>
                  See how it works
                </Link>
              </div>
            </div>
          </div>

          {/* Product stage — follows copy below xl */}
          <div
            className={cn(
              "relative z-0 mt-10 sm:mt-12 md:mt-14",
              "xl:col-span-7 xl:col-start-6 xl:row-start-1 xl:mt-16 2xl:mt-14",
              "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-1000 motion-safe:delay-200 motion-reduce:animate-none"
            )}
          >
            <div className="sail-field-stage p-3 sm:p-4 md:p-5 xl:p-6">
              <ProductPreview />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
