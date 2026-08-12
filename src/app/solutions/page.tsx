import type { Metadata } from "next";

import { ContentSurface } from "@/components/layout/content-surface";
import { SiteShell } from "@/components/layout/site-shell";
import { CtaLink } from "@/components/shared/cta-link";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";
import { pageMetadata, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.solutions.title,
  description: pageMetadata.solutions.description,
};

const scenarios = [
  {
    title: "Incoming request",
    steps: [
      "Request arrives through email or a connected channel",
      "SAIL understands intent and extracts relevant details",
      "Context is matched to customer or internal records",
      "Next action is prepared within defined authority",
      "Your team approves where required",
    ],
  },
  {
    title: "Routine administration",
    steps: [
      "Administrative item enters the workflow",
      "SAIL sorts and prepares the administrative step",
      "Supporting information is gathered",
      "Action is prepared or routed for review",
      "Activity remains visible in the workspace",
    ],
  },
  {
    title: "Lead opportunity",
    steps: [
      "Incoming communication suggests a sales opportunity",
      "SAIL identifies relevant context",
      "Next step is prepared for your sales process",
      "Your team decides how to proceed",
    ],
  },
  {
    title: "Support request",
    steps: [
      "Service request is received",
      "SAIL understands the issue and relevant history",
      "Response or escalation is prepared within guidelines",
      "Approval boundaries are respected",
    ],
  },
] as const;

export default function SolutionsPage() {
  const { capabilities, integrations } = homepageContent;

  return (
    <SiteShell>
      <ContentSurface variant="open" width="editorial" align="center" spacing="compact" padding="none">
        <div className="pt-6 text-center sm:pt-10">
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
            Solutions
          </p>
          <h1 className="mt-4 text-display font-semibold text-foreground">
            What kinds of work can SAIL help with?
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            SAIL handles administrative work around your operations — preparing,
            routing, and acting within boundaries you define.
          </p>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="wide" align="center" spacing="default" radius="lg">
        <SectionHeader eyebrow="Capability areas" headline={capabilities.headline} align="center" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sail-module-grid">
          {capabilities.items.map((item) => (
            <li key={item.title} className="sail-inner-module flex flex-col p-5">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </ContentSurface>

      <ContentSurface variant="frosted" width="standard" align="left" spacing="default" radius="md">
        <SectionHeader
          eyebrow="Scenarios"
          headline="How work moves through SAIL"
          description="Illustrative flows — not claims about specific production integrations or outcomes."
        />
        <div className="mt-10 space-y-6">
          {scenarios.map((scenario) => (
            <div key={scenario.title} className="sail-inner-module p-5 sm:p-6">
              <h3 className="text-base font-semibold text-foreground">{scenario.title}</h3>
              <ol className="mt-4 space-y-2">
                {scenario.steps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="shrink-0 font-mono text-xs text-muted-foreground/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="wide" align="center" spacing="default" radius="md">
        <SectionHeader eyebrow={integrations.eyebrow} headline={integrations.headline} align="center" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sail-module-grid">
          {integrations.categories.map((category) => (
            <li key={category.name} className="sail-inner-module flex flex-col p-5">
              <h3 className="text-sm font-semibold text-foreground">{category.name}</h3>
              <p className="mt-2 flex-1 text-xs text-muted-foreground">{category.examples}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-lg text-center text-xs text-muted-foreground">
          Categories shown for illustration. Supported connections will be confirmed as they
          become available.
        </p>
      </ContentSurface>

      <ContentSurface variant="frosted" width="narrow" align="center" spacing="loose" radius="md">
        <SectionHeader
          eyebrow="Next step"
          headline="Discuss the work you want SAIL to handle."
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
