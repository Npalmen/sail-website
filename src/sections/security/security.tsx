import { ContentSurface } from "@/components/layout/content-surface";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { routes } from "@/config/site";
import { homepageContent } from "@/config/homepage";

export function Security() {
  const { id, eyebrow, headline, principles } = homepageContent.security;

  return (
    <ContentSurface
      as="section"
      id={id}
      variant="frosted"
      width="standard"
      align="right"
      spacing="default"
      radius="md"
    >
      <SectionHeader eyebrow={eyebrow} headline={headline} />
      <DeepLink href={routes.security}>Läs mer om säkerhet</DeepLink>

      <ul className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sail-module-grid">
        {principles.map((principle) => (
            <li key={principle.title} className="sail-field-chapter flex flex-col p-5 sm:p-6">
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {principle.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {principle.description}
            </p>
          </li>
        ))}
      </ul>
    </ContentSurface>
  );
}
