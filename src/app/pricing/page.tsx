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
    title: "Arbete att hantera",
    description: "Vilka administrativa områden SAIL ska börja med — mottagning, administration, leads, support eller ett fokuserat urval.",
  },
  {
    title: "Aktiverade kapaciteter",
    description: "Vilka kapacitetsfamiljer som ingår från start, och vilka som kan utökas senare.",
  },
  {
    title: "Automatiseringsnivå",
    description: "Hur långt SAIL får agera — från att informera och föreslå till att förbereda åtgärder och utföra inom godkända scope.",
  },
  {
    title: "Onboarding och konfiguration",
    description: "Hur verksamhetens processer, gränser och operativ kontext etableras tillsammans med SAIL.",
  },
  {
    title: "Utökning över tid",
    description: "Hur fler arbetstyper och auktoritet kan aktiveras när verksamheten är redo.",
  },
] as const;

export default function PricingPage() {
  const { pricing } = homepageContent;

  return (
    <SiteShell>
      <ContentSurface variant="open" width="editorial" align="center" spacing="compact" padding="none">
        <div className="pt-6 text-center sm:pt-10">
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
            Priser
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
          eyebrow="Kommersiell modell"
          headline="Vad som avgör omfattningen"
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
          <p className="text-sm font-medium text-foreground">Priskort</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Plannamn, belopp och paketstrukturer publiceras här när de är
            slutgiltiga. Layouten stödjer framtida priskort utan omdesign.
          </p>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="narrow" align="center" spacing="loose" radius="md">
        <SectionHeader
          eyebrow="Nästa steg"
          headline="Diskutera omfattningen i ett demosamtal."
          align="center"
        />
        <div className="mt-8 text-center">
          <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
            Boka demo
          </CtaLink>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prisuppgifter delas under demosamtalet.
        </p>
      </ContentSurface>
    </SiteShell>
  );
}
