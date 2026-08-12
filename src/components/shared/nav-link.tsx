"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn("nav-link", isActive && "nav-link--active", className)}
    >
      {children}
    </Link>
  );
}

export function MainNavLinks() {
  return (
    <>
      {siteConfig.nav.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.title}
        </NavLink>
      ))}
    </>
  );
}
