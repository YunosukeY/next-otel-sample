import { webMeter } from "./webMeter";

const recordWidth = () => {
  const widthHistogram = webMeter.createHistogram("width");
  widthHistogram.record(innerWidth);
};

const recordHeight = () => {
  const heightHistogram = webMeter.createHistogram("height");
  heightHistogram.record(innerHeight);
};

export const recordWindowMetrics = () => {
  recordWidth();
  recordHeight();
};
