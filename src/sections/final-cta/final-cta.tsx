"use client";

import Link from "next/link";

import { ContentSurface } from "@/components/layout/content-surface";
import { CtaLink } from "@/components/shared/cta-link";
import { ctaSecondary } from "@/components/shared/cta-styles";
import { SailOpticalShell } from "@/components/shared/sail-optical-shell";
import { homepageContent } from "@/config/homepage";
import { routes, siteConfig } from "@/config/site";

type FinalCtaProps = {
  id?: string;
};

export function FinalCta({ id = homepageContent.finalCta.id }: FinalCtaProps) {
  const { headline, body } = homepageContent.finalCta;

  return (
    <ContentSurface
      as="section"
      id={id}
      variant="open"
      width="standard"
      align="center"
      spacing="loose"
      padding="none"
    >
      <SailOpticalShell
        intensity="medium"
        className="rounded-[22px] xl:rounded-[var(--radius-surface-lg)]"
      >
        <div className="px-5 py-10 text-center sm:px-8 sm:py-12 lg:px-12 lg:py-16">
          <h2 className="mx-auto max-w-[18ch] text-2xl font-semibold tracking-tight text-foreground sm:max-w-none sm:text-3xl">
            {headline}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {body}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg w-full sm:w-auto">
              Boka demo
            </CtaLink>
            <Link href={routes.product} className={ctaSecondary}>
              Se hur SAIL fungerar
            </Link>
          </div>
        </div>
      </SailOpticalShell>
    </ContentSurface>
  );
}
