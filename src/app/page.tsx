import { ControlledMomentum } from "@/sections/controlled-momentum/controlled-momentum";
import { Hero } from "@/sections/hero/hero";
import { Navbar } from "@/sections/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ControlledMomentum />
      </main>
    </>
  );
}
