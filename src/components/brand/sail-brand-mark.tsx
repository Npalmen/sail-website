/** Inset/debossed SAIL mark — flat canvas face with internal relief layers beneath. */
export function SailBrandMark() {
  return (
    <div aria-hidden="true" className="sail-brand-mark">
      <div className="sail-brand-mark__stack">
        <span
          aria-hidden="true"
          className="sail-brand-mark__relief sail-brand-mark__relief--dark"
        >
          SAIL
        </span>
        <span
          aria-hidden="true"
          className="sail-brand-mark__relief sail-brand-mark__relief--light"
        >
          SAIL
        </span>
        <span
          aria-hidden="true"
          className="sail-brand-mark__relief sail-brand-mark__relief--dark-secondary"
        >
          SAIL
        </span>
        <span className="sail-brand-mark__face">SAIL</span>
      </div>
    </div>
  );
}
