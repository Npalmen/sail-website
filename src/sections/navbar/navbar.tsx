import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/shared/wordmark";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-surface-warm/90 backdrop-blur-sm">
      <Container as="div" className="flex h-16 items-center justify-between gap-4">
        <Wordmark />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.links.login}
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Log in
          </Link>
          <Link
            href={siteConfig.links.bookDemo}
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "hidden sm:inline-flex"
            )}
          >
            Book a demo
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
