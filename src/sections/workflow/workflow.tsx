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
      <DeepLink href={routes.product}>Utforska hur SAIL fungerar</DeepLink>

      {/* Mobile / tablet — vertical process */}
      <ol className="mt-8 space-y-6 lg:hidden">
        {steps.map((step, index) => (
          <li key={step.title} className="relative pl-10">
            <span className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border border-border/70 bg-surface-white/80 text-xs font-semibold text-foreground">
              {index + 1}
            </span>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute bottom-[-1.25rem] left-4 top-8 w-px bg-border/80"
              />
            )}
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      {/* Desktop — horizontal rail */}
      <div className="mt-10 hidden overflow-x-auto pb-2 lg:block lg:mt-14">
        <ol className="flex min-w-0 gap-0">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={cn(
                "relative flex flex-1 flex-col",
                index < steps.length - 1 &&
                  "after:absolute after:right-0 after:top-5 after:h-px after:w-6 after:bg-border"
              )}
            >
              <div className="flex items-center gap-3 pr-6">
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
              <div className="mt-4 pr-6">
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

    </ContentSurface>
  );
}
