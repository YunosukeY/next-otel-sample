import { observeOsMetrics } from "@/otel/node/metrics/osMetrics";
import React from "react";

const ServerMetricsExample: React.FC = () => {
  observeOsMetrics();

  return null;
};

export default ServerMetricsExample;
