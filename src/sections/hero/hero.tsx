import Link from "next/link";

import { ContentSurface } from "@/components/layout/content-surface";
import { CtaLink } from "@/components/shared/cta-link";
import { ctaSecondary } from "@/components/shared/cta-styles";
import { siteConfig, routes } from "@/config/site";
import { cn } from "@/lib/utils";

import { ProductPreview } from "./product-preview";

export function Hero() {
  return (
    <>
      <ContentSurface
        as="section"
        variant="open"
        width="wide"
        align="center"
        spacing="compact"
        padding="none"
      >
        <div className="flex flex-col xl:grid xl:grid-cols-12 xl:items-start xl:gap-x-10">
          <div className="relative z-10 pt-6 sm:pt-10 md:pt-12 xl:col-span-5 xl:pt-16">
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-reduce:animate-none">
              <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
                Din digitala medarbetare
              </p>

              <h1 className="mt-5 max-w-[12ch] text-display font-semibold text-foreground">
                Arbetet rör sig framåt.
              </h1>

              <p className="mt-6 max-w-[34ch] text-base leading-relaxed text-muted-foreground sm:text-[17px] sm:leading-[1.65]">
                SAIL hanterar administrationen kring din verksamhet&nbsp;—
                medan du behåller kontrollen.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
                  Boka demo
                </CtaLink>
                <Link href={routes.product} className={ctaSecondary}>
                  Se hur det fungerar
                </Link>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "relative z-0 mt-10 sm:mt-12 md:mt-14",
              "xl:col-span-7 xl:col-start-6 xl:row-start-1 xl:mt-14",
              "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-1000 motion-safe:delay-200 motion-reduce:animate-none"
            )}
          >
            <div className="sail-surface-frosted shadow-glass-floating rounded-[var(--radius-surface-md)] p-3 sm:p-4 md:p-5">
              <ProductPreview />
            </div>
          </div>
        </div>
      </ContentSurface>
    </>
  );
}
