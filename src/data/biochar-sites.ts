import siteA from "@/assets/s3-site-a.jpg";
import siteB from "@/assets/s3-site-b.jpg";
import siteC from "@/assets/s3-site-c.jpg";
import kiln from "@/assets/s3-kiln-hero.jpg";
import biocharSoil from "@/assets/s3-biochar-soil.jpg";
import mrv from "@/assets/s3-mrv.jpg";

export type BiocharSite = {
  /** Editable placeholder — replace with the verified site name. */
  name: string;
  place: string;
  state: string;
  biomass: string;
  /** Tonnes CO2e removed. Keep as a string so units/precision stay editable. */
  co2Removed: string;
  /** 2–3 lines maximum. */
  about: string;
  /** 3–5 photographs. First image is the hero. */
  gallery: { src: string; alt: string }[];
};

/**
 * PLACEHOLDER DATA.
 * Every field below is a placeholder awaiting verified information and
 * photography. To update a site, edit only the object entry — layout,
 * gallery behaviour and ordering are handled by the components.
 */
export const BIOCHAR_SITES: BiocharSite[] = [
  {
    name: "Site One",
    place: "Place name",
    state: "State",
    biomass: "Biomass type",
    co2Removed: "—",
    about:
      "Short description of the site, the local biomass context and why this location matters. Two to three lines.",
    gallery: [
      { src: siteA, alt: "Biochar production site — placeholder photograph" },
      { src: siteB, alt: "Freshly produced biochar — placeholder photograph" },
      { src: siteC, alt: "Site landscape — placeholder photograph" },
    ],
  },
  {
    name: "Site Two",
    place: "Place name",
    state: "State",
    biomass: "Biomass type",
    co2Removed: "—",
    about:
      "Short description of the site, the local biomass context and why this location matters. Two to three lines.",
    gallery: [
      { src: siteC, alt: "Site landscape — placeholder photograph" },
      { src: kiln, alt: "Kiln in operation — placeholder photograph" },
      { src: siteB, alt: "Freshly produced biochar — placeholder photograph" },
    ],
  },
  {
    name: "Site Three",
    place: "Place name",
    state: "State",
    biomass: "Biomass type",
    co2Removed: "—",
    about:
      "Short description of the site, the local biomass context and why this location matters. Two to three lines.",
    gallery: [
      { src: kiln, alt: "Kiln in operation — placeholder photograph" },
      { src: siteA, alt: "Operations crew — placeholder photograph" },
      { src: biocharSoil, alt: "Biochar going back to soil — placeholder photograph" },
    ],
  },
  {
    name: "Site Four",
    place: "Place name",
    state: "State",
    biomass: "Biomass type",
    co2Removed: "—",
    about:
      "Short description of the site, the local biomass context and why this location matters. Two to three lines.",
    gallery: [
      { src: siteB, alt: "Freshly produced biochar — placeholder photograph" },
      { src: mrv, alt: "Field measurement — placeholder photograph" },
      { src: siteC, alt: "Site landscape — placeholder photograph" },
    ],
  },
  {
    name: "Site Five",
    place: "Place name",
    state: "State",
    biomass: "Biomass type",
    co2Removed: "—",
    about:
      "Short description of the site, the local biomass context and why this location matters. Two to three lines.",
    gallery: [
      { src: biocharSoil, alt: "Biochar going back to soil — placeholder photograph" },
      { src: siteA, alt: "Operations crew — placeholder photograph" },
      { src: kiln, alt: "Kiln in operation — placeholder photograph" },
    ],
  },
  {
    name: "Site Six",
    place: "Place name",
    state: "State",
    biomass: "Biomass type",
    co2Removed: "—",
    about:
      "Short description of the site, the local biomass context and why this location matters. Two to three lines.",
    gallery: [
      { src: mrv, alt: "Field measurement — placeholder photograph" },
      { src: siteC, alt: "Site landscape — placeholder photograph" },
      { src: siteA, alt: "Operations crew — placeholder photograph" },
    ],
  },
];