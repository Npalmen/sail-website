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
            Contact
          </p>
          <h1 className="mt-4 text-display font-semibold text-foreground">
            Book a demo or get in touch.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us about the administrative work you want SAIL to handle. We will
            follow up when contact routing is configured for launch.
          </p>
        </div>
      </ContentSurface>

      <ContentSurface variant="frosted" width="standard" align="center" spacing="loose" radius="md">
        <ContactForm />
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Contact email, phone, and submission routing are not yet published. The
          form above validates field structure only — it does not send data to a
          backend.
        </p>
      </ContentSurface>
    </SiteShell>
  );
}
