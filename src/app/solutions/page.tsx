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
    title: "Inkommande förfrågan",
    steps: [
      "Förfrågan kommer via e-post eller en kopplad kanal",
      "SAIL förstår avsikten och extraherar relevanta detaljer",
      "Kontext matchas mot kund- eller interna register",
      "Nästa åtgärd förbereds inom definierad auktoritet",
      "Ditt team godkänner där det krävs",
    ],
  },
  {
    title: "Rutinadministration",
    steps: [
      "Administrativt ärende går in i flödet",
      "SAIL sorterar och förbereder det administrativa steget",
      "Stödjande information samlas in",
      "Åtgärd förbereds eller dirigeras för granskning",
      "Aktiviteten förblir synlig i arbetsytan",
    ],
  },
  {
    title: "Säljmöjlighet",
    steps: [
      "Inkommande kommunikation antyder en säljmöjlighet",
      "SAIL identifierar relevant kontext",
      "Nästa steg förbereds för er säljprocess",
      "Ert team bestämmer hur ni går vidare",
    ],
  },
  {
    title: "Supportärende",
    steps: [
      "Serviceförfrågan tas emot",
      "SAIL förstår ärendet och relevant historik",
      "Svar eller eskalering förbereds inom riktlinjerna",
      "Godkännandegränser respekteras",
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
            Lösningar
          </p>
          <h1 className="mt-4 text-display font-semibold text-foreground">
            Vilka typer av arbete kan SAIL hjälpa till med?
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            SAIL hanterar administrativt arbete kring verksamheten — förbereder,
            dirigerar och agerar inom gränser du sätter.
          </p>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="wide" align="center" spacing="default" radius="lg">
        <SectionHeader eyebrow="Kapacitetsområden" headline={capabilities.headline} align="center" />
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
          eyebrow="Scenarier"
          headline="Hur arbete rör sig genom SAIL"
          description="Illustrativa flöden — inte påståenden om specifika produktionsintegrationer eller resultat."
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
          Kategorier visas som illustration. Stödda kopplingar bekräftas när de
          blir tillgängliga.
        </p>
      </ContentSurface>

      <ContentSurface variant="frosted" width="narrow" align="center" spacing="loose" radius="md">
        <SectionHeader
          eyebrow="Nästa steg"
          headline="Diskutera det arbete du vill att SAIL ska hantera."
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
