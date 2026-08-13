import { ContentSurface } from "@/components/layout/content-surface";
import { CtaLink } from "@/components/shared/cta-link";
import { SailOpticalShell } from "@/components/shared/sail-optical-shell";
import { productPageContent } from "@/config/product-page";
import { siteConfig } from "@/config/site";

export function ProductFinalCta() {
  const { headline, body } = productPageContent.finalCta;

  return (
    <ContentSurface variant="open" width="standard" align="center" spacing="loose" padding="none">
      <SailOpticalShell
        intensity="medium"
        className="rounded-[22px] xl:rounded-[var(--radius-surface-lg)]"
      >
        <div className="px-5 py-10 text-center sm:px-8 sm:py-12 lg:px-12 lg:py-16">
          <h2 className="mx-auto max-w-[20ch] text-2xl font-semibold tracking-tight text-foreground sm:max-w-none sm:text-3xl">
            {headline}
          </h2>
          <p className="text-body-readable mx-auto mt-4 max-w-md text-base leading-relaxed">
            {body}
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink href={siteConfig.links.bookDemo} className="btn-cta--lg w-full sm:w-auto">
              Boka demo
            </CtaLink>
          </div>
        </div>
      </SailOpticalShell>
    </ContentSurface>
  );
}
