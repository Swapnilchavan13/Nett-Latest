import { Reveal } from "@/components/section1/Reveal";
import mrv from "@/assets/s3-mrv.jpg";

const CHAIN = [
  { label: "Biomass", note: "Locally collected residue." },
  { label: "Biochar production", note: "Made physically, on the ground." },
  { label: "dMRV", note: "Digitally measured and documented." },
  { label: "Carbon standard / registry", note: "Placeholder — standard to be confirmed." },
  { label: "Carbon-removal credit", note: "High-integrity, durable removal." },
  { label: "International buyer", note: "Supplied to buyers of durable removal." },
];

export function BiocharIntegrity() {
  return (
    <section className="relative bg-ink text-atmosphere">
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src="https://i.ibb.co/Ld1dp4BD/Gemini-Generated-Image-62d45562d45562d4.jpg"
          alt="Field operator recording production data beside a sack of biochar"
          width={1600}
          height={1008}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover rounded-[8px]"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--ink) 94%, transparent) 0%, color-mix(in oklab, var(--ink) 66%, transparent) 60%, color-mix(in oklab, var(--ink) 45%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 py-[14svh] sm:px-10">
          <Reveal threshold={0.2}>
            <p className="label-lead text-ochre">Integrity</p>
          </Reveal>
          <Reveal threshold={0.2} delay={140}>
            <h3 className="display-xl mt-8">
              Artisanal.
              <br />
              Not unaccountable.
            </h3>
          </Reveal>
          <Reveal threshold={0.2} delay={280}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              Our decentralised production model is supported by rigorous digital Monitoring,
              Reporting and Verification (dMRV) systems designed to track the carbon journey from
              biomass to durable removal.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-[16svh] sm:px-10">
        <Reveal threshold={0.2}>
          <h4 className="display-md max-w-2xl">From field to verified removal.</h4>
        </Reveal>
        <ol className="mt-[8svh] flex flex-col">
          {CHAIN.map((step, i) => (
            <li key={step.label}>
              <Reveal threshold={0.15} delay={i * 90}>
                <div className="flex items-baseline gap-6 border-t border-atmosphere/20 py-7">
                  <span className="label-eyebrow shrink-0 text-ochre">0{i + 1}</span>
                  <div className="flex-1">
                    <p className="label-lead">{step.label}</p>
                    <p className="body-note mt-2 text-atmosphere/70">{step.note}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal threshold={0.2} delay={140}>
          <p className="body-note mt-10 max-w-2xl text-atmosphere/50">
            Registry and standard names and marks will be added here once confirmed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}