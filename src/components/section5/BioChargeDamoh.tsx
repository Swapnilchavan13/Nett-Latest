import { Reveal } from "@/components/section1/Reveal";
import aerial from "@/assets/s5-facility-aerial.jpg";
import inbound from "@/assets/s5-inbound.jpg";
import storage from "@/assets/s5-storage.jpg";
import shredding from "@/assets/s5-shredding.jpg";
import machinery from "@/assets/s5-machinery.jpg";
import processed from "@/assets/s5-processed.jpg";
import quality from "@/assets/s5-quality.jpg";
import loading from "@/assets/s5-loading.jpg";
import trucks from "@/assets/s5-trucks.jpg";
import team from "@/assets/s5-team.jpg";

/** Placeholder photography — replace each `src` with site imagery when available. */
const YARD = [
  { src: inbound, alt: "Biomass arriving at the Damoh hub", cap: "Biomass arriving" },
  { src: machinery, alt: "Loader moving processed biomass", cap: "Machinery" },
  { src: shredding, alt: "Biomass shredding and processing line", cap: "Processing" },
  { src: processed, alt: "Sized, processed biomass fuel", cap: "Processed biomass" },
  { src: quality, alt: "Fuel parameters being tested against customer requirements", cap: "Quality" },
  { src: team, alt: "Damoh operations team", cap: "Operations team" },
];

const JOURNEY = [
  { key: "Inbound", src: inbound, alt: "Trailer of biomass arriving at the hub", line: "Biomass sourced through NettZero's farmer and collection network arrives at the Damoh hub." },
  { key: "Aggregation & storage", src: storage, alt: "Covered biomass storage warehouse", line: "Large seasonal biomass volumes are consolidated and managed for dependable supply." },
  { key: "Processing", src: shredding, alt: "Biomass being shredded and sized", line: "Biomass is prepared and sized to create a more consistent industrial fuel input." },
  { key: "Quality", src: quality, alt: "Moisture and GCV testing of biomass samples", line: "Moisture, GCV and other relevant fuel parameters are monitored against customer requirements." },
  { key: "Dispatch", src: loading, alt: "Prepared fuel being loaded for dispatch", line: "Prepared BioCharge is loaded and delivered according to industrial demand." },
];

export function BioChargeDamoh() {
  return (
    <section className="relative bg-ink text-atmosphere">
      {/* Full-width transition */}
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src={aerial}
          alt="Wide aerial view of the BioCharge biomass hub at Damoh"
          width={1600}
          height={1000}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--ink) 93%, transparent) 0%, color-mix(in oklab, var(--ink) 58%, transparent) 60%, color-mix(in oklab, var(--ink) 30%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 py-[14svh] sm:px-10">
          <Reveal threshold={0.15}>
            <h3 className="display-xl">BioCharge Damoh</h3>
          </Reveal>
          <Reveal threshold={0.15} delay={140}>
            <p className="label-lead mt-6 text-ochre">Madhya Pradesh</p>
          </Reveal>
          <Reveal threshold={0.15} delay={280}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              NettZero&rsquo;s biomass aggregation, processing and fuel-supply hub serving the
              industrial belt of Central India.
            </p>
          </Reveal>
        </div>
      </div>

      {/* The plant journey */}
      <div className="mx-auto max-w-6xl px-6 py-[14svh] sm:px-10">
        <ol className="flex flex-col gap-[10svh]">
          {JOURNEY.map((s, i) => (
            <li key={s.key}>
              <Reveal threshold={0.12}>
                <figure className="grid items-end gap-6 border-t border-atmosphere/20 pt-6 lg:grid-cols-12">
                  <figcaption className="lg:col-span-4">
                    <p className="label-eyebrow text-ochre">0{i + 1}</p>
                    <p className="display-md mt-3">{s.key}</p>
                    <p className="body-note mt-5 text-atmosphere/75">{s.line}</p>
                  </figcaption>
                  <div className="h-[44svh] overflow-hidden lg:col-span-8">
                    <img
                      src={s.src}
                      alt={s.alt}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </figure>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      {/* Yard frames */}
      <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-[14svh] sm:grid-cols-2 sm:px-10 lg:grid-cols-3">
        {YARD.map((f, i) => (
          <Reveal key={f.cap} threshold={0.1} delay={(i % 3) * 100}>
            <figure>
              <div className="h-[30svh] overflow-hidden">
                <img
                  src={f.src}
                  alt={f.alt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="label-eyebrow mt-4 text-atmosphere/60">{f.cap}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Dispatch closing frame */}
      <div className="relative h-[70svh] overflow-hidden">
        <img
          src={trucks}
          alt="Loaded trucks leaving the Damoh hub at dusk"
          width={1600}
          height={1000}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--ink) 92%, transparent) 0%, color-mix(in oklab, var(--ink) 40%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-6 pb-[8svh] sm:px-10">
          <Reveal threshold={0.2}>
            <p className="display-md">Dispatch, on industrial demand.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}