import type { Metadata } from "next";

import { ContentSurface } from "@/components/layout/content-surface";
import { SiteShell } from "@/components/layout/site-shell";
import { CtaLink } from "@/components/shared/cta-link";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";
import { pageMetadata, routes, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.security.title,
  description: pageMetadata.security.description,
};

const extendedPrinciples = [
  {
    title: "Controlled permissions",
    description:
      "Access and authority are scoped to what your business defines. SAIL operates within boundaries rather than assuming broad access.",
  },
  {
    title: "Scoped authority",
    description:
      "Different types of work can carry different levels of autonomy — from informing you to preparing actions to acting within approved scopes.",
  },
  {
    title: "Approval boundaries",
    description:
      "Actions respect the level of autonomy configured for each category of work. Sensitive steps wait for explicit approval.",
  },
  {
    title: "Activity & traceability",
    description:
      "Activity history shows what SAIL understood, decided, and prepared — supporting review and accountability.",
  },
  {
    title: "Human control",
    description:
      "Your business remains the authority. SAIL is designed to move work forward without removing your ability to intervene.",
  },
  {
    title: "Business boundaries",
    description:
      "SAIL is designed around the boundaries of a business — its processes, authority structures, and operational scope.",
  },
] as const;

export default function SecurityPage() {
  const { autonomy, security } = homepageContent;

  return (
    <SiteShell>
      <ContentSurface variant="open" width="editorial" align="center" spacing="compact" padding="none">
        <div className="pt-6 text-center sm:pt-10">
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
            Security & trust
          </p>
          <h1 className="mt-4 text-display font-semibold text-foreground">
            {security.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            SAIL is designed for businesses that need control, visibility, and clear
            boundaries — not surprises.
          </p>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="wide" align="center" spacing="default" radius="lg">
        <SectionHeader eyebrow="Principles" headline="How SAIL approaches trust" align="center" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 sail-module-grid">
          {extendedPrinciples.map((principle) => (
            <li key={principle.title} className="sail-inner-module flex flex-col p-5 sm:p-6">
              <h3 className="text-base font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </ContentSurface>

      <ContentSurface variant="dark" width="wide" align="center" spacing="default" radius="lg">
        <SectionHeader eyebrow={autonomy.eyebrow} headline={autonomy.headline} variant="dark" align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 sail-module-grid">
          {autonomy.levels.map((level) => (
            <div key={level.title} className="sail-inner-module--dark flex flex-col p-5">
              <span className="font-mono text-xs text-white/40">Level {level.level}</span>
              <h3 className="mt-3 text-lg font-semibold text-white/95">{level.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{level.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <DeepLink href={routes.product} className="text-white/60 hover:text-white/90">
            See the product control model
          </DeepLink>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="standard" align="center" spacing="loose" radius="md">
        <SectionHeader
          eyebrow="Important note"
          headline="Certifications and compliance claims"
          description="This page describes product principles and design intent. Specific certifications, audits, or compliance approvals are not claimed here unless explicitly verified and published."
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
