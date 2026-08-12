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
            className="md:hidden"
              aria-label="Öppna navigationsmenyn"
          />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-0.5 px-4 pt-2">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-sm !text-foreground hover:bg-muted"
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-t border-border p-4">
          <Link
            href={siteConfig.links.login}
            className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
