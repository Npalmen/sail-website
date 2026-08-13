import { ContentSurface } from "@/components/layout/content-surface";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { solutionsPageContent } from "@/config/solutions-page";
import { routes } from "@/config/site";

export function SolutionsControl() {
  const { eyebrow, headline, body, examples } = solutionsPageContent.control;

  return (
    <ContentSurface
      as="section"
      variant="dark"
      width="wide"
      align="center"
      spacing="default"
      radius="lg"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
        <div>
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            description={body}
            variant="dark"
          />
          <DeepLink href={routes.security} className="text-white/60 hover:text-white/90">
            Se säkerhet och kontroll
          </DeepLink>
        </div>

        <div className="sail-inner-module--dark p-5 sm:p-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/45">
            Exempel på gränser
          </p>
          <ul className="mt-4 space-y-3">
            {examples.map((example) => (
              <li key={example} className="flex items-start gap-2.5 text-sm text-white/80">
                <span className="mt-0.5 text-sail-blue" aria-hidden="true">
                  →
                </span>
                {example}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentSurface>
  );
}
