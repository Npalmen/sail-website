import { Autonomy } from "@/sections/autonomy/autonomy";
import { Capabilities } from "@/sections/capabilities/capabilities";
import { ControlledMomentum } from "@/sections/controlled-momentum/controlled-momentum";
import { FinalCta } from "@/sections/final-cta/final-cta";
import { Footer } from "@/sections/footer/footer";
import { Hero } from "@/sections/hero/hero";
import { Integrations } from "@/sections/integrations/integrations";
import { Navbar } from "@/sections/navbar/navbar";
import { Pricing } from "@/sections/pricing/pricing";
import { Problem } from "@/sections/problem/problem";
import { ProductExperience } from "@/sections/product-experience/product-experience";
import { Security } from "@/sections/security/security";
import { TrustStrip } from "@/sections/trust-strip/trust-strip";
import { Workflow } from "@/sections/workflow/workflow";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Problem />
        <Workflow />
        <Capabilities />
        <Autonomy />
        <ProductExperience />
        <ControlledMomentum />
        <Security />
        <Integrations />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
