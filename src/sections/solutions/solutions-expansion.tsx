import { ContentSurface } from "@/components/layout/content-surface";
import { SectionHeader } from "@/components/shared/section-header";
import { solutionsPageContent } from "@/config/solutions-page";
import { cn } from "@/lib/utils";

export function SolutionsExpansion() {
  const { eyebrow, headline, body, stages } = solutionsPageContent.expansion;

  return (
    <ContentSurface variant="open" width="editorial" align="center" spacing="compact" padding="none">
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={body}
        align="center"
      />

      <div className="mx-auto mt-8 max-w-3xl sm:mt-10">
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-0">
          {stages.map((stage, index) => (
            <div key={stage} className="flex items-center justify-center sm:justify-start">
              <span
                className={cn(
                  "rounded-full px-3 py-1.5 text-[11px] font-medium tracking-[0.02em]",
                  index === 0
                    ? "bg-surface-product text-sail-blue ring-1 ring-sail-blue/20"
                    : "bg-surface-soft text-foreground ring-1 ring-border/50"
                )}
              >
                {stage}
              </span>
              {index < stages.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-2 hidden text-muted-foreground/45 sm:inline"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </ContentSurface>
  );
}
