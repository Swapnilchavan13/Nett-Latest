import { Reveal } from "@/components/section1/Reveal";

const VARIABLES = [
  {
    key: "GCV",
    head: "Energy that can be measured.",
    line: "Biomass is evaluated and managed around its useful calorific value, so customers know the energy characteristics of the fuel they receive.",
  },
  {
    key: "Moisture",
    head: "Consistency that can be controlled.",
    line: "Moisture is monitored and managed — excessive moisture means transporting water instead of energy, reducing combustion performance and damaging fuel economics.",
  },
  {
    key: "Cost / unit of energy",
    head: "Economics that actually work.",
    line: "The cheapest biomass per tonne is not the cheapest fuel. Sourcing, processing, storage, payload and transport are optimised around the usable energy delivered.",
  },
];

export function BioChargeVariables() {
  return (
    <section className="relative bg-ink text-atmosphere">
      <div className="mx-auto max-w-6xl px-6 pt-[16svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">Three things matter</p>
        </Reveal>
        <Reveal threshold={0.2} delay={140}>
          <h3 className="display-lg mt-8">
            Energy. Consistency. Economics.
          </h3>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-[8svh] px-6 py-[12svh] sm:px-10 lg:grid-cols-3">
        {VARIABLES.map((v, i) => (
          <Reveal key={v.key} threshold={0.12} delay={i * 120}>
            <div className="border-t border-atmosphere/25 pt-6">
              <p className="label-eyebrow text-ochre">0{i + 1}</p>
              <p className="display-md mt-3 uppercase">{v.key}</p>
              <p className="label-lead mt-5 text-atmosphere/90">{v.head}</p>
              <p className="body-note mt-5 text-atmosphere/75">{v.line}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ₹/tonne → ₹/unit of useful energy */}
      <div className="mx-auto max-w-5xl px-6 pb-[18svh] sm:px-10">
        <Reveal threshold={0.2}>
          <div className="flex flex-col items-center gap-8 border border-atmosphere/20 px-6 py-[10svh] text-center sm:px-12">
            <p className="display-md text-atmosphere/45 line-through decoration-ochre/70 decoration-1">
              &#8377; / tonne
            </p>
            <span className="block h-14 w-px bg-ochre/60" aria-hidden="true" />
            <p className="display-lg text-ochre">&#8377; / unit of useful energy</p>
            <p className="body-note mt-4 max-w-xl text-atmosphere/75">
              NettZero thinks like an energy supplier, not a biomass trader.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}