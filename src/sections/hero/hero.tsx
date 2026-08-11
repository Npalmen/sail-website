import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { ProductPreview } from "./product-preview";

export function Hero() {
  return (
    <section className="bg-surface-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-reduce:animate-none">
            <p className="text-sm font-medium tracking-wide text-muted-foreground">
              AI-powered operations
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Work moves forward.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              SAIL handles the administrative work around your business — while
              you stay in control.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteConfig.links.bookDemo}
                className={cn(buttonVariants({ variant: "default", size: "lg" }))}
              >
                Book a demo
              </Link>
              <Link
                href="#how-it-works"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "text-muted-foreground hover:text-foreground"
                )}
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-safe:delay-150 motion-reduce:animate-none lg:justify-self-end">
            <ProductPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}
