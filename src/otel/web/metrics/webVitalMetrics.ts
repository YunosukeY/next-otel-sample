import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from "web-vitals";
import { webMeter } from "./webMeter";

const recordCLS = () => {
  const clsHistogram = webMeter.createHistogram("cls");
  onCLS((metric) => clsHistogram.record(metric.value));
};

const recordFCP = () => {
  const fcpHistogram = webMeter.createHistogram("fcp");
  onFCP((metric) => fcpHistogram.record(metric.value));
};

const recordFID = () => {
  const fidHistogram = webMeter.createHistogram("fid");
  onFID((metric) => fidHistogram.record(metric.value));
};

const recordINP = () => {
  const inpHistogram = webMeter.createHistogram("inp");
  onINP((metric) => inpHistogram.record(metric.value));
};

const recordLCP = () => {
  const lcpHistogram = webMeter.createHistogram("lcp");
  onLCP((metric) => lcpHistogram.record(metric.value));
};

const recordTTFB = () => {
  const ttfbHistogram = webMeter.createHistogram("ttfb");
  onTTFB((metric) => ttfbHistogram.record(metric.value));
};

export const recordWebVitalMetrics = () => {
  recordCLS();
  recordFCP();
  recordFID();
  recordINP();
  recordLCP();
  recordTTFB();
};
