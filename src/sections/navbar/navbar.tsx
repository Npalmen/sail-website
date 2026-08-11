import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/shared/wordmark";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { MobileNav } from "./mobile-nav";

const ctaNav =
  "inline-flex h-9 items-center justify-center rounded-[10px] bg-foreground px-4 text-[13px] font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-surface-warm/85 backdrop-blur-md">
      <Container
        as="div"
        className="flex h-[3.75rem] items-center justify-between gap-6 sm:h-16"
      >
        <Wordmark className="text-[15px]" />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex lg:gap-9"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <Link
            href={siteConfig.links.login}
            className="hidden text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            Log in
          </Link>
          <Link
            href={siteConfig.links.bookDemo}
            className={cn(ctaNav, "hidden md:inline-flex")}
          >
            Book a demo
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
