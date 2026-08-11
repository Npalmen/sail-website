import { cn } from "@/lib/utils";

function ProgressConnector() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      viewBox="0 0 800 420"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M 180 95 C 260 95, 300 130, 340 160"
        stroke="var(--sail-line)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <path
        d="M 640 280 L 640 340"
        stroke="var(--sail-line)"
        strokeWidth="1"
      />
    </svg>
  );
}

type StageStatus = "complete" | "active" | "pending";

function StatusDot({ status }: { status: StageStatus }) {
  return (
    <span
      className={cn(
        "size-1.5 shrink-0 rounded-full",
        status === "complete" && "bg-emerald-600/80",
        status === "active" && "bg-primary/70",
        status === "pending" && "bg-muted-foreground/30"
      )}
    />
  );
}

type AccentCardProps = {
  children: React.ReactNode;
  className?: string;
  accent?: "medium" | "soft" | "none";
};

function AccentCard({ children, className, accent = "none" }: AccentCardProps) {
  return (
    <div
      className={cn(
        accent === "medium" && "sail-accent-card sail-accent-card--medium",
        accent === "soft" && "sail-accent-card sail-accent-card--soft",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ProductPreview() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[720px] md:max-w-none lg:max-w-[880px]"
    >
      <div className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[480px]">
        <ProgressConnector />

        {/* Incoming work */}
        <div
          className={cn(
            "absolute left-0 top-0 z-20 w-[52%] max-w-[240px] sm:max-w-[260px]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-3 motion-safe:duration-700 motion-reduce:animate-none"
          )}
        >
          <AccentCard accent="medium">
            <div className="sail-glass-card rounded-[10px] p-3.5 sm:p-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Incoming
              </p>
              <p className="mt-2 text-[13px] font-medium leading-snug text-foreground">
                Contract renewal request
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                From Acme Corp · received 2m ago
              </p>
            </div>
          </AccentCard>
        </div>

        {/* Central workspace — clean white, no accent ring */}
        <div
          className={cn(
            "absolute left-[8%] right-0 top-[18%] z-10 sm:left-[12%] lg:left-[14%] lg:top-[14%]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-safe:delay-150 motion-reduce:animate-none"
          )}
        >
          <div className="overflow-hidden rounded-xl border border-border/60 bg-surface-white shadow-[0_1px_3px_rgba(17,19,24,0.04)]">
            <div className="flex items-center justify-between border-b border-border/50 bg-surface-soft/40 px-4 py-2.5 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-600/70" />
                <span className="text-xs font-medium text-foreground">
                  SAIL workspace
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground">
                Acme Corp
              </span>
            </div>

            <div className="grid divide-y divide-border/50 sm:grid-cols-[1fr_1fr] sm:divide-x sm:divide-y-0">
              <div className="space-y-3 p-4 sm:p-5">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    Understand
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-foreground">
                    Renewal terms identified. Customer context matched to CRM
                    record.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Contract", "Renewal", "Enterprise"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-cloud px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <AccentCard accent="soft" className="h-full">
                <div className="sail-glass-card h-full space-y-3 bg-surface-cloud/20 p-4 sm:p-5">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      Prepared action
                    </p>
                    <p className="mt-1.5 text-sm leading-snug text-foreground">
                      Draft renewal proposal with updated pricing tier.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <StatusDot status="active" />
                    Ready for approval
                  </div>
                </div>
              </AccentCard>
            </div>
          </div>
        </div>

        {/* Activity panel */}
        <div
          className={cn(
            "absolute bottom-0 right-0 z-20 w-[46%] max-w-[220px] sm:max-w-[240px]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-3 motion-safe:duration-700 motion-safe:delay-300 motion-reduce:animate-none"
          )}
        >
          <AccentCard accent="medium">
            <div className="sail-glass-card rounded-[10px] p-3.5 sm:p-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Activity
              </p>
              <ul className="mt-2.5 space-y-2">
                {[
                  { label: "Request parsed", status: "complete" as const },
                  { label: "Customer matched", status: "complete" as const },
                  { label: "Action prepared", status: "active" as const },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-xs text-foreground"
                  >
                    <StatusDot status={item.status} />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </AccentCard>
        </div>

        <div className="absolute bottom-8 left-[14%] right-[20%] hidden lg:block">
          <div className="flex items-center gap-3">
            {["Understand", "Decide", "Act", "Done"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span
                  className={cn(
                    "text-[10px] font-medium uppercase tracking-[0.08em]",
                    i < 3 ? "text-foreground/70" : "text-muted-foreground"
                  )}
                >
                  {step}
                </span>
                {i < 3 && (
                  <span
                    className="h-px w-6 bg-border sm:w-10"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
