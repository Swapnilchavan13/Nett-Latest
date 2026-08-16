import { useStickyProgress, range, band, ease, mix } from "@/hooks/use-scroll-narrative";
import biomass from "@/assets/journey-biomass.jpg";
import burn from "@/assets/journey-burn.jpg";
import atmosphere from "@/assets/journey-atmosphere.jpg";
import returned from "@/assets/journey-return.jpg";

type Stage = {
  no: string;
  label: string;
  headline: string;
  note: string;
  image: string;
  tint: string;
  direction: "up" | "down";
};

const STAGES: Stage[] = [
  {
    no: "01",
    label: "The biomass",
    headline: "Every harvest leaves carbon behind.",
    note: "Straw, stalk and husk \u2014 millions of tonnes of agricultural residue left on the field after harvest.",
    image: biomass,
    tint: "var(--soil)",
    direction: "up",
  },
  {
    no: "02",
    label: "What happens to it",
    headline: "It is burned, dumped or left to rot.",
    note: "The fastest way to clear a field is to set it alight. The carbon it holds is released in minutes.",
    image: burn,
    tint: "var(--carbon)",
    direction: "up",
  },
  {
    no: "03",
    label: "Where the carbon goes",
    headline: "Straight up, into the air we breathe.",
    note: "Carbon dioxide, smoke and particulates rise into the atmosphere \u2014 where none of it does any good.",
    image: atmosphere,
    tint: "var(--graphite)",
    direction: "up",
  },
  {
    no: "04",
    label: "The redirection",
    headline: "Intercepted, transformed, returned.",
    note: "The same carbon, captured before release and stabilised \u2014 then placed back into the soil it came from.",
    image: returned,
    tint: "var(--soil)",
    direction: "down",
  },
];

const MOTES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 41) % 96,
  size: 1.6 + ((i * 5) % 4) * 0.8,
  dur: 13 + ((i * 11) % 9),
  delay: -((i * 13) % 17),
  drift: ((i % 5) - 2) * 1.2,
}));

const STAGE_SLOT = 0.19;
const STAGE_START = 0.04;
const PIVOT_START = STAGE_START + STAGE_SLOT * 3; // after stage 03

