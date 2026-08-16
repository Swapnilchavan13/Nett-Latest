import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom, NettZeroMark } from "@/components/section1/CarbonAtom";

const SPINE = [
  "6 sites",
  "Local biomass",
  "Artisanal biochar",
  "Digital MRV",
  "Verified carbon removal",
];

export function BiocharClose() {
  return (
    <section className="relative overflow-hidden bg-ink text-atmosphere">
      <div
        className="pointer-events-none absolute -left-[18vmin] top-[20svh] h-[60vmin] w-[60vmin] text-ochre/15"
        aria-hidden="true"
      >
        <CarbonAtom />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-[18svh] text-center sm:px-10">
        <ol className="flex flex-col items-center">
          {SPINE.map((step, i) => (
            <li key={step} className="flex flex-col items-center">
              <Reveal threshold={0.15} delay={i * 90}>
                <p className="label-lead">{step}</p>
              </Reveal>
              <span className="my-5 block h-10 w-px bg-atmosphere/30" aria-hidden="true" />
            </li>
          ))}
        </ol>
        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal threshold={0.15}>
            <p className="label-lead text-ochre">Global carbon buyers</p>
          </Reveal>
          <Reveal threshold={0.15} delay={120}>
            <p className="label-lead text-ochre">Biochar returned to productive use</p>
          </Reveal>
        </div>

        <Reveal threshold={0.2} delay={200}>
          <h3 className="display-lg mt-[14svh]">
            Made locally.
            <br />
            Measured rigorously.
            <br />
            Removing carbon globally.
          </h3>
        </Reveal>

        <Reveal threshold={0.2} delay={340}>
          <div className="mx-auto mt-[10svh] w-52">
            <NettZeroMark invert />
          </div>
        </Reveal>
        <Reveal threshold={0.2} delay={420}>
          <p className="label-lead mt-8">NettZero Biochar</p>
        </Reveal>
        <Reveal threshold={0.2} delay={500}>
          <p className="body-note mt-4 text-atmosphere/75">
            Turning India&rsquo;s neglected biomass into durable carbon — since 2020.
          </p>
        </Reveal>
      </div>
    </section>
  );
}