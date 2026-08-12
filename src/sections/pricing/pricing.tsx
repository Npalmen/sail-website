import { ContentSurface } from "@/components/layout/content-surface";
import { CtaLink } from "@/components/shared/cta-link";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";
import { routes, siteConfig } from "@/config/site";

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
      <div className="text-center">
        <DeepLink href={routes.pricing} className="mt-0">
          Se prissättningsmodellen
        </DeepLink>
      </div>
      <div className="mt-8 text-center">
        <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
          Boka demo
        </CtaLink>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Prisuppgifter delas under demosamtalet.
      </p>
    </ContentSurface>
  );
}
