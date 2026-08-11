import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ctaPrimary, ctaSecondary } from "@/components/shared/cta-styles";
import { SailHalo } from "@/components/shared/sail-halo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { ProductPreview } from "./product-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-canvas">
      <Container className="relative pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        {/* Stacked by default; asymmetric overlap only at lg+ */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6">
          {/* Editorial copy — always first in document order */}
          <div className="relative z-10 pt-8 sm:pt-12 md:pt-14 lg:col-span-5 lg:pt-20 xl:col-span-5 xl:pt-24">
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

          {/* Product stage — follows copy until large desktop */}
          <div
            className={cn(
              "relative z-0 mt-10 sm:mt-12 md:mt-14",
              "lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:mt-16 xl:mt-14",
              "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-1000 motion-safe:delay-200 motion-reduce:animate-none"
            )}
          >
            <SailHalo
              variant="hero"
              className="rounded-2xl border border-border/50 bg-surface-soft-stone/60 p-3 sm:p-4 md:p-5 lg:p-6"
            >
              <ProductPreview />
            </SailHalo>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-surface-warm/80 sm:h-20"
      />
    </section>
  );
}
