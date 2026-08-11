import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { ProductPreview } from "./product-preview";

const ctaPrimary =
  "inline-flex h-10 items-center justify-center rounded-[10px] bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2";

const ctaSecondary =
  "inline-flex h-10 items-center justify-center px-2 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/10 focus-visible:ring-offset-2";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-warm">
      <Container className="relative md:pb-16 lg:pb-20 xl:pb-24">
        <div className="md:grid md:grid-cols-12 md:items-start md:gap-x-6">
          {/* Editorial copy */}
          <div className="relative z-10 pt-12 sm:pt-16 md:col-span-5 md:pt-20 lg:pt-24 xl:col-span-5 xl:pt-28">
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

          {/* Product composition — overlaps copy on desktop */}
          <div
            className={cn(
              "relative z-0 mt-12 sm:mt-14",
              "md:col-span-8 md:col-start-5 md:row-start-1 md:mt-16",
              "lg:mt-20 xl:col-span-8 xl:col-start-5 xl:mt-16",
              "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-1000 motion-safe:delay-200 motion-reduce:animate-none"
            )}
          >
            <div className="rounded-2xl bg-surface-cloud/50 p-3 sm:p-4 md:p-5 lg:p-6">
              <ProductPreview />
            </div>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-surface-cloud/50"
      />
    </section>
  );
}
