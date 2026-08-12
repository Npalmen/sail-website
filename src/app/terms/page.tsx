import type { Metadata } from "next";

import { LegalPageTone } from "@/components/brand/legal-page-tone";
import { ContentSurface } from "@/components/layout/content-surface";
import { SiteShell } from "@/components/layout/site-shell";
import { pageMetadata } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.terms.title,
  description: pageMetadata.terms.description,
};

/** Legal copy placeholder — replace with lawyer-reviewed text before public launch. */
export default function TermsPage() {
  return (
    <SiteShell>
      <LegalPageTone />
      <ContentSurface variant="frosted" width="editorial" align="center" spacing="default" radius="md">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Användarvillkor
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Juridisk information färdigställs före offentlig lansering. Den här
          sidan tillhandahåller layout och ruttstruktur för SAIL:s
          användarvillkor.
        </p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Slutgiltiga villkor kommer att reglera användning av SAIL-webbplatsen
            och tjänsterna när de granskats och publicerats.
          </p>
          <p>
            Behandla inte det här som ett bindande juridiskt dokument.
          </p>
        </div>
      </ContentSurface>
    </SiteShell>
  );
}
