import type { Metadata } from "next";

import { ContentSurface } from "@/components/layout/content-surface";
import { SiteShell } from "@/components/layout/site-shell";
import { CtaLink } from "@/components/shared/cta-link";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";
import { pageMetadata, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.pricing.title,
  description: pageMetadata.pricing.description,
};

const scopeFactors = [
  {
    title: "Work to handle",
    description: "Which administrative areas SAIL should begin with — reception, administration, leads, support, or a focused subset.",
  },
  {
    title: "Capabilities activated",
    description: "Which capability families are in scope at the start, and which can be expanded later.",
  },
  {
    title: "Level of automation",
    description: "How far SAIL may act — from informing and suggesting to preparing actions and executing within approved scopes.",
  },
  {
    title: "Onboarding & configuration",
    description: "How your business processes, boundaries, and operational context are established with SAIL.",
  },
  {
    title: "Expansion over time",
    description: "How additional work types and authority can be activated as your business is ready.",
  },
] as const;

export default function PricingPage() {
  const { pricing } = homepageContent;

  return (
    <SiteShell>
      <ContentSurface variant="open" width="editorial" align="center" spacing="compact" padding="none">
        <div className="pt-6 text-center sm:pt-10">
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
            Pricing
          </p>
          <h1 className="mt-4 text-display font-semibold text-foreground">
            {pricing.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {pricing.body}
          </p>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="standard" align="center" spacing="default" radius="lg">
        <SectionHeader
          eyebrow="Commercial model"
          headline="What determines scope"
          align="center"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sail-module-grid">
          {scopeFactors.map((factor) => (
            <li key={factor.title} className="sail-inner-module flex flex-col p-5">
              <h3 className="text-base font-semibold text-foreground">{factor.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {factor.description}
              </p>
            </li>
          ))}
        </ul>
      </ContentSurface>

      <ContentSurface variant="frosted" width="narrow" align="center" spacing="default" radius="md">
        <div className="sail-inner-module border border-dashed border-border/70 p-8 text-center sm:p-10">
          <p className="text-sm font-medium text-foreground">Pricing cards</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Plan names, currency amounts, and package structures will be published here once
            finalized. The layout supports future pricing cards without redesign.
          </p>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="narrow" align="center" spacing="loose" radius="md">
        <SectionHeader
          eyebrow="Next step"
          headline="Discuss scope in a demo conversation."
          align="center"
        />
        <div className="mt-8 text-center">
          <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
            Book a demo
          </CtaLink>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Pricing details will be shared during your demo conversation.
        </p>
      </ContentSurface>
    </SiteShell>
  );
}
