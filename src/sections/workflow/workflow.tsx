import { ContentSurface } from "@/components/layout/content-surface";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { routes } from "@/config/site";
import { homepageContent } from "@/config/homepage";
import { cn } from "@/lib/utils";

export function Workflow() {
  const { id, eyebrow, headline, steps } = homepageContent.workflow;

  return (
    <ContentSurface
      as="section"
      id={id}
      variant="frosted"
      width="wide"
      align="center"
      spacing="default"
      radius="lg"
    >
      <SectionHeader eyebrow={eyebrow} headline={headline} />
      <DeepLink href={routes.product}>Explore how SAIL works</DeepLink>

      <div className="mt-10 overflow-x-auto pb-2 sm:mt-14">
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
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-surface-white/80 text-xs font-semibold text-foreground">
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

      <div className="mt-8 sail-field-stage p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-5 sail-module-grid">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                "sail-inner-module flex h-full flex-col rounded-lg p-3",
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
    </ContentSurface>
  );
}
