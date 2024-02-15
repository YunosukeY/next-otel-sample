import { recordWebVitalMetrics } from "@/otel/web/metrics/webVitalMetrics";
import React, { useEffect } from "react";

const ClientMetricsExample: React.FC = () => {
  useEffect(() => {
    recordWebVitalMetrics();
  }, []);

  return null;
};

export default ClientMetricsExample;
