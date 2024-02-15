"use client";

import React, { useEffect, useState } from "react";
import { action } from "../server/action";
import { callWithSpan } from "@/otel/web/traces/callWithSpan";
import { recordWebVitalMetrics } from "@/otel/web/metrics/webVitalMetrics";
import { recordWindowMetrics } from "@/otel/web/metrics/windowMetrics";
import { webLogger } from "@/otel/web/webLogger";
import { SeverityNumber } from "@opentelemetry/api-logs";

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
    callWithSpan(f).then((data) => setData(data));
  }, []);

  useEffect(() => {
    recordWebVitalMetrics();
    recordWindowMetrics();
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
