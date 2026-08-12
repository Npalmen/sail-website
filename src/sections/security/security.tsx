import { Container } from "@/components/layout/container";
import { SailEmboss } from "@/components/shared/sail-emboss";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";

export function Security() {
  const { id, eyebrow, headline, principles } = homepageContent.security;

  return (
    <section id={id} className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20">
      <SailEmboss className="absolute -right-8 top-12 text-[8rem] leading-none opacity-40 sm:text-[10rem] xl:text-[14rem]">
        SAIL
      </SailEmboss>

      <Container className="relative z-10">
        <SectionHeader eyebrow={eyebrow} headline={headline} />

        <ul className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2">
          {principles.map((principle) => (
            <li
              key={principle.title}
              className="sail-field-chapter p-6 sm:p-7"
            >
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
