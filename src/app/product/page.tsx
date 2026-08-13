import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { ProductExperience } from "@/sections/product-experience/product-experience";
import { ProductCapabilityBridge } from "@/sections/product/product-capability-bridge";
import { ProductControl } from "@/sections/product/product-control";
import { ProductDifferentiation } from "@/sections/product/product-differentiation";
import { ProductFinalCta } from "@/sections/product/product-final-cta";
import { ProductHero } from "@/sections/product/product-hero";
import { ProductJourney, ProductJourneyResult } from "@/sections/product/product-journey";
import { productPageContent } from "@/config/product-page";
import { pageMetadata } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.product.title,
  description: pageMetadata.product.description,
};

export default function ProductPage() {
  const { morningOverview } = productPageContent;

  return (
    <SiteShell>
      <ProductHero />
      <ProductJourney />
      <ProductDifferentiation />
      <ProductControl />
      <ProductJourneyResult />
      <ProductExperience
        id="morning-overview"
        eyebrow={morningOverview.eyebrow}
        headline={morningOverview.headline}
        description={morningOverview.description}
      />
      <ProductCapabilityBridge />
      <ProductFinalCta />
    </SiteShell>
  );
}
