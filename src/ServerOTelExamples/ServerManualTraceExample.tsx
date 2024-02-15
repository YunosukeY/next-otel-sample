import { nodeTracer } from "@/otel/node/nodeTracer";
import React from "react";

const ServerManualTraceExample: React.FC = async () => {
  const span = nodeTracer.startSpan("server manual span");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  span.end();

  return null;
};

export default ServerManualTraceExample;
