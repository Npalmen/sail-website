import { ContentSurface } from "@/components/layout/content-surface";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";

export function Problem() {
  const { eyebrow, headline, body, channels, adminTasks } =
    homepageContent.problem;

  return (
    <ContentSurface
      as="section"
      id="problem"
      variant="frosted"
      width="editorial"
      align="left"
      spacing="default"
      radius="md"
    >
      <div className="grid gap-10 xl:grid-cols-12 xl:gap-12">
        <div className="xl:col-span-5">
          <SectionHeader eyebrow={eyebrow} headline={headline} />
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            {body}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:col-span-7">
          <div className="sail-field-chapter p-5 sm:p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Arbete kommer in via
            </p>
            <ul className="mt-4 space-y-3">
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

          <div className="p-5 sm:p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Men kräver fortfarande
            </p>
            <ul className="mt-4 space-y-3">
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
    </ContentSurface>
  );
}
