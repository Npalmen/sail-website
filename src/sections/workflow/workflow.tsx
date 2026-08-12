import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";
import { cn } from "@/lib/utils";

export function Workflow() {
  const { id, eyebrow, headline, steps } = homepageContent.workflow;

  return (
    <section
      id={id}
      className="bg-surface-warm pb-20 pt-16 sm:pb-28 sm:pt-20"
    >
      <Container>
        <SectionHeader eyebrow={eyebrow} headline={headline} />

        <div className="mt-12 overflow-x-auto pb-2 sm:mt-16">
          <ol className="flex min-w-[640px] gap-0">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className={cn(
                  "relative flex flex-1 flex-col",
                  index < steps.length - 1 &&
                    "after:absolute after:right-0 after:top-5 after:h-px after:w-4 after:bg-border sm:after:w-6"
                )}
              >
                <div className="flex items-center gap-3 pr-4 sm:pr-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-white text-xs font-semibold text-foreground">
                    {index + 1}
                  </span>
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-border/80 sm:block"
                    />
                  )}
                </div>
                <div className="mt-4 pr-4 sm:pr-6">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 sail-field-stage p-4 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "rounded-lg border border-border/50 bg-surface-white p-3",
                  index === 2 && "ring-1 ring-primary/20"
                )}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  {step.title}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-foreground">
                  {index === 0 && "New request received"}
                  {index === 1 && "Intent & context matched"}
                  {index === 2 && "Next step determined"}
                  {index === 3 && "Action prepared"}
                  {index === 4 && "Activity logged"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
