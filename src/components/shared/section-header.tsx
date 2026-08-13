import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  headline: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  headline,
  description,
  className,
  align = "left",
  variant = "light",
}: SectionHeaderProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      <p
        className={cn(
          "text-[11px] font-medium uppercase tracking-[0.14em]",
          isDark ? "text-white/50" : "text-muted-foreground"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-2xl font-semibold tracking-tight sm:text-3xl xl:text-[2rem] xl:leading-[1.15]",
          align === "center" && "mx-auto max-w-[22ch] sm:max-w-none",
          isDark ? "text-white/95" : "text-foreground"
        )}
      >
        {headline}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-[17px]",
            isDark ? "text-white/60" : "text-body-readable"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
