import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom } from "@/components/section1/CarbonAtom";

const COMPONENTS = [
  { name: "Biochar", note: "Stable carbon foundation" },
  { name: "Organic matter", note: "Building the soil matrix" },
  { name: "Microbial activity", note: "Bringing biology into the system" },
  { name: "Nutrient support", note: "Supporting productive soil" },
  { name: "Jeevamrut", note: "Biological inoculation" },
];

export function B3Composition() {
  return (
    <section className="relative overflow-hidden bg-soil text-atmosphere">
      <div className="mx-auto max-w-6xl px-6 py-[16svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">What makes B3 different</p>
        </Reveal>
        <Reveal threshold={0.2} delay={140}>
          <h3 className="display-lg mt-8 max-w-3xl">Biochar alone is not B3.</h3>
        </Reveal>

        {/* Radial composition */}
        <div className="relative mt-[12svh] grid gap-x-14 gap-y-[7svh] lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <ul className="flex flex-col gap-[6svh] lg:text-right">
            {COMPONENTS.slice(0, 3).map((c, i) => (
              <li key={c.name}>
                <Reveal threshold={0.15} delay={i * 120}>
                  <p className="label-lead">{c.name}</p>
                  <p className="body-note mt-2 text-atmosphere/70">{c.note}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal threshold={0.15} delay={200}>
            <div className="relative mx-auto flex h-[42vmin] w-[42vmin] max-w-80 items-center justify-center">
              <span
                className="absolute inset-0 text-ochre/45"
                aria-hidden="true"
              >
                <CarbonAtom />
              </span>
              <span className="absolute inset-[18%] rounded-full border border-atmosphere/20" aria-hidden="true" />
              <p className="relative font-display text-[clamp(2.6rem,9vw,5rem)] leading-none">B3</p>
            </div>
          </Reveal>

          <ul className="flex flex-col gap-[6svh]">
            {COMPONENTS.slice(3).map((c, i) => (
              <li key={c.name}>
                <Reveal threshold={0.15} delay={i * 120}>
                  <p className="label-lead">{c.name}</p>
                  <p className="body-note mt-2 text-atmosphere/70">{c.note}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal threshold={0.2} delay={120}>
          <p className="body-note mt-[12svh] max-w-3xl text-atmosphere/80">
            Biochar + organic matter + biology + nutrient support &rarr; B3. The intelligence sits
            in how these work together, not in any single ingredient.
          </p>
        </Reveal>
      </div>
    </section>
  );
}