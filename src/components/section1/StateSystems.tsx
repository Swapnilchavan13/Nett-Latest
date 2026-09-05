import { useStickyProgress, range, band, ease, mix } from "@/hooks/use-scroll-narrative";
import { CarbonAtom } from "./CarbonAtom";
import soil from "@/assets/node-soil.jpg";
import air from "@/assets/node-air.jpg";
import water from "@/assets/node-water.jpg";
import food from "@/assets/node-food.jpg";
import health from "@/assets/node-health.jpg";
import income from "@/assets/node-income.jpg";

const NODES = [
  { word: "Soil", note: "Depleted. Losing the carbon it once held.", image: "https://t4.ftcdn.net/jpg/00/92/05/97/360_F_92059706_JKCwjvKFKowSm2u279o1NNP1kNxrlALu.jpg" },
  { word: "Air", note: "Loaded with what the land released.", image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/09/28/Pictures/september-hindustan-september-asarpur-stubble-burning-patiala_8a2fc2ec-0112-11eb-b32f-32d5f7e2c720.jpg" },
  { word: "Water", note: "Running off ground that can no longer hold it.", image: "https://wmo.int/sites/default/files/styles/featured_image_x1_768x512/public/2024-12/drought.jpg" },
  { word: "Food", note: "Grown from soil that is quietly thinning.", image: "https://etimg.etb2bimg.com/thumb/msid-131505728,width-1200,height-900,resizemode-4/.jpg" },
  { word: "Health", note: "Breathing the smoke of what we burn.", image: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/13-10-2020_UNICEF-I365340_India_rural.jpg/image770x420cropped.jpg" },
  // { word: "Income", note: "Yield and livelihood, tied to the same ground.", image: "https://iili.io/BJRtGHl.jpg" },
];

const SLOT = 0.082;
const FIRST = 0.05;
const PHASE_A_END = FIRST + SLOT * NODES.length; // ≈ 0.54

/** Ethereal drifting motes, animated purely in CSS so scroll stays smooth. */
const MOTES = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 97,
  size: 1.5 + ((i * 7) % 5) * 0.7,
  dur: 16 + ((i * 13) % 11),
  delay: -((i * 17) % 19),
  drift: ((i % 5) - 2) * 1.4,
}));

