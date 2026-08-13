import { ContentSurface } from "@/components/layout/content-surface";
import { SolutionFlowVisual } from "@/sections/solutions/solution-flow-visual";
import { solutionAreas } from "@/config/solutions-page";
import { cn } from "@/lib/utils";

type SolutionArea = (typeof solutionAreas)[number];

export function SolutionChapter({ area }: { area: SolutionArea }) {
  const isRight = area.align === "right";

  return (
    <ContentSurface
      as="section"
      id={area.id}
      variant={area.material}
      width="standard"
      align={area.align}
      spacing="default"
      radius="md"
    >
      <div
        className={cn(
          "grid gap-8 lg:items-start lg:gap-10",
          isRight ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]"
        )}
      >
        <div className={cn(isRight && "lg:order-2")}>
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-sail-blue">
            {area.title}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem] sm:leading-[1.2]">
            {area.headline}
          </h2>
          <p className="text-body-readable mt-4 max-w-lg text-base leading-relaxed">
            {area.explanation}
          </p>
        </div>

        <div className={cn(isRight && "lg:order-1")}>
          <SolutionFlowVisual
            incoming={area.incoming}
            sailDoes={area.sailDoes}
            userGets={area.userGets}
          />
        </div>
      </div>
    </ContentSurface>
  );
}
