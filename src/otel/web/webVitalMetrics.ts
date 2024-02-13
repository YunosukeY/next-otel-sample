import { Meter } from "@opentelemetry/api";
import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from "web-vitals";

const recordCLS = (webMeter: Meter) => {
  const clsHistogram = webMeter.createHistogram("cls");
  onCLS((metric) => clsHistogram.record(metric.value));
};

const recordFCP = (webMeter: Meter) => {
  const fcpHistogram = webMeter.createHistogram("fcp");
  onFCP((metric) => fcpHistogram.record(metric.value));
};

const recordFID = (webMeter: Meter) => {
  const fidHistogram = webMeter.createHistogram("fid");
  onFID((metric) => fidHistogram.record(metric.value));
};

const recordINP = (webMeter: Meter) => {
  const inpHistogram = webMeter.createHistogram("inp");
  onINP((metric) => inpHistogram.record(metric.value));
};

const recordLCP = (webMeter: Meter) => {
  const lcpHistogram = webMeter.createHistogram("lcp");
  onLCP((metric) => lcpHistogram.record(metric.value));
};

const recordTTFB = (webMeter: Meter) => {
  const ttfbHistogram = webMeter.createHistogram("ttfb");
  onTTFB((metric) => ttfbHistogram.record(metric.value));
};

export const recordWebVitalMetrics = (webMeter: Meter) => {
  recordCLS(webMeter);
  recordFCP(webMeter);
  recordFID(webMeter);
  recordINP(webMeter);
  recordLCP(webMeter);
  recordTTFB(webMeter);
};
