import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom } from "@/components/section1/CarbonAtom";
import biocharSoil from "@/assets/s3-biochar-soil.jpg";

export function BiocharDestination() {
  return (
    <section className="relative overflow-hidden bg-soil text-atmosphere">
      <div
        className="pointer-events-none absolute -right-[14vmin] top-[8svh] h-[52vmin] w-[52vmin] text-ochre/20"
        aria-hidden="true"
      >
        <CarbonAtom />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-[8svh] px-6 py-[18svh] sm:px-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal threshold={0.2}>
            <p className="label-lead text-ochre">Biomass → Biochar → Soil</p>
          </Reveal>
          <Reveal threshold={0.2} delay={140}>
            <h3 className="display-lg mt-8">The carbon has a destination.</h3>
          </Reveal>
          <Reveal threshold={0.2} delay={260}>
            <p className="body-note mt-10 max-w-xl text-atmosphere/80">
              We take carbon that could have returned rapidly to the atmosphere, stabilise it as
              biochar, and put it back into productive use — including as the carbon foundation for
              our soil-restoration products.
            </p>
          </Reveal>
        </div>

        <Reveal threshold={0.2} delay={200}>
          <figure className="relative h-[52svh] overflow-hidden">
            <img
              src="https://i.postimg.cc/4yYpY1Yh/8981390D-7A7C-4488-9CD7-89C945C51CFB.jpg"
              alt="Hands working biochar into dark farm soil"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pb-[18svh] text-center sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">Biomass</p>
        </Reveal>
        <Reveal threshold={0.2} delay={100}>
          <span className="mx-auto mt-6 block h-14 w-px bg-atmosphere/40" aria-hidden="true" />
        </Reveal>
        <Reveal threshold={0.2} delay={180}>
          <p className="display-md mt-6">Biochar</p>
        </Reveal>
        <Reveal threshold={0.2} delay={260}>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {[
              { t: "Carbon removal", d: "Durable, verified, sold to buyers of removal." },
              { t: "Soil restoration", d: "Carbon returned to land as productive input." },
            ].map((b) => (
              <div key={b.t} className="border-t border-atmosphere/25 pt-8">
                <p className="label-lead">{b.t}</p>
                <p className="body-note mt-3 text-atmosphere/75">{b.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}