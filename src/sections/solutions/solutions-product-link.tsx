import { ContentSurface } from "@/components/layout/content-surface";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { solutionsPageContent } from "@/config/solutions-page";
import { routes } from "@/config/site";

export function SolutionsProductLink() {
  const { headline, body } = solutionsPageContent.productLink;

  return (
    <ContentSurface variant="soft" width="standard" align="center" spacing="compact" radius="md">
      <SectionHeader eyebrow="Arbetssätt" headline={headline} description={body} align="center" />
      <div className="text-center">
        <DeepLink href={routes.product} className="mt-0">
          Se hur SAIL fungerar
        </DeepLink>
      </div>
    </ContentSurface>
  );
}
