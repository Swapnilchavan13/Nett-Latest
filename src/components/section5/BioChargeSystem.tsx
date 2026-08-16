import { useMemo } from "react";
import { Reveal } from "@/components/section1/Reveal";
import { useStickyProgress, range, ease, mix } from "@/hooks/use-scroll-narrative";

const STEPS = ["Source", "Aggregate", "Dry", "Process", "Size", "Test", "Store", "Deliver"];

const COLS = 16;
const ROWS = 9;

/** Deterministic pseudo-random in [0,1). */
function rnd(i: number) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** Biomass particles that become progressively uniform as `p` goes 0 → 1. */
function UniformityField({ p }: { p: number }) {
  const seeds = useMemo(
    () =>
      Array.from({ length: COLS * ROWS }, (_, i) => ({
        i,
        gx: ((i % COLS) + 0.5) / COLS,
        gy: (Math.floor(i / COLS) + 0.5) / ROWS,
        jx: rnd(i) - 0.5,
        jy: rnd(i + 1000) - 0.5,
        s: rnd(i + 2000),
        r: rnd(i + 3000),
      })),
    [],
  );
  const t = ease(Math.min(1, Math.max(0, p)));

  return (
    <svg viewBox="0 0 160 90" className="h-full w-full" aria-hidden="true" focusable="false">
      {seeds.map((s) => {
        const x = (s.gx + s.jx * 0.9 * (1 - t)) * 160;
        const y = (s.gy + s.jy * 0.7 * (1 - t)) * 90;
        const w = mix(1 + s.s * 6, 3.4, t);
        const h = mix(0.5 + s.s * 1.6, 1.5, t);
        const rot = mix((s.r - 0.5) * 180, 0, t);
        return (
          <rect
            key={s.i}
            x={x - w / 2}
            y={y - h / 2}
            width={w}
            height={h}
            rx={0.4}
            fill="currentColor"
            opacity={mix(0.3 + s.s * 0.4, 0.85, t)}
            transform={`rotate(${rot} ${x} ${y})`}
          />
        );
      })}
    </svg>
  );
}

export function BioChargeSystem() {
  const { ref, progress } = useStickyProgress<HTMLDivElement>(0.14);
  const f = Math.min(1, Math.max(0, (progress - 0.05) / 0.9));
  const activeIndex = Math.min(STEPS.length - 1, Math.floor(f * STEPS.length));

  return (
    <section className="relative bg-carbon text-atmosphere">
      <div className="mx-auto max-w-6xl px-6 pt-[16svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">The BioCharge system</p>
        </Reveal>
        <Reveal threshold={0.2} delay={140}>
          <h3 className="display-lg mt-8 max-w-4xl">Residue in. Specification out.</h3>
        </Reveal>
        <Reveal threshold={0.2} delay={280}>
          <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
            BioCharge combines NettZero&rsquo;s biomass collection network with processing, quality
            management, storage and logistics to create industrial fuel from agricultural residue.
          </p>
        </Reveal>
      </div>

      <div ref={ref} className="relative mt-[10svh] h-[500vh]">
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
            <p className="label-eyebrow text-ochre">
              {String(activeIndex + 1).padStart(2, "0")} / 08
            </p>
            <p className="display-lg mt-4 uppercase">{STEPS[activeIndex]}</p>

            <div className="mt-[6svh] h-[38svh] w-full text-ochre/80">
              <UniformityField p={f} />
            </div>

            <div className="mt-[6svh]">
              <div className="relative h-px w-full bg-atmosphere/25">
                <div
                  className="absolute left-0 top-0 h-px bg-ochre"
                  style={{ width: `${f * 100}%` }}
                />
              </div>
              <ol className="mt-5 flex justify-between gap-1">
                {STEPS.map((s, i) => (
                  <li
                    key={s}
                    className="flex-1 text-center transition-opacity duration-500"
                    style={{ opacity: i === activeIndex ? 1 : 0.35 }}
                  >
                    <span
                      className={`label-eyebrow block text-[0.62rem] sm:text-[0.8rem] ${
                        i === activeIndex ? "text-ochre" : "text-atmosphere"
                      }`}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div
              className="mt-[7svh] text-center"
              style={{ opacity: ease(range(f, 0.82, 1)) }}
            >
              <p className="label-lead text-atmosphere/70">Agricultural residue becomes</p>
              <p className="display-md mt-4 text-ochre">BioCharge</p>
              <p className="label-eyebrow mt-3 text-atmosphere/60">
                Specification-driven biomass fuel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}