import { ContentSurface } from "@/components/layout/content-surface";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { productPageContent } from "@/config/product-page";
import { routes } from "@/config/site";

export function ProductCapabilityBridge() {
  const { eyebrow, headline, categories } = productPageContent.capabilities;

  return (
    <ContentSurface
      as="section"
      id="capabilities"
      variant="soft"
      width="standard"
      align="center"
      spacing="compact"
      radius="md"
    >
      <SectionHeader eyebrow={eyebrow} headline={headline} align="center" />

      <ul className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8">
        {categories.map((category) => (
          <li key={category}>
            <span className="inline-flex rounded-md border border-border/40 bg-surface-white/95 px-3.5 py-2 text-sm font-medium text-foreground">
              {category}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center sm:mt-8">
        <DeepLink href={routes.solutions} className="mt-0">
          Utforska lösningar
        </DeepLink>
      </div>
    </ContentSurface>
  );
}
