import { SailBrandMark } from "@/components/brand/sail-brand-mark";

export function SailBrandCanvas() {
  return (
    <div aria-hidden="true" className="sail-brand-canvas">
      <div className="sail-brand-canvas__base" />
      <div className="sail-brand-canvas__tonal sail-brand-canvas__tonal--cool" />
      <div className="sail-brand-canvas__tonal sail-brand-canvas__tonal--warm" />
      <SailBrandMark />
      <div className="sail-brand-canvas__form" />
      <div className="sail-brand-canvas__grain" />
    </div>
  );
}
