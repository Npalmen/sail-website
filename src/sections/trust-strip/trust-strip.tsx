import { ContentSurface } from "@/components/layout/content-surface";
import { homepageContent } from "@/config/homepage";

export function TrustStrip() {
  const { headline, categories } = homepageContent.trustStrip;

  return (
    <ContentSurface
      as="section"
      id="trust"
      aria-label="Product context"
      variant="paper"
      width="narrow"
      align="center"
      spacing="compact"
      padding="sm"
      radius="sm"
    >
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          {headline}
        </p>
        <ul className="flex flex-wrap gap-2 sm:gap-2.5">
          {categories.map((category) => (
            <li key={category}>
              <span className="inline-flex rounded-md border border-border/50 bg-surface-white/80 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                {category}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ContentSurface>
  );
}