export function StateSystems() {
  const { ref, progress } = useStickyProgress<HTMLDivElement>(0.09);

  const listOut = ease(range(progress, PHASE_A_END + 0.01, PHASE_A_END + 0.08));
  const imageFade = 1 - ease(range(progress, PHASE_A_END - 0.01, PHASE_A_END + 0.06));
  const atomIn = ease(range(progress, PHASE_A_END + 0.08, PHASE_A_END + 0.22));
  const ringIn = ease(range(progress, PHASE_A_END + 0.16, PHASE_A_END + 0.34));
  const carbonIn = ease(range(progress, 0.82, 0.94));
  const threadLine = ease(range(progress, PHASE_A_END + 0.04, PHASE_A_END + 0.14));

  const activeIndex = Math.min(
    NODES.length - 1,
    Math.max(0, Math.floor((progress - FIRST) / SLOT)),
  );
  const railFill = Math.min(
    1,
    Math.max(0, ((progress - FIRST) / SLOT + 0.5) / NODES.length),
  );

  return (
    <div ref={ref} className="relative h-[900vh] bg-ink text-atmosphere">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* full-bleed imagery, one node at a time */}
        {imageFade > 0.001 && NODES.map((node, i) => {
          const f = (progress - FIRST) / SLOT;
          const t = f - i;
          const isFirst = i === 0;
          const isLast = i === NODES.length - 1;
          const shown =
            (isFirst ? 1 : ease(range(t, -0.15, 0.1))) *
            (isLast ? 1 : 1 - ease(range(t, 0.85, 1.1)));
          if (shown <= 0.001) return null;
          const local = ease(range(t, -0.15, 1.1));
          return (
            <div key={node.word} className="absolute inset-0" style={{ opacity: shown * imageFade }}>
              <img
                src={node.image}
                alt=""
                width={1280}
                height={1280}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
                style={{
                  transform: `scale(${mix(1.12, 1.02, local)})`,
                  willChange: "transform",
                }}
              />
              <div className="absolute inset-0 bg-ink/65" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, color-mix(in oklab, var(--ink) 10%, transparent) 0%, color-mix(in oklab, var(--ink) 42%, transparent) 62%, color-mix(in oklab, var(--ink) 45%, transparent) 100%)",
                }}
              />
            </div>
          );
        })}

        {/* ethereal motes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {MOTES.map((m, i) => (
            <span
              key={i}
              className="mote mote-up bg-atmosphere/60"
              style={{
                left: `${m.left}%`,
                bottom: 0,
                width: m.size,
                height: m.size,
                ["--dur" as string]: `${m.dur}s`,
                ["--delay" as string]: `${m.delay}s`,
                ["--drift" as string]: `${m.drift}vw`,
              }}
            />
          ))}
        </div>

        {/* PHASE A — the six systems, one by one (rail format) */}
        <div
          className="absolute inset-0"
          style={{ opacity: 1 - listOut, pointerEvents: "none" }}
        >
          <p
            className="label-lead absolute inset-x-6 top-[9svh] text-atmosphere/70 sm:inset-x-10"
            style={{ opacity: ease(range(progress, 0.01, 0.05)) }}
          >
            Six systems, one thread
          </p>

          {/* stage copy */}
          <div className="absolute inset-x-0 top-[22svh] mx-auto max-w-6xl px-6 sm:px-10">
            {NODES.map((node, i) => {
              const t = (progress - FIRST) / SLOT - i;
              const isFirst = i === 0;
              const isLast = i === NODES.length - 1;
              const o =
                (isFirst ? ease(range(t, -0.35, -0.1)) : ease(range(t, 0, 0.14))) *
                (isLast ? 1 : 1 - ease(range(t, 0.86, 1)));
              if (o <= 0.002) return null;
              return (
                <div
                  key={node.word}
                  className="absolute inset-x-6 top-0 sm:inset-x-10"
                  style={{
                    opacity: o,
                    transform: `translate3d(0, ${mix(24, 0, o)}px, 0)`,
                    willChange: "transform, opacity",
                  }}
                >
                  <p className="label-lead text-ochre">
                    0{i + 1} &nbsp;/&nbsp; 06
                  </p>
                  <h3
                    className="mt-5 font-display"
                    style={{
                      fontSize: "clamp(2.4rem, 7vw, 5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.025em",
                      fontVariationSettings: '"SOFT" 60, "WONK" 1, "opsz" 120',
                    }}
                  >
                    {node.word}.
                  </h3>
                  <p className="body-note mt-6 max-w-xl text-atmosphere/85">{node.note}</p>
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
              {NODES.map((node, i) => (
                <li
                  key={node.word}
                  className="flex-1 text-center transition-opacity duration-500"
                  style={{ opacity: i === activeIndex ? 1 : 0.4 }}
                >
                  <span
                    className={`label-eyebrow block ${i === activeIndex ? "text-ochre" : "text-atmosphere"}`}
                  >
                    {node.word}
                  </span>
                </li>
              ))}
            </ol>
            <p
              className="label-lead mt-8 text-ochre"
              style={{ opacity: ease(range(progress, PHASE_A_END - 0.08, PHASE_A_END - 0.01)) }}
            >
              All in distress. All connected.
            </p>
          </div>
        </div>

        {/* PHASE B — convergence on carbon */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: atomIn, pointerEvents: "none" }}
        >
          <div
            className="relative aspect-square w-[58vmin] max-w-[460px] text-ochre"
            style={{ transform: `scale(${mix(0.86, 1, atomIn)})`, willChange: "transform" }}
          >
            <CarbonAtom className="opacity-90" />

            {NODES.map((node, i) => {
              const a = ((-90 + i * 60) * Math.PI) / 180;
              const r = mix(58, 50, ringIn);
              return (
                <span
                  key={node.word}
                  className="label-eyebrow absolute whitespace-nowrap text-atmosphere/70"
                  style={{
                    left: `${50 + Math.cos(a) * r}%`,
                    top: `${50 + Math.sin(a) * r}%`,
                    transform: "translate(-50%, -50%)",
                    opacity: ringIn,
                  }}
                >
                  {node.word}
                </span>
              );
            })}

            {/* the word itself, resting on the nucleus */}
            <h2
              className="absolute left-1/2 top-1/2 font-display text-atmosphere"
              style={{
                fontSize: "clamp(1.5rem, 5vmin, 2.75rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                transform: `translate(-50%, calc(-50% + ${mix(14, 0, carbonIn)}px))`,
                opacity: carbonIn,
                willChange: "transform, opacity",
              }}
            >
              Carbon
            </h2>
          </div>
        </div>

        <p
          className="label-lead absolute inset-x-6 top-[13svh] text-center text-atmosphere/75 sm:inset-x-14"
          style={{ opacity: threadLine }}
        >
          They share a common thread
        </p>

      </div>

      {/* Screen-reader / no-JS narrative */}
      <div className="sr-only">
        <h2>Soil. Air. Water. Food. Health. Income.</h2>
        <p>
          They are all in distress, and they are more connected than we think. They share a common
          thread: carbon. Too much carbon is being released into our air, and too little carbon
          remains in our soil.
        </p>
      </div>
    </div>
  );
}