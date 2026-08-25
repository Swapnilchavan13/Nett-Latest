import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom } from "@/components/section1/CarbonAtom";
import kiln from "@/assets/s3-kiln-hero.jpg";
import distributed from "@/assets/s3-distributed.jpg";

function Arrows() {
  return (
    <div className="flex justify-center gap-6 py-6 text-ochre" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="block h-10 w-px bg-current opacity-60" />
      ))}
    </div>
  );
}

export function BiocharOpening() {
  return (
    <section id="section-3-biochar" className="relative scroll-mt-16 bg-ink text-atmosphere">
      {/* Credibility opening */}
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src="https://iili.io/q5tXiRR.jpg"
          alt="Artisanal biochar kiln burning at a rural production site at dawn"
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
              "linear-gradient(to top, color-mix(in oklab, var(--ink) 94%, transparent) 0%, color-mix(in oklab, var(--ink) 60%, transparent) 55%, color-mix(in oklab, var(--ink) 42%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 py-[14svh] sm:px-10">
          <Reveal threshold={0.15}>
            <div className="flex items-center gap-4">
              <span className="h-8 w-8 shrink-0 text-ochre">
                <CarbonAtom />
              </span>
              <p className="label-lead text-ochre">Section Three — Biochar by NettZero</p>
            </div>
          </Reveal>
          <Reveal threshold={0.15} delay={140}>
            <h2 className="display-xl mt-8">
              Biomass to biochar.
              <br />
              Biochar to soil.
              <br />
              <span className="text-ochre">Since 2020.</span>
            </h2>
          </Reveal>
          <Reveal threshold={0.15} delay={300}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              NettZero has been developing decentralised, artisanal biochar systems since 2020 —
              converting locally available biomass into stable carbon and putting it back to
              productive use.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Distributed philosophy */}
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src="https://i.postimg.cc/hG3Lcwjc/E9ACE7A0-8F0E-4555-AD36-6EB8581D2A5A.jpg"
          alt="Aerial view of dispersed rural production sites across farmland"
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
              "linear-gradient(to right, color-mix(in oklab, var(--ink) 95%, transparent) 0%, color-mix(in oklab, var(--ink) 72%, transparent) 62%, color-mix(in oklab, var(--ink) 40%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-[16svh] sm:px-10">
          <Reveal threshold={0.2}>
            <h3 className="display-lg max-w-3xl">
              The biomass is distributed.
              <br />
              So is our solution.
            </h3>
          </Reveal>
          <Reveal threshold={0.2} delay={180}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              Residues are generated across thousands of dispersed locations. Rather than hauling
              bulky, low-density material to distant centralised plants, we take production closer
              to the biomass — reducing unnecessary movement, working with local communities and
              building distributed carbon-removal capacity.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Flow diagram */}
      <div className="mx-auto max-w-4xl px-6 py-[16svh] text-center sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">Distributed biomass</p>
        </Reveal>
        <Reveal threshold={0.2} delay={120}>
          <Arrows />
        </Reveal>
        <Reveal threshold={0.2} delay={200}>
          <p className="display-md">Local biochar production</p>
        </Reveal>
        <Reveal threshold={0.2} delay={320}>
          <Arrows />
        </Reveal>
        <Reveal threshold={0.2} delay={400}>
          <p className="label-lead text-ochre">Stable carbon</p>
        </Reveal>
      </div>
    </section>
  );
}