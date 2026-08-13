import Link from "next/link";

import { ContentSurface } from "@/components/layout/content-surface";
import { SectionHeader } from "@/components/shared/section-header";
import { solutionAreas, solutionsPageContent } from "@/config/solutions-page";

export function SolutionsOverview() {
  const { eyebrow, headline } = solutionsPageContent.overview;

  return (
    <ContentSurface
      as="section"
      id="overview"
      variant="paper"
      width="wide"
      align="center"
      spacing="compact"
      radius="md"
    >
      <SectionHeader eyebrow={eyebrow} headline={headline} align="center" />

      <nav
        aria-label="Lösningsområden"
        className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {solutionAreas.map((area) => (
          <Link
            key={area.id}
            href={`#${area.id}`}
            className="sail-inner-module flex flex-col p-4 transition-colors hover:bg-surface-white sm:p-5"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-sail-blue">
              {area.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{area.summary}</p>
          </Link>
        ))}
      </nav>
    </ContentSurface>
  );
}
