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

function IncomingCard({ className }: { className?: string }) {
  return (
    <OpticalCard edge="medium" className={className}>
      <div className="sail-glass-card rounded-[var(--radius-module-info)] p-3.5 sm:p-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          Inkommande
        </p>
        <p className="mt-2 text-[13px] font-medium leading-snug text-foreground">
          Begäran om avtalsförnyelse
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          Från Acme Corp · mottagen för 2 min sedan
        </p>
      </div>
    </OpticalCard>
  );
}

function ActivityCard({ className }: { className?: string }) {
  return (
    <div className={cn("sail-glass-card rounded-[var(--radius-module-info)] p-3.5 sm:p-4", className)}>
      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
        Aktivitet
      </p>
      <ul className="mt-2.5 space-y-2">
        {[
          { label: "Begäran analyserad", status: "complete" as const },
          { label: "Kund matchad", status: "complete" as const },
          { label: "Åtgärd förberedd", status: "active" as const },
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
  );
}

function WorkspacePanel() {
  return (
    <div className="sail-product-workspace">
      <div className="flex items-center justify-between border-b border-border/50 bg-surface-soft/40 px-4 py-2.5 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-600/70" />
          <span className="text-xs font-medium text-foreground">
            SAIL-arbetsyta
          </span>
        </div>
        <span className="text-[11px] text-muted-foreground">Acme Corp</span>
      </div>

      <div className="grid sm:grid-cols-2 sail-module-grid">
        <div className="flex h-full flex-col p-4 sm:p-5">
          <div className="flex flex-1 flex-col">
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
              Förstå
            </p>
            <p className="mt-1.5 text-sm leading-snug text-foreground">
              Förnyelsevillkor identifierade. Kundkontext matchad mot
              CRM-post.
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Avtal", "Förnyelse", "Enterprise"].map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-surface-cloud px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col border-t border-border/50 bg-surface-cloud/15 p-4 sm:border-t-0 sm:border-l sm:p-5">
          <div className="flex flex-1 flex-col">
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
              Förberedd åtgärd
            </p>
            <p className="mt-1.5 text-sm leading-snug text-foreground">
              Utforma förnyelseförslag med uppdaterad prisnivå.
            </p>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <StatusDot status="active" />
            Redo för godkännande
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductPreview() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[720px] md:max-w-none xl:max-w-[880px]"
    >
      {/* Mobile / narrow — deliberate stack */}
      <div className="flex flex-col gap-3 sm:hidden">
        <IncomingCard />
        <WorkspacePanel />
        <ActivityCard />
      </div>

      {/* Tablet+ — layered composition */}
      <div className="relative hidden min-h-[380px] sm:block sm:min-h-[420px] xl:min-h-[480px]">
        <div
          className={cn(
            "absolute left-0 top-0 z-20 w-[52%] max-w-[240px] sm:max-w-[260px]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-3 motion-safe:duration-700 motion-reduce:animate-none"
          )}
        >
          <IncomingCard />
        </div>

        <div
          className={cn(
            "absolute left-[8%] right-0 top-[18%] z-10 sm:left-[12%] xl:left-[14%] xl:top-[14%]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-safe:delay-150 motion-reduce:animate-none"
          )}
        >
          <WorkspacePanel />
        </div>

        <div
          className={cn(
            "absolute bottom-0 right-0 z-20 w-[46%] max-w-[220px] sm:max-w-[240px]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-3 motion-safe:duration-700 motion-safe:delay-300 motion-reduce:animate-none"
          )}
        >
          <ActivityCard />
        </div>

        <div className="absolute bottom-8 left-[14%] right-[20%] hidden xl:block">
          <div className="flex items-center gap-3">
            {["Förstå", "Bedöm", "Agera", "Klart"].map((step, i) => (
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
