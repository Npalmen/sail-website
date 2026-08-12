import { Container } from "@/components/layout/container";
import { homepageContent } from "@/config/homepage";

export function TrustStrip() {
  const { headline, categories } = homepageContent.trustStrip;

  return (
    <section
      id="trust"
      aria-label="Product context"
      className="border-y border-border/50 bg-surface-paper py-8 sm:py-10"
    >
      <Container>
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {headline}
          </p>
          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <li key={category}>
                <span className="inline-flex rounded-md border border-border/60 bg-surface-white px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
