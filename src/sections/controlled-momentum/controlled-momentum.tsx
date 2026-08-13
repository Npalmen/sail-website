import { ContentSurface } from "@/components/layout/content-surface";

const flow = ["Förstå", "Bedöm", "Agera"] as const;

export function ControlledMomentum() {
  return (
    <ContentSurface
      as="section"
      id="controlled-momentum"
      variant="open"
      width="editorial"
      align="center"
      spacing="compact"
      padding="none"
    >
      <div className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Kontrollerad rörelse
        </p>
        <h2 className="mt-4 max-w-[24ch] text-2xl font-semibold leading-[1.25] tracking-tight text-foreground sm:mx-auto sm:max-w-[28ch] sm:text-3xl xl:max-w-none xl:text-[2rem]">
          Förstå, bedöm och agera — inom gränserna du sätter.
        </h2>
      </div>

      <div className="mx-auto mt-8 max-w-2xl sm:mt-10">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-0">
          {flow.map((step, index) => (
            <div key={step} className="flex items-center justify-center sm:justify-start">
              <div className="sail-glass-card !rounded-full px-5 py-2.5 text-center text-sm font-medium text-foreground">
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
      </div>
    </ContentSurface>
  );
}
