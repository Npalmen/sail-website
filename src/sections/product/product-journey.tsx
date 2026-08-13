import { ContentSurface } from "@/components/layout/content-surface";
import { SectionHeader } from "@/components/shared/section-header";
import { productJourneyScenario, productPageContent } from "@/config/product-page";
import { cn } from "@/lib/utils";

type StageStatus =
  | "Mottagen"
  | "Förstådd"
  | "Bedömd"
  | "Förberedd"
  | "Klart"
  | "Väntar på godkännande";

function StatusBadge({ status }: { status: StageStatus }) {
  const tone =
    status === "Klart"
      ? "text-emerald-700 bg-emerald-50 ring-emerald-200/60"
      : status === "Väntar på godkännande" || status === "Förberedd"
        ? "text-sail-blue bg-surface-product ring-sail-blue/20"
        : "text-sail-blue bg-surface-product-muted ring-border/50";

  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.06em] ring-1",
        tone
      )}
    >
      {status}
    </span>
  );
}

function JourneyConnector({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center py-2 lg:hidden", className)}
    >
      <span className="h-6 w-px bg-border/80" />
    </div>
  );
}

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-border/30 py-2.5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
        {label}
      </span>
      <span className="text-sm text-foreground sm:text-right">{value}</span>
    </div>
  );
}

function IncomingStage() {
  const { incoming } = productJourneyScenario;

  return (
    <article className="sail-inner-module--product p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-sail-blue">
          1 · Inkommande
        </p>
        <StatusBadge status={incoming.status} />
      </div>
      <h3 className="mt-3 text-base font-semibold text-foreground">{incoming.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{incoming.customer}</p>
      <p className="mt-3 text-xs text-muted-foreground">Mottagen {incoming.received}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {incoming.sources.map((source) => (
          <span
            key={source}
            className="rounded-md bg-surface-product-muted px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {source}
          </span>
        ))}
      </div>
    </article>
  );
}

function UnderstandStage() {
  const { understand } = productJourneyScenario;

  return (
    <article className="sail-inner-module--product p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-sail-blue">
          2 · Förstå
        </p>
        <StatusBadge status={understand.status} />
      </div>
      <h3 className="mt-3 text-base font-semibold text-foreground">Vad SAIL förstod</h3>
      <div className="mt-3">
        {understand.fields.map((field) => (
          <FieldRow key={field.label} label={field.label} value={field.value} />
        ))}
      </div>
    </article>
  );
}

function DecideStage() {
  const { decide } = productJourneyScenario;

  return (
    <article className="sail-inner-module--product p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-sail-blue">
          3 · Bedöm
        </p>
        <StatusBadge status={decide.status} />
      </div>
      <h3 className="mt-3 text-base font-semibold text-foreground">Bedömning</h3>
      <div className="mt-3 space-y-2.5">
        {decide.layers.map((layer) => (
          <div
            key={layer.label}
            className="rounded-[var(--radius-module-control)] border border-border/35 bg-surface-product-muted/45 px-3 py-2.5"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
              {layer.label}
            </p>
            <p className="mt-1 text-sm leading-snug text-foreground">{layer.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {decide.outcome.map((item) => (
          <span
            key={item}
            className="rounded-md bg-surface-product px-2.5 py-1 text-[11px] font-medium text-sail-blue ring-1 ring-sail-blue/20"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function ActStage() {
  const { act } = productJourneyScenario;

  return (
    <article className="sail-inner-module--product p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-sail-blue">
          4 · Agera
        </p>
        <StatusBadge status={act.status} />
      </div>
      <h3 className="mt-3 text-base font-semibold text-foreground">Förberedd åtgärd</h3>
      <p className="mt-2 text-sm font-medium text-foreground">{act.title}</p>
      <ul className="mt-3 space-y-1.5">
        {act.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-600/70" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-surface-product-muted/60 px-2.5 py-1.5 text-xs text-sail-blue">
        <span className="size-1.5 rounded-full bg-sail-blue/70" aria-hidden="true" />
        {act.readiness}
      </div>
    </article>
  );
}

function DesktopFlowArrow() {
  return (
    <span
      aria-hidden="true"
      className="hidden items-center justify-center text-sail-blue/35 lg:flex"
    >
      →
    </span>
  );
}

function DesktopSnakeConnector() {
  return (
    <div
      aria-hidden="true"
      className="col-span-3 hidden h-8 lg:block xl:h-10"
    >
      <svg
        className="h-full w-full text-border/75"
        viewBox="0 0 100 24"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 83 0 V 12 H 17 V 24"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export function ProductJourney() {
  const { eyebrow, headline, description } = productPageContent.journey;

  return (
    <ContentSurface
      as="section"
      id="product-journey"
      variant="product"
      width="wide"
      align="center"
      spacing="default"
      radius="lg"
    >
      <SectionHeader eyebrow={eyebrow} headline={headline} description={description} />

      <div className="mt-8 lg:mt-10">
        <div className="flex flex-col lg:hidden">
          <IncomingStage />
          <JourneyConnector />
          <UnderstandStage />
          <JourneyConnector />
          <DecideStage />
          <JourneyConnector />
          <ActStage />
        </div>

        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-3 xl:gap-4">
          <IncomingStage />
          <DesktopFlowArrow />
          <UnderstandStage />

          <DesktopSnakeConnector />

          <DecideStage />
          <DesktopFlowArrow />
          <ActStage />
        </div>
      </div>
    </ContentSurface>
  );
}

export function ProductJourneyResult() {
  const { result } = productJourneyScenario;

  return (
    <ContentSurface
      as="section"
      variant="product"
      width="standard"
      align="center"
      spacing="compact"
      radius="md"
    >
      <article className="sail-inner-module--product p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-sail-blue">
            6 · Resultat
          </p>
          <StatusBadge status={result.status} />
        </div>
        <h3 className="mt-3 text-base font-semibold text-foreground">Spårbar aktivitet</h3>

        <ul className="mt-4 flex flex-wrap gap-2">
          {result.summary.map((item, index) => {
            const isPending = index === result.summary.length - 1;

            return (
              <li
                key={item}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px]",
                  isPending
                    ? "bg-surface-product text-sail-blue ring-1 ring-sail-blue/20"
                    : "bg-surface-product-muted/50 text-foreground"
                )}
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    isPending ? "bg-sail-blue/70" : "bg-emerald-600/70"
                  )}
                  aria-hidden="true"
                />
                {item}
              </li>
            );
          })}
        </ul>

        <ol className="mt-5 space-y-0 divide-y divide-border/35 rounded-[var(--radius-module-control)] border border-border/35 bg-surface-product-muted/30">
          {result.activity.map((entry) => (
            <li
              key={entry.time + entry.event}
              className="flex flex-col gap-0.5 px-3 py-2.5 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                {entry.time}
              </span>
              <span className="text-sm text-foreground">{entry.event}</span>
            </li>
          ))}
        </ol>
      </article>
    </ContentSurface>
  );
}
