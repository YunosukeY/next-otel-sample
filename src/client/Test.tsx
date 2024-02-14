"use client";

import React, { useEffect, useState } from "react";
import { action } from "../server/action";
import { callWithSpan } from "@/otel/web/trace/callWithSpan";
import { shutdownMeterProvider } from "@/otel/both/metrics/shutdownMeterProvider";
import { getMeterFor } from "@/otel/both/metrics/getMeterFor";
import { recordWebVitalMetrics } from "@/otel/web/metrics/webVitalMetrics";
import { recordWindowMetrics } from "@/otel/web/metrics/windowMetrics";
import { logger } from "@/otel/both/logs/logger";

const f = async () => {
  const res = await fetch("https://example.com/", {
    method: "GET",
    mode: "no-cors",
  });
  const data = await res.text();
  return data;
};

const Test: React.FC = () => {
  logger.info("client component");
  const [data, setData] = useState<string>();
  useEffect(() => {
    callWithSpan(f).then((data) => setData(data));
  }, []);

  useEffect(() => {
    const webMeter = getMeterFor("web");
    recordWebVitalMetrics(webMeter);
    recordWindowMetrics(webMeter);
    return () => {
      shutdownMeterProvider();
    };
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
