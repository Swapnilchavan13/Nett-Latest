import { createFileRoute } from "@tanstack/react-router";
import { StateSystems } from "@/components/section1/StateSystems";
import { StateThesis } from "@/components/section1/StateThesis";
import { StatePathway } from "@/components/section1/StatePathway";
import { StateReturn } from "@/components/section1/StateReturn";
import { StateOutcomes } from "@/components/section1/StateOutcomes";
import { StateClosing } from "@/components/section1/StateClosing";
import { BiomassOpening } from "@/components/section2/BiomassOpening";
import { CollectionEngine } from "@/components/section2/CollectionEngine";
import { MaterialStrip } from "@/components/section2/MaterialStrip";
import { BiomassPayoff } from "@/components/section2/BiomassPayoff";
import { BiocharOpening } from "@/components/section3/BiocharOpening";
import { BiocharIntegrity } from "@/components/section3/BiocharIntegrity";
import { BiocharDestination } from "@/components/section3/BiocharDestination";
import { BiocharSites } from "@/components/section3/BiocharSites";
import { BiocharClose } from "@/components/section3/BiocharClose";
import { B3Problem } from "@/components/section4/B3Problem";
import { B3Composition } from "@/components/section4/B3Composition";
import { B3Process } from "@/components/section4/B3Process";
import { B3Women } from "@/components/section4/B3Women";
import { B3Field } from "@/components/section4/B3Field";
import { B3Journey } from "@/components/section4/B3Journey";
import { BioChargeOpening } from "@/components/section5/BioChargeOpening";
import { BioChargeVariables } from "@/components/section5/BioChargeVariables";
import { BioChargeSystem } from "@/components/section5/BioChargeSystem";
import { BioChargeDamoh } from "@/components/section5/BioChargeDamoh";
import { BioChargeNumbers } from "@/components/section5/BioChargeNumbers";
import { BioChargeValue } from "@/components/section5/BioChargeValue";
import { InterventionOpening } from "@/components/section6/InterventionOpening";
import { InterventionPathways } from "@/components/section6/InterventionPathways";
import { InterventionSystem } from "@/components/section6/InterventionSystem";
import { InterventionClose } from "@/components/section6/InterventionClose";
import { TeamSection } from "@/components/section7/TeamSection";
import { ContactSection } from "@/components/section8/ContactSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const title = "NettZero — The Carbon Placement Problem";
const description =
  "The world doesn't just have a carbon problem. It has a carbon placement problem: too much in the atmosphere, too little in the soil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-atmosphere">
      <SiteHeader />
      <h1 className="sr-only">
        NettZero — intercepting neglected carbon and returning it to the soil
      </h1>
      <div id="section-1-carbon" className="scroll-mt-16">
        <StateSystems />
      </div>
      <StateThesis />
      <StatePathway />
      <StateReturn />
      <StateOutcomes />
      <StateClosing />
      <BiomassOpening />
      <CollectionEngine />
      <MaterialStrip />
      <BiomassPayoff />
      <BiocharOpening />
      <BiocharIntegrity />
      <BiocharDestination />
      <BiocharSites />
      <BiocharClose />
      <B3Problem />
      <B3Composition />
      <B3Process />
      <B3Women />
      <B3Field />
      <B3Journey />
      <BioChargeOpening />
      <BioChargeVariables />
      <BioChargeSystem />
      <BioChargeDamoh />
      <BioChargeNumbers />
      <BioChargeValue />
      <div id="section-6-intervention" className="scroll-mt-16">
        <InterventionOpening />
      </div>
      <InterventionPathways />
      <InterventionSystem />
      <InterventionClose />
      <TeamSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
