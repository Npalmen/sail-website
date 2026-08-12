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
    title: "Kontrollerade behörigheter",
    description:
      "Åtkomst och auktoritet begränsas till det din verksamhet definierar. SAIL arbetar inom gränser i stället för att anta bred åtkomst.",
  },
  {
    title: "Avgränsad auktoritet",
    description:
      "Olika typer av arbete kan ha olika autonominivåer — från att informera dig till att förbereda åtgärder och agera inom godkända scope.",
  },
  {
    title: "Godkännandegränser",
    description:
      "Åtgärder respekterar den autonominivå som konfigurerats för varje kategori av arbete. Känsliga steg väntar på uttryckligt godkännande.",
  },
  {
    title: "Aktivitet och spårbarhet",
    description:
      "Aktivitetshistorik visar vad SAIL förstod, bedömde och förberedde — för granskning och ansvarsskyldighet.",
  },
  {
    title: "Mänsklig kontroll",
    description:
      "Din verksamhet behåller auktoriteten. SAIL är utformad för att driva arbetet framåt utan att ta bort din möjlighet att ingripa.",
  },
  {
    title: "Verksamhetens gränser",
    description:
      "SAIL är utformad kring en verksamhets gränser — dess processer, auktoritetsstrukturer och operativa scope.",
  },
] as const;

export default function SecurityPage() {
  const { autonomy, security } = homepageContent;

  return (
    <SiteShell>
      <ContentSurface variant="open" width="editorial" align="center" spacing="compact" padding="none">
        <div className="pt-6 text-center sm:pt-10">
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
            Säkerhet och förtroende
          </p>
          <h1 className="mt-4 text-display font-semibold text-foreground">
            {security.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            SAIL är utformad för verksamheter som behöver kontroll, synlighet och
            tydliga gränser — inte överraskningar.
          </p>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="wide" align="center" spacing="default" radius="lg">
        <SectionHeader eyebrow="Principer" headline="Hur SAIL förhåller sig till förtroende" align="center" />
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
              <span className="font-mono text-xs text-white/40">Nivå {level.level}</span>
              <h3 className="mt-3 text-lg font-semibold text-white/95">{level.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{level.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <DeepLink href={routes.product} className="text-white/60 hover:text-white/90">
            Se produktens kontrollmodell
          </DeepLink>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="standard" align="center" spacing="loose" radius="md">
        <SectionHeader
          eyebrow="Viktigt att veta"
          headline="Certifieringar och efterlevnadspåståenden"
          description="Den här sidan beskriver produktprinciper och designintention. Specifika certifieringar, revisioner eller efterlevnadsgodkännanden anges inte här om de inte uttryckligen verifierats och publicerats."
          align="center"
        />
        <div className="mt-8 text-center">
          <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
            Boka demo
          </CtaLink>
        </div>
      </ContentSurface>
    </SiteShell>
  );
}
