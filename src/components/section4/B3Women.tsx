import { Reveal } from "@/components/section1/Reveal";
import women1 from "@/assets/s4-women-1.jpg";
import women2 from "@/assets/s4-women-2.jpg";

export function B3Women() {
  return (
    <section className="relative bg-carbon text-atmosphere">
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src="https://i.ibb.co/gZVzLggs/Gemini-Generated-Image-3dzwwm3dzwwm3dzw-1.png"
          alt="All-women production team blending and packing B3 at the manufacturing facility"
          width={1600}
          height={1008}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover rounded-[8px]"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--ink) 92%, transparent) 0%, color-mix(in oklab, var(--ink) 45%, transparent) 62%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 py-[14svh] sm:px-10">
          <Reveal threshold={0.15}>
            <h3 className="display-lg max-w-3xl">
              Made by women.
              <br />
              For Mother Earth.
            </h3>
          </Reveal>
          <Reveal threshold={0.15} delay={200}>
            <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
              Our B3 production facility is operated by an all-women manufacturing team — creating
              skilled rural employment alongside the soil-restoration economy.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-[12svh] sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
        <Reveal threshold={0.15}>
          <figure className="h-[56svh] overflow-hidden">
            <img
              src="https://i.ibb.co/LzzL5L8d/Gemini-Generated-Image-rxklg7rxklg7rxkl.png"
              alt="A production operator weighing and recording a B3 sample at the facility bench"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover rounded-[8px]"
            />
          </figure>
        </Reveal>
        <Reveal threshold={0.15} delay={160}>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-8">
            {["Blending", "Inoculation", "Curing", "Testing", "Handling", "Packing"].map((t) => (
              <li key={t} className="border-t border-atmosphere/20 pt-4">
                <p className="label-lead">{t}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}