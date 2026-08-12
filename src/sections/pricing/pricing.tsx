import { ContentSurface } from "@/components/layout/content-surface";
import { CtaLink } from "@/components/shared/cta-link";
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
        <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
          Book a demo
        </CtaLink>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Pricing details will be shared during your demo conversation.
      </p>
    </ContentSurface>
  );
}
