import { useState } from "react";
import { Reveal } from "@/components/section1/Reveal";
import { BIOCHAR_SITES, type BiocharSite } from "@/data/biochar-sites";
import { cn } from "@/lib/utils";

function SiteCard({ site, index }: { site: BiocharSite; index: number }) {
  const [open, setOpen] = useState(false);
  const hero = site.gallery[0] ?? { src: "", alt: site.name };

  return (
    <Reveal threshold={0.12} delay={(index % 2) * 100}>
      <article className="group border-t border-atmosphere/20 pt-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="block w-full text-left"
        >
          <figure className="relative h-[42svh] overflow-hidden">
            <img
              src={hero.src}
              alt={hero.alt}
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in oklab, var(--ink) 88%, transparent) 0%, transparent 60%)",
              }}
            />
            <figcaption className="absolute bottom-5 left-5 right-5">
              <p className="label-eyebrow text-ochre">
                0{index + 1} &nbsp;/&nbsp; 04
              </p>
              <p className="display-md mt-2">{site.name}</p>
            </figcaption>
          </figure>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
            <div>
              <dt className="label-eyebrow text-atmosphere/55">Location</dt>
              <dd className="body-note mt-2">
                {site.place}, {site.state}
              </dd>
            </div>
            <div>
              <dt className="label-eyebrow text-atmosphere/55">Biomass</dt>
              <dd className="body-note mt-2">{site.biomass}</dd>
            </div>
            <div>
              <dt className="label-eyebrow text-atmosphere/55">CO₂ removed</dt>
              <dd className="body-note mt-2 text-ochre">{site.co2Removed} t CO₂e</dd>
            </div>
          </dl>

          <span className="label-eyebrow mt-6 inline-block text-atmosphere/60">
            {open ? "Close" : "About + gallery"}
          </span>
        </button>

        <div
          className={cn(
            "grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <p className="body-note max-w-xl text-atmosphere/75">{site.about}</p>
            <ul className="mt-6 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {site.gallery.map((g, i) => (
                <li key={i} className="shrink-0">
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={1408}
                    height={1008}
                    loading="lazy"
                    className="h-[24svh] w-[70vw] object-cover sm:w-[22vw]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function BiocharSites() {
  return (
    <section className="relative bg-ink text-atmosphere">
      <div className="mx-auto max-w-6xl px-6 pt-[18svh] sm:px-10">
        <Reveal threshold={0.2}>
          <p className="label-lead text-ochre">The proof</p>
        </Reveal>
        <Reveal threshold={0.2} delay={140}>
          <h3 className="display-xl mt-8">
            Four sites.
            <br />
            One approach.
          </h3>
        </Reveal>
        <Reveal threshold={0.2} delay={280}>
          <p className="body-note mt-10 max-w-2xl text-atmosphere/80">
            Different geographies. Different biomass. The same objective — turn neglected biomass
            into durable carbon.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-[10svh] px-6 py-[12svh] sm:px-10 lg:grid-cols-2">
        {BIOCHAR_SITES.map((site, i) => (
          <SiteCard key={site.name} site={site} index={i} />
        ))}
      </div>
    </section>
  );
}