import { nodeLogger } from "@/otel/node/nodeLogger";
import { SeverityNumber } from "@opentelemetry/api-logs";
import React from "react";

const ServerLogExample: React.FC = () => {
  nodeLogger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: "INFO",
    body: "server component",
  });

  return null;
};

export default ServerLogExample;
