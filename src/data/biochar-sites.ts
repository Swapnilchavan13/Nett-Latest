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
      { src: "https://i.postimg.cc/PqFWTcxj/Whats-App-Image-2026-01-09-at-5-54-26-PM.jpg", alt: "Biochar production site — placeholder photograph" },
      { src: "https://i.postimg.cc/PqFWTcxj/Whats-App-Image-2026-01-09-at-5-54-26-PM.jpg", alt: "Freshly produced biochar — placeholder photograph" },
      { src: "https://i.postimg.cc/PqFWTcxj/Whats-App-Image-2026-01-09-at-5-54-26-PM.jpg", alt: "Site landscape — placeholder photograph" },
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
      { src: "https://i.postimg.cc/k4Fpjqsk/IMG-7388.jpg", alt: "Site landscape — placeholder photograph" },
      { src: "https://i.postimg.cc/k4Fpjqsk/IMG-7388.jpg", alt: "Kiln in operation — placeholder photograph" },
      { src: "https://i.postimg.cc/k4Fpjqsk/IMG-7388.jpg", alt: "Freshly produced biochar — placeholder photograph" },
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
      { src: "https://i.postimg.cc/hG3Lcwjc/E9ACE7A0-8F0E-4555-AD36-6EB8581D2A5A.jpg", alt: "Kiln in operation — placeholder photograph" },
      { src: "https://i.postimg.cc/hG3Lcwjc/E9ACE7A0-8F0E-4555-AD36-6EB8581D2A5A.jpg", alt: "Operations crew — placeholder photograph" },
      { src: "https://i.postimg.cc/hG3Lcwjc/E9ACE7A0-8F0E-4555-AD36-6EB8581D2A5A.jpg", alt: "Biochar going back to soil — placeholder photograph" },
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
      { src: "https://i.postimg.cc/Pfy7YfP5/IMG-7828.jpg", alt: "Freshly produced biochar — placeholder photograph" },
      { src: "https://i.postimg.cc/Pfy7YfP5/IMG-7828.jpg", alt: "Field measurement — placeholder photograph" },
      { src: "https://i.postimg.cc/Pfy7YfP5/IMG-7828.jpg", alt: "Site landscape — placeholder photograph" },
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
      { src: "https://i.postimg.cc/mr6YBqrv/8981390D-7A7C-4488-9CD7-89C945C51CFB.jpg", alt: "Biochar going back to soil — placeholder photograph" },
      { src: "https://i.postimg.cc/mr6YBqrv/8981390D-7A7C-4488-9CD7-89C945C51CFB.jpg", alt: "Operations crew — placeholder photograph" },
      { src: "https://i.postimg.cc/mr6YBqrv/8981390D-7A7C-4488-9CD7-89C945C51CFB.jpg", alt: "Kiln in operation — placeholder photograph" },
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
      { src: "https://i.postimg.cc/d3pJ5tSv/Homepage-Slider3-Farmers2.png", alt: "Field measurement — placeholder photograph" },
      { src: "https://i.postimg.cc/d3pJ5tSv/Homepage-Slider3-Farmers2.png", alt: "Site landscape — placeholder photograph" },
      { src: "https://i.postimg.cc/d3pJ5tSv/Homepage-Slider3-Farmers2.png", alt: "Operations crew — placeholder photograph" },
    ],
  },
];