type SolutionFlowVisualProps = {
  incoming: readonly string[];
  sailDoes: readonly string[];
  userGets: readonly string[];
};

function FlowBlock({
  label,
  items,
  tone = "neutral",
}: {
  label: string;
  items: readonly string[];
  tone?: "neutral" | "product" | "outcome";
}) {
  return (
    <div
      className={
        tone === "product"
          ? "rounded-[var(--radius-module-control)] border border-border/35 bg-surface-product-muted/45 p-3.5 sm:p-4"
          : tone === "outcome"
            ? "rounded-[var(--radius-module-control)] border border-sail-blue/15 bg-surface-product/60 p-3.5 sm:p-4"
            : "rounded-[var(--radius-module-control)] border border-border/35 bg-surface-white/90 p-3.5 sm:p-4"
      }
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
        {label}
      </p>
      <ul className="mt-2.5 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-snug text-foreground">
            <span
              className={
                tone === "outcome"
                  ? "mt-1.5 size-1.5 shrink-0 rounded-full bg-sail-blue/70"
                  : "mt-1.5 size-1.5 shrink-0 rounded-full bg-border"
              }
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowConnector() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1.5">
      <span className="text-[11px] text-sail-blue/45">↓</span>
    </div>
  );
}

export function SolutionFlowVisual({
  incoming,
  sailDoes,
  userGets,
}: SolutionFlowVisualProps) {
  return (
    <div className="sail-inner-module--product p-3 sm:p-4">
      <FlowBlock label="Vad kommer in?" items={incoming} />
      <FlowConnector />
      <FlowBlock label="Vad gör SAIL?" items={sailDoes} tone="product" />
      <FlowConnector />
      <FlowBlock label="Vad får du?" items={userGets} tone="outcome" />
    </div>
  );
}
