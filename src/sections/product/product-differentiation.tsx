import { ContentSurface } from "@/components/layout/content-surface";
import { SectionHeader } from "@/components/shared/section-header";
import { productPageContent } from "@/config/product-page";

export function ProductDifferentiation() {
  const { eyebrow, headline, body } = productPageContent.differentiation;

  return (
    <ContentSurface
      variant="open"
      width="editorial"
      align="center"
      spacing="compact"
      padding="none"
    >
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={body}
        align="center"
      />
    </ContentSurface>
  );
}
