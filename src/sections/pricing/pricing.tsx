import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ctaPrimary } from "@/components/shared/cta-styles";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";
import { siteConfig } from "@/config/site";

export function Pricing() {
  const { id, eyebrow, headline, body } = homepageContent.pricing;

  return (
    <section id={id} className="pb-20 pt-16 sm:pb-28 sm:pt-20">
      <Container>
        <div className="sail-field-chapter mx-auto max-w-3xl p-8 text-center sm:p-12">
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            description={body}
            align="center"
          />
          <div className="mt-8">
            <Link href={siteConfig.links.bookDemo} className={ctaPrimary}>
              Book a demo
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Pricing details will be shared during your demo conversation.
          </p>
        </div>
      </Container>
    </section>
  );
}
