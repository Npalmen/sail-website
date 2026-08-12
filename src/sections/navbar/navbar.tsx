import Link from "next/link";

import { CtaLink } from "@/components/shared/cta-link";
import { MainNavLinks } from "@/components/shared/nav-link";
import { SailOpticalShell } from "@/components/shared/sail-optical-shell";
import { Wordmark } from "@/components/shared/wordmark";
import { siteConfig } from "@/config/site";

import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="sail-site-header sticky top-0 z-50 px-4 pt-3 sm:px-5 xl:px-6 md:pt-4">
      <div className="mx-auto w-full max-w-[min(calc(100vw-2rem),1320px)]">
        <SailOpticalShell className="rounded-[var(--radius-surface-sm)] md:rounded-[var(--radius-surface-md)]">
          <div className="flex h-14 min-h-[3.5rem] items-center justify-between gap-4 px-4 md:h-16 md:gap-6 md:px-6">
            <Wordmark className="text-[15px]" />

            <nav
              aria-label="Huvudnavigering"
              className="hidden items-center gap-7 md:flex lg:gap-9"
            >
              <MainNavLinks />
            </nav>

            <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
              <Link
                href={siteConfig.links.login}
                className="hidden text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
              >
                Logga in
              </Link>
              <CtaLink
                href={siteConfig.links.bookDemo}
                className="btn-cta--sm hidden md:inline-flex"
              >
                Boka demo
              </CtaLink>
              <MobileNav />
            </div>
          </div>
        </SailOpticalShell>
      </div>
    </header>
  );
}
