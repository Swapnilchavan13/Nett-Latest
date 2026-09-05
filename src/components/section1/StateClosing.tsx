import { Reveal } from "./Reveal";
import { CarbonAtom } from "./CarbonAtom";
import logo from "@/assets/nettzero-logo.webp";


export function StateClosing() {
  return (
    <section className="relative overflow-hidden bg-atmosphere text-carbon">
      {/* NettZero enters */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-[16svh] sm:px-10">
        <div
          className="pointer-events-none absolute -right-[16vmin] bottom-[8svh] h-[56vmin] w-[56vmin] text-clay/25"
          aria-hidden="true"
        >
          <CarbonAtom />
        </div>
        <Reveal threshold={0.2}>
          <div className="w-[min(78vw,540px)]">
             <img
              src={logo}
              alt="NettZero"
              className="h-7 w-auto"
            />
          </div>
        </Reveal>
        <Reveal delay={160}>
          <p className="body-note mt-10 max-w-2xl text-muted-foreground">
            We intercept neglected carbon before it becomes a liability &mdash; and transform it
            into a resource.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-[10svh] flex flex-col gap-4 sm:flex-row sm:gap-14">
            {["Earth.", "Energy.", "Environment."].map((word) => (
              <span
                key={word}
                className="font-display text-3xl font-semibold text-soil sm:text-5xl"
              > 
                {word}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* vision + transition */}
      <div className="mx-auto flex min-h-[100svh] max-w-4xl flex-col justify-center px-6 pb-[16svh] text-center sm:px-10">
        <Reveal>
          <p className="body-note text-muted-foreground">
            To transform the world&rsquo;s neglected carbon into Earth, Energy and Environment.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <h2 className="display-lg mt-14">
            Let us show you how
            <br />
            NettZero is doing it
            <br />
            at scale.
          </h2>
        </Reveal>
        <Reveal delay={340}>
          <div className="mt-16 flex justify-center">
            <a
              href="#section-2"
              className="label-eyebrow inline-flex items-center gap-3 border-b border-carbon/30 pb-2 text-carbon transition-colors hover:border-carbon focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carbon"
            >
              Follow the carbon <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* anchor for Section 2, to be built next */}
      <div id="section-2" aria-hidden="true" className="h-px" />
    </section>
  );
}