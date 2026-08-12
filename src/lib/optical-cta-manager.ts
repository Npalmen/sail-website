const PROXIMITY_RADIUS = 80;
const OFFSCREEN_X = "-24%";
const OFFSCREEN_Y = "50%";

type PointerCoords = { x: number; y: number };

function setRestLighting(el: HTMLElement) {
  el.style.setProperty("--cta-light-strength", "0");
  el.style.setProperty("--cta-light-x", OFFSCREEN_X);
  el.style.setProperty("--cta-light-y", OFFSCREEN_Y);
  el.style.setProperty("--cta-edge-x", OFFSCREEN_X);
  el.style.setProperty("--cta-edge-y", OFFSCREEN_Y);
}

class OpticalCtaManager {
  private entries = new Set<HTMLElement>();
  private raf: number | null = null;
  private pointer: PointerCoords = { x: -9999, y: -9999 };
  private active = false;
  private disabled = false;

  register(el: HTMLElement) {
    this.entries.add(el);
    setRestLighting(el);
    if (!this.active && !this.disabled) this.start();
  }

  unregister(el: HTMLElement) {
    this.entries.delete(el);
    setRestLighting(el);
    if (this.entries.size === 0) this.stop();
  }

  setDisabled(disabled: boolean) {
    this.disabled = disabled;
    if (disabled) {
      this.stop();
      for (const el of this.entries) {
        setRestLighting(el);
      }
    } else if (this.entries.size > 0) {
      this.start();
    }
  }

  private start() {
    if (this.active) return;
    window.addEventListener("pointermove", this.onPointerMove, {
      passive: true,
    });
    window.addEventListener("pointerout", this.onPointerOut);
    this.active = true;
  }

  private stop() {
    if (!this.active) return;
    window.removeEventListener("pointermove", this.onPointerMove);
    window.removeEventListener("pointerout", this.onPointerOut);
    if (this.raf !== null) {
      window.cancelAnimationFrame(this.raf);
      this.raf = null;
    }
    this.active = false;
  }

  private onPointerOut = (event: PointerEvent) => {
    if (event.relatedTarget !== null) return;
    this.pointer = { x: -9999, y: -9999 };
    this.scheduleUpdate();
  };

  private onPointerMove = (event: PointerEvent) => {
    this.pointer = { x: event.clientX, y: event.clientY };
    this.scheduleUpdate();
  };

  private scheduleUpdate() {
    if (this.raf !== null) return;
    this.raf = window.requestAnimationFrame(() => {
      this.updateAll();
      this.raf = null;
    });
  }

  private updateAll() {
    const { x: px, y: py } = this.pointer;

    for (const el of this.entries) {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;

      const inside =
        px >= rect.left &&
        px <= rect.right &&
        py >= rect.top &&
        py <= rect.bottom;

      const anchorX = inside
        ? px
        : Math.max(rect.left, Math.min(px, rect.right));
      const anchorY = inside
        ? py
        : Math.max(rect.top, Math.min(py, rect.bottom));

      const dx = px - anchorX;
      const dy = py - anchorY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const t = Math.max(0, Math.min(1, 1 - distance / PROXIMITY_RADIUS));
      const strength = t * t * (3 - 2 * t);

      if (strength < 0.002) {
        setRestLighting(el);
        continue;
      }

      const localX = ((anchorX - rect.left) / rect.width) * 100;
      const localY = ((anchorY - rect.top) / rect.height) * 100;

      el.style.setProperty("--cta-light-x", `${localX}%`);
      el.style.setProperty("--cta-light-y", `${localY}%`);
      el.style.setProperty("--cta-edge-x", `${localX}%`);
      el.style.setProperty("--cta-edge-y", `${localY}%`);
      el.style.setProperty("--cta-light-strength", strength.toFixed(4));
    }
  }
}

export const opticalCtaManager = new OpticalCtaManager();
