import { cn } from "@/lib/utils";

type SailCanvasPatternProps = {
  variant?: "page" | "hero" | "section";
  /** Micro-grain overlay — off by default */
  grain?: boolean;
  className?: string;
};

const variantClass = {
  page: "sail-canvas--page",
  hero: "sail-canvas--hero",
  section: "sail-canvas--section",
} as const;

export function SailCanvasPattern({
  variant = "page",
  grain = false,
  className,
}: SailCanvasPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "sail-canvas pointer-events-none absolute inset-0",
        variantClass[variant],
        grain && "sail-canvas--grain",
        className
      )}
    />
  );
}
