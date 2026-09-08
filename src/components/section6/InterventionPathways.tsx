import { Reveal } from "@/components/section1/Reveal";
import air from "@/assets/s6-air.jpg";
import soil from "@/assets/s6-soil.jpg";
import water from "@/assets/s6-water.jpg";

type Pathway = {
  id: string;
  world: string;
  headline: string;
  audience: string;
  copy: string;
  chain: string[];
  intervention: string;
  cta: string;
  image: string;
  extra?: { claim: string[]; note: string; link: string };
};

const PATHWAYS: Pathway[] = [
  {
    id: "air",
    world: "Air",
    headline: "Remove carbon.",
    audience:
      "For organisations committed to climate action and Carbon Dioxide Removal.",
    copy: "Support high-integrity Carbon Dioxide Removal by converting residual biomass into durable biochar carbon rather than allowing that carbon to rapidly return to the atmosphere.",
    chain: ["Biomass", "Biochar", "Durable carbon", "CDR"],
    intervention: "Support Carbon Dioxide Removal",
    cta: "Remove carbon",
    image: air,
  },
  {
    id: "soil",
    world: "Soil",
    headline: "Put carbon back.",
    audience:
      "For organisations interested in agriculture, food systems, farmer resilience and the restoration of India's depleted soils.",
    copy: "Help restore Soil Organic Carbon by taking stable carbon back to agricultural land through NettZero's B3 soil-restoration programme.",
    chain: ["Biochar", "B3", "Farm", "Soil Organic Carbon"],
    intervention: "Support Organic Carbon Restoration",
    cta: "Restore soil",
    image: soil,
  },
  {
    id: "water",
    world: "Water",
    headline: "Make every drop work harder.",
    audience:
      "For organisations with Water Stewardship, Water Positive or water-replenishment commitments.",
    copy: "Restore the soil's relationship with water — improving retention, reducing avoidable irrigation demand and creating measurable water-stewardship interventions across farms.",
    chain: ["Soil carbon", "Retention", "Lower irrigation demand", "Stewardship"],
    intervention: "Support Water Stewardship",
    cta: "Restore water",
    image: water,
    extra: {
      claim: ["Water stewardship", "at a fraction of", "conventional cost."],
      note: "We currently believe the intervention can support Water Recharge Ratio programmes at approximately 1/50th of industry-norm costs.",
      link: "See how we calculate this",
    },
  },
];

function PathwayPanel({ p, index }: { p: Pathway; index: number }) {
  const dark = index !== 1;
  return (
    <article
      id={`intervention-${p.id}`}
      className={`relative isolate overflow-hidden ${dark ? "bg-ink text-atmosphere" : "bg-carbon text-atmosphere"}`}
    >
      <img
        src={p.image}
        alt=""
        loading="lazy"
        width={1600}
        height={1100}
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45 rounded-[8px]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/90" aria-hidden="true" />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-[16svh] sm:px-10">
        <Reveal threshold={0.15}>
          <p className="label-eyebrow text-ochre">0{index + 1} — {p.world}</p>
        </Reveal>
        <Reveal threshold={0.15} delay={120}>
          <h3 className="display-xl mt-6 max-w-3xl">{p.headline}</h3>
        </Reveal>
        <Reveal threshold={0.15} delay={240}>
          <p className="label-lead mt-8 max-w-2xl text-atmosphere/85">{p.audience}</p>
        </Reveal>
        <Reveal threshold={0.15} delay={340}>
          <p className="body-note mt-6 max-w-2xl text-atmosphere/75">{p.copy}</p>
        </Reveal>

        <Reveal threshold={0.12} delay={440}>
          <ol className="mt-[7svh] flex flex-wrap items-center gap-x-4 gap-y-3">
            {p.chain.map((c, i) => (
              <li key={c} className="flex items-center gap-4">
                <span className="label-eyebrow text-atmosphere/85">{c}</span>
                {i < p.chain.length - 1 && (
                  <span className="block h-px w-8 bg-ochre/70" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        {p.extra && (
          <Reveal threshold={0.12} delay={520}>
            <div className="mt-[8svh] border-t border-atmosphere/25 pt-8">
              <h4 className="display-md max-w-xl text-ochre">
                {p.extra.claim.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </h4>
              <p className="display-lg mt-8 text-atmosphere">1/50th</p>
              <p className="label-eyebrow mt-3 text-atmosphere/70">of industry-norm costs</p>
              <p className="body-note mt-6 max-w-2xl text-atmosphere/70">{p.extra.note}</p>
              <a
                href="#partner-with-nettzero"
                className="label-eyebrow mt-6 inline-block border-b border-ochre/70 pb-1 text-ochre transition-opacity hover:opacity-70"
              >
                {p.extra.link} &rarr;
              </a>
            </div>
          </Reveal>
        )}

        <Reveal threshold={0.12} delay={600}>
          <div className="mt-[9svh] border-t border-atmosphere/25 pt-8">
            <p className="label-eyebrow text-ochre">Your intervention</p>
            <p className="display-md mt-4">{p.intervention}</p>
            <a
              href="#partner-with-nettzero"
              className="label-lead mt-8 inline-block border border-atmosphere/40 px-8 py-4 uppercase tracking-[0.18em] transition-colors hover:border-ochre hover:text-ochre"
            >
              {p.cta} &rarr;
            </a>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export function InterventionPathways() {
  return (
    <section aria-label="Three intervention pathways">
      {PATHWAYS.map((p, i) => (
        <PathwayPanel key={p.id} p={p} index={i} />
      ))}
    </section>
  );
}