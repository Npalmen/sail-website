"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { CtaLink } from "@/components/shared/cta-link";
import { NavLink } from "@/components/shared/nav-link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="size-11 md:hidden"
            aria-label="Öppna navigationsmenyn"
          />
        }
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="sail-mobile-sheet w-full max-w-sm border-0 bg-transparent shadow-none"
      >
        <SheetHeader className="px-2 pt-2">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-2 pt-2">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center rounded-[var(--radius-module-info)] px-3 py-2.5 text-sm !text-foreground hover:bg-surface-soft/60"
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-t border-border/50 p-4">
          <Link
            href={siteConfig.links.login}
            className="flex min-h-11 items-center px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Logga in
          </Link>
          <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg w-full">
            Boka demo
          </CtaLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}
