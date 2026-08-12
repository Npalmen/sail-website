import type { Metadata } from "next";

import { ContentSurface } from "@/components/layout/content-surface";
import { SiteShell } from "@/components/layout/site-shell";
import { CtaLink } from "@/components/shared/cta-link";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { pageMetadata, routes, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
};

const themes = [
  {
    title: "Administrative work should not consume the business",
    body: "Businesses receive work constantly — but the administrative layer around that work often still falls to people. SAIL exists to handle that layer systematically.",
  },
  {
    title: "AI within defined authority",
    body: "SAIL is designed to act within boundaries the business sets — not to assume open-ended autonomy over operations.",
  },
  {
    title: "Control matters",
    body: "Visibility, approval boundaries, and traceability are part of the product — not afterthoughts.",
  },
  {
    title: "A digital coworker — not a chatbot",
    body: "SAIL is built around receiving work, understanding context, deciding next steps, and preparing or executing actions within authority.",
  },
  {
    title: "Stable system, moving work",
    body: "The underlying SAIL system remains consistent while information and administrative work move through it — under your control.",
  },
] as const;

export default function AboutPage() {
  return (
    <SiteShell>
      <ContentSurface variant="open" width="editorial" align="center" spacing="compact" padding="none">
        <div className="pt-6 text-center sm:pt-10">
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
            About SAIL
          </p>
          <h1 className="mt-4 text-display font-semibold text-foreground">
            Built for businesses that need work to move — under control.
          </h1>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="standard" align="left" spacing="default" radius="md">
        <div className="space-y-10">
          {themes.map((theme) => (
            <div key={theme.title}>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {theme.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {theme.body}
              </p>
            </div>
          ))}
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="narrow" align="center" spacing="loose" radius="md">
        <SectionHeader
          eyebrow="Explore"
          headline="Learn more about the product and how SAIL works."
          align="center"
        />
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <DeepLink href={routes.product} className="mt-0">
            Explore the product
          </DeepLink>
          <DeepLink href={routes.security} className="mt-0">
            Security & control
          </DeepLink>
        </div>
        <div className="mt-10 text-center">
          <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
            Book a demo
          </CtaLink>
        </div>
      </ContentSurface>
    </SiteShell>
  );
}
