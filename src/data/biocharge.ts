/**
 * BioCharge Damoh operating metrics.
 *
 * Only verified figures belong here. Entries with an empty `value` are
 * reserved layout slots — fill `value` when the verified number is
 * available and it renders automatically.
 */
export type Metric = { value: string; label: string; note?: string };

export const DAMOH_METRICS: Metric[] = [
  { value: "50,000–70,000", label: "Tonnes", note: "Annual biomass supply potential" },
  { value: "4,000", label: "Farmers", note: "Connected / target network" },
  { value: "Multiple", label: "Biomass types", note: "Including rice and corn residues" },
];

export const DAMOH_PENDING: Metric[] = [
  { value: "", label: "Storage capacity" },
  { value: "", label: "Processing capacity / day" },
  { value: "", label: "GCV range" },
  { value: "", label: "Target moisture" },
  { value: "", label: "Industrial customers" },
];