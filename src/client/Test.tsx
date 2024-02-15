"use client";

import React, { useEffect, useState } from "react";
import { action } from "../server/action";
import { recordWebVitalMetrics } from "@/otel/web/metrics/webVitalMetrics";
import { webLogger } from "@/otel/web/webLogger";
import { SeverityNumber } from "@opentelemetry/api-logs";
import { webTracer } from "@/otel/web/traces/webTracer";
import { context, trace } from "@opentelemetry/api";

const f = async () => {
  const res = await fetch("https://example.com/", {
    method: "GET",
    mode: "no-cors",
  });
  const data = await res.text();
  return data;
};

const Test: React.FC = () => {
  webLogger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: "INFO",
    body: "client component",
  });

  const [data, setData] = useState<string>();
  useEffect(() => {
    const span = webTracer.startSpan("callWithSpan");
    context
      .with(trace.setSpan(context.active(), span), async () => {
        const output = await f();
        span.end();
        return output;
      })
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    recordWebVitalMetrics();
  }, []);

  return (
    <div>
      {data}
      <button onClick={() => action()}>
        server action in client component
      </button>
    </div>
  );
};

export default Test;
