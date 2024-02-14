import { Meter } from "@opentelemetry/api";

const recordWidth = (webMeter: Meter) => {
  const widthHistogram = webMeter.createHistogram("width");
  widthHistogram.record(innerWidth);
};

const recordHeight = (webMeter: Meter) => {
  const heightHistogram = webMeter.createHistogram("height");
  heightHistogram.record(innerHeight);
};

export const recordWindowMetrics = (webMeter: Meter) => {
  recordWidth(webMeter);
  recordHeight(webMeter);
};
