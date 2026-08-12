import { cn } from "@/lib/utils";

type SailEmbossProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "emboss" | "deboss";
};

export function SailEmboss({
  children,
  className,
  variant = "deboss",
}: SailEmbossProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none select-none",
        variant === "deboss" && "sail-emboss sail-emboss--deboss",
        variant === "emboss" && "sail-emboss sail-emboss--emboss",
        className
      )}
    >
      {children}
    </div>
  );
}
