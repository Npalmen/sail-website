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
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Privacy</h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Legal information is being finalized before public launch. This page
          provides the layout and route structure for the SAIL privacy policy.
        </p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            A complete privacy policy will describe how the SAIL website and
            product handle personal data, retention, and user rights — once
            reviewed and approved.
          </p>
          <p>
            Do not treat this placeholder as a binding legal document.
          </p>
        </div>
      </ContentSurface>
    </SiteShell>
  );
}
