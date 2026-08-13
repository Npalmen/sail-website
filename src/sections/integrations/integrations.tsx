import { ContentSurface } from "@/components/layout/content-surface";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { routes } from "@/config/site";
import { homepageContent } from "@/config/homepage";

export function Integrations() {
  const { id, eyebrow, headline, categories } = homepageContent.integrations;

  return (
    <ContentSurface
      as="section"
      id={id}
      variant="soft"
      width="standard"
      align="center"
      spacing="compact"
      radius="md"
    >
      <SectionHeader eyebrow={eyebrow} headline={headline} align="center" />

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-2 lg:grid-cols-4 sail-module-grid">
        {categories.map((category) => (
          <li
            key={category.name}
            className="sail-inner-module flex h-full flex-col p-4 sm:p-5"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-surface-soft text-xs font-semibold text-muted-foreground">
              {category.name.slice(0, 2).toUpperCase()}
            </div>
            <h3 className="mt-4 text-sm font-semibold text-foreground">
              {category.name}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {category.examples}
            </p>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-6 max-w-lg text-center text-xs text-muted-foreground">
        Kategorier illustrerar kopplingstyper. Stödda integrationer bekräftas vid lansering.
      </p>
      <div className="mt-5 text-center">
        <DeepLink href={routes.product} className="mt-0">
          Se produkten
        </DeepLink>
      </div>
    </ContentSurface>
  );
}
