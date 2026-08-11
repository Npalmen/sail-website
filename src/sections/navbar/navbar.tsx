import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ctaPrimarySm } from "@/components/shared/cta-styles";
import { SailHalo } from "@/components/shared/sail-halo";
import { Wordmark } from "@/components/shared/wordmark";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-3 sm:px-6 md:pt-4">
      <Container as="div">
        <SailHalo
          variant="nav"
          className={cn(
            "rounded-xl border border-border/70 bg-surface-white/88 shadow-[0_1px_2px_rgba(17,19,24,0.04),0_8px_24px_rgba(17,19,24,0.03)]",
            "backdrop-blur-md md:rounded-2xl"
          )}
        >
          <div className="flex h-[3.5rem] items-center justify-between gap-6 px-4 sm:h-[3.75rem] sm:px-5 md:px-6">
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
                className={cn(ctaPrimarySm, "hidden md:inline-flex")}
              >
                Book a demo
              </Link>
              <MobileNav />
            </div>
          </div>
        </SailHalo>
      </Container>
    </header>
  );
}
