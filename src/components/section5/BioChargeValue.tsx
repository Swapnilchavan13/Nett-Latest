import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom } from "@/components/section1/CarbonAtom";

const ATTRIBUTES = [
  "Known source",
  "Managed moisture",
  "Measured GCV",
  "Optimised delivered cost",
];

const CHAIN = [
  "Agricultural biomass",
  "NettZero collection network",
  "BioCharge Damoh",
  "Process · Test · Store · Optimise",
  "Industrial energy",
];

export function BioChargeValue() {
  return (
    <section className="relative overflow-hidden bg-ink text-atmosphere">
      <div
        className="pointer-events-none absolute -left-[18vmin] top-[10svh] h-[52vmin] w-[52vmin] text-ochre/10"
        aria-hidden="true"
      >
        <CarbonAtom />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-[16svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="display-md text-atmosphere/45 line-through decoration-ochre/70 decoration-1">
            Agricultural waste.
          </p>
        </Reveal>
        <Reveal threshold={0.2} delay={160}>
          <h3 className="display-lg mt-8 max-w-3xl text-ochre">A managed energy input.</h3>
        </Reveal>

        <ol className="mt-[10svh] grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ATTRIBUTES.map((a, i) => (
            <Reveal key={a} threshold={0.12} delay={i * 100}>
              <li className="border-t border-atmosphere/25 pt-6">
                <p className="label-eyebrow text-ochre">0{i + 1}</p>
                <p className="display-md mt-3">{a}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal threshold={0.2} delay={220}>
          <p className="display-lg mt-[12svh]">Reliable industrial fuel.</p>
        </Reveal>
        <Reveal threshold={0.2} delay={320}>
          <p className="body-note mt-8 max-w-2xl text-atmosphere/80">
            From farm residue to fuel specification — NettZero manages the chain.
          </p>
        </Reveal>
      </div>

      {/* Closing frame */}
      <div className="relative mx-auto max-w-4xl px-6 pb-[18svh] text-center sm:px-10">
        <ol className="flex flex-col items-center">
          {CHAIN.map((step, i) => (
            <li key={step} className="flex flex-col items-center">
              <Reveal threshold={0.15} delay={i * 90}>
                <p className="label-lead">{step}</p>
              </Reveal>
              {i < CHAIN.length - 1 && (
                <span className="my-4 block h-9 w-px bg-atmosphere/30" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <Reveal threshold={0.2} delay={160}>
          <h3 className="display-lg mt-[12svh]">
            Waste was never
            <br />
            the end of the story.
          </h3>
        </Reveal>
        <Reveal threshold={0.2} delay={300}>
          <p className="display-md mt-8 text-ochre">It was energy in the wrong form.</p>
        </Reveal>
        <Reveal threshold={0.2} delay={420}>
          <p className="label-lead mt-[10svh]">BioCharge by NettZero</p>
        </Reveal>
        <Reveal threshold={0.2} delay={500}>
          <p className="body-note mx-auto mt-5 max-w-xl text-atmosphere/75">
            Converting India&rsquo;s agricultural residues into dependable industrial energy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}