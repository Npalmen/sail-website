import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";

export function Integrations() {
  const { id, eyebrow, headline, categories } = homepageContent.integrations;

  return (
    <section
      id={id}
      className="border-y border-border/50 bg-surface-paper py-16 sm:py-20"
    >
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          headline={headline}
          align="center"
        />

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <li
              key={category.name}
              className="rounded-xl border border-border/60 bg-surface-white p-5"
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

        <p className="mx-auto mt-8 max-w-lg text-center text-xs text-muted-foreground">
          Integration categories shown for illustration. Supported connections
          will be confirmed as they become available.
        </p>
      </Container>
    </section>
  );
}
