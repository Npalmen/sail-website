import { ContentSurface } from "@/components/layout/content-surface";

const flow = ["Understand", "Decide", "Act"] as const;

export function ControlledMomentum() {
  return (
    <ContentSurface
      as="section"
      id="controlled-momentum"
      variant="open"
      width="editorial"
      align="center"
      spacing="open"
      padding="none"
    >
      <div className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Controlled momentum
        </p>
        <h2 className="mt-5 text-2xl font-semibold leading-[1.25] tracking-tight text-foreground sm:text-3xl xl:text-[2rem]">
          SAIL understands incoming work, decides what needs to happen, and acts
          within the authority the business has given it.
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0">
          {flow.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className="rounded-full border border-border/70 bg-surface-white/75 px-5 py-2.5 text-sm font-medium text-foreground shadow-surface-resting backdrop-blur-sm">
                {step}
              </div>
              {index < flow.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-3 hidden text-muted-foreground/50 sm:inline"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          Work keeps moving — at the pace and within the boundaries you define.
        </p>
      </div>
    </ContentSurface>
  );
}
