import { webMeter } from "@/otel/web/webMeter";
import React, { useEffect } from "react";
import { onCLS, onFID, onLCP } from "web-vitals";

const ClientMetricsExample: React.FC = () => {
  useEffect(() => {
    const lcpHistogram = webMeter.createHistogram("lcp");
    onLCP((metric) => lcpHistogram.record(metric.value));

    const fidHistogram = webMeter.createHistogram("fid");
    onFID((metric) => fidHistogram.record(metric.value));

    const clsHistogram = webMeter.createHistogram("cls");
    onCLS((metric) => clsHistogram.record(metric.value));
  }, []);

  return null;
};

export default ClientMetricsExample;
