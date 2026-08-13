import Link from "next/link";

import { ContentSurface } from "@/components/layout/content-surface";
import { CtaLink } from "@/components/shared/cta-link";
import { ctaSecondary } from "@/components/shared/cta-styles";
import { solutionsPageContent } from "@/config/solutions-page";
import { routes, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SolutionsHero() {
  const { eyebrow, headline, body } = solutionsPageContent.hero;

  return (
    <ContentSurface variant="open" width="editorial" align="left" spacing="compact" padding="none">
      <div className="max-w-2xl pt-6 sm:pt-10">
        <p className="text-[13px] font-medium tracking-[0.04em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-[18ch] text-display font-semibold text-foreground sm:max-w-[20ch]">
          {headline}
        </h1>
        <p className="text-body-readable mt-5 max-w-[42ch] text-base leading-relaxed sm:mt-6 sm:text-[17px] sm:leading-[1.65]">
          {body}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg w-full sm:w-auto">
            Boka demo
          </CtaLink>
          <Link href={routes.product} className={cn(ctaSecondary, "justify-center sm:justify-start")}>
            Se hur SAIL fungerar
          </Link>
        </div>
      </div>
    </ContentSurface>
  );
}
