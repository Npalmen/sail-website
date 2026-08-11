"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const ctaMobile =
  "inline-flex h-10 w-full items-center justify-center rounded-[10px] bg-foreground text-sm font-medium text-background transition-colors hover:bg-foreground/90";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open navigation menu"
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
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-t border-border p-4">
          <Link
            href={siteConfig.links.login}
            className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </Link>
          <Link href={siteConfig.links.bookDemo} className={cn(ctaMobile)}>
            Book a demo
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
