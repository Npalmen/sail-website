import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { SailCanvasPattern } from "@/components/shared/sail-canvas-pattern";
import { homepageContent } from "@/config/homepage";
import { cn } from "@/lib/utils";

type PanelStatus = "complete" | "active" | "pending";

function StatusIndicator({ status }: { status: PanelStatus }) {
  return (
    <span
      className={cn(
        "size-1.5 rounded-full",
        status === "complete" && "bg-emerald-500/80",
        status === "active" && "bg-primary/70",
        status === "pending" && "bg-amber-500/70"
      )}
    />
  );
}

export function ProductExperience() {
  const { id, eyebrow, headline, panels } = homepageContent.productExperience;

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-surface-cloud pb-20 pt-16 sm:pb-28 sm:pt-20"
    >
      <SailCanvasPattern variant="section" />

      <Container className="relative z-10">
        <SectionHeader eyebrow={eyebrow} headline={headline} />

        <div className="mt-12 sail-field-stage p-3 sm:mt-16 sm:p-5">
          <div
            aria-hidden="true"
            className="overflow-hidden rounded-xl border border-border/60 bg-surface-white shadow-[0_1px_3px_rgba(17,21,29,0.04)]"
          >
            <div className="flex items-center justify-between border-b border-border/50 bg-surface-soft/40 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-600/70" />
                <span className="text-xs font-medium text-foreground">
                  Morning overview
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground">
                Today · 08:42
              </span>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1fr_1.4fr]">
              <div className="border-b border-border/50 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  Summary
                </p>
                <ul className="mt-4 space-y-3">
                  {panels.slice(0, 3).map((panel) => (
                    <li
                      key={panel.label}
                      className="flex items-start gap-2.5 rounded-lg border border-border/40 bg-surface-soft/30 p-3"
                    >
                      <StatusIndicator status={panel.status} />
                      <div>
                        <p className="text-xs font-medium text-foreground">
                          {panel.label}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {panel.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  Recent activity
                </p>
                <div className="mt-4 space-y-2">
                  {[
                    "Contract renewal parsed · Acme Corp",
                    "Customer record matched · CRM context added",
                    "Follow-up prepared · awaiting approval",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-center gap-2 rounded-md bg-surface-soft/50 px-3 py-2"
                    >
                      <StatusIndicator status="complete" />
                      <p className="text-xs text-foreground">{line}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-primary/15 bg-primary/[0.03] p-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-primary/80">
                    Needs approval
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-foreground">
                    Send renewal terms to Acme Corp
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-md bg-surface-white px-2.5 py-1 text-[11px] font-medium text-foreground ring-1 ring-border/60">
                      Review
                    </span>
                    <span className="rounded-md px-2.5 py-1 text-[11px] text-muted-foreground">
                      Dismiss
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
