import { webLogger } from "@/otel/web/webLogger";
import { SeverityNumber } from "@opentelemetry/api-logs";
import React from "react";

const ClientLogExample: React.FC = () => {
  webLogger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: "INFO",
    body: "client component",
  });

  return null;
};

export default ClientLogExample;
