import { ContentSurface } from "@/components/layout/content-surface";
import { CtaLink } from "@/components/shared/cta-link";
import { SectionHeader } from "@/components/shared/section-header";
import { solutionsPageContent } from "@/config/solutions-page";
import { siteConfig } from "@/config/site";

export function SolutionsFinalCta() {
  const { headline, body } = solutionsPageContent.finalCta;

  return (
    <ContentSurface variant="paper" width="narrow" align="center" spacing="loose" radius="md">
      <SectionHeader eyebrow="Nästa steg" headline={headline} description={body} align="center" />
      <div className="mt-8 text-center">
        <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg w-full sm:w-auto">
          Boka demo
        </CtaLink>
      </div>
    </ContentSurface>
  );
}
