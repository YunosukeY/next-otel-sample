"use client";

import React, { useEffect, useState } from "react";
import { action } from "../server/action";
import { callWithSpan } from "@/otel/web/callWithSpan";
import { shutdownMeterProvider } from "@/otel/both/shutdownMeterProvider";
import { getWebMeter } from "@/otel/web/meter";
import { recordWebVitalMetrics } from "@/otel/web/webVitalMetrics";
import { recordWindowMetrics } from "@/otel/web/windowMetrics";

const f = async () => {
  console.log("client fetch");
  const res = await fetch("https://example.com/", {
    method: "GET",
    mode: "no-cors",
  });
  const data = await res.text();
  return data;
};

const Test: React.FC = () => {
  const [data, setData] = useState<string>();
  useEffect(() => {
    callWithSpan(f).then((data) => setData(data));
  }, []);

  useEffect(() => {
    const webMeter = getWebMeter();
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
