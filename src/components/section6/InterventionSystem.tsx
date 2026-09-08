import { Reveal } from "@/components/section1/Reveal";
import { CarbonAtom } from "@/components/section1/CarbonAtom";
import { useStickyProgress, ease, range } from "@/hooks/use-scroll-narrative";
import system from "@/assets/s6-system.jpg";

const BRANCHES = [
  { world: "Air", outcome: "CDR" },
  { world: "Soil", outcome: "SOC" },
  { world: "Water", outcome: "Stewardship" },
];

export function InterventionSystem() {
  const { ref, progress } = useStickyProgress<HTMLDivElement>(0.12);
  const scene = ease(range(progress, 0.05, 0.6));

  return (
    <section className="relative bg-ink text-atmosphere">
      <div ref={ref} className="relative h-[320vh]">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <img
            src={system}
            alt="Sky, field and soil profile shown as one continuous environmental scene"
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover rounded-[8px]"
            style={{ opacity: 0.3 + scene * 0.35, transform: `scale(${1.12 - scene * 0.1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/45 to-ink/90" aria-hidden="true" />

          <div className="relative mx-auto flex h-full max-w-5xl flex-col justify-center px-6 text-center sm:px-10">
            <div className="mx-auto h-[16vmin] w-[16vmin] text-ochre" style={{ opacity: scene }}>
              <CarbonAtom />
            </div>
            <p className="label-eyebrow mt-6 text-ochre" style={{ opacity: scene }}>
              Carbon
            </p>

            <div className="mt-[6svh] grid grid-cols-3 gap-4">
              {BRANCHES.map((b, i) => (
                <div
                  key={b.world}
                  className="flex flex-col items-center"
                  style={{ opacity: ease(range(progress, 0.2 + i * 0.12, 0.45 + i * 0.12)) }}
                >
                  <span className="block h-[8svh] w-px bg-atmosphere/35" aria-hidden="true" />
                  <p className="display-md mt-5 uppercase">{b.world}</p>
                  <span className="mt-5 block h-[5svh] w-px bg-atmosphere/25" aria-hidden="true" />
                  <p className="label-eyebrow mt-4 text-ochre">{b.outcome}</p>
                </div>
              ))}
            </div>

            <div style={{ opacity: ease(range(progress, 0.62, 0.85)) }}>
              <span className="mx-auto mt-[6svh] block h-px w-2/3 bg-atmosphere/30" aria-hidden="true" />
              <span className="mx-auto mt-0 block h-[6svh] w-px bg-atmosphere/30" aria-hidden="true" />
              <p className="display-lg mt-4 text-ochre">NettZero</p>
            </div>

            <p
              className="body-note mx-auto mt-[6svh] max-w-xl text-atmosphere/80"
              style={{ opacity: ease(range(progress, 0.8, 1)) }}
            >
              These were never three separate interventions. Air, soil and water are one system.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-[14svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">Three entry points. One environmental system.</p>
        </Reveal>
      </div>
    </section>
  );
}