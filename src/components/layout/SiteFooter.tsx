import logo from "@/assets/nettzero-logo.asset.json";
import { CarbonAtom } from "@/components/section1/CarbonAtom";

const SECTIONS = [
  { id: "section-1-carbon", label: "The Carbon Placement Problem" },
  { id: "section-2-biomass", label: "It All Begins With Biomass" },
  { id: "section-3-biochar", label: "Biochar by NettZero" },
  { id: "section-4-b3", label: "B3 — Bhoomi Bio Booster" },
  { id: "section-5-biocharge", label: "BioCharge — Energy from Biomass" },
  { id: "section-6-intervention", label: "Choose Your Intervention" },
  { id: "section-7-team", label: "The People Behind NettZero" },
  { id: "section-8-contact", label: "Contact" },
];

export function SiteFooter() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="relative overflow-hidden bg-atmosphere text-carbon">
      <div
        className="pointer-events-none absolute -right-[14vmin] -top-[14vmin] h-[46vmin] w-[46vmin] text-ochre/20"
        aria-hidden="true"
      >
        <CarbonAtom />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-[12svh] sm:px-10">
        <div className="grid gap-[6svh] lg:grid-cols-[1.1fr_1fr]">
          <div>
            <img src={logo.url} alt="NettZero" className="h-9 w-auto" />
            <p className="body-note mt-8 max-w-md text-carbon/70">
              Too much carbon in the air. Too little in the soil. We intercept neglected biomass and
              return its carbon to the ground.
            </p>
            <a
              href="mailto:hello@nettzero.world"
              className="label-lead mt-8 inline-block border-b border-ochre pb-1 text-ochre"
            >
              hello@nettzero.world
            </a>
          </div>

          <nav aria-label="Sections">
            <p className="label-eyebrow text-carbon/50">Explore</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => go(s.id)}
                    className="label-lead text-left text-carbon/80 transition-colors hover:text-ochre"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-[8svh] flex flex-col gap-4 border-t border-carbon/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-eyebrow text-carbon/50">
            &copy; {new Date().getFullYear()} NettZero. All rights reserved.
          </p>
          <button
            onClick={() => go("section-1-carbon")}
            className="label-eyebrow text-carbon/60 transition-colors hover:text-ochre"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}