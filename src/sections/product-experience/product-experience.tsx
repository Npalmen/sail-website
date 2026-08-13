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

type ProductExperienceProps = {
  id?: string;
  eyebrow?: string;
  headline?: string;
  description?: string;
};

export function ProductExperience({
  id = homepageContent.productExperience.id,
  eyebrow = homepageContent.productExperience.eyebrow,
  headline = homepageContent.productExperience.headline,
  description,
}: ProductExperienceProps) {
  const { panels } = homepageContent.productExperience;

  return (
    <ContentSurface
      as="section"
      id={id}
      variant="frosted"
      width="wide"
      align="left"
      spacing="compact"
      padding="sm"
      radius="lg"
    >
      <SectionHeader
        eyebrow={eyebrow}
        headline={headline}
        description={description}
        className="[&_h2]:mt-3"
      />

      <div className="mt-6 sail-field-stage sm:mt-7">
        <div
          aria-hidden="true"
          className="overflow-hidden rounded-[var(--radius-module-nested)] sail-inner-module sail-inner-module--product"
        >
          <div className="flex items-center justify-between border-b border-border/40 bg-surface-product-muted/70 px-4 py-2.5 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-600/70" />
              <span className="text-xs font-medium text-foreground">
                Morgonöversikt
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground">
              Idag · 08:42
            </span>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="border-b border-border/50 p-4 sm:p-5 lg:border-b-0 lg:border-r">
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                Sammanfattning
              </p>
              <ul className="mt-3 grid gap-2">
                {panels.slice(0, 3).map((panel) => (
                  <li
                    key={panel.label}
                    className="flex min-h-[3.75rem] items-start gap-2.5 rounded-lg border border-border/35 bg-surface-product-muted/50 p-3 sm:p-2.5"
                  >
                    <StatusIndicator status={panel.status} />
                    <div>
                      <p className="text-sm font-medium text-foreground sm:text-xs">
                        {panel.label}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground sm:text-xs">
                        {panel.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 sm:p-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                Senaste aktivitet
              </p>
              <div className="mt-3 space-y-1.5">
                {[
                  "Avtalsförnyelse analyserad · Acme Corp",
                  "Kundpost matchad · CRM-kontext tillagd",
                  "Uppföljning förberedd · väntar på godkännande",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-center gap-2 rounded-md bg-surface-product-muted/60 px-2.5 py-1.5"
                  >
                    <StatusIndicator status="complete" />
                    <p className="text-sm text-foreground sm:text-xs">{line}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3.5 sail-state-module--approval p-2.5">
                <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-primary/80">
                  Behöver godkännande
                </p>
                <p className="mt-1 text-sm font-medium leading-snug text-foreground">
                  Skicka förnyelsevillkor till Acme Corp
                </p>
                <div className="mt-2.5 flex gap-2">
                  <span className="rounded-md bg-surface-white/90 px-2.5 py-1 text-[11px] font-medium text-foreground ring-1 ring-border/60">
                    Granska
                  </span>
                  <span className="rounded-md px-2.5 py-1 text-[11px] text-muted-foreground">
                    Avfärda
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
