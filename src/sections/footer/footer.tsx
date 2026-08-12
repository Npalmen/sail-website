import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/shared/wordmark";
import { homepageContent } from "@/config/homepage";

export function Footer() {
  const { description, columns } = homepageContent.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-surface-warm pb-10 pt-14 sm:pt-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/50 pt-8">
          <p className="text-xs text-muted-foreground">
            © {year} SAIL. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
