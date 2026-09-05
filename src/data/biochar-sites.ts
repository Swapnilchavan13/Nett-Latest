import siteA from "@/assets/s3-site-a.jpg";
import siteB from "@/assets/s3-site-b.jpg";
import siteC from "@/assets/s3-site-c.jpg";
import kiln from "@/assets/s3-kiln-hero.jpg";
import biocharSoil from "@/assets/s3-biochar-soil.jpg";
import mrv from "@/assets/s3-mrv.jpg";

export type BiocharSite = {
  /** Verified site name. */
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

export const BIOCHAR_SITES: BiocharSite[] = [
  {
    name: "Rajgarh",
    place: "Rajgarh",
    state: "Himachal Pradesh",
    biomass: "Orchard prunings",
    co2Removed: "—",
    about:
      "We are creating biochar using orchard prunings from over 100,000 trees — which were earlier getting burnt — transforming agricultural waste into a powerful carbon sequestration tool.",
    gallery: [
      {
        src: "https://eu-images.contentstack.com/v3/assets/bltdd43779342bd9107/blt9cbd08a1517cb5bd/63909a4104eb377682c5424e/1biochar-medium_0.jpg",
        alt: "Biochar production from orchard prunings in Rajgarh",
      },
      {
        src: "https://iili.io/q5D0wVs.jpg",
        alt: "Freshly produced biochar in Rajgarh",
      },
      {
        src: "https://iili.io/q5D0eff.jpg",
        alt: "Orchard landscape in Rajgarh",
      },
    ],
  },
  {
    name: "Sitamarhi",
    place: "Sitamarhi",
    state: "Uttar Pradesh",
    biomass: "Mustard stalks",
    co2Removed: "—",
    about:
      "In the vast tracts between Prayagraj and Varanasi, mustard stalks are burnt across hundreds of acres. Our project works with farmers to convert this biomass into high-quality biochar that is returned to the soil.",
    gallery: [
      {
        src: "https://iili.io/q5thJR4.jpg",
        alt: "Mustard stalk biochar project in Sitamarhi",
      },
      {
        src: "https://iili.io/q5thJR4.jpg",
        alt: "Biochar production operations in Sitamarhi",
      },
      {
        src: "https://i.postimg.cc/9MtnxCbb/IMG-7221.jpg",
        alt: "Freshly produced biochar in Sitamarhi",
      },
    ],
  },
  {
    name: "Bandhavgarh",
    place: "Bandhavgarh",
    state: "Madhya Pradesh",
    biomass: "Invasive species and rice straw",
    co2Removed: "—",
    about:
      "We are converting invasive species and rice straw into biochar for the last 2 years. We've covered nearly 10,000 farmers and prevented over 200,000 kgs of rice straw from being burnt.",
    gallery: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFeKXMVsBTv-Hi51LoLYN-6sL_BS6bKOICbpLBZ5yLUuwLDFa6Kc5Jxw&s=10",
        alt: "Biochar kiln operations in Bandhavgarh",
      },
      {
        src: "https://i.postimg.cc/k5hQqZ4r/why-bandhavgarh-national-park-banner-img.jpg",
        alt: "Biochar project operations in Bandhavgarh",
      },
      {
        src: "https://i.postimg.cc/mr6YBqrv/8981390D-7A7C-4488-9CD7-89C945C51CFB.jpg",
        alt: "Biochar being returned to soil in Bandhavgarh",
      },
    ],
  },
  {
    name: "Damoh",
    place: "Damoh",
    state: "Madhya Pradesh",
    biomass: "Rice straw",
    co2Removed: "—",
    about:
      "We are converting rice straw into biochar and working with a cooperative of over 20,000 farmers. This year, we will prevent 300,000 kgs of rice straw from being burnt.",
    gallery: [
      {
        src: "https://i.postimg.cc/hG3Lcwjc/E9ACE7A0-8F0E-4555-AD36-6EB8581D2A5A.jpg",
        alt: "Rice straw biochar project in Damoh",
      },
      {
        src: "https://i.postimg.cc/hG3Lcwjc/E9ACE7A0-8F0E-4555-AD36-6EB8581D2A5A.jpg",
        alt: "Biochar production operations in Damoh",
      },
      {
        src: "https://iili.io/qcZWQ6l.jpg",
        alt: "Field implementation in Damoh",
      },
    ],
  },
];