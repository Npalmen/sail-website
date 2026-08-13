import Link from "next/link";

import { ContentSurface } from "@/components/layout/content-surface";
import { Wordmark } from "@/components/shared/wordmark";
import { footerColumns } from "@/config/footer";
import { homepageContent } from "@/config/homepage";

export function Footer() {
  const { description } = homepageContent.footer;
  const columns = footerColumns;
  const year = new Date().getFullYear();

  return (
    <ContentSurface
      as="footer"
      variant="paper"
      width="wide"
      align="center"
      spacing="compact"
      radius="md"
      padding="default"
      className="pb-[max(2rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex flex-col gap-10">
        <div className="max-w-sm">
          <Wordmark />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-border/50 pt-8">
        <p className="text-xs text-muted-foreground">
          © {year} SAIL. Alla rättigheter förbehållna.
        </p>
      </div>
    </ContentSurface>
  );
}
