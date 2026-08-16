import { Reveal } from "@/components/section1/Reveal";
import { HEADLINE_METRIC, PENDING_METRICS } from "@/data/b3-impact";
import delivery from "@/assets/s4-village-delivery.jpg";
import meeting from "@/assets/s4-farmer-meeting.jpg";
import application from "@/assets/s4-application.jpg";
import paddy from "@/assets/s4-paddy-landscape.jpg";

const FRAMES = [
  { src: delivery, alt: "B3 bags arriving by trailer in a village", cap: "B3 arriving in the village" },
  { src: meeting, alt: "Field team meeting farmers to explain B3 application", cap: "Farmer meetings and field teams" },
  { src: application, alt: "Farmer broadcasting B3 across a puddled paddy field", cap: "Basal application in paddy" },
];

export function B3Field() {
  const extras = PENDING_METRICS.filter((m) => m.value.trim() !== "");

  return (
    <section className="relative bg-ink text-atmosphere">
      <div className="mx-auto max-w-4xl px-6 py-[14svh] text-center sm:px-10">
        <Reveal threshold={0.2}>
          <p className="display-md">Made in the factory.</p>
        </Reveal>
        <Reveal threshold={0.2} delay={120}>
          <span className="mx-auto my-8 block h-16 w-px bg-ochre/60" aria-hidden="true" />
        </Reveal>
        <Reveal threshold={0.2} delay={220}>
          <p className="display-md text-ochre">Proven in the field.</p>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-[12svh] sm:px-10 lg:grid-cols-3">
        {FRAMES.map((f, i) => (
          <Reveal key={f.cap} threshold={0.12} delay={i * 110}>
            <figure>
              <div className="h-[42svh] overflow-hidden">
                <img
                  src={f.src}
                  alt={f.alt}
                  width={1600}
                  height={1008}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="label-eyebrow mt-4 text-atmosphere/60">{f.cap}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Scale */}
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src={paddy}
          alt="Expansive rice paddy landscape at dawn with farmers on the bunds"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--ink) 93%, transparent) 0%, color-mix(in oklab, var(--ink) 55%, transparent) 60%, color-mix(in oklab, var(--ink) 25%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 py-[14svh] sm:px-10">
          <Reveal threshold={0.15}>
            <p className="display-xl">{HEADLINE_METRIC.value}</p>
          </Reveal>
          <Reveal threshold={0.15} delay={140}>
            <p className="label-lead mt-4 text-ochre">
              {HEADLINE_METRIC.label} &nbsp;/&nbsp; {HEADLINE_METRIC.note}
            </p>
          </Reveal>
          <Reveal threshold={0.15} delay={280}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              During the 2026 rice season, more than 2,000 farmers are applying B3 across
              participating agricultural landscapes — taking soil restoration from formulation to
              field-scale deployment.
            </p>
          </Reveal>

          {extras.length > 0 && (
            <Reveal threshold={0.15} delay={380}>
              <dl className="mt-[8svh] grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {extras.map((m) => (
                  <div key={m.label} className="border-t border-atmosphere/25 pt-5">
                    <dt className="label-eyebrow text-atmosphere/60">{m.label}</dt>
                    <dd className="display-md mt-2">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}