import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { SolutionChapter } from "@/sections/solutions/solution-chapter";
import { SolutionsControl } from "@/sections/solutions/solutions-control";
import { SolutionsExpansion } from "@/sections/solutions/solutions-expansion";
import { SolutionsFinalCta } from "@/sections/solutions/solutions-final-cta";
import { SolutionsHero } from "@/sections/solutions/solutions-hero";
import { SolutionsOverview } from "@/sections/solutions/solutions-overview";
import { SolutionsProductLink } from "@/sections/solutions/solutions-product-link";
import { solutionAreas } from "@/config/solutions-page";
import { pageMetadata } from "@/config/site";

export const metadata: Metadata = {
  title: pageMetadata.solutions.title,
  description: pageMetadata.solutions.description,
};

export default function SolutionsPage() {
  return (
    <SiteShell>
      <SolutionsHero />
      <SolutionsOverview />
      {solutionAreas.map((area) => (
        <SolutionChapter key={area.id} area={area} />
      ))}
      <SolutionsExpansion />
      <SolutionsControl />
      <SolutionsProductLink />
      <SolutionsFinalCta />
    </SiteShell>
  );
}
