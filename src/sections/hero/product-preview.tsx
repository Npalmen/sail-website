import { cn } from "@/lib/utils";

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

type OpticalCardProps = {
  children: React.ReactNode;
  className?: string;
  edge?: "medium" | "soft" | "none";
};

function OpticalCard({ children, className, edge = "none" }: OpticalCardProps) {
  return (
    <div
      className={cn(
        edge === "medium" && "sail-optical-edge sail-optical-edge--medium",
        edge === "soft" && "sail-optical-edge sail-optical-edge--soft",
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
      className="relative mx-auto w-full max-w-[720px] md:max-w-none xl:max-w-[880px]"
    >
      <div className="relative min-h-[380px] sm:min-h-[420px] xl:min-h-[480px]">
        {/* Incoming — restrained optical echo */}
        <div
          className={cn(
            "absolute left-0 top-0 z-20 w-[52%] max-w-[240px] sm:max-w-[260px]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-3 motion-safe:duration-700 motion-reduce:animate-none"
          )}
        >
          <OpticalCard edge="medium">
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
          </OpticalCard>
        </div>

        {/* Main workspace — clean, stable, no optical edge */}
        <div
          className={cn(
            "absolute left-[8%] right-0 top-[18%] z-10 sm:left-[12%] xl:left-[14%] xl:top-[14%]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-safe:delay-150 motion-reduce:animate-none"
          )}
        >
          <div className="overflow-hidden rounded-xl border border-border/60 bg-surface-white shadow-[0_1px_3px_rgba(17,21,29,0.04)]">
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

              {/* Prepared action — very soft echo */}
              <OpticalCard edge="soft" className="h-full">
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
              </OpticalCard>
            </div>
          </div>
        </div>

        {/* Activity — neutral, no optical edge */}
        <div
          className={cn(
            "absolute bottom-0 right-0 z-20 w-[46%] max-w-[220px] sm:max-w-[240px]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-3 motion-safe:duration-700 motion-safe:delay-300 motion-reduce:animate-none"
          )}
        >
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
        </div>

        <div className="absolute bottom-8 left-[14%] right-[20%] hidden xl:block">
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
