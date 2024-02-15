import { webTracer } from "@/otel/web/traces/webTracer";
import { context, trace } from "@opentelemetry/api";
import React, { useEffect } from "react";

const ClientFetchTraceExample: React.FC = () => {
  useEffect(() => {
    const span = webTracer.startSpan("callWithSpan");
    context.with(trace.setSpan(context.active(), span), async () => {
      await fetch("https://example.com/", {
        method: "GET",
        mode: "no-cors",
      });
      span.end();
    });
  }, []);

  return null;
};

export default ClientFetchTraceExample;
