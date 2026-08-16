import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom } from "@/components/section1/CarbonAtom";

const JOURNEY = [
  "Agricultural biomass",
  "Biochar",
  "B3 formulation",
  "Microbial inoculation",
  "12-day curing",
  "Women-led manufacturing",
  "Farmers",
  "Soil",
];

export function B3Journey() {
  return (
    <section className="relative overflow-hidden bg-soil text-atmosphere">
      <div
        className="pointer-events-none absolute -right-[16vmin] top-[24svh] h-[56vmin] w-[56vmin] text-ochre/15"
        aria-hidden="true"
      >
        <CarbonAtom />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-[16svh] text-center sm:px-10">
        <ol className="flex flex-col items-center">
          {JOURNEY.map((step, i) => (
            <li key={step} className="flex flex-col items-center">
              <Reveal threshold={0.15} delay={i * 80}>
                <p className="label-lead">{step}</p>
              </Reveal>
              {i < JOURNEY.length - 1 && (
                <span className="my-4 block h-9 w-px bg-atmosphere/30" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <Reveal threshold={0.2} delay={160}>
          <h3 className="display-lg mt-[12svh]">
            Restoring
            <br />
            soil organic carbon.
          </h3>
        </Reveal>
        <Reveal threshold={0.2} delay={300}>
          <p className="body-note mx-auto mt-10 max-w-2xl text-atmosphere/80">
            Not simply putting carbon into soil — building a formulation designed to help carbon
            become part of a healthier soil system.
          </p>
        </Reveal>

        <Reveal threshold={0.2} delay={420}>
          <p className="display-md mt-[12svh] text-ochre">
            From biomass.
            <br />
            To biochar.
            <br />
            To B3.
            <br />
            To the farm.
          </p>
        </Reveal>
        <Reveal threshold={0.2} delay={520}>
          <p className="label-lead mt-10">2,000+ farmers and growing.</p>
        </Reveal>
      </div>
    </section>
  );
}