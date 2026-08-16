import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom } from "@/components/section1/CarbonAtom";
import socMacro from "@/assets/s4-soc-macro.jpg";

export function B3Problem() {
  return (
    <section id="section-4-b3" className="relative scroll-mt-16 bg-ink text-atmosphere">
      {/* The pause */}
      <div className="mx-auto flex min-h-[92svh] max-w-5xl flex-col justify-center px-6 py-[16svh] sm:px-10">
        <Reveal threshold={0.2}>
          <div className="flex items-center gap-4">
            <span className="h-8 w-8 shrink-0 text-ochre">
              <CarbonAtom />
            </span>
            <p className="label-lead text-ochre">Section Four — B3</p>
          </div>
        </Reveal>
        <Reveal threshold={0.2} delay={140}>
          <h2 className="display-lg mt-10">
            Just because it is carbon
            <br />
            doesn&rsquo;t mean you blindly
            <br />
            put it into soil.
          </h2>
        </Reveal>
        <Reveal threshold={0.2} delay={420}>
          <p className="display-md mt-[12svh] text-ochre">
            Soil restoration
            <br />
            needs more than carbon.
          </p>
        </Reveal>
      </div>

      {/* Micro: biochar particle into living soil */}
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src={socMacro}
          alt="Macro view of a porous biochar particle within living soil threaded with fine mycelium"
          width={1600}
          height={1008}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--ink) 95%, transparent) 0%, color-mix(in oklab, var(--ink) 62%, transparent) 58%, color-mix(in oklab, var(--ink) 38%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 py-[14svh] sm:px-10">
          <Reveal threshold={0.15}>
            <p className="label-lead text-ochre">Soil organic carbon</p>
          </Reveal>
          <Reveal threshold={0.15} delay={140}>
            <h3 className="display-lg mt-8 max-w-4xl">
              Carbon belongs in soil.
              <br />
              But it has to work with the soil.
            </h3>
          </Reveal>
          <Reveal threshold={0.15} delay={300}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              Soil Organic Carbon is fundamental to soil structure, biological activity, nutrient
              cycling and the soil&rsquo;s relationship with water. But simply adding raw carbon is
              not the same as restoring a functioning soil system.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Product introduction */}
      <div className="mx-auto max-w-4xl px-6 py-[16svh] text-center sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">That is why NettZero developed</p>
        </Reveal>
        <Reveal threshold={0.2} delay={160}>
          <p className="display-xl mt-8">B3</p>
        </Reveal>
        <Reveal threshold={0.2} delay={260}>
          <p className="label-lead mt-4">Bhoomi Bio Booster</p>
        </Reveal>
        <Reveal threshold={0.2} delay={380}>
          <p className="body-note mx-auto mt-10 max-w-2xl text-atmosphere/80">
            A biochar-fortified soil restoration formulation designed to rebuild depleted soil
            carbon while supporting the biological and organic systems around it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}