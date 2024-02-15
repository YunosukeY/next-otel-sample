import { onCLS, onFID, onLCP } from "web-vitals";
import { webMeter } from "./webMeter";

const recordLCP = () => {
  const lcpHistogram = webMeter.createHistogram("lcp");
  onLCP((metric) => lcpHistogram.record(metric.value));
};

const recordFID = () => {
  const fidHistogram = webMeter.createHistogram("fid");
  onFID((metric) => fidHistogram.record(metric.value));
};

const recordCLS = () => {
  const clsHistogram = webMeter.createHistogram("cls");
  onCLS((metric) => clsHistogram.record(metric.value));
};

export const recordWebVitalMetrics = () => {
  recordLCP();
  recordFID();
  recordCLS();
};
