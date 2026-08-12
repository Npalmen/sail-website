import { ContentSurface } from "@/components/layout/content-surface";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";

export function Security() {
  const { id, eyebrow, headline, principles } = homepageContent.security;

  return (
    <ContentSurface
      as="section"
      id={id}
      variant="paper"
      width="standard"
      align="right"
      spacing="default"
      radius="md"
    >
      <SectionHeader eyebrow={eyebrow} headline={headline} />

      <ul className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2">
        {principles.map((principle) => (
          <li key={principle.title} className="sail-field-chapter p-5 sm:p-6">
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
