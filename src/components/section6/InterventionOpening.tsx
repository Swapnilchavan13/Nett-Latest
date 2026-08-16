import { Reveal } from "@/components/section1/Reveal";

const STRESSES = [
  "Climate",
  "Soil degradation",
  "Water stress",
  "Agricultural resilience",
  "Rural livelihoods",
];

export function InterventionOpening() {
  return (
    <section id="choose-your-intervention" className="relative bg-atmosphere text-carbon">
      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-[18svh] sm:px-10">
        <Reveal threshold={0.2}>
          <h2 className="display-xl max-w-4xl">
            The planet doesn&rsquo;t have
            <br />
            one problem.
          </h2>
        </Reveal>

        <Reveal threshold={0.2} delay={200}>
          <ul className="mt-[8svh] flex flex-wrap gap-x-8 gap-y-4">
            {STRESSES.map((s) => (
              <li key={s} className="label-lead text-graphite">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal threshold={0.2} delay={340}>
          <p className="body-note mt-10 max-w-xl text-graphite">
            They are interconnected. So are our interventions.
          </p>
        </Reveal>

        <Reveal threshold={0.2} delay={480}>
          <h3 className="display-lg mt-[14svh] max-w-3xl text-clay">
            Choose where
            <br />
            you want to make a difference.
          </h3>
        </Reveal>
      </div>
    </section>
  );
}