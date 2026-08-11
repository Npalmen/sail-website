import { Container } from "@/components/layout/container";
import { Hero } from "@/sections/hero/hero";
import { Navbar } from "@/sections/navbar/navbar";

const workflowSteps = [
  {
    title: "Understand",
    description: "SAIL reads incoming work and extracts what matters.",
  },
  {
    title: "Decide",
    description: "Rules and context determine the right next step.",
  },
  {
    title: "Act",
    description: "Actions are prepared — ready for your approval.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />

        <section
          id="how-it-works"
          className="border-t border-border bg-surface-cloud py-16 sm:py-20"
        >
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Controlled momentum
              </h2>
              <p className="mt-3 text-muted-foreground">
                Work moves forward through clear stages — always under your
                control.
              </p>
            </div>
            <ul className="mt-12 grid gap-6 sm:grid-cols-3">
              {workflowSteps.map((step) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-border bg-surface-soft p-6"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}
