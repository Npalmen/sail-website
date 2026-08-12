import { ContentSurface } from "@/components/layout/content-surface";
import { SectionHeader } from "@/components/shared/section-header";
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
    <ContentSurface
      as="section"
      id={id}
      variant="frosted"
      width="wide"
      align="left"
      spacing="default"
      radius="lg"
    >
      <SectionHeader eyebrow={eyebrow} headline={headline} />

      <div className="mt-10 sail-field-stage p-3 sm:mt-14 sm:p-4">
        <div
          aria-hidden="true"
          className="overflow-hidden rounded-[14px] sail-inner-module"
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

                <div className="mt-5 sail-state-module--approval p-3">
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
    </ContentSurface>
  );
}
