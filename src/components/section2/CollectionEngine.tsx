import { Reveal } from "@/components/section1/Reveal";
import { useStickyProgress, range, ease, mix } from "@/hooks/use-scroll-narrative";
import farmers from "@/assets/s2-farmers.jpg";
import map from "@/assets/s2-map.jpg";
import machines from "@/assets/s2-machines.jpg";
import bale from "@/assets/s2-bale.jpg";
import store from "@/assets/s2-store.jpg";
import move from "@/assets/s2-move.jpg";

const STAGES = [
  {
    key: "Farmers",
    line: "We work directly with farming communities — educating, registering, coordinating and paying farmers for usable crop residue.",
    image: "https://i.postimg.cc/RFQDP4dR/IMG-7345.jpg",
  },
  {
    key: "Map",
    line: "Fields, biomass availability, collection clusters, storage points and destinations are mapped before movement begins.",
    image: "https://i.postimg.cc/L5JjJVJn/Whats-App-Image-2026-01-09-at-5-54-11-PM.jpg",
  },
  {
    key: "Machines",
    line: "Balers, tractors, loaders and other equipment are deployed around harvest windows and biomass clusters.",
    image: "https://i.postimg.cc/ydXbfsjr/IMG-7218.jpg",
  },
  {
    key: "Bale",
    line: "Loose residue is collected and compacted for efficient handling and transportation.",
    image: "https://i.postimg.cc/hPfkGszm/IMG-7221.jpg",
  },
  {
    key: "Store",
    line: "Seasonal harvests are aggregated and stored to create dependable supply beyond the harvest window.",
    image: "https://i.postimg.cc/ydXbfsjr/IMG-7218.jpg",
  },
  {
    key: "Move",
    line: "Routes, vehicles, payloads and distances are planned around the economics of every tonne delivered.",
    image: move,
  },
];

const FIRST = 0.06;
const LAST = 0.97;
const SLOT = (LAST - FIRST) / STAGES.length;

export function CollectionEngine() {
  const { ref, progress } = useStickyProgress<HTMLDivElement>(0.14);
  const f = (progress - FIRST) / SLOT;
  const activeIndex = Math.min(STAGES.length - 1, Math.max(0, Math.floor(f)));
  const railFill = Math.min(1, Math.max(0, (f + 0.5) / STAGES.length));

  return (
    <section className="relative bg-ink text-atmosphere">
      <div className="mx-auto max-w-6xl px-6 pt-[18svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">The NettZero collection engine</p>
        </Reveal>
        <Reveal threshold={0.2} delay={140}>
          <h3 className="display-lg mt-8 max-w-4xl">
            Scattered residue,
            <br />
            organised into supply.
          </h3>
        </Reveal>
      </div>

      <div ref={ref} className="relative mt-[12svh] h-[600vh]">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          {STAGES.map((stage, i) => {
            const t = f - i;
            const isLast = i === STAGES.length - 1;
            const shown =
              ease(range(t, -0.3, 0.08)) * (isLast ? 1 : 1 - ease(range(t, 0.92, 1.3)));
            if (shown <= 0.002) return null;
            const local = ease(range(t, -0.3, 1.2));
            return (
              <div key={stage.key} className="absolute inset-0" style={{ opacity: shown }}>
                <img
                  src={stage.image}
                  alt=""
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ transform: `scale(${mix(1.1, 1.01, local)})`, willChange: "transform" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in oklab, var(--ink) 95%, transparent) 0%, color-mix(in oklab, var(--ink) 68%, transparent) 48%, color-mix(in oklab, var(--ink) 45%, transparent) 100%)",
                  }}
                />
              </div>
            );
          })}

          {/* stage copy */}
          <div className="absolute inset-x-0 top-[16svh] mx-auto max-w-6xl px-6 sm:px-10">
            {STAGES.map((stage, i) => {
              const t = f - i;
              const o = ease(range(t, -0.2, 0.1)) * (1 - ease(range(t, 0.9, 1.15)));
              if (o <= 0.002) return null;
              return (
                <div
                  key={stage.key}
                  className="absolute inset-x-6 top-0 sm:inset-x-10"
                  style={{
                    opacity: o,
                    transform: `translate3d(0, ${mix(24, 0, o)}px, 0)`,
                  }}
                >
                  <p className="label-lead text-ochre">
                    0{i + 1} &nbsp;/&nbsp; 06
                  </p>
                  <h4 className="display-md mt-5 uppercase">{stage.key}</h4>
                  <p className="body-note mt-6 max-w-xl text-atmosphere/85">{stage.line}</p>
                </div>
              );
            })}
          </div>

          {/* the connected rail */}
          <div className="absolute inset-x-0 bottom-[8svh] mx-auto max-w-6xl px-6 sm:px-10">
            <div className="relative h-px w-full bg-atmosphere/25">
              <div
                className="absolute left-0 top-0 h-px bg-ochre"
                style={{ width: `${railFill * 100}%` }}
              />
            </div>
            <ol className="mt-5 flex justify-between gap-2">
              {STAGES.map((stage, i) => (
                <li
                  key={stage.key}
                  className="flex-1 text-center transition-opacity duration-500"
                  style={{ opacity: i === activeIndex ? 1 : 0.4 }}
                >
                  <span
                    className={`label-eyebrow block ${i === activeIndex ? "text-ochre" : "text-atmosphere"}`}
                  >
                    {stage.key}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Every kilometre counts */}
      <div className="mx-auto max-w-6xl px-6 py-[18svh] sm:px-10">
        <Reveal threshold={0.2}>
          <h3 className="display-lg max-w-3xl">Every kilometre counts.</h3>
        </Reveal>
        <Reveal threshold={0.2} delay={160}>
          <p className="body-note mt-8 max-w-2xl text-atmosphere/80">
            Because transportation economics can ruin the best intentions.
          </p>
        </Reveal>

        <Reveal threshold={0.2} delay={280}>
          <ol className="mt-[10svh] flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-4">
            {["Field", "Collection", "Storage", "Destination"].map((node, i, arr) => (
              <li key={node} className="flex flex-1 items-center gap-4">
                <span className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-ochre" aria-hidden="true" />
                  <span className="label-lead">{node}</span>
                </span>
                {i < arr.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-atmosphere/30 sm:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal threshold={0.2} delay={380}>
          <p className="display-md mt-[10svh] max-w-3xl">
            We don&rsquo;t just find biomass. We engineer its journey.
          </p>
        </Reveal>
      </div>
    </section>
  );
}