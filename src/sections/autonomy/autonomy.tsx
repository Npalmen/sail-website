import { ContentSurface } from "@/components/layout/content-surface";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { routes } from "@/config/site";
import { homepageContent } from "@/config/homepage";
import { cn } from "@/lib/utils";

export function Autonomy() {
  const { id, eyebrow, headline, levels } = homepageContent.autonomy;

  return (
    <ContentSurface
      as="section"
      id={id}
      variant="dark"
      width="wide"
      align="center"
      spacing="loose"
      radius="lg"
    >
      <SectionHeader eyebrow={eyebrow} headline={headline} variant="dark" />
      <DeepLink href={routes.security} className="text-white/60 hover:text-white/90">
        Se SAIL:s kontrollmodell
      </DeepLink>

      <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:mt-14 xl:grid-cols-4 sail-module-grid">
        {levels.map((level, index) => (
          <div
            key={level.title}
            className={cn(
              "sail-inner-module--dark flex flex-col rounded-[var(--radius-module-nested)] p-4 sm:p-5",
              index === 3 && "ring-1 ring-white/15"
            )}
          >
            <span className="font-mono text-xs text-white/40">
              Nivå {level.level}
            </span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-white/95">
              {level.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {level.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile — vertical progression */}
      <div className="mt-8 space-y-3 lg:hidden">
        {levels.map((level, index) => (
          <div key={level.title} className="flex items-center gap-3">
            <div
              className={cn(
                "h-1.5 shrink-0 rounded-full bg-white/20",
                index === 0 && "w-10",
                index === 1 && "w-14",
                index === 2 && "w-[4.5rem]",
                index === 3 && "w-20 bg-white/40"
              )}
            />
            <span className="text-xs text-white/50">Nivå {level.level}</span>
          </div>
        ))}
        <p className="pt-1 text-xs text-white/45">Ökande autonomi</p>
      </div>

      {/* Desktop — horizontal rail */}
      <div className="mt-8 hidden items-center gap-2 overflow-x-auto pb-2 lg:flex">
        {levels.map((level, index) => (
          <div key={level.title} className="flex items-center gap-2">
            <div
              className={cn(
                "h-1.5 rounded-full bg-white/20",
                index === 0 && "w-8",
                index === 1 && "w-12",
                index === 2 && "w-16",
                index === 3 && "w-24 bg-white/40"
              )}
            />
            {index < levels.length - 1 && (
              <span className="text-white/25">→</span>
            )}
          </div>
        ))}
        <span className="ml-2 shrink-0 text-xs text-white/45">
          Ökande autonomi
        </span>
      </div>
    </ContentSurface>
  );
}
