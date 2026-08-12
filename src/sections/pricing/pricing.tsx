import Link from "next/link";

import { ContentSurface } from "@/components/layout/content-surface";
import { ctaPrimary } from "@/components/shared/cta-styles";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";
import { siteConfig } from "@/config/site";

export function Pricing() {
  const { id, eyebrow, headline, body } = homepageContent.pricing;

  return (
    <ContentSurface
      as="section"
      id={id}
      variant="frosted"
      width="narrow"
      align="center"
      spacing="default"
      radius="md"
    >
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={body}
        align="center"
      />
      <div className="mt-8 text-center">
        <Link href={siteConfig.links.bookDemo} className={ctaPrimary}>
          Book a demo
        </Link>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Pricing details will be shared during your demo conversation.
      </p>
    </ContentSurface>
  );
}
