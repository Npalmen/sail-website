const PROXIMITY_RADIUS = 90;

type PointerCoords = { x: number; y: number };

class OpticalCtaManager {
  private entries = new Set<HTMLElement>();
  private raf: number | null = null;
  private pointer: PointerCoords = { x: -9999, y: -9999 };
  private active = false;
  private disabled = false;

  register(el: HTMLElement) {
    this.entries.add(el);
    el.style.setProperty("--cta-light-strength", "0");
    el.style.setProperty("--cta-light-x", "50%");
    el.style.setProperty("--cta-light-y", "50%");
    if (!this.active && !this.disabled) this.start();
  }

  unregister(el: HTMLElement) {
    this.entries.delete(el);
    el.style.setProperty("--cta-light-strength", "0");
    if (this.entries.size === 0) this.stop();
  }

  setDisabled(disabled: boolean) {
    this.disabled = disabled;
    if (disabled) {
      this.stop();
      for (const el of this.entries) {
        el.style.setProperty("--cta-light-strength", "0");
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
    this.active = true;
  }

  private stop() {
    if (!this.active) return;
    window.removeEventListener("pointermove", this.onPointerMove);
    if (this.raf !== null) {
      window.cancelAnimationFrame(this.raf);
      this.raf = null;
    }
    this.active = false;
  }

  private onPointerMove = (event: PointerEvent) => {
    this.pointer = { x: event.clientX, y: event.clientY };
    if (this.raf !== null) return;
    this.raf = window.requestAnimationFrame(() => {
      this.updateAll();
      this.raf = null;
    });
  };

  private updateAll() {
    const { x: px, y: py } = this.pointer;

    for (const el of this.entries) {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;

      const nearestX = Math.max(rect.left, Math.min(px, rect.right));
      const nearestY = Math.max(rect.top, Math.min(py, rect.bottom));

      const dx = px - nearestX;
      const dy = py - nearestY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const localX = ((nearestX - rect.left) / rect.width) * 100;
      const localY = ((nearestY - rect.top) / rect.height) * 100;

      const normalized = Math.max(
        0,
        Math.min(1, 1 - distance / PROXIMITY_RADIUS)
      );
      const strength = normalized * normalized;

      el.style.setProperty("--cta-light-x", `${localX}%`);
      el.style.setProperty("--cta-light-y", `${localY}%`);
      el.style.setProperty("--cta-light-strength", strength.toFixed(4));
    }
  }
}

export const opticalCtaManager = new OpticalCtaManager();
