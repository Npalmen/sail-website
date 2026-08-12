import { cn } from "@/lib/utils";

type SailFlowPatternProps = {
  className?: string;
};

export function SailFlowPattern({ className }: SailFlowPatternProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1400 700"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-foreground",
        className
      )}
    >
      <path
        d="M-40 420 C 180 380, 320 340, 520 310 S 920 260, 1180 220 S 1380 190, 1480 170"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.035"
      />
      <path
        d="M 80 520 C 260 480, 420 450, 640 420 S 980 370, 1240 340"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.028"
      />
      <path
        d="M 200 180 C 380 210, 540 240, 720 270 S 1020 320, 1320 350"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.022"
      />
    </svg>
  );
}
