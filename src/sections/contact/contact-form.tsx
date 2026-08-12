"use client";

import { useState } from "react";

import { CtaButton } from "@/components/shared/cta-button";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  className?: string;
};

/**
 * Demo request form UI — submission adapter not yet connected.
 * Do not show fake success states until a backend endpoint exists.
 */
export function ContactForm({ className }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className={cn("space-y-5", className)}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-foreground">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-[var(--radius-module-control)] border border-border/70 bg-surface-white/90 px-3 py-2.5 text-sm"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-foreground">Company</span>
          <input
            required
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full rounded-[var(--radius-module-control)] border border-border/70 bg-surface-white/90 px-3 py-2.5 text-sm"
          />
        </label>
      </div>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-foreground">Work email</span>
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-[var(--radius-module-control)] border border-border/70 bg-surface-white/90 px-3 py-2.5 text-sm"
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-foreground">
          Phone <span className="font-normal text-muted-foreground">(optional)</span>
        </span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-[var(--radius-module-control)] border border-border/70 bg-surface-white/90 px-3 py-2.5 text-sm"
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-foreground">
          What would you like SAIL to help with?
        </span>
        <textarea
          required
          name="scope"
          rows={3}
          className="w-full rounded-[var(--radius-module-info)] border border-border/70 bg-surface-white/90 px-3 py-2.5 text-sm"
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-foreground">
          Message <span className="font-normal text-muted-foreground">(optional)</span>
        </span>
        <textarea
          name="message"
          rows={3}
          className="w-full rounded-[var(--radius-module-info)] border border-border/70 bg-surface-white/90 px-3 py-2.5 text-sm"
        />
      </label>

      {submitted ? (
        <p className="rounded-[var(--radius-module-info)] border border-border/60 bg-surface-soft/50 p-4 text-sm text-muted-foreground">
          Form submission is not yet connected. Contact details will be added
          before launch — this UI validates the request flow only.
        </p>
      ) : (
        <CtaButton type="submit" className="btn-cta--lg">
          Send request
        </CtaButton>
      )}
    </form>
  );
}
