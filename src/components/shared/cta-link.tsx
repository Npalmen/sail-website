"use client";

import Link from "next/link";

import { useCtaProximity } from "@/hooks/use-cta-proximity";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function CtaLink({ href, children, className }: CtaLinkProps) {
  const ref = useCtaProximity<HTMLAnchorElement>();

  return (
    <Link ref={ref} href={href} className={cn("btn-cta", className)}>
      <span className="btn-cta__label">{children}</span>
    </Link>
  );
}
