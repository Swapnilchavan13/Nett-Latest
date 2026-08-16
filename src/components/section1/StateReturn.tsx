import { Reveal } from "./Reveal";
import { CarbonAtom } from "./CarbonAtom";

const MOVES = [
  { word: "Intercept.", note: "Reach the carbon before the fire does." },
  { word: "Transform.", note: "Convert residue into stable, useful carbon." },
  { word: "Return.", note: "Place it back into the soil it came from." },
];

export function StateReturn() {
  return (
    <section className="relative overflow-hidden bg-soil text-atmosphere">
      <div
        className="pointer-events-none absolute -right-[18vmin] top-[10svh] h-[60vmin] w-[60vmin] text-ochre/25"
        aria-hidden="true"
      >
        <CarbonAtom />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-[18svh] sm:px-10">
        <Reveal threshold={0.15}>
          <p className="label-lead text-ochre">The principle</p>
        </Reveal>
        <Reveal threshold={0.15} delay={140}>
          <h2 className="display-xl mt-8">
            Don&rsquo;t release carbon.
            <br />
            Return it.
          </h2>
        </Reveal>
        <Reveal threshold={0.15} delay={300}>
          <p className="body-note mt-12 max-w-2xl text-atmosphere/70">
            Intercept carbon before it becomes an atmospheric liability. Transform it at source.
            Return stable carbon to the Earth, where it has always belonged.
          </p>
        </Reveal>

        <div className="mt-[14svh] grid gap-12 sm:grid-cols-3">
          {MOVES.map((move, i) => (
            <Reveal key={move.word} threshold={0.15} delay={i * 140}>
              <div className="border-t border-atmosphere/20 pt-6">
                <h3 className="display-md">{move.word}</h3>
                <p className="body-note mt-4 text-atmosphere/65">{move.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}