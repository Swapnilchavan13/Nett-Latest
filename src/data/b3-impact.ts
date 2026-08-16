/**
 * B3 deployment metrics.
 *
 * Only verified figures belong here. `PENDING_METRICS` reserves layout space
 * for acreage / quantity / villages / districts — fill `value` when the
 * verified number is available and it will render automatically.
 */
export type Metric = { value: string; label: string; note?: string };

export const HEADLINE_METRIC: Metric = {
  value: "2,000+",
  label: "Farmers",
  note: "2026 rice season",
};

export const PENDING_METRICS: Metric[] = [
  { value: "", label: "Acres" },
  { value: "", label: "Tonnes of B3" },
  { value: "", label: "Villages" },
  { value: "", label: "Districts" },
];