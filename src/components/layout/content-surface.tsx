import { cn } from "@/lib/utils";

type SurfaceVariant =
  | "paper"
  | "frosted"
  | "soft"
  | "product"
  | "dark"
  | "open";

type SurfaceWidth = "wide" | "standard" | "editorial" | "narrow";
type SurfaceAlign = "center" | "left" | "right";
type SurfaceRadius = "sm" | "md" | "lg";
type SurfaceSpacing = "compact" | "default" | "loose" | "open";
type SurfacePadding = "none" | "sm" | "default" | "lg";

type ContentSurfaceProps = {
  children: React.ReactNode;
  variant?: SurfaceVariant;
  width?: SurfaceWidth;
  align?: SurfaceAlign;
  radius?: SurfaceRadius;
  spacing?: SurfaceSpacing;
  padding?: SurfacePadding;
  className?: string;
  innerClassName?: string;
  as?: "div" | "section" | "article" | "footer";
  id?: string;
  "aria-label"?: string;
};

const widthClass: Record<SurfaceWidth, string> = {
  wide: "max-w-[min(calc(100vw-2rem),1320px)]",
  standard: "max-w-[min(calc(100vw-2rem),1140px)]",
  editorial: "max-w-[min(calc(100vw-2rem),980px)]",
  narrow: "max-w-[min(calc(100vw-2rem),840px)]",
};

const alignClass: Record<SurfaceAlign, string> = {
  center: "mx-auto",
  left: "mx-auto md:ml-[5%] md:mr-auto lg:ml-[7%]",
  right: "mx-auto md:ml-auto md:mr-[5%] lg:mr-[7%]",
};

const radiusClass: Record<SurfaceRadius, string> = {
  sm: "rounded-[var(--radius-surface-sm)]",
  md: "rounded-[var(--radius-surface-md)]",
  lg: "rounded-[var(--radius-surface-lg)]",
};

const spacingClass: Record<SurfaceSpacing, string> = {
  compact: "py-12 sm:py-16",
  default: "py-16 sm:py-20 lg:py-24",
  loose: "py-20 sm:py-28 lg:py-32",
  open: "py-20 sm:py-28",
};

const paddingClass: Record<SurfacePadding, string> = {
  none: "",
  sm: "p-5 sm:p-6",
  default: "p-6 sm:p-8 lg:p-10",
  lg: "p-8 sm:p-10 lg:p-12",
};

const variantClass: Record<Exclude<SurfaceVariant, "open">, string> = {
  paper: "sail-surface-frosted shadow-glass-floating",
  frosted: "sail-surface-frosted shadow-glass-floating",
  soft: "sail-surface-frosted shadow-glass-floating",
  product: "sail-surface-frosted shadow-glass-floating",
  dark: "sail-surface-dark-frosted shadow-dark-floating",
};

export function ContentSurface({
  children,
  variant = "paper",
  width = "standard",
  align = "center",
  radius = "md",
  spacing = "default",
  padding = "default",
  className,
  innerClassName,
  as: Component = "div",
  id,
  "aria-label": ariaLabel,
}: ContentSurfaceProps) {
  const isOpen = variant === "open";

  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      className={cn("px-4 sm:px-6", spacingClass[spacing], className)}
    >
      <div
        className={cn(
          "w-full",
          widthClass[width],
          alignClass[align],
          !isOpen && radiusClass[radius],
          !isOpen && variantClass[variant],
          !isOpen && paddingClass[padding],
          innerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}
