import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";
import { cn } from "@/lib/utils";

export function Capabilities() {
  const { id, eyebrow, headline, items } = homepageContent.capabilities;

  return (
    <section id={id} className="pb-20 pt-16 sm:pb-28 sm:pt-20">
      <Container>
        <div className="grid gap-12 xl:grid-cols-12 xl:gap-16">
          <div className="xl:col-span-4">
            <SectionHeader eyebrow={eyebrow} headline={headline} />
          </div>

          <div className="xl:col-span-8">
            <div className="sail-field-stage p-4 sm:p-6">
              <div className="overflow-hidden rounded-xl border border-border/60 bg-surface-white">
                <div className="border-b border-border/50 px-4 py-3 sm:px-5">
                  <p className="text-xs font-medium text-foreground">
                    Capability overview
                  </p>
                </div>
                <div className="grid divide-y divide-border/50 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  {items.map((item, index) => (
                    <div
                      key={item.title}
                      className={cn(
                        "p-4 sm:p-5",
                        index === 0 && "sm:rounded-tl-xl",
                        index === 1 && "sm:border-l-0"
                      )}
                    >
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

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <li
                  key={item.title}
                  className="border-l-2 border-primary/30 pl-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
