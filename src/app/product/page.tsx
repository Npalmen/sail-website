import type { Metadata } from "next";

import { ContentSurface } from "@/components/layout/content-surface";
import { SiteShell } from "@/components/layout/site-shell";
import { DeepLink } from "@/components/shared/deep-link";
import { CtaLink } from "@/components/shared/cta-link";
import { SectionHeader } from "@/components/shared/section-header";
import { ProductExperience } from "@/sections/product-experience/product-experience";
import { ProductPreview } from "@/sections/hero/product-preview";
import { homepageContent } from "@/config/homepage";
import { pageMetadata, routes, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.product.title,
  description: pageMetadata.product.description,
};

export default function ProductPage() {
  const { workflow, capabilities, autonomy } = homepageContent;

  return (
    <SiteShell>
      <ContentSurface variant="open" width="wide" align="center" spacing="compact" padding="none">
        <div className="pt-6 sm:pt-10">
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
            SAIL Product
          </p>
          <h1 className="mt-4 max-w-2xl text-display font-semibold text-foreground">
            The digital coworker built around your business.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            SAIL receives administrative work, understands context, decides what
            needs to happen, and acts within the authority your business defines.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
              Book a demo
            </CtaLink>
            <DeepLink href="#capabilities" className="mt-0">
              Explore capabilities
            </DeepLink>
          </div>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="wide" align="center" spacing="default" radius="lg">
        <SectionHeader
          eyebrow="Product preview"
          headline="Work moves through SAIL — visibly and controllably."
        />
        <div className="mt-8 sail-surface-frosted rounded-[var(--radius-module-outer)] p-3 sm:p-4">
          <ProductPreview />
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="standard" align="left" spacing="default" radius="md">
        <SectionHeader
          eyebrow="Receiving work"
          headline="How SAIL receives work"
          description="Incoming administrative work arrives through the channels businesses already use — communication, documents, requests, and connected systems."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {["Communication", "Documents & forms", "Customer requests", "Business systems"].map(
            (item) => (
              <li key={item} className="sail-inner-module p-4 text-sm text-foreground">
                {item}
              </li>
            )
          )}
        </ul>
      </ContentSurface>

      <ContentSurface variant="frosted" width="standard" align="right" spacing="default" radius="md">
        <SectionHeader
          eyebrow="Understanding"
          headline="How SAIL understands work"
          description="SAIL extracts intent, matches context, and applies business rules — conservatively and traceably."
        />
        <ul className="mt-8 space-y-3">
          {[
            "Context from incoming communication",
            "Intent and relevant details",
            "Customer and record context where available",
            "Business rules and prior activity",
          ].map((item) => (
            <li key={item} className="border-l-2 border-border pl-4 text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </ContentSurface>

      <ContentSurface id="workflow" variant="frosted" width="wide" align="center" spacing="default" radius="lg">
        <SectionHeader eyebrow={workflow.eyebrow} headline={workflow.headline} />
        <ol className="mt-10 grid gap-4 sm:grid-cols-5 sail-module-grid">
          {workflow.steps.map((step, index) => (
            <li key={step.title} className="sail-inner-module flex flex-col p-4">
              <span className="font-mono text-xs text-muted-foreground">{index + 1}</span>
              <h3 className="mt-2 text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </ContentSurface>

      <ContentSurface id="capabilities" variant="frosted" width="standard" align="right" spacing="default" radius="md">
        <SectionHeader eyebrow={capabilities.eyebrow} headline={capabilities.headline} />
        <div className="mt-8 space-y-4">
          {capabilities.items.map((item) => (
            <div key={item.title} className="sail-inner-module p-5">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                SAIL prepares and routes work at this level — expanding capability as your
                business defines what should be handled next.
              </p>
            </div>
          ))}
        </div>
      </ContentSurface>

      <ProductExperience />

      <ContentSurface variant="dark" width="wide" align="center" spacing="default" radius="lg">
        <SectionHeader eyebrow={autonomy.eyebrow} headline={autonomy.headline} variant="dark" />
        <DeepLink href={routes.security} className="text-white/60 hover:text-white/90">
          Learn about security & control
        </DeepLink>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 sail-module-grid">
          {autonomy.levels.map((level) => (
            <div key={level.title} className="sail-inner-module--dark flex flex-col p-5 sm:p-6">
              <span className="font-mono text-xs text-white/40">Level {level.level}</span>
              <h3 className="mt-3 text-lg font-semibold text-white/95">{level.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{level.description}</p>
            </div>
          ))}
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="narrow" align="center" spacing="loose" radius="md">
        <SectionHeader
          eyebrow="Next step"
          headline="See SAIL in the context of your business."
          align="center"
        />
        <div className="mt-8 text-center">
          <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
            Book a demo
          </CtaLink>
        </div>
      </ContentSurface>
    </SiteShell>
  );
}
