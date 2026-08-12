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
          Terms of use
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Legal information is being finalized before public launch. This page
          provides the layout and route structure for the SAIL terms of use.
        </p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Final terms will govern use of the SAIL website and services once
            reviewed and published.
          </p>
          <p>
            Do not treat this placeholder as a binding legal document.
          </p>
        </div>
      </ContentSurface>
    </SiteShell>
  );
}
