import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom } from "@/components/section1/CarbonAtom";
import fields from "@/assets/s2-hero-fields.jpg";
import bale from "@/assets/s2-bale.jpg";

export function BiomassOpening() {
  return (
    <section id="section-2-biomass" className="relative scroll-mt-16 bg-ink text-atmosphere">
      {/* Opening */}
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/paddy-field-230021521-16x9_0.jpg?VersionId=1XxrW8SnGVdrE3N2cgaBUpzs4DPOOVwv"
          alt="Aerial view of harvested farmland with rows of crop residue"
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
              "linear-gradient(to top, color-mix(in oklab, var(--ink) 92%, transparent) 0%, color-mix(in oklab, var(--ink) 55%, transparent) 55%, color-mix(in oklab, var(--ink) 40%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 py-[14svh] sm:px-10">
          <Reveal threshold={0.15}>
            <div className="flex items-center gap-4">
              <span className="h-8 w-8 shrink-0 text-ochre">
                <CarbonAtom />
              </span>
              <p className="label-lead text-ochre">Section Two</p>
            </div>
          </Reveal>
          <Reveal threshold={0.15} delay={140}>
            <h2 className="display-xl mt-8">
              It all begins
              <br />
              with biomass.
            </h2>
          </Reveal>
          <Reveal threshold={0.15} delay={300}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              Across India&rsquo;s farms, enormous quantities of biomass are generated every
              season. To us, this isn&rsquo;t waste. It&rsquo;s carbon waiting to be put to work.
            </p>
          </Reveal>
        </div>
      </div>

      {/* The challenge */}
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src="https://i.ibb.co/prr84tHK/IMG-0281-JPG.jpg"
          alt="Compacted straw bales stacked in a field"
          width={1400}
          height={1000}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, color-mix(in oklab, var(--ink) 94%, transparent) 0%, color-mix(in oklab, var(--ink) 70%, transparent) 60%, color-mix(in oklab, var(--ink) 35%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-[16svh] sm:px-10">
          <Reveal threshold={0.2}>
            <h3 className="display-lg max-w-3xl">
              Biomass is everywhere.
              <br />
              Reliable biomass isn&rsquo;t.
            </h3>
          </Reveal>
          <Reveal threshold={0.2} delay={180}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              Agricultural biomass is scattered across thousands of fields, generated during short
              harvest windows, bulky to handle and expensive to transport.
            </p>
          </Reveal>
          <Reveal threshold={0.2} delay={320}>
            <div className="mt-14 flex flex-col gap-3 border-l-2 border-ochre/50 pl-6">
              <p className="label-lead text-atmosphere/70">The challenge isn&rsquo;t finding it.</p>
              <p className="label-lead text-ochre">The challenge is organising it.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}