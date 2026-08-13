import { ContentSurface } from "@/components/layout/content-surface";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { routes } from "@/config/site";
import { homepageContent } from "@/config/homepage";

export function Capabilities() {
  const { id, eyebrow, headline, items } = homepageContent.capabilities;

  return (
    <ContentSurface
      as="section"
      id={id}
      variant="soft"
      width="standard"
      align="right"
      spacing="default"
      radius="md"
    >
      <div className="grid gap-10 xl:grid-cols-12 xl:gap-12">
        <div className="xl:col-span-4">
          <SectionHeader eyebrow={eyebrow} headline={headline} />
          <DeepLink href={routes.solutions}>Utforska lösningar</DeepLink>
        </div>

        <div className="xl:col-span-8">
          <div className="overflow-hidden rounded-[var(--radius-module-nested)] sail-inner-module">
            <div className="border-b border-border/50 px-4 py-3 sm:px-5">
              <p className="text-xs font-medium text-foreground">
                Kapacitetsöversikt
              </p>
            </div>
            <div className="grid divide-y divide-border/50 md:grid-cols-2 md:divide-x md:divide-y-0">
              {items.map((item) => (
                <div key={item.title} className="p-4 sm:p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentSurface>
  );
}
