import { cn } from "@/lib/utils";

type WorkflowStep = {
  label: string;
  status: "complete" | "active" | "pending";
};

const steps: WorkflowStep[] = [
  { label: "Understood", status: "complete" },
  { label: "Customer matched", status: "complete" },
  { label: "Action prepared", status: "complete" },
  { label: "Waiting for approval", status: "active" },
];

const statusStyles = {
  complete: "bg-emerald-500",
  active: "bg-primary",
  pending: "bg-muted-foreground/40",
} as const;

export function ProductPreview() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-md lg:max-w-none"
    >
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Workflow
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              Incoming request
            </p>
          </div>
          <span className="rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
            Live
          </span>
        </div>

        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li
              key={step.label}
              className={cn(
                "flex items-center gap-3 rounded-lg border border-border/60 bg-surface-cloud px-3 py-2.5",
                index === steps.length - 1 && "border-primary/20 bg-primary/5"
              )}
            >
              <span
                className={cn(
                  "size-2 shrink-0 rounded-full",
                  statusStyles[step.status]
                )}
              />
              <span className="text-sm text-foreground">{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
