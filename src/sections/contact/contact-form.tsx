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

  const fieldClass =
    "w-full min-h-11 rounded-[var(--radius-module-control)] border border-border/70 bg-surface-white/90 px-3 py-2.5 text-base sm:text-sm";

  return (
    <form
      className={cn("space-y-5", className)}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-foreground">Namn</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-foreground">Företag</span>
          <input
            required
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </label>
      </div>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-foreground">Jobbmejl</span>
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-foreground">
          Telefon <span className="font-normal text-muted-foreground">(valfritt)</span>
        </span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-foreground">
          Vad vill du att SAIL ska hjälpa till med?
        </span>
        <textarea
          required
          name="scope"
          rows={3}
          className={cn(fieldClass, "rounded-[var(--radius-module-info)]")}
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-foreground">
          Meddelande <span className="font-normal text-muted-foreground">(valfritt)</span>
        </span>
        <textarea
          name="message"
          rows={3}
          className={cn(fieldClass, "rounded-[var(--radius-module-info)]")}
        />
      </label>

      {submitted ? (
        <p className="rounded-[var(--radius-module-info)] border border-border/60 bg-surface-soft/50 p-4 text-sm text-muted-foreground">
          Formulärinlämning är inte kopplad ännu. Kontaktuppgifter läggs till
          före lansering — det här gränssnittet validerar endast flödet.
        </p>
      ) : (
        <CtaButton type="submit" className="btn-cta--lg w-full sm:w-auto">
          Skicka förfrågan
        </CtaButton>
      )}
    </form>
  );
}
