import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "SAIL reads incoming work — emails, requests, documents — and extracts what matters.",
  },
  {
    number: "02",
    title: "Decide",
    description:
      "Business rules and context determine the right next step, every time.",
  },
  {
    number: "03",
    title: "Act",
    description:
      "Actions are prepared and executed within the authority your business has defined.",
  },
] as const;

export function ControlledMomentum() {
  return (
    <section
      id="controlled-momentum"
      className="relative bg-surface-cloud pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:gap-20 xl:gap-24">
          {/* Statement */}
          <div className="lg:pt-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Controlled momentum
            </p>
            <h2 className="mt-5 max-w-xl text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl lg:text-[2rem] xl:text-[2.25rem]">
              SAIL understands incoming work, decides what needs to happen, and
              acts within the authority the business has given it.
            </h2>
          </div>

          {/* Vertical progression */}
          <div className="relative lg:pt-2">
            <div
              aria-hidden="true"
              className="absolute left-[19px] top-3 bottom-3 hidden w-px bg-border sm:block"
            />

            <ol className="space-y-10 sm:space-y-12">
              {stages.map((stage, index) => (
                <li
                  key={stage.number}
                  className={cn(
                    "relative grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 sm:gap-x-6",
                    "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-2 motion-safe:duration-600 motion-reduce:animate-none",
                    index === 1 && "motion-safe:delay-150",
                    index === 2 && "motion-safe:delay-300"
                  )}
                >
                  <span className="font-mono text-sm tabular-nums text-muted-foreground/60">
                    {stage.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {stage.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {stage.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
