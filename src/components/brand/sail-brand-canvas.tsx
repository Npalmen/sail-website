import { SailBrandMark } from "@/components/brand/sail-brand-mark";

export function SailBrandCanvas() {
  return (
    <div aria-hidden="true" className="sail-brand-canvas">
      <div className="sail-brand-canvas__base" />
      <SailBrandMark />
      <div className="sail-brand-canvas__grain" />
    </div>
  );
}
