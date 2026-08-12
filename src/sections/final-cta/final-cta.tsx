"use client";

import Link from "next/link";

import { ContentSurface } from "@/components/layout/content-surface";
import { CtaLink } from "@/components/shared/cta-link";
import { ctaSecondary } from "@/components/shared/cta-styles";
import { SailOpticalShell } from "@/components/shared/sail-optical-shell";
import { homepageContent } from "@/config/homepage";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  const { id, headline, body } = homepageContent.finalCta;

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
      <SailOpticalShell intensity="medium" className="rounded-[26px]">
        <div className="px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {headline}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg">
              Book a demo
            </CtaLink>
            <Link href="#workflow" className={ctaSecondary}>
              See how SAIL works
            </Link>
          </div>
        </div>
      </SailOpticalShell>
    </ContentSurface>
  );
}
