import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-base font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80",
        className
      )}
    >
      {siteConfig.name}
    </Link>
  );
}
