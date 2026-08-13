import Link from "next/link";

import { ContentSurface } from "@/components/layout/content-surface";
import { CtaLink } from "@/components/shared/cta-link";
import { ctaSecondary } from "@/components/shared/cta-styles";
import { productPageContent, productJourneyScenario } from "@/config/product-page";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function HeroPipeline() {
  const steps = ["Mottagen", "Förstådd", "Bedömd", "Förberedd", "Klart"] as const;
  const activeIndex = 2;

  return (
    <div
      aria-hidden="true"
      className="sail-surface-product shadow-product-floating rounded-[16px] p-3 sm:rounded-[var(--radius-module-workspace)] sm:p-4"
    >
      <div className="sail-inner-module--product overflow-hidden">
        <div className="flex items-center justify-between border-b border-border/40 bg-surface-product-muted/70 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-600/70" />
            <span className="text-xs font-medium text-foreground">Operativ vy</span>
          </div>
          <span className="text-[11px] text-muted-foreground">Acme Corp</span>
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-sm font-semibold text-foreground">
            {productJourneyScenario.incoming.customer} ·{" "}
            {productJourneyScenario.incoming.title}
          </p>

          <div className="mt-5 border-t border-border/40 pt-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-0">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.06em]",
                      index <= activeIndex
                        ? "bg-surface-product text-sail-blue ring-1 ring-sail-blue/20"
                        : "bg-surface-product-muted/60 text-muted-foreground"
                    )}
                  >
                    {step}
                  </span>
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-1.5 hidden h-px w-4 bg-border/70 sm:inline sm:w-6"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductHero() {
  const { eyebrow, headline, body } = productPageContent.hero;

  return (
    <ContentSurface variant="open" width="wide" align="center" spacing="compact" padding="none">
      <div className="grid gap-10 pt-6 sm:pt-10 xl:grid-cols-12 xl:items-start xl:gap-x-12">
        <div className="xl:col-span-5">
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-[16ch] text-display font-semibold text-foreground sm:max-w-[18ch]">
            {headline}
          </h1>
          <p className="text-body-readable mt-5 max-w-[38ch] text-base leading-relaxed sm:mt-6 sm:text-[17px] sm:leading-[1.65]">
            {body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg w-full sm:w-auto">
              Boka demo
            </CtaLink>
            <Link href="#product-journey" className={cn(ctaSecondary, "justify-center sm:justify-start")}>
              Se produktflödet
            </Link>
          </div>
        </div>

        <div className="xl:col-span-7 xl:pt-2">
          <HeroPipeline />
        </div>
      </div>
    </ContentSurface>
  );
}
