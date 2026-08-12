import type { Metadata } from "next";

import { LegalPageTone } from "@/components/brand/legal-page-tone";
import { ContentSurface } from "@/components/layout/content-surface";
import { SiteShell } from "@/components/layout/site-shell";
import { pageMetadata } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.privacy.title,
  description: pageMetadata.privacy.description,
};

/** Legal copy placeholder — replace with lawyer-reviewed text before public launch. */
export default function PrivacyPage() {
  return (
    <SiteShell>
      <LegalPageTone />
      <ContentSurface variant="frosted" width="editorial" align="center" spacing="default" radius="md">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Integritet</h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Juridisk information färdigställs före offentlig lansering. Den här
          sidan tillhandahåller layout och ruttstruktur för SAIL:s
          integritetspolicy.
        </p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            En fullständig integritetspolicy kommer att beskriva hur SAIL-webbplatsen
            och produkten hanterar personuppgifter, lagring och användares rättigheter
            — när texten granskats och godkänts.
          </p>
          <p>
            Behandla inte det här som ett bindande juridiskt dokument.
          </p>
        </div>
      </ContentSurface>
    </SiteShell>
  );
}
