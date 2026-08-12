import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { SailCanvasPattern } from "@/components/shared/sail-canvas-pattern";
import { homepageContent } from "@/config/homepage";

export function Problem() {
  const { eyebrow, headline, body, channels, adminTasks } =
    homepageContent.problem;

  return (
    <section id="problem" className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20">
      <SailCanvasPattern variant="section" grain />

      <Container className="relative z-10">
        <div className="grid gap-12 xl:grid-cols-12 xl:gap-16">
          <div className="xl:col-span-5">
            <SectionHeader eyebrow={eyebrow} headline={headline} />
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              {body}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:col-span-7 xl:gap-10">
            <div className="sail-field-chapter p-6 sm:p-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Work arrives through
              </p>
              <ul className="mt-5 space-y-3">
                {channels.map((channel) => (
                  <li
                    key={channel}
                    className="border-l-2 border-border pl-4 text-sm font-medium text-foreground sm:text-[15px]"
                  >
                    {channel}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative p-6 sm:p-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                But still requires
              </p>
              <ul className="mt-5 space-y-3">
                {adminTasks.map((task) => (
                  <li
                    key={task}
                    className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
