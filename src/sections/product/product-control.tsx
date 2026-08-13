import { ContentSurface } from "@/components/layout/content-surface";
import { DeepLink } from "@/components/shared/deep-link";
import { SectionHeader } from "@/components/shared/section-header";
import { productJourneyScenario } from "@/config/product-page";
import { routes } from "@/config/site";

export function ProductControl() {
  const { control } = productJourneyScenario;

  return (
    <ContentSurface
      as="section"
      id="control"
      variant="dark"
      width="wide"
      align="center"
      spacing="default"
      radius="lg"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="lg:max-w-md">
          <SectionHeader
            eyebrow="5 · Kontroll"
            headline="Du bestämmer hur långt SAIL får gå."
            description="Autonomin är inte global — den sätts per arbetsflöde och gäller i praktiken för just detta ärende."
            variant="dark"
          />
          <DeepLink
            href={routes.security}
            className="text-white/60 hover:text-white/90"
          >
            Läs om säkerhet och kontroll
          </DeepLink>
        </div>

        <div className="sail-inner-module--dark flex-1 p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/45">
                Arbetsflöde
              </p>
              <p className="mt-1.5 text-sm font-semibold text-white/95">
                {control.workflow}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/45">
                Autonominivå
              </p>
              <p className="mt-1.5 text-sm font-semibold text-white/95">
                {control.level}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/45">
                SAIL kan
              </p>
              <ul className="mt-3 space-y-2">
                {control.allowed.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <span className="text-emerald-400/90" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/45">
                Kräver godkännande
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
                <span className="text-sail-blue" aria-hidden="true">
                  →
                </span>
                {control.requiresApproval}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentSurface>
  );
}
