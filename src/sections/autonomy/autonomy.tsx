import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { homepageContent } from "@/config/homepage";
import { cn } from "@/lib/utils";

export function Autonomy() {
  const { id, eyebrow, headline, levels } = homepageContent.autonomy;

  return (
    <section
      id={id}
      className="sail-surface-ink relative overflow-hidden py-20 sm:py-28"
    >
      <Container className="relative z-10">
        <SectionHeader
          eyebrow={eyebrow}
          headline={headline}
          variant="dark"
        />

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 xl:grid-cols-4">
          {levels.map((level, index) => (
            <div
              key={level.title}
              className={cn(
                "sail-glass-card--dark rounded-xl p-5 sm:p-6",
                index === 3 && "ring-1 ring-white/15"
              )}
            >
              <span className="font-mono text-xs text-white/40">
                Level {level.level}
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

        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2">
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
            Increasing autonomy
          </span>
        </div>
      </Container>
    </section>
  );
}
