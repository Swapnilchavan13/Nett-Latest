import { Reveal } from "./Reveal";
import { CarbonAtom } from "./CarbonAtom";
import air from "@/assets/node-air.jpg";
import soil from "@/assets/node-soil.jpg";
import water from "@/assets/node-water.jpg";
import food from "@/assets/node-food.jpg";
import health from "@/assets/node-health.jpg";
import income from "@/assets/node-income.jpg";

const OUTCOMES = [
  {
    node: "Air",
    headline: "Less pollution.",
    body: "Prevent agricultural biomass from being openly burned and reduce associated smoke and particulate pollution.",
    image: "https://wallpaperaccess.com/full/491708.jpg",
    metric: "Carbon \u2193 in the air",
  },
  {
    node: "Soil",
    headline: "Restore carbon.",
    body: "Return stable carbon to depleted agricultural soils and help rebuild soil condition.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iG31nEyzuYpHCo2OWBA9ycKH32RaQ4BqQloAsBJX1g&s=10",
    metric: "Carbon \u2191 in the soil",
  },
  {
    node: "Water",
    headline: "Hold more. Waste less.",
    body: "Improve the soil's relationship with water, helping retain moisture longer and improve irrigation efficiency.",
    image: "https://i.ibb.co/0j8nJw5K/Image-2-3.jpg",
    metric: "Moisture held longer",
  },
  {
    node: "Food",
    headline: "Build from the soil up.",
    body: "Improve the soil conditions on which productive and resilient agriculture ultimately depends.",
    image: "https://t4.ftcdn.net/jpg/00/92/05/97/360_F_92059706_JKCwjvKFKowSm2u279o1NNP1kNxrlALu.jpg",
    metric: "Resilient yield",
  },
  {
    node: "Health",
    headline: "Cleaner air. Healthier ecosystems.",
    body: "Reduce exposure to pollution from residue burning while rebuilding healthier agricultural environments.",
    image: "https://i.postimg.cc/3Rq4m7hq/IMG-7236.jpg",
    metric: "Less smoke to breathe",
  },
  {
    node: "Income",
    headline: "Turn waste into value.",
    body: "Transform agricultural residue from a disposal burden into an economic resource while supporting the long-term productive resilience of farmland.",
    image: "https://iili.io/n3atWDx.png",
    metric: "Residue becomes revenue",
  },
];

export function StateOutcomes() {
  return (
    <section className="relative bg-ink text-atmosphere">
      {/* intro */}
      <div className="relative mx-auto max-w-6xl px-6 py-[20svh] sm:px-10">
        <div
          className="pointer-events-none absolute -left-[14vmin] top-[8svh] h-[52vmin] w-[52vmin] text-ochre/20"
          aria-hidden="true"
        >
          <CarbonAtom />
        </div>
        <div className="relative">
          <Reveal threshold={0.2}>
            <p className="label-lead text-ochre">One intervention</p>
          </Reveal>
          <Reveal threshold={0.2} delay={120}>
            <h2 className="display-xl mt-8">
              Same carbon,
              <br />
              different outcomes.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* six immersive panels */}
      <ol>
        {OUTCOMES.map((item, i) => (
          <li key={item.node} className="relative min-h-[100svh] overflow-hidden">
            <img
              src={item.image}
              alt={`${item.node}: ${item.headline}`}
              width={1280}
              height={1280}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover rounded-[8px]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(to right, color-mix(in oklab, var(--ink) 90%, transparent) 0%, color-mix(in oklab, var(--ink) 55%, transparent) 55%, color-mix(in oklab, var(--ink) 25%, transparent) 100%)"
                    : "linear-gradient(to left, color-mix(in oklab, var(--ink) 90%, transparent) 0%, color-mix(in oklab, var(--ink) 55%, transparent) 55%, color-mix(in oklab, var(--ink) 25%, transparent) 100%)",
              }}
              aria-hidden="true"
            />

            <div
              className={`relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-[16svh] sm:px-10 ${
                i % 2 === 0 ? "items-start text-left" : "items-end text-right"
              }`}
            >
              <div className="max-w-xl">
                <Reveal threshold={0.2}>
                  <div className="flex items-center gap-4">
                    <span className="h-7 w-7 shrink-0 text-ochre">
                      <CarbonAtom spin={false} />
                    </span>
                    <p className="label-lead text-ochre">
                      0{i + 1} &nbsp;/&nbsp; {item.node}
                    </p>
                  </div>
                </Reveal>
                <Reveal threshold={0.2} delay={120}>
                  <h3 className="display-md mt-6">{item.headline}</h3>
                </Reveal>
                <Reveal threshold={0.2} delay={240}>
                  <p className="body-note mt-6 text-atmosphere/80">{item.body}</p>
                </Reveal>
                <Reveal threshold={0.2} delay={340}>
                  <p className="label-lead mt-8 text-atmosphere/70">{item.metric}</p>
                </Reveal>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}