export function StatePathway() {
  const { ref, progress } = useStickyProgress<HTMLDivElement>();

  const pivot = band(progress, PIVOT_START + 0.01, PIVOT_START + 0.15, 0.04);
  const flip = ease(range(progress, PIVOT_START + 0.1, PIVOT_START + 0.2));
  const interceptRule = ease(range(progress, PIVOT_START + 0.08, PIVOT_START + 0.18));

  const stageIndex = Math.min(3, Math.max(0, Math.floor((progress - STAGE_START) / STAGE_SLOT)));
  const shownIndex = pivot > 0.15 ? -1 : progress > PIVOT_START + 0.12 ? 3 : stageIndex;

  return (
    <div ref={ref} className="relative h-[700vh] bg-ink text-atmosphere">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* stage imagery */}
        {STAGES.map((stage, i) => {
          const start = i === 3 ? PIVOT_START + 0.12 : STAGE_START + i * STAGE_SLOT;
          const end = i === 3 ? 1.04 : start + STAGE_SLOT;
          const shown = band(progress, start - 0.03, end, 0.05);
          if (shown <= 0.001) return null;
          const local = ease(range(progress, start - 0.03, end));
          return (
            <div key={stage.no} className="absolute inset-0" style={{ opacity: shown }}>
              <img
                src={stage.image}
                alt=""
                width={1600}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ transform: `scale(${mix(1.1, 1.02, local)})`, willChange: "transform" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, color-mix(in oklab, ${stage.tint} 88%, transparent) 0%, color-mix(in oklab, var(--ink) 62%, transparent) 60%, color-mix(in oklab, var(--ink) 40%, transparent) 100%)`,
                }}
              />
            </div>
          );
        })}

        {/* carbon direction: rising, then returning */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0" style={{ opacity: 1 - flip }}>
            {MOTES.map((m, i) => (
              <span
                key={`u${i}`}
                className="mote mote-up bg-mist/70"
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
          <div className="absolute inset-0" style={{ opacity: flip }}>
            {MOTES.map((m, i) => (
              <span
                key={`d${i}`}
                className="mote mote-down bg-ochre/80"
                style={{
                  left: `${(m.left + 7) % 96}%`,
                  top: 0,
                  width: m.size,
                  height: m.size,
                  ["--dur" as string]: `${m.dur}s`,
                  ["--delay" as string]: `${m.delay}s`,
                  ["--drift" as string]: `${-m.drift}vw`,
                }}
              />
            ))}
          </div>
        </div>

        {/* journey rail — always visible, makes the path unmistakable */}
        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 sm:block">
          <div className="relative flex flex-col items-center gap-6">
            <span
              className="label-eyebrow"
              style={{ color: flip > 0.5 ? "var(--ochre)" : "var(--bluegrey)" }}
            >
              {flip > 0.5 ? "\u2193" : "\u2191"}
            </span>
            <span className="h-40 w-px bg-atmosphere/20">
              <span
                className="block w-px bg-ochre"
                style={{
                  height: `${Math.min(1, progress / 0.98) * 100}%`,
                  transition: "height 120ms linear",
                }}
              />
            </span>
            <div className="flex flex-col items-center gap-3">
              {STAGES.map((s, i) => (
                <span
                  key={s.no}
                  className="label-eyebrow"
                  style={{
                    opacity: i === shownIndex ? 1 : 0.35,
                    color: i === shownIndex ? "var(--ochre)" : undefined,
                    transition: "opacity 500ms ease, color 500ms ease",
                  }}
                >
                  {s.no}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* stage copy — one block at a time, never overlapping */}
        <div className="absolute inset-x-6 bottom-[12svh] sm:inset-x-24">
          {STAGES.map((stage, i) => {
            const start = i === 3 ? PIVOT_START + 0.12 : STAGE_START + i * STAGE_SLOT;
            const end = i === 3 ? 1.04 : start + STAGE_SLOT;
            const shown = band(progress, start, end, 0.045);
            if (shown <= 0.001) return null;
            return (
              <div
                key={stage.no}
                className="absolute inset-x-0 bottom-0"
                style={{
                  opacity: shown,
                  transform: `translate3d(0, ${mix(20, 0, shown)}px, 0)`,
                  willChange: "transform, opacity",
                }}
              >
                <p className="label-lead text-ochre">
                  {stage.no} &nbsp;/&nbsp; {stage.label}
                </p>
                <h3 className="display-md mt-5 max-w-3xl">{stage.headline}</h3>
                <p className="body-note mt-5 max-w-2xl text-atmosphere/80">{stage.note}</p>
                <p className="label-lead mt-7 text-atmosphere/70">
                  {stage.direction === "up" ? "Carbon \u2191 atmosphere" : "Carbon \u2193 soil"}
                </p>
              </div>
            );
          })}
        </div>

        {/* the intercept rule sweeping across */}
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 flex items-center gap-4 px-6 sm:px-24"
          aria-hidden="true"
          style={{ opacity: interceptRule * (1 - range(progress, 0.9, 1)) }}
        >
          <span className="label-lead text-ochre">Intercept</span>
          <span
            className="h-px flex-1 bg-ochre"
            style={{ transform: `scaleX(${interceptRule})`, transformOrigin: "left" }}
          />
        </div>

        {/* pivot question, alone on screen */}
        <div
          className="absolute inset-0 flex items-center justify-center px-6 text-center"
          style={{ opacity: pivot, pointerEvents: "none" }}
        >
          <div className="absolute inset-0 bg-ink/70" />
          <h2
            className="display-lg relative"
            style={{ transform: `translateY(${mix(16, 0, pivot)}px)` }}
          >
            What if we changed
            <br />
            the direction?
          </h2>
        </div>
      </div>

      <div className="sr-only">
        <h2>Agricultural biomass and the broken carbon journey</h2>
        <p>
          Today: agricultural biomass is burned, wasted or left to decompose, releasing carbon and
          pollution into the atmosphere. What if we changed the direction? Intercept, capture and
          transform, stabilise, and return carbon to the soil.
        </p>
      </div>
    </div>
  );
}