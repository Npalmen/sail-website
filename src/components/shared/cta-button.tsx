"use client";

import { useCtaProximity } from "@/hooks/use-cta-proximity";
import { cn } from "@/lib/utils";

type CtaButtonProps = React.ComponentPropsWithoutRef<"button">;

export function CtaButton({ className, children, ...props }: CtaButtonProps) {
  const ref = useCtaProximity<HTMLButtonElement>();

  return (
    <button ref={ref} className={cn("btn-cta", className)} {...props}>
      <span className="btn-cta__label">{children}</span>
    </button>
  );
}
