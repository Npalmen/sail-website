import Link from "next/link";

import { cn } from "@/lib/utils";

type DeepLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function DeepLink({ href, children, className }: DeepLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "deep-link group mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 transition-colors",
        className
      )}
    >
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
