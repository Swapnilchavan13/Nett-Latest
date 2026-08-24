import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nettzero-logo.webp";

const LINKS = [
  { id: "section-1-carbon", label: "The Carbon Placement Problem" },
  { id: "section-2-biomass", label: "It All Begins With Biomass" },
  { id: "section-3-biochar", label: "Biochar by NettZero" },
  { id: "section-4-b3", label: "B3 — Bhoomi Bio Booster" },
  { id: "section-5-biocharge", label: "BioCharge — Energy from Biomass" },
  { id: "section-6-intervention", label: "Choose Your Intervention" },
  { id: "section-7-team", label: "The People Behind NettZero" },
  { id: "section-8-contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-carbon/10 bg-atmosphere">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => go("section-1-carbon")}
            className="flex items-center gap-3"
            aria-label="NettZero — back to top"
          >
            <img
              src={logo}
              alt="NettZero"
              className="h-7 w-auto"
            />
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center text-carbon transition-opacity hover:opacity-70"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <nav
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-atmosphere/98 backdrop-blur-xl transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="mx-auto flex h-full max-w-[1400px] flex-col justify-center gap-4 px-6 sm:px-8">
          {LINKS.map((link, i) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline gap-5 text-left"
                style={{
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                  transition: `transform 520ms cubic-bezier(.22,1,.36,1) ${i * 55}ms, opacity 520ms ease ${i * 55}ms`,
                }}
              >
                <span className="label-eyebrow text-ochre">
                  0{i + 1}
                </span>
                <span className="display-md text-carbon transition-colors group-hover:text-soil">
                  {link.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
