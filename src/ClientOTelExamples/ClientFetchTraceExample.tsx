import { webTracer } from "@/otel/web/traces/webTracer";
import { context, trace } from "@opentelemetry/api";
import React, { useEffect } from "react";

const f = async () => {
  const res = await fetch("https://example.com/", {
    method: "GET",
    mode: "no-cors",
  });
  const data = await res.text();
  return data;
};

const ClientFetchTraceExample: React.FC = () => {
  useEffect(() => {
    const span = webTracer.startSpan("callWithSpan");
    context.with(trace.setSpan(context.active(), span), async () => {
      const output = await f();
      span.end();
      return output;
    });
  }, []);

  return null;
};

export default ClientFetchTraceExample;
