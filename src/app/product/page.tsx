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
            SAIL Produkt
          </p>
          <h1 className="mt-4 max-w-2xl text-display font-semibold text-foreground">
            Den digitala medarbetaren byggd kring din verksamhet.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            SAIL tar emot administrativt arbete, förstår kontext, bedömer vad
            som behöver hända och agerar inom den auktoritet din verksamhet
            definierar.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
              Boka demo
            </CtaLink>
            <DeepLink href="#capabilities" className="mt-0">
              Utforska kapacitet
            </DeepLink>
          </div>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="wide" align="center" spacing="default" radius="lg">
        <SectionHeader
          eyebrow="Produktförhandsvisning"
          headline="Arbetet rör sig genom SAIL — synligt och kontrollerbart."
        />
        <div className="mt-8 sail-surface-frosted rounded-[var(--radius-module-outer)] p-3 sm:p-4">
          <ProductPreview />
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="standard" align="left" spacing="default" radius="md">
        <SectionHeader
          eyebrow="Ta emot arbete"
          headline="Hur SAIL tar emot arbete"
          description="Inkommande administrativt arbete når verksamheten via kanaler ni redan använder — kommunikation, dokument, förfrågningar och kopplade system."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {["Kommunikation", "Dokument och formulär", "Kundförfrågningar", "Affärssystem"].map(
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
          eyebrow="Förståelse"
          headline="Hur SAIL förstår arbete"
          description="SAIL extraherar avsikt, matchar kontext och tillämpar affärsregler — konservativt och spårbart."
        />
        <ul className="mt-8 space-y-3">
          {[
            "Kontext från inkommande kommunikation",
            "Avsikt och relevanta detaljer",
            "Kund- och registerkontext där tillgänglig",
            "Affärsregler och tidigare aktivitet",
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
                SAIL förbereder och dirigerar arbete på den här nivån — med
                utökad kapacitet i takt med att verksamheten definierar vad som
                ska hanteras härnäst.
              </p>
            </div>
          ))}
        </div>
      </ContentSurface>

      <ProductExperience />

      <ContentSurface variant="dark" width="wide" align="center" spacing="default" radius="lg">
        <SectionHeader eyebrow={autonomy.eyebrow} headline={autonomy.headline} variant="dark" />
        <DeepLink href={routes.security} className="text-white/60 hover:text-white/90">
          Läs mer om säkerhet och kontroll
        </DeepLink>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 sail-module-grid">
          {autonomy.levels.map((level) => (
            <div key={level.title} className="sail-inner-module--dark flex flex-col p-5 sm:p-6">
              <span className="font-mono text-xs text-white/40">Nivå {level.level}</span>
              <h3 className="mt-3 text-lg font-semibold text-white/95">{level.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{level.description}</p>
            </div>
          ))}
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="narrow" align="center" spacing="loose" radius="md">
        <SectionHeader
          eyebrow="Nästa steg"
          headline="Se SAIL i kontexten av din verksamhet."
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
