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
    title: "Administrativt arbete ska inte ta över verksamheten",
    body: "Verksamheter tar emot arbete ständigt — men det administrativa lagret kring det arbetet faller ofta fortfarande på människor. SAIL finns för att hantera det lagret systematiskt.",
  },
  {
    title: "AI inom definierad auktoritet",
    body: "SAIL är utformad för att agera inom gränser verksamheten sätter — inte för att anta obegränsad autonomi över driften.",
  },
  {
    title: "Kontroll är avgörande",
    body: "Synlighet, godkännandegränser och spårbarhet är en del av produkten — inte eftertankar.",
  },
  {
    title: "En digital medarbetare — inte en chatbot",
    body: "SAIL bygger på att ta emot arbete, förstå kontext, bedöma nästa steg och förbereda eller utföra åtgärder inom auktoritet.",
  },
  {
    title: "Stabilt system, rörligt arbete",
    body: "Det underliggande SAIL-systemet förblir konsekvent medan information och administrativt arbete rör sig genom det — under din kontroll.",
  },
] as const;

export default function AboutPage() {
  return (
    <SiteShell>
      <ContentSurface variant="open" width="editorial" align="center" spacing="compact" padding="none">
        <div className="pt-6 text-center sm:pt-10">
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
            Om SAIL
          </p>
          <h1 className="mt-4 text-display font-semibold text-foreground">
            Byggt för verksamheter som behöver att arbetet rör sig — under kontroll.
          </h1>
        </div>
      </ContentSurface>

      <ContentSurface variant="paper" width="standard" align="left" spacing="default" radius="md">
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
          eyebrow="Utforska"
          headline="Läs mer om produkten och hur SAIL fungerar."
          align="center"
        />
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <DeepLink href={routes.product} className="mt-0">
            Utforska produkten
          </DeepLink>
          <DeepLink href={routes.security} className="mt-0">
            Säkerhet och kontroll
          </DeepLink>
        </div>
        <div className="mt-10 text-center">
          <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
            Boka demo
          </CtaLink>
        </div>
      </ContentSurface>
    </SiteShell>
  );
}
