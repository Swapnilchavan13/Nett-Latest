import { Reveal } from "@/components/section1/Reveal";
import prepare from "@/assets/s4-prepare.jpg";
import blend from "@/assets/s4-blend.jpg";
import inoculate from "@/assets/s4-inoculate.jpg";
import cure from "@/assets/s4-cure.jpg";
import bags from "@/assets/s4-bags.jpg";
import biochar from "@/assets/s3-biochar-soil.jpg";

const STEPS = [
  { n: "01", name: "Biochar", src: "https://i.ibb.co/G38744jb/Gemini-Generated-Image-hlxt5phlxt5phlxt-1.png", alt: "Stable black biochar, the carbon foundation of B3", note: "Stable carbon in." },
  { n: "02", name: "Prepare", src: "https://i.ibb.co/PsxRm4Kt/Whats-App-Image-2026-09-04-at-6-40-18-PM.jpg", alt: "Biochar sieved to the required particle profile", note: "Milled and sieved to the required particle profile." },
  { n: "03", name: "Blend", src: "https://i.ibb.co/93rB71Cn/Gemini-Generated-Image-9uu3zu9uu3zu9uu3-1.png", alt: "Biochar blended with organic material", note: "Blended with organic material." },
  { n: "04", name: "Inoculate", src: "https://i.ibb.co/DHzdvVHf/Whats-App-Image-2026-09-07-at-3-49-01-PM.jpg", alt: "Jeevamrut biological inoculant poured over the blend", note: "Biologically inoculated with Jeevamrut." },
  { n: "05", name: "Cure", src: "https://i.ibb.co/VptVvR4K/Gemini-Generated-Image-nc1rgznc1rgznc1r-1.png", alt: "Blended material curing in covered heaps", note: "Cured for approximately 12 days." },
  { n: "06", name: "B3", src: "https://i.ibb.co/RGqR05NC/IMG-20260811-WA0012.jpg", alt: "Finished B3 packed into bags", note: "Finished, bagged, field-ready." },
];

export function B3Process() {
  return (
    <section className="relative bg-ink text-atmosphere">
      <div className="mx-auto max-w-6xl px-6 pt-[16svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">From biochar to B3</p>
        </Reveal>
        <Reveal threshold={0.2} delay={140}>
          <h3 className="display-lg mt-8 max-w-3xl">A disciplined manufacturing process.</h3>
        </Reveal>
        <Reveal threshold={0.2} delay={280}>
          <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
            Biochar is prepared to the required particle profile, blended with organic material,
            biologically inoculated and allowed to cure — approximately 12 days — before the
            finished B3 is prepared for field deployment.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-[8svh] px-6 py-[12svh] sm:px-10 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.name} threshold={0.12} delay={(i % 3) * 110}>
            <figure className="border-t border-atmosphere/20 pt-6">
              <div className="relative h-[34svh] overflow-hidden">
                <img
                  src={s.src}
                  alt={s.alt}
                  width={1600}
                  height={1008}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-5">
                <p className="label-eyebrow text-ochre">{s.n}</p>
                <p className="display-md mt-2">{s.name}</p>
                <p className="body-note mt-3 text-atmosphere/75">{s.note}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}