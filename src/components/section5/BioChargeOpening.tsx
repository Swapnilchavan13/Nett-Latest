import { Reveal } from "@/components/section1/Reveal";
import stacks from "@/assets/s5-stacks.jpg";

const QUESTIONS = [
  "What is its GCV?",
  "What is its moisture?",
  "What is its size and consistency?",
  "Can it be supplied reliably?",
  "And at what delivered cost?",
];

export function BioChargeOpening() {
  return (
    <section id="section-5-biocharge" className="relative scroll-mt-16 bg-carbon text-atmosphere">
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src="https://iili.io/fOZauwv.jpg"
          alt="Vast stacks of baled agricultural residue at an industrial biomass yard"
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
              "linear-gradient(to top, color-mix(in oklab, var(--ink) 94%, transparent) 0%, color-mix(in oklab, var(--ink) 62%, transparent) 55%, color-mix(in oklab, var(--ink) 38%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 py-[14svh] sm:px-10">
          <Reveal threshold={0.15}>
            <p className="label-lead text-ochre">Section Five &nbsp;/&nbsp; BioCharge</p>
          </Reveal>
          <Reveal threshold={0.15} delay={140}>
            <h2 className="display-xl mt-8">
              Energy
              <br />
              from biomass.
            </h2>
          </Reveal>
          <Reveal threshold={0.15} delay={280}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              Biochar and B3 are one pathway. This is the second.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-[16svh] sm:px-10">
        <Reveal threshold={0.2}>
          <h3 className="display-lg max-w-4xl">
            Biomass can be fuel.
            <br />
            <span className="text-ochre">But industry needs a specification.</span>
          </h3>
        </Reveal>
        <Reveal threshold={0.2} delay={160}>
          <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
            An industrial customer cannot simply receive arbitrary agricultural residue. For
            biomass to become a dependable fuel input, the questions are precise.
          </p>
        </Reveal>

        <ul className="mt-[10svh] border-t border-atmosphere/20">
          {QUESTIONS.map((q, i) => (
            <Reveal as="li" key={q} threshold={0.15} delay={i * 90} className="block">
              <div className="flex items-baseline gap-6 border-b border-atmosphere/20 py-6">
                <span className="label-eyebrow shrink-0 text-ochre">0{i + 1}</span>
                <p className="display-md">{q}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal threshold={0.2} delay={200}>
          <p className="display-lg mt-[14svh] text-ochre">That is BioCharge.</p>
        </Reveal>
        <Reveal threshold={0.2} delay={320}>
          <p className="body-note mt-8 max-w-2xl text-atmosphere/80">
            NettZero&rsquo;s system for aggregating, processing and supplying agricultural biomass
            as a dependable industrial energy input.
          </p>
        </Reveal>
      </div>
    </section>
  );
}