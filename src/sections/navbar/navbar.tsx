import Link from "next/link";

import { CtaLink } from "@/components/shared/cta-link";
import { MainNavLinks } from "@/components/shared/nav-link";
import { SailOpticalShell } from "@/components/shared/sail-optical-shell";
import { Wordmark } from "@/components/shared/wordmark";
import { siteConfig } from "@/config/site";

import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6 md:pt-4">
      <div className="mx-auto w-[min(92vw,1320px)]">
        <SailOpticalShell className="rounded-xl md:rounded-2xl">
          <div className="flex h-[62px] items-center justify-between gap-6 px-4 md:h-16 md:px-6">
            <Wordmark className="text-[15px]" />

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-7 md:flex lg:gap-9"
            >
              <MainNavLinks />
            </nav>

            <div className="flex items-center gap-4 sm:gap-5">
              <Link
                href={siteConfig.links.login}
                className="hidden text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
              >
                Log in
              </Link>
              <CtaLink
                href={siteConfig.links.bookDemo}
                className="btn-cta--sm hidden md:inline-flex"
              >
                Book a demo
              </CtaLink>
              <MobileNav />
            </div>
          </div>
        </SailOpticalShell>
      </div>
    </header>
  );
}

