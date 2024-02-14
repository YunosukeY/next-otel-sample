"use client";

import { metrics } from "@opentelemetry/api";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import {
  MeterProvider,
  PeriodicExportingMetricReader,
} from "@opentelemetry/sdk-metrics";
import { webResource } from "../webResource";

const meterProvider = new MeterProvider({
  resource: webResource,
  readers: [
    new PeriodicExportingMetricReader({
      exporter: new OTLPMetricExporter({ url: "/api/metrics" }),
      exportIntervalMillis: 1000,
    }),
  ],
});
metrics.setGlobalMeterProvider(meterProvider);

export const webMeter = metrics.getMeter("app");
