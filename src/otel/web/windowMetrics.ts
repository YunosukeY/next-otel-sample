import { Meter } from "@opentelemetry/api";

export const recordWidth = (webMeter: Meter) => {
  const widthHistogram = webMeter.createHistogram("width");
  console.log("recordWidth");
  widthHistogram.record(innerWidth);
};

export const recordHeight = (webMeter: Meter) => {
  const heightHistogram = webMeter.createHistogram("height");
  heightHistogram.record(innerHeight);
};
