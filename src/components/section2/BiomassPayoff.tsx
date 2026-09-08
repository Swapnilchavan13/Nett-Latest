import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom } from "@/components/section1/CarbonAtom";
import payoff from "@/assets/s2-payoff.jpg";

const STREAMS = [
  { name: "Biochar", line: "Carbon made durable." },
  { name: "Fuel", line: "Biomass put to productive energy use." },
  { name: "Materials", line: "Carbon transformed into new applications." },
];

export function BiomassPayoff() {
  return (
    <section className="relative bg-ink text-atmosphere">
      {/* Reliable biomass */}
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src={payoff}
          alt="Organised biomass aggregation yard with bales and trucks at dusk"
          width={1600}
          height={1000}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover rounded-[8px]"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--ink) 80%, transparent) 0%, color-mix(in oklab, var(--ink) 88%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-[16svh] sm:px-10">
          <Reveal threshold={0.2}>
            <p className="label-lead text-ochre">The payoff</p>
          </Reveal>
          <Reveal threshold={0.2} delay={140}>
            <h3 className="display-xl mt-8">Reliable biomass.</h3>
          </Reveal>
          <Reveal threshold={0.2} delay={280}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              Anyone can find biomass. The difficult part is collecting it reliably, economically
              and at scale.
            </p>
          </Reveal>
        </div>
      </div>

      {/* From scattered residue */}
      <div className="relative overflow-hidden bg-soil">
        <div
          className="pointer-events-none absolute -left-[16vmin] bottom-[6svh] h-[56vmin] w-[56vmin] text-ochre/20"
          aria-hidden="true"
        >
          <CarbonAtom />
        </div>
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-[16svh] sm:px-10">
          <Reveal threshold={0.2}>
            <h3 className="display-lg">
              From scattered residue
              <br />
              to organised supply.
            </h3>
          </Reveal>
          <Reveal threshold={0.2} delay={200}>
            <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
              {["Farmers", "Technology", "Machinery", "Storage", "Logistics"].map((item) => (
                <li key={item} className="label-lead text-atmosphere/80">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal threshold={0.2} delay={320}>
            <p className="display-md mt-12">One integrated collection system.</p>
          </Reveal>
        </div>
      </div>

      {/* Three directions */}
      <div className="mx-auto max-w-6xl px-6 py-[18svh] sm:px-10">
        <Reveal threshold={0.2}>
          <h3 className="display-lg max-w-3xl">What happens to all this biomass?</h3>
        </Reveal>

        <div className="mt-[12svh] flex flex-col items-center">
          <Reveal threshold={0.15}>
            <p className="label-lead text-ochre">Biomass</p>
          </Reveal>
          <Reveal threshold={0.15} delay={120}>
            <span className="mt-6 block h-16 w-px bg-atmosphere/30" aria-hidden="true" />
          </Reveal>
          <ol className="mt-10 grid w-full gap-12 sm:grid-cols-3">
            {STREAMS.map((s, i) => (
              <li key={s.name}>
                <Reveal threshold={0.15} delay={i * 140}>
                  <div className="border-t border-atmosphere/25 pt-8">
                    <span className="h-8 w-8 shrink-0 text-ochre">
                      <CarbonAtom spin={false} />
                    </span>
                    <h4 className="display-md mt-6">{s.name}</h4>
                    <p className="body-note mt-4 text-atmosphere/75">{s.line}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal threshold={0.2} delay={200}>
          <p className="display-md mt-[16svh] max-w-3xl">
            We don&rsquo;t just collect biomass.
            <br />
            We put its carbon to work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}