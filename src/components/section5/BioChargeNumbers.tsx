import { Reveal } from "@/components/section1/Reveal";
import { DAMOH_METRICS, DAMOH_PENDING } from "@/data/biocharge";
import map from "@/assets/s5-map.jpg";

export function BioChargeNumbers() {
  const extras = DAMOH_PENDING.filter((m) => m.value.trim() !== "");

  return (
    <section className="relative bg-carbon text-atmosphere">
      <div className="mx-auto max-w-6xl px-6 py-[14svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">Damoh &nbsp;/&nbsp; Operating scale</p>
        </Reveal>

        <dl className="mt-[8svh] grid gap-8 sm:grid-cols-3">
          {DAMOH_METRICS.map((m, i) => (
            <Reveal key={m.label} threshold={0.12} delay={i * 110}>
              <div className="border-t border-atmosphere/25 pt-6">
                <dd className="display-md">{m.value}</dd>
                <dt className="label-lead mt-3 text-ochre">{m.label}</dt>
                {m.note && <p className="body-note mt-3 text-atmosphere/70">{m.note}</p>}
              </div>
            </Reveal>
          ))}
        </dl>

        {extras.length > 0 && (
          <dl className="mt-[8svh] grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {extras.map((m) => (
              <Reveal key={m.label} threshold={0.12}>
                <div className="border-t border-atmosphere/20 pt-5">
                  <dt className="label-eyebrow text-atmosphere/60">{m.label}</dt>
                  <dd className="display-md mt-2">{m.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        )}
      </div>

      {/* Why Damoh */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-[16svh] sm:px-10 lg:grid-cols-2">
        <Reveal threshold={0.15}>
          <div className="h-[46svh] overflow-hidden border border-atmosphere/15">
            <img
              src={map}
              alt="Schematic map locating Damoh within Madhya Pradesh, Central India"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover rounded-[8px]"
            />
          </div>
        </Reveal>
        <Reveal threshold={0.15} delay={140}>
          <div>
            <h3 className="display-lg">Why Damoh?</h3>
            <p className="body-note mt-8 text-atmosphere/80">
              Located between substantial agricultural biomass catchments and major industrial
              demand, Damoh allows NettZero to optimise both sides of the equation — supply and
              distance.
            </p>
            <p className="label-lead mt-10 text-ochre">Every kilometre counts.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}