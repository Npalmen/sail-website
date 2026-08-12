"use client";

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ctaPrimary, ctaSecondary } from "@/components/shared/cta-styles";
import { SailCanvasPattern } from "@/components/shared/sail-canvas-pattern";
import { SailEmboss } from "@/components/shared/sail-emboss";
import { SailOpticalShell } from "@/components/shared/sail-optical-shell";
import { homepageContent } from "@/config/homepage";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  const { id, headline, body } = homepageContent.finalCta;

  return (
    <section
      id={id}
      className="relative overflow-hidden pb-24 pt-16 sm:pb-32 sm:pt-20"
    >
      <SailCanvasPattern variant="hero" grain />

      <SailEmboss className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[6rem] leading-none opacity-25 sm:text-[8rem] xl:text-[10rem]">
        SAIL
      </SailEmboss>

      <Container className="relative z-10">
        <SailOpticalShell
          intensity="medium"
          className="mx-auto max-w-3xl rounded-2xl"
        >
          <div className="px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {headline}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href={siteConfig.links.bookDemo} className={ctaPrimary}>
                Book a demo
              </Link>
              <Link href="#workflow" className={ctaSecondary}>
                See how SAIL works
              </Link>
            </div>
          </div>
        </SailOpticalShell>
      </Container>
    </section>
  );
}
