"use client";

import Link from "next/link";

import { useOpticalPointer } from "@/hooks/use-optical-pointer";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function CtaLink({ href, children, className }: CtaLinkProps) {
  const ref = useOpticalPointer<HTMLAnchorElement>({ prefix: "cta" });

  return (
    <Link ref={ref} href={href} className={cn("btn-cta", className)}>
      {children}
    </Link>
  );
}
