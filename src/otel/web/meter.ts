"use client";

import {
  DiagConsoleLogger,
  DiagLogLevel,
  diag,
  metrics,
} from "@opentelemetry/api";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import {
  MeterProvider,
  PeriodicExportingMetricReader,
} from "@opentelemetry/sdk-metrics";

// Optional and only needed to see the internal diagnostic logging (during development)
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

// コールバックにしないとなぜかサーバー側で生成される
// サーバー側でも動作するのでServer Actionsでも良い
export const getWebMeter = () => {
  const meterProvider = new MeterProvider();
  metrics.setGlobalMeterProvider(meterProvider);

  meterProvider.addMetricReader(
    new PeriodicExportingMetricReader({
      exporter: new OTLPMetricExporter({ url: "/api/metrics" }),
      exportIntervalMillis: 1000,
    })
  );

  return meterProvider.getMeter("example-exporter-collector");
};
