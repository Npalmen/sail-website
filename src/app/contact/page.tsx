import type { Metadata } from "next";

import { ContentSurface } from "@/components/layout/content-surface";
import { SiteShell } from "@/components/layout/site-shell";
import { ContactForm } from "@/sections/contact/contact-form";
import { pageMetadata } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContentSurface variant="open" width="editorial" align="center" spacing="compact" padding="none">
        <div className="pt-6 text-center sm:pt-10">
          <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
            Kontakt
          </p>
          <h1 className="mt-4 text-display font-semibold text-foreground">
            Boka demo eller hör av dig.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Berätta om det administrativa arbete du vill att SAIL ska hantera. Vi
            återkommer när kontaktflödet är konfigurerat inför lansering.
          </p>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="standard" align="center" spacing="loose" radius="md">
        <ContactForm />
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Kontaktmejl, telefon och inlämningsflöde är inte publicerade ännu.
          Formuläret ovan validerar endast fältstruktur — det skickar inte data
          till någon backend.
        </p>
      </ContentSurface>
    </SiteShell>
  );
}
